import "./card.css"
export const Card = ({ name, price, description, imagen }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <img src={imagen} className="fotico" />
        </div>
    )
}
