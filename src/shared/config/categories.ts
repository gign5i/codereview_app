import BriefcaseIcon from "@@/public/icons/briefcase.webp";
import StackIcon from "@@/public/icons/stack.webp";
import CodeIcon from "@@/public/icons/code.webp";
import MicroIcon from "@@/public/icons/Microphone.webp";
import CalendarIcon from "@@/public/icons/calendar.webp";
import CodeAsteriskIcon from "@@/public/icons/code-asterisk.webp";
import MessageIcon from "@@/public/icons/message.webp";
import SparklesIcon from "@@/public/icons/sparkles.webp";
import ProfileIcon from "@@/public/icons/profile.webp";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ICategoriesProps {
  id: number;
  title: string;
  description: string;
  icon: string | StaticImport;
  className?: string;
}

export const categoriesList: ICategoriesProps[] = [
  {
    id: 1,
    title: "Вакансии / Стажировки",
    description:
      "Актуальные junior-вакансии и стажировки с hh.ru, Habr Career, LinkedIn, Telegram и других платформ",
    icon: BriefcaseIcon,
  },
  {
    id: 2,
    title: "Необходимые навыки",
    description:
      "Популярные навыки и ключевые слова из вакансий - можно использовать для улучшения резюме",
    icon: StackIcon,
  },
  {
    id: 3,
    title: "Тестовые задания",
    description:
      "Реальные задания с отборов на стажировки и junior позиции - для практики и портфолио",
    icon: CodeIcon,
    className: "gradient-1",
  },
  {
    id: 4,
    title: "Собеседования",
    description:
      "Реальные вопросы с интервью, сгруппированные по стеку и уровню сложности - с пояснениями и примерами ответов",
    icon: MicroIcon,
  },
  {
    id: 5,
    title: "IT-мероприятия",
    description:
      "Конференции, хакатоны, метапы и курсы - чтобы расширить кругозор, найти стажировку и завести связи",
    icon: CalendarIcon,
    className: "gradient-2",
  },
  {
    id: 6,
    title: "Пет-проекты",
    description:
      "Проекты для протфолио, в том числе коммерческие. Отличный способ прокачать скиллы и показать опыт",
    icon: CodeAsteriskIcon,
  },
  {
    id: 7,
    title: "Контакты рекрутеров",
    description:
      "Контакты рекрутеров и сотрудников, готовых рекомендовать в свою компанию. Можно найти того, кто может попасть на собеседование",
    icon: MessageIcon,
  },
  {
    id: 8,
    title: "ИИ инструменты",
    description:
      "Подборка AI-тулзов для автоматизации, разработки и поиска работы - с описанием и рейтингом полезности",
    icon: SparklesIcon,
  },
  {
    id: 9,
    title: "Резюме соискателей",
    description: "",
    icon: ProfileIcon,
  },
];

export const categoriesMain: ICategoriesProps[] = categoriesList.filter(
  category => category.id !== 9,
);
