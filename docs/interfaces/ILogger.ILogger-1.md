[@arashi/interfaces - v1.2.1](../README.md) / [Exports](../modules.md) / [ILogger](../modules/ILogger.md) / ILogger

# Interface: ILogger

[ILogger](../modules/ILogger.md).ILogger

## Table of contents

### Methods

- [addFilter](ILogger.ILogger-1.md#addfilter)
- [debug](ILogger.ILogger-1.md#debug)
- [deprecate](ILogger.ILogger-1.md#deprecate)
- [deprecateParameterType](ILogger.ILogger-1.md#deprecateparametertype)
- [error](ILogger.ILogger-1.md#error)
- [getFilters](ILogger.ILogger-1.md#getfilters)
- [getLogLevel](ILogger.ILogger-1.md#getloglevel)
- [info](ILogger.ILogger-1.md#info)
- [log](ILogger.ILogger-1.md#log)
- [removeFilter](ILogger.ILogger-1.md#removefilter)
- [setFilters](ILogger.ILogger-1.md#setfilters)
- [setLogLevel](ILogger.ILogger-1.md#setloglevel)
- [silly](ILogger.ILogger-1.md#silly)
- [trace](ILogger.ILogger-1.md#trace)
- [verbose](ILogger.ILogger-1.md#verbose)
- [warn](ILogger.ILogger-1.md#warn)

## Methods

### addFilter

▸ **addFilter**(`regexp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `regexp` | `RegExp` |

#### Returns

`void`

#### Defined in

[ILogger.ts:6](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L6)

___

### debug

▸ **debug**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[ILogger.ts:13](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L13)

___

### deprecate

▸ **deprecate**(`component`, `alternative?`, `methodOverride?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `alternative?` | `string` |
| `methodOverride?` | `string` |

#### Returns

`void`

#### Defined in

[ILogger.ts:18](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L18)

___

### deprecateParameterType

▸ **deprecateParameterType**(`component`, `argumentLocation`, `deprecatedType`, `alternative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `argumentLocation` | `number` |
| `deprecatedType` | `string` |
| `alternative?` | `string` |

#### Returns

`void`

#### Defined in

[ILogger.ts:19](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L19)

___

### error

▸ **error**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[ILogger.ts:17](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L17)

___

### getFilters

▸ **getFilters**(): `RegExp`[]

#### Returns

`RegExp`[]

#### Defined in

[ILogger.ts:9](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L9)

___

### getLogLevel

▸ **getLogLevel**(): [`LogLevel`](../enums/LogLevel.LogLevel-1.md)

#### Returns

[`LogLevel`](../enums/LogLevel.LogLevel-1.md)

#### Defined in

[ILogger.ts:5](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L5)

___

### info

▸ **info**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[ILogger.ts:15](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L15)

___

### log

▸ **log**(`level`, `component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](../enums/LogLevel.LogLevel-1.md) |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[ILogger.ts:10](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L10)

___

### removeFilter

▸ **removeFilter**(`reg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reg` | `RegExp` |

#### Returns

`void`

#### Defined in

[ILogger.ts:7](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L7)

___

### setFilters

▸ **setFilters**(`filters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | `RegExp`[] |

#### Returns

`void`

#### Defined in

[ILogger.ts:8](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L8)

___

### setLogLevel

▸ **setLogLevel**(`level`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `level` | [`LogLevel`](../enums/LogLevel.LogLevel-1.md) |

#### Returns

`void`

#### Defined in

[ILogger.ts:4](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L4)

___

### silly

▸ **silly**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[ILogger.ts:12](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L12)

___

### trace

▸ **trace**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[ILogger.ts:11](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L11)

___

### verbose

▸ **verbose**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[ILogger.ts:14](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L14)

___

### warn

▸ **warn**(`component`, `message`, `metadata?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `string` |
| `message` | `any` |
| `metadata?` | `Record`<`any`, `any`\> |

#### Returns

`void`

#### Defined in

[ILogger.ts:16](https://github.com/arashijs/interfaces/blob/0089507/src/ILogger.ts#L16)
