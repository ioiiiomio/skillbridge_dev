import {
  LineChart,
  Code2,
  Users,
  Palette,
  ClipboardList,
  Rocket,
} from "lucide-react";
import type {
  CareerQuestion,
  CareerProfileDefinition,
  CareerDimension,
} from "@/types/games";

/**
 * DEMO CONTENT — replaceable.
 * Five situational questions covering: decision-making, teamwork, working
 * with information, unfamiliar tasks, and motivation. Weights are kept
 * separate from any UI so scoring never lives inside JSX.
 */
export const CAREER_QUESTIONS: CareerQuestion[] = [
  {
    id: "q1",
    order: 1,
    situation:
      "Вашей команде нужно быстро выбрать один из двух вариантов решения задачи, а данных для полной уверенности не хватает.",
    question: "Что вы делаете в первую очередь?",
    options: [
      {
        id: "q1a",
        label: "Собираю доступные цифры и сравниваю варианты по фактам",
        weights: { analytical: 2, organised: 1 },
      },
      {
        id: "q1b",
        label: "Обсуждаю ситуацию с командой и учитываю мнение каждого",
        weights: { social: 2, organised: 1 },
      },
      {
        id: "q1c",
        label: "Предлагаю нестандартный третий вариант, который никто не рассматривал",
        weights: { creative: 2, entrepreneurial: 1 },
      },
      {
        id: "q1d",
        label: "Выбираю вариант, который проще и быстрее всего внедрить на практике",
        weights: { practical: 2, entrepreneurial: 1 },
      },
    ],
  },
  {
    id: "q2",
    order: 2,
    situation:
      "В проекте участвуют несколько человек с разными задачами, и сроки поджимают.",
    question: "Какая роль вам ближе всего?",
    options: [
      {
        id: "q2a",
        label: "Слежу, чтобы задачи и дедлайны были расписаны и ничего не потерялось",
        weights: { organised: 2, practical: 1 },
      },
      {
        id: "q2b",
        label: "Поддерживаю связь между участниками, чтобы все понимали друг друга",
        weights: { social: 2 },
      },
      {
        id: "q2c",
        label: "Придумываю, как сделать результат интереснее и заметнее",
        weights: { creative: 2 },
      },
      {
        id: "q2d",
        label: "Беру на себя самую сложную техническую часть",
        weights: { analytical: 1, practical: 1, entrepreneurial: 1 },
      },
    ],
  },
  {
    id: "q3",
    order: 3,
    situation:
      "Вам дали большой объём разрозненной информации — таблицы, сообщения, заметки.",
    question: "Как вы с ней работаете?",
    options: [
      {
        id: "q3a",
        label: "Ищу закономерности и структурирую данные в понятную систему",
        weights: { analytical: 2, organised: 1 },
      },
      {
        id: "q3b",
        label: "Уточняю у людей, что из этого действительно важно",
        weights: { social: 2 },
      },
      {
        id: "q3c",
        label: "Представляю информацию наглядно — схемой, визуалом, историей",
        weights: { creative: 2 },
      },
      {
        id: "q3d",
        label: "Оставляю только то, что реально пригодится для результата",
        weights: { practical: 2 },
      },
    ],
  },
  {
    id: "q4",
    order: 4,
    situation:
      "Вам поручили задачу, с которой вы раньше не сталкивались, и инструкции почти нет.",
    question: "С чего вы начнёте?",
    options: [
      {
        id: "q4a",
        label: "Разберу задачу на понятные шаги и проверю каждый по отдельности",
        weights: { analytical: 1, organised: 2 },
      },
      {
        id: "q4b",
        label: "Найду человека, который уже сталкивался с похожим",
        weights: { social: 1, practical: 1 },
      },
      {
        id: "q4c",
        label: "Попробую несколько подходов и посмотрю, что сработает",
        weights: { creative: 1, entrepreneurial: 2 },
      },
      {
        id: "q4d",
        label: "Сразу приступлю к самой практичной части, а разберусь по ходу",
        weights: { practical: 2, entrepreneurial: 1 },
      },
    ],
  },
  {
    id: "q5",
    order: 5,
    situation: "Вы выбираете, чем заниматься на первой работе.",
    question: "Что для вас важнее всего в результате?",
    options: [
      {
        id: "q5a",
        label: "Видеть, как мои выводы влияют на решения команды",
        weights: { analytical: 2, organised: 1 },
      },
      {
        id: "q5b",
        label: "Помогать людям и решать их конкретные вопросы",
        weights: { social: 2 },
      },
      {
        id: "q5c",
        label: "Создавать что-то новое, чего раньше не было",
        weights: { creative: 2, entrepreneurial: 1 },
      },
      {
        id: "q5d",
        label: "Видеть осязаемый, законченный результат своей работы",
        weights: { practical: 2 },
      },
    ],
  },
];

export const CAREER_PROFILES: Record<CareerDimension, CareerProfileDefinition> = {
  analytical: {
    dimension: "analytical",
    title: "Аналитика данных и исследования",
    explanation:
      "По вашим ответам видно, что вы умеете анализировать ситуацию, сравнивать варианты и принимать взвешенные решения на основе фактов. При этом вам важно видеть, как ваши выводы влияют на результат команды.",
    icon: LineChart,
  },
  practical: {
    dimension: "practical",
    title: "Разработка и цифровые продукты",
    explanation:
      "Вы предпочитаете двигаться к понятному, ощутимому результату и быстро переходить от идеи к реализации. Вам важно видеть практическую пользу своей работы, а не только теорию.",
    icon: Code2,
  },
  social: {
    dimension: "social",
    title: "Коммуникации и работа с людьми",
    explanation:
      "Ваши ответы показывают, что вы хорошо чувствуете людей, умеете выстраивать диалог и находить общий язык даже в сложных ситуациях. Это ценное качество для ролей, связанных с командой и клиентами.",
    icon: Users,
  },
  creative: {
    dimension: "creative",
    title: "Дизайн и создание решений",
    explanation:
      "Вы склонны искать нестандартные подходы и предлагать идеи, которые выделяются на фоне очевидных решений. Вам важно, чтобы результат работы был не только полезным, но и интересным.",
    icon: Palette,
  },
  organised: {
    dimension: "organised",
    title: "Организация процессов и проектов",
    explanation:
      "Вы умеете структурировать задачи, следить за деталями и удерживать в голове весь процесс целиком. Команды часто держатся на людях, которые умеют организовать хаос в понятную систему.",
    icon: ClipboardList,
  },
  entrepreneurial: {
    dimension: "entrepreneurial",
    title: "Технические и инженерные направления",
    explanation:
      "Вы готовы пробовать новое, брать на себя инициативу и искать решения там, где чёткой инструкции ещё не существует. Это ценится там, где приходится работать на стыке нескольких задач.",
    icon: Rocket,
  },
};

export const CAREER_RECOMMENDATIONS: string[] = [
  "Добавить учебный проект в профиль",
  "Пройти короткий вводный курс по выбранному направлению",
  "Найти практику или стажировку начального уровня",
  "Подготовить пример выполненной задачи, чтобы показать работодателю",
];
