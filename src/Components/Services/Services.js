import "./Services.css";
import firstServices from "../../images/20.jpg";
import secondtServices from "../../images/4.jpg";
import thirdServices from "../../images/5.jpg";
import fourthServices from "../../images/25.jpg";
import fifthServices from "../../images/17.jpg";
import sixthServices from "../../images/9.jpg";
const Services = () => {
  return (
    <section className="servicesSection">
      <h2 className="sectionTitle orange-text-color">Our Services</h2>
      <div className="services">
        <div className="servicesimg">
          <img src={firstServices} alt="firstServices" />
          <h3>Free</h3>
          <p>Free delivery</p>
        </div>
        <div className="servicesimg">
          <img src={secondtServices} alt="secondtServices" />
          <h3>Hot</h3>
          <p>eat and hot quality</p>
        </div>
        <div className="servicesimg">
          <img src={thirdServices} alt="thirdServices" />
          <h3>Delicious</h3>
          <p>delicious and sweet food</p>
        </div>
        <div className="servicesimg">
          <img src={fourthServices} alt="fourthServices" />
          <h3>Dietary diversity</h3>
          <p>The greatest variety of food</p>
        </div>
        <div className="servicesimg">
          <img src={fifthServices} alt="fifthServices" />
          <h3>Fresh raw materials</h3>
          <p>the latest raw materials</p>
        </div>
        <div className="servicesimg">
          <img src={sixthServices} alt="sixthServices" />
          <h3>The cafe</h3>
          <p>Hot and cold drinks</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
