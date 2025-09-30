import { useRouter } from "next/navigation";
import { useState } from "react";
import { ILead } from "../leadList/types";
import api from "@/services/api";

export function useFormLead() {
  const router = useRouter();
  const [lead, setLead] = useState<ILead>();

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
    handleCancel
  };
}
