import axios from "axios";
import { Toast } from "vant";

const http = axios.create({
  baseURL: "https://www.duozhuayu.com/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    ":authority": "www.duozhuayu.com",
    "x-api-version": "0.0.31",
    "x-refer-request-id": "0-1611133646398-74704",
    "x-request-id": "278115379438558820-1611133646911-37971",
    "x-request-misc": '{"platform":"browser"}',
    "x-request-token":
      "646286b9b665295be4c013a164dea3d2f3c7fef8268b7adda0fff8c702c57923991f8eb54e44698942",
    "x-security-key": "27867421",
    "x-timestamp": "1611133646913",
    "x-user-id": "278115379438558820"
  }
});

http.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    Toast.fail({ message: "请求失败", forbidClick: true });
    return Promise.reject(error.response);
  }
);

export default http;
