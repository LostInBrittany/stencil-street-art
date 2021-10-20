# ![Stencil Street Art icon](../img/logo-48px.png)  Stencil Street Art - Step 04: Calling the server


Enough of building an app with five beers in a hard-coded dataset! Let's fetch a larger dataset from our server using the [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

## Data 

Our new dataset is now a list of 11 street art sites stored in JSON format in the `/data/street-art.json`, and their associated images in `data/img/`. Begin by copying `/data` to a `src/data` inside your application.

Now you need to tell Stencil to copy the `src/data` folder into the distribution folder, i.e. to make it available to the compiled application. To do it, open your application's global Stencil configuration file `stencil.config.ts`, and add the `copy` tasks:

```tsx
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-beers',
  globalStyle: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'data' }
      ],
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'data' }
      ],
    },
  ],
};
```

Now the JSON file is available to your browser at the URL `http://127.0.0.1:3333/data/street-art.json`.


![Screenshot](../img/step-04-01.png)