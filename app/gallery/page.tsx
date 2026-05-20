// components/PhotoGallery.jsx
"use client";
import { useState } from "react";
import Image from "next/image";


  const photos = [
  { src: "/images/gallery/1.jpg", alt: "Construction site", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/2.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/3.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/4.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/5.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/6.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/7.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/8.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/9.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/10.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/11.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/12.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/13.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/14.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/15.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/16.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
];


export default function PhotoGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-10 mt-5">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative aspect-video cursor-pointer overflow-hidden rounded"
            onClick={() => setSelected(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
             sizes="100vw"
             priority
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <Image
            src={selected.src}
            alt={selected.alt}
            width={900}
            height={600}
            className="object-contain max-h-[90vh] rounded"
          />
        </div>
      )}
    </>
  );
}