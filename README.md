## Getting Started
Este é o projeto para o desafio de frontend da Fusion. O objetivo é criar um frontend simples de um Card de voluntário, utilizando o template figma: https://www.figma.com/design/JO0vsAS75zlc0Vrx0tA5WZ/Untitled?node-id=0-1&t=8UDm9Y2PkOhwYS6a-1.

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
│   ├── Components
│     └── CardPerfil.tsx        
    # Estilos globais e configuração do Tailwind
│   ├── layout.tsx      # Layout principal da aplicação
│   └── page.tsx        # Página inicial (rota "/")
├── public/             # Arquivos estáticos (imagens, fontes, etc.)
├── package.json
└── README.md
```

- **`app/`**: Contém a lógica principal
- **`public/`**: Guarda a imagem principal

---

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
