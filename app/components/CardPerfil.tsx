"use client";
import React, { useEffect, useState } from "react"; 
import Image from "next/image"; 

import { UserPlusIcon, EnvelopeIcon, CheckIcon } from "@heroicons/react/24/outline"; 

interface PropriedadesCartaoPerfil {
    imagem: string; 
    nome: string;
    cargo: string;
    seguidoresIniciais: number; 
    seguindoContagem: number; 
    projetos: number; 
    bio: string;
 
}


export default function CardPerfil(props: PropriedadesCartaoPerfil) { 
    const { imagem, nome, cargo, seguidoresIniciais, seguindoContagem, projetos, bio } = props;

    const [seguindo, setSeguindo] = useState(false); 
    const [numeroDeSeguidores, setNumeroDeSeguidores] = useState(seguidoresIniciais);

    useEffect(() => { 
        const estadoSalvo = localStorage.getItem("status-de-seguidor"); 
        
        if (estadoSalvo === "true") { 
            setSeguindo(true);
            setNumeroDeSeguidores(seguidoresIniciais + 1);
        }
    }, [seguidoresIniciais]); 

    useEffect(() => {
        localStorage.setItem("status-de-seguidor", String(seguindo));
    }, [seguindo]); 

    const lidarCliqueSeguir = () => { 
        const novoEstado = !seguindo;
        setSeguindo(novoEstado);
        setNumeroDeSeguidores(seguidoresIniciais + (novoEstado ? 1 : 0));
    }

    return (
        <div className="relative w-full max-w-sm h-auto rounded-[24px] p-6 shadow-2xl bg-white flex flex-col items-center justify-center text-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
            <div className="absolute top-0 left-0 w-[400px] h-[140px] bg-gray-100"></div>

            <div className="relative z-10 w-[136px] h-[136px] rounded-full overflow-hidden border-4 border-white shadow-xl mt-12 bg-white flex items-center justify-center"> 
                <div className="w-[131px] h-[131px] rounded-full border-4 border-purple-500 overflow-hidden">
                    <Image
                        src={imagem} 
                        alt={nome}
                        width={131} 
                        height={131}
                        className="object-cover rounded-full"
                    />
                </div>
            </div>


            <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center w-[107.72px] h-[35px] mt-[2px] whitespace-nowrap">{nome}</h2> 
            <p className="font-medium text-[12.75px] leading-[22px] text-gray-600 mt-1">{cargo}</p>

            <div className="flex justify-around items-center w-[233.95px] h-[51.5px] mt-6 mb-6">
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-gray-800 flex items-center justify-center w-[39.61px] h-[27px]">{numeroDeSeguidores}</span> 
                    <span className="text-xs text-gray-500 w-[65.61px] h-[17px] mt-[1px]">Seguidores</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-gray-800 flex items-center justify-center w-[39.61px] h-[27px]">{seguindoContagem}</span>
                    <span className="text-xs text-gray-500 mt-1">Seguindo</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-gray-800 flex items-center justify-center w-[39.61px] h-[27px]">{projetos}</span>
                    <span className="text-xs text-gray-500 mt-1">Projetos</span>
                </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 w-full px-6 mb-4">
                <button
                    onClick={lidarCliqueSeguir} 
                    className={`w-[153px] h-[48px] flex items-center justify-center gap-2 px-4 rounded-[12px] text-white font-semibold transition-all duration-300 ${
                        seguindo
                        ? "bg-[#00C853] shadow-lg hover:bg-green-600"
                        : "bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:from-indigo-600 hover:to-purple-700"
                    }`}
                >
                    {seguindo ? (
                        <CheckIcon className="h-6 w-6" /> 
                    ) : (
                        <UserPlusIcon className="h-6 w-6" /> 
                    )}
                    {seguindo ? "Seguindo" : "Seguir"}
                </button>

                <button 
                    className="w-[155px] h-[48px] flex items-center justify-center gap-2 px-4 rounded-[12px] bg-gray-50 text-gray-700 font-semibold shadow-inner hover:bg-gray-100 transition-colors duration-300 border"
                >
                    <EnvelopeIcon className="h-6 w-6 text-gray-500" />
                    Mensagem
                </button>
            </div>

            
            <div className="px-6 text-sm text-gray-700 mt-2 leading-snug">
                <p>{bio}</p>
            </div>
            
        </div>
    );
}