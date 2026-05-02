"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "React Native",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "AI/LLM",
  "Firebase",
  "Git",
  "Android/iOS Development",
  // Add more as needed
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Title with accent underline */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold inline-block relative">
            About Me
            <span className="block h-1 w-16 bg-blue-600 rounded mt-2"></span>
          </h2>
        </div>
        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg border-4 border-blue-100 bg-white">
              <Image
                src="/img/about-me.jpg" // Place your image in /public/profile.jpg
                alt="Profile"
                fill
                // zoom
                style={{ objectFit: "cover", transform: "scale(1.05)", transition: "transform 0.3s ease"  }}
                priority
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">Nugraha Purnama Aji</h3>
            <p className="text-blue-600 font-bold mb-4">React Native Developer</p>
            <p className="text-white-700 mb-6">
              {/* Replace with your own description */}
              I’ve led and contributed to multiple React Native projects, focusing on building scalable mobile applications with real-time data, complex workflows, and AI-driven features. My strength lies in designing mobile architectures that are reliable, performant, and aligned with real-world user needs.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
