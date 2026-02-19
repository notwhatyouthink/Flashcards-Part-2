
const Card = (props) => {
  return (
    <div 
      className={`card ${props.isFlipped ? 'flipped' : ''}`} 
      onClick={props.onCardClick}
    >
      <div className="card-inner">
        <div className={`card-front ${props.difficulty}`}>
          <div className="difficulty-badge">{props.difficulty}</div>
          {props.image && <img src={props.image} alt="card icon" className="card-image" />}
          <div className="card-content">{props.question}</div>
        </div>
        <div className={`card-back ${props.difficulty}`}>
          <div className="card-content">{props.answer}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;