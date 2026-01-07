"use client";

import { useState } from "react";
import CVForm from "../components/CVForm";
import CVPreview from "../components/CVPreview";
import { CVData } from "../types/cv";

export default function Home() {
  const [cv, setCV] = useState<CVData>({
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    github: "",
    summary: "",
    experiences: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto">
        <CVForm data={cv} onChange={setCV} />
        <CVPreview data={cv} />
      </div>
    </main>
  );
}
