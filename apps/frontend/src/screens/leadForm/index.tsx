'use client';

import { useFormLead } from './container';
import * as S from './styles'

export default function LeadForm() {

    const {handleCreate, lead, setLead, handleCancel} = useFormLead()

    if(!lead) {
        return
    }

  return (
    <div style={{ padding:32 }}>
      <h1>Novo Lead</h1>
      <S.Input placeholder="Nome" value={lead?.name||''} onChange={e=>setLead({...lead,name:e.target.value})}/>
      <S.Input placeholder="Email" value={lead?.email||''} onChange={e=>setLead({...lead,email:e.target.value})}/>
      <S.Input placeholder="Telefone" value={lead?.phone||''} onChange={e=>setLead({...lead,phone:e.target.value})}/>
      <S.Button onClick={handleCreate}>Criar</S.Button>
      <S.Button onClick={handleCancel}>Cancelar</S.Button>
    </div>
  );
}
