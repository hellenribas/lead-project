"use client";

import { useLeadDetail } from "./container";
import * as S from "./styles";

export default function LeadDetail() {
  const { handleSave, lead, setLead, handleCancel } = useLeadDetail();

  return (
    <S.Content style={{ padding: 12 }}>
      <S.Title>Editar Lead</S.Title>
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
          <S.Button onClick={handleSave}>
            Editar
          </S.Button>
          <S.Button onClick={handleCancel}>Cancelar</S.Button>
        </div>
      </S.ContainerForm>
    </S.Content>
  );
}
