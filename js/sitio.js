/* ==========================================================
   Mila Pasta — encabezado, pie de página y efectos compartidos.
   El encabezado y el pie se escriben UNA sola vez aquí y aparecen
   en todas las páginas. Para cambiar un dato de contacto, edita
   el objeto CONTACTO de abajo.
   ========================================================== */
(function () {
  "use strict";

  var CONTACTO = {
    instagramUsuario: "@mila_pastaa",
    instagramUrl: "https://www.instagram.com/mila_pastaa/",
    facebookNombre: "Mila Pasta",
    facebookUrl: "", // PENDIENTE: pegar aquí el enlace de la página de Facebook
    whatsappTexto: "+52 771 363 6580",
    whatsappUrl: "https://wa.me/527713636580?text=" + encodeURIComponent("Hola Mila Pasta, me gustaría recibir más información."),
    correo: "milapastacontacto@gmail.com",
    privacidadPdf: "", // PENDIENTE: p. ej. "docs/politica-de-privacidad.pdf"
    avisoLegalPdf: ""  // PENDIENTE: p. ej. "docs/aviso-legal.pdf"
  };

  var PAGINAS = [
    { id: "inicio", texto: "Inicio", url: "index.html" },
    { id: "historia", texto: "Nuestra historia", url: "historia.html" },
    { id: "producto", texto: "Producto", url: "producto.html" },
    { id: "recetas", texto: "Recetas", url: "recetas.html" },
    { id: "contacto", texto: "Contacto", url: "#contacto" }
  ];

  var ICONO = {
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.6-1.5h1.5V4.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8.2v3h2.5V21h2.8z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5a9.4 9.4 0 0 0-8.1 14.3L2.6 21.5l4.8-1.3A9.4 9.4 0 1 0 12 2.5zm0 1.7a7.7 7.7 0 1 1-4 14.3l-.3-.2-2.7.7.7-2.6-.2-.3A7.7 7.7 0 0 1 12 4.2zM8.8 7.4c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.300 0 1.300 1 2.700 1.200 2.900.1.2 1.900 3 4.700 4.100 2.300.9 2.800.7 3.300.7.5-.1 1.600-.7 1.800-1.300.2-.6.2-1.200.2-1.300-.1-.1-.3-.2-.6-.3l-1.900-.9c-.3-.1-.5-.2-.7.1l-.9 1.100c-.2.2-.3.2-.6.1-.3-.2-1.200-.4-2.300-1.400-.8-.8-1.400-1.700-1.600-2-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.100c-.2-.5-.4-.5-.6-.5h-.2z"/></svg>',
    correo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.500 7 8.500 6.500L20.500 7"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };

  var pagina = document.body.getAttribute("data-pagina") || "";
  document.documentElement.classList.add("js");

  function atributosExternos(url) {
    return url ? 'href="' + url + '" target="_blank" rel="noopener"' : 'href="#contacto"';
  }

  /* ---------- Encabezado ---------- */
  var enlaces = PAGINAS.map(function (p) {
    var actual = p.id === pagina ? ' aria-current="page"' : "";
    return '<a href="' + p.url + '"' + actual + ">" + p.texto + "</a>";
  }).join("");

  var encabezado =
    '<div class="cinta"><span>✦</span>Naturalmente pasta, verdaderamente nopal<span>✦</span></div>' +
    '<header class="encabezado"><div class="contenedor encabezado__fila">' +
      '<nav class="nav" id="nav" aria-label="Principal">' + enlaces + "</nav>" +
      '<a class="logo" href="index.html" aria-label="Mila Pasta, ir al inicio"><img src="img/logo.png" alt="Mila Pasta" width="500" height="250"></a>' +
      '<div class="redes">' +
        "<a " + atributosExternos(CONTACTO.instagramUrl) + ' aria-label="Instagram de Mila Pasta">' + ICONO.instagram + "</a>" +
        "<a " + atributosExternos(CONTACTO.facebookUrl) + ' aria-label="Facebook de Mila Pasta">' + ICONO.facebook + "</a>" +
        "<a " + atributosExternos(CONTACTO.whatsappUrl) + ' aria-label="WhatsApp de Mila Pasta">' + ICONO.whatsapp + "</a>" +
      "</div>" +
      '<button class="menu-boton" type="button" aria-controls="nav" aria-expanded="false" aria-label="Abrir menú">' + ICONO.menu + "</button>" +
    "</div></header>";

  document.body.insertAdjacentHTML("afterbegin", encabezado);

  var botonMenu = document.querySelector(".menu-boton");
  var nav = document.getElementById("nav");
  botonMenu.addEventListener("click", function () {
    var abierto = nav.classList.toggle("abierto");
    botonMenu.setAttribute("aria-expanded", abierto ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("abierto");
      botonMenu.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Pie de página ---------- */
  function legal(texto, url) {
    return url
      ? '<li><a href="' + url + '" target="_blank" rel="noopener">' + texto + "</a></li>"
      : '<li class="pendiente">' + texto + "<small>Disponible próximamente</small></li>";
  }

  function pie() {
    var facebook = CONTACTO.facebookUrl
      ? '<a href="' + CONTACTO.facebookUrl + '" target="_blank" rel="noopener">' + CONTACTO.facebookNombre + "</a>"
      : "<span>" + CONTACTO.facebookNombre + "</span>";

    return (
      '<footer class="pie" id="contacto"><div class="contenedor">' +
        '<div class="pie__rejilla">' +
          "<div>" +
            '<a class="pie__marca" href="index.html" aria-label="Mila Pasta, ir al inicio"><b>MILA</b><small>PASTA</small></a>' +
            '<p class="pie__lema">“Naturalmente pasta, verdaderamente nopal”</p>' +
          "</div>" +
          '<div><h2>Explora</h2><ul>' +
            PAGINAS.slice(0, 4).map(function (p) { return '<li><a href="' + p.url + '">' + p.texto + "</a></li>"; }).join("") +
          "</ul></div>" +
          '<div><h2>Contacto</h2><ul class="pie__contacto">' +
            "<li>" + ICONO.instagram + '<a href="' + CONTACTO.instagramUrl + '" target="_blank" rel="noopener">' + CONTACTO.instagramUsuario + "</a></li>" +
            "<li>" + ICONO.facebook + facebook + "</li>" +
            "<li>" + ICONO.whatsapp + '<a href="' + CONTACTO.whatsappUrl + '" target="_blank" rel="noopener">' + CONTACTO.whatsappTexto + "</a></li>" +
            "<li>" + ICONO.correo + '<a href="mailto:' + CONTACTO.correo + '">' + CONTACTO.correo + "</a></li>" +
          "</ul></div>" +
          "<div><h2>Legal</h2><ul>" +
            legal("Política de Privacidad", CONTACTO.privacidadPdf) +
            legal("Aviso Legal", CONTACTO.avisoLegalPdf) +
          "</ul></div>" +
        "</div>" +
        '<div class="pie__base"><span>© ' + new Date().getFullYear() + " Mila Pasta. Todos los derechos reservados.</span><span>Orgullosamente hecha en Hidalgo, México.</span></div>" +
      "</div></footer>" +
      '<a class="wa-flotante" href="' + CONTACTO.whatsappUrl + '" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">' + ICONO.whatsapp + "</a>"
    );
  }

  function alCargar() {
    document.body.insertAdjacentHTML("beforeend", pie());

    // Enlaces de WhatsApp dentro del contenido
    document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
      a.href = CONTACTO.whatsappUrl;
      a.target = "_blank";
      a.rel = "noopener";
    });

    // Aparición suave al hacer scroll
    var elementos = document.querySelectorAll(".aparece");
    if (!("IntersectionObserver" in window)) {
      elementos.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    elementos.forEach(function (el) { observador.observe(el); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", alCargar);
  } else {
    alCargar();
  }
})();
