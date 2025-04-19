// app/portfolio/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Github, Globe } from "lucide-react";

const projects = [
  {
    title: "Gleanify",
    description:
      "Web and Mobile application marketplace to exchange agricultural waste into valuable products.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    category: "web",
    image: "/project1.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Cleaning of Data",
    description: "Conversational AI powered by GPT-4 with custom integrations",
    tech: ["React", "Python", "AWS", "Redis"],
    category: "analytics",
    image: "/project2.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking with social features",
    tech: ["React Native", "Firebase", "GraphQL", "Expo"],
    category: "mobile",
    image: "/project3.jpg",
    link: "#",
    github: "#",
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Filter Controls */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-8">My Projects</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`btn ${
              selectedCategory === "all" ? "btn-primary" : "btn-ghost"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedCategory("web")}
            className={`btn ${
              selectedCategory === "web" ? "btn-primary" : "btn-ghost"
            }`}
          >
            Web Applications
          </button>
          <button
            onClick={() => setSelectedCategory("analytics")}
            className={`btn ${
              selectedCategory === "analytics" ? "btn-primary" : "btn-ghost"
            }`}
          >
            Data Analytics
          </button>
          <button
            onClick={() => setSelectedCategory("mobile")}
            className={`btn ${
              selectedCategory === "mobile" ? "btn-primary" : "btn-ghost"
            }`}
          >
            Mobile Apps
          </button>
        </div>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <figure className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </figure>
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="card-title">{project.title}</h2>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="btn btn-circle btn-ghost btn-sm"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.link}
                      className="btn btn-circle btn-ghost btn-sm"
                      aria-label="Live demo"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-base-content/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="badge badge-outline">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="card-actions">
                  <a
                    href={project.link}
                    className="btn btn-primary w-full hover:gap-4 transition-all"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
