const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const getCookingTime = (hour, minutes, time) => {
  let newMinutes = minutes + time;

  let newHour = hour;

  if (newMinutes > 59) {
    newHour += parseInt(newMinutes / 60);
    newMinutes = newMinutes % 60;
  }

  if (newHour > 23) {
    newHour = newHour - 24;
  }

  return `${newHour} ${newMinutes}`;
};

function solution(input) {
  const [hour, minutes] = input[0].split(" ").map(Number);
  const time = Number(input[1]);

  const result = getCookingTime(hour, minutes, time);

  return result;
}

console.log(solution(input));
