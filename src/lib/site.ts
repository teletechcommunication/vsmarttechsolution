export const COMPANY = "VSMART TECH SOLUTIONS LLC";

export const ADDRESS_LINES = [
  "VSMART TECH SOLUTIONS LLC",
  "75 E 3rd St, Ste 7",
  "Sheridan, WY 82801",
  "United States",
];

export const SERVICE_STATEMENT =
  "Registered in Wyoming, United States. Providing end-to-end IT development and enterprise telecom solutions locally and internationally.";

export const COMPANY_DESCRIPTION =
  "VSMART TECH SOLUTIONS LLC delivers custom software, SaaS products, AI-powered automation, business internet, VoIP phone systems, and telecom infrastructure for organizations that demand reliable technology.";

export type ServiceCategory = "IT Services" | "Telecom Services";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  short: string;
  intro: string;
  points: string[];
};

export const SERVICES: Service[] = [
  // TELECOM SERVICES
  {
    slug: "telecom-solutions",
    title: "Telecom Solutions",
    category: "Telecom Services",
    short: "Strategic telecommunications consulting, architecture design, and cost optimization.",
    intro:
      "We help enterprises evaluate, procure, and optimize their telecom stack. From negotiating carrier contracts to engineering multi-site voice and data networks, we ensure your communications are fast, resilient, and cost-efficient.",
    points: [
      "Telecom procurement and carrier contract negotiation",
      "Telecom bill audit and expense management",
      "Multi-site voice and data network architecture",
      "Redundancy and failover disaster recovery planning",
      "Regulatory compliance and communications security alignment",
    ],
  },
  {
    slug: "business-internet",
    title: "Business Internet",
    category: "Telecom Services",
    short: "Dedicated fiber optic access, high-speed connections, and automated failover.",
    intro:
      "Uninterrupted internet is essential for modern business. We provide dedicated internet access (DIA), high-speed fiber optics, fixed wireless, and seamless secondary line failover engineered for maximum uptime.",
    points: [
      "Dedicated Internet Access (DIA) with SLA guarantees",
      "Enterprise high-speed fiber optic deployment",
      "Secondary link failover & SD-WAN traffic management",
      "Bandwidth monitoring and proactive outage mitigation",
      "Custom static IP block configuration and DNS management",
    ],
  },
  {
    slug: "voip-business-phone-systems",
    title: "VoIP / Business Phone Systems",
    category: "Telecom Services",
    short: "Modern cloud PBX, SIP trunking, and unified voice & video calling.",
    intro:
      "Upgrade from legacy landlines to flexible cloud business phone systems. Our VoIP solutions provide HD voice, video conferencing, softphone apps for mobile & desktop, automated call routing, and CRM integration.",
    points: [
      "Cloud PBX and hosted business phone systems",
      "SIP trunking for existing IP-PBX infrastructure",
      "Interactive Voice Response (IVR) & auto-attendant menus",
      "Call queuing, recording, and analytics dashboards",
      "Mobile and desktop softphone app integration",
    ],
  },
  {
    slug: "network-connectivity",
    title: "Network & Connectivity",
    category: "Telecom Services",
    short: "Enterprise Wi-Fi 6, SD-WAN, LAN/WAN architecture, and secure VPNs.",
    intro:
      "Connect your offices, remote employees, and cloud servers with secure high-performance networking. We design and maintain local networks (LAN), wide-area networks (WAN), SD-WAN overlays, and site-to-site VPNs.",
    points: [
      "Enterprise Wi-Fi 6/6E layout and heatmap design",
      "SD-WAN deployment for multi-office traffic routing",
      "Secure site-to-site VPN & Zero Trust Remote Access",
      "Managed router, switch, and firewall configuration",
      "Network performance optimization & QoS prioritization",
    ],
  },
  {
    slug: "telecom-infrastructure",
    title: "Telecom Infrastructure",
    category: "Telecom Services",
    short: "Structured fiber cabling, server rack design, and telecommunication closet setup.",
    intro:
      "Physical infrastructure is the backbone of digital communications. We design, install, and certify Cat6A/Cat7 copper and fiber optic cabling, server racks, patch panels, and telecommunication rooms.",
    points: [
      "Cat6A / Cat7 ethernet & fiber optic structured cabling",
      "Telecommunications room (MDF/IDF) design & rack organization",
      "Patch panel termination, labeling, and OTDR certification",
      "Uninterruptible Power Supply (UPS) & backup battery setup",
      "Cable cleanup, wire management, and physical infrastructure audit",
    ],
  },
  {
    slug: "communication-solutions",
    title: "Communication Solutions",
    category: "Telecom Services",
    short: "Omnichannel business messaging, SMS API integrations, and contact centers.",
    intro:
      "Empower your teams and reach customers across every channel. We deploy omnichannel SMS/MMS gateways, video conferencing suites, team collaboration hubs, and automated customer service contact centers.",
    points: [
      "Enterprise SMS & WhatsApp API integrations",
      "Unified communications & team collaboration suites",
      "Cloud contact center software for customer support",
      "Omnichannel customer communication platforms",
      "CRM & VoIP contact synchronization",
    ],
  },

  // IT SERVICES
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    category: "IT Services",
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
    category: "IT Services",
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
    category: "IT Services",
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
    category: "IT Services",
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
    category: "IT Services",
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
    category: "IT Services",
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
    category: "IT Services",
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
    category: "IT Services",
    short: "Ongoing technical care after launch.",
    intro:
      "Software and telecommunications need attention after deployment. We provide continued support, monitoring and improvement so systems stay stable, secure and useful.",
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
  "SaaS Platforms",
  "AI Solutions",
  "Workflow Automation",
  "VoIP Phone Systems",
  "Business Internet",
  "Network Connectivity",
  "Telecom Infrastructure",
  "API Integrations",
  "IT & Telecom Consulting",
];

export const OUTCOMES = [
  {
    title: "Deploying Business Internet & VoIP",
    body: "Establish high-speed dedicated internet access and crystal-clear cloud phone systems for modern remote and hybrid teams.",
    category: "Telecom Services",
  },
  {
    title: "Building Enterprise Networks",
    body: "Architect fast, secure LAN/WAN, Wi-Fi 6, and SD-WAN networks connecting multi-site offices seamlessly.",
    category: "Telecom Services",
  },
  {
    title: "Streamlining Telecom Infrastructure",
    body: "Organize structured cabling, server racks, MDF/IDF closets, and fiber optic links built to industry standards.",
    category: "Telecom Services",
  },
  {
    title: "Unified Communication Solutions",
    body: "Connect phone, video, SMS messaging, and contact center platforms into a single cloud ecosystem.",
    category: "Telecom Services",
  },
  {
    title: "Reducing repetitive work",
    body: "Identify manual operational steps and replace them with dependable software automation.",
    category: "IT Services",
  },
  {
    title: "Developing digital products",
    body: "Take an idea from definition to a working, sellable product with a clear technical foundation.",
    category: "IT Services",
  },
  {
    title: "Creating customer portals",
    body: "Give customers a secure place to view information, submit requests and manage their account.",
    category: "IT Services",
  },
  {
    title: "Connecting disconnected systems",
    body: "Integrate platforms, telecom APIs, and databases so information moves automatically between them.",
    category: "IT Services",
  },
  {
    title: "Introducing AI Solutions",
    body: "Apply AI to defined tasks such as document handling, drafting and decision support.",
    category: "IT Services",
  },
  {
    title: "Modernising IT & Telecom",
    body: "Replace ageing software and legacy phone lines with infrastructure built for current requirements.",
    category: "IT Services",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery & Audit",
    body: "We learn how your business operates, assess existing software and telecom infrastructure, and define requirements.",
  },
  {
    step: "02",
    title: "Architecture & Planning",
    body: "Software design, network topology, carrier selection, scope, and timeline are defined clearly before work starts.",
  },
  {
    step: "03",
    title: "Design & Engineering",
    body: "User interfaces, database schemas, and telecom network routes are engineered for real daily usage.",
  },
  {
    step: "04",
    title: "Development & Installation",
    body: "Software code is built and cabling/hardware is installed in reviewable, testable milestones.",
  },
  {
    step: "05",
    title: "Testing & QoS Verification",
    body: "Functionality, call quality, line latency, security, and failover triggers are thoroughly tested.",
  },
  {
    step: "06",
    title: "Launch & Deployment",
    body: "Deployment is executed with zero downtime, paired with complete staff training and documentation.",
  },
  {
    step: "07",
    title: "Support & Managed Care",
    body: "Continuous 24/7 monitoring, security updates, network maintenance, and ongoing enhancements.",
  },
];

export const INDUSTRIES = [
  {
    title: "Enterprise & Corporate Offices",
    body: "Multi-site dedicated fiber, SD-WAN networks, VoIP phone systems, and custom internal business portals.",
  },
  {
    title: "Startups & Technology Companies",
    body: "SaaS product development, cloud phone systems, MVPs, and scalable technical foundations.",
  },
  {
    title: "Healthcare & Professional Services",
    body: "Secure HIPAA-compliant messaging, structured cabling, client portals, and document automation.",
  },
  {
    title: "Logistics, Field Services & Retail",
    body: "Omnichannel customer communication, real-time dispatch systems, Wi-Fi 6 warehouse coverage, and backup internet.",
  },
  {
    title: "Financial & Real Estate Services",
    body: "High-security voice recording, property management software, CRM integrations, and dedicated IP connectivity.",
  },
  {
    title: "Education & Call Centers",
    body: "Cloud contact center suites, mass SMS messaging, high-capacity campus Wi-Fi, and administrative automation.",
  },
];

export const SHOWCASE = [
  {
    title: "Multi-Office Cloud VoIP & Contact Center",
    body: "Migration of 250+ seats to a cloud PBX system with auto-attendants, call analytics, mobile softphones, and CRM voice integration.",
    tags: ["VoIP", "Telecom Solutions"],
  },
  {
    title: "High-Availability Fiber & SD-WAN Network",
    body: "Enterprise multi-site dedicated fiber access with automated SD-WAN link failover, Wi-Fi 6 coverage, and encrypted site-to-site VPNs.",
    tags: ["Business Internet", "Network"],
  },
  {
    title: "Customer Management & Portal Platform",
    body: "A central web app for client accounts, communication history, tasks, and automated billing with granular permission controls.",
    tags: ["Custom Software", "Web App"],
  },
  {
    title: "Omnichannel Business Messaging Hub",
    body: "Unified communication platform integrating SMS gateway APIs, team channels, and automated customer support escalation.",
    tags: ["Communication", "Integrations"],
  },
  {
    title: "AI Document Assistant & Workflow Engine",
    body: "An intelligent assistant that parses incoming documents, extracts key fields, updates database records, and notifies team members.",
    tags: ["AI Solutions", "Automation"],
  },
  {
    title: "Structured Cabling & Datacenter Rack Audit",
    body: "Turnkey Cat6A/Fiber cabling installation, MDF rack cleanup, patch panel certification, and UPS power backup setup.",
    tags: ["Infrastructure", "Telecom"],
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
    body: "Software written and networks built to be maintained, tested and extended — not just delivered.",
  },
  {
    title: "Reliability",
    body: "High-uptime internet, clear voice communications, and resilient software designed for zero downtime.",
  },
  {
    title: "Responsibility",
    body: "We take full ownership of what we build and deploy, including long after launch.",
  },
];

export const FAQS = [
  {
    q: "What IT and Telecom services does VSMART TECH SOLUTIONS LLC provide?",
    a: "We provide comprehensive IT development and Telecommunications solutions. Our services include Custom Software Development, SaaS Development, AI Solutions, Workflow Automation, Web Apps, API Integrations, IT Consulting, Business Internet (Fiber & DIA), VoIP / Cloud Business Phone Systems, Network & Connectivity (SD-WAN & Wi-Fi 6), Telecom Infrastructure & Cabling, and Omnichannel Communication Solutions.",
  },
  {
    q: "Can you handle both software development and telecom infrastructure?",
    a: "Yes! We act as a single, end-to-end technology partner. Whether you need custom web applications, AI automation, high-speed fiber internet, cloud VoIP phone systems, or physical server room cabling, our team delivers seamless integrated solutions.",
  },
  {
    q: "What options do you offer for Business Internet?",
    a: "We provide Dedicated Internet Access (DIA), enterprise fiber optics, high-speed fixed wireless, redundant secondary backup links, and intelligent SD-WAN failover management backed by SLA guarantees.",
  },
  {
    q: "How does your VoIP / Business Phone System work?",
    a: "Our VoIP services replace legacy landlines with cloud PBX systems featuring HD audio, video calling, desktop and mobile softphone apps, interactive auto-attendants (IVR), call recording, analytics, and CRM integration.",
  },
  {
    q: "Do you design physical network cabling and server rack setups?",
    a: "Yes. We design and install structured ethernet (Cat6A/Cat7) and fiber optic cabling, organize MDF/IDF server racks, terminate patch panels, conduct OTDR testing, and install UPS backup power systems.",
  },
  {
    q: "Do you work with startups as well as established enterprises?",
    a: "Yes. We partner with startups launching digital products or setting up initial office infrastructure, as well as established enterprises modernizing legacy software and multi-site telecom networks.",
  },
  {
    q: "Can you automate our existing manual processes and integrate platforms?",
    a: "Yes. We build custom API integrations and automated workflows that sync data between your software, CRM, ERP, and communication tools.",
  },
  {
    q: "Do you build AI-powered features for business?",
    a: "Yes. We implement practical AI solutions for document parsing, intelligent text routing, automated drafting, and AI assistant integrations.",
  },
  {
    q: "Do you provide ongoing support and maintenance after launch?",
    a: "Yes. We offer continuous monitoring, software updates, security patches, network performance tuning, and 24/7 technical support.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We are registered in Wyoming, United States, and work with clients locally and globally across North America, Europe, and beyond.",
  },
  {
    q: "How do we get started?",
    a: "Reach out via our contact form with a summary of your software or telecom needs. We'll schedule a discovery call and provide a clear, practical proposal.",
  },
];

export const COUNTRIES_HINT = "e.g. United States";

