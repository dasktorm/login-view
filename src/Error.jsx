import React from "react";
import Swal from "sweetalert2";

const Error = () => {
    Swal.fire(
      'Error',
      'Credenciales incorrectas.',
      'error'
    )
    return (
      <div>
        <h1>Oops, seguro no eres tú.</h1>
        <p>Contraseña incorrecta, intenta de nuevo.</p>
      </div>
    );
  }

export default Error