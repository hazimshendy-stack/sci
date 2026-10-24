# خطوات رفع مجلد website_01 فقط إلى GitHub مع GitHub Pages

تم نقل وإعداد ملف الـ Workflow بالكامل ليصبح داخل مجلد الموقع مباشرة:
`website_01/.github/workflows/deploy.yml`

---

## الخطوات بالترتيب لرفع مجلد `website_01` فقط:

### 1. فتح سطر الأوامر (Terminal / PowerShell / CMD) داخل مجلد `website_01`:
```bash
cd d:\Hazim\Projects\sci_infinty\website_01
```

---

### 2. تهيئة Git ورفع الموقع:
```bash
# تهيئة مستودع Git خاص بمجلد الموقع فقط
git init

# إضافة كافة ملفات الموقع (ملفات node_modules و dist مستبعدة تلقائياً)
git add .

# إنشاء أول Commit
git commit -m "feat: initial release with static light version and github pages deployment"

# تعيين الفرع الرئيسي main
git branch -M main

# ربط المستودع برابط مستودعك على GitHub (استبدل الرابط برابط مستودعك)
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git

# رفع الكود
git push -u origin main
```

---

### 3. تفعيل النشر التلقائي عبر GitHub Pages (خطوة هامة جداً):
1. افتح صفحة المستودع على **GitHub**.
2. اضغط على تبويب **Settings** (الإعدادات).
3. من القائمة الجانبية اختر **Pages**.
4. تحت قسم **Build and deployment**:
   - غيّر الـ **Source** من `Deploy from a branch` إلى:
     👉 **`GitHub Actions`**

---

### النتيجة:
- المستودع سيحتوي على ملفات ومجلدات الموقع فقط في الـ Root دون أي مجلدات أخرى خاصة بإدارة المشروع.
- بمجرد تفعيل `GitHub Actions`، سيقوم السيرفر تلقائياً بتثبيت الاعتماديات، وتشغيل الفحوصات، وبناء الموقع ونشره على GitHub Pages مباشرة.
