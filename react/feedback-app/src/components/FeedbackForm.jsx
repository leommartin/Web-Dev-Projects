import './css/FeedbackForm.css'

function FeedbackForm()
{
    return(
        <>
            <form class="feedback-form">
                <label>Nome</label>
                <input type="text" placeholder="Digite o seu nome"/>

                <label>Nota</label>
                <input type="number" min="1" max="5" placeholder="Digite a sua nota"/>

                <label>Comentário</label>
                <textarea placeholder="Escreva o seu comentário"></textarea>

                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default FeedbackForm;