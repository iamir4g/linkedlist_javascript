مقدمه
-----

در این تمرین، شما یک ساختار داده **لینک لیست** را با استفاده از زبان برنامه‌نویسی **JavaScript** پیاده‌سازی می‌کنید.

لینک لیست‌ها ساختارهای داده‌ای پویا هستند که از **گره‌ها** (nodes) برای ذخیره‌سازی داده‌ها تشکیل شده‌اند. هر گره شامل دو بخش است:

-   **داده:** مقدار ذخیره‌شده در گره
-   **اشاره گر:** آدرس گره بعدی در لیست

لینک لیست‌ها به دلیل مزایای زیر در بسیاری از برنامه‌ها استفاده می‌شوند:

-   **درج و حذف عناصر به طور کارآمد:** درج و حذف عناصر در لینک لیست به طور میانگین O(1) است، در حالی که این عملیات در آرایه‌ها به ترتیب O(n) و O(n) است.
-   **نیاز به حافظه انعطاف‌پذیر:** لینک لیست‌ها نیازی به حافظه از پیش تعیین‌شده ندارند و می‌توانند در صورت نیاز رشد کنند.
-   **پیاده‌سازی آسان:** پیاده‌سازی لینک لیست‌ها نسبتاً ساده است.