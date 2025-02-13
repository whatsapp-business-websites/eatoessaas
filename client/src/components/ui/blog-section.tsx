import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80",
    title: "Digital Menu Revolution",
    description: "How QR code menus are transforming the dining experience and boosting restaurant efficiency.",
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    title: "Smart Restaurant Management",
    description: "Leveraging technology to streamline operations and enhance customer satisfaction.",
  },
  {
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
    title: "WhatsApp for Restaurants",
    description: "Using WhatsApp to improve customer engagement and simplify order management.",
  },
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
    title: "Future of Food Service",
    description: "Emerging trends and technologies shaping the modern restaurant industry.",
  },
];

const Blog = () => (
  <section aria-label="Blog posts" className="w-full py-16 sm:py-24 bg-muted/20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
      <header className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Latest Articles
        </h2>
        <Button className="bg-black text-white hover:bg-gray-800 transition-colors gap-4">
          View all articles <MoveRight className="w-4 h-4" aria-hidden="true" />
        </Button>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="flex flex-col gap-4 group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <img 
                src={post.image} 
                alt={post.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-muted-foreground text-base">
                {post.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export { Blog }; 