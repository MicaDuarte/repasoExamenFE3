const Card = ({ input1, input2 }) => {
    return (
      <div className="card">
        <h2>Bienvenido {input1}!</h2>
        <p>Estos son tus datos de ingreso</p>
        <p>Usuario: {input1}</p>
        <p>Contraseña: {input2}</p>
      </div>
    );
  };
  
  export default Card;
  