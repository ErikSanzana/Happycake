import React from 'react';

const Home = () => {
  return (
    <div className="centrado">
      <h1>Bienvenido a Happy Cake</h1>
      <p>El lugar de los pasteles felices</p>
      <img
        src="src\img/torta.png"
        alt="Pastel feliz"
        style={{ maxWidth: '100%' }}
      />
    </div>
  );
}

export default Home;
