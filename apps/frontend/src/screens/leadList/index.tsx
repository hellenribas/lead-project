"use client";

import { useList } from "./container";
import * as S from "./styles";

export default function LeadsList() {
  const { handleNew, leads, handleDelete, handleEdit, handleExportCSV } = useList();

  return (
    <div style={{ padding: 32, backgroundColor: 'black' }}>
      <S.Title>Painel de Leads</S.Title>
      <S.Button onClick={handleNew}>Novo Lead</S.Button>
      <S.Button onClick={handleExportCSV}>Exportar CSV</S.Button>

      <S.Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((l) => (
            <tr key={l.id}>
              <td>{l.id}</td>
              <td>{l.name}</td>
              <td>{l.email}</td>
              <td>{l.phone}</td>
              <td>
                <S.Button onClick={() => handleEdit(l)}>Editar</S.Button>
                <S.Button onClick={() => handleDelete(l.id)}>Excluir</S.Button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
    </div>
  );
}
