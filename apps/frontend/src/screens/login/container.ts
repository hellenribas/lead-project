'use client';

import { loginAdmin } from "@/services/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginAdmin({ email, password });
      router.push("/leads");
    } catch (err: any) {
      setError(err.message);
    }
  };
  return {
    handleSubmit,
    setEmail,
    setError,
    setPassword,
    error,
    email,
    password,
  };
}
