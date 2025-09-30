"use client";

import { useFormLead } from "./container";
import * as S from "./styles";

export default function LeadForm() {
  const { handleCreate, lead, setLead, handleCancel } = useFormLead();

  return (
    <S.Content style={{ padding: 12 }}>
      <S.Title>Novo Lead</S.Title>
      <S.ContainerForm>
        <S.Input
          placeholder="Nome"
          value={lead?.name || ""}
          onChange={(e) => setLead({ ...lead, name: e.target.value })}
        />
        <S.Input
          placeholder="Email"
          value={lead?.email || ""}
          onChange={(e) => setLead({ ...lead, email: e.target.value })}
        />
        <S.Input
          placeholder="Telefone"
          value={lead?.phone || ""}
          onChange={(e) => setLead({ ...lead, phone: e.target.value })}
        />
        <S.Input
          placeholder="Posição"
          value={lead?.position || ""}
          onChange={(e) => setLead({ ...lead, position: e.target.value })}
        />
        <S.Input
          type="date"
          placeholder="Aniversário"
          value={lead?.birthDate || ""}
          onChange={(e) => setLead({ ...lead, birthDate: e.target.value })}
        />
        <div>
          <S.Button onClick={handleCreate}>
            Criar
          </S.Button>
          <S.Button onClick={handleCancel}>Cancelar</S.Button>
        </div>
      </S.ContainerForm>
    </S.Content>
  );
}
