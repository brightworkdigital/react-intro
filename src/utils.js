export let developers = ["Abhijeet","Ayushraj","Divin","Edmund","Esra","Rui","Hannah","John","Joshua","Kadri","Maria","Maxwell","Rais","Roney","Samuel","Solonas","Stewart","Thomas"];

export function shuffleArray(originalArray) {
    let array = [...originalArray];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function getRoster() {
    // return shuffleArray(developers);
    return developers;
}

