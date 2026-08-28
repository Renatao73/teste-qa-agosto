# Projeto de Automação QA — Cypress + BDD

Projeto criado para cobrir o desafio técnico utilizando **Cypress + JavaScript + Gherkin/BDD** sobre o DemoBlaze.

## Tecnologias

- Node.js 22
- Cypress 15.21.1
- JavaScript
- @badeball/cypress-cucumber-preprocessor 27.0.0
- Esbuild
- GitHub Actions
- Postman / Newman 6.2.2

## Cobertura

### UI / E2E

1. Cadastro de novo usuário com dados dinâmicos.
2. Validação de tentativa de cadastro duplicado.
3. Adição de três produtos ao carrinho:
   - Samsung galaxy s6 — celular
   - Apple monitor 24 — monitor
   - Sony vaio i5 — computador/notebook
4. Acesso ao carrinho.
5. Remoção do monitor.
6. Refresh da página.
7. Validação de persistência: permanecem somente celular e computador.

### API — Cypress e Collection Postman

- Collection e environment exportáveis em `postman/`.
- Cadastro válido.
- Cadastro duplicado.
- Login válido.
- Login inválido.
- Status code.
- Tempo de resposta.
- Contrato básico da resposta.
- Adição de produtos ao carrinho.
- Consulta do carrinho.

## Observação sobre o requisito de "e-mail"

O enunciado menciona e-mail já existente, porém a tela de cadastro atual do DemoBlaze disponibiliza os campos **Username** e **Password**. Por isso a automação valida duplicidade pelo username, mantendo a regra de negócio equivalente disponível na aplicação.

## Estrutura

```text
cypress/
├── e2e/
│   ├── api/
│   │   ├── features/
│   │   └── step_definitions/
│   └── ui/
│       ├── features/
│       └── step_definitions/
├── pages/
├── services/
├── support/
└── utils/
```

## Pré-requisitos

- Node.js 22 ou compatível
- npm
- Google Chrome opcional para execução explícita com Chrome
- VS Code

## Instalação

```bash
npm install
```

Opcionalmente copie o arquivo de exemplo de ambiente:

```bash
cp cypress.env.json.example cypress.env.json
```

No Windows PowerShell:

```powershell
Copy-Item cypress.env.json.example cypress.env.json
```

## Execução

Abrir a interface do Cypress:

```bash
npm run cy:open
```

Executar todos os testes em headless:

```bash
npm test
```

Somente UI:

```bash
npm run test:ui
```

Somente API no Cypress:

```bash
npm run test:api
```

Executar a Collection do Postman via Newman:

```bash
npm run postman:test
```

Executar usando Google Chrome:

```bash
npm run test:chrome
```

## Evidências

Em caso de falha, screenshots são gerados em:

```text
cypress/screenshots/
```

Vídeos da execução são gerados em:

```text
cypress/videos/
```

## CI/CD

O workflow `.github/workflows/cypress.yml` executa os testes automaticamente em push e pull request para a branch `main`.

> Depois do primeiro `npm install`, recomenda-se versionar o `package-lock.json` e trocar `npm install` por `npm ci` no workflow para builds totalmente reprodutíveis.

## Boas práticas aplicadas

- Page Object Model para UI.
- Service Object para API.
- Feature files em Gherkin.
- Step Definitions separados.
- Massa dinâmica para evitar colisão de usuário.
- Senha não exibida no log do Cypress durante digitação.
- Configurações de URL e limite de resposta centralizadas.
- Testes de API e UI separados por domínio.

## Postman

Arquivos exigidos para entrega:

```text
postman/Demoblaze_QA.postman_collection.json
postman/Demoblaze_QA.postman_environment.json
```

A Collection cobre criação de conta, duplicidade, login válido/inválido, adição de três produtos e consulta do carrinho.
