import React, { useEffect, useState } from "react";
// import galleryImagesData from "./data/gallery_images.json";

const Welcome = () => {
  const [galleryImagesData, setgalleryImagesData] = useState([]);

  const loadGalleryImagesData = async () => {
    // Query the API Gateway
    const resp = await fetch(
      "https://cg24iul2e4.execute-api.us-east-1.amazonaws.com/Production/galleryImages"
    );
    const jsonData = await resp.json();

    // Assign response data to our state variable
    setgalleryImagesData(jsonData);
  };

  useEffect(() => {
    // Load the gallery images data from the API Gateway
    loadGalleryImagesData();
  }, []);

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {galleryImagesData.map((img) => (
            <img className={img.className} src={img.src} alt={img.alt} />
          ))}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel
          in the West End, browse our website and{" "}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default Welcome;
