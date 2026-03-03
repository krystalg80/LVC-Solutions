import { Link } from "react-router-dom"; //added link import for the useful links
import logo from "../assets/lvc-icon-removebg-preview.png"; // Importing the logo
import twitter from '../assets/vecteezy_twitter-new-logo-twitter-icons-new-twitter-logo-x-2023-x_31737215.png'
import ig from '../assets/vecteezy_instagram-logo-png-instagram-icon-transparent_18930460.png'
import linkedIn from '../assets/vecteezy_linkedin-logo-png-linkedin-logo-transparent-png-linkedin_23986569.png'
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0000",
        color: "#fff",
        padding: "10px",

        bottom: 0,
        width: "100%",
      }}
    >
      <div className='social-media-container-footer'>
        <div>
          <a href="https://x.com/lvcsolutions?s=21" className="twitter-social" target="_blank" rel="noreferrer">
            <img alt='twitter button that redirects to LVC twitter account' className='twitter-media-imgs' src={twitter}/>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/company/lvc-solutions-llc" className="linkedIn-social" target="_blank" rel="noreferrer">
            <img alt='linkedIn button that redirects to LVC linkedIn account' className='linkedIn-media-imgs' src={linkedIn}/>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/lvcsolutions?igsh=Y2Y4OG92eDlnNmh4&utm_source=qr" className="instagram-social" target="_blank" rel="noreferrer">
            <img alt='Instagram button that redirects to LVC Instagram account' className='instagram-media-imgs' src={ig}/>
          </a>
        </div>
      </div>
      <div className="container my-5">
        <footer className="text-center text-lg-start text-white" >
          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">LVC Solutions</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                  <p>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block' }}>
                      <img src={logo} alt="Company Logo" className="logo" />
                    </Link>
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Social Network</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                  <p>
                    <a href="https://x.com/lvcsolutions?s=21" className="text-white" target="_blank" rel="noreferrer">
                      X
                    </a>
                  </p>
                  <p>
                    <a href="https://www.linkedin.com/company/lvc-solutions-llc" className="text-white " target="_blank" rel="noreferrer">
                      Linkedin
                    </a>
                  </p>
                  <p>
                    <a href="https://www.instagram.com/lvcsolutions?igsh=Y2Y4OG92eDlnNmh4&utm_source=qr" className="text-white" target="_blank" rel="noreferrer">
                      Instagram
                    </a>
                  </p>
                  {/* <p>
                    <a href="#!" className="text-white">
                    Facebook
                    </a>
                  </p> */}
                </div>
                {/*
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                  <p>
                    <a href="/" className="text-white">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="/about" className="text-white">
                     Who we are
                    </a>
                  </p>
                  <p>
                    <a href="/services" className="text-white">
                      Services
                    </a>
                  </p>
                  <p>
                    <a href="/insight" className="text-white">
                  Insights
                    </a>
                  </p>
                  <p>
                    <a href="/projects" className="text-white">
                      Projects
                    </a>
                  </p>
                  <p>
                    <a href="/careers" className="text-white">
                      Careers
                    </a>
                  </p>
                  <p>
                    <a href="/contact" className="text-white">
                      Contact us
                    </a>
                  </p>
                </div> */}

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                  <p>
                    <i className="fas fa-home mr-3"></i> 5015 Addison Circle,<br/>
                    Addison, TX 75001, United States
                  </p>
                  <p>
                    <i className="fas fa-home mr-3"></i> 228 Hamilton Ave 3rd Floor,<br/>
                    Palo Alto, CA 94301, United States
                  </p>
                  {/* <p>
                    <i className="fas fa-envelope mr-3"></i> info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 60 275 65 614
                  </p> */}
                  <p>
                    <i className="fas fa-print mr-3"></i>info@lvc-solutions.com
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2025 Copyright:
            <a className="text-white" href="/">
              Lvc-solutions.com
            </a>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
