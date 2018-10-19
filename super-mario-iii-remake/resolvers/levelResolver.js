const db = require('../data/db');

module.exports = {
    queries: {
        allLevels: () => {
            return db.levels();
        }
    }
}
