import './Card.css';

// NOTE: not super crucial and more stylistic, but I think it's good practice to start destructing your props arg, expecially when there are this many.
export default function Card({
    // to expand on above, it allows the reader to understnad exactly what this component takes as soon as they start reading the code. Again, totally preference but I think there are good use cases for it here.
    shuffle,
    addId,
    img,
    title,
    id
}) {
    return(
        <div className="card__images__container" onClick={() => {shuffle(); addId(id)}} >
            {<img
                className="card__images"
                src={require("../Img/" + img)}
                alt={title}
            />}
            <div className='title__div'>
                <span>{title}</span>
            </div>
        </div>
    )
}