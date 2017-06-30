export default {
  items: [
    {
      name: 'Item (Click Me)',
      cost: '12',
      desc: 'A saved item that can be added to the shopping list',
      id: '1'
    },
    {
      name: 'Thing 2',
      cost: '2',
      desc: 'Another thing',
      id: '2'
    },
    {
      name: 'Stuff',
      cost: '6',
      desc: '',
      id: '3'
    }
  ],
  shoppingLists: [],
  stats: {},
  idCounter: 4,
  currentItem: {
    name: 'Item (Click Me)',
    cost: '12',
    desc: 'A saved item that can be added to the shopping list',
    id: '1'
  },
  currentShoppingList: {
    list: [
      {
        name: 'Item (Click Me)',
        cost: '12',
        desc: 'A saved item that can be added to the shopping list',
        id: '1',
        quantity: 2
      },
      {
        name: 'Thing',
        cost: '2',
        desc: 'Another thing',
        id: '2',
        quantity: 6
      },
      {
        name: 'Stuff',
        cost: '6',
        desc: '',
        id: '3',
        quantity: 1
      }
    ],
    timeStamp: '',
    name: 'My Shopping List'
  },
  deleting: false,
  editing: false,
  creating: false,
  savedDataExists: true
};
