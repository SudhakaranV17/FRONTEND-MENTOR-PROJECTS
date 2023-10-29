import "./style.scss";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { CSSPlugin } from "gsap/all";
import { gsap } from "gsap/gsap-core";

gsap.registerPlugin(CSSRulePlugin, CSSPlugin)
let menu_links = document.querySelector(".nav-links-links");
let menu_btns = document.querySelector(".sign-btns");
let menubtn = document.querySelector(".mobile-nav-menu");

const x = window.matchMedia("(max-width: 993px)");
let flag = false;
menubtn.addEventListener("click", () => {
  if (x) {
    if (flag) {
      menu_links.style.display = 'block';
      menu_btns.style.display = 'block';
      flag = false;
    }
    else {
      menu_links.style.display = 'none';
      menu_btns.style.display = 'none';
      flag = true;
    }
  }
  else {
    menu_links.style.display = 'block';
    menu_btns.style.display = 'block';
  }
})