"use client";

import { CVData, Experience, Education, Skill, Project, Certification } from "../types/cv";
import Section from "./Section";

interface Props {
  data: CVData;
  onChange: (data: CVData) => void;
}

export default function CVForm({ data, onChange }: Props) {
  const updateExperience = (index: number, experience: Partial<Experience>) => {
    const updated = [...data.experiences];
    updated[index] = { ...updated[index], ...experience };
    onChange({ ...data, experiences: updated });
  };

  const addExperience = () => {
    onChange({
      ...data,
      experiences: [
        ...data.experiences,
        {
          id: Date.now().toString(),
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          currentlyWorking: false,
          description: "",
        },
      ],
    });
  };

  const removeExperience = (index: number) => {
    onChange({
      ...data,
      experiences: data.experiences.filter((_, i) => i !== index),
    });
  };

  const updateEducation = (index: number, education: Partial<Education>) => {
    const updated = [...data.education];
    updated[index] = { ...updated[index], ...education };
    onChange({ ...data, education: updated });
  };

  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        {
          id: Date.now().toString(),
          school: "",
          degree: "",
          field: "",
          graduationDate: "",
        },
      ],
    });
  };

  const removeEducation = (index: number) => {
    onChange({
      ...data,
      education: data.education.filter((_, i) => i !== index),
    });
  };

  const updateSkills = (index: number, skill: Partial<Skill>) => {
    const updated = [...data.skills];
    updated[index] = { ...updated[index], ...skill };
    onChange({ ...data, skills: updated });
  };

  const addSkills = () => {
    onChange({
      ...data,
      skills: [
        ...data.skills,
        {
          id: Date.now().toString(),
          category: "",
          skills: [],
        },
      ],
    });
  };

  const removeSkills = (index: number) => {
    onChange({
      ...data,
      skills: data.skills.filter((_, i) => i !== index),
    });
  };

  const updateProject = (index: number, project: Partial<Project>) => {
    const updated = [...data.projects];
    updated[index] = { ...updated[index], ...project };
    onChange({ ...data, projects: updated });
  };

  const addProject = () => {
    onChange({
      ...data,
      projects: [
        ...data.projects,
        {
          id: Date.now().toString(),
          name: "",
          description: "",
          technologies: [],
          link: "",
        },
      ],
    });
  };

  const removeProject = (index: number) => {
    onChange({
      ...data,
      projects: data.projects.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 h-fit sticky top-6">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Créer votre CV</h1>

      {/* Informations de base */}
      <Section title="Informations personnelles">
        <input
          type="text"
          placeholder="Nom complet *"
          value={data.fullName}
          onChange={(e) => onChange({ ...data, fullName: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Titre professionnel *"
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email *"
          value={data.email}
          onChange={(e) => onChange({ ...data, email: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Téléphone *"
          value={data.phone}
          onChange={(e) => onChange({ ...data, phone: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Localisation"
          value={data.location || ""}
          onChange={(e) => onChange({ ...data, location: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="url"
          placeholder="Site web"
          value={data.website || ""}
          onChange={(e) => onChange({ ...data, website: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="url"
          placeholder="LinkedIn"
          value={data.linkedin || ""}
          onChange={(e) => onChange({ ...data, linkedin: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="url"
          placeholder="GitHub"
          value={data.github || ""}
          onChange={(e) => onChange({ ...data, github: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </Section>

      {/* Résumé professionnel */}
      <Section title="Résumé professionnel">
        <textarea
          placeholder="Décrivez votre profil et vos objectifs..."
          value={data.summary}
          onChange={(e) => onChange({ ...data, summary: e.target.value })}
          rows={4}
          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </Section>

      {/* Expériences */}
      <Section title="Expériences professionnelles">
        {data.experiences.map((exp, idx) => (
          <div
            key={exp.id}
            className="mb-6 p-4 bg-slate-50 rounded-md border border-slate-200"
          >
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                placeholder="Entreprise"
                value={exp.company}
                onChange={(e) =>
                  updateExperience(idx, { company: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Poste"
                value={exp.role}
                onChange={(e) => updateExperience(idx, { role: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="month"
                placeholder="Date de début"
                value={exp.startDate}
                onChange={(e) =>
                  updateExperience(idx, { startDate: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="month"
                placeholder="Date de fin"
                value={exp.endDate}
                disabled={exp.currentlyWorking}
                onChange={(e) =>
                  updateExperience(idx, { endDate: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-200"
              />
            </div>
            <label className="flex items-center mb-3">
              <input
                type="checkbox"
                checked={exp.currentlyWorking}
                onChange={(e) =>
                  updateExperience(idx, { currentlyWorking: e.target.checked })
                }
                className="w-4 h-4 text-blue-600"
              />
              <span className="ml-2 text-sm text-slate-700">
                Actuellement en poste
              </span>
            </label>
            <textarea
              placeholder="Description des responsabilités et accomplissements"
              value={exp.description}
              onChange={(e) =>
                updateExperience(idx, { description: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => removeExperience(idx)}
              className="mt-3 px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          onClick={addExperience}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium"
        >
          + Ajouter une expérience
        </button>
      </Section>

      {/* Éducation */}
      <Section title="Formation">
        {data.education.map((edu, idx) => (
          <div
            key={edu.id}
            className="mb-6 p-4 bg-slate-50 rounded-md border border-slate-200"
          >
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                placeholder="École/Université"
                value={edu.school}
                onChange={(e) =>
                  updateEducation(idx, { school: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Diplôme"
                value={edu.degree}
                onChange={(e) =>
                  updateEducation(idx, { degree: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                placeholder="Domaine d'étude"
                value={edu.field}
                onChange={(e) =>
                  updateEducation(idx, { field: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="month"
                placeholder="Date de graduation"
                value={edu.graduationDate}
                onChange={(e) =>
                  updateEducation(idx, { graduationDate: e.target.value })
                }
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => removeEducation(idx)}
              className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          onClick={addEducation}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium"
        >
          + Ajouter une formation
        </button>
      </Section>

      {/* Compétences */}
      <Section title="Compétences">
        {data.skills.map((skill, idx) => (
          <div
            key={skill.id}
            className="mb-6 p-4 bg-slate-50 rounded-md border border-slate-200"
          >
            <input
              type="text"
              placeholder="Catégorie (ex: Langages de programmation)"
              value={skill.category}
              onChange={(e) =>
                updateSkills(idx, { category: e.target.value })
              }
              className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Compétences (séparées par des virgules)"
              value={skill.skills.join(", ")}
              onChange={(e) =>
                updateSkills(idx, {
                  skills: e.target.value.split(",").map((s) => s.trim()),
                })
              }
              rows={2}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => removeSkills(idx)}
              className="mt-3 px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          onClick={addSkills}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium"
        >
          + Ajouter une catégorie de compétences
        </button>
      </Section>

      {/* Projets */}
      <Section title="Projets">
        {data.projects.map((project, idx) => (
          <div
            key={project.id}
            className="mb-6 p-4 bg-slate-50 rounded-md border border-slate-200"
          >
            <input
              type="text"
              placeholder="Nom du projet"
              value={project.name}
              onChange={(e) =>
                updateProject(idx, { name: e.target.value })
              }
              className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Description du projet"
              value={project.description}
              onChange={(e) =>
                updateProject(idx, { description: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Technologies (séparées par des virgules)"
              value={project.technologies.join(", ")}
              onChange={(e) =>
                updateProject(idx, {
                  technologies: e.target.value.split(",").map((s) => s.trim()),
                })
              }
              className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="url"
              placeholder="Lien du projet"
              value={project.link || ""}
              onChange={(e) =>
                updateProject(idx, { link: e.target.value })
              }
              className="w-full px-3 py-2 border border-slate-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => removeProject(idx)}
              className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          onClick={addProject}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium"
        >
          + Ajouter un projet
        </button>
      </Section>
    </div>
  );
}
