"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface iAppProps {
  images: any;
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, idx: any) => (
          <div key={idx} className="rounded-lg bg-background">
            <Image
              src={urlFor(image).url()}
              width={500}
              height={500}
              alt="Premium Fake ID | IDEmpire"
              className="h-full w-full object-contain object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative  rounded-lg bg-background lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="Premium Fake ID | IDEmpire"
          width={500}
          height={500}
          className="h-full w-full object-contain object-center"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider">
        </span>
      </div>
    </div>
  );
}
