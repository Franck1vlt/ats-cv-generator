import CVPreview from "../../components/CVPreview";
import { CVData } from "../../types/cv";

export const metadata = {
  title: "CV Preview",
};

export default function PreviewPage() {
  const cv: CVData = {
    fullName: "Jean Dupont",
    title: "Développeur Full Stack",
    email: "jean.dupont@email.com",
    phone: "06 12 34 56 78",
    location: "Paris, France",
    website: "https://jeandupont.dev",
    linkedin: "https://linkedin.com/in/jeandupont",
    github: "https://github.com/jeandupont",
    summary:
      "Développeur full stack avec 3 ans d’expérience en React, Node.js et bases de données SQL.",
    experiences: [
      {
        id: "exp-1",
        company: "TechCorp",
        role: "Développeur Web",
        startDate: "2022",
        endDate: "2024",
        currentlyWorking: false,
        description:
          "Développement d’applications web, maintenance et optimisation des performances.",
      },
    ],
    skills: [
      { id: "skill-1", category: "Langages", skills: ["JavaScript", "SQL"] },
      { id: "skill-2", category: "Frameworks", skills: ["React", "Node.js"] },
    ],
    education: [
      {
        id: "edu-1",
        school: "Université de Lille",
        degree: "Master Informatique",
        field: "Informatique",
        graduationDate: "2020",
      },
    ],
    projects: [],
    certifications: [],
    languages: ["Français", "Anglais"],
  };

  return (
    <main className="max-w-3xl mx-auto bg-white">
      <CVPreview data={cv} />
    </main>
  );
}