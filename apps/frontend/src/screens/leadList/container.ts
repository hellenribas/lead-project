"use client";

import api from "@/services/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ILead } from "./types";

export function useList() {
  const [leads, setLeads] = useState<ILead[]>([]);
  const router = useRouter();

  const fetchLeads = async () => {
    const res = await api.get("/leads");
    setLeads(res.data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Deseja realmente excluir este lead?")) return;
    await api.delete(`/leads/${id}`);
    fetchLeads();
  };

  function handleNew() {
    router.push('/leads/new')
  }

  function handleEdit(l: ILead) {
    router.push(`/leads/${l.id}`)
  }

  return {
    handleDelete,
    router,
    leads,
    handleNew,
    handleEdit
  };
}
