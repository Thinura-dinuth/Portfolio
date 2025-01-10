import { Code2, Layout, Server, Monitor } from "lucide-react";

const skills = [
    {
        category: "Frontend",
        icon: <Layout className="w-6 h-6" />,
        items: ["React", "JavaScript", "HTML/CSS", "Bootstrap"],
    },
    {
        category: "Backend",
        icon: <Server className="w-6 h-6" />,
        items: ["Spring Boot", "Python", "Java"],
    },
    {
        category: "UI",
        icon: <Monitor className="w-6 h-6" />,
        items: ["Figma", "Axure RP"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container mx-auto px-4">
                <h2 className="skills-title">Skills & Expertise</h2>
                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div key={skill.category} className="skill-card">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="skill-icon">{skill.icon}</div>
                                <h3 className="skill-category">{skill.category}</h3>
                            </div>
                            <ul className="space-y-2">
                                {skill.items.map((item) => (
                                    <li key={item} className="skill-item">
                                        <Code2 className="skill-item-icon" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;