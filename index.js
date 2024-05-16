let nome = prompt("Qual o teu Nome?");
let xp = prompt("Quanto tu tens de XP?");
let nvl = 0;

if(xp <= 1000){
	nvl = "Ferro"};
if(xp > 1000){
	nvl = "Bronze"};
if(xp > 2000){
        nvl = "Prata"};
if(xp > 5000){
        nvl = "Ouro"};
if(xp > 7000){
        nvl = "Platina"};
if(xp > 8000){
	nvl = "Ascendente"};
if(xp > 9000){
        nvl = "Imortal"};
if(xp > 10000){
	nvl = "Radiante"};

console.log("O Herói de nome "+nome+" está no nível de "+nvl);
