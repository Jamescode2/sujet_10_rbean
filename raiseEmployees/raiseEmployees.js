
function raiseEmployees(hash) {
    for (const key in hash) {
        let titre = hash[key]['title'];
        if (titre.charAt(0) !== 'C' || titre.charAt(titre.length-1) !== "O") {
            hash[key]['salary']+=100;
        }
    }
    return hash;
}

module.exports = raiseEmployees;