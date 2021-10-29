import axios, { AxiosError, AxiosResponse } from "axios";
import UserData from "../interfaces/internal/userData";
import UserDataResponse from "../interfaces/server/userDataResponse";
import { formatName } from "../utils/nameUtils";

export const getUser = async (userId: number): Promise<UserData> => {
  // request that either returns data or sets data using state management tool like redux

  axios
    .get(`www.example.com/user?id=${userId}`)
    .then(({ data }: AxiosResponse<UserDataResponse>) => {
      const { id, firstName, lastName } = data;
      const userData: UserData = {
        id,
        fullName: formatName(firstName, lastName),
      };
    })
    .catch((error: AxiosError) => {
      console.error("an error occured", { error });
      //error handling
    });

  const result: UserData = {
    id: 1,
    fullName: formatName("Barry", "Lastname"),
  };

  return result;
};

export const setUser = (userData: UserDataResponse) => {
  //...
  axios
    .post("www.example.com/user", userData)
    .then((result: AxiosResponse) => {
      console.log("api.ts- setUser: success");
    })
    .catch((error: AxiosError) => {
      console.error("an error occured", { error });
      //error handling
    });
};
