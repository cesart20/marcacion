"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Auth from "@/services/Auth";

const Card = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const tokenAccess = localStorage.getItem("accessToken");
  // console.log(tokenAccess);

  const handleUbicacion = () => {
    var options = {
      enableHighAccuracy: true,
      timeout: 6000,
      maximumAge: 0,
    };

    const success = (positions) => {
      var coordenadas = positions.coords;

      let position = {
        lat: coordenadas.latitude,
        lng: coordenadas.longitude,
      };

      setIsLoading(true);
      // console.log(tokenAccess);
      return Auth.marcar({ position, token: tokenAccess })
        .then((response) => {
          // console.log(response);
          toast.success("Marcacion Correcta");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Algo salio mal");
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    const error = (error) => {
      console.warn("ERROR(" + error.code + "): " + error.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  function handleNewSesion() {
    return router.push("/");
  }

  return (
    <>
      {tokenAccess.length !== 0 ? (
        <div className="link-card">
          <h1 style={{ fontWeight: "bold" }}>
            Hora de <span className="text-gradient">Marcar</span>
          </h1>

          <button
            onClick={handleUbicacion}
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
      ) : (
        <div className="link-card">
          <h1 style={{ fontWeight: "bold" }}>
            Hora de <span className="text-gradient">Marcar</span>
          </h1>
          <button
            onClick={handleNewSesion}
            className="w-100 btn btn-rounded btn-block btn-info btn-lg text-u-c font-bold"
          >
            Volver a loguearme
          </button>
        </div>
      )}
    </>
  );
};

export default Card;
