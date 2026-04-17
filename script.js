(function () {
    "use strict";

    var HEADER_OFFSET = 72;

    var burger = document.getElementById("nav-burger");
    var navMobile = document.getElementById("nav-mobile");
    var navLinks = document.querySelectorAll(".nav-link");
    var mobileLinks = document.querySelectorAll(".nav-mobile a");
    var copyEmailBtn = document.getElementById("copy-email-btn");
    var copyLabel = document.getElementById("copy-label");
    var contactEmail = "adarshtriada@gmail.com";

    function smoothScrollToHash(hash) {
        if (!hash || hash === "#") return;
        var el = document.querySelector(hash);
        if (!el) return;
        var top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    }

    function closeMobileNav() {
        if (!burger || !navMobile) return;
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        navMobile.classList.remove("is-open");
        navMobile.setAttribute("aria-hidden", "true");
    }

    function openMobileNav() {
        if (!burger || !navMobile) return;
        burger.classList.add("is-open");
        burger.setAttribute("aria-expanded", "true");
        navMobile.classList.add("is-open");
        navMobile.setAttribute("aria-hidden", "false");
    }

    function toggleMobileNav() {
        if (!burger || !navMobile) return;
        if (navMobile.classList.contains("is-open")) closeMobileNav();
        else openMobileNav();
    }

    function updateActiveNav() {
        var y = window.scrollY + HEADER_OFFSET + 24;
        var sections = ["about", "experience", "projects", "achievements", "gallery", "writeups", "contact"];
        var current = null;
        sections.forEach(function (id) {
            var sec = document.getElementById(id);
            if (!sec) return;
            var top = sec.offsetTop;
            var bottom = top + sec.offsetHeight;
            if (y >= top && y < bottom) current = id;
        });
        navLinks.forEach(function (link) {
            var id = link.getAttribute("data-section");
            link.classList.toggle("is-active", id === current);
        });
    }

    function bindHashLinks(root) {
        (root || document).querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            var href = anchor.getAttribute("href");
            if (!href || href === "#") return;
            var target = document.querySelector(href);
            if (!target) return;
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                smoothScrollToHash(href);
                closeMobileNav();
            });
        });
    }

    function bindCopyEmail() {
        if (!copyEmailBtn || !copyLabel || !navigator.clipboard) return;
        copyEmailBtn.addEventListener("click", function () {
            navigator.clipboard.writeText(contactEmail).then(
                function () {
                    copyLabel.textContent = "copied";
                    window.setTimeout(function () {
                        copyLabel.textContent = "copy email";
                    }, 1800);
                },
                function () {
                    copyLabel.textContent = "failed";
                    window.setTimeout(function () {
                        copyLabel.textContent = "copy email";
                    }, 1800);
                }
            );
        });
    }

    function initReveal() {
        var nodes = document.querySelectorAll(".reveal, .reveal-stagger");
        if (!nodes.length || !("IntersectionObserver" in window)) {
            nodes.forEach(function (n) {
                n.classList.add("is-visible");
            });
            return;
        }
        var obs = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        );
        nodes.forEach(function (n) {
            obs.observe(n);
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        bindHashLinks(document);

        if (burger && navMobile) {
            burger.addEventListener("click", toggleMobileNav);
        }

        mobileLinks.forEach(function (link) {
            link.addEventListener("click", closeMobileNav);
        });

        window.addEventListener("scroll", function () {
            updateActiveNav();
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 600) closeMobileNav();
        });

        updateActiveNav();
        initReveal();
        bindCopyEmail();

        if (window.location.hash) {
            requestAnimationFrame(function () {
                smoothScrollToHash(window.location.hash);
            });
        }
    });
})();
