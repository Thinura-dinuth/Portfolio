const Skills = () => {
  const skills = {
    frontend: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 80 },
    ],
    backend: [
      { name: "Springboot", level: 80 },
      { name: "Java", level: 80 },
      { name: "Python", level: 70 },
    ],
    uiux: [
      { name: "Figma", level: 80 },
      { name: "Azure RP", level: 75 },
      { name: "Photoshop", level: 70 },
    ],
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-grid">
          <div className="skills-category">
            <h3 className="skills-category-title">Front End</h3>
            <div className="skills-list">
              {skills.frontend.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">Backend</h3>
            <div className="skills-list">
              {skills.backend.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="skills-category-title">UI/UX</h3>
            <div className="skills-list">
              {skills.uiux.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
