'use client'

import { useEffect } from "react"

export default function ConvertKitForm() {
  // Control placement of ConvertKit form
  useEffect(() => {
    // check if the script already exists
    const existingScript = document.querySelector('script[data-uid="d4f5b1b12e"]');
    const formContainer = document.querySelector('#convertkit-form-container');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://patriciosalazar.ck.page/d4f5b1b12e/index.js';
      script.dataset.uid = 'd4f5b1b12e';
      script.async = true;

      script.onload = () => {
        const form = document.querySelector("form[data-uid='d4f5b1b12e']");
        if (form && formContainer) {
          formContainer.appendChild(form);
        }
      };

      document.body.appendChild(script);
    } else {
      const form = document.querySelector("form[data-uid='d4f5b1b12e']");
      if (form && formContainer) {
        formContainer.appendChild(form);
      }
    }
  }, []);

  // Control the ConverKit form logo theme
  useEffect(() => {
    const htmlElement = document.querySelector('html');
    
    const checkTheme = () => {
      const targetElement = document.querySelector('.formkit-powered-by-convertkit');

      if (targetElement && htmlElement.classList.contains('dark')) {
        targetElement.setAttribute('data-variant', 'light');
      } else if (targetElement && htmlElement.classList.contains('light')) {
        targetElement.setAttribute('data-variant', 'dark');
      }
    };

    const formObserver = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        checkTheme();
      });
    });

    formObserver.observe(document.body, { childList: true, subtree: true });

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(htmlElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      formObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <div id="convertkit-form-container"></div>
  );
}