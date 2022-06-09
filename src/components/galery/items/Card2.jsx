const Card2 = ({img}) => {
    return ( 
        <div className={`card2-container ${img==='transform' && 'item2'}`}>
            <img className='card-img desktop' src={require(`../../../images/desktop/image-${img}.jpg`)} alt="egg" />
            <img className='card-img mobile' src={require(`../../../images/mobile/image-${img}.jpg`)} alt="egg" />
        </div>
     );
}
 
export default Card2;
