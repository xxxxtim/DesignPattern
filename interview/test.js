const ninjas = new Set(["Kuma", "Hattori", "Yagyu"]);
const samurai = new Set(["Hattori", "Oda", "Tomoe"]);
const ninjaSamurais = new Set([...ninjas].filter(ninja => samurai.has(ninja)));
console.table(ninjaSamurais);