// All site content lives here. Each text field is { pt, en }.

export const profile = {
  name: 'Eline Farias',
  fullName: 'Maria Eline Silva de Farias',
  location: 'Sobral – CE, Brasil',
  email: 'elinefarias33@gmail.com',
  photo: '/img/foto-perfil.jpg',
  resume: '/resume/curriculo-eline-farias.pdf',
  links: {
    github: 'https://github.com/elinefarias',
    linkedin: 'https://www.linkedin.com/in/elinefarias',
    lattes: 'http://lattes.cnpq.br/0490328898443587',
  },
}

export const ui = {
  nav: {
    about: { pt: 'Sobre', en: 'About' },
    skills: { pt: 'Skills', en: 'Skills' },
    experience: { pt: 'Experiência', en: 'Experience' },
    projects: { pt: 'Projetos', en: 'Projects' },
    contact: { pt: 'Contato', en: 'Contact' },
  },
  hello: { pt: 'Olá, eu sou', en: "Hi, I'm" },
  role: {
    pt: 'Engenheira de Software e Dados',
    en: 'Software & Data Engineer',
  },
  tagline: {
    pt: 'Construo APIs, pipelines de dados e agentes de IA com LLMs, transformando dados e modelos em soluções robustas para o negócio.',
    en: 'I build APIs, data pipelines and LLM-powered AI agents, turning data and models into robust solutions for the business.',
  },
  ctaResume: { pt: 'Baixar currículo', en: 'Download resume (PT)' },
  ctaContact: { pt: 'Fale comigo', en: 'Get in touch' },
  aboutTitle: { pt: 'Sobre mim', en: 'About me' },
  about: [
    {
      pt: 'Sou Engenheira de Computação pela Universidade Federal do Ceará e mestranda em Engenharia Elétrica e de Computação na mesma instituição. Trabalho com Python na construção de APIs, pipelines ETL, agentes de IA baseados em LLMs e sistemas orientados a dados.',
      en: "I'm a Computer Engineer from the Federal University of Ceará (UFC) and a master's student in Electrical and Computer Engineering at the same university. I work with Python building APIs, ETL pipelines, LLM-based AI agents and data-driven systems.",
    },
    {
      pt: 'Hoje atuo no desenvolvimento de agentes de IA com LangChain e RAG, e na pesquisa em Deep Learning para classificação de sinais sismo-vulcânicos, com foco em interpretabilidade (XAI).',
      en: 'Today I develop AI agents with LangChain and RAG, and research Deep Learning for classifying seismo-volcanic signals, with a focus on interpretability (XAI).',
    },
  ],
  stats: [
    { value: '5+', label: { pt: 'anos com tecnologia', en: 'years in tech' } },
    { value: 'MSc', label: { pt: 'em andamento · UFC', en: 'in progress · UFC' } },
    { value: 'LLMs', label: { pt: 'agentes e RAG em produção', en: 'agents & RAG in production' } },
  ],
  skillsTitle: { pt: 'Hard skills', en: 'Hard skills' },
  skillsSub: {
    pt: 'Tecnologias que uso no dia a dia.',
    en: 'Technologies I use day to day.',
  },
  experienceTitle: { pt: 'Experiência', en: 'Experience' },
  present: { pt: 'Atual', en: 'Present' },
  projectsTitle: { pt: 'Projetos', en: 'Projects' },
  projectsSub: {
    pt: 'Curiosidade virou código. Aqui estão alguns resultados.',
    en: 'Curiosity turned into code. Here are some of the results.',
  },
  all: { pt: 'Todos', en: 'All' },
  viewProject: { pt: 'Ver projeto', en: 'View project' },
  educationTitle: { pt: 'Formação', en: 'Education' },
  contactTitle: { pt: 'Vamos conversar?', en: "Let's talk" },
  contactSub: {
    pt: 'Aberta a oportunidades em engenharia de dados, backend e IA. Me mande uma mensagem!',
    en: "Open to opportunities in data engineering, backend and AI. Drop me a message!",
  },
  footer: { pt: 'Feito por', en: 'Made by' },
  menu: { pt: 'Menu', en: 'Menu' },
  theme: { pt: 'Alternar tema', en: 'Toggle theme' },
}

export const skills = [
  {
    group: { pt: 'Linguagens', en: 'Languages' },
    items: ['Python', 'SQL', 'JavaScript', 'PHP', 'C++'],
  },
  {
    group: { pt: 'Engenharia de Dados', en: 'Data Engineering' },
    items: ['Apache Airflow', 'ETL', 'Data Warehouse', 'MySQL', 'MongoDB', 'Metabase', 'Amazon S3'],
  },
  {
    group: { pt: 'Backend & DevOps', en: 'Backend & DevOps' },
    items: ['FastAPI', 'APIs RESTful', 'Laravel', 'Docker', 'Git/GitHub'],
  },
  {
    group: { pt: 'IA & LLMs', en: 'AI & LLMs' },
    items: ['LangChain', 'RAG', 'OpenAI API', 'Hugging Face', 'Embeddings', 'Weaviate', 'Prompt Engineering', 'NLP'],
  },
  {
    group: { pt: 'Data Science & ML', en: 'Data Science & ML' },
    items: ['Pandas', 'NumPy', 'SciPy', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'SHAP / XAI'],
  },
]

export const experience = [
  {
    company: 'Via Musical',
    role: { pt: 'Engenheira de Software e Dados', en: 'Software & Data Engineer' },
    place: 'Fortaleza – CE',
    start: { pt: 'Set. 2024', en: 'Sep 2024' },
    end: null,
    bullets: [
      {
        pt: 'Agentes de IA com LangChain, RAG e engenharia de prompts para uma plataforma de ensino de música, incluindo agente de suporte às aulas.',
        en: 'AI agents with LangChain, RAG and prompt engineering for a music-learning platform, including a lesson-support agent.',
      },
      {
        pt: 'Busca semântica com embeddings e Weaviate, reduzindo o contexto enviado aos LLMs e os custos de inferência.',
        en: 'Semantic search with embeddings and Weaviate, shrinking LLM context and inference costs.',
      },
      {
        pt: 'Migração de código PHP legado e sistemas de recomendação para Python/FastAPI; banco MongoDB estruturado do zero.',
        en: 'Migrated legacy PHP code and recommendation systems to Python/FastAPI; designed a MongoDB database from scratch.',
      },
      {
        pt: 'Migração da infraestrutura de vídeos do Vimeo para Amazon S3.',
        en: 'Moved the video infrastructure from Vimeo to Amazon S3.',
      },
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'RAG', 'MongoDB', 'AWS S3'],
  },
  {
    company: 'FUNCAP · UFC',
    role: { pt: 'Bolsista de Mestrado', en: "Master's Research Fellow" },
    place: 'Sobral – CE',
    start: { pt: 'Jan. 2026', en: 'Jan 2026' },
    end: null,
    bullets: [
      {
        pt: 'Deep Learning para classificação automática de eventos sismo-vulcânicos com dados multicanais reais do vulcão Ubinas (Peru).',
        en: 'Deep Learning for automatic classification of seismo-volcanic events using real multichannel data from Ubinas volcano (Peru).',
      },
      {
        pt: 'Pipeline completo a partir de arquivos SAC: associação, recorte, filtragem e deconvolução dos sinais.',
        en: 'End-to-end pipeline from SAC files: event association, trimming, filtering and signal deconvolution.',
      },
      {
        pt: 'Modelos MLP, CNN, LSTM, Bi-LSTM, Autoencoders e Transformers, com interpretação via SHAP (XAI).',
        en: 'MLP, CNN, LSTM, Bi-LSTM, Autoencoder and Transformer models, interpreted with SHAP (XAI).',
      },
    ],
    tags: ['PyTorch', 'TensorFlow', 'Deep Learning', 'SHAP'],
  },
  {
    company: 'Pie – The Self Assessment App',
    role: { pt: 'Estagiária Backend', en: 'Backend Developer Intern' },
    place: { pt: 'Reino Unido (remoto)', en: 'United Kingdom (remote)' },
    start: { pt: 'Jan. 2024', en: 'Jan 2024' },
    end: { pt: 'Abr. 2024', en: 'Apr 2024' },
    bullets: [
      {
        pt: 'APIs RESTful com FastAPI para disponibilizar dados do Data Warehouse.',
        en: 'RESTful APIs with FastAPI serving data from the Data Warehouse.',
      },
      {
        pt: 'Pipelines de ingestão, processamento e transformação (ETL) para aplicações de IA.',
        en: 'Ingestion, processing and transformation (ETL) pipelines for AI applications.',
      },
      {
        pt: 'Pesquisa sobre agentes conversacionais baseados em LLMs.',
        en: 'Research on LLM-based conversational agents.',
      },
    ],
    tags: ['Python', 'FastAPI', 'ETL', 'Data Warehouse'],
  },
  {
    company: 'CNPq · UFC',
    role: { pt: 'Bolsista PIBIC', en: 'Undergraduate Research Fellow' },
    place: 'Sobral – CE',
    start: { pt: 'Abr. 2022', en: 'Apr 2022' },
    end: { pt: 'Jan. 2024', en: 'Jan 2024' },
    bullets: [
      {
        pt: 'Luva instrumentada com ESP32, acelerômetros e giroscópios para reconhecer gestos de LIBRAS em tempo real.',
        en: 'Instrumented glove with ESP32, accelerometers and gyroscopes to recognize Brazilian Sign Language (LIBRAS) gestures in real time.',
      },
      {
        pt: 'Base de dados própria, extração de atributos e classificação com SVM.',
        en: 'Custom dataset, feature extraction and SVM classification.',
      },
    ],
    tags: ['Python', 'ESP32', 'SVM', 'IoT'],
  },
  {
    company: 'Loading Desenvolvimento Jr',
    role: { pt: 'Desenvolvedora Web', en: 'Web Developer' },
    place: 'Sobral – CE',
    start: { pt: 'Jun. 2021', en: 'Jun 2021' },
    end: { pt: 'Dez. 2022', en: 'Dec 2022' },
    bullets: [
      {
        pt: 'Desenvolvimento de aplicações web e landing pages (trabalho voluntário).',
        en: 'Built web applications and landing pages (volunteer work).',
      },
    ],
    tags: ['PHP', 'JavaScript', 'HTML/CSS', 'Scrum'],
  },
]

export const projectCategories = [
  { id: 'ai', label: { pt: 'Dados & IA', en: 'Data & AI' } },
  { id: 'web', label: { pt: 'Web', en: 'Web' } },
  { id: 'other', label: { pt: 'Outros', en: 'Other' } },
]

export const projects = [
  {
    category: 'ai',
    title: 'ScanLit',
    description: {
      pt: 'Agente de IA para revisão sistemática: processa PDFs, gera resumos, classifica artigos e extrai informações para meta-análise.',
      en: 'AI agent for systematic reviews: processes PDFs, summarizes and classifies papers, and extracts data for meta-analysis.',
    },
    tags: ['OpenAI API', 'Hugging Face', 'spaCy', 'Scikit-learn'],
    url: 'https://github.com/elinefarias',
  },
  {
    category: 'ai',
    title: { pt: 'Comandos de voz com SVM', en: 'Voice commands with SVM' },
    description: {
      pt: 'Reconhecimento de comandos de voz com base de dados própria, extração de atributos, otimização de hiperparâmetros e validação cruzada.',
      en: 'Voice command recognition with a custom dataset, feature extraction, hyperparameter tuning and cross-validation.',
    },
    image: '/img/confusion-matrix.png',
    tags: ['Python', 'SVM', 'Scikit-learn'],
    url: 'https://github.com/elinefarias/disciplina-topicos-especiais-em-telecomunicacoes',
  },
  {
    category: 'ai',
    title: { pt: 'Clusterização e PCA', en: 'Clustering & PCA' },
    description: {
      pt: 'K-means e PCA com escolha do melhor K e número de componentes via análise de silhueta.',
      en: 'K-means and PCA, picking the best K and number of components via silhouette analysis.',
    },
    image: '/img/feature-importance.png',
    tags: ['K-means', 'PCA', 'Pandas'],
    url: 'https://github.com/elinefarias/disciplina-topicos-especiais-em-telecomunicacoes',
  },
  {
    category: 'web',
    title: { pt: 'App de Controle Financeiro', en: 'Finance Control App' },
    description: {
      pt: 'Registro e consulta de despesas do dia a dia em JavaScript.',
      en: 'Register and look up day-to-day expenses, built in JavaScript.',
    },
    image: '/img/app-registro-de-despesas.png',
    tags: ['JavaScript', 'Bootstrap'],
    url: 'https://github.com/elinefarias/projetos-do-curso-desenvolvimento-web-udemy',
  },
  {
    category: 'web',
    title: 'EchoSpotify',
    description: {
      pt: 'Clone da página inicial do Spotify.',
      en: 'Spotify home page clone.',
    },
    image: '/img/clone-sportify.png',
    tags: ['HTML', 'CSS'],
    url: 'https://github.com/elinefarias/projetos-do-curso-desenvolvimento-web-udemy',
  },
  {
    category: 'web',
    title: { pt: 'Jogo Mata Mosquito', en: 'Fly Swatting Game' },
    description: {
      pt: 'Jogo em JavaScript com Bootstrap.',
      en: 'Browser game in JavaScript and Bootstrap.',
    },
    image: '/img/project-web-developer-01.png',
    tags: ['JavaScript', 'Bootstrap'],
    url: 'https://github.com/elinefarias/projetos-do-curso-desenvolvimento-web-udemy',
  },
  {
    category: 'other',
    title: { pt: 'Sistema Solar Interativo', en: 'Interactive Solar System' },
    description: {
      pt: 'Simulação interativa do Sistema Solar para explorar planetas e órbitas.',
      en: 'Interactive simulation of the Solar System to explore planets and orbits.',
    },
    image: '/img/sistema-solar-project.png',
    tags: ['JavaScript'],
    url: 'https://github.com/elinefarias/projeto-sistema-solar',
  },
  {
    category: 'other',
    title: { pt: 'Largura de pulso com PIC18F4550', en: 'Pulse width with PIC18F4550' },
    description: {
      pt: 'Medição de largura de pulso com resultados atualizados em um display LCD.',
      en: 'Pulse width measurement with results shown on an LCD display.',
    },
    image: '/img/microprocessadores.png',
    tags: ['C', 'Microcontrollers'],
    url: 'https://github.com/elinefarias/disciplina-microprocessadores/tree/main/trabalho-final',
  },
]

export const education = [
  {
    school: 'Universidade Federal do Ceará (UFC)',
    degree: {
      pt: 'Mestrado em Engenharia Elétrica e de Computação',
      en: "Master's in Electrical and Computer Engineering",
    },
    detail: {
      pt: 'Ênfase em Algoritmos e Computação Distribuída',
      en: 'Focus on Algorithms and Distributed Computing',
    },
    period: { pt: 'Out. 2024 – Out. 2026', en: 'Oct 2024 – Oct 2026' },
  },
  {
    school: 'Universidade Federal do Ceará (UFC)',
    degree: {
      pt: 'Bacharelado em Engenharia da Computação',
      en: "Bachelor's in Computer Engineering",
    },
    period: { pt: 'Concluído em Set. 2024', en: 'Completed Sep 2024' },
  },
]
