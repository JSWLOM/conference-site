# ICETBLS-2026 Conference Website

Official website for the **International Conference on Emerging Trends in Biotechnology, Life Sciences and Sustainability (ICETBLS-2026)**, organized by the Department of Biosciences, School of Physical and Biological Sciences, FoSTA, Manipal University Jaipur.

**Live site:** https://icetbls.vercel.app/

## Conference at a Glance

| | |
|---|---|
| **Theme** | Frontiers in Biotechnology, Life Sciences and Sustainable Innovation |
| **Dates** | 15-16 December 2026 |
| **Venue** | Manipal University Jaipur, Dehmi Kalan, Jaipur-Ajmer Expressway, Rajasthan 303007, India |
| **Mode** | Hybrid (in-person + online) |
| **Publication** | Selected papers considered for a Scopus-indexed journal or book series, subject to peer review |

## Site Sections

- **Hero:** conference title, dates, venue, mode and SDG badges (3, 4, 9, 12, 13, 17)
- **About:** conference overview
- **Themes:** 12 scientific themes for the call for papers
- **Important Dates:** abstract deadline, full paper deadline, review period, acceptance notification
- **Registration:** fee table and payment link
- **Leadership:** patrons, co-patrons, chairs and conveners
- **Speakers:** invited speakers
- **Publications:** publication opportunities
- **Venue:** embedded map, directions and venue tour video
- **Contact:** conference secretariat and quick links

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React + TypeScript)
- [Vite](https://vitejs.dev/)
- Tailwind CSS with shadcn/ui components (`components.json`)
- ESLint and Prettier for linting and formatting
- Vitest for testing
- Deployed on [Vercel](https://vercel.com/)

## Project Structure

```
site/
├── public/          # Static assets (favicon, robots.txt, venue-tour.mp4, speaker images)
├── src/             # Application source (routes, components, styles)
├── components.json  # shadcn/ui configuration
├── vite.config.ts   # Vite / TanStack Start configuration
├── tsconfig.json    # TypeScript configuration
└── package.json     # Dependencies and scripts
```



## Deployment

The site is deployed on Vercel and connected to this Git repository.

1. Push changes to the `main` branch.
2. Vercel detects the new commit and builds automatically.
3. The live site at https://icetbls.vercel.app/ updates after the build succeeds.



## Important Links

- Abstract submission: https://forms.gle/KovdWQ3YggboTnk8A
- Registration and payment: https://formbuilder.ccavenue.com/live/ccavenue/manipal-university-jaipur-2/icetbls-2026020

## Contact

For queries about abstract submission, registration and accommodation, contact the conveners at the Department of Biosciences, Manipal University Jaipur.

---

© 2026 ICETBLS, Manipal University Jaipur. All rights reserved.