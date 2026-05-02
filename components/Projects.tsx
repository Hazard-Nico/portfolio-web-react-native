"use client";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  features: string[];
  skills: string[];
  previewImages: string[];
};

const projects: Project[] = [
  {
    title: "Harvesting Management System & Mobile API Integration",
    description:
      "Mobile application for real-time plantation operations and field data synchronization.",
    features: [
        "Designed mobile-first workflows for harvest data input and validation",
        "Migrated legacy mobile features into scalable React Native architecture",
        "Integrated high-performance REST APIs for real-time data synchronization",
        "Implemented offline-first capabilities and background synchronization",
        "Optimized mobile performance for high-frequency transactions",
        "Collaborated with backend systems for automated reporting pipelines"
    ],
    skills: [
      "React Native", "Django", "REST API", "PostgreSQL", "Celery"
    ],
    // from tpa_harvesting folder, can add screenshots later
    // img/projects/tpa_harvesting/...
    previewImages: [ "/img/projects/tpa_harvesting/Homescreen.jpg", "/img/projects/tpa_harvesting/HARVESTING.jpg", "/img/projects/tpa_harvesting/HARVESTING-1.jpg", "/img/projects/tpa_harvesting/HARVESTING-2.jpg", "/img/projects/tpa_harvesting/HARVESTING-3.jpg", "/img/projects/tpa_harvesting/HARVESTING-4.jpg", "/img/projects/tpa_harvesting/HARVESTING-5.jpg", "/img/projects/tpa_harvesting/HARVESTING-6.jpg", "/img/projects/tpa_harvesting/Absensi - Masuk kerja.jpg", "/img/projects/tpa_harvesting/Absensi - Masuk kerja-1.jpg", "/img/projects/tpa_harvesting/Lapor Datang.jpg", "/img/projects/tpa_harvesting/Lapor Datang-1.jpg", "/img/projects/tpa_harvesting/Lapor Datang-2.jpg" ],
  },
  {
    title: "Plantation Operations Report & Mobile Dashboard",
    description:
      "Streamlined afdeling-level drill-down reporting, reducing time needed to identify absenteeism issues per work group",
    features: [
        "Built mobile report dashboards for real-time attendance (Absensi) and TBS (Fresh Fruit Bunch) reception monitoring across multiple estates and mill units",
        "Developed hierarchical drill-down views from Estate → Afdeling → Work Group (Panen, Perawatan, Loading) with per-employee attendance detail including check-in/out timestamps",
        "Integrated filter system for date, attendance type (Absen Masuk/Pulang), unit, and afdeling selection to support flexible operational reporting",
        "Designed TBS reception report with hourly time-slot breakdown per mill (FLM, TSM, MBM, BPM), displaying tonnage (TON/kg) and bunch count (JJG) with ownership classification (Inti/Ocp)",
        "Implemented real-time mill connectivity status (Online/Offline) with live data refresh and last-sync timestamp for field monitoring reliability"
    ],
    skills: [
      "React Native", "Django", "REST API", "PostgreSQL", "Celery"
    ],
    
    previewImages: [ "/img/projects/tpa_mobilereport/Homescreen.jpg", "/img/projects/tpa_mobilereport/BottomBar.jpg", "/img/projects/tpa_mobilereport/Absensi.jpg", "/img/projects/tpa_mobilereport/Absensi-1.jpg", "/img/projects/tpa_mobilereport/Absensi-2.jpg", "/img/projects/tpa_mobilereport/Absensi-3.jpg", "/img/projects/tpa_mobilereport/Report Penerimaan TBS.jpg", "/img/projects/tpa_mobilereport/Report Penerimaan TBS-1.jpg", "/img/projects/tpa_mobilereport/Report Penerimaan TBS-2.jpg", "/img/projects/tpa_mobilereport/Revisi Report Penerimaan TBS.jpg", "/img/projects/tpa_mobilereport/Revisi Report Penerimaan TBS-1.jpg", "/img/projects/tpa_mobilereport/Revisi Report Penerimaan TBS-2.jpg", ],
  },
  {
    title: "E-Fuel Management & Digital Approval Workflow",
    description:
      "Mobile-first system for fuel logistics, approval workflows, and audit tracking.",
    features: [
        "Built multi-step approval workflows within mobile application",
        "Developed features for photo uploads and digital documentation",
        "Integrated real-time APIs for fuel tracking and validation",
        "Handled complex business logic for operational workflows",
        "Designed user-friendly interfaces for field operators"
    ],
    skills: [
      "React Native", "Django", "REST API"
    ],
    previewImages: []
  },
  {
    title: "Social Media & EdTech Mobile Ecosystem",
    description:
      "Mobile platform combining social interaction with online learning features.",
    features: [
      "Developed mobile features for content delivery and user interaction",
        "Integrated REST APIs for real-time synchronization",
        "Optimized performance and state management",
        "Collaborated with backend and product teams",
        "Ensured scalability for growing user base"
    ],
    skills: [
      "React Native", "Flask", "PostgreSQL", "REST API"
    ],
    previewImages: [ "/img/projects/kedaiilmu_social-app/Android - 1.jpg", "/img/projects/kedaiilmu_social-app/Android - 2.jpg", "/img/projects/kedaiilmu_social-app/Android - 3.jpg", "/img/projects/kedaiilmu_social-app/Android - 4.jpg", "/img/projects/kedaiilmu_social-app/Android - 5.jpg", "/img/projects/kedaiilmu_social-app/Android - 6.jpg", "/img/projects/kedaiilmu_social-app/Android - 7.jpg", "/img/projects/kedaiilmu_social-app/Android - 8.jpg", "/img/projects/kedaiilmu_social-app/Background Home_ New1.jpg", "/img/projects/kedaiilmu_social-app/Background Home_ New2.jpg", "/img/projects/kedaiilmu_social-app/Background Home_ New3.jpg", "/img/projects/kedaiilmu_social-app/Android - 36.jpg", "/img/projects/kedaiilmu_social-app/Android - 38.jpg", "/img/projects/kedaiilmu_social-app/Chats.jpg", "/img/projects/kedaiilmu_social-app/Live_Chat.jpg", "/img/projects/kedaiilmu_social-app/Class_Section_LiveWebinar.jpg", "/img/projects/kedaiilmu_social-app/ProfileBisnis_ButtonSettings_Section.jpg", "/img/projects/kedaiilmu_social-app/ProfileBisnis_Section.jpg", "/img/projects/kedaiilmu_social-app/request teman.jpg", "/img/projects/kedaiilmu_social-app/Section_Grup Komunitas.jpg", "/img/projects/kedaiilmu_social-app/Section_Grup Komunitas.jpg", "/img/projects/kedaiilmu_social-app/Section_Komunitas_KetikaGabung.jpg", "/img/projects/kedaiilmu_social-app/Section-Komunitas.jpg", ],
  },
  {
    title: "AI Agent Korean Learning Platform",
    description:
      "Interactive AI-driven platform for language learning with voice and adaptive content.",
    features: [
      "Designed mobile-first learning experience with structured modules",
        "Implemented voice recording and speech-to-text features",
        "Built AI-driven learning flows and challenge systems",
        "Developed Korean word extraction and evaluation logic",
        "Contributed to admin tools for content management"
    ],
    skills: [
      "React Native", "Next.js", "Convex", "AI/LLM"
    ],
    previewImages: [ "/img/projects/kedaiilmu_eunji-ai/Homescreen.png", "/img/projects/kedaiilmu_eunji-ai/Obrolan.png", "/img/projects/kedaiilmu_eunji-ai/RoomChat.png", "/img/projects/kedaiilmu_eunji-ai/RoomChat-1.png", "/img/projects/kedaiilmu_eunji-ai/Profile.png" ],
  },

  // Add more projects as needed
];

export default function ProjectsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Title with accent underline */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold inline-block relative">
            {"Projects"}
            <span className="block h-1 w-20 bg-blue-600 rounded mt-2"></span>
          </h2>
        </div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setOpenIdx(idx)}
                className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition"
              >
                View Project
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIdx(null)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl max-w-lg w-full max-h-[90vh] p-8 relative overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{ boxSizing: "border-box" }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-2xl font-bold"
                onClick={() => setOpenIdx(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-2 text-blue-700">
                {projects[openIdx].title}
              </h3>
              <p className="text-gray-700 mb-4">
                {projects[openIdx].description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-800">
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {projects[openIdx].features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {projects[openIdx].previewImages.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-gray-800">
                    Preview Images:
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {projects[openIdx].previewImages.map((imagePath) => (
                      <button
                        key={imagePath}
                        type="button"
                        onClick={() => setSelectedImage(imagePath)}
                        className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-gray-200"
                      >
                        <Image
                          src={imagePath}
                          alt={projects[openIdx].title}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-4">
                {projects[openIdx].skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-[16/10]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 z-10 text-white bg-black/50 hover:bg-black/70 w-10 h-10 rounded-full text-2xl leading-none"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              >
                &times;
              </button>
              <Image
                src={selectedImage}
                alt="Project preview"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
