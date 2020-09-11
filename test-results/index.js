const test1 = [
  { field: 'email', operator: 'cont', value: 'example@email.com' },
  { field: 'age', operator: 'in', value: 14 },
  { field: 'jobTitle', operator: 'eq', value: 'Manager' }
]

const test2 = {
  email: [
    'email should not be empty',
    'email must be longer than or equal to 3 characters',
    'email must be shorter than or equal to 50 characters'
  ],
  name: [
    'name should not be empty',
    'name must be shorter than or equal to 30 characters',
    'name must be a string'
  ],
}
