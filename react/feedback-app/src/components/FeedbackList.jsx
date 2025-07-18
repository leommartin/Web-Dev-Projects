import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedbacks })
{
    return (
        <div>
        { feedbacks.map((f, i) => (
            <FeedbackItem
                key={i}
                nome={f.name}
                nota={f.rating}
                comentario={f.comment}
            />
        ))}
        </div>
    );
}

export default FeedbackList;