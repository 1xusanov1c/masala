const dollarToSum = 11000.34;
const euroToSum = 12354.03;

const ticketPriceUSD = 500; 
const hotelPriceUSD = 250; 
const museumPriceEuro = 120; 

const totalExpenses =
  (ticketPriceUSD + hotelPriceUSD) * dollarToSum + museumPriceEuro * euroToSum;

const alisherMoney = prompt("Alisher, o'zingda qancha pul borligini kiriting (so'mda):");

if (alisherMoney >= totalExpenses) {
  console.log("Oq yo‘l, Alisher!")
} else {
  console.log("Alisher, ozgina sabr qilish kerak bo‘lar ekan.");
}