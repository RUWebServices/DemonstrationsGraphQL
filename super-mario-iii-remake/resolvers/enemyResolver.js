const db = require('../data/db');
const allEnemies = [ ...db.enemies, ...db.bosses ];

module.exports = {
    queries: {
        allEnemies: () => {
            return allEnemies;
        },
        enemy: (parent, args) => {
            return allEnemies.find(e => e.id === args.id);
        }
    },
    types: {
        BossEnemy: {
            appearsInLevel: parent => {
                return db.levels().then(levels => levels.find(l => l.id === parent.appearsInLevelId))
            }
        },
        Enemy: {
            __resolveType(obj, context, info) {
                if (obj.enemySize) { return 'CommonEnemy'; }
                if (obj.appearsInLevelId) { return 'BossEnemy'; }
            }
        }
    }
};
