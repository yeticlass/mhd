import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function MHDCarousel() {
  const images = [1, 2, 3, 4, 5, 6, 7]

  return (
     <div className="relative w-full px-2"> 
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        
        {images.map((num) => (
          <CarouselItem key={num} className="md:basis-1/2 lg:basis-1/3">
            <Image
              src={`/images/carousel/${num}.jpg`}
              alt={`Product image ${num}`}
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-64 overflow-hidden"
              
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1 bg-slate-700/30"/>
      <CarouselNext className="right-3 bg-slate-700/30"/>
    </Carousel>
    </div>
  )
}