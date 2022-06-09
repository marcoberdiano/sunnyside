import imageGraphic from "../../../images/desktop/image-graphic-design.jpg";
import photography from "../../../images/desktop/image-photography.jpg";

const Card3 = ({title, desc}) => {
    
    return ( 
        <div 
            className="card3-container" 
            style={{ backgroundImage: `url(${title==='Graphic design' ? imageGraphic: photography} )` }}
        >
           
            <h2 className="card3-title" 
                style={{color: `${title==='Graphic design' ? 'hsl(167, 40%, 24%)' : 'hsl(198, 62%, 26%)'}`}}
            >
                    {title}
            </h2>
            <p className="card3-desc"
                style={{color: `${title==='Graphic design' ? 'hsl(167, 40%, 24%)' : 'hsl(198, 62%, 26%)'}`}}
            >
                {desc}
            </p>
           
            
        </div>
     );
}
 
export default Card3;