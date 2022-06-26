import axios from "axios";
import jwt_decode from "jwt-decode";

const refreshToken = async () => {
  try {
    const res = await axios.post("/v1/auth/refresh", {
      // thêm cookies vào axios
      withCredentials: true,
    });

    // trả về accessToken và refreshToken mới
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createAxios = (user, dispatch, statusSuccess) => {
  const newInstance = axios.create();

  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodeToken = jwt_decode(user?.accessToken);
      if (decodeToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();

        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };

        dispatch(statusSuccess(refreshUser));
        config.headers["token"] = "Bearer " + data.accessToken;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return newInstance;
};
