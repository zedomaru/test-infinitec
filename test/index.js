const test1 = {
  name: null,
  email: 'example@email.com',
  address: '',
  age_in: 14,
  jobTitle_eq: 'Manager'
}

const test2 = [
  {
    property: "email",
    constraints: {
      isNotEmpty: "email should not be empty",
      minLength: "email must be longer than or equal to 3 characters",
      maxLength: "email must be shorter than or equal to 50 characters",
    },
  },
  {
    property: "name",
    constraints: {
      isNotEmpty: "name should not be empty",
      maxLength: "name must be shorter than or equal to 30 characters",
      isString: "name must be a string",
    },
  },
]

module.exports = { test1, test2 }
