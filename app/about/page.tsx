// app/about/page.tsx
import { BrainCircuit, Mic, Eye } from "lucide-react";

export default function AboutPage() {
  const principles = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Clear Reporting",
      description:
        "I enjoy breaking down insights and presenting them with confidence and clarity. I love public speaking SO much",
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Complex challenges transformed into elegant solutions",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Attention to Detail",
      description:
        "I focus on the little things that make a big impact in both design and data.",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fadeIn">
                Turning Data Into
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Insightful Interfaces
                </span>
              </h1>
              <p className="text-xl text-base-content/80 max-w-2xl animate-fadeIn delay-100">
                Data analyst and frontend developer with a BSIT degree from Cebu
                Technological University, passionate about crafting smart,
                user-friendly digital solutions.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative group hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <img
                  src="/jimhomeprofile.webp"
                  alt="Jim Vincent Laroco"
                  className="relative z-10 w-96 h-96 object-cover rounded-2xl shadow-2xl group-hover:rotate-2 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary mb-4">
            My Soft Skills
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Fostering Effective Communication & Teamwork
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="card-body items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {principle.icon}
                </div>
                <h3 className="card-title text-2xl mb-2">{principle.title}</h3>
                <p className="text-base-content/80">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Work Experience
          </h2>

          <div className="flex justify-center">
            <div className="relative pl-8 border-l-2 border-primary/20 max-w-4xl mx-auto">
              {[
                {
                  year: "2022",
                  title: "Video Editor",
                  company: "Freelance",
                  description:
                    "Edited and produced short form video content for various clients that is aligned with their vision and branding.",
                },
                {
                  year: "2024 - Present",
                  title: "Transcriber/ Translator",
                  company: "KMJS - GMA Public Affairs",
                  description:
                    "Provides transcription and translation services for KMJS segments.",
                },
                {
                  year: "2025 - Present",
                  title: "SEO Specialist",
                  company: "SEO Echelon",
                  description:
                    "Optimize websites for search engines by improving content strategy, keyword rankings, and on-page SEO to drive organic traffic and enhance online visibility.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative mb-12 pl-8 opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[10px] top-2 border-2 border-base-100" />
                  <div className="text-primary/80 mb-2">{item.year}</div>
                  <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                  <div className="text-lg text-primary mb-2">
                    {item.company}
                  </div>
                  <p className="text-base-content/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
