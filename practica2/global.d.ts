// global.d.ts
import React from 'https://dev.jspm.io/react@17.0.2';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
