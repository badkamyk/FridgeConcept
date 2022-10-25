import {v4 as uuidv4} from 'uuid';

const tags = ["lunch", "vegan", "meat"]

const recipesData = [
    {
        id: 'Pasta',
        productName: 'Pasta',
        tags: ['italian', 'pasta', 'lunch'],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        description: 'Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. It is also commonly used to refer to the variety of pasta dishes.',
        ingredients: [
            {
                id: uuidv4(),
                productName: 'Pasta',
                amount: 500,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Tomato Sauce',
                amount: 300,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Cheese',
                amount: 200,
                chosenMeasure: 'g'

            },
        ]
    },
    {
        id: 'Pizza with ham',
        productName: 'Pizza with ham',
        tags: ['italian', 'dinner', 'meat'],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        description: 'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven.',
        ingredients: [
            {
                id: uuidv4(),
                productName: 'Pizza Dough',
                amount: 800,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Tomato Sauce',
                amount: 500,
                chosenMeasure: 'ml'
            },
            {
                id: uuidv4(),
                productName: 'Cheese',
                amount: 300,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Ham',
                amount: 200,
                chosenMeasure: 'g'
            },
        ]
    },
    {
        id: "mushroom",
        productName: 'Pizza with mushrooms',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        tags: ['italian', 'dinner'],
        description: 'Szklanka ma u mnie pojemność 250 ml. Na dwa kilogramy małych ogórków gruntowych użyłam sześć słoików o pojemności 900 ml każdy.Kalorie policzone zostały na podstawie użytych przeze mnie składników. Jest to więc orientacyjna ilość kalorii liczona na podstawie produktów, których użyłam w danym przepisie. Z podanej ilości składników otrzymasz 6 dużych słoików pysznych ogórków konserwowych.Warto każdego roku uzupełnić zapasy na domowe przetwory. Z doświadczenia wiem, że ogórki konserwowe znikają ze spiżarki jaki jedne z pierwszych. Takie ogórki zajadamy nie tylko na kanapkach. Są świetne jako dodatek do sałatek, domowych past warzywnych lub rybnych. Są najlepsze do tatara oraz past do jajek faszerowanych.' ,
        ingredients: [
            {
                id: uuidv4(),
                productName: 'Pizza Dough',
                amount: 800,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Tomato Sauce',
                amount: 500,
                chosenMeasure: 'ml'
            },
            {
                id: uuidv4(),
                productName: 'Cheese',
                amount: 300,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Mushrooms',
                amount: 200,
                chosenMeasure: 'g'
            },
        ]
    },
    {
        id: 'Pizza with pineapple',
        productName: 'Pizza with pineapple',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
        tags: ['italian', 'dinner', 'vegan'],
        description: 'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven.',
        ingredients: [
            {
                id: uuidv4(),
                productName: 'Pizza Dough',
                amount: 800,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Tomato Sauce',
                amount: 500,
                chosenMeasure: 'ml'
            },
            {
                id: uuidv4(),
                productName: 'Cheese',
                amount: 300,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Pineapple',
                amount: 200,
                chosenMeasure: 'g'
            },
        ]
    },
    {
        id: uuidv4(),
        productName: 'Pizza with olives',
        tags: ['italian', 'dinner', 'vegan', 'lunch'],
        description: 'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven.',
        ingredients: [
            {
                id: uuidv4(),
                productName: 'Pizza Dough',
                amount: 800,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Tomato Sauce',
                amount: 500,
                chosenMeasure: 'ml'
            },
            {
                id: uuidv4(),
                productName: 'Cheese',
                amount: 300,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Olives',
                amount: 200,
                chosenMeasure: 'g'
            },
        ]
    },
    {
        id: uuidv4(),
        productName: 'Pizza with pepperoni',
        tags: ['italian', 'dinner', 'meat', 'lunch'],
        description: 'Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven.',
        ingredients: [
            {
                id: uuidv4(),
                productName: 'Pizza Dough',
                amount: 800,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Tomato Sauce',
                amount: 500,
                chosenMeasure: 'ml'
            },
            {
                id: uuidv4(),
                productName: 'Cheese',
                amount: 300,
                chosenMeasure: 'g'
            },
            {
                id: uuidv4(),
                productName: 'Pepperoni',
                amount: 200,
                chosenMeasure: 'g'
            },
        ]
    }
];


export {recipesData, tags};
