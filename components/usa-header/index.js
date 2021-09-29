window.customElements.define('usa-header',
  class UsaHeader extends HTMLElement{
    constructor(){
      super();
    }

    connectedCallback(){
      const thisRoot = this;
      thisRoot.appendChild(this.style);
      thisRoot.appendChild(this.content);
    }

    get style(){
      let style = document.createElement('style');
      style.innerHTML = `
       /* CSS styles go here */ 
      `;
      return style;
    }

    get content(){
      let content = document.createElement('section');
      content.innerHTML = `
<header class="usa-header usa-header--extended">
  <div class="usa-navbar">
    <div class="usa-logo" id="extended-logo">
      <em class="usa-logo__text">
        <a href="javascript:void(0)" title="U.S. Department of Education">
          U.S. Department of Education
        </a>
      </em>
    </div>
    <button class="usa-menu-btn">Menu</button>
  </div>
  <nav aria-label="Primary navigation" class="usa-nav">
    <div class="usa-nav__inner">
      <button class="usa-nav__close">
        <img src="assets/uswds-2.12.1/img/usa-icons/close.svg" role="img" alt="Close" />
      </button>
      <ul class="usa-nav__primary usa-accordion">
        
        <li class="usa-nav__primary-item">
          <a class="usa-nav__link"
             href="https://www2.ed.gov/fund/grants-college.html?src=pn" >
            Student Loans
          </a>
        </li>

        <li class="usa-nav__primary-item">
          <a class="usa-nav__link"
             href="https://www2.ed.gov/fund/grants-apply.html?src=pn" >
            Grants
          </a>
        </li>

        <li class="usa-nav__primary-item">
          <a class="usa-nav__link"
             href="https://www2.ed.gov/policy/landing.jhtml?src=pn" >
            Laws
          </a>
        </li>

        <li class="usa-nav__primary-item">
          <a class="usa-nav__link"
             href="https://www2.ed.gov/rschstat/landing.jhtml?src=pn" >
            Data
          </a>
        </li>

      </ul>

      <div class="usa-nav__secondary">
        <form class="usa-search usa-search--small" role="search">
          <label class="usa-sr-only" for="extended-search-field-en-small">
            Search
          </label>
          <input
            class="usa-input"
            id="extended-search-field-en-small"
            type="search"
            name="search"
          />
          <button class="usa-button" type="submit">
            <span class="usa-sr-only">Search</span>
          </button>
        </form>
      </div>
    </div>
  </nav>
</header>
      `;
      return content;
    }
  }
);
