export type Car = {
  brand: string;
  model: string;
  year: number;
  price: number;
  currency: 'BYN' | 'RUB' | 'CNY';
  color: Array<string>;
  isReserved: boolean;
};

export const carsList: Array<Car> = [
  {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    price: 20000,
    currency: 'BYN',
    color: ['Синий', 'Красный' , 'Серый', 'Белый'],
    isReserved: false,
  },
  {
    brand: 'Honda',
    model: 'Civic',
    year: 2018,
    price: 18000,
    currency: 'RUB',
    color: ['Красный', 'Синий', 'Серый', 'Зелёный'],
    isReserved: true,
  },
  {
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    price: 25000,
    currency: 'CNY',
    color: ['Серый', 'Красный', 'Оранжевый', 'Желтый'],
    isReserved: false,
  },
  {
    brand: 'Chevrolet',
    model: 'Camaro',
    year: 2019,
    price: 23000,
    currency: 'RUB',
    color: ['Белый', 'Синий', 'Серый'],
    isReserved: false,
  },
  {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2019,
    price: 18000,
    currency: 'CNY',
    color: ['Фиолетовый', 'Красный', 'Серый'],
    isReserved: true,
  }
];
