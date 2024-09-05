"use client"; // Transformar o componente em um Client Component

import { signInWithPopup } from "firebase/auth";
import { useRouter } from 'next/navigation'; // Hook para redirecionar
import { auth, provider } from '../lib/firebase';

export default function LoginPage() {
  const router = useRouter(); // Inicializar o roteamento

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("Login realizado com sucesso");
      
      // Redirecionar o usuário para a página de carros após o login
      router.push('/cars'); // Redireciona para a página de listagem de carros
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Entrar com Google
      </button>
    </div>
  );
}
