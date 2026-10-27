// js/script.js - شامل للوضع الليلي/النهاري، تعدد اللغات (سوريا/أمريكا)، الإحصائيات الحية، و AJAX

const translations = {
    ar: {
        app_name: "طلابي",
        app_subtitle: "نظام إدارة الطلاب",
        main_menu: "القائمة الرئيسية",
        nav_dashboard: "لوحة التحكم",
        nav_students: "الطلاب",
        nav_add_student: "إضافة طالب",
        role_admin: "مدير النظام",
        theme_light: "الوضع النهاري",
        theme_dark: "الوضع الليلي",
        welcome_login_title: 'مرحباً بك في منصة "طلابي" الرقمية',
        welcome_login_desc: "المنصة الذكية لإدارة السجلات الأكاديمية وبيانات الطلاب بكفاءة وأمان عالٍ. نوفر لك كافة الأدوات الإدارية في واجهة عصرية وسريعة:",
        srv_1_title: "إدارة شاملة لسجلات الطلاب (CRUD)",
        srv_1_desc: "إضافة، استعراض، تحديث، وحذف بيانات الطلاب مع أرشفة الصور الشخصية.",
        srv_2_title: "بحث فوري وترقيم ذكي للصفحات",
        srv_2_desc: "فلترة فورية للطلاب بالاسم أو البريد أو الهاتف مع عرض منظم (10 طلاب لكل صفحة).",
        srv_3_title: "حماية متقدمة وتحقق فوري عبر AJAX",
        srv_3_desc: "تشفير كامل لكلمات المرور وتحقق لحظي من صحة البيانات المدخلة دون إعادة تحميل الصفحة.",
        login_header: "تسجيل الدخول إلى لوحة التحكم",
        login_sub: "أدخل بيانات حسابك للوصول إلى خدمات النظام",
        lbl_user_email: "اسم المستخدم أو البريد الإلكتروني",
        lbl_username: "اسم المستخدم",
        lbl_email: "البريد الإلكتروني",
        lbl_password: "كلمة المرور",
        lbl_confirm_pass: "تأكيد كلمة المرور",
        btn_login: "دخول إلى لوحة التحكم",
        no_account: "ليس لديك حساب مدير؟",
        create_account: "إنشاء حساب جديد",
        reg_title: "إنشاء حساب مدير جديد",
        reg_sub: "سجّل حسابك للتمكن من إدارة بيانات الطلاب",
        btn_register: "إنشاء الحساب",
        have_account: "لديك حساب بالفعل؟",
        login_now: "تسجيل الدخول",
        dash_welcome: "مرحباً بك في لوحة التحكم",
        dash_sub: "نظرة عامة وإحصائيات حية مرتبطة بقاعدة البيانات",
        btn_add_new_student: "إضافة طالب جديد",
        stat_total: "إجمالي الطلاب المسجلين",
        stat_recent: "المضافون حديثاً (آخر 24 ساعة)",
        stat_status: "حالة قاعدة البيانات",
        stat_online: "متصل ومحدث تلقائياً",
        quick_access: "الوصول السريع لإدارة سجلات الطلاب",
        qa_view_title: "قائمة الطلاب والبحث (View & Search)",
        qa_view_desc: "استعراض الطلاب، الفلترة، التعديل، أو الحذف",
        qa_add_title: "تسجيل طالب جديد (Add Student)",
        qa_add_desc: "إدخال بيانات طالب مع التحقق الفوري عبر AJAX",
        lbl_std_name: "اسم الطالب الكامل",
        lbl_phone: "رقم الهاتف",
        lbl_pic: "الصورة الشخصية",
        lbl_address: "العنوان بالتفصيل",
        btn_save: "حفظ بيانات الطالب",
        btn_search: "بحث"
    },
    en: {
        app_name: "Tollabi",
        app_subtitle: "Student Management System",
        main_menu: "Main Menu",
        nav_dashboard: "Dashboard",
        nav_students: "Students",
        nav_add_student: "Add Student",
        role_admin: "System Admin",
        theme_light: "Light Mode",
        theme_dark: "Dark Mode",
        welcome_login_title: 'Welcome to "Tollabi" Digital Platform',
        welcome_login_desc: "The smart platform for managing academic records and student data with high security and efficiency:",
        srv_1_title: "Complete Student Records Management (CRUD)",
        srv_1_desc: "Add, view, update, and delete student records with profile picture uploads.",
        srv_2_title: "Instant Search & Smart Pagination",
        srv_2_desc: "Filter students by name, email, or phone with organized pagination (10 per page).",
        srv_3_title: "Advanced Security & Real-Time AJAX Validation",
        srv_3_desc: "Password hashing and instant form validation without reloading the page.",
        login_header: "Sign In to Dashboard",
        login_sub: "Enter your credentials to access the system",
        lbl_user_email: "Username or Email Address",
        lbl_username: "Username",
        lbl_email: "Email Address",
        lbl_password: "Password",
        lbl_confirm_pass: "Confirm Password",
        btn_login: "Login to Dashboard",
        no_account: "Don't have an admin account?",
        create_account: "Create New Account",
        reg_title: "Create New Admin Account",
        reg_sub: "Register your account to manage student records",
        btn_register: "Register Account",
        have_account: "Already have an account?",
        login_now: "Sign In",
        dash_welcome: "Welcome to the Dashboard",
        dash_sub: "Live overview and statistics connected to the database",
        btn_add_new_student: "Add New Student",
        stat_total: "Total Registered Students",
        stat_recent: "Recently Added (Last 24h)",
        stat_status: "Database Status",
        stat_online: "Connected & Auto-Updated",
        quick_access: "Quick Access to Student Records",
        qa_view_title: "Students List & Search",
        qa_view_desc: "View, filter, update, or delete students",
        qa_add_title: "Register New Student",
        qa_add_desc: "Add student data with real-time AJAX validation",
        lbl_std_name: "Student Full Name",
        lbl_phone: "Phone Number",
        lbl_pic: "Profile Picture",
        lbl_address: "Detailed Address",
        btn_save: "Save Student Record",
        btn_search: "Search"
    }
};

document.addEventListener("DOMContentLoaded", function () {

    // =========================================================================
    // 1. إدارة الوضع الليلي والنهاري (Dark / Light Mode)
    // =========================================================================
    const htmlEl = document.documentElement;
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const themeIcon = document.getElementById("themeIcon");
    const themeText = document.getElementById("themeText");

    let currentTheme = localStorage.getItem("tollabi_theme") || "dark";
    let currentLang = localStorage.getItem("tollabi_lang") || "ar";

    function applyTheme(theme) {
        htmlEl.setAttribute("data-bs-theme", theme);
        localStorage.setItem("tollabi_theme", theme);
        if (themeIcon && themeText) {
            if (theme === "dark") {
                themeIcon.className = "bi bi-sun-fill text-warning";
                themeText.textContent = translations[currentLang].theme_light;
            } else {
                themeIcon.className = "bi bi-moon-stars-fill text-secondary";
                themeText.textContent = translations[currentLang].theme_dark;
            }
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            currentTheme = currentTheme === "dark" ? "light" : "dark";
            applyTheme(currentTheme);
        });
    }

    // =========================================================================
    // 2. إدارة اللغة (عربي مع علم سوريا / إنجليزي مع علم أمريكا)
    // =========================================================================
    const langToggleBtn = document.getElementById("langToggleBtn");
    const langFlag = document.getElementById("langFlag");
    const langText = document.getElementById("langText");

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("tollabi_lang", lang);

        htmlEl.lang = lang;
        htmlEl.dir = lang === "ar" ? "rtl" : "ltr";

        // تحديث جميع العناصر التي تحمل data-i18n
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // تحديث زر اللغة والعلم (علم سوريا للعربية وعلم أمريكا للإنجليزية)
        if (langFlag && langText) {
            if (lang === "ar") {
                langFlag.src = "https://flagcdn.com/w40/us.png";
                langText.textContent = "English";
            } else {
                langFlag.src = "https://flagcdn.com/w40/sy.png";
                langText.textContent = "العربية";
            }
        }

        // تحديث نص زر الثيم حسب اللغة
        applyTheme(currentTheme);
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", function () {
            const nextLang = currentLang === "ar" ? "en" : "ar";
            applyLanguage(nextLang);
        });
    }

    applyLanguage(currentLang);

    // =========================================================================
    // 3. التحقق من الجلسة وتحديث بيانات المدير والإحصائيات تلقائياً من قاعدة البيانات
    // =========================================================================
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.has("login_success")) {
        sessionStorage.setItem("sijil_logged_in", "true");
        if (urlParams.has("user")) {
            sessionStorage.setItem("sijil_username", urlParams.get("user"));
        }
    }

    if (urlParams.has("logged_out")) {
        sessionStorage.removeItem("sijil_logged_in");
        sessionStorage.removeItem("sijil_username");
    }

    function updateSidebarUser(username) {
        const userNameEl = document.getElementById("currentUserName");
        const userAvatarEl = document.getElementById("currentUserAvatar");
        if (userNameEl && username) {
            userNameEl.textContent = username;
        }
        if (userAvatarEl && username) {
            const parts = username.trim().split(" ");
            const initials = parts.length > 1
                ? parts[0].charAt(0) + " " + parts[1].charAt(0)
                : username.trim().substring(0, 2);
            userAvatarEl.textContent = initials.toUpperCase();
        }
    }

    const savedUser = sessionStorage.getItem("sijil_username");
    if (savedUser) {
        updateSidebarUser(savedUser);
    }

    // جلب الإحصائيات الحية واسم المدير من قاعدة البيانات في الصفحات المحمية
    const isProtectedPage = document.body.classList.contains("protected-page");
    if (isProtectedPage) {
        fetch("stats_api.php")
            .then(res => res.json())
            .then(data => {
                if (data.authenticated === false) {
                    window.location.replace("login.html?auth_required=1");
                    return;
                }
                sessionStorage.setItem("sijil_logged_in", "true");
                sessionStorage.setItem("sijil_username", data.username);
                updateSidebarUser(data.username);

                const totalEl = document.getElementById("statTotalStudents");
                const recentEl = document.getElementById("statRecentStudents");
                if (totalEl) totalEl.textContent = data.total_students;
                if (recentEl) recentEl.textContent = data.recent_students;
            })
            .catch(() => {
                // في حال فتح index.html بدون PHP
                if (sessionStorage.getItem("sijil_logged_in") !== "true") {
                    window.location.replace("login.html?auth_required=1");
                }
            });
    }

    // =========================================================================
    // 4. التحقق في صفحة تسجيل الدخول وإنشاء الحساب
    // =========================================================================
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        const errorBox = document.getElementById("loginError");
        const errorText = document.getElementById("loginErrorText");

        if (urlParams.has("auth_required")) {
            errorText.textContent = "يرجى تسجيل الدخول أولاً للوصول إلى لوحة التحكم.";
            errorBox.classList.remove("d-none");
        } else if (urlParams.has("error")) {
            errorText.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة!";
            errorBox.classList.remove("d-none");
        } else if (urlParams.has("registered")) {
            errorBox.className = "alert alert-success py-2 small";
            errorText.textContent = "تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.";
            errorBox.classList.remove("d-none");
        }
    }

    // =========================================================================
    // 5. التحقق الفوري عبر AJAX لنموذج إضافة طالب (add_student.php)
    // =========================================================================
    const addStudentForm = document.getElementById("addStudentForm");
    if (addStudentForm) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const addressInput = document.getElementById("address");
        const ajaxAlert = document.getElementById("ajaxAlert");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        function validateField(input, condition) {
            if (!condition) {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
                return false;
            } else {
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
                return true;
            }
        }

        nameInput.addEventListener("input", () => validateField(nameInput, nameInput.value.trim() !== ""));
        emailInput.addEventListener("input", () => validateField(emailInput, emailRegex.test(emailInput.value.trim())));
        phoneInput.addEventListener("input", () => validateField(phoneInput, phoneInput.value.trim().length >= 8));
        addressInput.addEventListener("input", () => validateField(addressInput, addressInput.value.trim() !== ""));

        addStudentForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const vName = validateField(nameInput, nameInput.value.trim() !== "");
            const vEmail = validateField(emailInput, emailRegex.test(emailInput.value.trim()));
            const vPhone = validateField(phoneInput, phoneInput.value.trim().length >= 8);
            const vAddress = validateField(addressInput, addressInput.value.trim() !== "");

            if (!vName || !vEmail || !vPhone || !vAddress) {
                ajaxAlert.className = "alert alert-danger";
                ajaxAlert.textContent = "يرجى تصحيح الحقول الملونة بالأحمر قبل الحفظ.";
                ajaxAlert.classList.remove("d-none");
                return;
            }

            const formData = new FormData(addStudentForm);

            fetch("add_student.php", {
                method: "POST",
                body: formData,
                headers: { "X-Requested-With": "XMLHttpRequest" }
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    ajaxAlert.className = "alert alert-success";
                    ajaxAlert.textContent = data.message;
                    ajaxAlert.classList.remove("d-none");
                    addStudentForm.reset();
                    [nameInput, emailInput, phoneInput, addressInput].forEach(el => el.classList.remove("is-valid"));
                } else {
                    ajaxAlert.className = "alert alert-danger";
                    ajaxAlert.textContent = data.message || "حدث خطأ أثناء الإضافة.";
                    ajaxAlert.classList.remove("d-none");
                }
            })
            .catch(() => {
                ajaxAlert.className = "alert alert-danger";
                ajaxAlert.textContent = "تعذر الاتصال بالخادم.";
                ajaxAlert.classList.remove("d-none");
            });
        });
    }
});

function confirmDelete(event, studentId, studentName) {
    if (!confirm(`هل أنت متأكد من حذف سجل الطالب "${studentName}" نهائياً؟`)) {
        event.preventDefault();
        return false;
    }
    return true;
}