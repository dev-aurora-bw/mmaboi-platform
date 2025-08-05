import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/common/Header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary text-primary-foreground py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline">
              Hi! We are MmaBoi.
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-8">
              MmaBoi pools ecosystem resources and data to improve access to social assistance services through data driven innovation.
            </p>
            <div className="flex justify-center mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M4 14.5A3.5 3.5 0 0 1 7.5 11H10c.55 0 1-.45 1-1V9c0-1.1-.9-2-2-2H4.5a2.5 2.5 0 0 0 0 5z"/><path d="M20 14.5a3.5 3.5 0 0 0-3.5-3.5H14c-.55 0-1-.45-1-1V9c0-1.1.9-2 2-2h4.5a2.5 2.5 0 1 1 0 5z"/><path d="M11.23 21.62c.4-1.2.3-2.52-.25-3.62-1.35-2.65-3.48-4-5.98-4-1.63 0-3.2.53-4.58 1.42"/><path d="M12.77 21.62c-.4-1.2-.3-2.52.25-3.62 1.35-2.65 3.48-4 5.98-4 1.63 0 3.2.53 4.58 1.42"/><path d="M12.5 6.42c.42-.42.63-1.05.5-1.62-.25-1.1-1.35-2-2.5-2s-2.25.9-2.5 2c-.13.57.08 1.2.5 1.62"/><path d="m11.5 8.5 1-1 1 1"/><path d="M16.5 6.42c.42-.42.63-1.05.5-1.62-.25-1.1-1.35-2-2.5-2s-2.25.9-2.5 2c-.13.57.08 1.2.5 1.62"/><path d="m15.5 8.5 1-1 1 1"/><path d="M7.5 6.42c.42-.42.63-1.05.5-1.62C7.75 3.7 6.65 2.8 5.5 2.8s-2.25.9-2.5 2c-.13.57.08 1.2.5 1.62"/><path d="m6.5 8.5 1-1 1 1"/></svg>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                 <h2 className="text-3xl font-bold font-headline mb-4">Mission</h2>
                 <p className="text-primary-foreground/80">We are on a mission to use emerging technologies and data to provide social security and social justice to vulnerable Africans.</p>
              </div>
               <div className="text-center">
                 <h2 className="text-3xl font-bold font-headline mb-4">Vision</h2>
                 <p className="text-primary-foreground/80">We want to live in an Africa where no vulnerable person is left behind in the continent's development.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
