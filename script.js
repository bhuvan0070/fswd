const poshtikMenu = [
  { name: "Jonna Rotte Wrap", price: 60, photo: "jonna-rotte-wrap.png", about: "Telangana sorghum-flatbread wrap, loaded with crunchy vegetables." },
  { name: "Sajja Roti Wrap", price: 60, photo: "sajja-roti-wrap.png", about: "Pearl-millet flatbread wrap — dense, warm, and filling." },
  { name: "Ragi Sangati Bowl", price: 55, photo: "ragi-sangati-bowl.png", about: "Classic Telangana finger-millet mudde bowl, served hot." },
  { name: "Ragi Idli Bowl", price: 50, photo: "ragi-idli-bowl.jpg", about: "Soft steamed finger-millet idlis with chutney." },
  { name: "Pesarattu with Sprouts", price: 55, photo: "pesarattu-with-sprouts.jpg", about: "Andhra green-gram dosa, topped with fresh sprouts." },
  { name: "Ulava Charu Protein Bowl", price: 70, photo: "ulava-charu-protein-bowl.jpg", about: "Telangana horse-gram stew over a protein-rich grain bowl." },
  { name: "Gongura Sprouts Salad", price: 45, photo: "gongura-sprouts-salad.jpg", about: "Tangy Andhra gongura leaves tossed with mixed sprouts." },
  { name: "Sprouts Moong Chilla", price: 50, photo: "sprouts-moong-chilla.jpg", about: "Savoury moong pancake studded with sprouts." },
  { name: "Paneer Protein Bowl", price: 80, photo: "paneer-protein-bowl.jpg", about: "Grilled paneer cubes over greens and grains." },
  { name: "Millet Protein Shake", price: 40, photo: "millet-protein-shake.jpg", about: "Cold millet-and-jaggery protein shake." }
];

const dishList = document.getElementById("dish-list");
poshtikMenu.forEach(function (dish)
{
  const card = document.createElement("article");
  card.className = "dish";
  dishList.appendChild(card);
  const photo = document.createElement("img");
  photo.src = "images/" + dish.photo;
  photo.alt = dish.name;
  photo.width = 180;
  card.appendChild(photo);
  const title = document.createElement("h3");
  title.textContent = dish.name;
  card.appendChild(title);
  const about = document.createElement("p");
  about.textContent = dish.about;
  card.appendChild(about);
  const price = document.createElement("p");
  price.textContent = "Price: Rs. " + dish.price;
  card.appendChild(price);
});
console.log("cards built: " + poshtikMenu.length);

const orderForm = document.getElementById("order-form");
const orderResult = document.getElementById("order-result");
orderForm.addEventListener("submit", function (event)
{
  event.preventDefault();
  const nameTyped = document.getElementById("cust-name").value;
  const customerName = nameTyped.trim();
  const phoneTyped = document.getElementById("cust-phone").value;
  const phone = phoneTyped.trim();
  const quantity = Number(document.getElementById("qty").value);
  let dishName = "";
  for (let i = 0; i < poshtikMenu.length; i = i + 1)
  {
    const dishButton = document.getElementById("dish-" + i);
    if (dishButton.checked)
    {
      dishName = poshtikMenu[i].name;
    }
  }
  const problems = [];
  if (customerName === "")
  {
    problems.push("Please enter your name.");
  }
  let notDigits = 0;
  for (let i = 0; i < phone.length; i = i + 1)
  {
    if (phone[i] < "0" || phone[i] > "9")
    {
      notDigits = notDigits + 1;
    }
  }
  if (phone.length !== 10 || notDigits > 0)
  {
    problems.push("Phone number must be exactly 10 digits.");
  }
  if (dishName === "")
  {
    problems.push("Please pick a dish.");
  }
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10)
  {
    problems.push("Quantity must be a whole number from 1 to 10.");
  }
  if (problems.length > 0)
  {
    orderResult.className = "refused";
    orderResult.textContent = problems.join("\n");
    console.log("order refused: " + problems.length + " problem(s)");
  }
  else
  {
    orderResult.className = "";
    orderResult.textContent = "Order placed: " + quantity + " × " + dishName + " for " + customerName;
    console.log("order placed for " + customerName);
  }
});

