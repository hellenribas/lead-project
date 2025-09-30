import styled from "styled-components";

export const Input = styled.input`
  padding: .5rem;
  margin-bottom: .5rem;
  width: 100%;
  border-radius: .5rem;
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
export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #00ff99; 
  letter-spacing: 1px;
  font-weight: 700;
`;

export const ContainerForm = styled.div`
  padding: 0px 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`