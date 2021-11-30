[@arashi/interfaces - v1.1.0](../README.md) / [Exports](../modules.md) / [IPacket](../modules/IPacket.md) / IPacket

# Interface: IPacket<TData, TResponsePacket\>

[IPacket](../modules/IPacket.md).IPacket

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `TData` |
| `TResponsePacket` | extends [`IPacket`](IPacket.IPacket-1.md)<`any`, `any`\> \| ``null`` |

## Table of contents

### Methods

- [getData](IPacket.IPacket-1.md#getdata)
- [getID](IPacket.IPacket-1.md#getid)
- [getName](IPacket.IPacket-1.md#getname)
- [getNodeID](IPacket.IPacket-1.md#getnodeid)
- [getRawData](IPacket.IPacket-1.md#getrawdata)
- [getResponseID](IPacket.IPacket-1.md#getresponseid)
- [getType](IPacket.IPacket-1.md#gettype)
- [isResponseRequired](IPacket.IPacket-1.md#isresponserequired)
- [send](IPacket.IPacket-1.md#send)
- [serialize](IPacket.IPacket-1.md#serialize)
- [setID](IPacket.IPacket-1.md#setid)
- [setNodeID](IPacket.IPacket-1.md#setnodeid)
- [setResponseID](IPacket.IPacket-1.md#setresponseid)

## Methods

### getData

▸ **getData**(): `TData`

#### Returns

`TData`

#### Defined in

[IPacket.ts:16](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L16)

___

### getID

▸ **getID**(): `string`

#### Returns

`string`

#### Defined in

[IPacket.ts:7](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L7)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Defined in

[IPacket.ts:8](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L8)

___

### getNodeID

▸ **getNodeID**(): `string`

#### Returns

`string`

#### Defined in

[IPacket.ts:12](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L12)

___

### getRawData

▸ **getRawData**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

[IPacket.ts:15](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L15)

___

### getResponseID

▸ **getResponseID**(): `string`

#### Returns

`string`

#### Defined in

[IPacket.ts:14](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L14)

___

### getType

▸ **getType**(): `number`

#### Returns

`number`

#### Defined in

[IPacket.ts:5](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L5)

___

### isResponseRequired

▸ **isResponseRequired**(): `boolean`

#### Returns

`boolean`

#### Defined in

[IPacket.ts:11](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L11)

___

### send

▸ **send**(`socket`): `Promise`<`TResponsePacket`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | [`ISocket`](ISocket.ISocket-1.md)<`any`\> |

#### Returns

`Promise`<`TResponsePacket`\>

#### Defined in

[IPacket.ts:10](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L10)

___

### serialize

▸ **serialize**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

[IPacket.ts:17](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L17)

___

### setID

▸ **setID**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

#### Defined in

[IPacket.ts:6](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L6)

___

### setNodeID

▸ **setNodeID**(`nodeID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeID` | `string` |

#### Returns

`void`

#### Defined in

[IPacket.ts:9](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L9)

___

### setResponseID

▸ **setResponseID**(`repsonseID`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `repsonseID` | `string` |

#### Returns

`void`

#### Defined in

[IPacket.ts:13](https://github.com/arashijs/interfaces/blob/02e44ae/src/IPacket.ts#L13)
