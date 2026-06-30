/*==================================================
    FIJNBOS MINISTRIES
    SCRIPT.JS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
      ELEMENTS
    ==============================================*/

    const header = document.querySelector(".header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar a");
    const newsletterForm = document.querySelector(".newsletter-form");


    /*==============================================
      MOBILE MENU
    ==============================================*/

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });

    }

    /*==============================================
      CLOSE MENU AFTER CLICK
    ==============================================*/

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");
            menuToggle.classList.remove("active");

        });

    });

    /*==============================================
      SMOOTH SCROLL
    ==============================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

    /*==============================================
      SCROLL REVEAL
    ==============================================*/

    const revealElements = document.querySelectorAll(

        ".teaching-card, .event-card, .mission-card, .involved-card, .therapy-image, .therapy-content, .newsletter-wrapper, .footer-column"

    );

    revealElements.forEach(el => {

        el.classList.add("reveal");

    });

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    revealElements.forEach(el => observer.observe(el));

    /*==============================================
      ACTIVE NAVIGATION
    ==============================================*/

    const sections = document.querySelectorAll("section[id]");

    function activateMenu() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (window.scrollY >= top && window.scrollY < top + height) {

                current = section.getAttribute("id");

            }

        });


    }

    window.addEventListener("scroll", activateMenu);

    activateMenu();

    /*==============================================
      NEWSLETTER VALIDATION
    ==============================================*/

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", e => {

            e.preventDefault();

            const email = newsletterForm.querySelector("input");

            const value = email.value.trim();

            const regex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!regex.test(value)) {

                alert("Please enter a valid email address.");

                email.focus();

                return;

            }

            alert("Thank you for subscribing!");

            newsletterForm.reset();

        });

    }

    /*==============================================
      IMAGE PARALLAX
    ==============================================*/

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        hero.style.backgroundPositionY =
            window.scrollY * 0.4 + "px";

    });

    /*==============================================
      BUTTON RIPPLE
    ==============================================*/

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-3px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

    /*==============================================
      TEACHING CARD HOVER
    ==============================================*/

    document.querySelectorAll(".teaching-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.boxShadow =
                "0 25px 60px rgba(0,0,0,.12)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.boxShadow = "";

        });

    });

    /*==============================================
      EVENT CARD HOVER
    ==============================================*/

    document.querySelectorAll(".event-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

});


/*==================================================
    OPTIONAL BACK TO TOP BUTTON
==================================================*/

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);

backToTop.style.cssText = `
position:fixed;
right:30px;
bottom:30px;
width:52px;
height:52px;
border:none;
border-radius:50%;
background:#12372A;
color:#fff;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 15px 35px rgba(0,0,0,.15);
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();

    alert('Newsletter integration coming soon.');
});