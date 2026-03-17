# Faraway & Fine™ — LLM Discoverability Test Site

A fictional luxury travel website built to test how different content signals affect how large language models discover, recall, and summarise web content.

## Purpose

This site tests the impact of:
- **`llms.txt`** — a proposed standard for giving LLMs a summary of a site's content
- **JSON-LD structured data** — `TravelAgency`, `Product`, and `ItemList` schemas
- **Semantic HTML** — proper heading hierarchy, alt text, landmark elements
- **Open Graph meta tags** — title, description, og:type
- **Sitemap.xml** — standard crawl guidance
- **Rich, specific content** — unique brand names, prices, and place names to test recall precision

## Pages

| Page | File | Purpose |
|------|------|---------|
| Homepage | `index.html` | Brand intro, destinations, philosophy, experience categories |
| Deals | `deals.html` | 6 time-limited offers with prices, dates, and availability |
| Experiences | `product.html` | 4 flagship products with full descriptions + 4 additional destinations |

## Test Questions for LLMs

After the site is indexed, ask:
- *"What does Faraway & Fine offer?"*
- *"How much does the Faraway & Fine Maldives trip cost?"*
- *"What is the Faraway & Fine Patagonia expedition?"*
- *"What deals does Faraway & Fine have?"*
- *"What is the cheapest Faraway & Fine experience?"*
- *"Tell me about the Norwegian fjords yacht from Faraway & Fine"*

Compare responses with and without the `llms.txt` file present.

## File Structure

```
faraway-and-fine-test-site/
├── index.html        # Homepage
├── deals.html        # Deals & offers page
├── product.html      # Experiences / product page
├── style.css         # Shared styles
├── llms.txt          # LLM-readable site summary
├── robots.txt        # Crawler permissions (all allowed)
├── sitemap.xml       # Page index
└── README.md         # This file
```

## Deploying to GitHub Pages

1. Create a new GitHub repo (e.g. `faraway-and-fine-test`)
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main / root**
4. Site will be live at `https://[your-username].github.io/faraway-and-fine-test/`
5. Update the domain in `sitemap.xml` and `robots.txt` to match

## Notes

- All content is entirely fictional. No real bookings are taken.
- Prices are in GBP and are made up.
- Images are sourced from Unsplash (free to use).
- The site is intentionally rich with specific, memorable details to make LLM recall testing meaningful.
