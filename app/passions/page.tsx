// app/passions/page.tsx
"use client";

import { Video, Paintbrush, ChartBar, Film, Gamepad2 } from "lucide-react";
import Image from "next/image";
export default function PassionsPage() {
  const passionCards = [
    {
      icon: <ChartBar className="w-8 h-8" />,
      title: "Data Analytics",
      description:
        "Turning raw data into valuable insights using MySQL, Excel, Power BI, and Python.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "UI/UX Prototyping",
      description: "Creating intuitive interfaces using Figma.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing",
      description:
        "Crafting compelling narratives through video using Adobe Premiere Pro.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Filmmaking",
      description: "Bringing stories to life through cinematic techniques.",
      color: "bg-info/10 text-info",
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Playing Video Games",
      description: "Exploring virtual worlds and gaming culture.",
      color: "bg-success/10 text-success",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Passions
              </span>
            </h1>
            <p className="text-xl text-base-content/80">
              Besides programming, these are the things that fuel my creativity
              and keep me inspired
            </p>
          </div>
        </div>
      </section>

      {/* Passions Section - All in One Row with Wrapping */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-8">
          {passionCards.map((passion, index) => (
            <div
              key={index}
              className={`card ${passion.color} w-[400px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="card-body items-center text-center">
                <div
                  className={`p-4 rounded-full ${passion.color.replace(
                    "/10",
                    "/20"
                  )} mb-4`}
                >
                  {passion.icon}
                </div>
                <h3 className="card-title text-2xl mb-2">{passion.title}</h3>
                <p className="text-base-content/80">{passion.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Story */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl relative">
                <Image
                  src="/jim-studying-shot.png" // update with your actual image path
                  alt="Personal Journey"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">
                How My Passions Shape My Work
              </h2>
              <p className="text-lg text-base-content/80">
                My love for data analytics helps me make informed decisions
                backed by insights, while UI/UX prototyping fuels my creativity
                for intuitive design.
              </p>
              <p className="text-lg text-base-content/80">
                Video editing and filmmaking sharpen my storytelling skills, and
                gaming keeps me curious, analytical, and immersed in interactive
                experiences.
              </p>
              <div className="mt-6 flex gap-4 justify-start">
                <a href="/portfolio">
                  <button className="btn btn-primary rounded-full">
                    See My Work
                  </button>
                </a>
                <a href="/contact">
                  <button className="btn btn-outline rounded-full">
                    Let&apos;s Connect
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-base-content/80 mb-4">
            Embrace what excites you and make it yours.
          </h2>
        </div>
      </section>
    </div>
  );
}
