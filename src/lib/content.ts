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
export const RESULT_STORIES: ResultStory[] = [
  {
    studentName: "Видео скоро появится",
    college: "Колледж-партнёр SkillBridge KZ",
    speciality: "Специальность уточняется",
    result: "Место для истории участника пилота",
    isPlaceholder: true,
  },
  {
    studentName: "Видео скоро появится",
    college: "Колледж-партнёр SkillBridge KZ",
    speciality: "Специальность уточняется",
    result: "Место для истории участника пилота",
    isPlaceholder: true,
  },
  {
    studentName: "Видео скоро появится",
    college: "Колледж-партнёр SkillBridge KZ",
    speciality: "Специальность уточняется",
    result: "Место для истории участника пилота",
    isPlaceholder: true,
  },
  {
    studentName: "Видео скоро появится",
    college: "Колледж-партнёр SkillBridge KZ",
    speciality: "Специальность уточняется",
    result: "Место для истории участника пилота",
    isPlaceholder: true,
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
