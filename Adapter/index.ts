/*
 interfaceを同じくする classを同一視する

*/

interface Word {
    word: string;
}
class World implements Word {
    word = "world!";
}
class Earth implements Word {
    word = "earth!";
}
function say(obj: Word) { // Adapter
    console.log(`Hello ${obj.word}`);
}

