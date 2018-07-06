const setSchema = {
  disableKeyCompression: true,
  title: 'Set Schema',
  description: 'store Set infomations',
  version: 0,
  type: 'object',
  properties: {
    name: {
      type: 'string',
      primary: true,
    },
    info: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
        },
        gene: {
          type: 'string',
        },
        len: {
          type: 'string',
        },
        fabric: {
          type: 'string',
        },
        unit: {
          type: 'string',
        },
        design: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      default: {
        type: 'Quần',
        gene: 'Bé trai',
        len: 'Dài',
        fabric: 'Cotton',
        unit: 'Cái',
        design: ['Caro'],
      },
    },
    item: {
      type: 'array',
      ref: 'item',
      items: {
        type: 'string',
      },
      default: [],
    },
    image: {
      type: 'array',
      ref: 'image',
      items: {
        type: 'string',
      },
      default: [],
    },
  },
}

export default setSchema
