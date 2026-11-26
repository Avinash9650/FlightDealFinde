import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "FlightDealFinder | Find better flight deals", template: "%s | FlightDealFinder" },
  description: "Discover flight options, compare travel ideas and find your next journey with FlightDealFinder.",
  metadataBase: new URL("https://flightdealfinder.com"),
};

const nav = [["Home","/"],["Flights","/flights"],["About","/about"],["Contact","/contact"]];
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <header className="site-header"><div className="nav-wrap">
      <Link className="brand" href="/"><span className="brand-mark">✈</span><span>FlightDeal<span className="brand-accent">Finder</span></span></Link>
      <nav>{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className="nav-cta" href="/#search">Find flights <span>↗</span></Link>
    </div></header>
    <main>{children}</main>
    <footer className="footer"><div className="footer-inner">
      <div><Link className="brand footer-brand" href="/"><span className="brand-mark">✈</span><span>FlightDeal<span className="brand-accent">Finder</span></span></Link><p>Explore your next journey with confidence.</p><small>Flight information and prices should always be confirmed with the selected provider.</small></div>
      <div className="footer-links"><strong>Explore</strong><Link href="/flights">Flights</Link><Link href="/about">About us</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-links"><strong>Information</strong><Link href="/disclaimer">Disclaimer</Link><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms & conditions</Link><Link href="/cancellation-refund">Cancellation & refund</Link></div>
    </div><div className="copyright">© {new Date().getFullYear()} FlightDealFinder. All rights reserved.</div></footer>
  </body></html>;
}
