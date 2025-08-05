import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/icons/Logo';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Logo />
            <p className="mt-4 text-primary-foreground/80">
              We are on a mission to use emerging technologies and data to provide social security and social justice to vulnerable Africans.
            </p>
          </div>
          <div>
            <h3 className="font-bold font-headline text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-white">About Us</Link>
              <Link href="/support-directory" className="text-sm text-primary-foreground/80 hover:text-white">Directory</Link>
              <Link href="/campaigns" className="text-sm text-primary-foreground/80 hover:text-white">Campaigns</Link>
              <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-white">Contact</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-bold font-headline text-lg mb-4">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email address" className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50 text-white" />
              <Button type="submit" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} MmaBoi. All Rights Reserved. <Link href="/privacy" className="underline">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
}
