// app/contact/page.tsx
"use client";

import { Linkedin, Github, Facebook, Mail, Globe, Phone } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      platform: "LinkedIn",
      handle: "jim-vincent-laroco",
      url: "https://www.linkedin.com/in/jim-vincent-laroco-86a10b272/",
      color: "bg-blue-600/10 text-blue-600",
    },
    {
      icon: <Github className="w-6 h-6" />,
      platform: "GitHub",
      handle: "jimm22",
      url: "https://github.com/jimm22",
      color: "bg-gray-800/10 text-gray-800",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      platform: "Facebook",
      handle: "larocojim",
      url: "https://www.facebook.com/larocojim",
      color: "bg-blue-800/10 text-blue-800",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      platform: "Email",
      handle: "jimvincentlaroco@gmail.com",
      url: "mailto:jimvincentlaroco@gmail.com",
      color: "bg-red-500/10 text-red-500",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      platform: "Website",
      handle: "jimlaroco.com",
      url: "/",
      color: "bg-green-600/10 text-green-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      platform: "Phone",
      handle: "+1 (123) 456-7890", // Replace with your actual number
      url: "tel:+11234567890",
      color: "bg-purple-600/10 text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-base-content/80">
              Reach out through any of these channels - I&apos;d love to hear
              from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`card ${contact.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="card-body items-center text-center">
                <div
                  className={`p-4 rounded-full ${contact.color.replace(
                    "/10",
                    "/20"
                  )} mb-4`}
                >
                  {contact.icon}
                </div>
                <h3 className="card-title text-2xl mb-1">{contact.platform}</h3>
                <p className="text-base-content/80">{contact.handle}</p>
                <div className="mt-4">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-base-100">
                    {contact.platform === "Phone" ? "Call me" : "Contact me"}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="container mx-auto px-4 pb-16 max-w-3xl">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl mb-4">Quick Links</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-ghost ${contact.color.replace(
                    "/10",
                    "/20"
                  )} hover:${contact.color.replace("/10", "/20")} gap-2`}
                >
                  {contact.icon}
                  {contact.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
