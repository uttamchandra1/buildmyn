import React from "react";
import ProductImageCard from "./ProductImageCard";

const Images = [
  "/assets/frame1.png",
  "/assets/frame2.png",
  "/assets/frame1.png",
  "/assets/frame2.png",
  "/assets/frame1.png",
  "/assets/frame2.png",
  "/assets/frame1.png",
  "/assets/frame2.png",
  "/assets/frame2.png",
  "/assets/frame1.png",
  "/assets/frame2.png",
];

const ProductImage = () => {
  return (
    <div className="flex flex-wrap gap-[16px] pb-[16px] scrollbar-hide">
      {Images.map((image, index) => (
        <ProductImageCard key={index} ImageSrc={image} />
      ))}
    </div>
  );
};

export default ProductImage;
