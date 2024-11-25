function solution(phone_number) {
  const arrPhoneNumber = Array.from(phone_number);

  for (let i = 0; i < phone_number.length - 4; i++) {
    arrPhoneNumber[i] = "*";
  }

  return arrPhoneNumber.join("");
}

console.log(solution("01033334444"));
