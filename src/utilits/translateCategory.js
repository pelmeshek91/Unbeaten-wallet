export const translateCategory = name => {
  switch (name) {
    case 'Продукты':
      return 'Products';
    case 'Алкоголь':
      return 'Alcohol';
    case 'Развлечения':
      return 'Entertainment';
    case 'Здоровье':
      return 'Health';
    case 'Транспорт':
      return 'Transport';
    case 'Всё для дома':
      return 'Housing';
    case 'Техника':
      return 'Technics';
    case 'Коммуналка и связь':
      return 'Communal and communication';
    case 'Спорт и хобби':
      return 'Sport and hobby';
    case 'Образование':
      return 'Education';
    case 'Прочее':
      return 'Other';
    case 'З/П':
      return 'Salary';
    case 'Доп. доход':
      return 'Additional income';
    default:
      break;
  }
};
