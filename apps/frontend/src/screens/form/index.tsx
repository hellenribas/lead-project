"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  phone: string;
  position: string;
  birthDate: string;
  message: string;
};

export default function FormScreen() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const tracking = Object.fromEntries(new URLSearchParams(window.location.search));
    await axios.post('/api/leads', { ...data, ...tracking });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Formulário de Lead</h2>

        <input {...register("name", { required: true })} placeholder="Nome" className="w-full border px-3 py-2 rounded" />
        {errors.name && <span className="text-red-500 text-sm">Nome obrigatório</span>}

        <input {...register("email", { required: true })} placeholder="Email" type="email" className="w-full border px-3 py-2 rounded" />
        {errors.email && <span className="text-red-500 text-sm">Email inválido</span>}

        <input {...register("phone", { required: true })} placeholder="Telefone" className="w-full border px-3 py-2 rounded" />
        {errors.phone && <span className="text-red-500 text-sm">Telefone obrigatório</span>}

        <input {...register("position", { required: true })} placeholder="Cargo" className="w-full border px-3 py-2 rounded" />
        {errors.position && <span className="text-red-500 text-sm">Cargo obrigatório</span>}

        <input {...register("birthDate", { required: true })} type="date" className="w-full border px-3 py-2 rounded" />
        {errors.birthDate && <span className="text-red-500 text-sm">Data obrigatória</span>}

        <textarea {...register("message", { required: true })} placeholder="Mensagem" className="w-full border px-3 py-2 rounded" />
        {errors.message && <span className="text-red-500 text-sm">Mensagem obrigatória</span>}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Enviar</button>
      </form>
    </div>
  );
}
