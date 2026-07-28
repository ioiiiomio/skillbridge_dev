import { Compass, ShieldQuestion, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CatalogueGame {
  icon: LucideIcon;
  title: string;
  description: string;
  meta: string;
  buttonLabel: string;
  route: string;
  accent: "blue" | "violet" | "yellow";
}

export const GAME_CATALOGUE: CatalogueGame[] = [
  {
    icon: Compass,
    title: "Какая профессия подходит именно вам?",
    description:
      "Пять рабочих ситуаций покажут, как вы принимаете решения, взаимодействуете с людьми и решаете новые задачи.",
    meta: "5 вопросов · около 2 минут",
    buttonLabel: "Узнать свой результат",
    route: "/games/career-profile",
    accent: "blue",
  },
  {
    icon: ShieldQuestion,
    title: "Сможете распознать небезопасную вакансию?",
    description: "Шесть объявлений выглядят убедительно. Но только три из них действительно безопасны.",
    meta: "6 вакансий · около 4 минут · 3 скрытых риска",
    buttonLabel: "Начать проверку",
    route: "/games/vacancy-safety",
    accent: "violet",
  },
  {
    icon: UsersRound,
    title: "Кого бы вы пригласили на собеседование?",
    description:
      "Сравните требования вакансии с пятью профилями и попробуйте принять решение как настоящий работодатель.",
    meta: "5 кандидатов · около 4–5 минут · 3 варианта решения",
    buttonLabel: "Начать отбор",
    route: "/games/employer",
    accent: "yellow",
  },
];
