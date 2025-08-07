const person = {
  firstName: "Yudanta Adhipramana",
  lastName: "B. Eng, M. MT.",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Sales Data Analyst",
  avatar: "/images/avatar.jpg",
  email: "yudantaa@gmail.com",
  location: "Asia/Jakarta",
  languages: ["English", "Bahasa", "Melayu"],
};

const social = [
  {
    name: "Whatsapp",
    icon: "whatsapp",
    link: "https://wa.me/6285157757685?text=Hello%20Yudanta,%0A%0AI%20came%20across%20your%20profile%20and%20I%27m%20impressed%20with%20your%20skillset.%20It%20might%20be%20fit%20with%20what%20i%27m%20looking%20for.%0A%0AI%20would%20like%20to%20discuss%20a%20potential%20collaboration%20or%20partnership%20opportunity.%20Please%20let%20me%20know%20if%20you%20are%20available%20for%20a%20brief%20chat.%0A%0AThank%20you.",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/yudantaadhipramana",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Where Sales Meet Insights.",
  featured: {},
  subline:
    "I'm Yudanta, a Sales Data Analyst. By day, I analyze sales data to help the team hit their targets. By night, I build dashboards and predictive models to sharpen my data instincts.",
};


const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Sales Data Analyst & Business Intelligence Specialist with 3+ years’ experience in FMCG sales data analytics. Expert in Power BI dashboard development, sales performance monitoring, KPI Coverage Area Sales Office and automated reporting systems that accelerate strategic decision-making with 50+ user and 750+ Salesman.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "PT. Dwikarya Indonesia Mandiri",
        timeframe: "Aug 2023 - Present",
        role: "Lead Data Analyst",
        achievements: [
          <>Designed and maintained Power BI dashboards for six business units, enabling real-time monitoring of sales performance and improving decision-making efficiency by 30%.</>,
          <>Implemented Row Level Security (RLS) to ensure personalized and secure dashboard access for different user levels.</>,
          <>Created dynamic reports using DAX and Power Query, including area mapping and cost ratio analysis.</>,
          <>Developed a centralized database, enhancing data accessibility and reducing reporting errors by 25%.</>,
          <>Built analytics tools that increased sales target achievement by 15%.</>,
          <>Integrated SFA systems like MMI and Mileapps for accurate sales and distribution tracking.</>,
          <>Produced dashboards for top management, improving operational efficiency by 20%.</>,
          <>Created data lake into a centralized data warehouse, serving 100+ users and 750+ salesman records.</>,
        ],
        images: [],
      },
      {
        company: "PT. Solomon Mining Indonesia",
        timeframe: "Dec 2018 - Sep 2023",
        role: "Co-Founder",
        achievements: [
          <>Designed and monitored mining operations using Linux HiveOS for efficiency and optimization.</>,
          <>Reduced operational costs through data-driven hardware and power configuration.</>,
          <>Detected anomalies and increased yield through performance metric analysis.</>,
        ],
        images: [],
      },
      {
        company: "PT. Bukitapit Bumi Persada",
        timeframe: "Sept 2020 - Dec 2020",
        role: "Data Analytics Specialist",
        achievements: [
          <>Optimized maintenance schedules and reduced downtime by 25% using service activity data.</>,
          <>Automated reporting systems that reduced report generation time by 35%.</>,
          <>Developed dashboards for operational and resource allocation insights.</>,
        ],
        images: [],
      },
      {
        company: "PT. Depriwangga OM",
        timeframe: "Oct 2018 - Dec 2018",
        role: "Data Consultant Analytics",
        achievements: [
          <>Analyzed Non-Destructive Testing (NDT) data for oil & gas equipment.</>,
          <>Improved failure forecasting by 28% using predictive models.</>,
          <>Reduced inconsistencies by 35% with visual dashboards.</>,
        ],
        images: [],
      },
      {
        company: "PT. Pertamina EP Asset 3",
        timeframe: "Sept 2018 - Oct 2018",
        role: "Data Reservoir Analytics",
        achievements: [
          <>Forecasted reservoir performance and increased production efficiency by 20%.</>,
          <>Reduced manual processing time by 40% using Python and SQL automation.</>,
          <>Ensured data integrity with Petrel, PIPES, and Eclipse tools.</>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Data Visualization & BI Tools",
        description: <>Power BI (Expert: DAX, Power Query, RLS, Data Modeling), Tableau, Excel (Macro & VBA)</>,
        images: [],
      },
      {
        title: "Programming & Databases",
        description: <>SQL (PostgreSQL, MySQL), Python (Pandas, NumPy, Matplotlib)</>,
        images: [],
      },
      {
        title: "Data Engineering",
        description: <>ETL Processes, Data Warehousing, Data Integration</>,
        images: [],
      },
      {
        title: "Analytics & Machine Learning",
        description: <>Predictive Analytics, Statistical Modeling, Time-Series Analysis</>,
        images: [],
      },
      {
        title: "Sales Force Automation",
        description: <>SharePoint, Metro Mobile Indonesia (MMI), Mileapps (SFA/DMS)</>,
        images: [],
      },
      {
        title: "Advance Survey Form as Data Collection",
        description: <>Kobotoolbox/KoboCollect</>,
        images: [],
      },
    ],
  },
  soft: {
    display: true,
    title: "Soft Skills",
    description: [
      "Analytical Thinking & Problem Solving",
      "Strong Communication & Presentation",
      "Attention to Detail & Accuracy",
      "Cross-functional Collaboration",
      "Project Management & Prioritization",
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

export { person, social, home, about, work };
