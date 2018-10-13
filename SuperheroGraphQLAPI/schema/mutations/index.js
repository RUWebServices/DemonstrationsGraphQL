module.exports = `
    type Mutation {
        createSuperheroWithInput(input: SuperheroInput!): Superhero!
        createSuperhero(name: String!, powers: String): Superhero!
        updateSuperhero(id: String!, powers: String!): Superhero!
        deleteSuperhero(id: String!): Boolean!
    }
`;
