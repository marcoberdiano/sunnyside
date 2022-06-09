import arrow from '../../images/icon-arrow-down.svg';
const Hero = () => {
    return ( 
        <div className="hero-container">
          <h1 className="title">We are creatives</h1>
          <img src={arrow} alt='arrow' className="arrow"/>
        </div>
     );
}
 
export default Hero;