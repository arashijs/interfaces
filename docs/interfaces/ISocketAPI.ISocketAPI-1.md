[@arashi/interfaces - v1.2.0](../README.md) / [Exports](../modules.md) / [ISocketAPI](../modules/ISocketAPI.md) / ISocketAPI

# Interface: ISocketAPI

[ISocketAPI](../modules/ISocketAPI.md).ISocketAPI

## Table of contents

### Methods

- [connect](ISocketAPI.ISocketAPI-1.md#connect)
- [end](ISocketAPI.ISocketAPI-1.md#end)
- [on](ISocketAPI.ISocketAPI-1.md#on)
- [once](ISocketAPI.ISocketAPI-1.md#once)
- [removeAllListeners](ISocketAPI.ISocketAPI-1.md#removealllisteners)
- [removeListener](ISocketAPI.ISocketAPI-1.md#removelistener)
- [write](ISocketAPI.ISocketAPI-1.md#write)

## Methods

### connect

▸ **connect**(`port`, `host`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |
| `host` | `string` |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:27](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L27)

___

### end

▸ **end**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`IEndCallback`](../modules/ISocketAPI.md#iendcallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:28](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L28)

___

### on

▸ **on**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `callback` | [`IDataCallback`](../modules/ISocketAPI.md#idatacallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:17](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L17)

▸ **on**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `callback` | [`ICloseCallback`](../modules/ICloseCallback.md#iclosecallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:18](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L18)

▸ **on**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `callback` | [`IConnectCallback`](../modules/ISocketAPI.md#iconnectcallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:19](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L19)

▸ **on**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `callback` | [`IErrorCallback`](../modules/ISocketAPI.md#ierrorcallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:20](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L20)

___

### once

▸ **once**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `callback` | [`IDataCallback`](../modules/ISocketAPI.md#idatacallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:22](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L22)

▸ **once**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `callback` | [`ICloseCallback`](../modules/ICloseCallback.md#iclosecallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:23](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L23)

▸ **once**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `callback` | [`IConnectCallback`](../modules/ISocketAPI.md#iconnectcallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:24](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L24)

▸ **once**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `callback` | [`IErrorCallback`](../modules/ISocketAPI.md#ierrorcallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:25](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L25)

___

### removeAllListeners

▸ **removeAllListeners**(): `void`

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:11](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L11)

___

### removeListener

▸ **removeListener**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `callback` | [`IConnectCallback`](../modules/ISocketAPI.md#iconnectcallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:12](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L12)

▸ **removeListener**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `callback` | [`IErrorCallback`](../modules/ISocketAPI.md#ierrorcallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:13](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L13)

▸ **removeListener**(`event`, `calback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `calback` | [`ICloseCallback`](../modules/ICloseCallback.md#iclosecallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:14](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L14)

▸ **removeListener**(`event`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `callback` | [`IDataCallback`](../modules/ISocketAPI.md#idatacallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:15](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L15)

___

### write

▸ **write**(`data`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `callback` | [`IWriteCallback`](../modules/ISocketAPI.md#iwritecallback) |

#### Returns

`void`

#### Defined in

[ISocketAPI.ts:30](https://github.com/arashijs/interfaces/blob/3f5b69d/src/ISocketAPI.ts#L30)
