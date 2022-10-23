/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const btn = document.getElementById("btn");
const ul = document.getElementById("navbar__list");
const header = document.querySelector(".page__header");

/**
 * class Template page
 */
class Template {
  counter = 0;
  /**
   * Add new Section
   * @returns Html
   */
  addNewSection() {
    return `<section id="section${this.counter}" data-nav="Section ${this.counter}">
    <div class="landing__container">
      <h2>Section ${this.counter}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          fermentum metus faucibus lectus pharetra dapibus. Suspendisse
          potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
          lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
          convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
          eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
          nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
          lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
          tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
          vitae elit. Integer nec libero venenatis libero ultricies molestie
          semper in tellus. Sed congue et odio sed euismod.
        </p>

        <p>
          Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
          gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
          Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
          consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
          elementum tortor mollis non.
        </p>
      </div>
    </div>
  </section>`;
  }

  /**
   * genrate template
   */
  genrate() {
    this.counter++;
    document
      .querySelector("main")
      .insertAdjacentHTML("beforeend", this.addNewSection());
  }
}

// instance of Template
const temp = new Template();

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
    document.querySelectorAll("section").forEach((section) => {
      const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
      ul.insertAdjacentHTML("beforeend", listItem);
    });
  }

  /**
   * Scroll to section on link click
   * Scroll to anchor ID using scrollTO event
   */
  scroll() {
    document.querySelectorAll("section").forEach(function (active) {
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
    this.ul.addEventListener("click", function (event) {
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
  btn.addEventListener("click", () => {
    temp.genrate();
    navbar.menu();
  });

  /**
   * creating more sections after loded the page
   */
  addEventListener("load", () => {
    for (let i = 0; i < 4; i++) {
      temp.genrate();
      navbar.menu();
    }
  });
})();
