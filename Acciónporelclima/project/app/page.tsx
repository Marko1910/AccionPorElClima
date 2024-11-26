import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Globe2, Leaf, TreePine } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070"
          alt="Climate Action"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative container flex max-w-[64rem] flex-col items-center gap-4 text-center text-white">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            SDG 13: Climate Action
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Take Action for Our Planet
          </h1>
          <p className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
            Join our mission to combat climate change and create a sustainable future
            for generations to come.
          </p>
          <div className="space-x-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-primary/5 border-none p-8">
            <Globe2 className="h-12 w-12 mb-4 text-primary" />
            <h3 className="font-bold text-xl mb-2">Global Impact</h3>
            <p className="text-muted-foreground">
              Our actions today shape the world of tomorrow. Join us in making a
              difference.
            </p>
          </Card>
          <Card className="bg-primary/5 border-none p-8">
            <Leaf className="h-12 w-12 mb-4 text-primary" />
            <h3 className="font-bold text-xl mb-2">Sustainable Solutions</h3>
            <p className="text-muted-foreground">
              Implementing eco-friendly practices for a better future.
            </p>
          </Card>
          <Card className="bg-primary/5 border-none p-8">
            <TreePine className="h-12 w-12 mb-4 text-primary" />
            <h3 className="font-bold text-xl mb-2">Community Action</h3>
            <p className="text-muted-foreground">
              Together we can create lasting change in our communities.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-24">
        <div className="container">
          <div className="max-w-[58rem] mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
              Ready to Make a Difference?
            </h2>
            <p className="leading-normal text-muted-foreground sm:text-lg">
              Join our community of climate activists and be part of the solution.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/contact">
                Get Involved
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}