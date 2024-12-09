const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// hang index 0 cot index 1 = X
// 1 X 3
// 4 5 6
// 7 8 9
matrix[0][1] = 'X';
//lap tung phan tu cua hang cua ma tran
for (let row of matrix) {
  //row.join(' ') noi cac phan tu cua mang row thanh chuoi ngan nhau voi dau cach
  const rowString = row.join(' ');
  console.log(rowString);
}