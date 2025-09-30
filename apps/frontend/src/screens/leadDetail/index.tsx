'use client';

import styled from 'styled-components';
import { useLeadDetail } from './container';

const Input = styled.input` padding:8px; margin-bottom:8px; width:100%; `;
const Button = styled.button` background:#39FF14; color:#000; padding:8px; border:none; border-radius:4px;`;

export default function LeadDetail() {
    const {lead, setLead, handleSave, handleGoBack} = useLeadDetail()

    if(!lead) {
        handleGoBack()
        return
    }

  return (
    <div style={{ padding:32 }}>
      <h1>Editar Lead</h1>
      <Input value={lead?.name || ''} onChange={e=>setLead({...lead,name:e.target.value})} placeholder="Nome"/>
      <Input value={lead?.email || ''} onChange={e=>setLead({...lead,email:e.target.value})} placeholder="Email"/>
      <Input value={lead?.phone || ''} onChange={e=>setLead({...lead,phone:e.target.value})} placeholder="Telefone"/>
      <Button onClick={handleSave}>Salvar</Button>
      <Button onClick={handleGoBack}>Cancelar</Button>
    </div>
  );
}
