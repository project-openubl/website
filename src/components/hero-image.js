import React from "react";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

const HeroImage = ({ image, innerClassName, ...other }) => {
  const hero = getImage(image);

  if (!hero) {
    return (
      <div {...other}>
        <StaticImage
          alt="Hero image"
          layout="fullWidth"
          aspectRatio="2.22"
          className={innerClassName}
          src="../images/cta1.png"
        />
      </div>
    );
  }

  return (
    <div {...other}>
      <GatsbyImage className={innerClassName} image={hero} alt="Hero" />
    </div>
  );
};

export default HeroImage;
