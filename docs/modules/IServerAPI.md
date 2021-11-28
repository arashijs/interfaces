[@arashi/interfaces - v1.0.0](../README.md) / [Exports](../modules.md) / IServerAPI

# Module: IServerAPI

## Table of contents

### Interfaces

- [IAddressInfoData](../interfaces/IServerAPI.IAddressInfoData.md)
- [IServerAPI](../interfaces/IServerAPI.IServerAPI-1.md)

### Type aliases

- [IAddressInfo](IServerAPI.md#iaddressinfo)
- [IConnectionCallback](IServerAPI.md#iconnectioncallback)
- [IListenCallack](IServerAPI.md#ilistencallack)

## Type aliases

### IAddressInfo

Ƭ **IAddressInfo**: [`IAddressInfoData`](../interfaces/IServerAPI.IAddressInfoData.md) \| `string`

#### Defined in

[IServerAPI.ts:16](https://github.com/arashijs/interfaces/blob/5879487/src/IServerAPI.ts#L16)

___

### IConnectionCallback

Ƭ **IConnectionCallback**<`TSocketAPI`\>: (`socket`: `TSocketAPI`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TSocketAPI` | extends [`ISocketAPI`](../interfaces/ISocketAPI.ISocketAPI-1.md) |

#### Type declaration

▸ (`socket`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `TSocketAPI` |

##### Returns

`void`

#### Defined in

[IServerAPI.ts:8](https://github.com/arashijs/interfaces/blob/5879487/src/IServerAPI.ts#L8)

___

### IListenCallack

Ƭ **IListenCallack**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[IServerAPI.ts:7](https://github.com/arashijs/interfaces/blob/5879487/src/IServerAPI.ts#L7)
