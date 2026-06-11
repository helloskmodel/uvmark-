# UVMARK Solutions Website

Lead-generation website for laboratory labeling and identification solutions.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deployment

The project is configured for Vercel. Connect the GitHub repository and use:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Before publishing

1. Confirm the Web3Forms access key in `src/pages/Contact.jsx` delivers to the correct inbox.
2. Test a real form submission.
3. Add Google Analytics and Search Console verification when those accounts are available.
4. Replace or expand claims with verified certifications, customer proof, and product photography as available.
