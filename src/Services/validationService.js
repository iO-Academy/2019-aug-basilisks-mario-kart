charcterArray = ['babyMario', 'babyPeach', 'toad',
    'koopaTroopa', 'mario', 'luigi', 'peach',
    'yoshi', 'wario', 'waluigi', 'donkeyKong',
    'bowser', 'babyDaisy', 'babyLuigi', 'birdo',
    'bowserJunior', 'daisy', 'diddyKong', 'dryBones',
    'dryBowser', 'funkyKing', 'kingBoo',
    'mii', 'rosalina', 'toadette'
];

trackArray = ['luigiCircuit', 'mooMooMeadows', 'mushroomGorge', 'toadsFactory',
    'marioCircuit', 'coconutMall', 'dkPass', 'wariosGoldMine', 'daisyCircuit',
    'koopaCape', 'mapleTreeway', 'grumbleVolcano', 'dryDryRuins', 'moonviewHighway',
    'bowsersCastle', 'rainbowRoad', 'peachBeach', 'yoshiFalls', 'ghostValley2',
    'marioRaceway', 'sherbetLand', 'shyGuyBeach', 'delfinoSquare', 'waluigiStadium',
    'desertHills', 'bowserCastle3', 'dksJungleParkway', 'marioCircuit',
    'marioCircuit3', 'peachGardens', 'dkMountain', 'bowsersCastle'
];

positionArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

/**
 * Takes a string and removes any character that is not a letter
 *
 * @param str string of characters
 *
 * @return string string with only lowercase and uppercase letters a-z
 *
 */
function htmlEntities(str) {
    return String(str).replace(/[^a-zA-Z ]/g, '');
}

/**
 * Takes a string and removes any character that is not a letter or number
 *
 * @param str string of characters
 *
 * @return string string with only numbers and lowercase and uppercase letters
 *
 */
function htmlEntitiesNum(str) {
    return String(str).replace(/[^a-zA-Z0-9 ]/g, '');
}

function validateTracksData(req) {
    let track = htmlEntitiesNum(req.body.trackName);
    let position = req.body.finishPosition;
    if (trackArray.includes(track) && positionArray.includes(position)) {
        return {
            trackName: track,
            finishPosition: position
        }
    }
}

/**
 * Takes a http request and validates and sanitises data from body. Returns validated object of user data
 *
 * @param req HTTP Request
 *
 * @return object of validated user data with object of all tracks for results
 *
 */
function validateUserData (req) {
    let usersName = htmlEntities(req.body.name);
    let character = htmlEntities(req.body.favRacer);
    let userCohort = htmlEntities(req.body.cohort);
    if (charcterArray.includes(character)) {
        return {
            name: usersName,
            favRacer: character,
            cohort: userCohort,
        tracks: {'luigiCircuit' : [], 'mooMooMeadows': [], 'mushroomGorge': [], 'toadsFactory': [],
            'marioCircuit': [], 'coconutMall': [], 'dkPass': [], 'wariosGoldMine': [], 'daisyCircuit': [],
            'koopaCape': [], 'mapleTreeway': [], 'grumbleVolcano': [], 'dryDryRuins': [], 'moonviewHighway': [],
            'bowsersCastle': [], 'rainbowRoad': [], 'peachBeach': [], 'yoshiFalls': [], 'ghostValley2': [],
            'marioRaceway': [], 'sherbetLand': [], 'shyGuyBeach': [], 'delfinoSquare': [], 'waluigiStadium': [],
            'desertHills': [], 'bowserCastle3': [], 'dksJungleParkway': [], 'marioCircuit': [],
            'marioCircuit3': [], 'peachGardens': [], 'dkMountain': [], 'bowsersCastle': []
            }
        }
    }
}

/**
 * Validates and sanitises track name. Returns track name
 *
 * @param track
 *
 * @return validated track name
 *
 */
validateTrack = (track) => {
    track = htmlEntitiesNum(track);
    if (trackArray.includes(track)){
        return track
    }
};

module.exports.validateUserData = validateUserData;
module.exports.validateTrack = validateTrack;
module.exports.validateTracksData = validateTracksData;
