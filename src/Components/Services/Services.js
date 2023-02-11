import "./Services.css";
import { serviceImages } from "../../imagesPaths";
const Services = () => {
  return (
    <section className="servicesSection">
      <h2 className="sectionTitle orange-text-color">Our Services</h2>
      <div className="services">
        {serviceImages.map((item) => {
          return (
            <div className="servicesimg" key={item.alt}>
              <img src={item.src} alt={item.alt} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
