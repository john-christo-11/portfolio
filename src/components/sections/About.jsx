import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML",
    "CSS",
    "TailwindCSS",
    "JavaScript",
    "Bootstrap",
  ];

  const backendSkills = ["Java", "SQL"];
  const techSkills = ["Firebase", "Git", "WordPress", "Canva", "VS Code", "Visio", "Office Tools"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <center>
              <p className="text-gray-300 mb-6">
                I specialize in front-end development, creating visually appealing and interactive user interfaces.
                I also have a keen interest in Java and backend technologies, allowing me to explore full-stack development.
                I'm always eager to learn and enhance my expertise to build seamless digital solutions.
              </p>
            </center>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Tech Skills */}
            <div className="mt-8 rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Other Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="grid grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor of Computer Application (BCA)</strong> - Sacred Heart College (Autonomous), Tirupattur.  
                  <br />
                  <strong>CGPA:</strong> 7.64
                </li>
                <li>
                  <strong>Higher Secondary Certificate (HSC)</strong> - St. James Higher Secondary School, Trichy.  
                  <br />
                  <strong>Percentage:</strong> 70%
                </li>
                <li>
                  <strong>Secondary School Leaving Certificate (SSLC)</strong> - St. James Higher Secondary School, Trichy.  
                  <br />
                  <strong>Percentage:</strong> 88.8%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
