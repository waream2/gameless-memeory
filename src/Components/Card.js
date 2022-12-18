import './Card.css';
export default function Card(props) {

    return(
        <div className="card__images__container" onClick={() => {props.shuffle(); props.addId(props.id)}} >
            {<img 
                className="card__images" 
                src={require("../Img/" + props.img)} 
                alt={props.title} 
            />}
            <div className='title__div'>
                <span>{props.title}</span>
            </div>
        </div>
    )
}
