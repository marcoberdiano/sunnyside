import Card1 from "./items/Card1";
import Card2 from "./items/Card2";
import Card3 from "./items/Card3";
const Galery = () => {
    return ( 
        <section className="galery-container">
            <Card1
                title='Transform your brand'
                desc='We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.'
            />
            <Card2 img='transform' />
            <Card2 img='stand-out' />
            <Card1
                title='Stand out to the right audience'
                desc='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
            />
            <Card3
                title='Graphic design'
                desc='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
            />
            <Card3
                title='Photography'
                desc='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
            />
        </section>
     );
}
 
export default Galery
