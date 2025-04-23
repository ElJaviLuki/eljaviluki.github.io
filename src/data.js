// --- START OF FILE src/data.js ---

// src/data.js
// Exporting the entire portfolio data structure

export const portfolioData = {
    "personalInfo": {
        "name": "Javier López Cacenave",
        "handle": "ElJaviLuki",
        "subtitle": "Full-Stack Developer",
        "portraitUrl": "/placeholder-portrait.png", // Ensure this exists in /public
        "socialLinks": [
            {
                "platform": "LinkedIn",
                "url": "https://linkedin.com/in/eljaviluki"
            },
            {
                "platform": "GitHub",
                "url": "https://github.com/eljaviluki"
            },
            {
                "platform": "Email",
                "url": "mailto:eljaviluki@gmail.com"
            }
        ]
    },
    "aboutMe": {
        "short": {
            "adjectives": [
                "Pragmatic",
                "Curious",
                "Resilient",
                "Systemic",
                "Empathetic"
            ],
            "hook": "I work with people who want to win. Is that <b>you</b>?",
            "detailsLink": "/about-me" // Link to the new About Me page
        },
        "long": {
            "aboutMe": {
                "headline": "Fusionando visión y pragmatismo para crear soluciones reales y a medida.",
                "subheadline": "Motivado por una curiosidad innata y un enfoque práctico, transformo necesidades complejas en soluciones de software end-to-end simples y efectivas que impulsan resultados reales.",
                "philosophy": [
                    {
                        "type": "paragraph",
                        "content": "Desde pequeño me ha fascinado la tecnología y el \"cómo\" de las cosas. Pero mi interés no se detiene en entender; siempre me pregunto \"¿cómo podría ser mejor?\". Esta dualidad define mi manera de trabajar: tengo una vena intuitiva que me ayuda a captar necesidades profundas y a imaginar soluciones creativas –un eco del sentido intuitivo de mi padre–, casi como un sexto sentido para ver el potencial."
},
{
    "type": "media",
    "src": "/placeholder-media-1.jpg", // Ensure this exists in /public
    "alt": "Intuition or potential visualized"
},
{
    "type": "paragraph",
    "content": "Sin embargo, sé que las ideas más brillantes no sirven de nada si no son prácticas y comunicables, una lección clave aprendida del pragmatismo de mi madre. Por eso, esa visión la aterrizo siempre con un fuerte sentido práctico: busco resultados tangibles, pasos claros y soluciones que la gente pueda usar fácilmente aquí y ahora. Esta capacidad de equilibrar la visión a largo plazo con la utilidad inmediata es fundamental en mi enfoque."
},
{
    "type": "media",
    "src": "/placeholder-media-2.mp4", // Ensure this exists in /public
    "alt": "Pragmatism or practical application visualized"
},
{
    "type": "paragraph",
    "content": "Mi meta es fusionar estas dos facetas: la inteligencia para imaginar y la habilidad para construir de forma práctica."
}
],
"caseStudy": {
    "title": "Un Ejemplo en Acción:",
        "content": [
        {
            "type": "paragraph",
            "content": "Un buen ejemplo fue el ERP que diseñé para el laboratorio dental de mi tía. Ella es un portento en lo que artes plásticas se refiere y lo demuestra con sus trabajos protésicos de altísima calidad. Sin embargo, la gestión administrativa era su talón de Aquiles: un caos constante de archivos y facturas que la frustraba y le robaba un tiempo precioso. Entendí (intuición) que los sistemas estándar, con sus múltiples opciones y pasos, simplemente la abrumaban. Por eso (pragmatismo), no le adapté una herramienta genérica; diseñé desde cero una solución con una experiencia de usuario (UX) de carga cognitiva ultrabaja. Me enfoqué en un flujo de trabajo hiper-simplificado, casi guiado, y una interfaz minimalista anti-distracciones. El objetivo no era solo organizar, sino eliminar por completo la fricción y el estrés de la gestión, liberándola para que toda su energía fuera a crear."
        },
        {
            "type": "media",
            "src": "/placeholder-media-3.jpg", // Ensure this exists in /public
            "alt": "Dental lab ERP project visualization"
        }
    ]
},
"approach": {
    "title": "Mi Enfoque: De la Necesidad a la Solución",
        "steps": [
        {
            "id": "01",
            "title": "Diagnóstico 360º",
            "description": "Profundizar en el desafío real, conectando las necesidades humanas y los objetivos del negocio con la viabilidad técnica para definir el 'qué' y el 'por qué' fundamental."
        },
        {
            "id": "02",
            "title": "Visión y Diseño",
            "description": "Fusionar la visión creativa con el diseño pragmático: definir la arquitectura de la solución y la experiencia de usuario óptima, trazando un camino claro hacia el resultado deseado."
        },
        {
            "id": "03",
            "title": "Impacto Real",
            "description": "Materializar la solución: construir software funcional y robusto que resuelve el desafío identificado, entregando valor medible y mejorando la experiencia de las personas involucradas."
        }
    ]
}
}
}
},
"testimonials": [
    {
        "id": "testimonial-santiago",
        "quote": "Working with Javier was a before and after for our agency. From day one, he understood our needs and completely transformed our TikTok LIVE recruitment system, automating manual processes and significantly improving our efficiency. In just a few months, we achieved a 20-30% increase in monthly revenue thanks to faster and more accurate talent acquisition.",
        "authorName": "Santiago",
        "authorTitle": "Royal TikTok",
        "profilePic": "/santi-pic.png", // Ensure this exists in /public
        "associatedProjectId": "royal-tiktok",
        "authorLinks": {
            "web": "<https://agenciaprincipito.com/>",
            "tiktok": "<https://www.tiktok.com/@agencia.principito>"
        }
    },
    {
        "id": "testimonial-elena",
        "quote": "I'm super organized since they set up this program for me, it's super easy and super convenient, I have everything I need. And on top of that, they told me that anything I come up with, they'll add it to the program. I'm super happy, I recommend it 100%.",
        "authorName": "Elena",
        "authorTitle": "Ortoprodent (Dental Lab)",
        "profilePic": "/elena-pic.png", // Ensure this exists in /public
        "associatedProjectId": "ortoprodent-erp",
        "authorLinks": {
            "linkedin": "<https://www.linkedin.com/in/ecacenave>"
        }
    }
],
    "experience": {
    "freelanceConsulting": [
        {
            "id": "royal-tiktok",
            "name": "Royal TikTok Data Platform", // Adjusted name for clarity
            "logo": "/logo-placeholder.png",
            "client": "Royal TikTok / Agencia Principito", // Clarified client
            "clientLogo": "/logo-placeholder.png", // Use specific if available
            "role": "Data Architect & Automation Lead",
            "date": "2024 - Present", // Example Date Range
            "locationMode": "Remote",
            "location": "Madrid, Spain",
            "summary": "Designed and implemented a data platform for extracting, transforming, and exposing unstructured data from TikTok LIVE for talent recruitment.",
            "details": [
                "Developed advanced scraping solutions (Playwright, BeautifulSoup) and integrated official/private APIs for data acquisition.",
                "Built an ETL pipeline using Pandas for data cleaning, normalization, and dynamic filtering.",
                "Orchestrated the entire process using APScheduler for automated execution.",
                "Exposed curated data via a RESTful API built with FastAPI, enabling multi-output scenarios (e.g., Notion API integration for user-facing lists).",
                "Focused on a modular, reusable design applicable to other domains with chaotic data.",
                "Key results included a 20-30% increase in client's monthly revenue and significantly faster talent acquisition."
            ],
            "technologies": [
                "Python",
                "Pandas",
                "FastAPI",
                "APScheduler",
                "Playwright",
                "BeautifulSoup",
                "Reverse Engineering",
                "Notion API",
                "PostgreSQL",
                "REST APIs",
                "Docker" // Implied
            ],
            "softSkills": [
                "Systemic Thinking",
                "Inter-profile Communication",
                "Technical Resilience",
                "Problem Solving",
                "Automation Mindset"
            ],
            "pagePath": "/experience/royal-tiktok",
            "media": [
                {
                    "type": "image",
                    "src": "/placeholder-experience-royal-tiktok-1.jpg", // Ensure this exists in /public
                    "alt": "Visual representation of the Royal TikTok data pipeline or results"
                }
            ]
        },
        {
            "id": "ortoprodent-erp",
            "name": "Ortoprodent ERP",
            "logo": "/logo-placeholder.png",
            "client": "Ortoprodent (Dental Lab)",
            "clientLogo": "/logo-placeholder.png", // Use specific if available
            "role": "Software Developer",
            "date": "2023", // Example Date
            "locationMode": "Remote",
            "location": "Mérida, Spain",
            "summary": "Developed a custom ERP software solution for a dental laboratory, significantly improving their organization and workflow.",
            "details": [
                "Built a tailored software application from scratch to manage all lab processes.",
                "Focused obsessively on ease of use (minimal cognitive load UX) and convenience for a non-technical user.",
                "Met all specified requirements and designed for future extensibility.",
                "Resulted in radical efficiency gains and high user satisfaction (see testimonial)."
            ],
            "technologies": [
                "Java",
                "PostgreSQL",
                "Swing (UI)", // Adding UI tech
                "Software Design",
                "UX Design Principles"
            ],
            "softSkills": [
                "Client Communication",
                "Requirements Gathering",
                "User Empathy",
                "Solution Design",
                "Pragmatism"
            ],
            "pagePath": "/experience/ortoprodent-erp",
            "media": [
                {
                    "type": "image",
                    "src": "/placeholder-experience-ortoprodent-1.png", // Ensure this exists in /public
                    "alt": "Screenshot or mockup of the Ortoprodent ERP interface"
                }
            ]
        }
    ],
        "corporate": [
        {
            "id": "teldat",
            "company": "Teldat",
            "companyLogo": "/logo-placeholder.png", // Use specific if available
            "role": "Full-Stack Developer",
            "date": "2024/07 - 2025/03",
            "locationMode": "Hybrid",
            "location": "Tres Cantos, Madrid, Spain",
            "summary": "Contributed as a Full-Stack Developer to 'be.Analyzer', a complex, multi-tenant network monitoring and analysis platform. Involved in developing backend services (Python/Django), maintaining a high-technical-debt legacy React frontend, and integrating various components including databases (PostgreSQL), message queues (Redis/Kafka), task processing (Celery), and real-time analytics engines (Druid).",
            "projectContext": {
                "projectName": "be.Analyzer (Network Monitoring & Analysis Platform)",
                "purpose": "A comprehensive, multi-tenant platform designed for network device management, real-time traffic analysis (handling NetFlow, sFlow, etc.), telemetry visualization via customizable dashboards, network asset management, and hierarchical user/permission management. Features included licensing controls and potential AI-driven anomaly detection.",
                "architecture": "Multi-tiered architecture featuring a Django/DRF REST API backend, PostgreSQL for relational metadata (users, devices, configs), Apache Druid for time-series telemetry data storage and querying, Redis for caching and Celery message brokering, and Celery for asynchronous task execution. Designed for containerized deployment (Docker), likely targeting cloud environments (GCP).",
                "keyModules": [
                    "User & Hierarchy Management (Multi-tenant, Roles, Permissions)",
                    "System Provisioning (Device Management, Licensing)",
                    "Traffic Analysis (Druid Integration, Analytics Definitions)",
                    "Dashboards & Reporting (Customizable Widgets, PDF Exports, Alarms)",
                    "Inventory Management (Asset Discovery & Tracking)",
                    "Potential AI/Anomaly Detection & Cybersecurity Modules"
                ]
            },
            "details": [
                "Developed and maintained backend REST API services using Python, Django, and Django Rest Framework (DRF) with PostgreSQL for core platform functionalities like user management, device configuration, and data retrieval within the 'be.Analyzer' system.",
                "Utilized Celery for handling asynchronous background tasks such as periodic report generation, alarm processing, and license validation.",
                "Leveraged Redis for caching API responses and as a message broker for Celery.",
                "Integrated with Kafka for consuming or producing event streams related to network data or system events.",
                "Worked with Apache Druid, focusing on querying and retrieving large volumes of time-series network telemetry data to support the platform's traffic analysis features.",
                "Implemented and maintained API documentation using SwaggerUI (via drf-yasg) for clarity and ease of integration.",
                "Configured and utilized Honeybadger for real-time error monitoring and alerting in the backend services.",
                "Wrote unit and integration tests using Pytest and related libraries (e.g., factory-boy) to ensure code quality and reliability.",
                "Managed application development and deployment environments using Docker containers.",
                "Significantly contributed to reducing technical debt and improving maintainability of the legacy React frontend system, which was inherited from previous external development efforts."
            ],
            "technologies": [
                "Python",
                "Django",
                "Django Rest Framework (DRF)",
                "PostgreSQL",
                "Celery",
                "Redis",
                "Apache Druid",
                "Kafka",
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "SwaggerUI / drf-yasg",
                "Honeybadger",
                "Pytest",
                "Docker",
                "Gunicorn",
                "Git",
                "RESTful APIs",
                "Frontend Maintenance",
                "Backend Development"
            ],
            "softSkills": [
                "Teamwork",
                "Problem Solving",
                "Adaptability",
                "Working with Legacy Code",
                "System-Level Thinking",
                "Technical Communication"
            ],
            "pagePath": "/experience/teldat",
            "media": []
        },
        {
            "id": "drive-me-group",
            "company": "Drive Me Group",
            "companyLogo": "/logo-placeholder.png", // Use specific if available
            "role": "Data Engineer",
            "date": "2024/03 - 2024/06", // Adjusted 'duration' to 'date'
            "locationMode": "Remote",
            "location": "Barcelona, Spain",
            "summary": "Improved an ETL process and reporting system to consolidate leads, compare vehicle prices, and enable dynamic pricing for a used car rental group.",
            "details": [
                "Integrated data from diverse sources: third-party car websites (via scraping/API RE), Call Center leads, and website vehicle inquiries.",
                "Integrated Twilio API for Call Center functional enablement.",
                "Utilized Zoho Dataprep for data transformation and cleaning.",
                "Leveraged Zoho Analytics to create dashboards, generate insights, and present data storytelling for management.",
                "Implemented API integrations and reverse engineered APIs where necessary.",
                "Improved logic for dynamic vehicle outsourcing: checking cost/availability from third parties and applying a pricing algorithm based on margin and costs if a requested vehicle wasn't in the fleet."
            ],
            "technologies": [
                "Zoho Dataprep",
                "Zoho Analytics",
                "Python",
                "API Integration",
                "Reverse Engineering",
                "Web Scraping",
                "Data Visualization",
                "Business Logic Implementation",
                "ETL",
                "Twilio API"
            ],
            "softSkills": [
                "Data Analysis",
                "Process Automation",
                "Problem Solving",
                "Business Acumen",
                "Data Storytelling"
            ],
            "pagePath": "/experience/drive-me-group",
            "media": [
                {
                    "type": "image",
                    "src": "/placeholder-experience-driveme-1.png", // Ensure this exists in /public
                    "alt": "Example Zoho Analytics dashboard or data flow diagram for Drive Me Group"
                }
            ]
        }
    ]
},
"projects": {
    "personal": [
        {
            "id": "grindr-plus",
            "title": "Grindr Plus Features (RE)", // Clarified RE
            "logo": "/logo-placeholder.png",
            "summary": "An Android Xposed Module mod exploring premium features of the Grindr dating app.",
            "details": [
                "Performed static and dynamic analysis of the obfuscated Android application (Kotlin/Java).",
                "Utilized Xposed Framework for runtime hooking and modification.",
                "Intercepted and analyzed network traffic (using tools like Burp Suite) to understand private API interactions.",
                "Successfully enabled certain premium features locally for educational purposes.",
                "Demonstrates practical application of reverse engineering techniques on mobile platforms.",
                "Driven by curiosity and the challenge of understanding closed-source systems."
            ],
            "technologies": [
                "Kotlin",
                "Java",
                "Android Internals",
                "Xposed Framework",
                "Frida (similar concept)",
                "Reverse Engineering",
                "Network Analysis",
                "Static Analysis",
                "Dynamic Analysis",
                "Decompilation"
            ],
            "pagePath": "/projects/grindr-plus",
            "media": [
                {
                    "type": "image",
                    "src": "/placeholder-project-grindr-1.png", // Ensure this exists in /public
                    "alt": "Conceptual image related to Grindr Plus modding/RE"
                }
            ]
        },
        {
            "id": "csos-beacon",
            "title": "Cobalt Strike Open Source Beacon (C)", // Clarified language
            "logo": "/logo-placeholder.png",
            "summary": "Developed a functional open-source C2 beacon inspired by Cobalt Strike, built from scratch in C.",
            "details": [
                "Researched Command and Control (C2) communication patterns and techniques.",
                "Implemented core beacon functionality, including check-ins and task retrieval.",
                "Developed communication channels over HTTP, TCP, and SMB (via Named Pipes).",
                "Interacted directly with the Win32 API for system-level operations.",
                "Included basic Powershell execution capabilities for simulated post-exploitation tasks.",
                "Motivated by a deep interest in cybersecurity, malware analysis, and low-level systems programming."
            ],
            "technologies": [
                "C",
                "Win32 API",
                "Windows Sockets (Winsock)",
                "HTTP Protocol",
                "TCP/IP",
                "SMB",
                "Named Pipes",
                "Powershell",
                "Reverse Engineering (Concepts)",
                "Cybersecurity Concepts",
                "Systems Programming"
            ],
            "pagePath": "/projects/csos-beacon",
            "media": [
                {
                    "type": "image",
                    "src": "/placeholder-project-csos-beacon-1.png", // Ensure this exists in /public
                    "alt": "Diagram or code snippet related to the CSOS Beacon project"
                }
            ]
        },
        {
            "id": "idealistillo",
            "title": "Idealistillo (Python API Client)",
            "logo": "/logo-placeholder.png",
            "summary": "Developed 'Idealistillo', a Python client library wrapping the Idealista API for property data.",
            "details": [
                "Provides a simple, intuitive Python interface to interact with Idealista's property data API (official or otherwise).",
                "Handles authentication, pagination, and endpoint abstraction.",
                "Simplifies data retrieval for personal analysis or integration into other projects."
            ],
            "technologies": [
                "Python",
                "Requests",
                "API Integration",
                "Library Development",
                "API Design Principles"
            ],
            "pagePath": "/projects/idealistillo",
            "media": []
        }
    ]
},
"recognitions": [
    {
        "id": "ipo-2019",
        "title": "International Philosophy Olympiad (IPO)",
        "recognitionLogo": "/logo-placeholder.png", // Use specific if available
        "organizations": [
            {
                "name": "FISP (International Federation of Philosophical Societies)",
                "logo": "/logo-placeholder.png" // Use specific if available
            },
            {
                "name": "UNESCO",
                "logo": "/logo-placeholder.png" // Use specific if available
            }
        ],
        "date": "2019/05",
        "level": "Spanish Representative & Semifinalist",
        "location": "Rome, Italy", // Added location
        "summary": "Represented Spain in the XXVII international competition held in Rome, reaching the semifinals after national selection.",
        "skillsDemonstrated": [
            "Critical Thinking",
            "Abstract Reasoning",
            "Argumentation",
            "Interlingual & Intercultural Communication (over 50 countries)",
            "Advanced English (Oral & Written defense of complex philosophical arguments)"
        ],
        "sources": [
            {
                "label": "Official IPO 2019 Site",
                "url": "<https://ipo2019.sfi.it/>"
            },
            {
                "label": "Todo en la vida es filosofía (Hoy)",
                "url": "<https://lazarza.hoy.es/vida-filosofia-20190411215651-nt.html>"
            },
            {
                "label": "Radio Alange Interview (Spotify)",
                "url": "<https://creators.spotify.com/pod/profile/Radio-Alange-Podcast/embed/episodes/ENTREVISTA-A-FCO--JAVIER-LPEZ-CACENAVE--DELEGACIN-ESPAOLA-OLIMPIADA-INTERNACIONAL-FILOSOFA-2019-e46629>"
            },
            {
                "label": "Cadena SER Interview",
                "url": "<https://cadenaser.com/programa/2019/04/30/la_ventana/1556639036_997871.html>"
            },
            {
                "label": "Olimpiadas de Filosofía General Info",
                "url": "<https://olimpiadafilosofia.jimdofree.com/>"
            }
        ],
        "pagePath": "/recognitions/ipo-2019",
        "media": [
            {
                "type": "image",
                "src": "/placeholder-recognition-ipo-1.jpg", // Ensure this exists in /public
                "alt": "Photo from the IPO 2019 event or related materials"
            }
        ]
    },
    {
        "id": "oif-2019",
        "title": "Iberoamerican Philosophy Olympiad",
        "recognitionLogo": "/logo-placeholder.png", // Use specific if available
        "organizations": [ // Changed to array for consistency
            {
                "name": "Red Española de Filosofía & OIF",
                "logo": "/logo-placeholder.png" // Use specific if available
            }
        ],
        "date": "2019/10",
        "level": "Bronze Medal",
        "location": "Spain (National Level)", // Clarified scope/location
        "summary": "Achieved a Bronze Medal in the Iberoamerican competition's national qualifying round.",
        "skillsDemonstrated": [
            "Critical Thinking",
            "Abstract Reasoning",
            "Argumentation (Spanish)",
            "Written Expression"
        ],
        "sources": [
            {
                "label": "Filosofía Extremadura Announcement",
                "url": "<https://filosofiaextremadura.es/medalla-de-bronce-para-francisco-javier-lopez-cacenave-alumno-del-ies-tierrablanca/>"
            },
            {
                "label": "Olimpiadas de Filosofía General Info",
                "url": "<https://olimpiadafilosofia.jimdofree.com/>"
            }
        ],
        "pagePath": "/recognitions/oif-2019",
        "media": []
    },
    {
        "id": "ncl-2021",
        "title": "III National Cyberleague",
        "recognitionLogo": "/logo-placeholder.png", // Use specific if available
        "organizations": [ // Changed to array
            {
                "name": "Guardia Civil (Spain)",
                "logo": "/logo-placeholder.png" // Use specific if available
            }
        ],
        "date": "2021/10",
        "level": "Technical Semifinalist",
        "location": "Spain (Online)", // Clarified location/mode
        "summary": "Reached the semifinals in the technical track of the National Cyberleague competition as part of a multidisciplinary university team.",
        "skillsDemonstrated": [
            "Cybersecurity Fundamentals",
            "Problem Solving (under pressure)",
            "Teamwork (Technical/Legal collaboration)",
            "Communication (Cross-functional)"
        ],
        "sources": [
            {
                "label": "Official Classification PDF (search ElJaviLuki)",
                "url": "<https://www.nationalcyberleague.es/wp-content/uploads/2021/11/clasificacion_tecnico_03-11-2021.pdf>"
            }
        ],
        "pagePath": "/recognitions/ncl-2021",
        "media": [
            {
                "type": "image",
                "src": "/placeholder-recognition-ncl-1.jpg", // Ensure this exists in /public
                "alt": "Image related to the National Cyberleague event or team"
            }
        ]
    }
],
    "skills": {
    "technical": [
        {
            "area": "Programming Languages",
            "skills": [
                "Python",
                "Java",
                "C",
                "C++ (Basic)",
                "Kotlin",
                "SQL",
                "JavaScript (ES6+)",
                "Powershell",
                "Shell Scripting (Bash)"
            ]
        },
        {
            "area": "Backend & Frameworks",
            "skills": [
                "FastAPI",
                "Django / DRF",
                "Flask (Basic)",
                "Node.js (Conceptual)",
                "REST API Design"
            ]
        },
        {
            "area": "Frontend",
            "skills": [
                "React",
                "HTML5",
                "CSS3",
                "JavaScript (DOM)",
                "Swing (Java UI)" // Legacy/Specific
            ]
        },
        {
            "area": "Data Engineering & ETL",
            "skills": [
                "Pandas",
                "NumPy",
                "ETL Pipelines",
                "Data Cleaning & Wrangling",
                "Data Modeling (Conceptual)",
                "Zoho Dataprep",
                "PySpark",
                "Apache Kafka",
                "Apache Druid",
                "Data Warehousing (Conceptual)"
            ]
        },
        {
            "area": "Web Scraping & Automation",
            "skills": [
                "Playwright",
                "BeautifulSoup",
                "Selenium",
                "Requests",
                "APScheduler",
                "Celery"
            ]
        },
        {
            "area": "Databases & Storage",
            "skills": [
                "PostgreSQL",
                "MySQL",
                "Redis",
                "SQLAlchemy (Basic)"
            ]
        },
        {
            "area": "Data Science & ML/AI (Foundational)",
            "skills": [
                "Scikit-learn (SKLearn)",
                "Supervised & Unsupervised Learning",
                "NLP Basics",
                "Keras (Basic)",
                "OpenCV (Basic)",
                "MLLib (Spark)",
                "Statistics Fundamentals"
            ]
        },
        {
            "area": "Data Visualization",
            "skills": [
                "Matplotlib",
                "Seaborn",
                "Plotly",
                "Streamlit",
                "Zoho Analytics"
            ]
        },
        {
            "area": "DevOps & Tools",
            "skills": [
                "Docker",
                "Git",
                "Pytest",
                "CI/CD (Conceptual)",
                "Linux/Unix",
                "Postman",
                "Browser DevTools",
                "Gunicorn"
            ]
        },
        {
            "area": "Security & Reverse Engineering",
            "skills": [
                "Reverse Engineering (Android Apps, Binaries)",
                "Static/Dynamic Analysis",
                "Decompilation (Kotlin, Java, C)",
                "Network Traffic Analysis (Burp Suite)",
                "Xposed Framework / Frida",
                "Win32 API (Security Context)",
                "Cybersecurity Concepts",
                "C2 Mechanisms"
            ]
        }
    ],
        "soft": [
        "Systemic Thinking",
        "Problem Solving",
        "Pragmatism",
        "Curiosity",
        "Resilience",
        "Adaptability",
        "Critical Thinking",
        "Abstract Reasoning",
        "Technical Communication",
        "Inter-profile Communication",
        "Client Communication",
        "Requirements Gathering",
        "User Empathy",
        "Self-Directed Learning",
        "Teamwork",
        "Mentoring (Informal)"
    ],
        "languages": [
        {
            "language": "Español",
            "level": "Native",
            "flag": "/flags/es.svg" // Example path, ensure exists in public/flags
        },
        {
            "language": "English",
            "level": "Advanced (C1/C2)",
            "flag": "/flags/gb.svg",
            "details": "Proficient in complex technical and philosophical discussion/writing"
        },
        {
            "language": "Català",
            "level": "Native-like", // Adjusted level
            "flag": "/flags/ct.svg"
        },
        {
            "language": "Français",
            "level": "Intermediate (B1)", // Added CEFR level
            "flag": "/flags/fr.svg"
        },
        {
            "language": "Deutsch",
            "level": "Beginner (A1)", // Added CEFR level
            "flag": "/flags/de.svg"
        },
        {
            "language": "中文",
            "level": "Beginner (HSK1)", // Added level indicator
            "flag": "/flags/cn.svg"
        }
    ]
},
"education": [
    {
        "id": "hackaboss",
        "institution": "HACK A BOSS",
        "logo": "/logo-placeholder.png", // Use specific if available
        "degree": "Bootcamp de Data Science & AI",
        "date": "2023/09 - 2024/02", // Changed duration to date
        "status": "Completed",
        "location": "Remote", // Added location
        "summary": "Intensive bootcamp focused on practical Data Science and AI skills, providing a strong foundation for subsequent data-focused roles.", // Adjusted summary
        "description": "Covered the full data science lifecycle from data acquisition and processing to machine learning modeling and deployment basics.",
        "skillsLearned": [
            "Python (Data Science Stack)",
            "Mathematics & Statistics Fundamentals",
            "Data Processing (Numpy, Pandas)",
            "Data Visualization (Matplotlib, Seaborn, Plotly, Folium, Streamlit)",
            "Web Scraping (Selenium, BeautifulSoup)",
            "API Development (FastAPI)",
            "Databases (MySQL)",
            "Machine Learning (SKLearn, Supervised/Unsupervised, NLP Basics)",
            "Deep Learning (Keras Basics, OpenCV Basics)",
            "Big Data (PySpark Basics, MLLib)",
            "Regex"
        ]
    },
    {
        "id": "uniex",
        "institution": "Universidad de Extremadura",
        "logo": "/logo-placeholder.png", // Use specific if available
        "degree": "Grado en Ingeniería de Software",
        "date": "2020 - 2023", // Changed duration to date
        "status": "Discontinued", // Changed status phrasing
        "location": "Mérida, Spain", // Added location
        "summary": "Completed ~3 years of coursework in Software Engineering before discontinuing.", // Added summary
        "notes": "Decided to pursue a more practical, passion-driven path outside the traditional academic environment which felt misaligned with a deep intellectual curiosity and focus on cutting-edge practices."
    }
],
    "footer": {
    "cta": "Ready to win — or just exploring?", // Slightly adjusted CTA
        "copyright": `© ${new Date().getFullYear()} Javier López Cacenave. All rights reserved.` // Dynamic year
}
};

// --- END OF FILE src/data.js ---
