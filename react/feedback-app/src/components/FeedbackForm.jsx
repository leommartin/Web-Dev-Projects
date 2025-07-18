import { useState } from 'react';
import FeedbackItem from './FeedbackItem'
import './css/FeedbackForm.css'
import FeedbackList from './FeedbackList';

function FeedbackForm()
{
    const [name, setName] = useState("");
    const [rating, setRating] = useState(1);
    const [comment, setComment] = useState("");
    const [feedbacks, setFeedback] = useState([]);

    // This function will be called when the form is submitted
    // Here, we create a new feedback object and add it to the feedbacks state (array)
    function handleSubmit(event) {
        event.preventDefault();

        const newFeedback = {
            name: name, 
            rating: rating,
            comment: comment
        };

        // Update the feedbacks state with the new feedback
        setFeedback([...feedbacks, newFeedback]);

        console.log(newFeedback);
        console.log(feedbacks);

        // Reset the form fields
        setName("");
        setRating(1);
        setComment("");
    }

    return(
        <>

            {feedbacks.length === 0 && <p>Nenhum feedback enviado ainda.</p>}
            {feedbacks.length > 0 && <p>Você já enviou {feedbacks.length} feedbacks.</p>}

            {/* Using onChange to update the state each time the user types in the input fields. */}
            <form className="feedback-form" onSubmit={handleSubmit}>
                <label>Nome</label>
                <input 
                  type="text"
                  placeholder="Digite o seu nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <label>Nota</label>
                <input 
                  type="number"
                  min="1"
                  max="5" 
                  placeholder="Digite a sua nota"
                  value={rating}
                  onChange = {e=> setRating(e.target.value)}
                />

                <label>Comentário</label>
                <textarea 
                  placeholder="Escreva o seu comentário"
                  value={comment}
                  onChange={e => setComment(e.target.value)}   
                />

                <button type="submit">Enviar</button>
            </form>

            {/* Display the feedbacks rendering a div for each feedback item. */}
            <FeedbackList feedbacks={feedbacks} />

        </>
    );
}

export default FeedbackForm;