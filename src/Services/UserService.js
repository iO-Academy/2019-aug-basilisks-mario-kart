
/**
 * Adds a new user to the db collection 'mario-kart-users'
 *
 * @param db database connection
 *
 * @param newUser object container new user data
 *
 * @param callback function
 *
 */
addUser = (db, newUser, callback) => {
    db.collection('mario-kart-users').insertOne(newUser, (err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

/**
 * Gets all users from db collection 'mario-kart-users'
 *
 * @param db database connection
 *
 * @param callback function
 *
 */
getUsers = (db, callback) => {
    db.collection('mario-kart-users').find().toArray((err, documents) => {
        if (err) {
            throw err;
        }
        callback(documents)
    })
};

/**
 * Gets a single user from db collection 'mario-kart-users'
 *
 * @param db database connection
 *
 * @param id  mongodb ObjectId of user
 *
 * @param callback function
 *
 */
getUserById = (db, id, callback) => {
    db.collection("mario-kart-users").findOne({"_id": id}, (err, documents) => {
        if (err) {
            throw err;
        }
            
        callback(documents);
    })
};

getUserResults = (db, name, callback) => {
    db.collection('mario-kart-users').findOne({'name': name}, {tracks: 1}, (err, document) => {
        if(err) {
            throw err;
        }

        callback(document);
    })
};

module.exports.addUser = addUser;
module.exports.getUsers = getUsers;
module.exports.getUserById = getUserById;
module.exports.getUserResults = getUserResults;