const imageSchema = {
  disableKeyCompression: true,
  title: 'Product Image Schema',
  description: 'store images of product infomations',
  version: 0,
  type: 'object',
  properties: {
    name: {
      type: 'string',
      primary: true,
    },
    zet: {
      ref: 'set',
      type: 'string',
    },
    imgs: {
      type: 'array',
      items: {
        type: 'string',
      },
      default: [],
    },
  },
  attachments: {},
}

export default imageSchema
