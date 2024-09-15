function calculate() {
  // Khai bao phan tu o input vao bien input
  const principalInput = document.getElementById("principal");
  const rateInput = document.getElementById("rate");
  const yearsInput = document.getElementById("years");
  const totalAmount = document.getElementById("total-amount");

  // chuyen thanh kieu so va gan gia tri dung .value
  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value / 100);
  let years = Number(yearsInput.value);

  // neu la so am hoac k phai so NaN thi dat = 0
  if(principal < 0 || isNaN(principal)) {
    principal = 0;
    principalInput.value = 0;
  }

  if(rate < 0 || isNaN(rate)) {
    rate = 0;
    rateInput.value = 0;
  }

  if(years < 0 || isNaN(years)) {
    years = 0;
    yearsInput.value = 0;
  }

   // Kiểm tra nếu bất kỳ giá trị nào âm, đặt totalAmount là 0
   if (principal === 0 || rate === 0 || years === 0) {
    totalAmount.textContent = (0).toLocaleString(undefined, {
      style: "currency",
      currency: "VND"
    });
    return; // Dừng tính toán nếu có giá trị âm
  }

  // tra ket qua result = cong thuc
  const result = principal * Math.pow((1 + rate / 1), 1 * years);

  // hien thi ket qua voi dang tien te dung toLocaleString
  totalAmount.textContent = result.toLocaleString(undefined, {
    style: "currency",
    currency: "USD"
  });



}