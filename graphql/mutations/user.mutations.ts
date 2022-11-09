import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(input: {username: $username, password: $password}) {
    authToken
    refreshToken
    user {
      id
      name
    }
  }
}
`

export const LOG_OUT_USER = gql`
  mutation LogOutUser($clientId: String!) {
    logout(input: {clientMutationId: $clientId}) {
      clientMutationId
      status
    }
}
`

export const REGISTER_USER = gql`
  mutation RegisterUser($email: String, $username: String!, $password:String!, $firstName: String!, $lastName: String!) {
  registerUser(input: {
    email: $email,
    username: $username,
    password: $password,
    firstName: $firstName,
    lastName: $lastName
  }) {
    user {
      email
      firstName
      lastName
    }
  }
}
`