/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String!) {
    onCreateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String!) {
    onUpdateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String!) {
    onDeleteTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCryptoBot = /* GraphQL */ `
  subscription OnCreateCryptoBot($owner: String!) {
    onCreateCryptoBot(owner: $owner) {
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
export const onUpdateCryptoBot = /* GraphQL */ `
  subscription OnUpdateCryptoBot($owner: String!) {
    onUpdateCryptoBot(owner: $owner) {
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
export const onDeleteCryptoBot = /* GraphQL */ `
  subscription OnDeleteCryptoBot($owner: String!) {
    onDeleteCryptoBot(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
