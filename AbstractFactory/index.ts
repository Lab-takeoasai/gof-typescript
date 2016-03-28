/*
文字列などを使って動的に読み込むclassを変更できる強み
=> 近年の静的型付け言語の流行に逆行する
*/

class AbstStore {
    static getStore(name: string) {
        if (name === "711") {
            return new SevenEleven();
        }
        return new Lowson();
    }
}
class Lowson {
    name = "ローソン";
}
class SevenEleven {
    name = "セブンイレブン";
}

const a = AbstStore.getStore("711");
const b = AbstStore.getStore("7110");

console.log(a);
console.log(b);
