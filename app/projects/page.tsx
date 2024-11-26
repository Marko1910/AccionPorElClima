"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plant, Recycle, Wind } from "lucide-react";

const ProjectCard = ({ project }: { project: any }) => (
  <Card className="p-6">
    <div className="h-12 w-12 mb-4">
      {project.icon && <project.icon className="h-full w-full" />}
    </div>
    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
    <div className="space-y-4">
      <div className="h-2 bg-secondary rounded-full">
        <div
          className="h-full bg-primary rounded-full"
          style={{ width: `${project.progress}%` }}
        />
      </div>
      <div className="flex justify-between text-sm">
        <span>{project.category}</span>
        <span>{project.progress}% Complete</span>
      </div>
      <Button className="w-full">Learn More</Button>
    </div>
  </Card>
);

const projects = [
  {
    title: "Urban Reforestation",
    category: "Conservation",
    description: "Planting 10,000 trees in urban areas to combat air pollution and increase biodiversity.",
    icon: Plant,
    progress: 65,
  },
  {
    title: "Renewable Energy Initiative",
    category: "Energy",
    description: "Installing solar panels in underserved communities to provide clean, sustainable energy.",
    icon: Wind,
    progress: 40,
  },
  {
    title: "Zero Waste Program",
    category: "Waste Management",
    description: "Implementing comprehensive recycling and composting programs in local schools.",
    icon: Recycle,
    progress: 80,
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold">Our Projects</h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Discover our initiatives making a real impact in the fight against climate change.
        </p>
      </div>

      <Tabs defaultValue="all" className="mt-10">
        <TabsList className="grid w-full max-w-[400px] grid-cols-3 mx-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="active" className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.progress < 100)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="text-center py-10 text-muted-foreground">
            No completed projects yet.
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}