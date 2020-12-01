export interface MainCategories {
  title: string;
  icon: string;
  link: string[];
}
export const MAIN_CATEGORIES: MainCategories[] = [
  {
    title: 'Частное лицо',
    icon: 'personal-wh.svg',
    link: ['category', 'individual'],

  }, {
    title: 'Предприниматель',
    icon: 'credit-card-wh.svg',
    link: ['category', 'self-employed'],

  }, {
    title: 'Компания',
    icon: 'organization-wh.svg',
    link: ['category', 'company'],
  },
];
