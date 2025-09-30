import styled from "styled-components";

export const Container = styled.div`
  padding: 32px;
  background-color: #0a0a0a;
  min-height: 100vh;
  color: #e0e0e0; 
  font-family: 'Inter', sans-serif;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 24px;
  color: #00ff99; 
  letter-spacing: 1px;
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: #00ff99; 
  color: #0a0a0a;
  padding: 10px 18px;
  margin-right: 12px;
  margin-bottom: 12px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #00cc7a; 
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;

  th, td {
    padding: 14px 16px;
    text-align: left;
  }

  th {
    background-color: #111;
    color: #00ff99;
    font-weight: 700;
    font-size: 0.95rem;
  }

  tr {
    border-bottom: 1px solid #222;
    transition: background 0.2s ease;
    color: #fff;

    &:hover {
      background-color: #122512;
    }
  }

  td button {
    margin-right: 8px;
    padding: 6px 14px;
    font-size: 0.875rem;
    background-color: #00FF00; 
    color: black;
    border-radius: 4px;

    &:hover {
      background-color: #00ff99;
    }
  }
`;
