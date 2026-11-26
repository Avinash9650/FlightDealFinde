# FlightDealFinder

A Vercel-ready Next.js starter website for a flight discovery project.

## Included
- Responsive homepage and navigation
- Flight search form with airport/city autocomplete suggestions
- One-way and round-trip selector, date, passenger and cabin fields
- Flights, About, Contact, Disclaimer, Privacy Policy, Terms and Cancellation/Refund pages
- Basic SEO metadata

## Important: live flight data is not connected
The current search form is a front-end starter. It validates the form and explains where a flight-search API must be connected. It does **not** fetch live fares, schedules, seat availability or create bookings.

To enable real results, choose a flight-data provider (for example, an authorised airline/GDS/aggregator API), obtain credentials, and implement a server-side Next.js Route Handler. Keep API secrets in Vercel Environment Variables; never expose private keys in browser code. Confirm provider licensing, rate limits, booking permissions and commercial terms.

## Run locally
Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build
```bash
npm run build
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. Sign in at https://vercel.com and choose Add New → Project.
3. Import the repository. Vercel should detect Next.js automatically.
4. Keep the default build settings and click Deploy.
5. To connect your domain, open Project → Settings → Domains and add the domain you own. Follow the DNS records Vercel displays at your domain registrar.

## Before public launch
- Confirm that you own/control `flightdealfinder.com` (or replace it with your actual domain).
- Replace the template legal text with terms reviewed for your business, actual data collection, jurisdiction, analytics/cookies and affiliate relationships.
- Add real contact details and a working contact-form destination.
- Add a flight API and test its terms, price freshness, currency, taxes and booking hand-off.
- Add a cookie consent mechanism if non-essential cookies/analytics are enabled.
- Add a real privacy contact and operator/business identity.
# FlightDealFinde
