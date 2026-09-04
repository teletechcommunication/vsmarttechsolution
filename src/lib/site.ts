export const COMPANY = "VSMART TECH SOLUTIONS LLC";

export const ADDRESS_LINES = [
  "VSMART TECH SOLUTIONS LLC",
  "75 E 3rd St, Ste 7",
  "Sheridan, WY 82801",
  "United States",
];

export const SERVICE_STATEMENT =
  "Registered in Wyoming, United States. Working with businesses locally and internationally.";

export const COMPANY_DESCRIPTION =
  "VSMART TECH SOLUTIONS LLC builds custom software, SaaS products, AI-powered solutions and workflow automation for businesses that need technology to do real work.";

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    short: "Software shaped around how your business actually operates.",
    intro:
      "We design and build software around your existing processes instead of forcing your business to fit a generic tool. Every system is built for the way your team works today and the way it needs to work as you grow.",
    points: [
      "Internal business systems and admin tools",
      "Process-specific applications and workflows",
      "Role-based access and permissions",
      "Reporting and operational visibility",
      "Built to extend as requirements change",
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    short: "Multi-tenant products built to be launched, sold and maintained.",
    intro:
      "From first concept to a working product, we build software-as-a-service platforms with the architecture, billing structure and user management required to run a real product business.",
    points: [
      "Product architecture and multi-tenancy",
      "Subscription and account management",
      "Onboarding and user experience flows",
      "Admin and analytics layers",
      "Scalable foundations for future features",
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    short: "Practical AI applied to specific business problems.",
    intro:
      "We introduce AI where it produces a measurable result — reducing manual reading, sorting, drafting and decision support work — rather than adding technology for its own sake.",
    points: [
      "Document understanding and extraction",
      "AI assistants for internal teams",
      "Content and response generation",
      "Classification, tagging and routing",
      "AI features inside existing products",
    ],
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    short: "Remove repetitive work from daily operations.",
    intro:
      "Manual steps slow teams down and introduce errors. We map the work your team repeats every day and replace it with reliable automated processes.",
    points: [
      "Automated approvals and handoffs",
      "Data movement between tools",
      "Scheduled tasks and notifications",
      "Document and record generation",
      "Exception handling and audit trails",
    ],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    short: "Fast, responsive, secure applications for the browser.",
    intro:
      "We build web applications that perform well on every device, stay maintainable over time and give your customers and teams a clear, modern experience.",
    points: [
      "Customer portals and self-service areas",
      "Dashboards and data-heavy interfaces",
      "Responsive, accessible front ends",
      "Secure authentication and roles",
      "Performance-focused implementation",
    ],
  },
  {
    slug: "api-system-integrations",
    title: "API & System Integrations",
    short: "Connect disconnected systems into one flow of information.",
    intro:
      "When tools do not talk to each other, teams re-enter the same data repeatedly. We connect platforms, databases and third-party services so information moves automatically.",
    points: [
      "Third-party API integrations",
      "Custom API design and development",
      "Data synchronisation between systems",
      "Legacy system connectivity",
      "Monitoring and error reporting",
    ],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting",
    short: "Clear technical direction before anything is built.",
    intro:
      "We help businesses decide what to build, what to buy and what to change — with practical recommendations based on cost, complexity and the outcome you need.",
    points: [
      "Technology and architecture reviews",
      "Build, buy or automate assessments",
      "Requirement definition and scoping",
      "Roadmaps and delivery planning",
      "Risk, security and scalability guidance",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    short: "Ongoing technical care after launch.",
    intro:
      "Software needs attention after release. We provide continued support, monitoring and improvement so systems stay stable, secure and useful.",
    points: [
      "Monitoring and issue resolution",
      "Security and dependency updates",
      "Performance improvements",
      "Feature enhancements over time",
      "Ongoing technical advice",
    ],
  },
];

export const CAPABILITIES = [
  "Custom Software",
  "SaaS",
  "AI Solutions",
  "Automation",
  "Integrations",
  "Consulting",
];

export const OUTCOMES = [
  {
    title: "Reducing repetitive work",
    body: "Identify the manual steps your team repeats daily and replace them with dependable automation.",
  },
  {
    title: "Developing digital products",
    body: "Take an idea from definition to a working, sellable product with a clear technical foundation.",
  },
  {
    title: "Creating customer portals",
    body: "Give customers a secure place to view information, submit requests and manage their account.",
  },
  {
    title: "Improving operations",
    body: "Bring structure, visibility and consistency to processes that currently live in spreadsheets and inboxes.",
  },
  {
    title: "Connecting disconnected systems",
    body: "Integrate the platforms you already use so information moves automatically between them.",
  },
  {
    title: "Modernising processes",
    body: "Replace ageing tools and manual paperwork with software built for current requirements.",
  },
  {
    title: "Introducing AI",
    body: "Apply AI to defined tasks such as document handling, drafting and decision support.",
  },
  {
    title: "Building online platforms",
    body: "Develop marketplaces, booking systems and multi-user platforms designed to grow.",
  },
  {
    title: "Improving reporting",
    body: "Turn scattered data into dashboards and reports that support real decisions.",
  },
  {
    title: "Creating scalable systems",
    body: "Architect software that keeps performing as usage, data and team size increase.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    body: "We learn how your business operates, what is slowing it down and what success needs to look like.",
  },
  {
    step: "02",
    title: "Planning",
    body: "Requirements, scope, architecture and timeline are defined so expectations are clear before work starts.",
  },
  {
    step: "03",
    title: "Design",
    body: "Structure, flows and interfaces are designed around real usage rather than decoration.",
  },
  {
    step: "04",
    title: "Development",
    body: "Software is built in reviewable increments so progress stays visible throughout.",
  },
  {
    step: "05",
    title: "Testing",
    body: "Functionality, performance, security and edge cases are checked before anything goes live.",
  },
  {
    step: "06",
    title: "Launch",
    body: "Deployment is planned and controlled, with handover and documentation for your team.",
  },
  {
    step: "07",
    title: "Support & Improvement",
    body: "After launch we monitor, maintain and continue improving the system as needs evolve.",
  },
];

export const INDUSTRIES = [
  {
    title: "Startups & Technology Companies",
    body: "Product development, MVPs and scalable technical foundations.",
  },
  {
    title: "Professional Services",
    body: "Client management, document workflows and internal operations software.",
  },
  {
    title: "Ecommerce & Digital Businesses",
    body: "Order, catalogue and customer systems connected to existing platforms.",
  },
  {
    title: "Logistics & Operations",
    body: "Tracking, scheduling and operational visibility across moving parts.",
  },
  {
    title: "Real Estate & Property Businesses",
    body: "Listing, enquiry and property management workflows.",
  },
  {
    title: "Education & Training",
    body: "Learning platforms, enrolment processes and administrative automation.",
  },
];

export const SHOWCASE = [
  {
    title: "Customer Management Platform",
    body: "A central system for accounts, communication history, tasks and documents, with role-based access for internal teams.",
    tags: ["Custom Software", "Web App"],
  },
  {
    title: "AI Document Assistant",
    body: "An assistant that reads incoming documents, extracts key fields, summarises content and routes items to the right person.",
    tags: ["AI Solutions", "Automation"],
  },
  {
    title: "Business Operations Dashboard",
    body: "A single view of operational data pulled from multiple systems, with reporting that supports day-to-day decisions.",
    tags: ["Integrations", "Reporting"],
  },
  {
    title: "Automated Customer Onboarding",
    body: "An onboarding flow that collects information, verifies details, creates records and triggers follow-up automatically.",
    tags: ["Automation", "SaaS"],
  },
];

export const VALUES = [
  {
    title: "Practicality",
    body: "We recommend what will work in your business, not what sounds impressive in a proposal.",
  },
  {
    title: "Transparency",
    body: "Clear scope, clear communication and honest updates on progress and constraints.",
  },
  {
    title: "Quality",
    body: "Software written to be maintained, tested and extended — not just delivered.",
  },
  {
    title: "Adaptability",
    body: "Requirements change. We build systems and work in a way that can absorb change.",
  },
  {
    title: "Responsibility",
    body: "We take ownership of what we build, including after it goes live.",
  },
];

export const FAQS = [
  {
    q: "What services does VSMART TECH SOLUTIONS LLC provide?",
    a: "We provide custom software development, SaaS development, AI solutions, workflow automation, web application development, API and system integrations, IT consulting, and ongoing maintenance and support.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. We work with startups that need a technical partner to define, build and launch a product, as well as established businesses improving existing systems.",
  },
  {
    q: "Can you build a completely custom application?",
    a: "Yes. Custom applications are a core part of our work. We build software around your specific processes rather than adapting a generic off-the-shelf product.",
  },
  {
    q: "Can you automate our existing manual processes?",
    a: "Yes. We review the repetitive tasks your team performs, then design and build automation that removes manual steps while keeping the right controls in place.",
  },
  {
    q: "Can you integrate the tools we already use?",
    a: "Yes. We connect platforms, databases and third-party services through APIs so information moves between systems automatically.",
  },
  {
    q: "Do you build AI-powered features?",
    a: "Yes. We apply AI to defined business tasks such as document processing, summarisation, classification and assistant-style support inside your own systems.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. We offer ongoing maintenance and support covering monitoring, updates, issue resolution, performance work and continued improvements.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We are registered in Wyoming, United States, and work with businesses locally and internationally.",
  },
  {
    q: "How is pricing determined?",
    a: "Pricing depends on scope, complexity and the level of ongoing support required. After an initial discussion we provide a clear proposal based on defined requirements.",
  },
  {
    q: "How do we get started?",
    a: "Send a project enquiry through the contact page with a short description of what you need. We review it, ask any clarifying questions and outline a practical way forward.",
  },
];

export const COUNTRIES_HINT = "e.g. United States";
