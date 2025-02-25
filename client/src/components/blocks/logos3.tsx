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
      description: "2",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738843994840_2.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-2",
      description: "3",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738843995580_3.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-3",
      description: "4",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738843996396_4.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-4",
      description: "5",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738843997050_5.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-5",
      description: "6",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738843997719_6.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-6",
      description: "7",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738843998357_7.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-7",
      description: "Akan",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738843999355_Akan.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-8",
      description: "Amnesia",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844000345_Amnesia.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-9",
      description: "Animal",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844001141_Animal.jpg",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-10",
      description: "Babylon",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844001668_Babylon.jpg",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-11",
      description: "By the bottle",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844002485_By%20the%20bottle.jpg",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-12",
      description: "Chirp",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844003147_Chirp.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-13",
      description: "Flying Tortoise",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844003957_Flyingtortoise.jpg",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-14",
      description: "Fusion 9",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844004621_Fusion%209.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-15",
      description: "Grease Monkey",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844005402_Grease%20Monkey.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-16",
      description: "Hashi",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844006251_Hashi.jpg",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-17",
      description: "Kiik69",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844006901_kiik69.jpg",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-18",
      description: "Makobrew",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844007541_Makobrew.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-19",
      description: "One Golf",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844008193_Onegolf.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-20",
      description: "Postcard",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844008951_Postcard.jpg",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-21",
      description: "Qiqi",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844009463_Qiqi.jpg",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-22",
      description: "Renao",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844010279_Renao.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-23",
      description: "Sounds n Spirits",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844010938_Sounds%20n%20spirits.jpg",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-24",
      description: "Ta Qila",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844011685_Ta_qila.jpg",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-25",
      description: "Tasca",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844012510_Tasca.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-26",
      description: "The Rabbit Hole",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844013143_The%20Rabbit%20Hole.png",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-27",
      description: "Theia",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844013978_Theia.jpg",
      className: "h-20 w-auto sm:h-24",
    },
    {
      id: "logo-28",
      description: "Velvet Patisserie",
      image: "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738844014821_velvet%20patisserie.jpg",
      className: "h-20 w-auto sm:h-24",
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
                  <div className="mx-2 sm:mx-3 flex shrink-0 items-center justify-center">
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