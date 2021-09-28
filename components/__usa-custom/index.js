window.customElements.define('usa-custom',
  class UsaCustom extends HTMLElement{
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
        <!-- HTML goes here -->
      `;
      return content;
    }
  }
);
