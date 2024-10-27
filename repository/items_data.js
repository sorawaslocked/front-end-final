const ITEMS_FROM_DB = [
    {
        id: 1,
        description: "Чипсы Lays Чили и лайм 200г",
        price: 700,
        quantity: {type: "single", count: 1},
        category: {simple: "snacks", full: "Конфеты, печенье, снеки"},
        discountPercent: 0,
        imageUrl: "images/candies-cookies-snacks/lays_chili_lime.jpg"
    },
    {
        id: 2,
        description: "Яшкино печенье американское 200г",
        price: 500,
        quantity: {type: "single", count: 1},
        category: {simple: "snacks", full: "Конфеты, печенье, снеки"},
        discountPercent: 0,
        imageUrl: "images/candies-cookies-snacks/yashkino-cookies.png"
    },
    {
        id: 3,
        description: "Конфеты барбарис",
        price: 1440,
        quantity: {type: "whole", count: 1},
        category: {simple: "snacks", full: "Конфеты, печенье, снеки"},
        discountPercent: 10,
        imageUrl: "images/candies-cookies-snacks/barbaris.png"
    },
    {
        id: 4,
        description: "Конфеты Milky Splash",
        price: 1600,
        quantity: {type: "whole", count: 1},
        category: {simple: "snacks", full: "Конфеты, печенье, снеки"},
        discountPercent: 0,
        imageUrl: "images/candies-cookies-snacks/milky-splash.jpg"
    },
    {
        id: 5,
        description: "Чипсы Pringles Texas BBQ 165г",
        price: 1900,
        quantity: {type: "single", count: 1},
        category: {simple: "snacks", full: "Конфеты, печенье, снеки"},
        discountPercent: 0,
        imageUrl: "images/candies-cookies-snacks/pringles-texas-bbq.jpg"
    },
    {
        id: 6,
        description: "Домашний хлеб",
        price: 400,
        quantity: {type: "single", count: 1},
        category: {simple: "bread", full: "Хлеб, выпечка"},
        discountPercent: 0,
        imageUrl: "images/bread-baked/bread-baked.jpg"
    },
    {
        id: 7,
        description: "Белый Хлеб",
        price: 300,
        quantity: {type: "single", count: 1},
        category: {simple: "bread", full: "Хлеб, выпечка"},
        discountPercent: 0,
        imageUrl: "images/bread-baked/bread1.png"
    },
    {
        id: 8,
        description: "Ржаной Хлеб",
        price: 350,
        quantity: {type: "single", count: 1},
        category: {simple: "bread", full: "Хлеб, выпечка"},
        discountPercent: 0,
        imageUrl: "images/bread-baked/bread2.png"
    },
    {
        id: 9,
        description: "Орехово Шоколадный Торт",
        price: 400,
        quantity: {type: "whole", count: 1},
        category: {simple: "bread", full: "Хлеб, выпечка"},
        discountPercent: 0,
        imageUrl: "images/bread-baked/cake2.jpg"
    },
    {
        id: 10,
        description: "Тирамису",
        price: 5900,
        quantity: {type: "single", count: 1},
        category: {simple: "bread", full: "Хлеб, выпечка"},
        discountPercent: 0,
        imageUrl: "images/bread-baked/tiramisu.png"
    },
    {
        id: 11,
        description: "Торт Наполеон 1кг",
        price: 6500,
        quantity: {type: "single", count: 1},
        category: {simple: "bread", full: "Хлеб, выпечка"},
        discountPercent: 0,
        imageUrl: "images/bread-baked/napoleon.jpg"
    },
    {
        id: 12,
        description: "Торт Вупи Пай 1кг",
        price: 7500,
        quantity: {type: "single", count: 1},
        category: {simple: "bread", full: "Хлеб, выпечка"},
        discountPercent: 0,
        imageUrl: "images/bread-baked/v_pie.jpg"
    },
    {
        id: 13,
        description: "Миндальное молоко Alpro без сахара 1л",
        price: 2695,
        quantity: {type: "single", count: 1},
        category: {simple: "milk", full: "Молочные продукты, яйца"},
        discountPercent: 0,
        imageUrl: "images/dairy-eggs/alpro.png"
    },
    {
        id: 14,
        description: "Яйцо Казгер-Кус Элит куриные 10 шт",
        price: 755,
        quantity: {type: "single", count: 1},
        category: {simple: "milk", full: "Молочные продукты, яйца"},
        discountPercent: 0,
        imageUrl: "images/dairy-eggs/eggs.png"
    },
    {
        id: 15,
        description: "Молоко Lactel с витамином D 1,5% 1 л",
        price: 680,
        quantity: {type: "single", count: 1},
        category: {simple: "milk", full: "Молочные продукты, яйца"},
        discountPercent: 0,
        imageUrl: "images/dairy-eggs/lactel.png"
    },
    {
        id: 16,
        description: "Сметана Простоквашино 15% 300 г",
        price: 1060,
        quantity: {type: "single", count: 1},
        category: {simple: "milk", full: "Молочные продукты, яйца"},
        discountPercent: 0,
        imageUrl: "images/dairy-eggs/smetana.png"
    },
    {
        id: 17,
        description: "Творог President 450г 9% жир.",
        price: 1250,
        quantity: {type: "single", count: 1},
        category: {simple: "milk", full: "Молочные продукты, яйца"},
        discountPercent: 0,
        imageUrl: "images/dairy-eggs/president_t.jpg"
    },
    {
        id: 18,
        description: "Ташкентские Лимоны",
        price: 1040,
        quantity: {type: "whole", count: 1},
        category: {simple: "fruits", full: "Фрукты, ягоды"},
        discountPercent: 0,
        imageUrl: "images/fruits-berries/tashkent_lemon.png"
    },
    {
        id: 19,
        description: "Голубика",
        price: 6100,
        quantity: {type: "whole", count: 1},
        category: {simple: "fruits", full: "Фрукты, ягоды"},
        discountPercent: 0,
        imageUrl: "images/fruits-berries/bluebary.png"
    },
    {
        id: 20,
        description: "Клубника Вивара",
        price: 5800,
        quantity: {type: "single", count: 1},
        category: {simple: "fruits", full: "Фрукты, ягоды"},
        discountPercent: 0,
        imageUrl: "images/fruits-berries/strawbery.png"
    },
    {
        id: 21,
        description: "Груша Лесная красавица",
        price: 720,
        quantity: {type: "whole", count: 1},
        category: {simple: "fruits", full: "Фрукты, ягоды"},
        discountPercent: 0,
        imageUrl: "images/fruits-berries/grusha.png"
    },
    {
        id: 22,
        description: "Рис 1кг",
        price: 500,
        quantity: {type: "single", count: 1},
        category: {simple: "grain", full: "Крупы, макароны"},
        discountPercent: 0,
        imageUrl: "images/grain-pasta/rice.jpg"
    },
    {
        id: 23,
        description: "Пшено 800г",
        price: 350,
        quantity: {type: "single", count: 1},
        category: {simple: "grain", full: "Крупы, макароны"},
        discountPercent: 0,
        imageUrl: "images/grain-pasta/millet.jpg"
    },
    {
        id: 24,
        description: "Гречка 1кг",
        price: 480,
        quantity: {type: "single", count: 1},
        category: {simple: "grain", full: "Крупы, макароны"},
        discountPercent: 0,
        imageUrl: "images/grain-pasta/buckwheat.jpg"
    },
    {
        id: 25,
        description: "Горох Айдахо 1кг",
        price: 380,
        quantity: {type: "single", count: 1},
        category: {simple: "grain", full: "Крупы, макароны"},
        discountPercent: 0,
        imageUrl: "images/grain-pasta/peac.jpg"
    },
    {
        id: 26,
        description: "linguine",
        price: 400,
        quantity: {type: "single", count: 1},
        category: {simple: "grain", full: "Крупы, макароны"},
        discountPercent: 0,
        imageUrl: "images/grain-pasta/pasta.jpg"
    },
    {
        id: 27,
        description: "Lasagnette",
        price: 550,
        quantity: {type: "single", count: 1},
        category: {simple: "grain", full: "Крупы, макароны"},
        discountPercent: 0,
        imageUrl: "images/grain-pasta/pasta1.jpg"
    },
    {
        id: 28,
        description: "Girandole",
        price: 600,
        quantity: {type: "single", count: 1},
        category: {simple: "grain", full: "Крупы, макароны"},
        discountPercent: 0,
        imageUrl: "images/grain-pasta/pasta_5.jpg"
    },
    {
        id: 29,
        description: "Актуаль Персик-маракуйя 1л",
        price: 1050,
        quantity: {type: "single", count: 1},
        category: {simple: "drinks", full: "Соки, напитки"},
        discountPercent: 0,
        imageUrl: "images/drinks/actual_peach_passionfruit.jpg"
    },
    {
        id: 30,
        description: "Чернослив и слива",
        price: 420,
        quantity: {type: "single", count: 1},
        category: {simple: "drinks", full: "Соки, напитки"},
        discountPercent: 0,
        imageUrl: "images/drinks/compote1.jpg"
    },
    {
        id: 31,
        description: "Аревик - Компот из кизила",
        price: 400,
        quantity: {type: "single", count: 1},
        category: {simple: "drinks", full: "Соки, напитки"},
        discountPercent: 0,
        imageUrl: "images/drinks/compote2.jpg"
    },
    {
        id: 32,
        description: "Натуральные соки 0,35л",
        price: 600,
        quantity: {type: "single", count: 1},
        category: {simple: "drinks", full: "Соки, напитки"},
        discountPercent: 0,
        imageUrl: "images/drinks/drinks.jpg"
    },
    {
        id: 33,
        description: "сок Добрый Мультифрукт",
        price: 900,
        quantity: {type: "single", count: 1},
        category: {simple: "drinks", full: "Соки, напитки"},
        discountPercent: 0,
        imageUrl: "images/drinks/nectar.jpg"
    },
    {
        id: 34,
        description: "Апельсиновый Сок Добрыня 1л",
        price: 900,
        quantity: {type: "single", count: 1},
        category: {simple: "drinks", full: "Соки, напитки"},
        discountPercent: 0,
        imageUrl: "images/drinks/sok_orange.jpg"
    },
    {
        id: 35,
        description: "Филе семги охлажденное",
        price: 5940,
        quantity: {type: "whole", count: 1},
        category: {simple: "fish", full: "Рыба, морепродукты"},
        discountPercent: 0,
        imageUrl: "images/fish-seafood/salmon-fillet.png"
    },
    {
        id: 36,
        description: "Сибас охлажденный",
        price: 7000,
        quantity: {type: "whole", count: 1},
        category: {simple: "fish", full: "Рыба, морепродукты"},
        discountPercent: 0,
        imageUrl: "images/fish-seafood/seabass.jpg"
    },
    {
        id: 37,
        description: "Филе судака охлажденное",
        price: 7200,
        quantity: {type: "whole", count: 1},
        category: {simple: "fish", full: "Рыба, морепродукты"},
        discountPercent: 0,
        imageUrl: "images/fish-seafood/sudak-phillet.jpg"
    },
    {
        id: 38,
        description: "Креветки",
        price: 10100,
        quantity: {type: "whole", count: 1},
        category: {simple: "fish", full: "Рыба, морепродукты"},
        discountPercent: 0,
        imageUrl: "images/fish-seafood/shrimps.jpg"
    },
    {
        id: 39,
        description: "Икра лососевая",
        price: 5900,
        quantity: {type: "single", count: 1},
        category: {simple: "fish", full: "Рыба, морепродукты"},
        discountPercent: 0,
        imageUrl: "images/fish-seafood/caviar.jpg"
    },
    {
        id: 40,
        description: "КусВкус бедро цыпленка",
        price: 1140,
        quantity: {type: "whole", count: 1},
        category: {simple: "meat", full: "Мясо, птица"},
        discountPercent: 0,
        imageUrl: "images/meat-poultry/kusvkus-chicken-thighs.jpg"
    },
    {
        id: 41,
        description: "КусВкус грудка курицы",
        price: 1100,
        quantity: {type: "whole", count: 1},
        category: {simple: "meat", full: "Мясо, птица"},
        discountPercent: 0,
        imageUrl: "images/meat-poultry/kusvkus-chicken-breast.jpg"
    },
    {
        id: 42,
        description: "КусВкус ножки куриные",
        price: 950,
        quantity: {type: "whole", count: 1},
        category: {simple: "meat", full: "Мясо, птица"},
        discountPercent: 0,
        imageUrl: "images/meat-poultry/kusvkus-chicken-legs.jpg"
    },
    {
        id: 43,
        description: "Kazbeef фарш",
        price: 1800,
        quantity: {type: "whole", count: 1},
        category: {simple: "meat", full: "Мясо, птица"},
        discountPercent: 0,
        imageUrl: "images/meat-poultry/kazbeef-groundbeef.jpg"
    },
    {
        id: 44,
        description: "Kazbeef рибай",
        price: 2200,
        quantity: {type: "whole", count: 1},
        category: {simple: "meat", full: "Мясо, птица"},
        discountPercent: 0,
        imageUrl: "images/meat-poultry/kazbeef-ribeye.jpeg"
    },
    {
        id: 45,
        description: "Капуста цветная",
        price: 1920,
        quantity: {type: "whole", count: 1},
        category: {simple: "veggies", full: "Овощи, зелень"},
        discountPercent: 0,
        imageUrl: "images/vegetables-herbs/kapusta_cvetnaya.png"
    },
    {
        id: 46,
        description: "Помидоры красные",
        price: 800,
        quantity: {type: "whole", count: 1},
        category: {simple: "veggies", full: "Овощи, зелень"},
        discountPercent: 0,
        imageUrl: "images/vegetables-herbs/pomidor.png"
    },
    {
        id: 47,
        description: "Картофель",
        price: 380,
        quantity: {type: "whole", count: 1},
        category: {simple: "veggies", full: "Овощи, зелень"},
        discountPercent: 0,
        imageUrl: "images/vegetables-herbs/kartop.png"
    },
    {
        id: 48,
        description: "Спаржа зеленая",
        price: 1700,
        quantity: {type: "whole", count: 1},
        category: {simple: "veggies", full: "Овощи, зелень"},
        discountPercent: 0,
        imageUrl: "images/vegetables-herbs/sparzha.png"
    },
    {
        id: 49,
        description: "Чай черный 100г",
        price: 300,
        quantity: {type: "single", count: 1},
        category: {simple: "tea", full: "Чай, кофе"},
        discountPercent: 0,
        imageUrl: "images/tea-coffee/tea1.jpg"
    },
    {
        id: 50,
        description: "Чай зеленый 100г",
        price: 350,
        quantity: {type: "single", count: 1},
        category: {simple: "tea", full: "Чай, кофе"},
        discountPercent: 20,
        imageUrl: "images/tea-coffee/tea2.jpg"
    },
    {
        id: 51,
        description: "Кофе арабика 250г",
        price: 900,
        quantity: {type: "single", count: 1},
        category: {simple: "tea", full: "Чай, кофе"},
        discountPercent: 0,
        imageUrl: "images/tea-coffee/cofee.jpg"
    },
    {
        id: 52,
        description: "Кофе робуста",
        price: 750,
        quantity: {type: "single", count: 1},
        category: {simple: "tea", full: "Чай, кофе"},
        discountPercent: 0,
        imageUrl: "images/tea-coffee/coffee2.jpeg"
    }
];