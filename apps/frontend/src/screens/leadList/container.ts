"use client";

import api from "@/services/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ILead } from "./types";

export function useList() {
  const [leads, setLeads] = useState<ILead[]>([]);
  const router = useRouter();

  const fetchLeads = async () => {
    try {
      const res = await api.get("/leads");
      setLeads(res.data);

    }  catch (e) {
  if (e instanceof Error) {
    throw new Error(e.message);
  } else {
    throw new Error(String(e));
  }
}
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

    const handleExportCSV = () => {
    if (leads.length === 0) return;

    const header = Object.keys(leads[0]).join(",");
    const rows = leads.map(lead => {
      return Object.values(lead)
        .map(value => `"${value ?? ""}"`)
        .join(",");
    });

    const csvContent = [header, ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "leads.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return {
    handleDelete,
    router,
    leads,
    handleNew,
    handleEdit,
    handleExportCSV
  };
}
