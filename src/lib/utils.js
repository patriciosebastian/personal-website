import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

export async function trackPageView(slug) {
  if (process.env.NODE_ENV === 'production') {

    try {
      const response = await fetch('/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      });

      response.ok ?
        console.log('Page view tracked successfully:') :
        console.error('Failed to track page view:', response.statusText);

    } catch (error) {
      console.error('Failed to track page view:', error);
    }

  } else {
    console.log('Skipping page view tracking in development mode.');
  }
}
