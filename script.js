/* =========================================================
   OPERT CAFE - MENU
   نسخه فعلی
========================================================= */


/* =========================================================
   دسته‌بندی‌ها
========================================================= */

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


/* =========================================================
   ساخت اولیه منو
========================================================= */

const menu = {};

categories.forEach(category => {
  menu[category] = [];
});


/* =========================================================
   پلیت رژیمی
========================================================= */

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


/* =========================================================
   آبمیوه
========================================================= */

menu["آبمیوه"] = [

  {
    name: "ملون کولر",
    description: "آب طالبی - یخ - بستنی - …",
    price: "۳۰۰,۰۰۰ تومان",
    image: ""
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


/* =========================================================
   پیتزا
========================================================= */

menu["پیتزا"] = {

  single: {

    title: "پیتزاهای تک نفره",

    items: [

      {
        name: "پیتزا پستو ژامبون",
        description:
          "سس پستو - ژامبون - پنیر ویلی - پنیر پارمسان - گردو - گوجه خشک - روکولا - …",
        price: "۵۹۹,۰۰۰ تومان",
        image: "",
        featured: true
      },

      {
        name: "پیتزا استیک الفردو",
        description:
          "پنه - استیک - قارچ - سس الفردو - ریحون ایتالیایی - پیازچه - …",
        price: "۶۹۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا مرغ و زیتون",
        description:
          "مرغ گریل - زیتون پرونده - ذرت - پیاز - پنیر چدار - پنیر پارمسان - سس مخصوص - …",
        price: "۶۵۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا پنه پپرونی",
        description:
          "پنه - سس بوفالو - سس الفردو - فلفل رنگی - …",
        price: "۵۷۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا مرغ و چیلی تای",
        description:
          "مرغ گریل - قارچ - سس چیلی تای - فلفل کبابی - …",
        price: "۶۴۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا مارگاریتا",
        description:
          "ریحان ایتالیایی - پنیر موزارلا - اسلایس گوجه گیلاسی - …",
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
        description:
          "اسلایس مغز ران - روکولا - سس مارینارا - حریره سیر - پارمسان - …",
        price: "۱,۰۹۹,۰۰۰ تومان",
        image: "",
        featured: true
      },

      {
        name: "پیتزا پستو استیک",
        description:
          "سس پستو - استیک - روکولا - قارچ - پنیر پارمسان - …",
        price: "۱,۰۸۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا رست بیف",
        description:
          "گوشت ریش شده - قارچ - سس مارینارا - فلفل - …",
        price: "۱,۱۱۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا استیک الفردو",
        description: "",
        price: "۱,۰۶۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا سوسیس قارچ",
        description: "",
        price: "۷۹۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا پپرونی",
        description: "",
        price: "۷۹۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا چیکن پستو",
        description: "",
        price: "۹۹۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "پیتزا چیکن الفردو",
        description: "",
        price: "۸۹۹,۰۰۰ تومان",
        image: ""
      }

    ]
  }

};


/* =========================================================
   اسموتی
========================================================= */

menu["اسموتی"] = [

  {
    name: "ردکولر",
    description:
      "آبلیمو تازه - میکس چای ترش - فیله پرتقال - شاتوت",
    price: "۲۸۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "کاپرینا",
    description:
      "آب آناناس - پرتقال - آبلیمو",
    price: "۳۰۴,۰۰۰ تومان",
    image: ""
  },

  {
    name: "کوکوبنانا",
    description:
      "شیر - موز - نارگیل - یخ",
    price: "۳۷۰,۰۰۰ تومان",
    image: ""
  },

  {
    name: "ردبری",
    description:
      "هندوانه - توت فرنگی - لیمو - یخ",
    price: "۲۹۸,۰۰۰ تومان",
    image: ""
  },

  {
    name: "کریزی منگو",
    description:
      "طالبی - آب انبه - فیله انبه - سیروپ پشن فروت",
    price: "۳۴۵,۰۰۰ تومان",
    image: ""
  }

];


/* =========================================================
   بشقاب اصلی
========================================================= */

menu["بشقاب اصلی"] = [

  {
    name: "چیکن استیک",
    description:
      "سینه مرغ - هویج - فلفل دلمه - …",
    price: "۱,۱۳۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "فیله مرغ سوخاری",
    description:
      "مرغ سوخاری - هویج - فلفل دلمه - …",
    price: "۱,۱۹۹,۰۰۰ تومان",
    image: ""
  }

];


/* =========================================================
   بستنی
========================================================= */

menu["بستنی"] = [

  {
    name: "Happy Ice Cream",
    description:
      "بستنی وانیل - بستنی شکلاتی تکه‌ای - بستنی شاتوت - ژله - خامه - مارشملو",
    price: "۳۷۰,۰۰۰ تومان",
    image: ""
  }

];


/* =========================================================
   قهوه سرد
========================================================= */

menu["قهوه سرد"] = {

  espressoBar: {

    title: "اسپرسو بار",

    items: [

      {
        name: "ایس اسپرسو",
        description: "اسپرسو - یخ",
        price: "۲۱۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "ایس امریکانو",
        description: "",
        price: "۲۱۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "ایس لاته",
        description: "",
        price: "۲۱۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "ایس لاته طعم دار",
        description: "",
        price: "۲۶۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "ایس موکا",
        description: "",
        price: "۲۶۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "ایس کارامل ماکیاتو",
        description: "",
        price: "۲۷۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "آفوگاتو",
        description: "",
        price: "۲۵۰,۰۰۰ تومان",
        image: ""
      },

      {
        name: "آفوگاتو نوتلا",
        description: "",
        price: "۲۸۰,۰۰۰ تومان",
        image: ""
      },

      {
        name: "ایس دمی رگولار",
        description: "",
        price: "۲۱۵,۰۰۰ تومان",
        image: ""
      }

    ]
  },


  matchaBar: {

    title: "ماچا بار",

    items: [

      {
        name: "ایس ماچا لاته",
        description: "",
        price: "۱۹۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "ایس ماچا لاته انبه",
        description: "",
        price: "۳۶۰,۰۰۰ تومان",
        image: ""
      },

      {
        name: "ایس ماچا نارگیل",
        description: "",
        price: "۲۴۵,۰۰۰ تومان",
        image: ""
      }

    ]
  }

};


/* =========================================================
   ساندویچ
========================================================= */

menu["ساندویچ"] = [

  {
    name: "ساندویچ گوشت و پیازچه",
    description:
      "سس الفردو - پنیر موزارلا",
    price: "۹۹۹,۰۰۰ تومان",
    image: "",
    featured: true
  },

  {
    name: "ساندویچ مرغ گریل با سس چیلی تای",
    description:
      "نان مخصوص اوپرت - سینه مرغ - برش پنیر کبابی - روکولا",
    price: "۸۸۹,۰۰۰ تومان",
    image: "",
    featured: true
  },

  {
    name: "هات داگ مجاری",
    description: "",
    price: "ناموجود",
    image: "",
    unavailable: true
  }

];


/* =========================================================
   قهوه گرم
========================================================= */

menu["قهوه گرم"] = {

  espresso: {

    title: "اسپرسو",

    items: [

      {
        name: "اسپرسو ۵۰/۵۰",
        description: "",
        price: "۱۷۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "اسپرسو ۱۰۰٪ عربیکا",
        description: "",
        price: "۱۹۹,۰۰۰ تومان",
        image: ""
      },

      {
        name: "آمریکانو",
        description: "",
        price: "۲۱۹,۰۰۰ تومان",
        image: ""
      }

    ]
  },


  brewedCoffee: {

    title: "قهوه دمی",

    items: [

      {
        name: "دمی رگولار",
        description: "",
        price: "۲۱۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "قهوه دمی فیلتری",
        description: "",
        price: "۳۱۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "قهوه دمی فیلتری تخصصی",
        description: "",
        price: "۳۹۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "قهوه ترک",
        description: "",
        price: "۲۱۵,۰۰۰ تومان",
        image: ""
      }

    ]
  },


  milkCoffee: {

    title: "شیر قهوه",

    items: [

      {
        name: "لاته",
        description: "",
        price: "۲۵۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "لاته نوتلا",
        description: "",
        price: "۲۸۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "لاته طعم دار",
        description: "",
        price: "۲۶۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "موکا",
        description: "",
        price: "۲۶۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "کاپوچینو",
        description: "",
        price: "۲۳۰,۰۰۰ تومان",
        image: ""
      },

      {
        name: "لاته لوتوس",
        description: "",
        price: "۲۸۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "کارامل ماکیاتو",
        description: "",
        price: "۲۷۵,۰۰۰ تومان",
        image: ""
      },

      {
        name: "کورتادو",
        description: "",
        price: "۱۷۷,۰۰۰ تومان",
        image: ""
      }

    ]
  },


  syrups: {

    title: "سیروپ‌ها",

    items: [

      {
        name: "وانیل",
        description: "",
        price: "۵۰,۰۰۰ تومان",
        image: ""
      },

      {
        name: "کارامل",
        description: "",
        price: "۵۰,۰۰۰ تومان",
        image: ""
      },

      {
        name: "کوکی شکلاتی",
        description: "",
        price: "۵۰,۰۰۰ تومان",
        image: ""
      },

      {
        name: "لوندر",
        description: "",
        price: "۵۰,۰۰۰ تومان",
        image: ""
      },

      {
        name: "شکلات",
        description: "",
        price: "۵۰,۰۰۰ تومان",
        image: ""
      },

      {
        name: "فندق",
        description: "",
        price: "۵۰,۰۰۰ تومان",
        image: ""
      }

    ]
  }

};


/* =========================================================
   برگر
========================================================= */

menu["برگر"] = [

  {
    name: "برگر کاراملی",
    description:
      "گوشت برگر - سس قارچ - پیاز کاراملی",
    price: "۱,۰۹۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "برگر کلاسیک",
    description:
      "گوشت برگر - کاهو فرانسوی - …",
    price: "۱,۰۲۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "برگر ژامبون با پنیر گودا",
    description:
      "گوشت برگر - کاهو فرانسوی - …",
    price: "۱,۰۹۹,۰۰۰ تومان",
    image: ""
  }

];


/* =========================================================
   چای و دمنوش
========================================================= */

menu["چای و دمنوش"] = [

  {
    name: "چای دمی (برگاموت)",
    description:
      "چای دم‌کرده سیلانی - همراه کوکی - نبات - قند - گل محمدی - هل و دارچین",
    price: "۱۲۵,۰۰۰ تومان",
    image: ""
  },

  {
    name: "چای استکانی",
    description: "",
    price: "۹۵,۰۰۰ تومان",
    image: ""
  },

  {
    name: "لیمو زنجبیل",
    description:
      "زنجبیل - لیمو - نعنا - لمون‌گرس - بوته آویشن - چای سبز",
    price: "۱۸۶,۰۰۰ تومان",
    image: ""
  },

  {
    name: "میوه‌های قرمز",
    description:
      "کویین‌بری - چای ترش - شاتوت یخی",
    price: "۱۳۴,۰۰۰ تومان",
    image: ""
  },

  {
    name: "گل گاوزبان",
    description: "",
    price: "۱۶۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "چای سبز",
    description: "",
    price: "۱۰۴,۰۰۰ تومان",
    image: ""
  },

  {
    name: "دمنوش چای و نعنا عسل",
    description: "",
    price: "۱۳۴,۰۰۰ تومان",
    image: ""
  },

  {
    name: "دمنوش دل اروم",
    description:
      "چای ترش - گل گاوزبان - زست پرتقال",
    price: "۲۳۰,۰۰۰ تومان",
    image: ""
  },

  {
    name: "دمنوش آرامش",
    description:
      "گل گاوزبان - سنبل‌الطیب - لیمو - نعنا",
    price: "۲۱۵,۰۰۰ تومان",
    image: ""
  },

  {
    name: "دمنوش محبت",
    description:
      "چای ترش - گل محمدی - زعفران - دارچین - وانیل",
    price: "۲۳۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "دمنوش آفتاب",
    description:
      "پوست پرتقال - زنجبیل - چوب دارچین - وانیل",
    price: "۲۱۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "دمنوش رویا",
    description:
      "بابونه - گل محمدی - زعفران",
    price: "۲۲۵,۰۰۰ تومان",
    image: ""
  }

];


/* =========================================================
   پاستا
========================================================= */

menu["پاستا"] = [

  {
    name: "پاستا آلفردو با گوشت گوساله",
    description:
      "پنه - برش گوشت پاستایی - قارچ - پیازچه - سس آلفردو",
    price: "۹۹۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "پاستا آلفردو با مرغ گریل",
    description:
      "پنه - سینه مرغ گریل - قارچ - پنیر پارمسان - سس آلفردو",
    price: "۸۱۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "پاستا آلفردو با مرغ سوخاری",
    description:
      "پنه - رول سوخاری - قارچ - سس آلفردو",
    price: "۸۹۹,۰۰۰ تومان",
    image: ""
  },

  {
    name: "چیکن پارمسان فتوچینی",
    description:
      "فتوچینی آماده‌سازی شده - سس مارینارا - سس بوفالو",
    price: "۷۰۹,۰۰۰ تومان",
    image: ""
  }

];


/* =========================================================
   دسته‌های هنوز تکمیل نشده
========================================================= */

/*
  اسموتی        ✓
  بشقاب اصلی    ✓
  بستنی         ✓
  قهوه سرد      ✓
  ساندویچ       ✓
  قهوه گرم      ✓
  برگر          ✓
  چای و دمنوش   ✓
  پاستا         ✓

  دسته‌های زیر فعلاً خالی هستند:

  شیک
  پیش غذا
  ماکتل
  سالاد
  ماکتل‌های استوایی
  نان
  نوشیدنی
  کیک و دسر
  شربت و عرقیجات
  نوشیدنی‌های فیزی
  تولد
  فراپاچینو
  صبحانه
  نوشیدنی‌های گرم
*/


/* =========================================================
   وضعیت سایت
========================================================= */

let activeCategory = "پلیت رژیمی";
let searchTerm = "";


/* =========================================================
   عناصر صفحه
========================================================= */

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


/* =========================================================
   تبدیل اعداد به فارسی
========================================================= */

function toPersianNumber(value) {

  return String(value).replace(
    /\d/g,
    digit => "۰۱۲۳۴۵۶۷۸۹"[digit]
  );

}


/* =========================================================
   فیلتر آیتم‌ها
========================================================= */

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


/* =========================================================
   ساخت کارت
========================================================= */

function createProductCard(item) {

  const card =
    document.createElement("article");

  card.className = "product-card";


  if (item.unavailable) {
    card.classList.add("unavailable");
  }


  /* تصویر */

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


  /* پیشنهاد */

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


/* =========================================================
   نمایش دسته‌بندی‌ها
========================================================= */

function renderCategories() {

  categoryScroll.innerHTML = "";

  categories.forEach(category => {

    const button =
      document.createElement("button");

    button.type = "button";
    button.className = "category-btn";

    button.textContent =
      category;


    if (category === activeCategory) {
      button.classList.add("active");
    }


    button.addEventListener("click", () => {

      activeCategory =
        category;

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


/* =========================================================
   نمایش محصولات
========================================================= */

function renderProducts() {

  productsEl.innerHTML = "";

  sectionTitle.textContent =
    activeCategory;


  /* =======================================================
     پیتزا
  ======================================================= */

  if (activeCategory === "پیتزا") {

    let totalItems = 0;


    const pizzaSections = [
      menu["پیتزا"].single,
      menu["پیتزا"].double
    ];


    pizzaSections.forEach(section => {

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


      totalItems +=
        items.length;

    });


    emptyState.hidden =
      totalItems !== 0;


    itemCount.textContent =
      totalItems
        ? `${toPersianNumber(totalItems)} مورد`
        : "";


    return;

  }


  /* =======================================================
     قهوه سرد
  ======================================================= */

  if (activeCategory === "قهوه سرد") {

    let totalItems = 0;


    const sections = [
      menu["قهوه سرد"].espressoBar,
      menu["قهوه سرد"].matchaBar
    ];


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


      totalItems +=
        items.length;

    });


    emptyState.hidden =
      totalItems !== 0;


    itemCount.textContent =
      totalItems
        ? `${toPersianNumber(totalItems)} مورد`
        : "";


    return;

  }


  /* =======================================================
     قهوه گرم
  ======================================================= */

  if (activeCategory === "قهوه گرم") {

    let totalItems = 0;


    const sections = [
      menu["قهوه گرم"].espresso,
      menu["قهوه گرم"].brewedCoffee,
      menu["قهوه گرم"].milkCoffee,
      menu["قهوه گرم"].syrups
    ];


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


      totalItems +=
        items.length;

    });


    emptyState.hidden =
      totalItems !== 0;


    itemCount.textContent =
      totalItems
        ? `${toPersianNumber(totalItems)} مورد`
        : "";


    return;

  }


  /* =======================================================
     دسته‌های معمولی
  ======================================================= */

  const items =
    filterItems(
      menu[activeCategory] || []
    );


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


/* =========================================================
   جستجو
========================================================= */

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


/* =========================================================
   تست اطلاعات
========================================================= */

console.log(
  "پیتزاهای تک نفره:",
  menu["پیتزا"].single.items.length
);

console.log(
  "پیتزاهای دو نفره:",
  menu["پیتزا"].double.items.length
);

console.log(
  "مجموع پیتزاها:",
  menu["پیتزا"].single.items.length +
  menu["پیتزا"].double.items.length
);

console.log(
  "اسموتی:",
  menu["اسموتی"].length
);

console.log(
  "بشقاب اصلی:",
  menu["بشقاب اصلی"].length
);

console.log(
  "پاستا:",
  menu["پاستا"].length
);


/* =========================================================
   اجرای اولیه
========================================================= */

renderCategories();
renderProducts();
