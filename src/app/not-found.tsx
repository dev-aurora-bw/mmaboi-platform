import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 flex items-center justify-center">
        <div className="text-center">
          <SearchX className="mx-auto h-24 w-24 text-primary mb-6" />
          <h1 className="text-6xl font-bold font-headline text-primary">404</h1>
          <p className="mt-4 text-2xl text-muted-foreground">Page Not Found</p>
          <p className="mt-2 text-muted-foreground">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/">Go back home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
