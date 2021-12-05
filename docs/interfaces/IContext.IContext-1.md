[@arashi/interfaces - v1.2.1](../README.md) / [Exports](../modules.md) / [IContext](../modules/IContext.md) / IContext

# Interface: IContext

[IContext](../modules/IContext.md).IContext

## Table of contents

### Methods

- [getID](IContext.IContext-1.md#getid)
- [getPacket](IContext.IContext-1.md#getpacket)
- [reject](IContext.IContext-1.md#reject)
- [resolve](IContext.IContext-1.md#resolve)
- [retry](IContext.IContext-1.md#retry)

## Methods

### getID

▸ **getID**(): `string`

#### Returns

`string`

#### Defined in

[IContext.ts:5](https://github.com/arashijs/interfaces/blob/0089507/src/IContext.ts#L5)

___

### getPacket

▸ **getPacket**(): [`IPacket`](IPacket.IPacket-1.md)<`any`, `any`\>

#### Returns

[`IPacket`](IPacket.IPacket-1.md)<`any`, `any`\>

#### Defined in

[IContext.ts:6](https://github.com/arashijs/interfaces/blob/0089507/src/IContext.ts#L6)

___

### reject

▸ **reject**(`e`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[IContext.ts:9](https://github.com/arashijs/interfaces/blob/0089507/src/IContext.ts#L9)

___

### resolve

▸ **resolve**(`packet`): `Promise`<[`IPacket`](IPacket.IPacket-1.md)<`any`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`IPacket`](IPacket.IPacket-1.md)<`any`, `any`\> |

#### Returns

`Promise`<[`IPacket`](IPacket.IPacket-1.md)<`any`, `any`\>\>

#### Defined in

[IContext.ts:8](https://github.com/arashijs/interfaces/blob/0089507/src/IContext.ts#L8)

___

### retry

▸ **retry**(): [`IPacket`](IPacket.IPacket-1.md)<`any`, `any`\>

#### Returns

[`IPacket`](IPacket.IPacket-1.md)<`any`, `any`\>

#### Defined in

[IContext.ts:7](https://github.com/arashijs/interfaces/blob/0089507/src/IContext.ts#L7)
