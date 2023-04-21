"use client";
import { useState } from "react";
import LogoImg from "../assets/img/logo.png";
import Image from "next/image";
import Auth from "@/services/Auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSesion() {
    setIsLoading(true);
    return Auth.login({ email, password })
      .then((response) => {
        // console.log(response.data.data.credentials.token);
        localStorage.setItem(
          "accessToken",
          response.data.data.credentials.token
        );
        setEmail("");
        setPassword("");
        router.push("/menu");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    // console.log(email);
    // console.log(password);
  }

  return (
    <div className="container mt-2 mb-2">
      <div className="text-center mb-2">
        <Image
          src={LogoImg}
          style={{ width: "300px", height: "150px", marginBottom: "20px" }}
          alt="logo"
        />
      </div>
      <div className="text-center">
        <span className="font-bold fs-6">Email</span>
        <input
          className="form-control input-lg no-bg no-border b-b m-b-md"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="font-bold">Contraseña</span>
        <input
          className="form-control input-lg no-bg no-border b-b m-b-lg mb-2"
          type="password"
          style={{ letterSpacing: "2px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center m-b-lg">
          <button
            onClick={handleSesion}
            className={`w-100 btn btn-rounded btn-block btn-info btn-lg text-u-c font-bold ${
              isLoading ? "disabled" : ""
            }`}
          >
            {isLoading && (
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
