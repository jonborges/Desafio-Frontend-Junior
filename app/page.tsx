import React from 'react';
import CardPerfil from './components/CardPerfil';

export default function Page() {
  const perfil = {
    imagem: "/img.jpg",
    nome: "Jonathan Borges",
    cargo: "Desenvolvedor Fullstack",
    seguidoresIniciais: 15,
    seguindoContagem: 31,
    projetos: 45,
    bio: "Gosto de ajudar pessoas a construírem soluções eficientes e escaláveis.",
  };


  return (

    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#9561b9] p-4">

      <CardPerfil {...perfil} />

    </div>
  );}
