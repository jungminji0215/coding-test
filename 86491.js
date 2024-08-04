function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  sizes.forEach((arr) => {
    let [width, height] = arr[0] > arr[1] ? arr : [arr[1], arr[0]];
    if (width > maxWidth) maxWidth = width;
    if (height > maxHeight) maxHeight = height;
  });

  return maxWidth * maxHeight;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
