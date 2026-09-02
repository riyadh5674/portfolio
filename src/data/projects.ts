export type ProjectStatus = "ongoing" | "completed" | "research";

export type ProjectCategory = "research" | "engineering" | "robotics";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  status: ProjectStatus;
  summary: string;
  technologies: string[];
  highlights: string[];
  description: string;
  links: {
    github?: string;
    live?: string;
  };
  featured: boolean;
  order: number;
}

export const projects: Project[] = [
  {
    id: "bangladesh-flood-predictor",
    title: "Bangladesh Flood Predictor",
    subtitle: "Physics-guided machine learning for flood-risk prediction",
    category: "research",
    status: "research",
    summary:
      "Investigating how physically meaningful features and constraints can improve flood prediction models for Bangladesh, balancing predictive performance with domain consistency.",
    technologies: [
      "Python",
      "LightGBM",
      "CatBoost",
      "GeoPandas",
      "scikit-learn",
      "Pandas",
    ],
    highlights: [
      "Physics-guided feature engineering with environmental, geographic, and seasonal variables",
      "Monotonic constraints encoding physical relationships",
      "Comparison of unconstrained vs. physics-guided models",
      "Geospatial feature engineering with GeoPandas",
      "Ongoing research with publication intent",
    ],
    description:
      "An ongoing research project investigating flood prediction in Bangladesh using machine learning with physically meaningful features and constraints. The work explores how domain knowledge can be incorporated into ML models through engineered features and monotonic constraints, comparing baseline performance with physics-guided approaches.",
    links: {
      github: "https://github.com/riyadh5674/Bangladesh-Flood-Predictor",
    },
    featured: true,
    order: 1,
  },
  {
    id: "teaquest",
    title: "TeaQuest",
    subtitle: "Commerce meets interaction design in an original fantasy world",
    category: "engineering",
    status: "ongoing",
    summary:
      "A full-featured tea e-commerce platform wrapped in a pixel-art fantasy theme, combining shopping with gamification, mini-games, social systems, and real-time communication.",
    technologies: [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript",
      "Supabase",
      "PostgreSQL",
      "Web Audio API",
    ],
    highlights: [
      "Complete e-commerce: catalog, cart, checkout, order history",
      "Gamification: XP, levels, quests, achievements, Tea Codex",
      "Three original mini-games with synthesized chiptune audio",
      "Real-time social hub with live chat, friends, and private messaging",
      "Admin dashboard with product and order management",
      "Row Level Security and authenticated access",
    ],
    description:
      "An experiment in combining commerce with interaction design, gamification, storytelling, and social systems. TeaQuest challenges the convention that e-commerce must be visually generic by framing the entire experience as a cozy fantasy world.",
    links: {
      github: "https://github.com/riyadh5674/TeaQuest",
      live: "https://riyadh5674.github.io/TeaQuest/",
    },
    featured: true,
    order: 2,
  },
  {
    id: "line-follower-robot",
    title: "PDI-Based Line Follower",
    subtitle: "Feedback control for autonomous navigation",
    category: "robotics",
    status: "completed",
    summary:
      "A team-built line-tracking robot applying PDI-based feedback control for autonomous navigation on a fixed course — bridging control theory with physical hardware.",
    technologies: ["Arduino", "C", "Sensor Integration", "Control Systems"],
    highlights: [
      "PDI (Proportional–Derivative–Integral) feedback control",
      "Arduino Nano based control implementation",
      "Sensor-based line detection and motor actuation",
      "Vero board assembly and hardware integration",
      "Hands-on application of control theory in a physical system",
    ],
    description:
      "A team robotics project that built and programmed a line-following robot using PDI (Proportional–Derivative–Integral) feedback control. The robot detects a black line on a white surface and adjusts motor speeds in real time to track it — demonstrating sensor integration, control algorithms, and hardware assembly in a physical system.",
    links: {
      github: "https://github.com/riyadh5674",
    },
    featured: true,
    order: 3,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
