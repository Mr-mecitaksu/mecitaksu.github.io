/**
 * Abdülmecit Aksu — CV & Portfolyo
 * GitHub profil ve proje bağlantılarınızı aşağıdan güncelleyebilirsiniz.
 */

const PORTFOLIO_CONFIG = {
  fullName: "Abdülmecit Aksu",
  email: "mecitaksu230@gmail.com",
  githubProfileUrl: "https://github.com/",
  projectLinks: {
    1: "https://github.com/",
    2: "https://github.com/"
  }
};

const I18N = {
  tr: {
    "nav.about": "Hakkımda",
    "nav.experience": "Deneyim",
    "nav.education": "Eğitim",
    "nav.skills": "Yetkinlikler",
    "nav.projects": "Projeler",
    "nav.contact": "İletişim",
    "nav.print": "PDF İndir",
    "hero.role": "Junior Software Developer & IT Uzmanı",
    "hero.workPref": "İş yerinde / Hybrid (Kocaeli) & Uzaktan (Remote)",
    "hero.bio1": "Kocaeli Üniversitesi <strong>Bilgisayar Programcılığı</strong> mezunuyum. Eğitim hayatım boyunca ve sonrasında; kurumsal standartlara uygun web uygulamaları ve backend sistemleri geliştirmeye odaklandım. <strong>Temiz kod yazımı</strong>, <strong>veritabanı yönetimi</strong> ve <strong>nesne yönelimli programlama (OOP)</strong> prensiplerini projelerime uygulamaya özen gösteriyorum.",
    "hero.bio2": "Hem yazılım geliştirme (C#, ASP.NET Core, PHP, SQL) hem de sahadaki bilgi işlem/sistem yönetimi (ERP, donanım, teknik destek) deneyimlerimi birleştirerek, sürekli gelişen teknoloji ekosistemine uyum sağlamayı ve karmaşık problemlere ölçeklenebilir çözümler üretmeyi seviyorum. <strong>Junior Software Developer</strong> olarak sektörel deneyim kazanabileceğim, yenilikçi projelerde yer almaya hazırım.",
    "hero.copyEmail": "E-postayı Kopyala",
    "exp.title": "Deneyim",
    "exp.role": "IT Teknisyeni (Stajyer)",
    "exp.date": "Temmuz 2025 – Ağustos 2025 (2 Ay)",
    "exp.loc": "Hendek, Sakarya · Ofiste",
    "exp.b1": "Kurumsal <strong>ERP (Kurumsal Kaynak Planlaması)</strong> sistemlerinin operasyonel süreçlerine destek verilmesi ve <strong>SQL</strong> tabanlı veri kontrollerinin sağlanması.",
    "exp.b2": "Şirket içi bilgi işlem altyapısı, <strong>QNAP</strong> depolama sistemleri ve sunucu/sistem yönetimi süreçlerinde aktif görev alınması.",
    "exp.b3": "Son kullanıcı donanım, yazılım ve ağ sorunlarının tespiti, sorun giderme (troubleshooting) ve teknik servis süreçlerinin yürütülmesi.",
    "exp.b4": "Microsoft Office (özellikle ileri düzey Excel) ve kurumsal yazılım araçlarının departmanlar arası verimli kullanımına teknik destek sağlanması.",
    "edu.title": "Eğitim",
    "edu.kouDegree": "Önlisans – Bilgisayar Programcılığı (Computer Programming)",
    "edu.kouDate": "Ekim 2023 – Eylül 2025",
    "edu.kouFocus": "<strong>Odak Alanları:</strong> Nesne Yönelimli Programlama (OOP), Web Tabanlı Uygulama Geliştirme, İlişkisel Veritabanı Yönetimi (SQL), Veri Yapıları.",
    "edu.kouTech": "<strong>Öne Çıkan Teknolojiler:</strong> C#, ASP.NET Core, PHP, C++, SQL, HTML5, CSS3, JavaScript.",
    "edu.42Degree": "Yazılım Geliştirme & Akran Öğrenmesi (Peer-to-Peer) Programı",
    "edu.42Desc": "Proje tabanlı yoğun kodlama, algoritmik düşünme ve düşük seviyeli programlama (C / C++) pratikleri.",
    "skills.title": "Teknik Yetkinlikler",
    "skills.cat1": "Backend & Programlama",
    "skills.val1": `<span class="tag">C#</span><span class="tag">ASP.NET Core</span><span class="tag">PHP</span><span class="tag">C++</span><span class="tag">Nesne Yönelimli Programlama (OOP)</span>`,
    "skills.cat2": "Frontend Geliştirme",
    "skills.val2": `<span class="tag">HTML5</span><span class="tag">CSS3</span><span class="tag">JavaScript</span><span class="tag">Responsive Web Tasarımı</span>`,
    "skills.cat3": "Veritabanı Yönetimi",
    "skills.val3": `<span class="tag">SQL</span><span class="tag">Veritabanı Tasarımı</span><span class="tag">Sorgu Optimizasyonu</span>`,
    "skills.cat4": "Sistem & Bilgi İşlem (IT)",
    "skills.val4": `<span class="tag">Sistem Yönetimi</span><span class="tag">Bilgi İşlem</span><span class="tag">Teknik Destek</span><span class="tag">Sorun Giderme (Troubleshooting)</span><span class="tag">Bilgisayar Donanımı</span><span class="tag">Teknik Servisler</span>`,
    "skills.cat5": "Kurumsal & Depolama",
    "skills.val5": `<span class="tag">ERP (Kurumsal Kaynak Planlaması)</span><span class="tag">QNAP Depolama Sistemleri</span><span class="tag">Microsoft Office & İleri Excel</span>`,
    "proj.title": "Öne Çıkan Projeler",
    "proj.p1Title": "Kurumsal Web Uygulaması & Yönetim Paneli",
    "proj.p1Desc": "Nesne yönelimli programlama (OOP) ve temiz kod standartlarıyla geliştirilmiş, rol tabanlı yetkilendirme ve veritabanı işlemlerini kapsayan full-stack web uygulaması.",
    "proj.p2Title": "Dinamik İçerik ve Veri Yönetim Sistemi",
    "proj.p2Desc": "İlişkisel veritabanı mimarisi üzerine kurgulanmış, CRUD operasyonlarını ve raporlama süreçlerini hızlandıran web tabanlı çözüm.",
    "contact.title": "İletişim",
    "contact.desc": "<strong>Junior Software Developer</strong> veya <strong>Bilgi İşlem / Sistem Destek</strong> pozisyonlarındaki fırsatlar için benimle doğrudan iletişime geçebilirsiniz.",
    "contact.emailLabel": "E-posta",
    "contact.locLabel": "Konum",
    "contact.locVal": "Kartepe, Kocaeli / Türkiye",
    "footer.note": "Junior Software Developer & IT Uzmanı"
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.print": "Download PDF",
    "hero.role": "Junior Software Developer & IT Specialist",
    "hero.workPref": "On-site / Hybrid (Kocaeli) & Remote",
    "hero.bio1": "I am a <strong>Computer Programming</strong> graduate from Kocaeli University. Throughout my education and beyond, I have focused on developing enterprise-grade web applications and backend systems, applying <strong>clean code</strong>, <strong>database management</strong>, and <strong>Object-Oriented Programming (OOP)</strong> principles across my projects.",
    "hero.bio2": "By combining software development (C#, ASP.NET Core, PHP, SQL) with hands-on IT and systems administration experience (ERP, hardware, technical support), I enjoy adapting to evolving technologies and building scalable solutions for complex problems. I am ready to contribute to innovative projects as a <strong>Junior Software Developer</strong>.",
    "hero.copyEmail": "Copy Email",
    "exp.title": "Experience",
    "exp.role": "IT Technician (Intern)",
    "exp.date": "July 2025 – August 2025 (2 Months)",
    "exp.loc": "Hendek, Sakarya · On-site",
    "exp.b1": "Supported operational processes of enterprise <strong>ERP (Enterprise Resource Planning)</strong> systems and performed <strong>SQL</strong>-based data verification.",
    "exp.b2": "Actively participated in internal IT infrastructure, <strong>QNAP</strong> storage systems, and server/system administration.",
    "exp.b3": "Diagnosed and resolved end-user hardware, software, and network issues (troubleshooting) and managed technical service workflows.",
    "exp.b4": "Provided technical support for efficient cross-departmental use of Microsoft Office (especially advanced Excel) and corporate software tools.",
    "edu.title": "Education",
    "edu.kouDegree": "Associate Degree – Computer Programming",
    "edu.kouDate": "October 2023 – September 2025",
    "edu.kouFocus": "<strong>Focus Areas:</strong> Object-Oriented Programming (OOP), Web-Based Application Development, Relational Database Management (SQL), Data Structures.",
    "edu.kouTech": "<strong>Key Technologies:</strong> C#, ASP.NET Core, PHP, C++, SQL, HTML5, CSS3, JavaScript.",
    "edu.42Degree": "Software Development & Peer-to-Peer Learning Program",
    "edu.42Desc": "Intensive project-based coding, algorithmic thinking, and low-level programming (C / C++) practices.",
    "skills.title": "Technical Skills",
    "skills.cat1": "Backend & Programming",
    "skills.val1": `<span class="tag">C#</span><span class="tag">ASP.NET Core</span><span class="tag">PHP</span><span class="tag">C++</span><span class="tag">Object-Oriented Programming (OOP)</span>`,
    "skills.cat2": "Frontend Development",
    "skills.val2": `<span class="tag">HTML5</span><span class="tag">CSS3</span><span class="tag">JavaScript</span><span class="tag">Responsive Web Design</span>`,
    "skills.cat3": "Database Management",
    "skills.val3": `<span class="tag">SQL</span><span class="tag">Database Design</span><span class="tag">Query Optimization</span>`,
    "skills.cat4": "Systems & IT",
    "skills.val4": `<span class="tag">System Administration</span><span class="tag">IT Operations</span><span class="tag">Technical Support</span><span class="tag">Troubleshooting</span><span class="tag">Computer Hardware</span><span class="tag">Technical Services</span>`,
    "skills.cat5": "Enterprise & Storage",
    "skills.val5": `<span class="tag">ERP Systems</span><span class="tag">QNAP Storage Systems</span><span class="tag">Microsoft Office & Advanced Excel</span>`,
    "proj.title": "Featured Projects",
    "proj.p1Title": "Enterprise Web Application & Admin Dashboard",
    "proj.p1Desc": "Full-stack web application built with Object-Oriented Programming (OOP) and clean code standards, featuring role-based authorization and database operations.",
    "proj.p2Title": "Dynamic Content & Data Management System",
    "proj.p2Desc": "Web-based solution built on a relational database architecture to streamline CRUD operations and reporting workflows.",
    "contact.title": "Contact",
    "contact.desc": "Feel free to contact me directly for <strong>Junior Software Developer</strong> or <strong>IT / Systems Support</strong> opportunities.",
    "contact.emailLabel": "Email",
    "contact.locLabel": "Location",
    "contact.locVal": "Kartepe, Kocaeli / Türkiye",
    "footer.note": "Junior Software Developer & IT Specialist"
  }
};

let currentLang = localStorage.getItem("abdulmecit_cv_lang") || "tr";
let toastTimer = null;

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang, false);
  initLinks();
  initScrollReveal();
  initScrollEffects();

  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const next = currentLang === "tr" ? "en" : "tr";
      applyLanguage(next, true);
    });
  }

  const printBtn = document.getElementById("printBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }

  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const email = copyBtn.getAttribute("data-email") || PORTFOLIO_CONFIG.email;
      navigator.clipboard?.writeText(email);
      showToast(currentLang === "tr" ? "E-posta adresi kopyalandı" : "Email address copied");
    });
  }
});

function applyLanguage(lang, animate = false) {
  currentLang = lang;
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("abdulmecit_cv_lang", lang);

  const updateDOM = () => {
    const label = document.getElementById("langLabel");
    if (label) label.textContent = lang === "tr" ? "EN" : "TR";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (I18N[lang][key]) {
        el.innerHTML = I18N[lang][key];
      }
    });
  };

  if (animate) {
    document.body.classList.add("lang-switching");
    setTimeout(() => {
      updateDOM();
      document.body.classList.remove("lang-switching");
    }, 150);
  } else {
    updateDOM();
  }
}

function initLinks() {
  document.querySelectorAll(".github-profile-link").forEach((el) => {
    el.setAttribute("href", PORTFOLIO_CONFIG.githubProfileUrl);
  });

  document.querySelectorAll(".github-project-link").forEach((el) => {
    const id = el.getAttribute("data-proj-link");
    el.setAttribute("href", PORTFOLIO_CONFIG.projectLinks[id] || PORTFOLIO_CONFIG.githubProfileUrl);
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".intro-section, .cv-section, .timeline-item, .skill-row, .project-item"
  );

  targets.forEach((el, idx) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${Math.min((idx % 5) * 45, 180)}ms`;
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

function initScrollEffects() {
  const header = document.getElementById("siteHeader");
  const progress = document.getElementById("scrollProgress");
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".site-nav a");

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (header) {
      header.classList.toggle("scrolled", scrollTop > 16);
    }

    if (progress) {
      const pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      progress.style.width = `${pct}%`;
    }

    let activeId = "about";
    sections.forEach((sec) => {
      if (scrollTop + 160 >= sec.offsetTop) {
        activeId = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
