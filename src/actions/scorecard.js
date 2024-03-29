import axios from "axios";
import apiConfig from "../configs/api";
import authConfig from "../configs/auth";
import { toast } from "react-toastify";

export const getScorecard = async (matchId) => {
  const options = {
    method: "GET",
    url: `${apiConfig.url}/matches/id/${matchId}/scorecard`,
    headers: {
      "Content-Type": "application/json",
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
