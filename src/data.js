// --- START OF FILE src/data.js ---

export const portfolioData = {
    "personalInfo": {
        "name": "Javier López Cacenave",
        "handle": "ElJaviLuki",
        "subtitle": "Full-Stack Developer",
        "longPortraitUrl": "/long-portrait.png",
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
                "Visionary",
                "Analytical",
                "Resourceful",
                "Curious",
                "Full-Stack",
                "Results-driven"
            ],
            "hook": "I work with people who want to win. Is that <b>you</b>?",
            "detailsLink": "/about-me"
        },
        "long": {
            "headline": "Vision + Pragmatism to craft real-world, tailor-made solutions",
            "intro": "Driven by innate curiosity and a hands-on approach, I transform complex needs into simple yet effective full-stack software solutions that deliver tangible results.",
            "storytelling": [
                {
                    "type": "paragraph",
                    "content": "Ever since I was young, I've been fascinated by technology and the 'how' of things. But my interest doesn't just stop at understanding; I constantly ask, 'How could this be *better*?'. This duality shapes my work: I possess an intuitive ability—reminiscent of my father's own intuition—that allows me to perceive underlying needs and envision creative solutions, almost like a sixth sense for potential."
                },
                {
                    "type": "media",
                    "src": "/placeholder-media-1.jpg",
                    "alt": "Intuition or potential visualized"
                },
                {
                    "type": "paragraph",
                    "content": "However, I understand that even the most brilliant ideas are worthless if they aren't practical and communicable—a crucial lesson inherited from my mother's hard pragmatism. That's why I always anchor that vision in practicality: seeking tangible outcomes, defining clear steps, and building solutions people can actually use, right here, right now. This knack for balancing forward-thinking vision with immediate, real-world utility is central to how I operate."
                },
                {
                    "type": "media",
                    "src": "/placeholder-media-2.mp4",
                    "alt": "Pragmatism or practical application visualized"
                },
                {
                    "type": "paragraph",
                    "content": "My goal is to merge these two facets: envision and pragmatism."
                } //... add as many as needed
            ],
            "caseStudy": {
                "title": "A Case in Point:",
                "content": [
                    {
                        "type": "paragraph",
                        "content": "A prime example is the custom ERP I developed for my aunt's dental laboratory. While she's exceptionally skilled in her craft, producing top-tier prosthetic work, administrative management was her Achilles' heel – a constant source of frustration with chaotic files and invoices consuming valuable time. My intuition told me standard software, with its complex features and steps, would only overwhelm her. So, applying pragmatism, I didn't adapt an off-the-shelf tool. Instead, I designed a solution from the ground up, focusing obsessively on an ultra-low cognitive load UX. This meant a hyper-simplified, almost guided workflow and a minimalist, distraction-free interface. The objective wasn't merely to organize, but to eliminate the friction and stress associated with management entirely, freeing her energy for her creative work."
                    },
                    {
                        "type": "media",
                        "src": "/placeholder-media-3.jpg",
                        "alt": "Dental lab ERP project visualization"
                    } //... add as many as needed
                ]
            },
            "approach": {
                "title": "My Approach: From Need to Solution",
                "steps": [
                    {
                        "id": "01",
                        "title": "360° Diagnosis",
                        "description": "Deep dive into the core challenge, connecting human needs and business goals with technical feasibility to define the fundamental 'what' and 'why'."
                    },
                    {
                        "id": "02",
                        "title": "Vision & Design",
                        "description": "Merge creative vision with pragmatic design: architect the solution and define the optimal user experience, charting a clear path to the desired outcome."
                    },
                    {
                        "id": "03",
                        "title": "Real-World Impact",
                        "description": "Bring the solution to life: build functional, robust software that solves the identified challenge, delivering measurable value and enhancing the experience for everyone involved."
                    }
                ]
            }
        }
    },
    "testimonials": [
        {
            "id": "testimonial-santiago",
            "quote": "Working with Javier was a before and after for our agency. From day one, he understood our needs and completely transformed our TikTok LIVE recruitment system, automating manual processes and significantly improving our efficiency. In just a few months, we achieved a 20-30% increase in monthly revenue thanks to faster and more accurate talent acquisition.",
            "authorName": "Santiago",
            "authorTitle": "Royal TikTok",
            "profilePic": "/santi-pic.png",
            "associatedProjectId": "royal-tiktok",
            "authorLinks": {
                "web": "https://agenciaprincipito.com/",
                "tiktok": "https://www.tiktok.com/@agencia.principito"
            }
        },
        {
            "id": "testimonial-elena",
            "quote": "I'm super organized since they set up this program for me, it's super easy and super convenient, I have everything I need. And on top of that, they told me that anything I come up with, they'll add it to the program. I'm super happy, I recommend it 100%.",
            "authorName": "Elena",
            "authorTitle": "Ortoprodent (Dental Lab)",
            "profilePic": "/elena-pic.png",
            "associatedProjectId": "ortoprodent-erp",
            "authorLinks": {
                "linkedin": "https://www.linkedin.com/in/ecacenave"
            }
        }
    ],
    "experience": {
        "freelanceConsulting": [
            {
                "id": "royal-tiktok",
                "name": "Royal TikTok",
                "web": null, // Puede ser null si no hay web
                "logo": "/tiktok.png",
                "client": "Agencia Principito",
                "role": "Data Architect & Automation Lead",
                "date": "Since 2024",
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
                    "Docker"
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
                        "src": "/placeholder-experience-royal-tiktok-1.jpg",
                        "alt": "Visual representation of the Royal TikTok data pipeline or results"
                    } //... add as many as needed
                ]
            },
            {
                "id": "ortoprodent-erp",
                "name": "Ortoprodent ERP",
                "web": null, // Puede ser null si no hay web
                "logo": "/ortoprodent.png",
                "client": "Ortoprodent (Dental Lab)",
                "role": "Software Developer",
                "date": "Since 2025",
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
                    "Swing (UI)",
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
                        "src": "/placeholder-experience-ortoprodent-1.png",
                        "alt": "Screenshot or mockup of the Ortoprodent ERP interface"
                    } //... add as many as needed
                ]
            }
        ],
        "corporate": [
            {
                "id": "teldat",
                "client": "Teldat",
                "clientLogo": "/teldat.png",
                "web": "https://www.teldat.com/", // Puede ser null si no hay web
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
                "client": "Drive Me Group",
                "clientLogo": "/drive-me-group.jpeg",
                "web": "https://www.drivemegroup.com/", // Puede ser null si no hay web
                "role": "Data Engineer",
                "date": "2024/03 - 2024/06",
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
                        "src": "/placeholder-experience-driveme-1.png",
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
                "title": "Grindr Plus",
                "web": "https://github.com/ElJaviLuki/GrindrPlus", // Puede ser null si no hay web
                "logo": "/grindr-plus.png",
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
                    "Frida",
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
                        "src": "/placeholder-project-grindr-1.png",
                        "alt": "Conceptual image related to Grindr Plus modding/RE"
                    } //... add as many as needed
                ]
            },
            {
                "id": "csos-beacon",
                "title": "Cobalt Strike Open Source Beacon",
                "web": "https://github.com/ElJaviLuki/CobaltStrike_OpenBeacon",
                "logo": "/cobalt-strike.jpeg",
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
                    "Windows Sockets",
                    "HTTP Protocol",
                    "TCP/IP",
                    "SMB",
                    "Named Pipes",
                    "Powershell",
                    "Reverse Engineering",
                    "Cybersecurity",
                    "Systems Programming"
                ],
                "pagePath": "/projects/csos-beacon",
                "media": [
                    {
                        "type": "image",
                        "src": "/placeholder-project-csos-beacon-1.png",
                        "alt": "Diagram or code snippet related to the CSOS Beacon project"
                    } //... add as many as needed
                ]
            },
            {
                "id": "idealistillo",
                "title": "Idealistillo",
                "web": "https://github.com/ElJaviLuki/idealistillo",
                "logo": "/idealistillo.png",
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
            "web": "https://ipo2019.sfi.it/",
            "recognitionLogo": "/ipo-2019.png",
            "organizations": [
                {
                    "name": "FISP (International Federation of Philosophical Societies)",
                    "logo": "/fisp.avif"
                },
                {
                    "name": "UNESCO",
                    "logo": "/unesco.png"
                }
            ],
            "date": "2019/05",
            "level": "Spanish Representative & Semifinalist",
            "location": "Rome, Italy",
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
                    "label": "Todo en la vida es filosofía (Hoy)",
                    "url": "https://lazarza.hoy.es/vida-filosofia-20190411215651-nt.html"
                },
                {
                    "label": "Cadena SER Interview",
                    "url": "https://cadenaser.com/programa/2019/04/30/la_ventana/1556639036_997871.html"
                },
                {
                    "label": "Radio Alange Interview (Spotify)",
                    "url": "https://creators.spotify.com/pod/profile/Radio-Alange-Podcast/embed/episodes/ENTREVISTA-A-FCO--JAVIER-LPEZ-CACENAVE--DELEGACIN-ESPAOLA-OLIMPIADA-INTERNACIONAL-FILOSOFA-2019-e46629"
                },
                {
                    "label": "Olimpiadas de Filosofía General Info",
                    "url": "https://olimpiadafilosofia.jimdofree.com/"
                }
            ],
            "pagePath": "/recognitions/ipo-2019",
            "media": [
                {
                    "type": "image",
                    "src": "/placeholder-recognition-ipo-1.jpg",
                    "alt": "Photo from the IPO 2019 event or related materials"
                } //... add as many as needed
            ]
        },
        {
            "id": "oif-2019",
            "title": "Iberoamerican Philosophy Olympiad",
            "web": "https://olimpiadafilosofia.jimdofree.com/",
            "recognitionLogo": "/oif-2019.png",
            "organizations": [
                {
                    "name": "Red Española de Filosofía",
                    "logo": "/ref.png"
                }
            ],
            "date": "2019/10",
            "level": "Bronze Medal",
            "location": "Spain (Online)",
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
                    "url": "https://filosofiaextremadura.es/medalla-de-bronce-para-francisco-javier-lopez-cacenave-alumno-del-ies-tierrablanca/"
                }
            ],
            "pagePath": "/recognitions/oif-2019",
            "media": []
        },
        {
            "id": "ncl-2021",
            "title": "III National Cyberleague",
            "web": "https://www.nationalcyberleague.es/",
            "recognitionLogo": "/ncl-2021.png",
            "organizations": [
                {
                    "name": "Guardia Civil (Spain)",
                    "logo": "/guardia-civil.png"
                }
            ],
            "date": "2021/10",
            "level": "Technical Semifinalist",
            "location": "Spain (Online)",
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
                    "url": "https://www.nationalcyberleague.es/wp-content/uploads/2021/11/clasificacion_tecnico_03-11-2021.pdf"
                }
            ],
            "pagePath": "/recognitions/ncl-2021",
            "media": [
                {
                    "type": "image",
                    "src": "/placeholder-recognition-ncl-1.jpg",
                    "alt": "Image related to the National Cyberleague event or team"
                } //... add as many as needed
            ]
        }
    ],
    "languages": [
        {
            "language": "Spanish",
            "level": "Native",
            "flag": "/flags/es.svg"
        },
        {
            "language": "English",
            "level": "Advanced (C1/C2)",
            "flag": "/flags/gb.svg",
        },
        {
            "language": "Catalan",
            "level": "Native-like",
            "flag": "/flags/ct.svg"
        },
        {
            "language": "French",
            "level": "Intermediate (B1)",
            "flag": "/flags/fr.svg"
        },
        {
            "language": "German",
            "level": "Beginner (A1)",
            "flag": "/flags/de.svg"
        },
        {
            "language": "Chinese (Mandarin)",
            "level": "Beginner (HSK1)",
            "flag": "/flags/cn.svg"
        }
    ],
    "education": [
        {
            "id": "hackaboss",
            "institution": "HACK A BOSS",
            "web": "https://www.hackaboss.com/",
            "logo": "/hackaboss.png",
            "degree": "Data Science & AI Bootcamp",
            "date": "2023/09 - 2024/02",
            "status": "Completed",
            "location": "Remote",
            "summary": "Intensive bootcamp focused on practical Data Science and AI skills, providing a strong foundation for subsequent data-focused roles.",
            "description": "Covered the full data science lifecycle from data acquisition and processing to machine learning modeling and deployment basics.",
            "skillsLearned": [
                "Python for Data Science",
                "Statistics",
                {
                    "Data Processing": [
                        "Pandas",
                        "NumPy",
                    ]
                },
                {
                    "Data Visualization": [
                        "Matplotlib",
                        "Seaborn",
                        "Plotly",
                        "Folium",
                        "Streamlit"
                    ]
                },
                {
                    "Web Scraping": [
                        "Playwright",
                        "BeautifulSoup",
                        "Selenium"
                    ]
                },
                "FastAPI",
                "MySQL",
                {
                    "ML": [
                        "SKLearn",
                        "Supervised Learning",
                        "Unsupervised Learning",
                        "NLP Basics"
                    ]
                },
                {
                    "Deep Learning": [
                        "Keras Basics",
                        "OpenCV Basics"
                    ]
                },
                {
                    "Big Data": [
                        "PySpark Basics",
                        "MLLib"
                    ]
                },
                "Regex"
            ]
        },
        {
            "id": "unex",
            "institution": "Universidad de Extremadura",
            "web": "https://www.unex.es/",
            "logo": "/unex.png",
            "degree": "Software Engineering Degree Program",
            "date": "2020 - 2023",
            "status": "Discontinued",
            "location": "Cáceres, Spain",
            "summary": "Completed ~3 years of coursework in Software Engineering before discontinuing.",
            "notes": "Decided to pursue a more practical, passion-driven path outside the traditional academic environment which felt misaligned with a deep intellectual curiosity and focus on cutting-edge practices."
        }
    ],
    "footer": {
        "cta": "Ready to win — or just exploring?",
        "copyright": `© ${new Date().getFullYear()} Javier López Cacenave. All rights reserved.`
    }
};

// --- END OF FILE src/data.js ---