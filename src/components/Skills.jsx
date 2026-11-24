import "./Skills.css";

function Skills() {
    const skillCategories = [
        {
            title:"Frontend Development",
            icon: "💻",
            skills: [
                {name:"HTML5", level:"Advance", percent: 90},
                {name:"CSS3", level:"Advance", percent: 85},
                {name:"JavaScript", level:"Intermediate", percent: 75},
                {name:"React.js", level:"Intermediate", percent: 75},
            ],
        },

        {
            title:"Backend Development",
            icon:"⚙️",
            skills:[
                {name: "Core Java", level:"Advanced", percent: 85},
                {name:"Advanced Java", level:"Intermediate", percent: 75},
                {name:"Spring Boot", level:"Intermediate", percent: 70},
                {name:"REST API", level:"Intermediate", percent: 70},
            ],
        },

        {
            title:"Database",
            icon:"🗄️",
            skills:[
                {name:"MySQL", level:"Intermediate", percent: 75},
                {name:"PostgreSQL", level:"Intermediate", percent: 70},
            ],
        },

        {
            title:"Tools & Technologies",
            icon:"🛠️",
            skills:[
                {name:"Git", level:"Intermediate", percent: 75},
                {name: "GitHub", level:"Intermediate", percent: 75},
                {name:"VS Code", level:"Advanced", percent: 85},
                {name:"Spring Tool Suite", level:"Intermediate",percent: 75},
            ],
        },
    ];

    return (
        <section className="skills-section">
            <div className="skills-container">
                {/* Heading */}
                <div className="skills-heading">
                    <span className="skills-label">MY EXPERTISE</span>
                    <h1>My<span>Skills</span></h1>
                    <p>
                        Technologies and tools I use to build responsive websites
                        and full-stack web applications.
                    </p>
                </div>

                {/* skill categories */}
                <div className="skills-grid">
                    {skillCategories.map((category, index)=>(
                        <div className="skill--card" key={index}>

                            <div className="skill-card-heading">
                                <span className="skill-icon">{category.icon}</span>
                                <h2>{category.title}</h2>
                            </div>

                            <div className="skill-list">
                                {category.skills.map((skill)=>(
                                    <div className="skill-item" key={skill.name}>
                                        
                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}</span>
                                        </div>

                                        <div className="skill-bar">
                                            <div
                                            className="skill-progress"
                                            style={{width:`${skill.percent}%` }}
                                            ></div>
                                        </div>
                                   </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom message */}
                <div className="skills-bottom">
                    <h2>Always Learning, Always Growing.</h2>
                    <p>
                        I continuously improve my technical knowledge and explore
                        new technologies to become a better Full Stack Developer.
                    </p>

                </div>

            </div>

        </section>
             
    )
}
export default Skills;
