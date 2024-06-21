import school from "../assets/img/schoolp.jpg";
import degree from "../assets/img/degreep.jpg";
import diploma from "../assets/img/diplomap.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import stars from "../assets/img/stars.jpg";

export const Education = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="education" id="education">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="education-bx wow zoomIn">
                        <h2>Education</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme education-slider">
                            <div className="item">
                            <img src={degree} alt="Image" />
                                <h5>BE in Computer Engineering</h5>
                                <p>Fr. C. Rodrigues Institute of Technology, Vashi.</p>
                            </div>
                            <div className="item">
                                <img src={diploma} alt="Image" />
                                <h5>Diploma in Computer Engineering</h5>
                                <p>Vidyalankar Polytechnic, Wadala.</p>

                            </div>
                            <div className="item">
                                <img src={school} alt="Image" />
                                <h5>SSC</h5>
                                <p>BSM's, Thane.</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={stars} alt="Image" />
    </section>
  )
}
