import axios, { AxiosError, AxiosResponse } from "axios";
import UserData from "../interfaces/internal/UserData";
import UserDataRequest from "../interfaces/server/UserDataRequest";
import UserDataResponse from "../interfaces/server/UserDataResponse";
import { formatName } from "../utils/nameUtils";

const baseUrl = "https://example-user-api.herokuapp.com";

// Requests a single user from the server based on their id
export const getUser = async (userId: number): Promise<void | UserData> =>
  axios
    .get(`${baseUrl}/users/${userId}`)
    .then(({ data }: AxiosResponse<UserDataResponse>) => {
      return getUserFromResponse(data);
    })
    .catch((error: AxiosError) => {
      console.error(`${error.message} in api.ts -> getUser(${userId}).\n`, {
        error,
      });
    });

// Requests all users from the server
export const getUsers = async (): Promise<void | UserData[]> =>
  axios
    .get(`${baseUrl}/users`)
    .then(({ data }: AxiosResponse<UserDataResponse[]>) => {
      return data.map((user) => getUserFromResponse(user));
    })
    .catch((error: AxiosError) => {
      console.error(`${error.message} in api.ts -> getUsers.\n`, { error });
    });

// Example function that would update a user on the server
export const setUser = async (
  userData: UserDataRequest
): Promise<void | UserData> =>
  axios
    .post("www.example.com/user", userData)
    .then(({ data }: AxiosResponse<UserDataResponse>) => {
      return getUserFromResponse(data);
    })
    .catch((error: AxiosError) => {
      console.error(`${error.message} in api.ts -> setUser.\n`, { error });
    });

// Helper function to convert the server user data object to our frontend user object
const getUserFromResponse = ({
  id,
  firstName,
  lastName,
}: UserDataResponse): UserData => ({
  id,
  fullName: formatName(firstName, lastName),
});
