function toppingFinder(hash, str) {
    let array = [];
    for (const key in hash) {
        for (let i = 0; i < hash[key].length; i++) {
            if (hash[key][i] === str) {
                array.push(key);
                break;
            }
        }
    }
    return array.sort();
}

module.exports = toppingFinder;