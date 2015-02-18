var sigmund = require('sigmund');

function dedupe(client, hasher) {
    hasher = hasher || sigmund;

    var clone = [];
    var lookup = {};

    for (var i = 0; i < client.length; i++) {
        var elem = client[i];
        var hashed = hasher(elem);

        if (!lookup[hashed]) {
            clone.push(elem);
            lookup[hashed] = true;
        }
    }

    return clone;
}

module.exports = dedupe;