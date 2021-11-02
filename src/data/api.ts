import axios, { AxiosError, AxiosResponse } from "axios";
import UserData from "../interfaces/internal/UserData";
import UserDataRequest from "../interfaces/server/UserDataRequest";
import UserDataResponse from "../interfaces/server/UserDataResponse";
import { formatName } from "../utils/NameUtils";

export const getUser = async (userId: number): Promise<void | UserData> => {
  // request that either returns data or sets data using state management tool like redux
  return axios
    .get(`www.example.com/user?id=${userId}`)
    .then(({ data }: AxiosResponse<UserDataResponse>) => {
      return getUserDataFromUserDataResponse(data);
    })
    .catch((error: AxiosError) => {
      console.error("an error occured", { error });
      //error handling
    });
};

export const setUser = (userData: UserDataRequest) => {
  //request that updates a user in the backend, and returns that updated user object
  axios
    .post("www.example.com/user", userData)
    .then(({ data }: AxiosResponse<UserDataResponse>) => {
      return getUserDataFromUserDataResponse(data);
    })
    .catch((error: AxiosError) => {
      console.error("an error occured", { error });
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
