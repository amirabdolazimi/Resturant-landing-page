import "./Reserve.css";
import firstReserve from "../../images/13.jpg";
import secondReserve from "../../images/14.jpg";
import thirdReserve from "../../images/24.jpg";
const Reserve = () => {
  return (
    <section className="reserveSection">
      <h2 className="sectionTitle orange-text-color">Ordering</h2>
      <div className="reserveDetails">
        <div className="locationsDetails">
          <h3>Order easily !</h3>
          <h5 className="orange-text-color reserve-branches">branches</h5>
          <h4>
            France
            <span className="orange-text-color"> ( </span>
            Paris
            <span className="orange-text-color"> ) </span>
          </h4>
          <h4>
            German
            <span className="orange-text-color"> ( </span>
            Berlin
            <span className="orange-text-color"> ) </span>
          </h4>
          <h4>
            Canada
            <span className="orange-text-color"> ( </span>
            Toronto
            <span className="orange-text-color"> ) </span>
          </h4>
          <p>
            duis ultricies lacus turpis in massa tempor ultricies lacus turpis
            massa
          </p>
        </div>
        <div className="connectionDetails">
          <div className="telNumber">
            <span className="orange-text-color reserve-tel">tel</span>
            <p>658-854-144</p>
          </div>
          <div className="emailAddress">
            <span className="orange-text-color reserve-email">email</span>
            <p>info@gmail.com</p>
          </div>
          <div className="reserveImages">
            <div>
              <img src={firstReserve} alt="firstReserve" />
            </div>
            <div>
              <img src={secondReserve} alt="secondReserve" />
            </div>
            <div>
              <img src={thirdReserve} alt="thirdReserve" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
