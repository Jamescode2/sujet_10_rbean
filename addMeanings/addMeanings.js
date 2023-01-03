function addMeanings(str, hash) {
    let s = '';
    let tab = str.split(' ');
    for (let i = 0; i < tab.length; i++) {
        if (hash[tab[i]] !== undefined) {
            if (i === tab.length-1) {
                s +=tab[i]+' ('+hash[tab[i]]+')';
            } else {
                s +=tab[i]+' ('+hash[tab[i]]+') ';
            }
        } else {
            if (i === tab.length-1) {
                s += tab[i];
            } else {
                s += tab[i]+' ';
            }
            
        }
    }
    return s;
}

module.exports = addMeanings;