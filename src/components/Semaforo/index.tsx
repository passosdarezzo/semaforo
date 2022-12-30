import React, { useState, useEffect } from "react";
import Luz from "./Luz";

import "./semaforo.css";

const Semaforo = () => {
  const [luzAcesa, setLuzAcesa] = useState<number>(1);
  
  useEffect(() => {
    window.document.title = `Semáforo ${cores.find(it => it.id === luzAcesa)?.nome}`;
  }, [luzAcesa]);

  const cores = [
    { id: 1, nome: "Fechado", primeira: "#f00", segunda: "#e00" },
    { id: 2, nome: "Alerta", primeira: "#fd0", segunda: "#ec0" },
    { id: 3, nome: "Aberto", primeira: "#0d0", segunda: "#0c0" }
  ];

  return (
    <>
      <h1>Semáforo</h1>
      <div
        className="semaforo"
      >
        {
          cores.map(cor => (
            <Luz
              key={cor.id}
              cor={cor}
              aceso={cor.id === luzAcesa}
              onClick={(id: number) => setLuzAcesa(id)}
            />
          ))
        }
      </div>
    </>
  );
}

export default Semaforo;
