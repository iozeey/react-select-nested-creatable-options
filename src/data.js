export const options = [
  {
    value: 'item1',
    label: 'item1',
    innerOptions: [
      { value: 'item1.1', label: 'item1.1' },
      { value: 'item1.2', label: 'item1.2' },
      {
        value: 'item1.3',
        label: 'item1.3',
        innerOptions: [
          { value: 'item1.3.1', label: 'item1.3.2', innerOptions: [{ value: 'item1.3.1.1', label: 'item1.3.2.1' }] },
        ],
      },
    ],
  },
  {
    value: 'two',
    label: 'two',
  },
  {
    value: 'strawberry',
    label: 'Strawberry',
    innerOptions: [
      { value: 'item1.1', label: 'item1.1' },
      { value: 'item1.2', label: 'item1. 2' },
      { value: 'item1.3', label: 'item1. 3 1', innerOptions: [{ value: 'item1.3.1', label: 'item1.3.1' }] },
    ],
  },
];
