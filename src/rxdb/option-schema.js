const optionSchema = {
  disableKeyCompression: true,
  title: 'Select options Schema',
  description: 'store select componet option infomations',
  version: 0,
  type: 'object',
  properties: {
    name: {
      type: 'string',
      primary: true,
    },
    op: {
      type: 'object',
    },
  },
}

export default optionSchema
