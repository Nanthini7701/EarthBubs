function updateCart() {
  const prices = [800, 700];
  const qtyInputs = document.querySelectorAll(".qty");
  const subtotals = document.querySelectorAll(".subtotal");
  let subtotal = 0;

  qtyInputs.forEach((input, index) => {
    const qty = parseInt(input.value);
    const price = prices[index];
    const itemTotal = qty * price;
    subtotals[index].innerText = `₹${itemTotal}`;
    subtotal += itemTotal;
  });

  document.getElementById("subtotal").innerText = `₹${subtotal}`;
  document.getElementById("discount").innerText = "₹250";
  document.getElementById("total").innerText = `₹${subtotal - 250}`;
}

function applyCoupon() {
  const code = document.getElementById("couponCode").value;
  if (code === "BABY250") {
    alert("Coupon Applied! ₹250 Discount.");
  } else {
    alert("Invalid Coupon Code");
  }
}
function removeItem(btn) {
  const item = btn.parentElement;
  item.remove();
  updateCart();
}
