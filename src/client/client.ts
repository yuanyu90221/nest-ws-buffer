import { WebSocket } from 'ws';
import {
  SendEmitPayload,
  ReceivePayload,
  chatEventType,
} from '../pb/proto/chat.pb';
const main = () => {
  const ws = new WebSocket('ws://localhost:3000/chat', {
    origin: 'http://localhost:3000',
    path: '/chat',
  });
  ws.on('open', () => {
    console.log('connected');
    // console.log(data);
  });
  ws.on('message', (data) => {
    const message = ReceivePayload.decode(data as Uint8Array);
    console.log('client received:', message);
    ws.send(
      SendEmitPayload.encode({
        requestId: message.requestId,
        message: 'hello from client',
        eventType: chatEventType.EMIT_MESSAGE,
      }).finish(),
    );
  });
  ws.on('close', () => {
    console.log('close');
  });
  setTimeout(() => {
    ws.close();
  }, 10000);
};

main();
