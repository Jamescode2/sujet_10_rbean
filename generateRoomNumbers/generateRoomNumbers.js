function generateRoomNumbers(hash) {
    let array = [];
    for (const key in hash) {
        for (let i = 0; i < hash[key]; i++) {
            array.push(key*100+i);
        }
    }
    return array.sort();
}

module.exports = generateRoomNumbers;