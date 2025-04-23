// src/portfolioData.js
// Stores the portfolio data structure

export const portfolioData = {
    personalInfo: {
        name: "Javier López Cacenave",
        handle: "ElJaviLuki",
        subtitle: "Full-Stack Developer & System Thinker", // Modified subtitle for Hero tagline
        portraitUrl: "/portrait.png", // Assuming you still use this or update path
        socialLinks: [
            {
                platform: "LinkedIn",
                url: "https://linkedin.com/in/eljaviluki"
            },
            {
                platform: "GitHub",
                url: "https://github.com/eljaviluki"
            },
            {
                platform: "Email",
                url: "mailto:eljaviluki@gmail.com"
            }
        ]
    },
    aboutMe: {
        short: {
            adjectives: [ // Note: These are not currently used in the About component design
                "Pragmatic",
                "Curious",
                "Resilient",
                "Systemic",
                "Empathetic"
            ],
            hook: "I work with people who want to win. Is that <b>you</b>?",
            detailsLink: "/about-me" // This link will be overridden in the component to keep SPA flow
        },
        long: { /* Data for a potential dedicated 'About Me' page - not used in current SPA structure */ }
    },
    testimonials: [
        {
            id: "testimonial-santiago",
            quote: "Working with Javier was a before and after for our agency. From day one, he understood our needs and completely transformed our TikTok LIVE recruitment system, automating manual processes and significantly improving our efficiency. In just a few months, we achieved a 20-30% increase in monthly revenue thanks to faster and more accurate talent acquisition.",
            authorName: "Santiago",
            authorTitle: "Royal TikTok",
            profilePic: "/santi-pic.png", // Ensure this image exists in /public
            associatedProjectId: "royal-tiktok",
            authorLinks: {
                web: "https://agenciaprincipito.com/",
                tiktok: "https://www.tiktok.com/@agencia.principito"
            }
        },
        {
            id: "testimonial-elena",
            quote: "I'm super organized since they set up this program for me, it's super easy and super convenient, I have everything I need. And on top of that, they told me that anything I come up with, they'll add it to the program. I'm super happy, I recommend it 100%.",
            authorName: "Elena",
            authorTitle: "Ortoprodent (Dental Lab)",
            profilePic: "/elena-pic.png", // Ensure this image exists in /public
            associatedProjectId: "ortoprodent-erp",
            authorLinks: {
            linkedin: "https://www.linkedin.com/in/ecacenave"
        }
}
],
experience: {
    freelanceConsulting: [
        {
            id: "royal-tiktok",
            name: "Royal TikTok",
            logo: "/logo-placeholder.png", // Placeholder - ensure exists or remove usage
            company: null, // Not used directly if 'name' is present
            role: "Data Architect & Automation Lead",
            date: "2024 - Present", // Adjusted date
            locationMode: "Remote",
            location: "Madrid, Madrid, Spain",
            summary: "Designed and implemented a data platform for extracting, transforming, and exposing unstructured data from TikTok LIVE for talent recruitment, boosting revenue by 20-30%.",
            details: [
                "Developed advanced scraping solutions (Playwright, BeautifulSoup) and integrated official/private APIs for data acquisition.",
                "Built an ETL pipeline using Pandas for data cleaning, normalization, and dynamic filtering.",
                "Orchestrated the entire process using APScheduler for automated execution.",
                "Exposed curated data via a RESTful API built with FastAPI, enabling multi-output scenarios (e.g., Notion API integration for user-facing lists).",
                "Focused on a modular, reusable design applicable to other domains with chaotic data.",
                "Key results included a 20-30% increase in client's monthly revenue and significantly faster talent acquisition."
            ],
            technologies: [
                "Python", "Pandas", "FastAPI", "APScheduler", "Playwright", "BeautifulSoup", "Reverse Engineering", "Notion API", "PostgreSQL", "REST APIs", "Docker"
            ],
            softSkills: [
                "Systemic Thinking", "Inter-profile Communication", "Technical Resilience", "Problem Solving", "Automation Strategy"
            ],
            pagePath: "/experience/royal-tiktok", // Not used in current SPA structure
            media: [ /* Not currently displayed in component */ ]
        },
        {
            id: "ortoprodent-erp",
            name: "Ortoprodent ERP",
            logo: "/logo-placeholder.png", // Placeholder
            client: "Ortoprodent (Dental Lab)", // Client name
            clientLogo: "/logo-placeholder.png", // Placeholder
            role: "Software Developer",
            date: "2023", // Adjusted date
            locationMode: "Remote",
            location: "Mérida, Badajoz, Spain",
            summary: "Developed a custom ERP software solution focused on ultra-low cognitive load UX for a dental laboratory, radically improving organization and workflow.",
            details: [
            "Built a tailored desktop application (Java Swing) to manage lab processes from order entry to invoicing.",
            "Focused on extreme ease of use and minimal UI friction to match the client's non-technical background.",
            "Designed for extensibility to accommodate future needs.",
            "Resulted in high user satisfaction and significant reduction in administrative overhead (see testimonial)."
    ],
        technologies: [
    "Java", "PostgreSQL", "Software Design", "UI/UX Design (Low Cognitive Load)", "Swing (UI)"
],
    softSkills: [
    "Client Communication", "Requirements Gathering", "User Empathy", "Solution Design", "Pragmatic Implementation"
],
    pagePath: "/experience/ortoprodent-erp", // Not used
    media: [ /* Not currently displayed */ ]
}
],
    corporate: [
        {
            id: "teldat",
            company: "Teldat",
            companyLogo: "/logo-placeholder.png", // Placeholder
            role: "Full-Stack Developer",
            date: "2024/07 - 2025/03",
        locationMode: "Hybrid",
        location: "Tres Cantos, Madrid, Spain",
        summary: "Contributed as a Full-Stack Developer to 'be.Analyzer', a complex, multi-tenant network monitoring platform, focusing on backend services (Python/Django), legacy React frontend maintenance, and system integrations (PostgreSQL, Redis, Kafka, Druid, Celery).",
        // projectContext is detailed but perhaps too much for the main list view - can be added to a detail page later
        details: [
    "Developed/maintained backend REST APIs (Django/DRF) for user management, device configuration, etc.",
        "Utilized Celery for async tasks (reporting, alarms).",
        "Leveraged Redis for caching and Celery message brokering.",
        "Integrated with Kafka for event streams.",
        "Queried Apache Druid for time-series network telemetry data.",
        "Managed API documentation (SwaggerUI/drf-yasg) and error monitoring (Honeybadger).",
        "Wrote tests (Pytest) and managed environments (Docker).",
        "Significantly contributed to reducing technical debt in the legacy React frontend."
],
    technologies: [
    "Python", "Django", "DRF", "PostgreSQL", "Celery", "Redis", "Apache Druid", "Kafka", "React", "JavaScript", "SwaggerUI", "Honeybadger", "Pytest", "Docker", "Git", "REST APIs", "Frontend Maintenance"
],
    softSkills: [
    "Teamwork", "Problem Solving", "Adaptability", "Working with Legacy Code", "System-Level Thinking", "Technical Communication"
],
    pagePath: "/experience/teldat", // Not used
    media: []
},
    {
        id: "drive-me-group",
            company: "Drive Me Group",
        companyLogo: "/logo-placeholder.png", // Placeholder
        role: "Data Engineer",
        duration: "2024/03 - 2024/06", // Use date or duration consistently
        date: "2024/03 - 2024/06",
        locationMode: "Remote",
        location: "Barcelona, Spain",
        summary: "Improved ETL processes and reporting (Zoho Suite) to consolidate leads, compare vehicle prices via scraping/RE, integrate Twilio, and enable dynamic pricing for a used car rental group.",
        details: [
        "Integrated data from diverse sources: third-party sites (scraping/API RE), Call Center leads (Twilio API), and website inquiries.",
            "Utilized Zoho Dataprep for data transformation and cleaning.",
            "Created dashboards and data storytelling using Zoho Analytics.",
            "Implemented API integrations (official and reverse-engineered).",
            "Improved logic for dynamic vehicle outsourcing based on cost, availability, margin, and internal fleet status."
    ],
        technologies: [
        "Zoho Dataprep", "Zoho Analytics", "Python", "API Integration", "Reverse Engineering", "Web Scraping", "Data Visualization", "Twilio API", "ETL", "SQL"
    ],
        softSkills: [
        "Data Analysis", "Process Automation", "Problem Solving", "Business Acumen", "System Integration"
    ],
        pagePath: "/experience/drive-me-group", // Not used
        media: [ /* Not currently displayed */ ]
    }
]
},
projects: {
    personal: [
        {
            id: "grindr-plus",
            title: "Grindr Plus Features (Xposed Mod)",
            logo: "/logo-placeholder.png", // Placeholder
            summary: "An Android Xposed Module mod enabling premium features locally on the Grindr dating app for educational reverse engineering purposes.",
            details: [
            "Decompiled and analyzed obfuscated Kotlin/Java code.",
            "Used dynamic hooking (Xposed Framework) to modify app behavior.",
            "Intercepted network traffic (mitmproxy/Burp) to understand private API calls and bypass certain client-side restrictions.",
            "Demonstrates practical application of static/dynamic analysis and network interception on mobile platforms.",
            "Driven by curiosity and the challenge of understanding closed-source systems."
    ],
        technologies: [
    "Kotlin", "Java", "Android Internals", "Xposed Framework", "Reverse Engineering", "Network Analysis", "Mobile Security", "Smali/Baksmali"
],
    pagePath: "/projects/grindr-plus", // Not used
    media: [ /* Not currently displayed */ ]
},
    {
        id: "csos-beacon",
            title: "Open Source C2 Beacon (Security Research)",
        logo: "/logo-placeholder.png", // Placeholder
        summary: "Reverse engineered concepts from Cobalt Strike's beacon and developed a functional open-source C2 beacon from scratch in C for security research.",
        details: [
        "Implemented basic C2 communication over HTTP, TCP, and SMB (Named Pipes).",
            "Involved extensive use of the Win32 API for low-level system interaction and payload execution simulation.",
            "Used Powershell for scripting simulated post-exploitation tasks.",
            "Deepened understanding of C2 mechanisms, network protocols, Windows internals, and offensive security development techniques."
    ],
        technologies: [
        "C", "Win32 API", "Windows Sockets (Winsock)", "HTTP", "TCP/IP", "SMB", "Named Pipes", "Powershell", "Reverse Engineering", "Cybersecurity Concepts", "Systems Programming"
    ],
        pagePath: "/projects/csos-beacon", // Not used
        media: [ /* Not currently displayed */ ]
    },
    {
        id: "idealistillo",
        title: "Idealistillo (API Wrapper)",
        logo: "/logo-placeholder.png", // Placeholder
        summary: "Developed 'Idealistillo', a Python client library wrapping the unofficial/internal Idealista API.",
            details: [
        "Provides a simple, intuitive Python interface to interact with Idealista's property data.",
            "Encapsulates endpoints, handles authentication negotiation, and manages pagination.",
            "Simplifies data retrieval for personal real estate analysis or integration projects."
    ],
        technologies: [
        "Python", "Requests", "API Design Principles", "Library Development", "Reverse Engineering (API)"
    ],
        pagePath: "/projects/idealistillo", // Not used
        media: []
    }
]
},
recognitions: [
{
    id: "ipo-2019",
        title: "International Philosophy Olympiad (IPO)",
    recognitionLogo: "/logo-placeholder.png", // Placeholder
    organizations: [ // Can be used if design allows
    { name: "FISP", logo: "/logo-placeholder.png" }, { name: "UNESCO", logo: "/logo-placeholder.png"}
],
    date: "May 2019",
    level: "Spanish Representative & Semifinalist (Rome, Italy)",
    summary: "Represented Spain among 50+ countries, competing in English philosophical essay writing and defense.",
    skillsDemonstrated: [
    "Critical Thinking", "Abstract Reasoning", "Argumentation", "Intercultural Communication", "Advanced English (C2)"
],
    sources: [
    { label: "Official IPO 2019 Site", url: "https://ipo2019.sfi.it/" },
    { label: "Hoy: Vida y Filosofía", url: "https://lazarza.hoy.es/vida-filosofia-20190411215651-nt.html" },
    { label: "Radio Alange Interview", url: "https://creators.spotify.com/pod/profile/Radio-Alange-Podcast/embed/episodes/ENTREVISTA-A-FCO--JAVIER-LPEZ-CACENAVE--DELEGACIN-ESPAOLA-OLIMPIADA-INTERNACIONAL-FILOSOFA-2019-e46629" },
    { label: "Cadena SER Interview", url: "https://cadenaser.com/programa/2019/04/30/la_ventana/1556639036_997871.html" },
    // { label: "La Gaceta Educarex", url: "http://lagaceta.educarex.es/leer/alumno-javier-lopez-cacenave-representara-espana-olimpiada-internacional-filosofia" },
    // { label: "IES Tierrablanca News", url: "https://iestierrablanca.educarex.es/noticias/153-general/uncategorised/451-olimpiadas-internacionales-de-filosofia" },
    // { label: "Hoy Article", url: "https://lazarza.hoy.es/alumno-instituto-tierrablanca-20190326230125-nt.html" },
    // { label: "Olimpiadas de Filosofía General Info", url: "https://olimpiadafilosofia.jimdofree.com/" }
],
    pagePath: "/recognitions/ipo-2019", // Not used
    media: [ /* Not currently displayed */ ]
},
{
    id: "oif-2019",
        title: "Iberoamerican Philosophy Olympiad",
    recognitionLogo: "/logo-placeholder.png", // Placeholder
    organization: "Red Española de Filosofía & OIF", // Optional display
    organizationLogo: "/logo-placeholder.png", // Placeholder
    date: "Oct 2019",
    level: "Bronze Medal",
    summary: "Achieved a Bronze Medal in the Iberoamerican competition focused on philosophical essay writing in Spanish.",
    skillsDemonstrated: [
    "Critical Thinking", "Abstract Reasoning", "Philosophical Argumentation (Spanish)"
],
    sources: [
    { label: "Filosofía Extremadura", url: "https://filosofiaextremadura.es/medalla-de-bronce-para-francisco-javier-lopez-cacenave-alumno-del-ies-tierrablanca/" },
    { label: "Olimpiada Filosofía Org", url: "https://olimpiadafilosofia.jimdofree.com/" }
],
    pagePath: "/recognitions/oif-2019", // Not used
    media: []
},
{
    id: "ncl-2021",
        title: "III National Cyberleague",
    recognitionLogo: "/logo-placeholder.png", // Placeholder
    organization: "Guardia Civil (Spain)", // Optional display
    organizationLogo: "/logo-placeholder.png", // Placeholder
    date: "Oct 2021",
    level: "Technical Semifinalist",
    summary: "Reached the semifinals (team competition) in the technical track, involving collaboration between technical and legal profiles.",
    skillsDemonstrated: [
    "Cybersecurity Fundamentals", "Problem Solving (under pressure)", "Multidisciplinary Teamwork", "Technical/Non-Technical Communication"
],
    sources: [
    { label: "Classification PDF (Search ElJaviLuki)", url: "https://www.nationalcyberleague.es/wp-content/uploads/2021/11/clasificacion_tecnico_03-11-2021.pdf" }
],
    pagePath: "/recognitions/ncl-2021", // Not used
    media: [ /* Not currently displayed */ ]
}
],
skills: {
    technical: [
        {
            area: "Programming Languages",
            skills: ["Python", "Java", "C", "C++", "Kotlin", "SQL", "JavaScript", "Powershell"]
        },
        {
            area: "Backend & Systems",
            skills: ["FastAPI", "Django", "DRF", "Celery", "Redis", "PostgreSQL", "MySQL", "Kafka", "Apache Druid", "REST API Design", "System Design", "Modular Architecture", "Docker"]
        },
        {
            area: "Data Engineering & ETL",
            skills: ["Pandas", "ETL Design", "Data Modeling", "Data Cleaning", "Data Normalization", "Zoho Dataprep", "PySpark", "Web Scraping (Playwright, BeautifulSoup, Selenium)", "APScheduler"]
        },
        {
            area: "Data Science & ML/AI",
            skills: ["Numpy", "SKLearn", "Supervised Learning", "Unsupervised Learning", "NLP", "Genetic Algorithms", "Recommender Systems", "Keras", "OpenCV", "MLLib (Spark)"]
        },
        {
            area: "Data Visualization",
            skills: ["Matplotlib", "Seaborn", "Plotly", "Folium", "Streamlit", "Zoho Analytics"]
        },
        {
            area: "Security & Reverse Engineering",
            skills: ["Reverse Engineering (Apps, APIs, Malware)", "Android (RE Context)", "Xposed Framework", "Frida (Conceptual)", "Win32 API", "Network Traffic Interception", "Decompilation", "Assembly (Conceptual)", "Cybersecurity Concepts", "C Programming"]
        },
        {
            area: "Frontend",
            skills: ["React (Maintenance)", "HTML", "CSS", "JavaScript (Basic)", "Swing (Java UI)"]
        },
        {
            area: "DevOps & Tools",
            skills: ["Git", "Docker", "CI/CD (Conceptual)", "Pytest", "Honeybadger", "Postman", "DevTools", "Linux/Unix Environments"]
        },
        {
            area: "Other Tech",
            skills: ["Regex", "Notion API", "Twilio API", "API Integration"]
        }
    ],
        soft: [
        "Systemic Thinking", "Pragmatism", "Curiosity", "Resilience", "Problem Solving", "Critical Thinking", "Abstract Reasoning", "Adaptability", "Self-Directed Learning", "Technical Communication", "Inter-profile Communication", "Client Communication", "Requirements Gathering", "User Empathy", "Business Acumen", "Working with Legacy Code", "Teamwork (Technical/Multidisciplinary)"
    ],
        languages: [
        { language: "Español", level: "Native", flag: "/flag-es.png" }, // Placeholder flag path
        { language: "English", level: "Advanced (C1/C2)", flag: "/flag-gb.png", details: "Proficient in complex technical & philosophical contexts" },
        { language: "Català", level: "Native-like", flag: "/flag-ct.png" },
        { language: "Français", level: "Intermediate (B1)", flag: "/flag-fr.png" },
        { language: "中文", level: "Beginner (HSK1)", flag: "/flag-cn.png" },
        { language: "Deutsch", level: "Beginner (A1)", flag: "/flag-de.png" }
    ]
},
education: [ // Optional Section: Not currently in App.jsx, but data is here if needed
    {
        id: "hackaboss",
        institution: "HACK A BOSS",
        logo: "/logo-placeholder.png",
        degree: "Bootcamp de Data Science & AI",
        duration: "2023/09 - 2024/02",
        status: "Completed",
        description: "Intensive bootcamp focused on practical Data Science and AI skills.",
        skillsLearned: [ "Python", "Stats", "Pandas", "Numpy", "Visualization", "Scraping", "APIs", "SQL", "ML", "DL", "Big Data", "Regex" ]
    },
    {
        id: "uniex",
        institution: "Universidad de Extremadura",
        logo: "/logo-placeholder.png",
        degree: "Grado en Ingeniería de Software",
        duration: "2020 - 2023",
        status: "Abandoned",
        notes: "Left due to misalignment with expectations for intellectual curiosity and modern approaches."
    }
],
    footer: {
    cta: "Ready to win — or just watching?",
        copyrightHandle: "Javier López Cacenave (ElJaviLuki)", // Use Handle
        copyrightYear: new Date().getFullYear() // Dynamic year
}
};