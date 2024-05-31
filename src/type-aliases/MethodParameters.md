# Type alias: MethodParameters\<M\>

> **MethodParameters**\<`M`\>: `{ [K in keyof M]: M[K] extends Function ? ApiMethodParameters<M[K]>[0] : never }`

## Type parameters

• **M** = `Methods`
