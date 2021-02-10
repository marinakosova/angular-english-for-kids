import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private myCards = [
    {
      title: "Farm Animals",
      id: 1,
      quantity: 8,
      imageUrl: "../../assets/main-images/chicken.svg"
    },
    {
      title: "Zoo Animals",
      id: 2,
      quantity: 8,
      imageUrl: "../../assets/main-images/bear.svg"
    }, {
      title: "Autumn",
      id: 3,
      quantity: 8,
      imageUrl: "../../assets/main-images/autumn.svg"
    }, {
      title: "Food",
      id: 4,
      quantity: 13,
      imageUrl: "../../assets/main-images/food.svg"
    }, {
      title: "Home",
      id: 5,
      quantity: 10,
      imageUrl: "../../assets/main-images/home.svg"
    }, {
      title: "Body",
      id: 6,
      quantity: 8,
      imageUrl: "../../assets/main-images/body.svg"
    }, {
      title: "Summer",
      id: 7,
      quantity: 8,
      imageUrl: "../../assets/main-images/summer.svg"
    },
    {
      title: "Space",
      id: 8,
      quantity: 8,
      imageUrl: "../../assets/main-images/space.svg"
    },
  ];

  private myInnerCards = [
    {
      categoryId: 1,
      name: "Cow",
      translation: "Корова",
      imageUrl: "../../assets/category-images/farm-animals/cow.svg"
    },
    {
      categoryId: 1,
      name: "Cat",
      translation: "Кот",
      imageUrl: "../../assets/category-images/farm-animals/cat.svg"
    },
    {
      categoryId: 1,
      name: "Sheep",
      translation: "Овечка",
      imageUrl: "../../assets/category-images/farm-animals/sheep.svg"
    },
    {
      categoryId: 1,
      name: "Horse",
      translation: "Лошадь",
      imageUrl: "../../assets/category-images/farm-animals/horse.svg"
    },
    {
      categoryId: 1,
      name: "Pig",
      translation: "Свинка",
      imageUrl: "../../assets/category-images/farm-animals/pig.svg"
    },
    {
      categoryId: 1,
      name: "Rabbit",
      translation: "Кролик",
      imageUrl: "../../assets/category-images/farm-animals/rabbit.svg"
    },
    {
      categoryId: 1,
      name: "Dog",
      translation: "Собака",
      imageUrl: "../../assets/category-images/farm-animals/dog.svg"
    },
    {
      categoryId: 1,
      name: "Hen",
      translation: "Курица",
      imageUrl: "../../assets/category-images/farm-animals/hen.svg"
    },
    {
      categoryId: 1,
      name: "Goat",
      translation: "Коза",
      imageUrl: "../../assets/category-images/farm-animals/goat.svg"
    },
    {
      categoryId: 2,
      name: "Panda",
      translation: "Панда",
      imageUrl: "../../assets/category-images/zoo-animals/panda-bear.svg"
    },
    {
      categoryId: 2,
      name: "Lion",
      translation: "Лев",
      imageUrl: "../../assets/category-images/zoo-animals/lion.svg"
    },
    {
      categoryId: 2,
      name: "Bear",
      translation: "Медведь",
      imageUrl: "../../assets/category-images/zoo-animals/bear.svg"
    },
    {
      categoryId: 2,
      name: "Zebra",
      translation: "Зебра",
      imageUrl: "../../assets/category-images/zoo-animals/zebra.svg"
    },
    {
      categoryId: 2,
      name: "Giraffe",
      translation: "Жираф",
      imageUrl: "../../assets/category-images/zoo-animals/giraffe.svg"
    },
    {
      categoryId: 2,
      name: "Elephant",
      translation: "Слон",
      imageUrl: "../../assets/category-images/zoo-animals/elephant.svg"
    },
    {
      categoryId: 2,
      name: "Tiger",
      translation: "Тигр",
      imageUrl: "../../assets/category-images/zoo-animals/tiger.svg"
    },
    {
      categoryId: 3,
      name: "Mushrooms",
      translation: "Грибы",
      imageUrl: "../../assets/category-images/autumn/mushrooms.svg"
    },
    {
      categoryId: 3,
      name: "Leaf Fall",
      translation: "Листопад",
      imageUrl: "../../assets/category-images/autumn/park.svg"
    },
    {
      categoryId: 3,
      name: "Pumpkin",
      translation: "Тыква",
      imageUrl: "../../assets/category-images/autumn/pumpkin.svg"
    },
    {
      categoryId: 3,
      name: "Acorns",
      translation: "Жёлуди",
      imageUrl: "../../assets/category-images/autumn/acorn.svg"
    },
    {
      categoryId: 3,
      name: "Maple Leafs",
      translation: "Клиновые листья",
      imageUrl: "../../assets/category-images/autumn/maple-leaf.svg"
    },
    {
      categoryId: 3,
      name: "Jam",
      translation: "Варенье",
      imageUrl: "../../assets/category-images/autumn/jam.svg"
    },
    {
      categoryId: 3,
      name: "Gloves",
      translation: "Перчатки",
      imageUrl: "../../assets/category-images/autumn/gloves.svg"
    },
    {
      categoryId: 3,
      name: "Umbrella",
      translation: "Зонтик",
      imageUrl: "../../assets/category-images/autumn/umbrella.svg"
    },
    {
      categoryId: 4,
      name: "Avocado",
      translation: "Авокадо",
      imageUrl: "../../assets/category-images/food/avocado.svg"
    },
    {
      categoryId: 4,
      name: "Cheese",
      translation: "Сыр",
      imageUrl: "../../assets/category-images/food/cheese.svg"
    },
    {
      categoryId: 4,
      name: "Carrot",
      translation: "Морковь",
      imageUrl: "../../assets/category-images/food/carrot.svg"
    },
    {
      categoryId: 4,
      name: "Celery",
      translation: "Сельдерей",
      imageUrl: "../../assets/category-images/food/celery.svg"
    },
    {
      categoryId: 4,
      name: "Radishes",
      translation: "Редис",
      imageUrl: "../../assets/category-images/food/radishes.svg"
    },
    {
      categoryId: 4,
      name: "Eggplant",
      translation: "Баклажан",
      imageUrl: "../../assets/category-images/food/eggplant.svg"
    },
    {
      categoryId: 4,
      name: "Egg",
      translation: "Яйцо",
      imageUrl: "../../assets/category-images/food/eggs.svg"
    },
    {
      categoryId: 4,
      name: "Peas",
      translation: "Горох",
      imageUrl: "../../assets/category-images/food/peas.svg"
    },
    {
      categoryId: 4,
      name: "Potatoes",
      translation: "Картофель",
      imageUrl: "../../assets/category-images/food/potatos.svg"
    },
    {
      categoryId: 4,
      name: "Squash",
      translation: "Кабачок",
      imageUrl: "../../assets/category-images/food/squash.svg"
    },
    {
      categoryId: 4,
      name: "Tomato",
      translation: "Помидоры",
      imageUrl: "../../assets/category-images/food/tomato.svg"
    },
    {
      categoryId: 4,
      name: "Cabbage",
      translation: "Капуста",
      imageUrl: "../../assets/category-images/food/cabbage.svg"
    },
    {
      categoryId: 4,
      name: "Bell Pepper",
      translation: "Перец",
      imageUrl: "../../assets/category-images/food/bell-pepper.svg"
    },
    {
      categoryId: 5,
      name: "Chair",
      translation: "Стул",
      imageUrl: "../../assets/category-images/home/chair.svg"
    },
    {
      categoryId: 5,
      name: "Fridge",
      translation: "Холодильник",
      imageUrl: "../../assets/category-images/home/fridge.svg"
    },
    {
      categoryId: 5,
      name: "Alarm Clock",
      translation: "Будильник",
      imageUrl: "../../assets/category-images/home/alarm-clock.svg"
    },
    {
      categoryId: 5,
      name: "Photo Frame",
      translation: "Фоторамка",
      imageUrl: "../../assets/category-images/home/photo-frame.svg"
    },
    {
      categoryId: 5,
      name: "Washing Machine",
      translation: "Стиральная Машина",
      imageUrl: "../../assets/category-images/home/washing-machine.svg"
    },
    {
      categoryId: 5,
      name: "Vase",
      translation: "Ваза",
      imageUrl: "../../assets/category-images/home/vase.svg"
    },
    {
      categoryId: 5,
      name: "Sofa",
      translation: "Диван",
      imageUrl: "../../assets/category-images/home/sofa.svg"
    },
    {
      categoryId: 5,
      name: "Ceiling Lamp",
      translation: "Люстра",
      imageUrl: "../../assets/category-images/home/ceiling-lamp.svg"
    },
    {
      categoryId: 5,
      name: "Night Stand",
      translation: "Прикроватная тумбочка",
      imageUrl: "../../assets/category-images/home/night-stand.svg"
    },
    {
      categoryId: 5,
      name: "Table Lamp",
      translation: "Настольная лампа",
      imageUrl: "../../assets/category-images/home/table-lamp.svg"
    },
    {
      categoryId: 6,
      name: "Head",
      translation: "Голова",
      imageUrl: "../../assets/category-images/body/head.svg"
    },
    {
      categoryId: 6,
      name: "Neck",
      translation: "Шея",
      imageUrl: "../../assets/category-images/body/neck.svg"
    },
    {
      categoryId: 6,
      name: "Back",
      translation: "Спина",
      imageUrl: "../../assets/category-images/body/back.svg"
    },
    {
      categoryId: 6,
      name: "Hand",
      translation: "Рука",
      imageUrl: "../../assets/category-images/body/hand.svg"
    },
    {
      categoryId: 6,
      name: "Ear",
      translation: "Ухо",
      imageUrl: "../../assets/category-images/body/ear.svg"
    },
    {
      categoryId: 6,
      name: "Nose",
      translation: "Нос",
      imageUrl: "../../assets/category-images/body/nose.svg"
    },
    {
      categoryId: 6,
      name: "Leg",
      translation: "Нога",
      imageUrl: "../../assets/category-images/body/leg.svg"
    },
    {
      categoryId: 6,
      name: "Elbow",
      translation: "Локоть",
      imageUrl: "../../assets/category-images/body/elbow.svg"
    },
    {
      categoryId: 7,
      name: "Sand Castle",
      translation: "Замок из песка",
      imageUrl: "../../assets/category-images/summer/sand-castle.svg"
    },
    {
      categoryId: 7,
      name: "Fish",
      translation: "Рыба",
      imageUrl: "../../assets/category-images/summer/fish.svg"
    },
    {
      categoryId: 7,
      name: "Fruits",
      translation: "Фрукты",
      imageUrl: "../../assets/category-images/summer/fruits.svg"
    },
    {
      categoryId: 7,
      name: "Fins",
      translation: "Ласты",
      imageUrl: "../../assets/category-images/summer/fins.svg"
    },
    {
      categoryId: 7,
      name: "Sunshine",
      translation: "Солнечный свет",
      imageUrl: "../../assets/category-images/summer/sunshine.svg"
    },
    {
      categoryId: 7,
      name: "Sand Bucket",
      translation: "Ведро с песком",
      imageUrl: "../../assets/category-images/summer/sand-bucket.svg"
    },
    {
      categoryId: 7,
      name: "Ice-cream",
      translation: "Мороженое",
      imageUrl: "../../assets/category-images/summer/ice-cream.svg"
    },
    {
      categoryId: 7,
      name: "Swimming Pool",
      translation: "Мороженое",
      imageUrl: "../../assets/category-images/summer/swimming-pool.svg"
    },
    {
      categoryId: 8,
      name: "Moon",
      translation: "Луна",
      imageUrl: "../../assets/category-images/space/moon.svg"
    },
    {
      categoryId: 8,
      name: "Satellite Dish",
      translation: "Спутниковая тарелка",
      imageUrl: "../../assets/category-images/space/satellite-dish.svg"
    },
    {
      categoryId: 8,
      name: "Sputnik",
      translation: "Спутник",
      imageUrl: "../../assets/category-images/space/sputnik.svg"
    },
    {
      categoryId: 8,
      name: "Telescope",
      translation: "Телескоп",
      imageUrl: "../../assets/category-images/space/telescope.svg"
    },
    {
      categoryId: 8,
      name: "Jupiter",
      translation: "Юпитер",
      imageUrl: "../../assets/category-images/space/jupiter.svg"
    },
    {
      categoryId: 8,
      name: "Space Capsule",
      translation: "Космическая капсула",
      imageUrl: "../../assets/category-images/space/space-capsule.svg"
    },
    {
      categoryId: 8,
      name: "Constellation",
      translation: "Созвездие",
      imageUrl: "../../assets/category-images/space/constellation.svg"
    },
    {
      categoryId: 8,
      name: "Neptune",
      translation: "Нептун",
      imageUrl: "../../assets/category-images/space/neptune.svg"
    },
  ];

  constructor() { }

  public getCategories() {
    return this.myCards;
  }
  public getInnerCategory(categoryId: number): any[] {
    return this.myInnerCards.filter(card => card.categoryId === categoryId);
  }
}
