import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const posts = [
  {
    title: "The Impact of Climate Change on Biodiversity",
    excerpt: "Exploring how rising temperatures affect ecosystems worldwide...",
    date: "2024-03-20",
    image: "https://images.unsplash.com/photo-1500829243541-74b677fecc30?w=800&q=80",
    author: "Dr. Sarah Johnson",
  },
  {
    title: "Sustainable Cities: Building for the Future",
    excerpt: "How urban planning can help combat climate change...",
    date: "2024-03-18",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    author: "Michael Chen",
  },
  {
    title: "Ocean Conservation Success Stories",
    excerpt: "Recent victories in protecting marine ecosystems...",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80",
    author: "Emma Martinez",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center space-y-4 text-center mb-10">
        <h1 className="text-4xl font-bold">Latest Updates</h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Stay informed about climate action and environmental conservation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>{post.author}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Button variant="outline" className="w-full">Read More</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}