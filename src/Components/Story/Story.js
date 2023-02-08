import "./Story.css";
import firstStory from "../../images/2.jpg";
import secondtStory from "../../images/15.jpg";
import thirdstory from "../../images/6.jpg";
import fourthStory from "../../images/12.jpg";
const Story = () => {
  return (
    <section className="storySection">
      <h2 className="sectionTitle orange-text-color">Our Story</h2>
      <div className="stories">
        <div className="storyimg">
          <img src={firstStory} alt="firstStory" />
        </div>
        <div className="storyimg">
          <img src={secondtStory} alt="secondtStory" />
        </div>
        <div className="storyimg">
          <img src={thirdstory} alt="thirdstory" />
        </div>
        <div className="storyimg">
          <img src={fourthStory} alt="fourthStory" />
        </div>
      </div>
    </section>
  );
};

export default Story;
