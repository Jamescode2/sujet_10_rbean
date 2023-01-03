function indexByLen(array) {
    let hash = {};
    for (let i = 0; i < array.length; i++) {
        hash[array[i].length] = [];
    }
    for (let i = 0; i < array.length; i++) {
        if (!hash[array[i].length].includes(array[i])) {
            hash[array[i].length].push(array[i]);
        }
    }
    for (const key in hash) {
        hash[key].sort();
    }
    return hash;
}

module.exports = indexByLen; 