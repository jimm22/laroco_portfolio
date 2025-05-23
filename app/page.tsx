// app/portfolio/page.tsx
import {
  Briefcase,
  Github,
  Linkedin,
  Globe,
  Facebook,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "Gleanify",
      description:
        "Web and Mobile application marketplace to exchange agricultural waste into valuable products.",
      tech: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
      link: "#",
      image: "/Gleanify Thumbnail.png",
    },
    {
      title: "Data Something something",
      description: "Simple Data Analytics Project",
      tech: ["React", "TypeScript", "FastAPI", "AWS"],
      link: "#",
      image: "/project2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero bg-base-100 py-16 animate-fadeIn">
        <div className="hero-content flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

              <div className="relative z-10 w-72 h-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden shadow-2xl group-hover:rotate-2 transition-transform duration-300">
                <Image
                  src="/jim-gleanify-profile.svg"
                  alt="SVG Icon"
                  width={300}
                  height={300}
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>

          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Jim Vincent Laroco
            </h1>
            <p className="py-6 text-base md:text-xl text-base-content/80">
              Hi! I&apos;m Jim and I enjoy turning data into valuable insights
              through data analytics. I also build modern frontend website
              designs with Next.js.
            </p>
            <div className="flex flex-col items-center md:items-start gap-4">
              <h3 className="text-lg font-semibold text-base-content">
                Connect
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href="https://www.linkedin.com/in/jim-vincent-laroco-86a10b272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost hover:bg-base-300 hover:scale-110 transition-all duration-300 tooltip"
                  data-tip="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/jimm22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost hover:bg-base-300 hover:scale-110 transition-all duration-300 tooltip"
                  data-tip="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/larocojim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost hover:bg-base-300 hover:scale-110 transition-all duration-300 tooltip"
                  data-tip="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="mailto:jimvincentlaroco@gmail.com"
                  className="btn btn-circle btn-ghost hover:bg-base-300 hover:scale-110 transition-all duration-300 tooltip"
                  data-tip="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <Link
                  href="/"
                  className="btn btn-circle btn-ghost hover:bg-base-300 hover:scale-110 transition-all duration-300 tooltip"
                  data-tip="Website"
                >
                  <Globe className="w-5 h-5" />
                </Link>
              </div>
              <div className="mt-2 text-sm text-base-content/70 text-center md:text-left">
                Available for freelance work and collaborations
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="bg-base-200 mx-auto px-4 py-20">
        <div className="container mx-auto animate-fadeIn">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary mb-4">
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <figure className="px-4 pt-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={250}
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </figure>
                <div className="card-body px-5 py-4">
                  <h3 className="card-title text-lg md:text-xl">
                    {project.title}
                  </h3>
                  <p className="text-base-content/70 text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((tech, i) => (
                      <div key={i} className="badge badge-outline text-xs">
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <a
                      href={project.link}
                      className="btn btn-primary gap-2 btn-sm md:btn-md"
                    >
                      <Briefcase className="w-4 h-4" />
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-content mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-primary-content/90 mb-8 text-base md:text-lg">
            Have an idea? Website to be built? Data to be analyzed? I&apos;d
            love to help!
          </p>
          <Link href="/contact">
            <button className="btn btn-accent btn-md md:btn-lg rounded-full px-10 hover:scale-105 transition-transform duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
