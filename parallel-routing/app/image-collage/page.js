import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imageUrls } from "@/lib/getRandomImageUrl";

const ImageCollage = async () => {
//   const imageUrls = await Promise.all(
//     Array.from({ length: 9 }).map(() => getRandomPicsum(300, 300))
//   );
  console.log(imageUrls);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Image Collage</h1>

      {/* Grid Container */}
      <div className="grid grid-cols-3 gap-4">
        {imageUrls.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <Link href={'/image-collage/'+(index+1)}>
                <Image
                src={img.url}
                alt={`Random Image ${index + 1}`}
                width={300}
                height={300}
                className="object-cover w-full h-full"
                />
            </Link>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default ImageCollage;
