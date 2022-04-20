import axios, { AxiosResponse } from "axios";
import UserData from "../types/internal/UserData";
import UserDataRequest from "../types/server/UserDataRequest";
import UserDataResponse from "../types/server/UserDataResponse";
import { formatName } from "../utils/nameUtils";

const baseUrl = "https://example-user-api.herokuapp.com";

// Requests a single user from the server based on their id
export const getUser = async (userId: number): Promise<void | UserData> => {
  try {
    const { data }: AxiosResponse<UserDataResponse> = await axios.get(
      `${baseUrl}/users/${userId}`
    );
    return getUserFromResponse(data);
  } catch (error) {
    console.error(`error in api.ts -> getUser(${userId}).\n`, { error });
  }
};

// Requests all users from the server
export const getUsers = async (): Promise<void | UserData[]> => {
  try {
    const { data }: AxiosResponse<UserDataResponse[]> = await axios.get(
      `${baseUrl}/users`
    );
    return data.map((user) => getUserFromResponse(user));
  } catch (error) {
    console.error(`error in api.ts -> getUsers.\n`, { error });
  }
};

// Example function that would update a user on the server
export const setUser = async (
  userData: UserDataRequest
): Promise<void | UserData> => {
  try {
    const { data }: AxiosResponse<UserDataResponse> = await axios.post(
      "www.example.com/user",
      userData
    );
    return getUserFromResponse(data);
  } catch (error) {
    console.error(`error in api.ts -> setUser.\n`, { error });
  }
};

// Helper function to convert the server user data object to our frontend user object
const getUserFromResponse = ({
  id,
  firstName,
  lastName,
}: UserDataResponse): UserData => ({
  id,
  fullName: formatName(firstName, lastName),
});
