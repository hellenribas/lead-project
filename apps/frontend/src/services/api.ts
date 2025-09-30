import { ILead } from "@/screens/leadList/types";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'localhost:3001',
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;

export async function loginAdmin(data: { email: string; password: string }) {
  try {
    const response = await api.post("/auth/login", data);
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.message || "Erro ao logar");
    }
  }
}

export async function getLeads() {
  try {
    const response = await api.get("/leads");
    return response.data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.message || "Erro ao buscar leads");
    }
  }
}

export async function createLead(leadData: ILead) {
  try {
    const response = await api.post("/leads", leadData);
    return response.data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.message || "Erro ao criar lead");
    }
  }
}
