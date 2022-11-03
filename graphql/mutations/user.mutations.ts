import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation LoginUser($login: String!, $password: String!) {
    loginWithCookies(input: {login: $login, password: $password}) {
      clientMutationId
      status
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
  mutation RegisterUser($email: String, $username: String!, $password:String!, $firstName: String!, $lastname: String!) {
  registerUser(input: {
    email: $email,
    username: $username,
    password: $password,
    firstName: $firstName,
    lastName: $lastname
  }) {
    user {
      email
      firstName
      lastName
    }
  }
}
`