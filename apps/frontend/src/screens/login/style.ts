import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

export const Form = styled.form`
  background-color: #111;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #39FF14;
  background-color: #000;
  color: #39FF14;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem;
  border-radius: 4px;
  border: none;
  background-color: #39FF14;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #2ecc71;
  }
`;

export const Title = styled.h1`
  color: #39FF14;
  font-size: 1.5rem;
  text-align: center;
`;