import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const TransformationStartsHere = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer-section">
      <div className="footer-section-flex">
        <div>
          <h2 style={{color:"white"}}>Transformation starts here</h2>
          <br></br>
          <p>At LVC Solutions, transformation starts where vision meets action. We’re not just a software company—we’re your dedicated partner in reimagining what's possible.<br />
            Rooted in innovation and driven by real-world results, we empower businesses to cross the digital frontier with confidence and agility.<br />
            Let's build tomorrow—starting now.</p>
          <button
          className="Connect-button"
          onClick={() => {
            handleNavigation("/contact");
          }}
          >Connect With Us</button>
        </div>
        <div className="divider"></div>
        <div className="footer-section-flex-column">
          <p>FIND OUT MORE</p>
          <button className="Connect-button-service"
          onClick={() => {
            handleNavigation("/services");
          }}
          >Our Services</button>
          <button className="Connect-button-contact "
          onClick={() => {
            handleNavigation("/contact");
          }}
          >Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default TransformationStartsHere
