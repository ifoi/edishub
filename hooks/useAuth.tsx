import { ApolloError, gql, useQuery } from "@apollo/client";
import { createContext, ReactNode, useContext } from "react";


export interface User {
  id: string;
  databaseId: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthData {
  loggedIn: boolean;
  user?: User,
  loading: boolean;
  error?: ApolloError;
}

const DEFAULT_STATE: AuthData = {
  loggedIn: false,
  user: undefined,
  loading: false,
  error: undefined,
};

const AuthContext = createContext(DEFAULT_STATE);

export const GET_USER = gql`
  query getUser {
    viewer {
      id
      databaseId
      firstName
      lastName
      email
    }
  }
`;

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data, loading, error } = useQuery(GET_USER, { fetchPolicy: "network-only" });
  const user = data?.viewer;
  const loggedIn = Boolean(user);
  const value = {
    loggedIn,
    user,
    loading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext);

export default useAuth;