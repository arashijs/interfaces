[@arashi/interfaces - v1.0.0](../README.md) / [Exports](../modules.md) / [IServerAPI](../modules/IServerAPI.md) / IServerAPI

# Interface: IServerAPI<TSocketAPI\>

[IServerAPI](../modules/IServerAPI.md).IServerAPI

## Type parameters

| Name | Type |
| :------ | :------ |
| `TSocketAPI` | extends [`ISocketAPI`](ISocketAPI.ISocketAPI-1.md) |

## Table of contents

### Methods

- [address](IServerAPI.IServerAPI-1.md#address)
- [close](IServerAPI.IServerAPI-1.md#close)
- [listen](IServerAPI.IServerAPI-1.md#listen)
- [on](IServerAPI.IServerAPI-1.md#on)
- [once](IServerAPI.IServerAPI-1.md#once)

## Methods

### address

▸ **address**(): [`IAddressInfo`](../modules/IServerAPI.md#iaddressinfo)

#### Returns

[`IAddressInfo`](../modules/IServerAPI.md#iaddressinfo)

#### Defined in

[IServerAPI.ts:20](https://github.com/arashijs/interfaces/blob/5879487/src/IServerAPI.ts#L20)

___

### close

▸ **close**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`ICloseCallback`](../modules/ICloseCallback.md#iclosecallback) |

#### Returns

`void`

#### Defined in

[IServerAPI.ts:21](https://github.com/arashijs/interfaces/blob/5879487/src/IServerAPI.ts#L21)

___

### listen

▸ **listen**(`port`, `host`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `host` | `string` |
| `callback` | [`IListenCallack`](../modules/IServerAPI.md#ilistencallack) |

#### Returns

`void`

#### Defined in

[IServerAPI.ts:19](https://github.com/arashijs/interfaces/blob/5879487/src/IServerAPI.ts#L19)

___

### on

▸ **on**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `callback` | [`IConnectionCallback`](../modules/IServerAPI.md#iconnectioncallback)<`TSocketAPI`\> |

#### Returns

`void`

#### Defined in

[IServerAPI.ts:23](https://github.com/arashijs/interfaces/blob/5879487/src/IServerAPI.ts#L23)

___

### once

▸ **once**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `callback` | [`IConnectionCallback`](../modules/IServerAPI.md#iconnectioncallback)<`TSocketAPI`\> |

#### Returns

`void`

#### Defined in

[IServerAPI.ts:24](https://github.com/arashijs/interfaces/blob/5879487/src/IServerAPI.ts#L24)
