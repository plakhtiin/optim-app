export interface Category {
  [key: string]: {
    title: string;
    icon: string;
    subcategories: string[];
  };
}

export const CATEGORIES: Category = {
  individual: {
    title: 'Частное лицо',
    icon: 'personal.svg',
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
    title: 'Предприниматель',
    icon: 'credit-card.svg',
    subcategories: [
      'Пенсия',
      'Профессиональная страховка',
      'Бухгалтерский учёт',
      'Обналичивание чеков',
    ],
  },
  company: {
    title: 'Компания',
    icon: 'organization.svg',
    subcategories: [
      'Пенсии для сотрудников',
      'Страхование профессиональное и помещения',
      'Кредиты',
      'Обналичивание чеков',
    ],
  },
};
