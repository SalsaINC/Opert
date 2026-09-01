const categories = [
  "پلیت رژیمی",
  "آبمیوه",
  "پیتزا",
  "اسموتی",
  "بشقاب اصلی",
  "بستنی",
  "قهوه سرد",
  "ساندویچ",
  "قهوه گرم",
  "برگر",
  "چای و دمنوش",
  "پاستا",
  "شیک",
  "پیش غذا",
  "ماکتل",
  "سالاد",
  "ماکتل‌های استوایی",
  "نان",
  "نوشیدنی",
  "کیک و دسر",
  "شربت و عرقیجات",
  "نوشیدنی‌های فیزی",
  "تولد",
  "فراپاچینو",
  "صبحانه",
  "نوشیدنی‌های گرم"
];

/*
  محصولات را بعداً اینجا اضافه کن.
  مثال:
  "قهوه گرم": [
    {
      name: "اسپرسو",
      description: "اسپرسوی سینگل",
      price: "۸۰,۰۰۰ تومان",
      image: "images/coffee/espresso.jpg"
    }
  ]
*/
const menu = {};

categories.forEach(category => {
  menu[category] = [];
});

// چند آیتم نمونه برای اینکه طراحی در V1 خالی نباشد.
// این‌ها را با منوی واقعی اوپرت جایگزین کن.
menu["قهوه گرم"] = [
  {
    name: "اسپرسو",
    description: "یک شات اسپرسوی تازه",
    price: "۸۰,۰۰۰ تومان",
    image: ""
  },
  {
    name: "آمریکانو",
    description: "اسپرسو با آب داغ",
    price: "۹۵,۰۰۰ تومان",
    image: ""
  },
  {
    name: "کاپوچینو",
    description: "اسپرسو، شیر و فوم شیر",
    price: "۱۲۰,۰۰۰ تومان",
    image: ""
  }
];

menu["کیک و دسر"] = [
  {
    name: "کیک روز",
    description: "انتخاب کیک روز کافه",
    price: "۱۵۰,۰۰۰ تومان",
    image: ""
  }
];

let activeCategory = "قهوه گرم";
let searchTerm = "";

const categoryScroll = document.getElementById("categoryScroll");
const productsEl = document.getElementById("products");
const sectionTitle = document.getElementById("sectionTitle");
const itemCount = document.getElementById("itemCount");
const emptyState = document.getElementById("emptyState");
const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

function renderCategories() {
  categoryScroll.innerHTML = "";

  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "category-btn";
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("active", category === activeCategory);
    button.addEventListener("click", () => {
      activeCategory = category;
      searchTerm = "";
      searchInput.value = "";
      renderCategories();
      renderProducts();
      button.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    });

    categoryScroll.appendChild(button);
  });
}

function getVisibleProducts() {
  const items = menu[activeCategory] || [];

  if (!searchTerm.trim()) return items;

  const query = searchTerm.trim().toLocaleLowerCase("fa-IR");

  return items.filter(item =>
    `${item.name} ${item.description}`
      .toLocaleLowerCase("fa-IR")
      .includes(query)
  );
}

function createProductCard(item) {
  const card = document.createElement("article");
  card.className = "product-card";

  const image = document.createElement("div");
  image.className = "product-image";

  if (item.image) {
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.loading = "lazy";
    img.addEventListener("error", () => {
      image.innerHTML = '<div class="image-placeholder">OPERT</div>';
    });
    image.appendChild(img);
  } else {
    image.innerHTML = '<div class="image-placeholder">PHOTO</div>';
  }

  const info = document.createElement("div");
  info.className = "product-info";

  const top = document.createElement("div");
  top.className = "product-top";

  const name = document.createElement("h3");
  name.className = "product-name";
  name.textContent = item.name;

  top.appendChild(name);

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = item.description || "";

  const price = document.createElement("div");
  price.className = "product-price";
  price.textContent = item.price || "";

  info.appendChild(top);
  info.appendChild(description);
  info.appendChild(price);

  card.appendChild(image);
  card.appendChild(info);

  return card;
}

function renderProducts() {
  sectionTitle.textContent = activeCategory;

  const items = getVisibleProducts();

  productsEl.innerHTML = "";
  emptyState.hidden = items.length !== 0;

  if (items.length) {
    items.forEach(item => productsEl.appendChild(createProductCard(item)));
  }

  itemCount.textContent = items.length
    ? `${toPersianNumber(items.length)} مورد`
    : "";
}

function toPersianNumber(value) {
  return String(value).replace(/\d/g, digit => "۰۱۲۳۴۵۶۷۸۹"[digit]);
}

searchToggle.addEventListener("click", () => {
  const isHidden = searchPanel.hidden;
  searchPanel.hidden = !isHidden;
  searchToggle.setAttribute("aria-expanded", String(isHidden));

  if (isHidden) {
    searchInput.focus();
  } else {
    searchInput.value = "";
    searchTerm = "";
    renderProducts();
  }
});

searchInput.addEventListener("input", event => {
  searchTerm = event.target.value;
  renderProducts();
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  searchTerm = "";
  renderProducts();
  searchInput.focus();
});

renderCategories();
renderProducts();
