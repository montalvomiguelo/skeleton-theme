// Base styles for the component
const styles = `
  :host {
    display: block;
    contain: content;
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    --tw-border-opacity: 1;
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color, rgba(0, 0, 0, 0.1)), 0 2px 4px -1px var(--tw-shadow-color, rgba(0, 0, 0, 0.06));
  }
  
  .max-w-md { max-width: 28rem; }
  .md\:max-w-2xl { max-width: 42rem; }
  .mx-auto { margin-left: auto; margin-right: auto; }
  .bg-white { --tw-bg-opacity: 1; background-color: rgb(255 255 255 / var(--tw-bg-opacity)); }
  .rounded-xl { border-radius: 0.75rem; }
  .shadow-md { box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); }
  .overflow-hidden { overflow: hidden; }
  .transition-shadow { transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
  .duration-300 { transition-duration: 300ms; }
  .hover\:shadow-lg:hover { --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color, rgba(0, 0, 0, 0.1)), 0 4px 6px -2px var(--tw-shadow-color, rgba(0, 0, 0, 0.05));
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); }
  .p-8 { padding: 2rem; }
  .flex { display: flex; }
  .items-center { align-items: center; }
  .mb-4 { margin-bottom: 1rem; }
  .p-3 { padding: 0.75rem; }
  .bg-blue-100 { --tw-bg-opacity: 1; background-color: rgb(219 234 254 / var(--tw-bg-opacity)); }
  .rounded-full { border-radius: 9999px; }
  .mr-3 { margin-right: 0.75rem; }
  .w-8 { width: 2rem; }
  .h-8 { height: 2rem; }
  .text-blue-600 { --tw-text-opacity: 1; color: rgb(37 99 235 / var(--tw-text-opacity)); }
  .text-2xl { font-size: 1.5rem; line-height: 2rem; }
  .font-bold { font-weight: 700; }
  .text-gray-800 { --tw-text-opacity: 1; color: rgb(31 41 55 / var(--tw-text-opacity)); }
  .mt-2 { margin-top: 0.5rem; }
  .text-gray-600 { --tw-text-opacity: 1; color: rgb(75 85 99 / var(--tw-text-opacity)); }
  .mb-6 { margin-bottom: 1.5rem; }
  .justify-between { justify-content: space-between; }
  .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
  .text-gray-500 { --tw-text-opacity: 1; color: rgb(107 114 128 / var(--tw-text-opacity)); }
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .bg-blue-600 { --tw-bg-opacity: 1; background-color: rgb(37 99 235 / var(--tw-bg-opacity)); }
  .text-white { --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity)); }
  .font-medium { font-weight: 500; }
  .rounded-md { border-radius: 0.375rem; }
  .hover\:bg-blue-700:hover { --tw-bg-opacity: 1; background-color: rgb(29 78 216 / var(--tw-bg-opacity)); }
  .focus\:outline-none:focus { outline: 2px solid transparent; outline-offset: 2px; }
  .focus\:ring-2:focus { --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); }
  .focus\:ring-offset-2:focus { --tw-ring-offset-width: 2px; }
  .focus\:ring-blue-500:focus { --tw-ring-opacity: 1; --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity)); }
  .transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
`;

class HelloWorld extends HTMLElement {
  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
  }

  private render(): void {
    // Create style element for the component
    const style = document.createElement('style');
    style.textContent = styles;
    
    // Add the styles to the document head if not already present
    if (!document.getElementById('hello-world-styles')) {
      const globalStyle = document.createElement('style');
      globalStyle.id = 'hello-world-styles';
      globalStyle.textContent = styles;
      document.head.appendChild(globalStyle);
    }
    
    // Create the card structure with Tailwind classes
    const card = document.createElement('div');
    card.className = 'max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl transition-shadow duration-300 hover:shadow-lg';
    
    // Create card content
    const cardContent = document.createElement('div');
    cardContent.className = 'p-8';
    
    // Create card header
    const cardHeader = document.createElement('div');
    cardHeader.className = 'flex items-center mb-4';
    
    // Create icon container
    const iconContainer = document.createElement('div');
    iconContainer.className = 'p-3 bg-blue-100 rounded-full mr-3';
    
    // Create icon
    const icon = document.createElement('div');
    icon.className = 'w-8 h-8 text-blue-600';
    icon.innerHTML = `
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
    `;
    
    // Create title
    const title = document.createElement('h2');
    title.className = 'text-2xl font-bold text-gray-800';
    title.textContent = 'Hello World';
    
    // Create content
    const content = document.createElement('p');
    content.className = 'mt-2 text-gray-600 mb-6';
    content.textContent = 'Welcome to your custom element with Tailwind CSS! This is a beautifully styled card component.';
    
    // Create footer
    const footer = document.createElement('div');
    footer.className = 'flex justify-between items-center';
    
    // Create timestamp
    const timestamp = document.createElement('span');
    timestamp.className = 'text-sm text-gray-500';
    timestamp.textContent = 'Just now';
    
    // Create button
    const button = document.createElement('button');
    button.className = 'px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors';
    button.textContent = 'Get Started';
    
    // Assemble the card
    iconContainer.appendChild(icon);
    cardHeader.appendChild(iconContainer);
    cardHeader.appendChild(title);
    
    footer.appendChild(timestamp);
    footer.appendChild(button);
    
    cardContent.appendChild(cardHeader);
    cardContent.appendChild(content);
    cardContent.appendChild(footer);
    
    card.appendChild(cardContent);
    
    // Clear shadow root and append styles and card
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = '';
      this.shadowRoot.appendChild(style);
      this.shadowRoot.appendChild(card);
    }
  }
}

// Define the custom element
declare global {
  interface HTMLElementTagNameMap {
    'hello-world': HelloWorld;
  }
}

if (!customElements.get('hello-world')) {
  customElements.define('hello-world', HelloWorld);
}

export default HelloWorld;
