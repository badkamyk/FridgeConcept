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
        description: 'Szklanka ma u mnie pojemno???? 250 ml. Na dwa kilogramy ma??ych og??rk??w gruntowych u??y??am sze???? s??oik??w o pojemno??ci 900 ml ka??dy.Kalorie policzone zosta??y na podstawie u??ytych przeze mnie sk??adnik??w. Jest to wi??c orientacyjna ilo???? kalorii liczona na podstawie produkt??w, kt??rych u??y??am w danym przepisie. Z podanej ilo??ci sk??adnik??w otrzymasz 6 du??ych s??oik??w pysznych og??rk??w konserwowych.Warto ka??dego roku uzupe??ni?? zapasy na domowe przetwory. Z do??wiadczenia wiem, ??e og??rki konserwowe znikaj?? ze spi??arki jaki jedne z pierwszych. Takie og??rki zajadamy nie tylko na kanapkach. S?? ??wietne jako dodatek do sa??atek, domowych past warzywnych lub rybnych. S?? najlepsze do tatara oraz past do jajek faszerowanych.' ,
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
