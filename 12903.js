/**
 * 가운데 글자 가져오기
 */

function solution(s) {
  let index = s.length / 2;

  if (s.length % 2 === 0) {
    return s.substring(index - 1, index + 1);
  } else {
    return s.substring(index, index + 1);
  }
}
