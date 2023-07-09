import axios from "axios";
import apiConfig from "../configs/api";
import authConfig from "../configs/auth";
import { toast } from "react-toastify";

export const getMatches = async () => {
  const options = {
    method: "GET",
    url: `${apiConfig.url}/clubs/id/icr228/matches`,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      apiKey: authConfig.apiKey,
      Token: authConfig.Token,
    },
  };
  try {
    const res = await axios(options);
    return res;
  } catch (e) {
    console.log(e);
    if (e?.response?.data) {
      return e.response.data;
    }
    return {
      error: "Something Went Wrong",
    };
  }
};
