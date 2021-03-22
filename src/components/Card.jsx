export default function Cards(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" alt="cards" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.disc}</p>
      </div>
      <button className="card__btn">View</button>
    </div>
  );
}

