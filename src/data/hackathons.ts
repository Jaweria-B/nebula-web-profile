export type HackathonEntry = {
  hackathonLink: string;
  hackathonName: string;
  project?: string;
  projectTitle?: string;
  certificate?: string;
  date?: string;
  team?: number | string;
  description?: string;
  keywords?: string[];
  placement?: string;   // optional: for standout results
  status?: string;      // "participant" for non-placed entries
  tags?: string[];      // always includes placement or "participant" plus keywords
  notes?: string;
};

export const hackathonsParticipated: HackathonEntry[] = [
  {
    hackathonLink: "https://csgirlies.devpost.com/",
    hackathonName: "CS Girlies Hackathon — AI vs H.I.",
    project: "https://devpost.com/software/overthinking-assistant",
    projectTitle: "Overthinking Assistant",
    certificate: "",
    date: "July 2025",
    team: undefined,
    description: "AI assistant that helps overthinkers turn anxious thoughts into productive tasks and creative prompts.",
    keywords: ["AI Assistant", "NLP", "React", "Frontend"],
    status: "participant",
    tags: ["participant", "AI Assistant", "NLP", "React"],
  },
  {
    hackathonLink: "https://lablab.ai/event/unhallucinate-challenge-24-hours-fight",
    hackathonName: "Unhallucinate Challenge — 24 Hours Fight",
    project: "https://lablab.ai/event/unhallucinate-challenge-24-hours-fight/kitchen-creators/kitchen-creators",
    projectTitle: "Kitchen Creators",
    certificate: "https://lablab.ai/u/@Jaweria/clu2i4k8l0023c3ce3a7dcppz",
    date: "February 2024",
    team: 6,
    description: "Generative-recipe assistant that produces credible recipes from limited ingredients and filters hallucinations.",
    keywords: ["Generative AI", "NLP", "Debiasing", "Python"],
    status: "participant",
    tags: ["participant", "Generative AI", "NLP", "Debiasing"],
  },
  {
    hackathonLink: "https://lablab.ai/event/assistants-api-llamaindex-mongodb-battle",
    hackathonName: "Assistants API — LlamaIndex + MongoDB Battle",
    project: "https://lablab.ai/event/assistants-api-llamaindex-mongodb-battle/muslimonmission/seerah-bot-by-muslims-on-mission",
    projectTitle: "Seerah Bot (Muslims on Mission)",
    certificate: "https://lablab.ai/u/@Jaweria/clwrzw6vm0007gtf5cbfuzxyj",
    date: "May 2024",
    team: 4,
    description: "QA conversational assistant that answers Seerah-related queries using indexed source retrieval.",
    keywords: ["LlamaIndex", "MongoDB", "RAG", "Conversational AI", "Python"],
    status: "participant",
    tags: ["participant", "LlamaIndex", "MongoDB", "RAG", "Conversational AI"],
  },
  {
    hackathonLink: "https://googleai.devpost.com/",
    hackathonName: "Google AI / Devpost Hackathon",
    project: "https://devpost.com/software/inside-out-agentic-workfoce",
    projectTitle: "Inside-Out: Agentic Workforce",
    certificate: "",
    date: "May 2024",
    team: 3,
    description: "Prototype exploring multi-agent coordination to automate complex workflows (agentic agents orchestration).",
    keywords: ["Agents", "Orchestration", "Python", "Multi-agent"],
    status: "participant",
    tags: ["participant", "Agents", "Orchestration", "Python"],
    notes: "Devpost project page had limited access; description inferred from title/event listing.",
  },
  {
    hackathonLink: "https://lablab.ai/event/gemini-ultra-hackathon",
    hackathonName: "Gemini Ultra Hackathon",
    project: "https://lablab.ai/event/gemini-ultra-hackathon/games/games-gemini-ultra-simulator",
    projectTitle: "Games — Gemini Ultra Simulator",
    certificate: "https://lablab.ai/u/@Jaweria/cly4dt864001v9keot61be8he",
    date: "March 2024",
    team: 6,
    description: "Simulation sandbox using Gemini agents to generate scenarios, synthetic data and adaptive content.",
    keywords: ["Gemini", "Agents", "Simulation", "Synthetic Data", "Python"],
    placement: "3rd place",
    tags: ["3rd place", "Gemini", "Agents", "Simulation"],
  },
  {
    hackathonLink: "https://lablab.ai/event/nextgen-gpt-ai-hackathon",
    hackathonName: "NextGen GPT AI Hackathon",
    project: "https://lablab.ai/event/nextgen-gpt-ai-hackathon/devstat-fusion/food-complaint-resolution",
    projectTitle: "Food Complaint Resolution",
    certificate: "https://lablab.ai/u/@Jaweria/clsanou7b001rgfe8f1cc9lqa",
    date: "January 2023",
    team: 6,
    description: "Automated complaint triage and response system for food/restaurant complaints (classification + automated replies).",
    keywords: ["GPT", "NLP", "Classification", "Automation", "Python"],
    placement: "Top 6 (Finalist)",
    tags: ["Top 6 (Finalist)", "GPT", "NLP", "Classification"],
  },
  {
    hackathonLink: "https://lablab.ai/event/aya-weekend-challenge",
    hackathonName: "Aya Weekend Challenge",
    project: "https://lablab.ai/event/aya-weekend-challenge/quranic/quranic",
    projectTitle: "Quranic",
    certificate: "https://lablab.ai/u/@Jaweria/clu2zgppa004l7qlxp99jvaob",
    date: "February 2024",
    team: 6,
    description: "Quranic study/search assistant that provides contextual answers and learning aids from indexed Quranic texts.",
    keywords: ["Search", "Quranic", "RAG", "NLP", "Python"],
    placement: "Top 3",
    tags: ["Top 3", "Search", "RAG", "NLP"],
  },
  {
    hackathonLink: "https://lablab.ai/event/openai-whisper-gpt3-codex-dalle2-hackathon",
    hackathonName: "OpenAI — Whisper / GPT-3 / Codex / DALL·E2 Hackathon",
    project: "https://lablab.ai/event/openai-whisper-gpt3-codex-dalle2-hackathon/weather-vane/weathervane",
    projectTitle: "WeatherVane",
    certificate: "https://lablab.ai/u/@Jaweria/clc0lbfjb0086be0rpipjy2lc",
    date: "December 2022",
    team: 4,
    description: "Multimodal demo (WeatherVane) combining speech/text/image models to surface insights (event listing based).",
    keywords: ["Whisper", "GPT-3", "Multimodal", "Audio", "Python"],
    status: "participant",
    tags: ["participant", "Whisper", "GPT-3", "Multimodal"],
    notes: "Project page had limited access; description taken from event listing.",
  },
  {
    hackathonLink: "https://lablab.ai/event/falcon-llms-24-hours-hackathon",
    hackathonName: "Falcon LLMs — 24 Hours Hackathon",
    project: "https://lablab.ai/event/falcon-llms-24-hours-hackathon/fritzlabs/everdiver",
    projectTitle: "EverDiver",
    certificate: "https://lablab.ai/u/@Jaweria/cloecw5y2006f7z0rd0epxwyk",
    date: "September 2023",
    team: 6,
    description: "Privacy-preserving Evernote semantic search and summarization tool using Falcon LLMs.",
    keywords: ["Falcon", "LLMs", "Semantic Search", "Evernote", "Privacy"],
    status: "participant",
    tags: ["participant", "Falcon", "Semantic Search", "Privacy"],
  },
  {
    hackathonLink: "https://lablab.ai/event/leap-2024-hackathon",
    hackathonName: "LEAP 2024 Hackathon",
    project: "https://lablab.ai/event/leap-2024-hackathon/codmak/virtual-urban-explorer",
    projectTitle: "Virtual Urban Explorer",
    certificate: "https://lablab.ai/u/@Jaweria/clu2kipmp0038135u1mtv34zt",
    date: "March 2024",
    team: 6,
    description: "AI-guided virtual urban explorer combining maps, procedural routes and content for city discovery.",
    keywords: ["Maps", "Virtual Explorer", "React", "Frontend", "Python"],
    status: "participant",
    tags: ["participant", "Maps", "Virtual Explorer", "React"],
  },
  {
    hackathonLink: "https://lablab.ai/event/gpt-4-powered-app-creation-hackathon",
    hackathonName: "GPT-4 Powered App Creation & Evals Hackathon",
    project: "https://lablab.ai/event/gpt-4-powered-app-creation-hackathon/breaking/breaking-free",
    projectTitle: "Breaking Free",
    certificate: "https://lablab.ai/u/@Jaweria/clu2zgppa004l7qlxp99jvaob",
    date: "February 2024",
    team: 5,
    description: "GPT-4 powered app built for evaluation-driven tasks and real-world assistant workflows.",
    keywords: ["GPT-4", "Eval", "Conversational AI", "Frontend"],
    placement: "2nd place",
    tags: ["2nd place", "GPT-4", "Eval", "Conversational AI"],
  },
  {
    hackathonLink: "https://lablab.ai/event/doge-ai-hackathon",
    hackathonName: "DOGE AI Hackathon",
    project: "https://lablab.ai/event/doge-ai-hackathon/makeai/doge-makeai-educate",
    projectTitle: "DOGE MakeAI Educate",
    certificate: "https://lablab.ai/u/@Jaweria/cm4wwru6p000pnloxkkrhfvjo",
    date: "December 2024",
    team: 6,
    description: "Educational / gamified AI demo using DOGE-themed prompts to teach AI concepts interactively.",
    keywords: ["Education", "Gamification", "AI Demo", "Python"],
    status: "participant",
    tags: ["participant", "Education", "Gamification"],
  },
  {
    hackathonLink: "https://lablab.ai/event/cohere-hackathon",
    hackathonName: "Cohere Hackathon",
    project: "",
    projectTitle: "",
    certificate: "https://lablab.ai/u/@Jaweria/clecj7o3g00789q0s1u34v6jl",
    date: "February 2023",
    team: undefined,
    description: "",
    keywords: [],
    status: "participant",
    tags: ["participant"],
    notes: "No project URL provided in the original data; project field left empty.",
  },
  {
    hackathonLink: "https://lablab.ai/event/generative-ai-hackathon",
    hackathonName: "Generative AI Hackathon",
    project: "",
    projectTitle: "",
    certificate: "https://lablab.ai/u/@Jaweria/clbup5466000m9c0satqxpu1y",
    date: "December 2022",
    team: undefined,
    description: "",
    keywords: [],
    status: "participant",
    tags: ["participant"],
    notes: "No project URL provided in the original data; project field left empty.",
  }
];

export type WonHackEntry = {
  hackathonLink: string;
  hackathonName: string;
  project: string;
  projectTitle?: string;
  certificate?: string;
  date?: string;
  team?: number;
  totalTeams?: number;
  participants?: number;
  position: string;      // human-friendly amplified position sentence
  description?: string;  // 1-line project description
  tags?: string[];       // placement + tech/topics
  sources?: string[];    // citations (for your records)
};

export const wonHackathons: WonHackEntry[] = [
  {
    hackathonLink: "https://lablab.ai/event/nextgen-gpt-ai-hackathon",
    hackathonName: "NextGen GPT AI Hackathon (with Clarifai)",
    project: "https://lablab.ai/event/nextgen-gpt-ai-hackathon/devstat-fusion/food-complaint-resolution",
    projectTitle: "Food Complaint Resolution",
    certificate: "https://lablab.ai/u/@Jaweria/clsanou7b001rgfe8f1cc9lqa",
    date: "January 2024",
    team: 6,
    totalTeams: 207,
    participants: 1491,
    position: "Among the Top 6 finalists out of 207 teams and ~1,491 participants (Top 2.90% of teams).",
    description: "AI-based automated complaint triage & resolution system for food delivery using GPT-4 (vision + classifier) and image metadata.",
    tags: ["Top 6 (Finalist)", "GPT-4", "Vision", "Classification", "Automation", "Streamlit"],
    sources: [
      "https://lablab.ai/event/nextgen-gpt-ai-hackathon/devstat-fusion/food-complaint-resolution", 
      "https://www.clarifai.com/blog/nextgen-gpt-ai-hackathon-with-clarifai-winners-announcement"
    ]
  },

  {
    hackathonLink: "https://lablab.ai/event/gpt-4-powered-app-creation-hackathon",
    hackathonName: "GPT-4 Powered App Creation & Evals Hackathon (Lablab.ai)",
    project: "https://lablab.ai/event/gpt-4-powered-app-creation-hackathon/breaking/breaking-free",
    projectTitle: "Breaking Free",
    certificate: "https://lablab.ai/u/@Jaweria/clu2zgppa004l7qlxp99jvaob",
    date: "February 2024",
    team: 5,
    totalTeams: 301,
    participants: 1604,
    position: "2nd place among ~301 teams and ~1,604 participants (Top 0.66% of teams).",
    description: "Explored long-term human–LLM interaction and proposed the HIN (Human Interpretive Number) metric; integrated Trulens/HHEM, generative agents, DALL·E scenes, and TTS.",
    tags: ["2nd place", "GPT-4", "Eval", "Generative Agents", "TruLens", "DALL·E"],
    sources: [
      "https://lablab.ai/event/gpt-4-powered-app-creation-hackathon/breaking/breaking-free",
      "https://lablab.ai/event/gpt-4-powered-app-creation-hackathon"
    ]
  },

  {
    hackathonLink: "https://lablab.ai/event/gemini-ultra-hackathon",
    hackathonName: "Gemini Ultra 1.0 Hackathon",
    project: "https://lablab.ai/event/gemini-ultra-hackathon/games/games-gemini-ultra-simulator",
    projectTitle: "Games — Gemini Ultra Simulator",
    certificate: "https://lablab.ai/u/@Jaweria/cly4dt864001v9keot61be8he",
    date: "March 2024",
    team: 6,
    totalTeams: 224,
    participants: 1448,
    position: "3rd place among 224 teams and ~1,448 participants (Top 1.34% of teams).",
    description: "Adaptive simulation sandbox driven by Gemini agents — agent personification (roles), emergent behavior, and synthetic data to create training/course content.",
    tags: ["3rd place", "Gemini", "Agents", "Simulation", "Synthetic Data"],
    sources: [
      "https://lablab.ai/event/gemini-ultra-hackathon/games/games-gemini-ultra-simulator",
      "https://lablab.ai/event/gemini-ultra-hackathon"
    ]
  }
];
