// --- START OF FILE src/data.js ---
// Data structure now primarily uses keys for translatable text.
// The actual text is in public/locales/[lang]/translation.json

export const portfolioData = {
    "personalInfo": {
        "name": "Javier López Cacenave", // Keep name for internal reference/interpolation
        "handle": "ElJaviLuki", // Non-translatable handle
        "subtitleKey": "subtitle", // Key for translation
        "longPortraitUrl": "/portrait.png",
        "socialLinks": [
            {
                "platform": "LinkedIn",
                "url": "https://linkedin.com/in/eljaviluki",
                "labelKey": "linkedInLinkLabel" // Key for translation
            },
            {
                "platform": "GitHub",
                "url": "https://github.com/eljaviluki",
                "labelKey": "githubLinkLabel" // Key for translation
            },
            {
                "platform": "Email",
                "url": "mailto:eljaviluki@gmail.com",
                "labelKey": "emailLinkLabel" // Key for translation
            }
        ]
    },
    "aboutMe": {
        "short": {
            // Adjectives might be translated directly in the component or kept in JSON
            "adjectivesKey": "aboutShort.adjectives", // Key to retrieve array from JSON
            "hookKey": "aboutShort.hook", // Key for translation
            "detailsLink": "/about-me" // Internal link, no translation needed
        },
        "long": {
            "headlineKey": "aboutLong.headline",
            "introKey": "aboutLong.intro",
            "storytelling": [
                {
                    "type": "paragraph",
                    "contentKey": "aboutLong.storyParagraph1"
                },
                {
                    "type": "paragraph",
                    "contentKey": "aboutLong.storyParagraph2"
                },
                {
                    "type": "paragraph",
                    "contentKey": "aboutLong.storyParagraph3"
                }
            ],
            "caseStudy": {
                "titleKey": "aboutLong.caseStudyTitle",
                "content": [
                    {
                        "type": "paragraph",
                        "contentKey": "aboutLong.caseStudyParagraph1"
                    }
                ]
            },
            "approach": {
                "titleKey": "aboutLong.approachTitle",
                "steps": [
                    {
                        "id": "01",
                        "titleKey": "aboutLong.approachStep1Title",
                        "descriptionKey": "aboutLong.approachStep1Desc"
                    },
                    {
                        "id": "02",
                        "titleKey": "aboutLong.approachStep2Title",
                        "descriptionKey": "aboutLong.approachStep2Desc"
                    },
                    {
                        "id": "03",
                        "titleKey": "aboutLong.approachStep3Title",
                        "descriptionKey": "aboutLong.approachStep3Desc"
                    }
                ]
            }
        }
    },
    "testimonials": [
        {
            "id": "testimonial-santiago",
            "quoteKey": "testimonials.santiago.quote",
            "authorNameKey": "testimonials.santiago.authorName",
            "authorTitleKey": "testimonials.santiago.authorTitle",
            "profilePic": "/santi-pic.png",
            "associatedProjectId": "royal-tiktok",
            "authorLinks": {
                "web": { "url": "https://agenciaprincipito.com/", "labelKey": "websiteLinkLabel" },
                "tiktok": { "url": "https://www.tiktok.com/@agencia.principito", "labelKey": "tiktokLinkLabel" }
            }
        },
        {
            "id": "testimonial-elena",
            "quoteKey": "testimonials.elena.quote",
            "authorNameKey": "testimonials.elena.authorName",
            "authorTitleKey": "testimonials.elena.authorTitle",
            "profilePic": "/elena-pic.png",
            "associatedProjectId": "ortoprodent-erp",
            "authorLinks": {
                "linkedin": { "url": "https://www.linkedin.com/in/ecacenave", "labelKey": "linkedInLinkLabel" }
            }
        }
    ],
    "experience": {
        "freelanceConsulting": [
            {
                "id": "royal-tiktok",
                "nameKey": "experience.royalTikTok.name",
                "web": null,
                "logo": "/tiktok.png",
                "clientKey": "experience.royalTikTok.client",
                "roleKey": "experience.royalTikTok.role",
                "dateKey": "experience.royalTikTok.date",
                "locationMode": "Remote", // Keep mode as identifier
                "locationKey": "experience.royalTikTok.location",
                "summaryKey": "experience.royalTikTok.summary",
                "detailsKeys": "experience.royalTikTok.details", // Key to array of detail keys
                "technologies": [ // Technologies usually don't need translation
                    "Python", "Pandas", "FastAPI", "APScheduler", "Playwright",
                    "BeautifulSoup", "Reverse Engineering", "Notion API", "PostgreSQL",
                    "REST APIs", "Docker"
                ],
                "softSkillsKeys": "experience.royalTikTok.softSkills", // Key to array
                "pagePath": "/experience/royal-tiktok",
                "media": [

                ]
            },
            {
                "id": "ortoprodent-erp",
                "nameKey": "experience.ortoprodent.name",
                "web": null,
                "logo": "/ortoprodent.png",
                "clientKey": "experience.ortoprodent.client",
                "roleKey": "experience.ortoprodent.role",
                "dateKey": "experience.ortoprodent.date",
                "locationMode": "Remote",
                "locationKey": "experience.ortoprodent.location",
                "summaryKey": "experience.ortoprodent.summary",
                "detailsKeys": "experience.ortoprodent.details",
                "technologies": [ "Java", "PostgreSQL", "Swing (UI)", "Software Design", "UX Design Principles" ],
                "softSkillsKeys": "experience.ortoprodent.softSkills",
                "pagePath": "/experience/ortoprodent-erp",
                "media": [

                ]
            }
        ],
        "corporate": [
            {
                "id": "teldat",
                "clientKey": "experience.teldat.client",
                "clientLogo": "/teldat.png",
                "web": "https://www.teldat.com/",
                "roleKey": "experience.teldat.role",
                "dateKey": "experience.teldat.date",
                "locationMode": "Hybrid",
                "locationKey": "experience.teldat.location",
                "summaryKey": "experience.teldat.summary",
                "projectContext": {
                    "projectNameKey": "experience.teldat.projectContextName",
                    "purposeKey": "experience.teldat.projectContextPurposeDesc",
                    "architectureKey": "experience.teldat.projectContextArchDesc",
                    "keyModulesKeys": "experience.teldat.projectContextModules" // Key to array
                },
                "detailsKeys": "experience.teldat.details",
                "technologies": [
                    "Python", "Django", "Django Rest Framework (DRF)", "PostgreSQL", "Celery",
                    "Redis", "Apache Druid", "Kafka", "React", "JavaScript", "HTML", "CSS",
                    "SwaggerUI / drf-yasg", "Honeybadger", "Pytest", "Docker", "Gunicorn",
                    "Git", "RESTful APIs", "Frontend Maintenance", "Backend Development"
                ],
                "softSkillsKeys": "experience.teldat.softSkills",
                "pagePath": "/experience/teldat",
                "media": []
            },
            {
                "id": "drive-me-group",
                "clientKey": "experience.driveMeGroup.client",
                "clientLogo": "/drive-me-group.jpeg",
                "web": "https://www.drivemegroup.com/",
                "roleKey": "experience.driveMeGroup.role",
                "dateKey": "experience.driveMeGroup.date",
                "locationMode": "Remote",
                "locationKey": "experience.driveMeGroup.location",
                "summaryKey": "experience.driveMeGroup.summary",
                "detailsKeys": "experience.driveMeGroup.details",
                "technologies": [
                    "Zoho Dataprep", "Zoho Analytics", "Python", "API Integration",
                    "Reverse Engineering", "Web Scraping", "Data Visualization",
                    "Business Logic Implementation", "ETL", "Twilio API"
                ],
                "softSkillsKeys": "experience.driveMeGroup.softSkills",
                "pagePath": "/experience/drive-me-group",
                "media": [

                ]
            }
        ]
    },
    "projects": {
        "personal": [
            {
                "id": "grindr-plus",
                "titleKey": "projects.grindrPlus.title",
                "web": "https://github.com/ElJaviLuki/GrindrPlus",
                "logo": "/grindr-plus.png",
                "summaryKey": "projects.grindrPlus.summary",
                "detailsKeys": "projects.grindrPlus.details",
                "technologies": [
                    "Kotlin", "Java", "Android Internals", "Xposed Framework", "Frida",
                    "Reverse Engineering", "Network Analysis", "Static Analysis",
                    "Dynamic Analysis", "Decompilation"
                ],
                "pagePath": "/projects/grindr-plus",
                "media": [

                ]
            },
            {
                "id": "csos-beacon",
                "titleKey": "projects.csosBeacon.title",
                "web": "https://github.com/ElJaviLuki/CobaltStrike_OpenBeacon",
                "logo": "/cobalt-strike.jpeg",
                "summaryKey": "projects.csosBeacon.summary",
                "detailsKeys": "projects.csosBeacon.details",
                "technologies": [
                    "C", "Win32 API", "Windows Sockets", "HTTP Protocol", "TCP/IP", "SMB",
                    "Named Pipes", "Powershell", "Reverse Engineering", "Cybersecurity",
                    "Systems Programming"
                ],
                "pagePath": "/projects/csos-beacon",
                "media": [

                ]
            },
            {
                "id": "idealistillo",
                "titleKey": "projects.idealistillo.title",
                "web": "https://github.com/ElJaviLuki/idealistillo",
                "logo": "/idealistillo.png",
                "summaryKey": "projects.idealistillo.summary",
                "detailsKeys": "projects.idealistillo.details",
                "technologies": [ "Python", "Requests", "API Integration", "Library Development", "API Design Principles" ],
                "pagePath": "/projects/idealistillo",
                "media": []
            }
        ]
    },
    "recognitions": [
        {
            "id": "ipo-2019",
            "titleKey": "recognitions.ipo.title",
            "web": "https://ipo2019.sfi.it/",
            "recognitionLogo": "/ipo-2019.png",
            "organizations": [
                { "name": "FISP (International Federation of Philosophical Societies)", "logo": "/fisp.avif" },
                { "name": "UNESCO", "logo": "/unesco.png" }
            ],
            "dateKey": "recognitions.ipo.date",
            "levelKey": "recognitions.ipo.level",
            "locationKey": "recognitions.ipo.location",
            "summaryKey": "recognitions.ipo.summary",
            "skillsDemonstratedKeys": "recognitions.ipo.skills",
            "sources": [
                { "labelKey": "recognitions.ipo.sourceLabel1", "url": "https://lazarza.hoy.es/vida-filosofia-20190411215651-nt.html" },
                { "labelKey": "recognitions.ipo.sourceLabel2", "url": "https://cadenaser.com/programa/2019/04/30/la_ventana/1556639036_997871.html" },
                { "labelKey": "recognitions.ipo.sourceLabel3", "url": "https://creators.spotify.com/pod/profile/Radio-Alange-Podcast/embed/episodes/ENTREVISTA-A-FCO--JAVIER-LPEZ-CACENAVE--DELEGACIN-ESPAOLA-OLIMPIADA-INTERNACIONAL-FILOSOFA-2019-e46629" },
                { "labelKey": "recognitions.ipo.sourceLabel4", "url": "https://olimpiadafilosofia.jimdofree.com/" }
            ],
            "pagePath": "/recognitions/ipo-2019",
            "media": []
        },
        {
            "id": "oif-2019",
            "titleKey": "recognitions.oif.title",
            "web": "https://olimpiadafilosofia.jimdofree.com/",
            "recognitionLogo": "/oif-2019.png",
            "organizations": [ { "name": "Red Española de Filosofía", "logo": "/ref.png" } ],
            "dateKey": "recognitions.oif.date",
            "levelKey": "recognitions.oif.level",
            "locationKey": "recognitions.oif.location",
            "summaryKey": "recognitions.oif.summary",
            "skillsDemonstratedKeys": "recognitions.oif.skills",
            "sources": [
                { "labelKey": "recognitions.oif.sourceLabel1", "url": "https://filosofiaextremadura.es/medalla-de-bronce-para-francisco-javier-lopez-cacenave-alumno-del-ies-tierrablanca/" }
            ],
            "pagePath": "/recognitions/oif-2019",
            "media": []
        },
        {
            "id": "ncl-2021",
            "titleKey": "recognitions.ncl.title",
            "web": "https://www.nationalcyberleague.es/",
            "recognitionLogo": "/ncl-2021.png",
            "organizations": [ { "name": "Guardia Civil (Spain)", "logo": "/guardia-civil.png" } ],
            "dateKey": "recognitions.ncl.date",
            "levelKey": "recognitions.ncl.level",
            "locationKey": "recognitions.ncl.location",
            "summaryKey": "recognitions.ncl.summary",
            "skillsDemonstratedKeys": "recognitions.ncl.skills",
            "sources": [
                { "labelKey": "recognitions.ncl.sourceLabel1", "url": "https://www.nationalcyberleague.es/wp-content/uploads/2021/11/clasificacion_tecnico_03-11-2021.pdf" }
            ],
            "pagePath": "/recognitions/ncl-2021",
            "media": [

            ]
        }
    ],
    "languages": [
        { "language": "Spanish", "levelKey": "skills.spanishLevel", "flag": "/flags/es.svg" },
        { "language": "English", "levelKey": "skills.englishLevel", "flag": "/flags/gb.svg" },
        { "language": "Catalan", "levelKey": "skills.catalanLevel", "flag": "/flags/ct.svg" },
        { "language": "French", "levelKey": "skills.frenchLevel", "flag": "/flags/fr.svg" },
        { "language": "German", "levelKey": "skills.germanLevel", "flag": "/flags/de.svg" },
        { "language": "Chinese (Mandarin)", "levelKey": "skills.chineseLevel", "flag": "/flags/cn.svg" }
    ],
    "education": [
        {
            "id": "hackaboss",
            "institutionKey": "education.hackaboss.institution",
            "web": "https://www.hackaboss.com/",
            "logo": "/hackaboss.png",
            "degreeKey": "education.hackaboss.degree",
            "dateKey": "education.hackaboss.date",
            "status": "Completed", // Keep status as identifier
            "locationKey": "education.hackaboss.location",
            "summaryKey": "education.hackaboss.summary",
            "descriptionKey": "education.hackaboss.description",
            "skillsLearned": [ // Skills are often technical terms, less likely to need translation
                "Python for Data Science", "Statistics",
                { "Data Processing": [ "Pandas", "NumPy" ] },
                { "Data Visualization": [ "Matplotlib", "Seaborn", "Plotly", "Folium", "Streamlit" ] },
                { "Web Scraping": [ "Playwright", "BeautifulSoup", "Selenium" ] },
                "FastAPI", "MySQL",
                { "ML": [ "SKLearn", "Supervised Learning", "Unsupervised Learning", "NLP Basics" ] },
                { "Deep Learning": [ "Keras Basics", "OpenCV Basics" ] },
                { "Big Data": [ "PySpark Basics", "MLLib" ] },
                "Regex"
            ]
        },
        {
            "id": "unex",
            "institutionKey": "education.unex.institution",
            "web": "https://www.unex.es/",
            "logo": "/unex.png",
            "degreeKey": "education.unex.degree",
            "dateKey": "education.unex.date",
            "status": "Discontinued", // Keep status as identifier
            "locationKey": "education.unex.location",
            "summaryKey": "education.unex.summary",
            "notesKey": "education.unex.notes"
        }
    ],
    "skills": { // Skills themselves are often technical terms, keep as is unless translation is desired
        "technical": [
            { "area": "Backend & Databases", "skills": [ "Python", "Django", "DRF", "FastAPI", "Java", "PostgreSQL", "MySQL", "Redis", "Celery", "Kafka", "Apache Druid" ] },
            { "area": "Frontend", "skills": [ "React", "JavaScript", "HTML", "CSS", "Swing (UI)" ] },
            { "area": "Data Science & AI", "skills": [ "Pandas", "NumPy", "SKLearn", "Matplotlib", "Seaborn", "Plotly", "Streamlit", "Keras Basics", "OpenCV Basics", "PySpark Basics", "ETL", "Zoho Dataprep", "Zoho Analytics" ] },
            { "area": "DevOps & Tools", "skills": [ "Docker", "Git", "Gunicorn", "APScheduler", "SwaggerUI / drf-yasg", "Honeybadger", "Pytest" ] },
            { "area": "Web Scraping & Automation", "skills": [ "Playwright", "BeautifulSoup", "Selenium", "API Integration", "Reverse Engineering" ] },
            { "area": "Cybersecurity & Low-Level", "skills": [ "C", "Win32 API", "Windows Sockets", "Xposed Framework", "Frida", "Network Analysis", "Static Analysis", "Dynamic Analysis" ] }
        ],
        "soft": [ // Soft skills might need translation, use keys or translate in component
            "Systemic Thinking", "Inter-profile Communication", "Technical Resilience",
            "Problem Solving", "Automation Mindset", "Client Communication",
            "Requirements Gathering", "User Empathy", "Solution Design", "Pragmatism",
            "Teamwork", "Adaptability", "Working with Legacy Code", "System-Level Thinking",
            "Technical Communication", "Data Analysis", "Process Automation", "Business Acumen",
            "Data Storytelling", "Critical Thinking", "Abstract Reasoning", "Argumentation"
        ]
        // languages are handled separately above
    },
    "footer": {
        "ctaKey": "footer.cta",
        "copyrightKey": "footer.copyright"
    }
};

// --- END OF FILE src/data.js ---
