import {imageUrls} from "@/lib/getRandomImageUrl";
import React from "react";

export default async function ImageDetail({ params }) {
  const { id } = await params;
    console.log(id);
    const selectedImage = imageUrls.find((img,index) => index === parseInt(id-1));
    console.log(selectedImage);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Image Detail - {id}</h1>
        {selectedImage && (
            <div>
                <img src={selectedImage.url} alt={`Image ${id}`} width={600} height={600} />
                <p>This is the detail view for image with ID: {id}</p>
                <p>Name: {selectedImage.name}</p>
                <p>Photographer: {selectedImage.photographer}</p>   
                <p>Description: {selectedImage.description}</p>
            </div>
        )}
      
      
    </div>
  );
}