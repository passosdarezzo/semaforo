import React from "react";

import "./luz.css";

interface ILuz {
  cor: {
    id: number,
    nome: string,
    primeira: string,
    segunda: string
  }
  aceso: boolean
  onClick: (id: number) => void
}

const Luz = ({ cor, aceso, onClick }: ILuz) => {
  const estiloAceso = {
    background: `repeating-linear-gradient(${cor.primeira}, ${cor.segunda} 5px)`,
    boxShadow: `0 0 40px ${cor.primeira}`
  }

  const liStyle = {color : 'blue', fontSize:'23px'}

  return (
    <div
      onClick={() => onClick(cor.id)}
      className="luz"
      style={aceso ? estiloAceso : undefined}
    />
  );
}

export default Luz;
