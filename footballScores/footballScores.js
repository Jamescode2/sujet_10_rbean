function footballScores(array) {
    let score = {};
    let classement = [];
    for (let i = 0; i < array.length; i++) {
        score[array[i]['teamB']] = {};
        score[array[i]['teamA']] = {};
    }
    for (let i = 0; i < array.length; i++) {
        score[array[i]['teamB']]['score'] = 0;
        score[array[i]['teamA']]['score'] = 0;
        score[array[i]['teamB']]['différence de buts'] = 0;
        score[array[i]['teamA']]['différence de buts'] = 0;
        score[array[i]['teamB']]['equipe'] = array[i]['teamB'];
        score[array[i]['teamA']]['equipe'] = array[i]['teamA'];
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i]['scoreA'] > array[i]['scoreB']) {
            score[array[i]['teamA']]['score'] += 3;
        } else if (array[i]['scoreB'] > array[i]['scoreA']) {
            score[array[i]['teamB']]['score'] += 3;
        } else if (array[i]['scoreB'] == array[i]['scoreA']) {
            score[array[i]['teamA']]['score'] += 1;
            score[array[i]['teamB']]['score'] += 1;
        }
        score[array[i]['teamA']]['différence de buts'] += array[i]['scoreA'] - array[i]['scoreB'];
        score[array[i]['teamB']]['différence de buts'] += array[i]['scoreB'] - array[i]['scoreA'];
    }
    for (const key in score) {
        classement.push(score[key]);
    }
    function compareScore() {
        classement.sort((a, b) => a.score - b.score).reverse();
    }
    function compareBut() {
        for (let i = 0; i < classement.length; i++) {
            let temp = classement[i];
            for (let j = 0; j < classement.length; j++) {
                if (classement[j]['score'] == temp['score']) {
                    if (j>i && classement[j]['différence de buts']>temp['différence de buts']) {
                        let temp3 = classement[j]['equipe'];
                        classement[j]['equipe'] = temp['equipe'];
                        temp['equipe'] = temp3;
                    }
                }
            }
        }
    }
    function compareEquipe() {
        for (let i = 0; i < classement.length - 1; i++) {
            if (classement[i]['score'] == classement[i + 1]['score']) {
                if (classement[i]['différence de buts'] == classement[i + 1]['différence de buts']) {
                    if (classement[i]['equipe'].localeCompare(classement[i + 1]['equipe']) == -1) {
                        let temp2 = classement[i]['equipe'];
                        classement[i]['equipe'] = classement[i + 1]['equipe'];
                        classement[i + 1]['equipe'] = temp2;
                    }
                }
            }
        }
    }
    compareScore();
    compareBut();
    compareEquipe();

    for (let i = 0; i < classement.length; i++) {
        classement[i] = classement[i]['equipe'];
    }
    return classement;
}

module.exports = footballScores;