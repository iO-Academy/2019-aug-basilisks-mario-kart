const UserService = require('../Services/UserService');
const DbService = require('../Services/DbService');
const validateUserData = require ('../validateUserData');

function addUser (req, res) {
    let newUser = validateUserData(req);
    DbService.connectToDB(((db) => {
        UserService.addUser(db, newUser, (result) => {
            if (result.insertedCount ===1) {
                res.json({success: true, msg: 'added new user to db', data: newUser})
            } else {
                res.json({success: false, msg: 'User not added to db', data: newUser})
            }
        })
    }))
}


module.exports.addUser = addUser;