# Combine Next.js Render Strategies

A demonstration project showcasing how to combine multiple rendering strategies (SSG, SSR, and CSR) within a single Next.js page using Parallel Routes.

## 🎯 Project Goal

This project demonstrates the powerful capability of Next.js to combine different rendering strategies on a single page, allowing developers to optimize performance and user experience by choosing the right rendering method for each component.

## 🚀 Features

- **SSG (Static Site Generation)**: Pre-rendered content at build time for optimal performance
- **SSR (Server-Side Rendering)**: Dynamic content rendered on each request
- **CSR (Client-Side Rendering)**: Interactive content rendered in the browser
- **Parallel Routes**: Using Next.js slots to combine different rendering strategies
- **API Routes**: RESTful endpoints for products and categories

## 📁 Project Structure

```
app/
├── @ssg/              # Static Site Generation slot
├── @ssr/              # Server-Side Rendering slot
├── api/               # API route handlers
│   ├── products/      # Products endpoints
│   └── categories/    # Categories endpoints
├── layout.tsx         # Root layout
└── page.tsx           # Client-Side Rendering (children slot)
```

## 🏗️ Architecture

### Parallel Routes Implementation

This project uses Next.js Parallel Routes (slots) to combine different rendering strategies:

1. **`@ssg` Slot**: Handles static content that is generated at build time

   - Best for content that rarely changes
   - Provides fastest loading times
   - SEO-friendly

2. **`@ssr` Slot**: Handles dynamic content that needs to be rendered on each request

   - Perfect for personalized content
   - Always fresh data
   - Good for SEO

3. **`page.tsx` (Children Slot)**: Implements Client-Side Rendering
   - Interactive components
   - User-specific interactions
   - Dynamic updates without page reload

### How It Works

```tsx
// layout.tsx (Root Layout)
export default function Layout({
  children,
  ssg,
  ssr,
}: {
  children: React.ReactNode;
  ssg: React.ReactNode;
  ssr: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {ssg} {/* Static content */}
        {ssr} {/* Server-rendered content */}
        {children} {/* Client-rendered content */}
      </body>
    </html>
  );
}
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/mr-mahdiyar/combine-nextjs-render-strategies.git

# Navigate to project directory
cd combine-nextjs-render-strategies

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## 📚 Understanding Rendering Strategies

### Static Site Generation (SSG)

- HTML is generated at **build time**
- Same HTML is served for each request
- **Best for**: Blogs, documentation, marketing pages
- **Pros**: Fastest performance, best SEO, low server load
- **Cons**: Content is static until next build

### Server-Side Rendering (SSR)

- HTML is generated on **each request**
- Fresh content on every page load
- **Best for**: Personalized dashboards, real-time data, dynamic content
- **Pros**: Always up-to-date, good SEO, dynamic content
- **Cons**: Slower than SSG, higher server load

### Client-Side Rendering (CSR)

- HTML is rendered in the **browser**
- JavaScript downloads and executes to render content
- **Best for**: Interactive features, user-specific UI, authenticated pages
- **Pros**: Highly interactive, reduces server load
- **Cons**: Slower initial load, not great for SEO

## 🔌 API Routes

The project includes API route handlers for:

### Products

```
GET /api/products
```

### Categories

```
GET /api/categories
```

These endpoints demonstrate how to create backend functionality within Next.js.

## 💡 Key Concepts

### Parallel Routes (Slots)

Parallel Routes allow you to render multiple pages in the same layout simultaneously. Slots are defined using the `@folder` convention:

- `@ssg` → accessed as `ssg` prop in layout
- `@ssr` → accessed as `ssr` prop in layout
- `children` → default slot from `page.tsx`

### Benefits of This Approach

1. **Performance Optimization**: Use SSG for static content, SSR for dynamic content, and CSR for interactions
2. **Better User Experience**: Fast initial load (SSG) + fresh data (SSR) + interactivity (CSR)
3. **SEO-Friendly**: Pre-rendered content is crawlable by search engines
4. **Flexible Architecture**: Mix and match strategies based on component requirements

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Rendering Strategies](https://nextjs.org/docs/app/building-your-application/rendering)
- [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created by [mr-mahdiyar](https://github.com/mr-mahdiyar)

---

## 🌐 توضیح مختصر

### هدف پروژه

این پروژه نشان می‌دهد چگونه می‌توان استراتژی‌های مختلف رندرینگ (SSG، SSR و CSR) را در یک صفحه Next.js ترکیب کرد.

### معماری

- **`@ssg`**: محتوای استاتیک که در زمان build ساخته می‌شود
- **`@ssr`**: محتوای داینامیک که در هر درخواست رندر می‌شود
- **`page.tsx`**: محتوای تعاملی که در مرورگر رندر می‌شود

### نصب و اجرا

```bash
npm install
npm run dev
```

برای مشاهده نتیجه به آدرس [http://localhost:3000](http://localhost:3000) مراجعه کنید.
