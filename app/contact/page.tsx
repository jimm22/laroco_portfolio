"use client";

import { Linkedin, Github, Facebook, Mail, Globe, Phone } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      icon: Linkedin,
      platform: "LinkedIn",
      handle: "jim-vincent-laroco",
      url: "https://www.linkedin.com/in/jim-vincent-laroco-86a10b272/",
      color: "text-sky-600 bg-sky-100",
    },
    {
      icon: Github,
      platform: "GitHub",
      handle: "jimm22",
      url: "https://github.com/jimm22",
      color: "text-neutral-800 bg-neutral-100",
    },
    {
      icon: Facebook,
      platform: "Facebook",
      handle: "larocojim",
      url: "https://www.facebook.com/larocojim",
      color: "text-indigo-700 bg-indigo-100",
    },
    {
      icon: Mail,
      platform: "Email",
      handle: "jimvincentlaroco@gmail.com",
      url: "mailto:jimvincentlaroco@gmail.com",
      color: "text-rose-600 bg-rose-100",
    },
    {
      icon: Globe,
      platform: "Website",
      handle: "jimlaroco.com",
      url: "/",
      color: "text-emerald-600 bg-emerald-100",
    },
    {
      icon: Phone,
      platform: "Phone",
      handle: "(+63) 999-929-4824",
      url: "tel:+11234567890",
      color: "text-violet-600 bg-violet-100",
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
              Reach out through any of these platforms. I`&apos;m always open to
              chat!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-base border border-base-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="card-body items-center text-center">
                  <div className={`p-4 rounded-full ${contact.color} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="card-title text-2xl mb-1">
                    {contact.platform}
                  </h3>
                  <p className="text-base-content/80">{contact.handle}</p>
                  <div className="mt-4">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-base-200">
                      {contact.platform === "Phone" ? "Call me" : "Contact me"}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
