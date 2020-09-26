/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCryptoBot = /* GraphQL */ `
  mutation CreateCryptoBot(
    $input: CreateCryptoBotInput!
    $condition: ModelCryptoBotConditionInput
  ) {
    createCryptoBot(input: $input, condition: $condition) {
      id
      api_key
      api_secret
      asset
      currency
      marging
      active
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCryptoBot = /* GraphQL */ `
  mutation UpdateCryptoBot(
    $input: UpdateCryptoBotInput!
    $condition: ModelCryptoBotConditionInput
  ) {
    updateCryptoBot(input: $input, condition: $condition) {
      id
      api_key
      api_secret
      asset
      currency
      marging
      active
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCryptoBot = /* GraphQL */ `
  mutation DeleteCryptoBot(
    $input: DeleteCryptoBotInput!
    $condition: ModelCryptoBotConditionInput
  ) {
    deleteCryptoBot(input: $input, condition: $condition) {
      id
      api_key
      api_secret
      asset
      currency
      marging
      active
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      bio
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      bio
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      firstName
      lastName
      bio
      image
      createdAt
      updatedAt
    }
  }
`;
