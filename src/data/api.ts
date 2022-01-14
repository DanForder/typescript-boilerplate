import axios, { AxiosError, AxiosResponse } from "axios";
import UserData from "../interfaces/internal/UserData";
import UserDataRequest from "../interfaces/server/UserDataRequest";
import UserDataResponse from "../interfaces/server/UserDataResponse";
import { formatName } from "../utils/nameUtils";

const baseUrl = "https://example-user-api.herokuapp.com";

export const getUser = async (userId: number): Promise<void | UserData> => {
  // request that either returns data or sets data using state management tool like redux
  return axios
    .get(`${baseUrl}/users/${userId}`)
    .then(({ data }: AxiosResponse<UserDataResponse>) => {
      return getUserDataFromUserDataResponse(data);
    })
    .catch((error: AxiosError) => {
      console.error("an error occurred", { error });
      //error handling
    });
};

export const getUsers = async (): Promise<void | UserData[]> => {
  // request that either returns data or sets data using state management tool like redux
  return axios
    .get(`${baseUrl}/users`)
    .then(({ data }: AxiosResponse<UserDataResponse[]>) => {
      return data.map((user) => getUserDataFromUserDataResponse(user));
    })
    .catch((error: AxiosError) => {
      console.error("an error occurred", { error });
      //error handling
    });
};

export const setUser = async (
  userData: UserDataRequest
): Promise<void | UserData> => {
  //request that updates a user in the backend, and returns that updated user object
  return axios
    .post("www.example.com/user", userData)
    .then(({ data }: AxiosResponse<UserDataResponse>) => {
      return getUserDataFromUserDataResponse(data);
    })
    .catch((error: AxiosError) => {
      console.error("an error occurred", { error });
    });
};

const getUserDataFromUserDataResponse = ({
  id,
  firstName,
  lastName,
}: UserDataResponse) => {
  return {
    id,
    fullName: formatName(firstName, lastName),
  };
};
