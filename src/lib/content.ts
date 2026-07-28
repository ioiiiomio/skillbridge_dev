import {
  UserCheck,
  ShieldCheck,
  Sparkles,
  Eye,
  Users,
  GraduationCap,
  Briefcase,
  Percent,
  ShieldAlert,
  Compass,
  Route,
  UserPlus,
  Building2,
  Trophy,
  ShieldQuestion,
  UsersRound,
  HeartHandshake,
} from "lucide-react";
import type {
  NavLink,
  FeatureBubble,
  Stat,
  ProblemItem,
  ProcessStep,
  GameItem,
  ResultStory,
  PartnerCategory,
  FaqItem,
  FooterLinkGroup,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "О проекте", href: "#about" },
  { label: "Как работает", href: "#how-it-works" },
  { label: "Игры", href: "#games" },
  { label: "Результаты", href: "#results" },
  { label: "Партнёры", href: "#partners" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_TRUST_ITEMS: string[] = [
  "Проверенные работодатели",
  "Подтверждённые студенты",
  "AI-рекомендации",
];

export const HERO_FLOATING_CARDS: string[] = [
  "Проверенный работодатель",
  "AI-подбор вакансий",
  "Поддержка колледжа",
];

export const ABOUT_FEATURES: FeatureBubble[] = [
  { icon: UserCheck, label: "Всё начинается с подтверждённого профиля" },
  { icon: ShieldCheck, label: "Только проверенные работодатели" },
  { icon: Sparkles, label: "AI помогает находить подходящие возможности" },
  { icon: Eye, label: "Работодатель видит навыки и специальность студента" },
];

export const STATS: Stat[] = [
  { value: "85+", label: "Участников пилота", icon: Users },
  { value: "2", label: "Колледжа", icon: GraduationCap },
  { value: "7", label: "Нашли практику или стажировку", icon: Briefcase },
  { value: "57%", label: "Участников — девушки", icon: Percent },
];

export const PROBLEMS: ProblemItem[] = [
  {
    icon: Briefcase,
    title: "Первая работа без опыта",
    description:
      "Большинство вакансий требуют опыт, которого у студента ещё нет.",
  },
  {
    icon: ShieldAlert,
    title: "Риск столкнуться с обманом",
    description:
      "За профессиональными объявлениями могут скрываться фейковые или небезопасные предложения.",
  },
  {
    icon: Compass,
    title: "Возможности разбросаны",
    description:
      "Telegram, социальные сети, сайты и личные знакомства превращают поиск практики в долгий процесс.",
  },
  {
    icon: Route,
    title: "Колледж не всегда видит весь путь",
    description:
      "После выдачи направления сложно контролировать, нашёл ли студент место практики и как проходит процесс.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { icon: UserPlus, title: "Студент создаёт профиль", order: 1 },
  { icon: ShieldCheck, title: "Колледж подтверждает студента", order: 2 },
  { icon: Building2, title: "Работодатель проходит модерацию", order: 3 },
  { icon: Sparkles, title: "AI находит подходящие возможности", order: 4 },
  { icon: Trophy, title: "Студент получает первый опыт", order: 5 },
];

export const GAMES: GameItem[] = [
  {
    icon: Compass,
    title: "Какая профессия подходит вам?",
    description:
      "Пять рабочих ситуаций покажут, как вы принимаете решения, решаете задачи и взаимодействуете с людьми.",
    meta: "5 вопросов · около 2 минут",
    buttonLabel: "Начать",
    accent: "blue",
  },
  {
    icon: ShieldQuestion,
    title: "Фейк или реальная вакансия?",
    description:
      "Шесть объявлений помогут проверить, умеете ли вы отличать безопасную вакансию от сомнительной.",
    meta: "6 объявлений · около 2 минут",
    buttonLabel: "Начать",
    accent: "violet",
  },
  {
    icon: UsersRound,
    title: "Кого бы вы пригласили на собеседование?",
    description:
      "Пять резюме и ситуаций помогут посмотреть на отбор кандидатов глазами работодателя.",
    meta: "5 кандидатов · 3 варианта",
    buttonLabel: "Начать",
    accent: "yellow",
  },
];

// NOTE: Real student video stories are not yet available.
// These are clearly-labelled structural placeholders — replace with
// verified pilot-program stories before launch. No quotes are invented.
export interface VideoTestimonial {
  studentName: string;
  college: string;
  speciality: string;
  videoSrc: string;   // path in /public/videos
  poster: string;     // static frame shown before play, also in /public/videos (or /public/images)
}

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    studentName: "",
    college: "",
    speciality: "",
    videoSrc: "/videos/1.mov",
    poster: "/videos/1.jpg",
  },
  {
    studentName: "",
    college: "",
    speciality: "",
    videoSrc: "/videos/2.mp4",
    poster: "/videos/2.jpg",
  },
  {
    studentName: "",
    college: "",
    speciality: "",
    videoSrc: "/videos/3.mp4",
    poster: "/videos/3.jpg",
  },
  {
    studentName: "",
    college: "",
    speciality: "",
    videoSrc: "/videos/4.mov",
    poster: "/videos/4.jpg",
  },
  // add the rest of your video reviews here, matching real filenames in public/videos
];

export interface TextTestimonial {
  studentName: string;
  college: string;
  text: string;
}

export const TEXT_TESTIMONIALS: TextTestimonial[] = [
  {
    studentName: "",
    college: "",
    text: "До этого искала практику только через знакомых или Telegram-чаты, где было непонятно, настоящая ли вакансия. Здесь понравилось, что все работодатели проверенные. Подала заявку буквально за пару минут и сразу было видно статус. Намного спокойнее пользоваться такой платформой.",
  },
  {
    studentName: "",
    college: "",
    text: "Обычно работодатели хотят опыт, которого у студентов еще нет. На SkillBridge увидела вакансии именно для студентов колледжей, поэтому не было ощущения, что отправляешь резюме впустую. Интерфейс очень простой, разобралась быстро.",
  },
  {
    studentName: "",
    college: "",
    text: "Больше всего понравилось, что не нужно искать вакансии по разным сайтам. Все в одном месте, плюс сразу понятно, подходит ли вакансия под мою специальность. Надеюсь, платформу подключат и в других колледжах.",
  },
  {
    studentName: "",
    college: "",
    text: "Больше всего понравилось, что платформа сама предлагает подходящие вакансии. Не нужно долго искать — AI сразу показывает предложения, которые подходят под мою специальность. Это сильно экономит время.",
  },
];

export const PARTNER_CATEGORIES: PartnerCategory[] = [
  {
    icon: GraduationCap,
    title: "Колледжи",
    description:
      "Подтверждают статус студентов и получают прозрачную картину практики.",
  },
  {
    icon: Building2,
    title: "Работодатели",
    description:
      "Находят мотивированных студентов и стажёров через проверенную платформу.",
  },
  {
    icon: HeartHandshake,
    title: "Молодёжные инициативы",
    description:
      "Помогают развивать программы наставничества и первого профессионального опыта.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Кто может пользоваться SkillBridge KZ?",
    answer:
      "Платформа создаётся прежде всего для студентов колледжей, работодателей и представителей учебных заведений. Отдельные функции доступны каждой группе пользователей.",
  },
  {
    question: "Платформа бесплатна для студентов?",
    answer:
      "Да. Студенты могут создавать профиль, получать рекомендации и откликаться на доступные вакансии бесплатно.",
  },
  {
    question: "Как проверяются работодатели?",
    answer:
      "Перед публикацией вакансий работодатель предоставляет информацию о компании и проходит модерацию. Проверка помогает снизить риск фейковых и небезопасных объявлений.",
  },
  {
    question: "Зачем студенту подтверждение колледжа?",
    answer:
      "Подтверждение показывает работодателю, что пользователь действительно обучается в указанном колледже и по указанной специальности. Это повышает доверие к профилю.",
  },
  {
    question: "Заменяет ли AI решение работодателя?",
    answer:
      "Нет. AI помогает анализировать профиль, находить подходящие вакансии и давать рекомендации, но окончательное решение всегда принимает человек.",
  },
  {
    question: "Можно ли подключить наш колледж?",
    answer:
      "Да. Колледжи могут присоединиться к пилотированию платформы и использовать систему для подтверждения студентов и контроля прохождения практики.",
  },
  {
    question: "Как работодателю разместить вакансию?",
    answer:
      "Необходимо зарегистрировать профиль компании, пройти проверку и после подтверждения опубликовать вакансию с понятными условиями и требованиями.",
  },
];

export const FOOTER_GROUPS: FooterLinkGroup[] = [
  {
    title: "Навигация",
    links: [
      { label: "О проекте", href: "#about" },
      { label: "Как работает", href: "#how-it-works" },
      { label: "Игры", href: "#games" },
      { label: "Результаты", href: "#results" },
    ],
  },
  {
    title: "Пользователям",
    links: [
      { label: "Для студентов", href: "#" },
      { label: "Для работодателей", href: "#" },
      { label: "Для колледжей", href: "#" },
      { label: "Контакты", href: "#" },
    ],
  },
];
