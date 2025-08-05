import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/common/Header';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

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

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">We Are Solving A Complex Social Challenge</h2>
              <p className="text-xl text-muted-foreground mt-2">The Status Quo Unsustainable</p>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-12">
              <div>
                <Image src="https://placehold.co/600x400.png" alt="Map of Africa" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="map africa" />
              </div>
              <div className="flex items-center">
                <div className="space-y-8">
                  <p className="text-lg font-medium">The numbers do not lie about Africa's dire situation.</p>
                  <div>
                    <p className="text-5xl font-bold text-primary">730 million</p>
                    <p className="text-muted-foreground">Africans need Social Protection.</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-primary">17.4%</p>
                    <p className="text-muted-foreground">have cover compared to the global average of <span className="font-semibold">46.9%</span></p>
                  </div>
                </div>
                <ChevronRight className="w-12 h-12 text-primary ml-8" />
              </div>
            </div>
             <p className="text-xs text-muted-foreground mt-4 text-center">*Source: WOMIN, last updated on September mm</p>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-20 md:py-32">
          <div className="container mx-auto px-4">
             <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Covid-19 Inspiration</h2>
            </div>
            <div className="grid md:grid-cols-2 items-center gap-16">
              <div className="space-y-8">
                <p>MmaBoi is one of the 5 out of 190 projects funded by Government of Botswana to address Covid-19 community challenges by digitising the food relief delivery process.</p>
                <blockquote className="border-l-4 border-accent pl-4 italic text-accent text-lg">
                  "...The covid-19 pandemic has exposed deep seated inequalities and significant gaps in social protection everywhere..." ILO
                </blockquote>
                 <div className="flex items-center gap-8">
                   <Image src="https://placehold.co/200x200.png" alt="Stressed person" width={200} height={200} className="rounded-full" data-ai-hint="woman thinking" />
                   <p className="text-primary-foreground/80">The use of manual and paper-based processes during Covid-19 led to low community visibility, long turnaround times, low efficiencies, and limited intervention effectiveness in delivering social protective services in Botswana.</p>
                 </div>
              </div>
              <div>
                 <Image src="https://placehold.co/400x400.png" alt="Botswana and NOTE logos" width={400} height={400} className="rounded-lg shadow-lg bg-white p-4" data-ai-hint="logo collage" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our MVP Exceeded Funding Expectations</h2>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-1/2 -ml-px w-0.5 h-full bg-border" aria-hidden="true"></div>

              <div className="space-y-16">
                {/* Universal Registration */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:pr-8">
                      <Image src="https://placehold.co/500x350.png" alt="Universal Registration" width={500} height={350} className="rounded-lg shadow-lg" data-ai-hint="mobile registration" />
                    </div>
                    <div className="mt-8 md:mt-0">
                      <h3 className="text-2xl font-bold font-headline text-primary mb-2">Universal Registration</h3>
                      <p className="text-muted-foreground">Our solution allows vulnerable people to register their needs using USSD, Facebook, WhatsApp, Mobile and Web Apps - eliminating the use of paper forms. Social workers can also register vulnerable individuals via a Web platform.</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute top-1/2 -mt-4 left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-background justify-center items-center"></div>
                </div>

                {/* Assessment */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:pl-8 md:order-2">
                       <Image src="https://placehold.co/500x350.png" alt="Assessment" width={500} height={350} className="rounded-lg shadow-lg" data-ai-hint="assessment dashboard" />
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1 md:text-right">
                       <h3 className="text-2xl font-bold font-headline text-primary mb-2">Assessment</h3>
                       <p className="text-muted-foreground">The social workers would get a notification when a new application has been submitted. They could then assess and classify the case based on its severity and seek additional information to support the application.</p>
                    </div>
                  </div>
                   <div className="hidden md:flex absolute top-1/2 -mt-4 left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-background justify-center items-center"></div>
                </div>

                {/* Onboarding */}
                <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:pr-8">
                       <Image src="https://placehold.co/500x350.png" alt="Onboarding" width={500} height={350} className="rounded-lg shadow-lg" data-ai-hint="onboarding process" />
                    </div>
                    <div className="mt-8 md:mt-0">
                       <h3 className="text-2xl font-bold font-headline text-primary mb-2">Onboarding</h3>
                       <p className="text-muted-foreground">Approved application would be on-boarded to the best programme. Our solution can cut the application-assessment-onboarding process from weeks to hours saving significant amount of time and resources. This means more vulnerable people can be assisted in a matter of hours.</p>
                    </div>
                  </div>
                   <div className="hidden md:flex absolute top-1/2 -mt-4 left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-background justify-center items-center"></div>
                </div>
                
                {/* Dashboards */}
                 <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:pl-8 md:order-2">
                        <Image src="https://placehold.co/500x350.png" alt="Dashboards" width={500} height={350} className="rounded-lg shadow-lg" data-ai-hint="analytics dashboard" />
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1 md:text-right">
                      <h3 className="text-2xl font-bold font-headline text-primary mb-2">Dashboards</h3>
                      <p className="text-muted-foreground">Social Workers and Programme Administrators have access to a programme dashboard tracking process and programme the KPIs in real time.</p>
                    </div>
                  </div>
                   <div className="hidden md:flex absolute top-1/2 -mt-4 left-1/2 -ml-4 w-8 h-8 rounded-full bg-primary border-4 border-background justify-center items-center"></div>
                </div>

                {/* Alerts & Notifications */}
                 <div className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    <div className="md:pr-8">
                       <Image src="https://placehold.co/500x350.png" alt="Alerts & Notifications" width={500} height={350} className="rounded-lg shadow-lg" data-ai-hint="mobile notifications" />
                    </div>
                    <div className="mt-8 md:mt-0">
                       <h3 className="text-2xl font-bold font-headline text-primary mb-2">Alerts & Notifications</h3>
                       <p className="text-muted-foreground">As the application went through different stages, vulnerable people get SMS notifications informing them about the status of their application and requests for additional information.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
