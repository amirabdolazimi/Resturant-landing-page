import "./Gallery.css";
import firstGallery from "../../images/22.jpg";
import secondGallery from "../../images/19.jpg";
import thirdGallery from "../../images/10.jpg";
import fourthGallery from "../../images/13.jpg";
import fifthGallery from "../../images/1.jpg";
const Gallery = () => {
  return (
    <section className="gallerySection">
      <h2 className="sectionTitle orange-text-color">Gallery</h2>
      <div className="galleryImages">
        <div>
          <img src={firstGallery} alt="firstGallery" />
        </div>
        <div>
          <img src={secondGallery} alt="secondGallery" />
        </div>
        <div>
          <img src={thirdGallery} alt="thirdGallery" />
        </div>
        <div>
          <img src={fourthGallery} alt="fourthGallery" />
        </div>
        <div>
          <img src={fifthGallery} alt="fifthGallery" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
