# @SDS/TailwindCSS-3

The TailwindCSS 3.x configuration for the SEI Design System.

## Intial Setup

Configure your NPM @sds scoped registry

```bash
npm config set @sds:registry https://artifacts.sei.cmu.edu/artifactory/api/npm/sei-design-system/
```

Configure your NPM registry

```bash
npm config set registry https://artifacts.sei.cmu.edu/artifactory/api/npm/npm/
```

## Documentation

For full documentation, visit [designsystem.sei.cmu.edu](https://designsystem.sei.cmu.edu)

## Contributing

To contribute, please visit [Contributing to the SEI Design System](https://wiki-int.sei.cmu.edu/confluence/x/FpkmGQ)

## Code File Structure

* `/src` -> contains dev site source
* `/tailwindcss` -> contains all relevant Tailwind CSS configurations
* `/open-sans` -> contains all relevant Open Sans font files and CSS
* `/public` -> used by dev site for public assets (favicon.ico, etc)
* `/scripts` -> contains the scripts to bundle and release the node_module to artifactory.

## Development

### Project Setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies dev site for production

```bash
npm run build
```

### Allows for local preview of dev site production build

```bash
npm run serve
```

### Release the node_module

Login to NPM (use your SEI credentials)

```bash
npm login --registry=https://artifacts.sei.cmu.edu/artifactory/api/npm/sei-design-system/
```

Run the release script

```bash
npm run release
```

See `/scripts/release.sh` for details.

## How to use node module in your project

### Step 1

Install [Tailwind CSS 3.x](https://tailwindcss.com/docs/installation).

### Step 2

Install the [official Tailwind CSS plugins](https://tailwindcss.com/docs/plugins#official-plugins):

`npm install @tailwindcss/aspect-ratio @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/typography -D`

### Step 3

Install this node module:

* `npm install @sds/tailwindcss-3 -D`

### Step 4

Configure `tailwind.config.js` to use the SEI Design System preset.

```javascript
// tailwind.config.js
module.exports = {
  presets: [
    require('@sds/tailwindcss-3')
  ],
  // ...
}
```

**Important**: The SDS CSS Components require dark mode. As a result, if you reference `darkMode` in your config, it must be set to either "media" or "class". It cannot be turned off.

### Step 5

Add `import @sds/tailwindcss-3/open-sans/index.css` to your app's entry file **BEFORE** the `tailwind.css` file that should have been created in Step 1.

```javascript
import "@sds/tailwindcss-3/open-sans/index.css";
import "<PATH_TO>/tailwind.css";
```
