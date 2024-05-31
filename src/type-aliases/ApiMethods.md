# Type alias: ApiMethods

> **ApiMethods**: `{ [K in keyof Methods]: Methods[K] extends Function ? Methods[K] : never }`
