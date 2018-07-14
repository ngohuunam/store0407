const rxCollSyncOption = [
  {
    name: 'order',
    op: {
      remote: '',
      direction: {
        pull: true,
        push: true,
      },
      options: {
        live: true,
        retry: true,
      },
      query: '',
    },
  },
  {
    name: 'list',
    op: {
      remote: '',
      direction: {
        pull: true,
        push: false,
      },
      options: {
        live: true,
        retry: true,
      },
    },
  },
  {
    name: 'item',
    op: {
      remote: '',
      direction: {
        pull: true,
        push: false,
      },
      options: {
        live: true,
        retry: true,
      },
    },
  },
  {
    name: 'image',
    op: {
      remote: '',
      direction: {
        pull: true,
        push: false,
      },
      options: {
        live: true,
        retry: true,
      },
    },
  },
]
export default rxCollSyncOption
