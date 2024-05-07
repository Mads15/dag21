/*
[] er array
{} er object
*/

const myAPI = [
    {frukt: "Epple", godt: "ja"},
    {frukt: "Banan", godt: "nei"},
    {frukt: "Appelsin", godt: "ja"}
];


console.log(myAPI[1].frukt);
console.log(myAPI[1].godt);

const KatteFakta = [
    {Fakta: "Katter er best", length: "14"},
    {Fakta: "Katter har fire foter", length: "21"}
];

console.log(KatteFakta[1].Fakta);

async function KatteFaktaGenerator() {
    const response = await fetch("https://catfact.ninja/facts");
    const KatteFaktaData = await response.json();
    console.log(KatteFaktaData.data[0].fact);
};

KatteFaktaGenerator()