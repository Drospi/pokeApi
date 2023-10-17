import { useState } from "react";

export const Card = (el) => {
  const [active, setActive] = useState(true);
  const [num, setNum] = useState(0);
  return (
    <div className="todo">
      <div className={active ? "caracteristicas d-none" : "caracteristicas"}>
        <h1 className="x" onClick={() => setActive(true)}>x</h1>
        <img src={el.data[num]?.sprites.other.home.front_default} alt="" />
        <h3>Nombre: {el.data[num]?.forms[0].name}</h3>
        <div>
          <p>Habilidades</p>
          <ul>
            {el.data[num]?.abilities.map((abi, key) => {
              return <li key={key}>{abi.ability.name}</li>;
            })}
          </ul>
        </div>
        <p>Altura: {el.data[num]?.height}</p>
        <p>Peso: {el.data[num]?.weight}</p>
        <p>Tipo: {el.data[num]?.types.map((typ)=>typ.type.name+' ')}</p>
      </div>
      <div className={active?"all":"all-w"}>
        {el.data.map((poke, key) => {
          return (
            <div
              className="card"
              onClick={() => {
                setActive(false);
                setNum(key);
              }}
              key={key}
            >
              <img src={poke?.sprites.other.home.front_default} alt="" />
              <h1>{poke?.forms[0].name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
