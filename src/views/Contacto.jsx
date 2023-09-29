import React, { Component } from 'react';

const Contacto = () => {
  return (
    <div className="centrado">
      <h2>Cuéntanos, ¿en qué te podemos ayudar?</h2>
      <form>
        <div className="input-group">
          <label>Correo:</label>
          <input
            type="email"
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div className="input-group">
          <label>Descripción:</label>
          <textarea />
        </div>
        <button type="submit" className="btn btn-danger">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
