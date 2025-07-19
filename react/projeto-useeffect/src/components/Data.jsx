function Data({ dados }) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <p><strong>Nome:</strong> {dados.nome}</p>
      <p><strong>Idade:</strong> {dados.idade}</p>
      <p><strong>Cidade:</strong> {dados.cidade}</p>
    </div>
  );
}

export default Data;
