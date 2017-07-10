export default {
  items: [
    {
      name: 'Item (Click Me)',
      cost: '12',
      desc: 'A saved item that can be added to the shopping list',
      id: '1'
    },
    {
      name: 'Thing',
      cost: '2',
      desc: 'Another thing',
      id: '2'
    },
    {
      name: 'Stuff',
      cost: '6',
      desc: '',
      id: '3'
    },
    {
      name: 'Foo',
      cost: '2',
      desc: '',
      id: '4'
    },
    {
      name: 'Bar',
      cost: '8',
      desc: '',
      id: '5'
    },
    {
      name: 'Thingamabob',
      cost: '10',
      desc: '',
      id: '6'
    },
    {
      name: 'Kajigamawhat',
      cost: '4',
      desc: '',
      id: '7'
    },
    {
      name: 'Thingamajig',
      cost: '7',
      desc: '',
      id: '8'
    },
    {
      name: 'More Stuff',
      cost: '5',
      desc: '',
      id: '9'
    }
  ],
  shoppingLists: [],
  stats: {},
  idCounter: 10,
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
        quantity: 12
      },
      {
        name: 'Stuff',
        cost: '6',
        desc: '',
        id: '3',
        quantity: 3
      },
      {
        name: 'Foo',
        cost: '2',
        desc: '',
        id: '4',
        quantity: 1
      },
      {
        name: 'Bar',
        cost: '8',
        desc: '',
        id: '5',
        quantity: 9
      },
      {
        name: 'Thingamabob',
        cost: '10',
        desc: '',
        id: '6',
        quantity: 2
      },
      {
        name: 'Kajigamawhat',
        cost: '4',
        desc: '',
        id: '7',
        quantity: 1
      },
      {
        name: 'Thingamajig',
        cost: '7',
        desc: '',
        id: '8',
        quantity: 6
      },
      {
        name: 'More Stuff',
        cost: '5',
        desc: '',
        id: '9',
        quantity: 3
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
