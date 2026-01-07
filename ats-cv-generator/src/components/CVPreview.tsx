"use client";

import { useRef } from "react";
import { CVData } from "../types/cv";
import PDFDownload from "./PDFDownload";

export default function CVPreview({ data }: { data: CVData }) {
  const contentRef = useRef<HTMLDivElement>(null!);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  };

  return (
    <div className="space-y-4">
      {/* Bouton de téléchargement */}
      <PDFDownload data={data} contentRef={contentRef} />

      {/* Aperçu du CV */}
      <div
        ref={contentRef}
        className="bg-white rounded-lg shadow-xl p-12 min-h-screen font-serif text-slate-900"
        style={{ pageBreakInside: "avoid" }}
      >
        {/* En-tête */}
        <div className="mb-8 pb-6 border-b-2 border-slate-300">
          <h1 className="text-4xl font-bold text-slate-900 mb-1">
            {data.fullName || "Votre Nom"}
          </h1>
          {data.title && (
            <p className="text-xl text-blue-600 font-semibold mb-3">
              {data.title}
            </p>
          )}

          {/* Informations de contact */}
          <div className="flex flex-wrap gap-4 text-sm text-slate-700">
            {data.email && (
              <span className="flex items-center gap-1">
                <span>✉</span>
                {data.email}
              </span>
            )}
            {data.phone && (
              <span className="flex items-center gap-1">
                <span>☎</span>
                {data.phone}
              </span>
            )}
            {data.location && (
              <span className="flex items-center gap-1">
                <span>📍</span>
                {data.location}
              </span>
            )}
            {data.website && (
              <span className="flex items-center gap-1">
                <span>🔗</span>
                <a href={data.website} className="text-blue-600 hover:underline">
                  {data.website.replace(/https?:\/\//, "")}
                </a>
              </span>
            )}
            {data.linkedin && (
              <span className="flex items-center gap-1">
                <span>in</span>
                <a
                  href={data.linkedin}
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              </span>
            )}
            {data.github && (
              <span className="flex items-center gap-1">
                <span>⚙</span>
                <a href={data.github} className="text-blue-600 hover:underline">
                  GitHub
                </a>
              </span>
            )}
          </div>
        </div>

        {/* Résumé professionnel */}
        {data.summary && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-2 pb-1 border-b border-slate-300">
              PROFIL PROFESSIONNEL
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {data.summary}
            </p>
          </div>
        )}

        {/* Expériences professionnelles */}
        {data.experiences.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-1 border-b border-slate-300">
              EXPÉRIENCE PROFESSIONNELLE
            </h2>
            <div className="space-y-4">
              {data.experiences.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-sm text-slate-600">
                      {formatDate(exp.startDate)}{" "}
                      {exp.currentlyWorking
                        ? "- Présent"
                        : `- ${formatDate(exp.endDate)}`}
                    </span>
                  </div>
                  <p className="text-slate-700 font-semibold text-sm mb-2">
                    {exp.company}
                  </p>
                  {exp.description && (
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Éducation */}
        {data.education.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-1 border-b border-slate-300">
              FORMATION
            </h2>
            <div className="space-y-3">
              {data.education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                    {edu.graduationDate && (
                      <span className="text-sm text-slate-600">
                        {formatDate(edu.graduationDate)}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-700 font-semibold text-sm">
                    {edu.school}
                  </p>
                  {edu.field && (
                    <p className="text-sm text-slate-600">{edu.field}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compétences */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-1 border-b border-slate-300">
              COMPÉTENCES
            </h2>
            <div className="space-y-2">
              {data.skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <p className="font-bold text-slate-900 text-sm">
                    {skillGroup.category}
                  </p>
                  <p className="text-sm text-slate-700">
                    {skillGroup.skills.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projets */}
        {data.projects.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-1 border-b border-slate-300">
              PROJETS
            </h2>
            <div className="space-y-4">
              {data.projects.map((project, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-slate-900">
                      {project.name}
                    </h3>
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        Lien
                      </a>
                    )}
                  </div>
                  {project.description && (
                    <p className="text-sm text-slate-700 mb-1">
                      {project.description}
                    </p>
                  )}
                  {project.technologies.length > 0 && (
                    <p className="text-sm text-slate-600">
                      <span className="font-semibold">Tech:</span>{" "}
                      {project.technologies.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Langues */}
        {data.languages && data.languages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 pb-1 border-b border-slate-300">
              LANGUES
            </h2>
            <ul className="text-sm text-slate-700">
              {data.languages.map((lang, idx) => (
                <li key={idx}>• {lang}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
