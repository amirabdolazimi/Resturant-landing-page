import "./Gallery.css";
import { galleryImages } from "../../imagesPaths";
const Gallery = () => {
  return (
    <section className="gallerySection">
      <h2 className="sectionTitle orange-text-color">Gallery</h2>
      <div className="galleryImages">
        {galleryImages.map((item) => {
          return (
            <div key={item.alt}>
              <img src={item.src} alt={item.alt} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
