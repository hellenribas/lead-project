'use client';
import * as S from './style'
import { useLogin } from './container';


export default function LoginForm() {

  const {handleSubmit, email, setEmail, password, setPassword} = useLogin()
  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>ADMIN LOGIN</S.Title>
        <S.Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <S.Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <S.Button type="submit">Entrar</S.Button>
      </S.Form>
    </S.Container>
  );
}
