# nest-ws-buffer

This repository is a example for websocket adapter for use protobuf

## pre install

```shell
yarn add @nestjs/websockets ws
yarn add -D ts-proto
```

## use protoc to generate bundle.pb.js

```shell
protoc --plugin=node_modules/ts-proto/protoc-gen-ts_proto src/proto/*.proto -I=src  --ts_proto_out=src/pb --ts_proto_opt=fileSuffix=.pb
```