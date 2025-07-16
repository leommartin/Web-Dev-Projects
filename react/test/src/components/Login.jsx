import { useState } from 'react';

function Login() {
  const [estaLogado, setEstaLogado] = useState(false);

  return (
    <div>
        {/* Mensagem condicional */}
        {estaLogado ? (
            <p>✅ Bem-vindo de volta!</p>
        ) : (
            <p>🔒 Por favor, faça login.</p>
        )}

        {/* Botão muda o estado */}
        <button onClick={() => setEstaLogado(!estaLogado)}>
            {estaLogado ? "Logout" : "Login"}
        </button>
    </div>
  );
}

export default Login;
