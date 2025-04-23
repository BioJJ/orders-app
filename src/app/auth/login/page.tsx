import React from "react";
import LoginForm from "../components/client/LoginForm";
import Image from "next/image";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center gap-6 rounded-lg bg-white shadow-lg p-8">
        <div>
          <Image
            src="/logo-orders.jpg"
            alt="Logo do Meu Exame"
            width={300}
            height={100}
            className="mb-1 border border-gray-300"
          />
        </div>

        <div className="w-full border-t border-gray-300 my-1 mb-3" />

        <div className="flex gap-6 items-start">
          <Image
            src="/login-banner.svg"
            alt="Banner de Login"
            width={300}
            height={300}
            className="hidden md:block"
          />
          <LoginForm />
        </div>
        <div>
        <span className="block text-center text-sm text-[#23273D]">
          Ainda não tem cadastro?
        </span>
        <Link
          href="/auth/solicitacao-usuario"
          className="block text-center font-sans text-base font-bold text-[#7776A8]"
        >
          Cadastrar agora
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Login;
