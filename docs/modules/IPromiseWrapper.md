[@arashi/interfaces - v1.0.0-dev](../README.md) / [Exports](../modules.md) / IPromiseWrapper

# Module: IPromiseWrapper

## Table of contents

### Interfaces

- [IPromiseWrapper](../interfaces/IPromiseWrapper.IPromiseWrapper-1.md)

### Type aliases

- [IRejectFunction](IPromiseWrapper.md#irejectfunction)
- [IResolveFunction](IPromiseWrapper.md#iresolvefunction)

## Type aliases

### IRejectFunction

Ƭ **IRejectFunction**: (`e`: `any`) => `void`

#### Type declaration

▸ (`e`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

##### Returns

`void`

#### Defined in

[IPromiseWrapper.ts:3](https://github.com/arashijs/interfaces/blob/c8b27f0/src/IPromiseWrapper.ts#L3)

___

### IResolveFunction

Ƭ **IResolveFunction**<`T`\>: (`v`: `T`) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`v`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

##### Returns

`void`

#### Defined in

[IPromiseWrapper.ts:2](https://github.com/arashijs/interfaces/blob/c8b27f0/src/IPromiseWrapper.ts#L2)
