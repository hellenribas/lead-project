import api from "@/services/api";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ILeadForm } from "../leadList/types";

export function useLeadDetail() {
  const router = useRouter();
  const { id } = useParams() as { id: string };
  const [lead, setLead] = useState<ILeadForm>({ 
    name: '',
    email: '',
    phone: '',
    position: '',
    birthDate: '',
    message: '',
  
  });
  useEffect(() => {
    api.get(`/leads/${id}`).then((res) => setLead(res.data));
  }, [id]);

  async function handleSave() {
    await api.patch(`/leads/${id}`, lead);
    router.push("/leads");
  };

  function handleGoBack() {
    router.push('/leads')
  }

    function handleCancel() {
    router.push('/leads')
  }

  return {
    handleSave,
    lead,
    setLead,
    handleGoBack,
    handleCancel
  };
}
