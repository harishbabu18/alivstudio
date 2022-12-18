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
  
    {/* ======= Footer ======= */}
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>Multi</h3>
                <p className="pb-3"><em>Qui repudiandae et eum dolores alias sed ea. Qui suscipit veniam excepturi quod.</em></p>
                <p>
                  A108 Adam Street <br />
                  NY 535022, USA<br /><br />
                  <strong>Phone:</strong> +1 5589 55488 55<br />
                  <strong>Email:</strong> info@example.com<br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action method="post">
                <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright <strong><span>Multi</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/multi-responsive-bootstrap-template/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>{/* End Footer */}
    {/* <div id="preloader" /> */}
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
  </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
