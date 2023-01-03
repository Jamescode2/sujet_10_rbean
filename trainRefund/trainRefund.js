function trainRefund(hash,hash2) {
    let array = [];
    for (const key in hash) {
        if (hash2[hash[key]]>=60 && hash2[hash[key]] !== undefined) {
            array.push(key);
        }
    }
    return array.sort();
}
module.exports = trainRefund;
