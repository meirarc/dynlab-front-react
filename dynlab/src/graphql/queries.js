/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCryptoBot = /* GraphQL */ `
  query GetCryptoBot($id: ID!) {
    getCryptoBot(id: $id) {
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
export const listCryptoBots = /* GraphQL */ `
  query ListCryptoBots(
    $filter: ModelCryptoBotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCryptoBots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        firstName
        lastName
        bio
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
