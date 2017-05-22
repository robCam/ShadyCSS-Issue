class MyElement extends HTMLElement {

    constructor() {
        super();

        if (!this._template) {
            throw Error(`Missing <template id="${this._tagName}-template">`);
        }

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(this._template.content.cloneNode(true));
    }

    static get tagName() {
        return 'my-element';
    }

    get _tagName() {
        return MyElement.tagName;
    }

    get _template() {
        return document.querySelector(`#${MyElement.tagName}-template`);
    }

    connectedCallback() {
        if ('ShadyCSS' in window) {
            ShadyCSS.prepareTemplate(this._template, this._tagName);

            // Chrome 49.0.2623.112 (64-bit) - seems to need this only.
            // Firefox 48.0.2 - doesn't need this.
            ShadyCSS.styleElement(this);
        }
    }
}

export default MyElement;
