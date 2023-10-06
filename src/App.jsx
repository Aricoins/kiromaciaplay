import React, { useState, useEffect } from 'react';
import baseDeDatosQuiromancia from './index';
import styled, { keyframes } from 'styled-components';

const rotateIn = keyframes`
  0% {
    transform: rotateY(180deg);
    opacity: 0.1;
  }
  50% {
    transform: rotateY(0deg);
  }
  100% {
    opacity: 1;
  }
`;

const Cont = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  `;

const Titulo = styled.h1`
  color: #d8d846;
  display: flex;
  margin-left: 11%;
  font-size: 50px;
`;

const Mano = styled.li`
  background-color: #99ebdec1;
  width:150vh;
  height:150vh;
  margin: 20px;
  padding: 20px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 1000px;
  cursor: pointer;
  opacity: 0;

  &.flipped {
    animation: ${rotateIn} 5s ease-in-out;
    opacity: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Boton = styled.button`
  margin: 20px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 20%;
`;

const App = () => {
  const [data, setData] = useState([]);
  const [manoSeleccionada, setManoSeleccionada] = useState(null);

  useEffect(() => {
    setData(baseDeDatosQuiromancia);
  }, []);

  const handleFlip = (index) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, flipped: !item.flipped } : item
      )
    );
  };

  const seleccionarManoAlAzar = () => {
    const indiceAleatorio = Math.floor(Math.random() * data.length);
    setManoSeleccionada(data[indiceAleatorio]);
  };

  return (
    <div>
      <Titulo>Kiromancia AI</Titulo>
      <Boton onClick={seleccionarManoAlAzar}>Cargar Imagen</Boton>
      <Cont>
        <ol>
          {manoSeleccionada && (
            <Mano className="flipped">
              <p>Vida: {manoSeleccionada.Vida}</p>
              <p>Sabiduría: {manoSeleccionada.Sabiduria}</p>
              <p>Amor: {manoSeleccionada.Amor}</p>
              <p>Destino: {manoSeleccionada.Destino}</p>
            </Mano>
          )}
        </ol>
      </Cont>
    </div>
  );
};

export default App;
