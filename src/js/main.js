import MyElement from './components/my-element.js';

const wrapper = document.querySelector('.wrapper');

window.customElements.whenDefined(MyElement.tagName).then(() => {

    // Creating myElement element via the DOM API
    const myElementA = document.createElement('my-element');
    wrapper.appendChild(myElementA);

    // Creating myElement via the custom element constructor.
    const myElementB = new MyElement();
    wrapper.appendChild(myElementB);
});

window.customElements.define(MyElement.tagName, MyElement);
