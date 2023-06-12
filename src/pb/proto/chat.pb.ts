/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "chat";

export enum chatEventType {
  EMIT_MESSAGE = 0,
  RECEIVE = 1,
  UNRECOGNIZED = -1,
}

export function chatEventTypeFromJSON(object: any): chatEventType {
  switch (object) {
    case 0:
    case "EMIT_MESSAGE":
      return chatEventType.EMIT_MESSAGE;
    case 1:
    case "RECEIVE":
      return chatEventType.RECEIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return chatEventType.UNRECOGNIZED;
  }
}

export function chatEventTypeToJSON(object: chatEventType): string {
  switch (object) {
    case chatEventType.EMIT_MESSAGE:
      return "EMIT_MESSAGE";
    case chatEventType.RECEIVE:
      return "RECEIVE";
    case chatEventType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum StatusCode {
  SUCCESS = 0,
  FAIL = 1,
  NOT_FOUND = 2,
  UNRECOGNIZED = -1,
}

export function statusCodeFromJSON(object: any): StatusCode {
  switch (object) {
    case 0:
    case "SUCCESS":
      return StatusCode.SUCCESS;
    case 1:
    case "FAIL":
      return StatusCode.FAIL;
    case 2:
    case "NOT_FOUND":
      return StatusCode.NOT_FOUND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StatusCode.UNRECOGNIZED;
  }
}

export function statusCodeToJSON(object: StatusCode): string {
  switch (object) {
    case StatusCode.SUCCESS:
      return "SUCCESS";
    case StatusCode.FAIL:
      return "FAIL";
    case StatusCode.NOT_FOUND:
      return "NOT_FOUND";
    case StatusCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SendEmitPayload {
  requestId: string;
  message: string;
  eventType: chatEventType;
}

export interface ReceivePayload {
  requestId: string;
  message: string;
  /** StatusCode status = 4; */
  eventType: chatEventType;
}

function createBaseSendEmitPayload(): SendEmitPayload {
  return { requestId: "", message: "", eventType: 0 };
}

export const SendEmitPayload = {
  encode(message: SendEmitPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.eventType !== 0) {
      writer.uint32(24).int32(message.eventType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SendEmitPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendEmitPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.eventType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SendEmitPayload {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      message: isSet(object.message) ? String(object.message) : "",
      eventType: isSet(object.eventType) ? chatEventTypeFromJSON(object.eventType) : 0,
    };
  },

  toJSON(message: SendEmitPayload): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.message !== undefined && (obj.message = message.message);
    message.eventType !== undefined && (obj.eventType = chatEventTypeToJSON(message.eventType));
    return obj;
  },

  create<I extends Exact<DeepPartial<SendEmitPayload>, I>>(base?: I): SendEmitPayload {
    return SendEmitPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SendEmitPayload>, I>>(object: I): SendEmitPayload {
    const message = createBaseSendEmitPayload();
    message.requestId = object.requestId ?? "";
    message.message = object.message ?? "";
    message.eventType = object.eventType ?? 0;
    return message;
  },
};

function createBaseReceivePayload(): ReceivePayload {
  return { requestId: "", message: "", eventType: 0 };
}

export const ReceivePayload = {
  encode(message: ReceivePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestId !== "") {
      writer.uint32(10).string(message.requestId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.eventType !== 0) {
      writer.uint32(24).int32(message.eventType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReceivePayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceivePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.eventType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReceivePayload {
    return {
      requestId: isSet(object.requestId) ? String(object.requestId) : "",
      message: isSet(object.message) ? String(object.message) : "",
      eventType: isSet(object.eventType) ? chatEventTypeFromJSON(object.eventType) : 0,
    };
  },

  toJSON(message: ReceivePayload): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.message !== undefined && (obj.message = message.message);
    message.eventType !== undefined && (obj.eventType = chatEventTypeToJSON(message.eventType));
    return obj;
  },

  create<I extends Exact<DeepPartial<ReceivePayload>, I>>(base?: I): ReceivePayload {
    return ReceivePayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReceivePayload>, I>>(object: I): ReceivePayload {
    const message = createBaseReceivePayload();
    message.requestId = object.requestId ?? "";
    message.message = object.message ?? "";
    message.eventType = object.eventType ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
