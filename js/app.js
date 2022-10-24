/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const ul = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * start build the nav
 */
class Navbar {
  toggle = document.querySelector("#toggle");
  navTag = document.querySelector("nav");

  constructor() {
    window.onscroll = this.scroll;

    this.toggleFunction(this.toggle);
  }
  /**
   *	 Build menu
   */
  menu() {
    ul.innerHTML = "";
    sections.forEach((section) => {
      const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
      ul.insertAdjacentHTML("beforeend", listItem);
    });
  }

  /**
   * Scroll to section on link click
   * Scroll to anchor ID using scrollTO event
   */
  scroll() {
    sections.forEach(function (active) {
      let activeLink = ul.querySelector(`[data-nav=${active.id}]`);
      if (
        active.getBoundingClientRect().top >= -400 &&
        active.getBoundingClientRect().top <= 150
      ) {
        active.classList.add("your-active-class");
        activeLink.classList.add("active-link");
      } else {
        active.classList.remove("your-active-class");
        activeLink.classList.remove("active-link");
      }
    });
  }

  /**
   * When the user clicks on the button, scroll to the top of the document
   */
  scrollToSection() {
    ul.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target.dataset.nav) {
        document.getElementById(event.target.dataset.nav).scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    });
  }

  /**
   * change navbar (show and hide menu)
   * @param {target} toggle
   */
  toggleFunction(toggle) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
      this.navTag.classList.toggle("active");
    });
  }
}

let navbar = new Navbar();

(function () {
  /**
   * creating more sections after loaded the page
   */

  addEventListener("load", () => {
    navbar.menu();
  });
})();