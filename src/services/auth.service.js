import api from "../api/axios";

const login = async (data) => {
  const { data: response } = await api.post("/auth/login", data);
  return response;
};

const register = async (data) => {
  const { data: response } = await api.post("/auth/register", data);
  return response;
};

const forgotPassword = async (data) => {
  const { data: response } = await api.post("/auth/forgot-password", data);
  return response;
};

const verifyOtp = async (data) => {
  const { data: response } = await api.post("/auth/verify-otp", data);
  return response;
};

const resetPassword = async (data) => {
  const { data: response } = await api.post("/auth/reset-password", data);
  return response;
};

const authService = {
  login,
  register,
  forgotPassword,
  verifyOtp,
  resetPassword,
};

export default authService;