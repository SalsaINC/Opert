# منوی دیجیتال کافه اوپرت — V1

نسخه اول منوی دیجیتال اختصاصی کافه اوپرت.

## فایل‌ها

- `index.html` — ساختار صفحه
- `style.css` — طراحی و responsive
- `script.js` — دسته‌بندی‌ها، محصولات و جستجو

## اضافه کردن عکس

برای هر محصول در `script.js` مقدار `image` را وارد کن:

```js
image: "images/coffee/espresso.jpg"
```

و فایل تصویر را در همان مسیر قرار بده.

## اضافه کردن محصول

مثلاً:

```js
menu["پیتزا"].push({
  name: "پیتزا مارگاریتا",
  description: "سس گوجه، پنیر و ریحان",
  price: "۲۸۰,۰۰۰ تومان",
  image: "images/pizza/margherita.jpg"
});
```

## انتشار روی GitHub Pages

هر سه فایل را در repository قرار بده و از بخش Settings → Pages، شاخه اصلی (`main`) را به عنوان Source انتخاب کن.
