const targetDate =
new Date("July 25, 2026 08:00:00").getTime();

const countdown =
document.getElementById("countdown");

setInterval(() => {

const now = new Date().getTime();

const distance = targetDate - now;

const days =
Math.floor(distance / (1000 * 60 * 60 * 24));

const hours =
Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

countdown.innerHTML =
`
${days} Hari ${hours} Jam Lagi
`;

},1000);