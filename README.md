# Live Blog — Next.js + Sanity CMS

A recipe/blog website built with Next.js (App Router, TypeScript, Tailwind) and Sanity CMS as the headless content backend.

## Project Structure

- **`src/`** — Next.js app (pages, components, Sanity client)
- **`studio-live-blog/`** — Sanity Studio (standalone, at `local`)

## How Sanity Is Used

- **Content schemas**: `post` (title, slug, image, categories, excerpt, body) and `category` (title, slug, image, description) — defined in `studio-live-blog/schemaTypes/`.
- **GROQ queries**: all queries live in `src/sanity/lib/queries.ts` (posts, categories, slug lists, filtered posts by category).
- **Sanity client**: configured in `src/sanity/client.ts`, reads `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` from `.env.local`.
- **Image handling**: `src/components/SanityImage.tsx` renders responsive images via `@sanity/image-url`.
- **Live preview**: `src/sanity/lib/live.ts` uses `defineLive` from `next-sanity` for real-time content updates.

## How to Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How to Set Up Sanity From Scratch

1. **Create a Sanity project** at [sanity.io](https://sanity.io) and note the project ID and dataset name.

2. **Set environment variables** in `.env.local`:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Add CORS origin** in Sanity dashboard → API → CORS origins → add `http://localhost:3000`.

4. **Authenticate & deploy schemas**:

   ```bash
   cd studio-live-blog
   npx sanity login
   npx sanity deploy
   ```

5. **Start the Studio** locally:

   ```bash
   cd studio-live-blog
   npx sanity dev
   ```

6. **Add content** in the Studio (posts, categories with images).

Pages will automatically fetch content from Sanity at build time and on revalidation (every 30s by default).
