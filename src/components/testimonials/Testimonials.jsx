import data  from './data.json';
import CardTestimonials from './CardTestimonials';
const Testimonials = () => {
    return ( 
        <section className='testimonials-container'>
            <h1 className='title'>Client testimonials</h1>
            <div className='testimonials-cards'>
                {data.map(item=>
                    <CardTestimonials key={item.name}
                        avatar={item.avatar} 
                        comment={item.comment} 
                        name={item.name} 
                        cargo={item.cargo}
                    />    
                )}
            </div>   
            
        </section>
     );
}
 
export default Testimonials;