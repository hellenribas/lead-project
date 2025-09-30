import { useRouter } from "next/navigation";
import { useState } from "react";
import {ILeadForm } from "../leadList/types";
import api from "@/services/api";

export function useFormLead() {
  const router = useRouter();
  const [lead, setLead] = useState<ILeadForm>({ 
    name: '',
    email: '',
    phone: '',
    position: '',
    birthDate: '',
    message: '',
  
  });

  const PHONE_REGEX = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;


  const handleCreate = async () => {
    await api.post("/leads", lead);
    router.push("/leads");
  };

  function handleCancel() {
    router.push('/leads')
  }


  return {
    handleCreate,
    lead,
    setLead,
    handleCancel,
  };
}
