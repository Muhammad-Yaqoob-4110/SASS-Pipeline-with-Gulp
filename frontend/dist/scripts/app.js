const showMenu=(e,t)=>{const n=document.getElementById(e),o=document.getElementById(t);n&&o&&n.addEventListener("click",(()=>{o.classList.toggle("show")}))};showMenu("nav-toggle","nav-menu");const navLink=document.querySelectorAll(".nav__link");function linkAction(){document.getElementById("nav-menu").classList.remove("show")}navLink.forEach((e=>e.addEventListener("click",linkAction)));const sections=document.querySelectorAll("section[id]"),scrollActive=()=>{const e=window.scrollY;sections.forEach((t=>{const n=t.offsetHeight,o=t.offsetTop-58,s=t.getAttribute("id"),l=document.querySelector(".nav__menu a[href*="+s+"]");e>o&&e<=o+n?l.classList.add("active-link"):l.classList.remove("active-link")}))};window.addEventListener("scroll",scrollActive);const sr=ScrollReveal({origin:"top",distance:"60px",duration:2e3,delay:200});sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text",{}),sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img",{delay:400}),sr.reveal(".home__social-icon",{interval:200}),sr.reveal(".skills__data, .work__img, .contact__input",{interval:200});