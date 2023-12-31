import { useState } from "react";
import { Button } from "../components/ui/button";

export default function Login() {
  const [password, setPassword] = useState("");

  const handleChange = (e: any) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        console.log("Inicio de sesión exitoso");
        const token = await response.json();
        localStorage.setItem("login-token", JSON.stringify(token));
        // Puedes redirigir al usuario o realizar otras acciones después del inicio de sesión exitoso
      } else {
        console.error("Inicio de sesión fallido");
        // Puedes mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      // Puedes manejar el error de alguna manera
    }
  };

  return (
    <section className="min-h-screen  flex flex-col justify-center items-center text-center w-full max-w-sm mx-auto space-y-4">
      <div className="">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-600">Enter the password below to login</p>
      </div>
      <div className="w-full space-y-2">
        <form onSubmit={onSubmit}>
          <input
            type="password"
            placeholder="123456789"
            className="border border-gray-300 dark:border-slate-700 w-full p-2 rounded-lg bg-transparent focus:outline-none focus:border-blue-500"
            onChange={handleChange}
            autoComplete="password"
          />
          <Button type="submit" className="w-full">
            Login with password
          </Button>
        </form>
      </div>
    </section>
  );
}
