const cvData = {
    settings: {
        id: "settings",
        icon: "fa-solid fa-gear",
        label: "System",
        items: [
            {
                title: "About Me",
                icon: "fa-regular fa-id-card",
                content: "Computer Engineering Finalist at UBI. Passionate about Operating Systems and Low-level programming. Focused on going beyond theory.",
                details: {
                    type: "text",
                    lines: [
                        "Location: Covilha, Portugal",
                        "Interests: OS, Embedded, Low-level",
                        "Goal: Understand computing in a deeper level"
                    ]
                }
            },
            {
                title: "Contacts",
                icon: "fa-solid fa-address-book",
                content: "Get in touch.",
                details: {
                    type: "contact",
                    lines: [
                        { label: "Mobile", value: "961 221 347" },
                        { label: "Email", value: "bafc.2608@gmail.com" },
                        { label: "LinkedIn", value: "bruno-correia-5479851a2", link: "https://www.linkedin.com/in/bruno-correia-5479851a2/" }
                    ]
                }
            },
            {
                title: "Login",
                icon: "fa-solid fa-user",
                content: "Bruno Correia logged in.",
                details: { type: "info", lines: ["Status: Online", "Role: Developer"] }
            },
            {
                title: "Download CV",
                icon: "fa-solid fa-file-pdf",
                content: "Download my Curriculum Vitae.",
                details: {
                    type: "download",
                    link: "assets/cv.pdf",
                    fileName: "BrunoCorreia_CV.pdf"
                }
            }
        ]
    },
    skills: {
        id: "skills",
        icon: "fa-solid fa-toolbox",
        label: "Skills",
        items: [
            {
                title: "Hard Skills",
                icon: "fa-solid fa-microchip",
                content: "Technical Tools and Languages",
                details: {
                    type: "list",
                    lines: [
                        "Git, Linux/Bash, Jira",
                        "Low-level: C, OCaml, Java, C++, Assembly",
                        "Web: HTML, CSS, JavaScript",
                        "Hardware: TinkerCad, LogiSim, Arduino"
                    ]
                }
            },
            {
                title: "Soft Skills",
                icon: "fa-solid fa-users",
                content: "Personal Skills",
                details: {
                    type: "list",
                    lines: [
                        "Problem Solving",
                        "Teamwork",
                        "Proactivity",
                        "Results Oriented",
                        "Leadership"
                    ]
                }
            },
            {
                title: "Languages",
                icon: "fa-solid fa-language",
                content: "Spoken Languages",
                details: {
                    type: "list",
                    lines: [
                        "Portuguese: Native",
                        "English: B2"
                    ]
                }
            }
        ]
    },
    education: {
        id: "education",
        icon: "fa-solid fa-graduation-cap",
        label: "Education",
        items: [
            {
                title: "BSc Computer Engineering",
                icon: "fa-solid fa-building-columns",
                content: "University of Beira Interior (2023-2026)",
                details: {
                    type: "text",
                    lines: [
                        "Current GPA: 15.2",
                        "Relevant Courses:",
                        "- Operating Systems",
                        "- C Programming",
                        "- Functional Programming",
                        "- Computer Architecture",
                        "- Distributed Systems"
                    ]
                }
            }
        ]
    },
    projects: {
        id: "projects",
        icon: "fa-solid fa-gamepad",
        label: "Projects",
        items: [
            {
                title: "Process Scheduler",
                icon: "fa-solid fa-memory",
                content: "Process management simulator (Operating Systems)",
                details: {
                    type: "project",
                    link: "https://github.com/Brunocor26/SO_ProbSched",
                    lines: [
                        "Language: OCaml (Logic), Python (Vis), Bash (Auto)",
                        "Concepts: Round Robin, Probabilistic",
                        "Focus: Performance and CPU Management"
                    ]
                }
            },
            {
                title: "Incident Manager",
                icon: "fa-solid fa-bug",
                content: "Software Incident Management System Frontend",
                details: {
                    type: "project",
                    link: "https://github.com/Brunocor26/Software-Incident-Management-System",
                    lines: [
                        "Tech: JavaScript, HTML, CSS",
                        "Tecnologies: Vercel, SonarQube, Playwright, Git, Jira",
                        "Features: Dark Mode, Drag & Drop, Filtering",
                        "Role: Backend implementation"
                    ]
                }
            },
            {
                title: "VotoInformado",
                icon: "fa-solid fa-check-to-slot",
                content: "Android App for Informed Voting in Portugal",
                details: {
                    type: "project",
                    link: "https://github.com/Brunocor26/VotoInformado",
                    lines: [
                        "Tech: Java, Android SDK, Firebase, Retrofit",
                        "Features: Candidate Profiles, Polls, News",
                        "Focus: Civic Engagement"
                    ]
                }
            },
            {
                title: "3D Maze Game in OpenGL",
                icon: "fa-solid fa-cubes",
                content: "3D Maze Game in OpenGL (Computer Graphics course final project)",
                details: {
                    type: "project",
                    link: "https://github.com/Brunocor26/ProjetoFinal_CG_Maze",
                    lines: [
                        "Tech: C++, OpenGL, C",
                        "Focus: Computer Graphics, Rendering",
                        "Project: Final Course Project"
                    ]
                }
            },
            {
                title: "KeyZero",
                icon: "fa-solid fa-key",
                content: "Hackathon project — Shift to Digital event",
                details: {
                    type: "project",
                    link: "https://github.com/henriquelaia/KeyZero",
                    lines: [
                        "Collaboration: Bruno Correia & Henrique Laia",
                        "Event: Shift to Digital"
                    ]
                }
            },
            {
                title: "ChessFX",
                icon: "fa-solid fa-chess",
                content: "Chess Game Implementation",
                details: {
                    type: "project",
                    link: "https://github.com/Brunocor26/ChessFX",
                    lines: [
                        "Tech: Java, CSS",
                        "Framework: JavaFX (inferred)",
                        "Type: Desktop Application"
                    ]
                }
            }
        ]
    },
    reading: {
        id: "reading",
        icon: "fa-solid fa-book-open",
        label: "Reading",
        items: [
            {
                title: "Clean Code",
                icon: "fa-solid fa-broom",
                content: "A Handbook of Agile Software Craftsmanship",
                details: {
                    type: "book",
                    cover: "https://covers.openlibrary.org/b/isbn/9780132350884-M.jpg",
                    lines: [
                        "Autor: Robert C. Martin",
                        "Tema: Qualidade de software, código legível e manutenível",
                        "Ideia-chave: Code is read far more than it is written"
                    ]
                }
            },
            {
                title: "Segurança em Redes Informáticas",
                icon: "fa-solid fa-shield-halved",
                content: "Referência de cibersegurança em português",
                details: {
                    type: "book",
                    cover: "https://www.booki.pt/userfiles/images/loja/produtos/principal/9789727228577.jpg",
                    lines: [
                        "Autor: André Zúquete",
                        "Tema: Protocolos, criptografia, segurança de redes",
                        "UC: Segurança Informática"
                    ]
                }
            },
            {
                title: "The Practice of System and Network Administration",
                icon: "fa-solid fa-server",
                content: "2nd Edition — Limoncelli, Hogan & Chalup",
                details: {
                    type: "book",
                    cover: "https://m.media-amazon.com/images/I/41gVVNSU4-L._AC_UF1000,1000_QL80_.jpg",
                    lines: [
                        "Autores: Limoncelli, Hogan & Chalup",
                        "Tema: Administração de sistemas, Unix/Linux, gestão de serviços IT",
                        "UC: Administração de Sistemas em Rede"
                    ]
                }
            }
        ]
    },
    experience: {
        id: "experience",
        icon: "fa-solid fa-sd-card",
        label: "Experience",
        items: [
            {
                title: "Academic Tutor",
                icon: "fa-solid fa-chalkboard-user",
                content: "UBI Learning Hub II (2024-2026)",
                details: {
                    type: "text",
                    lines: [
                        "Support for new students in Programming (C/Python) and Math.",
                        "Demonstrating technical mastery and communication."
                    ]
                }
            },
            {
                title: "Volunteering",
                icon: "fa-solid fa-hand-holding-heart",
                content: "Refood Covilha (2023-Present)",
                details: {
                    type: "text",
                    lines: [
                        "Teamwork and interpersonal communication.",
                        "Sense of mission and social commitment."
                    ]
                }
            }
        ]
    }
};
