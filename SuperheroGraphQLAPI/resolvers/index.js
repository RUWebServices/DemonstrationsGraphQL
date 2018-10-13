const superheroes = [
    {
        id: 'he-man',
        name: 'He man',
        powers: 'The power of Grayskull!'
    },
    {
        id: 'batman',
        name: 'Batman',
        powers: 'No powers'
    }
];

const generateId = name => name.toLowerCase().replace(' ', '-');

module.exports = {
    Query: {
        getAllSuperheroes: () => superheroes
    },
    Mutation: {
        createSuperheroWithInput: (parent, args) => {
            const { input } = args;
            const newSuperhero = {
                id: generateId(input.name),
                name: input.name,
                powers: input.powers
            };
            superheroes.push(newSuperhero);
            return newSuperhero;
        },
        createSuperhero: (parent, args) => {
            const { name, powers } = args;
            const newSuperhero = {
                id: generateId(name),
                name,
                powers
            };
            superheroes.push(newSuperhero);
            return newSuperhero;
        },
        updateSuperhero: (parent, args) => {
            const { id, powers } = args;
            const result = superheroes.find(sh => sh.id === id);
            if (!result) { throw new Error('Superhero was not found'); }

            // Update properties
            result.powers = powers;

            return result;
        },
        deleteSuperhero: (parent, args) => {
            const { id } = args;
            const result = superheroes.find(sh => sh.id === id);
            if (!result) { throw new Error('Superhero was not found'); }

            const index = superheroes.indexOf(result);
            superheroes.splice(index, 1);

            return true;
        }
    }
}
