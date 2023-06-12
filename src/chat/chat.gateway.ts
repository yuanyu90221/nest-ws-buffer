import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
// import { Socket } from 'socket.io';
import { WebSocket, Server } from 'ws';
import {
  SendEmitPayload,
  ReceivePayload,
  chatEventType,
} from '../pb/proto/chat.pb';
@WebSocketGateway({ path: '/chat' })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger: Logger = new Logger(ChatGateway.name);
  handleDisconnect(client: WebSocket) {
    // client
    client.close();
  }
  handleConnection(client: WebSocket, ...args: any[]) {
    // throw new Error('Method not implemented.');
    // this.logger.log({ client: client.eventNames });
    client.send(
      SendEmitPayload.encode({
        requestId: Date.now().toString(),
        message: 'hello from server 2',
        eventType: chatEventType.EMIT_MESSAGE,
      }).finish(),
    );
    client.on('message', (data: any) => {
      const message = ReceivePayload.decode(data as Uint8Array);
      this.logger.log(message);
    });
  }
  afterInit(server: Server) {
    this.logger.log({ message: 'websocket init' });
  }

  @WebSocketServer()
  wss: Server;
}
