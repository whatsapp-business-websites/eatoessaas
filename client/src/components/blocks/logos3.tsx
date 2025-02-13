"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by Leading Restaurants",
  logos = [
    {
      id: "logo-1",
      description: "Fine Dining Restaurant",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=100&fit=crop&q=80",
      className: "h-12 w-auto sm:h-16",
    },
    {
      id: "logo-2",
      description: "Upscale Bistro",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=200&h=100&fit=crop&q=80",
      className: "h-12 w-auto sm:h-16",
    },
    {
      id: "logo-3",
      description: "Modern Café",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=100&fit=crop&q=80",
      className: "h-12 w-auto sm:h-16",
    },
    {
      id: "logo-4",
      description: "Italian Restaurant",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=200&h=100&fit=crop&q=80",
      className: "h-12 w-auto sm:h-16",
    },
    {
      id: "logo-5",
      description: "Seaside Restaurant",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=200&h=100&fit=crop&q=80",
      className: "h-12 w-auto sm:h-16",
    },
    {
      id: "logo-6",
      description: "Asian Fusion",
      image: "https://images.unsplash.com/photo-1526069631228-723c945bea6b?w=200&h=100&fit=crop&q=80",
      className: "h-12 w-auto sm:h-16",
    },
    {
      id: "logo-7",
      description: "French Cuisine",
      image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?w=200&h=100&fit=crop&q=80",
      className: "h-12 w-auto sm:h-16",
    },
    {
      id: "logo-8",
      description: "Mediterranean Restaurant",
      image: "https://images.unsplash.com/photo-1523568129082-a8d6c095638e?w=200&h=100&fit=crop&q=80",
      className: "h-12 w-auto sm:h-16",
    }
  ],
}: Logos3Props) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container px-4 mx-auto flex flex-col items-center text-center">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold">
          {heading}
        </h1>
      </div>
      <div className="pt-8 sm:pt-10 lg:pt-16">
        <div className="relative mx-auto flex items-center justify-center max-w-[90vw] lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.7 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 justify-center pl-0"
                >
                  <div className="mx-4 sm:mx-6 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };