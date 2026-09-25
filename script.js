const poshtikMenu = [
  { name: "Jonna Rotte Wrap", price: 60 },
  { name: "Sajja Roti Wrap", price: 60 },
  { name: "Ragi Sangati Bowl", price: 55 },
  { name: "Ragi Idli Bowl", price: 50 },
  { name: "Pesarattu with Sprouts", price: 55 },
  { name: "Ulava Charu Protein Bowl", price: 70 },
  { name: "Gongura Sprouts Salad", price: 45 },
  { name: "Sprouts Moong Chilla", price: 50 },
  { name: "Paneer Protein Bowl", price: 80 },
  { name: "Millet Protein Shake", price: 40 }
];
for (let i = 0; i < poshtikMenu.length; i = i + 1)
{
  console.log(poshtikMenu[i].name + " costs Rs. " + poshtikMenu[i].price);
}
console.log("dishes on the menu: " + poshtikMenu.length);

const checkButton = document.getElementById("check-order");
checkButton.addEventListener("click", function ()
{
  const customerName = document.getElementById("cust-name").value;
  console.log("name: " + customerName);

const phone = document.getElementById("cust-phone").value;
console.log("phone: " + phone);
const quantity = document.getElementById("qty").value;
console.log("quantity: " + quantity + " (a " + typeof quantity + ")");

let picked = "none picked yet";
  for (let i = 0; i < poshtikMenu.length; i = i + 1)
  {
    const dishButton = document.getElementById("dish-" + i);
    if (dishButton.checked)
    {
      picked = dishButton.value;
    }
  }
  console.log("dish: " + picked);
});