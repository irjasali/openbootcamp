import React from "react";

const Saludo = (props) => {
  return (
    <div>
      saludo ! {props.nombre}
      <h2> tu edad es: {props.edad} </h2>
    </div>
  );
};

export default Saludo;
