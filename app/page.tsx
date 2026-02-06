import { personalInfo } from "@/data/config";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-12 text-slate-800">
      {/* 1. Hero Section: 个人简介 */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
        <p className="text-xl text-slate-600 mb-6">{personalInfo.title}</p>
        <p className="text-lg leading-relaxed mb-6">{personalInfo.description}</p>
        <div className="flex gap-4">
          <a href={personalInfo.socials.github} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">GitHub</a>
          <a href={personalInfo.socials.email} className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition">Email Me</a>
        </div>
      </section>

      {/* 2. Projects Section: 项目展示 */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalInfo.projects.map((project, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}