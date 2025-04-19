// app/components/Footer.tsx
"use client";

import { Linkedin, Github, Mail, Globe, Heart, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content border-t border-base-300">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Branding Column */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-content flex items-center justify-center shadow-md">
                <span className="text-xl font-bold">JL</span>
              </div>
              <div className="text-xl font-bold">Jim Vincent Laroco</div>
            </div>
            <p className="text-center md:text-left text-base-content/80 leading-relaxed">
              Crafting exceptional digital experiences through modern web
              development and thoughtful design.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold mb-3 text-base-content">
              Explore
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <a
                href="/"
                className="link link-hover hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Home
              </a>
              <a
                href="/about"
                className="link link-hover hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                About
              </a>
              <a
                href="/portfolio"
                className="link link-hover hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Portfolio
              </a>
              <a
                href="/contact"
                className="link link-hover hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                Contact
              </a>
            </div>
          </div>

          {/* Social/Contact Column */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold mb-3 text-base-content">
              Connect
            </h3>
            <div className="flex gap-3">
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
              <a
                href="/"
                className="btn btn-circle btn-ghost hover:bg-base-300 hover:scale-110 transition-all duration-300 tooltip"
                data-tip="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-2 text-sm text-base-content/70">
              Available for freelance work and collaborations
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-base-300 mt-12 pt-8 text-center w-full">
          <aside>
            <p className="text-base-content/80 flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Jim Vincent Laroco
              <span>•</span>
              made with{" "}
              <Heart className="w-4 h-4 inline text-red-500 fill-red-500 mx-1" />
              using <span className="text-primary">Next.js</span> &
              <span className="text-secondary"> DaisyUI</span>
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
}
