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
//   { src: "/images/gallery/17.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/18.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/19.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/20.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/21.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/22.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/23.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/24.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/25.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/26.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/27.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/28.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/29.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/30.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/31.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/32.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/33.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/34.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
//   { src: "/images/gallery/35.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/36.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/37.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/38.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/39.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/40.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/41.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/42.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/43.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/44.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/45.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/46.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/47.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/48.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/49.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/50.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/51.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/52.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/53.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/54.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/55.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/56.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/57.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/58.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/59.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/60.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/61.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/62.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/63.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/64.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/65.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/66.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/67.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
//   { src: "/images/gallery/68.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/69.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/70.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/71.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/72.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/73.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
//   { src: "/images/gallery/74.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
  { src: "/images/gallery/75.jpg", alt: "false ceiling service in kathmandu", sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" },
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
  src={photo.src}  // or however your carousel maps images
  alt={photo.alt}
  fill
  sizes="100vw"
  priority={i === 0}  // 👈 Add this
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