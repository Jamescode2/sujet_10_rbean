function moneyExchange(hash) {
    let newHash = {};
    for (const key in hash) {
        for (const key2 in hash[key]) {
            newHash[key2] = {};
        }
    }
    for (const key in hash) {
        for (const key2 in hash[key]) {
            newHash[key2][key] = Math.floor((100/hash[key][key2]))/100;
        }
    }
    return newHash;
}

module.exports = moneyExchange; 