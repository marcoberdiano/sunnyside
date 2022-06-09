const CardTestimonials = ({avatar, comment, name, cargo}) => {
    return ( 
        <div className="card-container">
            <img className="card-img" src={require(`../../images/image-${avatar}.jpg`)} alt={name} />
            <h3 className="card-comment">{comment}</h3>
            <p className="card-name">{name}</p>
            <p className="card-cargo">{cargo}</p>
        </div>
     );
}
 
export default CardTestimonials;