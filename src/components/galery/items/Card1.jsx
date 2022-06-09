import {Button} from '../../../stylecomponents/style';

const Card1 = ({title, desc}) => {
    return ( 
        <div className={`card-container ${title==='Transform your brand' && 'item1'}`}>
            <h2 className="card-title">{title}</h2>
            <p className="card-desc">
                {desc}
            </p>
            <Button color={title}>Learn more</Button>
        </div>
     );
}
 
export default Card1;