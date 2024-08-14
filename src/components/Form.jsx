import InputField from './InputField';

const Form = ({ input1, input2, setInput1, setInput2, handleSubmit }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={onSubmit}>

        <h3>Iniciar sesion</h3>
      <InputField
        id="input1"
        label="Usuario:"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <InputField
        id="input2"
        label="Contraseña:"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button type="submit">Iniciar sesion </button>
      <button disabled>registrarse</button>
    </form>
  );
};

export default Form;
