# My Leads Monorepo

Sistema completo de cadastro e gestão de leads, com frontend em Next.js + Styled Components  
e backend em NestJS + TypeORM + PostgreSQL.

## Estrutura do projeto

lead-project/
├─ apps/
│ ├─ backend/ # API REST, autenticação, módulos de Leads e Admin
│ └─ frontend/ # Aplicação web, páginas públicas e painel administrativo
├─ packages/ # Pacotes compartilhados (opcional)
├─ docker-compose.yml
└─ README.md


## Tecnologias

**Backend:** NestJS, TypeORM, PostgreSQL, JWT, Bcrypt  
**Frontend:** Next.js, Styled Components, Axios, React Hook Form, CSV export, Responsivo e Dark Mode  

## Banco de Dados

- PostgreSQL
- Host: localhost
- Porta: 5432
- Database: leads
- Usuário: postgres
- Senha: postgres
- Rodar no Docker: `docker compose up -d`

## Backend

- Local: `apps/backend`
- Instalação: `npm install`
- Desenvolvimento: `npm run start:dev`

### Endpoints

| Método | Rota             | Descrição              |
|--------|-----------------|----------------------|
| POST   | /auth/login      | Login de admin        |
| GET    | /leads           | Listar todos os leads |
| POST   | /leads           | Criar novo lead       |
| PATCH  | /leads/:id       | Editar lead           |
| DELETE | /leads/:id       | Excluir lead          |

Credenciais de teste:  
**Email:** admin@gmail.com  
**Senha:** 123456  

## Frontend

- Local: `apps/frontend`
- Instalação: `npm install`
- Desenvolvimento: `npm run dev`
- URL: http://localhost:3002

### Funcionalidades

- Página pública: Formulário de leads com tracking UTM
- Painel administrativo: CRUD completo de leads
- Exportação em CSV
- Autenticação de admin

## Contato

**Desenvolvedor:** Hellen Ribas
**Email:** tchwtrabalho@gmail.com
