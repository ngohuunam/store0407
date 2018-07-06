const listSchema = {
  disableKeyCompression: true,
  title: 'List name Schema',
  description: 'store name of docs in any collection infomations',
  version: 0,
  type: 'object',
  properties: {
    name: {
      type: 'string',
      primary: true,
    },
    value: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
}

export default listSchema
