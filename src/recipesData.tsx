import {v4 as uuidv4} from 'uuid';

const tags = ["lunch", "vegan", "meat"]

const recipesData = [
    {
        id: 'Pasta',
        name: 'Pasta',
        tags: ['italian', 'pasta', 'lunch'],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        description: 'Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. It is also commonly used to refer to the variety of pasta dishes.',
        ingredients: [
            {
                id: uuidv4(),
                name: 'Pasta',
                amount: 500,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Tomato Sauce',
                amount: 300,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Cheese',
                amount: 200,
                measurement: 'g'

            },
        ]
    },
    {
        id: 'Pizza with ham',
        name: 'Pizza with ham',
        tags: ['italian', 'dinner', 'meat'],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        description: 'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven.',
        ingredients: [
            {
                id: uuidv4(),
                name: 'Pizza Dough',
                amount: 800,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Tomato Sauce',
                amount: 500,
                measurement: 'ml'
            },
            {
                id: uuidv4(),
                name: 'Cheese',
                amount: 300,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Ham',
                amount: 200,
                measurement: 'g'
            },
        ]
    },
    {
        id: "mushroom",
        name: 'Pizza with mushrooms',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        tags: ['italian', 'dinner'],
        description: 'Szklanka ma u mnie pojemność 250 ml. Na dwa kilogramy małych ogórków gruntowych użyłam sześć słoików o pojemności 900 ml każdy.Kalorie policzone zostały na podstawie użytych przeze mnie składników. Jest to więc orientacyjna ilość kalorii liczona na podstawie produktów, których użyłam w danym przepisie. Z podanej ilości składników otrzymasz 6 dużych słoików pysznych ogórków konserwowych.Warto każdego roku uzupełnić zapasy na domowe przetwory. Z doświadczenia wiem, że ogórki konserwowe znikają ze spiżarki jaki jedne z pierwszych. Takie ogórki zajadamy nie tylko na kanapkach. Są świetne jako dodatek do sałatek, domowych past warzywnych lub rybnych. Są najlepsze do tatara oraz past do jajek faszerowanych.' ,
        ingredients: [
            {
                id: uuidv4(),
                name: 'Pizza Dough',
                amount: 800,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Tomato Sauce',
                amount: 500,
                measurement: 'ml'
            },
            {
                id: uuidv4(),
                name: 'Cheese',
                amount: 300,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Mushrooms',
                amount: 200,
                measurement: 'g'
            },
        ]
    },
    {
        id: 'Pizza with pineapple',
        name: 'Pizza with pineapple',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        tags: ['italian', 'dinner', 'vegan'],
        description: 'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven.',
        ingredients: [
            {
                id: uuidv4(),
                name: 'Pizza Dough',
                amount: 800,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Tomato Sauce',
                amount: 500,
                measurement: 'ml'
            },
            {
                id: uuidv4(),
                name: 'Cheese',
                amount: 300,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Pineapple',
                amount: 200,
                measurement: 'g'
            },
        ]
    },
    {
        id: uuidv4(),
        name: 'Pizza with olives',
        tags: ['italian', 'dinner', 'vegan', 'lunch'],
        description: 'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven.',
        ingredients: [
            {
                id: uuidv4(),
                name: 'Pizza Dough',
                amount: 800,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Tomato Sauce',
                amount: 500,
                measurement: 'ml'
            },
            {
                id: uuidv4(),
                name: 'Cheese',
                amount: 300,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Olives',
                amount: 200,
                measurement: 'g'
            },
        ]
    },
    {
        id: uuidv4(),
        name: 'Pizza with pepperoni',
        tags: ['italian', 'dinner', 'meat', 'lunch'],
        description: 'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven.',
        ingredients: [
            {
                id: uuidv4(),
                name: 'Pizza Dough',
                amount: 800,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Tomato Sauce',
                amount: 500,
                measurement: 'ml'
            },
            {
                id: uuidv4(),
                name: 'Cheese',
                amount: 300,
                measurement: 'g'
            },
            {
                id: uuidv4(),
                name: 'Pepperoni',
                amount: 200,
                measurement: 'g'
            },
        ]
    }
];


export {recipesData, tags};
