const db = require('../data/db');

module.exports = {
    queries: {
        allCharacters: () => {
            return db.characters;
        }
    },
    mutations: {
        createCharacter: (parent, args) => {
            const newCharacter = {
                id: args.input.name.toLowerCase().replace(' ', '-'),
                name: args.input.name,
                description: args.input.description
            };
            db.characters.push(newCharacter);
            return newCharacter;
        },
        updateCharacter: (parent, args) => {
            const character = db.characters.find(c => c.id === args.id);

            // Update description
            character.description = args.description;

            return character;
        },
        deleteCharacter: (parent, args) => {
            const character = db.characters.find(c => c.id === args.id);
            const index = db.characters.indexOf(character);

            db.characters.splice(index, 1);

            return true;
        }
    }
};
