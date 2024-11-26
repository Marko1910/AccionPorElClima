import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-xl text-muted-foreground">
            We are a dedicated team working towards a sustainable future through climate action.
          </p>
        </div>

        <div className="grid gap-8 mt-12">
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Heart className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h2 className="text-xl font-bold">Our Mission</h2>
                <p className="mt-2 text-muted-foreground">
                  To accelerate the transition to a sustainable future by empowering communities
                  and individuals to take meaningful action against climate change.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Target className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h2 className="text-xl font-bold">Our Vision</h2>
                <p className="mt-2 text-muted-foreground">
                  A world where sustainable practices are the norm, where communities thrive
                  in harmony with nature, and where everyone plays a part in protecting our planet.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Users className="h-6 w-6 mt-1 text-primary" />
              <div>
                <h2 className="text-xl font-bold">Our Team</h2>
                <p className="mt-2 text-muted-foreground">
                  We are a diverse group of environmental scientists, community organizers,
                  and passionate individuals united by our commitment to climate action.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <a href="/contact">Join Our Mission</a>
          </Button>
        </div>
      </div>
    </div>
  );
}