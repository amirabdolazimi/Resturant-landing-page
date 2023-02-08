import "./Footer.css";
import { FaRegCopyright, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <footer>
      <div className="footerSection">
        <div className="footerDetails">
          <div>
            <ul>
              <h2 className="orange-text-color">Service</h2>
              <li>Answer FAQ</li>
              <li>Bugs Reports</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="socialNetworks">
            <h2 className="orange-text-color">Communication</h2>
            <div className="telegram">
              <div>
                <FaTelegram className="communication-icon" />
              </div>
              <div>Telegram</div>
            </div>
            <div className="whatsapp">
              <div>
                <FaWhatsapp className="communication-icon" />
              </div>
              <div>Whatsapp</div>
            </div>
            <div className="youtube">
              <div>
                <TfiYoutube className="communication-icon" />
              </div>
              <div>YouTube</div>
            </div>
          </div>
          <div>
            <ul>
              <h2 className="orange-text-color">Foods</h2>
              <li>Online Reserve</li>
              <li>Recipes</li>
              <li>Hiring a chef</li>
            </ul>
          </div>
        </div>
        <div className="copyRight">
          <FaRegCopyright />
          <p>
            All information is reserved for
            <span className="orange-text-color"> DELICIOUS </span> FOOD
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
