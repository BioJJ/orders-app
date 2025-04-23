"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signInAction } from "../specifications/auth.actions";
import { LoginFormData } from "../specifications/auth.schemas";
import { updateErrorToast, updateSuccessToast } from "@/utils/toast";
import { useAuth } from "@/shared/context/AuthContextP";

const LoginForm: React.FC = () => {
  const { push } = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const { handleSetSession } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Logando...");
    setLoading(true);

    const { username, password } = credentials;
    const data: LoginFormData = {
      email: username,
      password
    };

    const { res, ok, message } = await signInAction(data);
    console.log(res);

    if (ok) {
      updateSuccessToast(toastId, message);
      handleSetSession(res!);
      push("/dashboard");
    } else {
      updateErrorToast(toastId, message);
    }
  };

  return (
    <form className="space-y-4  p-6 rounded-lg" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          EMAIL
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={credentials.username}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          SENHA
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-sm text-gray-600">
            Lembrar-me
          </label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white ${
            loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
