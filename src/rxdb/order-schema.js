const orderSchema = {
  disableKeyCompression: true,
  title: 'Product Order Schema',
  description: 'store order of product infomations',
  version: 0,
  type: 'object',
  properties: {
    phone: {
      type: 'string',
      primary: true,
    },
    pass: {
      type: 'string',
      default: '',
    },
    email: {
      type: 'string',
      default: '',
    },
    name: {
      type: 'string',
      default: '',
    },
    address: {
      type: 'string',
      default: '',
    },
    gmap: {
      type: 'string',
      default: '',
    },
    items: {
      type: 'array',
      ref: 'item',
      items: {
        type: 'string',
      },
      default: [],
    },
    details: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          item: {
            type: 'string',
          },
          quantity: {
            type: 'string',
          },
          price: {
            type: 'string',
          },
          total: {
            type: 'string',
          },
          image: {
            type: 'string',
          },
        },
      },
      default: [],
    },
  },
}

export default orderSchema
