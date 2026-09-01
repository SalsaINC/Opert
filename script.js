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

const menu = {};

categories.forEach(category => {
  menu[category] = [];
});


/* =========================
   پلیت رژیمی
========================= */

menu["پلیت رژیمی"] = [

  {
    name: "پلیت وگن",
    description:
      "سیب زمینی تنوری ۲۰۰ گرم - اسفناج ۱۳۰ گرم - گوجه گیلاسی ۱۰۰ گرم - خیار ۱۰۰ گرم - کینوا میکس ۲۰۰ گرم - …",
    price: "۴۲۹,۰۰۰ تومان",
    image: "",
    featured: true
  },

  {
    name: "چیکن کربو به",
    description:
      "گوجه گیلاسی ۱۵۰ گرم - خیار ۱۵۰ گرم - سبزیجات میکس ۶۰ گرم - پوره سیب زمینی - …",
    price: "۶۱۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "اسپایسی هات چیکن",
    description:
      "اسپاگتی ۲۰۰ گرم - سس مخصوص - سینه مرغ ۱۶۰ گرم - فلفل دلمه رنگی ۶۰ گرم - پیازچه ۲۰ گرم - نخود با غلاف ۸۰ گرم (سس تند) - …",
    price: "۵۹۹,۰۰۰ تومان",
    image: "",
    featured: true
  },

  {
    name: "پلیت چیکن کاری",
    description:
      "نان ناپولیتن ۲ برش - برنج ۳۰۰ گرم - خورشت کاری - سینه مرغ ۱۶۰ گرم - …",
    price: "۷۱۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "پلیت مدیترانه‌ای",
    description:
      "سیب زمینی ۲۰۰ گرم - کدو ۱۲۰ گرم - مرغ ۱۶۰ گرم - کاهو ۲۰۰ گرم - ژامبون ۱ ورق - …",
    price: "۵۹۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "کته مرغ و کاهو",
    description:
      "کدو ۱۲۰ گرم - برنج ۳۰۰ گرم - مرغ ۱۶۰ گرم - دانه چیا - …",
    price: "۷۰۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "گرین اسپایسی",
    description:
      "فلفل دلمه رنگی ۱۳۰ گرم - بروکلی ۳۰۰ گرم - کینوا میکس ۳۰۰ گرم - …",
    price: "۴۱۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "گرین چیکن",
    description:
      "لوبیا با غلاف ۱۳۰ گرم - سیب زمینی تنوری ۲۰۰ گرم - سینه مرغ ۱۶۰ گرم - دانه چیا - …",
    price: "۵۸۹,۰۰۰ تومان",
    image: ""
  }

];


/* =========================
   آبمیوه
========================= */

menu["آبمیوه"] = [

  {
    name: "ملون کولر",
    description:
      "آب طالبی - یخ - بستنی - …",
    price: "۳۰۰,۰۰۰ تومان",
menu["پیتزا"] = {

  single: {

    title: "پیتزاهای تک نفره",

    items: [

      {
        name: "پیتزا پستو ژامبون",
        description: "سس پستو - ژامبون - پنیر ویلی - پنیر پارمسان - گردو - گوجه خشک - روکولا - …",
        price: "۵۹۹,۰۰۰ تومان",
        image: "",
        featured: true
      },

      {
        name: "پیتزا استیک الفردو",
        description: "پنه - استیک - قارچ - سس الفردو - ریحون ایتالیایی - پیازچه - …",
        price: "۶۹۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا مرغ و زیتون",
        description: "مرغ گریل - زیتون پرونده - ذرت - پیاز - پنیر چدار - پنیر پارمسان - سس مخصوص - …",
        price: "۶۵۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا پنه پپرونی",
        description: "پنه - سس بوفالو - سس الفردو - فلفل رنگی - …",
        price: "۵۷۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا مرغ و چیلی تای",
        description: "مرغ گریل - قارچ - سس چیلی تای - فلفل کبابی - …",
        price: "۶۴۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا مارگاریتا",
        description: "ریحان ایتالیایی - پنیر موزارلا - اسلایس گوجه گیلاسی - …",
        price: "۴۹۹,۰۰۰ تومان",
        image: ""
      }

    ]

  },

  double: {

    title: "پیتزاهای دو نفره",

    items: [

      {
        name: "پیتزا سیر و استیک",
        description: "اسلایس مغز ران - روکولا - سس مارینارا - حریره سیر - پارمسان - …",
        price: "۱,۰۹۹,۰۰۰ تومان",
        image: "",
        featured: true
      },

      {
        name: "پیتزا پستو استیک",
        description: "سس پستو - استیک - روکولا - قارچ - پنیر پارمسان - …",
        price: "۱,۰۸۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا رست بیف",
        description: "گوشت ریش شده - قارچ - سس مارینارا - فلفل - …",
        price: "۱,۱۱۹,۰۰۰ تومان",
        image: ""
      }

    ]

  }

};    image: ""
  },

  {
    name: "آب هندوانه طبیعی",
    description: "",
    price: "۲۱۵,۰۰۰ تومان",
    image: ""
  },

  {
    name: "آب پرتقال",
    description: "",
    price: "ناموجود",
    image: "",
    unavailable: true
  }

];


/* =========================
   پیتزا
========================= */




/* =========================
   وضعیت سایت
========================= */

let activeCategory = "پلیت رژیمی";
let searchTerm = "";


/* =========================
   عناصر صفحه
========================= */

const categoryScroll =
  document.getElementById("categoryScroll");

const productsEl =
  document.getElementById("products");

const sectionTitle =
  document.getElementById("sectionTitle");

const itemCount =
  document.getElementById("itemCount");

const emptyState =
  document.getElementById("emptyState");

const searchToggle =
  document.getElementById("searchToggle");

const searchPanel =
  document.getElementById("searchPanel");

const searchInput =
  document.getElementById("searchInput");

const clearSearch =
  document.getElementById("clearSearch");


/* =========================
   دسته‌بندی‌ها
========================= */

function renderCategories() {

  categoryScroll.innerHTML = "";

  categories.forEach(category => {

    const button =
      document.createElement("button");

    button.className = "category-btn";

    if (category === activeCategory) {
      button.classList.add("active");
    }

    button.type = "button";
    button.textContent = category;

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


/* =========================
   فیلتر محصولات
========================= */

function filterItems(items) {

  if (!searchTerm.trim()) {
    return items;
  }

  const query =
    searchTerm
      .trim()
      .toLocaleLowerCase("fa-IR");

  return items.filter(item => {

    const text =
      `${item.name} ${item.description || ""}`
        .toLocaleLowerCase("fa-IR");

    return text.includes(query);

  });

}


/* =========================
   محصولات قابل نمایش
========================= */

function getVisibleProducts() {

  if (activeCategory === "پیتزا") {

    return [
      ...filterItems(menu["پیتزا"].single.items),
      ...filterItems(menu["پیتزا"].double.items)
    ];

  }

  return filterItems(
    menu[activeCategory] || []
  );

}


/* =========================
   ساخت کارت محصول
========================= */

function createProductCard(item) {

  const card =
    document.createElement("article");

  card.className = "product-card";


  if (item.unavailable) {
    card.classList.add("unavailable");
  }


  /* عکس */

  const image =
    document.createElement("div");

  image.className =
    "product-image";


  if (item.image) {

    const img =
      document.createElement("img");

    img.src = item.image;

    img.alt = item.name;

    img.loading = "lazy";

    img.addEventListener("error", () => {

      image.innerHTML =
        '<div class="image-placeholder">OPERT</div>';

    });

    image.appendChild(img);

  } else {

    image.innerHTML =
      '<div class="image-placeholder">PHOTO</div>';

  }


  /* پیشنهاد مجموعه */

  if (item.featured) {

    const badge =
      document.createElement("span");

    badge.className =
      "featured-badge";

    badge.textContent =
      "پیشنهاد مجموعه";

    image.appendChild(badge);

  }


  /* ناموجود */

  if (item.unavailable) {

    const badge =
      document.createElement("span");

    badge.className =
      "unavailable-badge";

    badge.textContent =
      "ناموجود";

    image.appendChild(badge);

  }


  /* اطلاعات */

  const info =
    document.createElement("div");

  info.className =
    "product-info";


  const top =
    document.createElement("div");

  top.className =
    "product-top";


  const name =
    document.createElement("h3");

  name.className =
    "product-name";

  name.textContent =
    item.name;


  top.appendChild(name);


  const description =
    document.createElement("p");

  description.className =
    "product-description";

  description.textContent =
    item.description || "";


  const price =
    document.createElement("div");

  price.className =
    "product-price";

  price.textContent =
    item.price || "";


  info.appendChild(top);
  info.appendChild(description);
  info.appendChild(price);


  card.appendChild(image);
  card.appendChild(info);


  return card;

}


/* =========================
   نمایش محصولات
========================= */

function renderProducts() {

  sectionTitle.textContent =
    activeCategory;

  productsEl.innerHTML = "";


  /* =====================
     پیتزا
  ===================== */

  if (activeCategory === "پیتزا") {

    const sections = [
      menu["پیتزا"].single,
      menu["پیتزا"].double
    ];

    let totalItems = 0;


    sections.forEach(section => {

      const items =
        filterItems(section.items);


      if (items.length === 0) {
        return;
      }


      const title =
        document.createElement("h3");

      title.className =
        "pizza-section-title";

      title.textContent =
        section.title;

      productsEl.appendChild(title);


      items.forEach(item => {

        productsEl.appendChild(
          createProductCard(item)
        );

      });


      totalItems += items.length;

    });


    emptyState.hidden =
      totalItems !== 0;


    itemCount.textContent =
      totalItems
        ? `${toPersianNumber(totalItems)} مورد`
        : "";


    return;

  }


  /* =====================
     دسته‌های معمولی
  ===================== */

  const items =
    getVisibleProducts();


  emptyState.hidden =
    items.length !== 0;


  items.forEach(item => {

    productsEl.appendChild(
      createProductCard(item)
    );

  });


  itemCount.textContent =
    items.length
      ? `${toPersianNumber(items.length)} مورد`
      : "";

}


/* =========================
   تبدیل اعداد به فارسی
========================= */

function toPersianNumber(value) {

  return String(value).replace(
    /\d/g,
    digit => "۰۱۲۳۴۵۶۷۸۹"[digit]
  );

}


/* =========================
   جستجو
========================= */

searchToggle.addEventListener(
  "click",
  () => {

    const isHidden =
      searchPanel.hidden;

    searchPanel.hidden =
      !isHidden;

    searchToggle.setAttribute(
      "aria-expanded",
      String(isHidden)
    );


    if (isHidden) {

      searchInput.focus();

    } else {

      searchInput.value = "";

      searchTerm = "";

      renderProducts();

    }

  }
);


searchInput.addEventListener(
  "input",
  event => {

    searchTerm =
      event.target.value;

    renderProducts();

  }
);


clearSearch.addEventListener(
  "click",
  () => {

    searchInput.value = "";

    searchTerm = "";

    renderProducts();

    searchInput.focus();

  }
);


/* =========================
   شروع سایت
========================= */

renderCategories();
renderProducts();
