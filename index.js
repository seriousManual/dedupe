var ce = require('cloneextend');

function dedupe(client, hasher) {
    hasher = hasher || JSON.stringify;

    var clone = ce.clone(client);

    var lookup = {};

    var cloneIndex = 0;
    for(var i = 0; i < client.length; i++, cloneIndex++) {
        var elem = client[i];
        var hashed = hasher(elem);

        if(lookup[hashed]) {
            clone.splice(cloneIndex, 1);
            cloneIndex--;
        } else {
            lookup[hashed] = true;
        }
    }

    return clone;
}

module.exports = dedupe;