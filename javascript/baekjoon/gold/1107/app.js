const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const targetChannel = Number(input[0]); // 목표 채널
  const brokenButtons = input[2].split(" "); // 고장난 버튼

  const isBroken = new Array(10).fill(false);
  brokenButtons.forEach((btn) => (isBroken[btn] = true));

  const maxChannel = 999999; // 가능한 최대 채널 (6자리 숫자까지)
  let minClicks = Math.abs(targetChannel - 100); // 현재 채널 100에서 +/-만으로 이동할 때의 클릭 수

  for (let channel = 0; channel <= maxChannel; channel++) {
    const channelStr = channel.toString();
    let valid = true;

    for (let char of channelStr) {
      if (isBroken[Number(char)]) {
        valid = false;
        break;
      }
    }

    if (valid) {
      const clicks = channelStr.length + Math.abs(channel - targetChannel);
      minClicks = Math.min(minClicks, clicks);
    }
  }

  return minClicks;
}

console.log(solution(input));
