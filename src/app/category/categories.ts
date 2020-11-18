import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface Category {
  [key: string]: {
    title: string;
    icon: IconName;
    subcategories: string[];
  };
}

export const CATEGORIES: Category = {
  individual: {
    title: 'Физическое лицо',
    icon: 'wallet',
    subcategories: [
      'Пенсия',
      'Выход на пенсию',
      'Возврат подоходного налога',
      'Страхование',
      'Кредиты',
      'Ипотека',
      'Реверсная ипотека (машканта афуха)',
      'Инвестиции',
      'Проверка правильности начисления зарплаты',
    ],
  },
  'self-employed': {
    title: 'Частный предприниматель',
    icon: 'portrait',
    subcategories: [
      'Пенсия',
      'Профессиональная страховка',
      'Бухгалтерский учёт',
      'Обналичивание чеков',
    ],
  },
  company: {
    title: 'Компания',
    icon: 'user-friends',
    subcategories: [
      'Пенсии для сотрудников',
      'Страхование профессиональное и помещения',
      'Кредиты',
      'Обналичивание чеков',
    ],
  },
};
