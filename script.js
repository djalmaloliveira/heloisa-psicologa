
https://wa.me/5543998728772?text=Olá!%20Gostaria%20de%20conhecer%20o%20atendimento%20psicológico.

/* =====================================================
   MENU MOBILE
===================================================== */

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("mobile-active");

    });

}


/* =====================================================
   TRACKING - GOOGLE ANALYTICS
===================================================== */

function trackEvent(eventName, parameters = {}) {

    if (typeof gtag === "function") {

        gtag("event", eventName, parameters);

    }

}


/* =====================================================
   WHATSAPP CLICKS
===================================================== */

const whatsappButtons =
    document.querySelectorAll('[data-event="whatsapp_click"]');


whatsappButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        trackEvent("whatsapp_click", {

            event_category: "conversion",

            event_label: "WhatsApp",

            value: 1

        });

    });

});


/* =====================================================
   FORMULÁRIO
===================================================== */

const form = document.getElementById("contactForm");


if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !phone) {

            alert("Por favor, preencha seu nome e WhatsApp.");

            return;

        }


        /*
        EVENTO DE CONVERSÃO
        */

        trackEvent("form_submit", {

            event_category: "conversion",

            event_label: "Formulario WhatsApp",

            value: 1

        });


        /*
        WHATSAPP DA PSICÓLOGA

        SUBSTITUA PELO NÚMERO REAL
        */

        const whatsapp =
		
		
            "5543998728772";


        const text =

            `Olá, Heloísa! Meu nome é ${name}. ` +

            `Meu WhatsApp é ${phone}. ` +

            `${message}`;


        const url =

            "https://wa.me/" +

            whatsapp +

            "?text=" +

            encodeURIComponent(text);


        window.open(url, "_blank");

    });

}


/* =====================================================
   TRACKING DE SCROLL
===================================================== */

let scrollTracked = false;


window.addEventListener("scroll", function() {

    const scrollPosition =
        window.scrollY + window.innerHeight;

    const pageHeight =
        document.documentElement.scrollHeight;


    const percentage =
        scrollPosition / pageHeight;


    if (percentage >= 0.75 && !scrollTracked) {

        scrollTracked = true;


        trackEvent("scroll_75", {

            event_category: "engagement",

            event_label: "75% da página"

        });

    }

});
