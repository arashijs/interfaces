[@arashi/interfaces - v1.2.1](../README.md) / [Exports](../modules.md) / ISocketAPI

# Module: ISocketAPI

## Table of contents

### Interfaces

- [ISocketAPI](../interfaces/ISocketAPI.ISocketAPI-1.md)

### Type aliases

- [IConnectCallback](ISocketAPI.md#iconnectcallback)
- [IDataCallback](ISocketAPI.md#idatacallback)
- [IEndCallback](ISocketAPI.md#iendcallback)
- [IErrorCallback](ISocketAPI.md#ierrorcallback)
- [IWriteCallback](ISocketAPI.md#iwritecallback)

## Type aliases

### IConnectCallback

Ƭ **IConnectCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[ISocketAPI.ts:4](https://github.com/arashijs/interfaces/blob/0089507/src/ISocketAPI.ts#L4)

___

### IDataCallback

Ƭ **IDataCallback**: (`data`: `Buffer`) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |

##### Returns

`void`

#### Defined in

[ISocketAPI.ts:5](https://github.com/arashijs/interfaces/blob/0089507/src/ISocketAPI.ts#L5)

___

### IEndCallback

Ƭ **IEndCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[ISocketAPI.ts:7](https://github.com/arashijs/interfaces/blob/0089507/src/ISocketAPI.ts#L7)

___

### IErrorCallback

Ƭ **IErrorCallback**: (`error`: `any`) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

##### Returns

`void`

#### Defined in

[ISocketAPI.ts:6](https://github.com/arashijs/interfaces/blob/0089507/src/ISocketAPI.ts#L6)

___

### IWriteCallback

Ƭ **IWriteCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[ISocketAPI.ts:8](https://github.com/arashijs/interfaces/blob/0089507/src/ISocketAPI.ts#L8)
