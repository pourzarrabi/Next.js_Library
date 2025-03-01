export const navigationLinks = [
  {
    href: "/library",
    label: "Library",
  },

  {
    img: "/icons/user.svg",
    selectedImg: "/icons/user-fill.svg",
    href: "/my-profile",
    label: "My Profile",
  },
];

export const adminSideBarLinks = [
  {
    img: "/icons/admin/home.svg",
    route: "/admin",
    text: "Home",
  },
  {
    img: "/icons/admin/users.svg",
    route: "/admin/users",
    text: "All Users",
  },
  {
    img: "/icons/admin/book.svg",
    route: "/admin/books",
    text: "All Books",
  },
  {
    img: "/icons/admin/bookmark.svg",
    route: "/admin/book-requests",
    text: "Borrow Requests",
  },
  {
    img: "/icons/admin/user.svg",
    route: "/admin/account-requests",
    text: "Account Requests",
  },
];

export const FIELD_NAMES = {
  fullName: "نام",
  email: "ایمیل",
  password: "پسورد",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  password: "password",
};

export const sampleBooks = [
  {
    id: 1,
    title: "کتابخانه نیمه‌شب",
    author: "مت هیگ",
    genre: "فانتزی / داستانی",
    rating: 4.6,
    total_copies: 20,
    available_copies: 10,
    description:
      "رمانی درخشان در مورد تمام انتخاب‌هایی که در زندگی خوب انجام می‌شوند، کتاب کتابخانه نیمه‌شب داستان نورا سید را روایت می‌کند که خود را بین زندگی و مرگ می‌یابد.",
    color: "#1c1f40",
    cover: "https://m.media-amazon.com/images/I/81J6APjwxlL.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "رمانی درخشان در مورد تمام انتخاب‌هایی که در زندگی خوب انجام می‌شوند، کتاب کتابخانه نیمه‌شب داستان نورا سید را روایت می‌کند که خود را بین زندگی و مرگ می‌یابد. رمانی درخشان در مورد تمام انتخاب‌هایی که در زندگی خوب انجام می‌شوند، کتاب کتابخانه نیمه‌شب داستان نورا سید را روایت می‌کند که خود را بین زندگی و مرگ می‌یابد.",
  },
  {
    id: 2,
    title: "عادات اتمی",
    author: "جیمز کلیر",
    genre: "خودشناسی / بهره‌وری",
    rating: 4.9,
    total_copies: 99,
    available_copies: 50,
    description:
      "راهنمای انقلابی برای ساخت عادات خوب، شکستن عادات بد و هر روز یک درصد بهتر شدن.",
    color: "#fffdf6",
    cover: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "راهنمای انقلابی برای ساخت عادات خوب، شکستن عادات بد و هر روز یک درصد بهتر شدن.",
  },
  {
    id: 3,
    title: "تو جاوااسکریپت را نمی‌شناسی: دامنه‌ها و بست‌ها",
    author: "کایل سیمپسون",
    genre: "علوم کامپیوتر / جاوااسکریپت",
    rating: 4.7,
    total_copies: 9,
    available_copies: 5,
    description:
      "راهنمای ضروری برای درک مکانیسم‌های اصلی جاوااسکریپت، با تمرکز بر دامنه‌ها و بست‌ها.",
    color: "#f8e036",
    cover:
      "https://m.media-amazon.com/images/I/7186YfjgHHL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "راهنمای ضروری برای درک مکانیسم‌های اصلی جاوااسکریپت، با تمرکز بر دامنه‌ها و بست‌ها.",
  },
  {
    id: 4,
    title: "کیسه طلایی",
    author: "پائولو کوئیلیو",
    genre: "فلسفه / ماجراجویی",
    rating: 4.5,
    total_copies: 78,
    available_copies: 50,
    description:
      "داستان جادویی سانتیاگو، یک چوپان اندلس، که برای پیدا کردن یک گنج دنیوی به سفر می‌رود.",
    color: "#ed6322",
    cover:
      "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "داستان جادویی سانتیاگو، یک چوپان اندلس، که برای پیدا کردن یک گنج دنیوی به سفر می‌رود.",
  },
  {
    id: 5,
    title: "کار عمیق",
    author: "کال نیوپورت",
    genre: "خودشناسی / بهره‌وری",
    rating: 4.7,
    total_copies: 23,
    available_copies: 23,
    description:
      "قوانین موفقیت متمرکز در دنیای پراسترس، که آموزش می‌دهد چگونه تمرکز عمیق را برای رسیدن به بالاترین بهره‌وری پرورش دهیم.",
    color: "#ffffff",
    cover: "https://m.media-amazon.com/images/I/81JJ7fyyKyS.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "قوانین موفقیت متمرکز در دنیای پراسترس، که آموزش می‌دهد چگونه تمرکز عمیق را برای رسیدن به بالاترین بهره‌وری پرورش دهیم.",
  },
  {
    id: 6,
    title: "کد تمیز",
    author: "رابرت سی. مارتین",
    genre: "علوم کامپیوتر / برنامه‌نویسی",
    rating: 4.8,
    total_copies: 56,
    available_copies: 56,
    description:
      "دستنامه‌ای از صنعت نرم‌افزار چابک که بهترین شیوه‌ها و اصول نوشتن کد تمیز و قابل نگهداری را ارائه می‌دهد.",
    color: "#080c0d",
    cover:
      "https://m.media-amazon.com/images/I/71T7aD3EOTL._UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "دستنامه‌ای از صنعت نرم‌افزار چابک که بهترین شیوه‌ها و اصول نوشتن کد تمیز و قابل نگهداری را ارائه می‌دهد.",
  },
  {
    id: 7,
    title: "برنامه‌نویس عملی",
    author: "اندرو هانت، دیوید توماس",
    genre: "علوم کامپیوتر / برنامه‌نویسی",
    rating: 4.8,
    total_copies: 25,
    available_copies: 3,
    description:
      "راهنمایی بی‌زمان برای توسعه‌دهندگان تا مهارت‌های خود را تقویت کنند و شیوه‌های برنامه‌نویسی خود را بهبود بخشند.",
    color: "#100f15",
    cover:
      "https://m.media-amazon.com/images/I/71VStSjZmpL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "راهنمایی بی‌زمان برای توسعه‌دهندگان تا مهارت‌های خود را تقویت کنند و شیوه‌های برنامه‌نویسی خود را بهبود بخشند.",
  },
  {
    id: 8,
    title: "روانشناسی پول",
    author: "مورگان هاوسل",
    genre: "مالی / خودشناسی",
    rating: 4.8,
    total_copies: 10,
    available_copies: 5,
    description:
      "مورگان هاوسل رفتارها و نگرش‌های منحصر به فردی که موفقیت مالی و تصمیم‌گیری را شکل می‌دهند، بررسی می‌کند.",
    color: "#ffffff",
    cover:
      "https://m.media-amazon.com/images/I/81Dky+tD+pL._AC_UF1000,1000_QL80_.jpg",
    video: "/sample-video.mp4?updatedAt=1722593504152",
    summary:
      "مورگان هاوسل رفتارها و نگرش‌های منحصر به فردی که موفقیت مالی و تصمیم‌گیری را شکل می‌دهند، بررسی می‌کند.",
  },
];
