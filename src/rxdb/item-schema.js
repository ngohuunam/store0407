const itemSchema = {
  disableKeyCompression: true,
  title: 'Item Schema',
  description: 'store item infomations',
  version: 0,
  type: 'object',
  properties: {
    name: {
      type: 'string',
      primary: true,
    },
    zet: {
      type: 'string',
      ref: 'set',
      default: '',
    },
    info: {
      type: 'array',
      default: [],
    },
    unit: {
      type: 'string',
      default: 'Cái',
    },
    color: {
      type: 'string',
      default: '',
    },
    hex: {
      type: 'string',
      default: '',
    },
    size: {
      type: 'string',
      default: '',
    },
    quantity: {
      type: 'number',
      default: 1,
    },
    shiping: {
      type: 'number',
      default: 0,
    },
    price: {
      type: 'number',
      default: 1,
    },
    disc: {
      type: 'number',
      default: 0,
    },
    discQuantity: {
      type: 'number',
      default: 0,
    },
    discStart: {
      type: 'string',
      default: '',
    },
    discStop: {
      type: 'string',
      default: '',
    },
    discDesc: {
      type: 'string',
      default: '',
    },
    watch: {
      type: 'boolean',
      default: false,
    },
  },
}

export default itemSchema
