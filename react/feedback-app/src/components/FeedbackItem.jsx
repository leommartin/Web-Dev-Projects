
// Here we get the props passed to the FeedbackItem component
// These props are passed with the FeedbackItem component in FeedbackForm.jsx

function FeedbackItem({ nome, nota, comentario }) {
  return (
    <div className="feedback-item">
      <p><strong>{nome}</strong></p>
      <p><strong>Nota:</strong> {nota}</p>
      <p><strong>Comentário:</strong> {comentario}</p>
      <hr />
    </div>
  );
}

export default FeedbackItem;
