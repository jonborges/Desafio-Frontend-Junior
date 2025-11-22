## Getting Started
Este é o projeto base para o desafio de desenvolvimento frontend da Frontend Fusion. O objetivo é criar uma aplicação web moderna e responsiva a partir deste template inicial, que já vem configurado com as tecnologias mais recentes do ecossistema React.

## ✨ Funcionalidades do Template

- **Estrutura Moderna:** Utiliza o App Router do Next.js para uma organização de rotas e layouts mais intuitiva.
- **Estilização com Tailwind CSS:** Configurado com o framework CSS utility-first mais popular para um desenvolvimento ágil e consistente.
- **TypeScript:** Todo o projeto está configurado com TypeScript para garantir um código mais robusto e seguro.
- **Fonte Padrão:** A fonte `Inter` já está importada e configurada como padrão no `globals.css`.

---

## 🚀 Tecnologias Utilizadas

- **Next.js**: O Framework React para produção.
- **React**: Biblioteca para construir interfaces de usuário.
- **TypeScript**: JavaScript com tipagem estática.
- **Tailwind CSS**: Framework CSS para estilização rápida.

---

## 🏁 Começando

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- Node.js (versão 18.x ou superior)
- npm, yarn ou pnpm

### Instalação

1.  Clone o repositório para sua máquina local:
    ```bash
    git clone <url-do-repositorio>
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd frontend-fusion-desafio
    ```
3.  Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

Abra http://localhost:3000 em seu navegador para ver o resultado.

---

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia a aplicação em modo de desenvolvimento.
- `npm run build`: Compila a aplicação para o ambiente de produção.
- `npm run start`: Inicia um servidor de produção após o build.
- `npm run lint`: Executa o ESLint para analisar o código em busca de problemas.

---

## 📂 Estrutura de Pastas

A estrutura principal do projeto está organizada da seguinte forma:

```
frontend-fusion-desafio/
├── app/
│   ├── globals.css     # Estilos globais e configuração do Tailwind
│   ├── layout.tsx      # Layout principal da aplicação
│   └── page.tsx        # Página inicial (rota "/")
├── public/             # Arquivos estáticos (imagens, fontes, etc.)
├── package.json
└── README.md
```

- **`app/`**: Contém todas as rotas, componentes e a lógica da sua aplicação, utilizando o App Router do Next.js.
- **`public/`**: Ideal para armazenar ativos estáticos que serão servidos diretamente.

---

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
