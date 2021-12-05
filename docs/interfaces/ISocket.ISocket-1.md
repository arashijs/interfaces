[@arashi/interfaces - v1.2.1](../README.md) / [Exports](../modules.md) / [ISocket](../modules/ISocket.md) / ISocket

# Interface: ISocket<TSocketAPI\>

[ISocket](../modules/ISocket.md).ISocket

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSocketAPI` | extends [`ISocketAPI`](ISocketAPI.ISocketAPI-1.md) |

## Table of contents

### Methods

- [connect](ISocket.ISocket-1.md#connect)
- [disconnect](ISocket.ISocket-1.md#disconnect)
- [getID](ISocket.ISocket-1.md#getid)
- [isConnected](ISocket.ISocket-1.md#isconnected)
- [resendPackets](ISocket.ISocket-1.md#resendpackets)
- [send](ISocket.ISocket-1.md#send)
- [setSocket](ISocket.ISocket-1.md#setsocket)

## Methods

### connect

▸ **connect**(`host`, `port`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |
| `port` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[ISocket.ts:9](https://github.com/arashijs/interfaces/blob/0089507/src/ISocket.ts#L9)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[ISocket.ts:11](https://github.com/arashijs/interfaces/blob/0089507/src/ISocket.ts#L11)

___

### getID

▸ **getID**(): `string`

#### Returns

`string`

#### Defined in

[ISocket.ts:7](https://github.com/arashijs/interfaces/blob/0089507/src/ISocket.ts#L7)

___

### isConnected

▸ **isConnected**(): `boolean`

#### Returns

`boolean`

#### Defined in

[ISocket.ts:6](https://github.com/arashijs/interfaces/blob/0089507/src/ISocket.ts#L6)

___

### resendPackets

▸ **resendPackets**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[ISocket.ts:10](https://github.com/arashijs/interfaces/blob/0089507/src/ISocket.ts#L10)

___

### send

▸ **send**<`TPacketResponse`\>(`packet`): `Promise`<`TPacketResponse`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TPacketResponse` | extends [`IPacket`](IPacket.IPacket-1.md)<`any`, `any`, `TPacketResponse`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`IPacket`](IPacket.IPacket-1.md)<`any`, `any`\> |

#### Returns

`Promise`<`TPacketResponse`\>

#### Defined in

[ISocket.ts:12](https://github.com/arashijs/interfaces/blob/0089507/src/ISocket.ts#L12)

___

### setSocket

▸ **setSocket**(`socket`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `TSocketAPI` |

#### Returns

`void`

#### Defined in

[ISocket.ts:8](https://github.com/arashijs/interfaces/blob/0089507/src/ISocket.ts#L8)
