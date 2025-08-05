import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Logo />
          </div>
          <nav className="flex gap-6 flex-wrap justify-center mb-4 md:mb-0">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link>
            <Link href="/support-directory" className="text-sm text-muted-foreground hover:text-foreground">Directory</Link>
            <Link href="/campaigns" className="text-sm text-muted-foreground hover:text-foreground">Campaigns</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MmaBoi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
