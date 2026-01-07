# 🚀 Qwik + Tailwind3 "hamburger" Menu

---

## 🚀 QwikJS + Tailwind CSS 3 "hamburger" Menu

We have moved away from the "checkbox hack" and nested CSS files into a Resumable Component architecture.
🛠 The Tech Stack

- QwikJS: A framework that delivers zero JavaScript to the browser initially. It only loads the code for the menu when you actually click it (this is called "Resumability").
- Tailwind CSS 3: A utility-first CSS framework. Instead of writing a separate .css file with 50 lines, we apply small classes directly to the HTML.

## 📂 Code Breakdown

### The Data Structure (menuItems)

Instead of hard-coding every link in HTML, we use a Javascript Array.

- Why? It makes the menu "DRY" (Don't Repeat Yourself). If you want to add a new link, you add one object to the array, and the UI updates automatically.

### Desktop Logic (Pure CSS)

We use Tailwind's group feature to handle dropdowns on desktop.

- group: Placed on the parent container.
- group-hover:opacity-100: Placed on the dropdown. It says: "When the parent is hovered, make me visible."
- Benefit: This requires zero JavaScript to run on your desktop computer, making it incredibly fast.

### Mobile Logic (The Overlay)

On mobile, we switch to a Fixed Overlay that covers the screen.

- fixed inset-0: Pins the menu to all four corners of the screen.
- z-50: Ensures the menu sits "higher" than your page content (which usually lives at z-0).
- bg-slate-900/90: The /90 creates that 90% transparency you requested.

## 🧠 Core Concepts for Juniors

### The **$** Sign (e.g., **component$**, **onClick$** etc. )

In Qwik, the **$** is a signal to the "Optimizer." it tells Qwik: "Slice this code into a separate tiny file." This is why Qwik sites load so fast—the browser doesn't download the "Open Menu" logic until the user actually clicks the button.

### Think of a Signal as a box that holds a value.

- isMobileMenuOpen: A boolean (true or false).
- expandedItem: Stores the name of the menu (e.g., "Products") currently opened on mobile.
- Reacting: When the "box" value changes, Qwik automatically re-renders only the small part of the HTML that needs to change.

### The Mobile Accordion logic

We use max-height for the smooth slide-down effect:

- Closed: max-h-0 and opacity-0.
- Open: max-h-64 (or any height larger than the content) and opacity-100.
- Transition: duration-300 makes the change take 0.3 seconds instead of happening instantly.

## 🎨 How to Customize

To change... -> Find this class...
Transparency -> "bg-slate-900/90 (Change 90 to 50, 75, etc.)"
Menu Blur -> backdrop-blur-md (Change to blur-sm or blur-xl)
Desktop Color -> bg-slate-900
Animation Speed -> duration-300 (300ms)

## 🏃‍♂️ Getting Started

Install dependencies:

```shell
pnpm install
```

Start the development server:

```shell
pnpm dev
```

Build for production:

```shell
pnpm build
```

---

## 📚 Documents

- [Qwik Docs](https://qwik.dev/)
- [Discord](https://qwik.dev/chat)
- [Qwik GitHub](https://github.com/QwikDev/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

### Static Site Generator (Node.js)

Be sure to configure your server to serve very long cache headers for the `build/**/*.js` files.

Typically you'd set the `Cache-Control` header for those files to `public, max-age=31536000, immutable`.

```shell
pnpm build.server
```
