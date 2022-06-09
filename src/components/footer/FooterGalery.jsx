import galleryCone from '../../images/desktop/image-gallery-cone.jpg';
import galleryMilk from '../../images/desktop/image-gallery-milkbottles.jpg';
import galleryOrange from '../../images/desktop/image-gallery-orange.jpg';
import gallerySuger from '../../images/desktop/image-gallery-sugarcubes.jpg';

import galleryConeMobile from '../../images/mobile/image-gallery-cone.jpg';
import galleryMilkMobile from '../../images/mobile/image-gallery-milkbottles.jpg';
import galleryOrangeMobile from '../../images/mobile/image-gallery-orange.jpg';
import gallerySugerMobile from '../../images/mobile/image-gallery-sugar-cubes.jpg';

const FooterGalery = () => {
    return ( 
        <section className="footer-galery-container">
            <div>
                <img src={galleryMilk} alt="milk" className="img-footer desktop" />
                <img src={galleryMilkMobile} alt="milk" className="img-footer mobile" />
            </div>
            <div>
                <img src={galleryOrange} alt="orange" className="img-footer desktop" />
                <img src={galleryOrangeMobile} alt="orange" className="img-footer mobile" /> 
            </div>
            <div>
            <img src={galleryCone} alt="cone" className="img-footer desktop" />
            <img src={galleryConeMobile} alt="cone" className="img-footer mobile" />
            </div>
            <div>
                <img src={gallerySuger} alt="suger" className="img-footer desktop" />
                <img src={gallerySugerMobile} alt="suger" className="img-footer mobile" />
            </div>
        </section>
     );
}
 
export default FooterGalery;