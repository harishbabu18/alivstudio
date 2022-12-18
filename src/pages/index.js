import * as React from "react"


  import './../assets/vendor/animate.css/animate.min.css';
  import './../assets/vendor/aos/aos.css';
  import './../assets/vendor/bootstrap/css/bootstrap.min.css';
  import './../assets/vendor/bootstrap-icons/bootstrap-icons.css';
  import './../assets/vendor/boxicons/css/boxicons.min.css';
  import './../assets/vendor/glightbox/css/glightbox.min.css';
  import './../assets/vendor/remixicon/remixicon.css';
  import './../assets/vendor/swiper/swiper-bundle.min.css';
  import './../assets/css/style.css';
  import Carousel from 'react-bootstrap/Carousel';

  import slide1 from './../assets/img/slide/slide-1.jpg'
  import slide2 from './../assets/img/slide/slide-2.jpg'
  import slide3 from './../assets/img/slide/slide-3.jpg'
import Navigation from "../component/Navigation";
import Footer from "../component/Footer";




const IndexPage = () => {
  return (
    <div>
    <Navigation />
    <section id="hero">
    <Carousel fade interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
        />
        
        <Carousel.Caption class="carousel-container">
        <div className="container">
              <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Multi</span></h2>
              <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption class="carousel-container">
        <div class="container">
              <h2 class="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
              <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption class="carousel-container">
        <div class="container">
              <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
              <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>{/* End Hero */}

    <Footer />
  
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
