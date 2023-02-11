import "./Story.css";
import { storyImages } from "../../imagesPaths";
const Story = () => {
  return (
    <section className="storySection">
      <h2 className="sectionTitle orange-text-color">Our Story</h2>
      <div className="stories">
        {storyImages.map((item) => {
          return (
            <div className="storyimg" key={item.alt}>
              <img src={item.src} alt={item.alt} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Story;
