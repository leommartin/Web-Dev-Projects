import {useState} from 'react';

/**
 * Form component that manages user login state using React hooks.
 * Allows users to input their name and email to log in, and displays a welcome message upon successful login.
 * Users can also log out, which resets the form fields.
 *
 * @component
 * @returns {JSX.Element} The rendered form component.
 */

function Form() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [estaLogado, setEstaLogado] = useState(false);
    // 3 state variables: nome, email, estaLogado

    // This function is called when the form is submitted (button is clicked)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nome:", nome);
        console.log("Email:", email);

        if (!estaLogado) {
            if (nome.trim() && email.trim()) {
                // trim() removes whitespace from both ends of a string
                // So, if nome and email are not empty, we log the user in
                console.log("Usuário logado com sucesso!");
                setEstaLogado(true);
            }
            else {
                alert("Preencha nome e email antes de logar!");
            }
        } else {
            // If the user is logged in and clicks the button, we log them out
            setEstaLogado(false);

            // Reset the form fields after submission
            setNome('');
            setEmail('');
        }
    };

    return (
    <form onSubmit={handleSubmit}>
       
        {
        /* 
           What are we doing here?
           We are updating the name/email value each time the user types a letter 
           Too, we are using useState + onChange to show de inputs if the user is not logged in.
           If the user is logged in, the inputs are not shown.
        */
        }
        
        {estaLogado ? <p>✅Bem-vindo, {nome}!</p> : <p>🔒 Por favor, faça login.</p>}


        {!estaLogado && (
            <>
                <input
                type="text"
                placeholder="Name"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </>
        )}

      <button type="submit">
        {estaLogado ? "Logout" : "Login"}  
      </button>
    </form>
  );
}

export default Form;