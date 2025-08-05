import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { CheckCircle, Shield, Users, Heart } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: 'AI Vulnerability Assessment',
      description: 'Our AI-powered tool provides an instant vulnerability score to quickly identify needs and streamline support.',
      link: '/assessment',
      linkText: 'Assess Now',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Support Directory',
      description: 'Access a national directory of support organizations, filtered by specific needs and location.',
      link: '/support-directory',
      linkText: 'Find Help',
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'Donation Campaigns',
      description: 'Support verified individuals by contributing to donation campaigns for specific, urgent needs.',
      link: '/campaigns',
      linkText: 'Donate Now',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-background py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline uppercase">
              Connecting Support with Need
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
              MmaBoi is a revolutionary platform using AI to assess vulnerability and connect individuals with a national network of support organizations and community donors.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/register">Get Help</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/support-directory">Offer Support</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">How MmaBoi Works</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
                A simple, dignified, and effective way to get or give support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center flex flex-col">
                  <CardHeader className="items-center">
                    {feature.icon}
                    <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground">{feature.description}</p>
                    <Button asChild variant="link" className="mt-4 text-primary">
                      <Link href={feature.link}>{feature.linkText} &rarr;</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Community Support"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-md"
                  data-ai-hint="community support"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">For Agents & Service Providers</h2>
                <p className="text-muted-foreground mb-6">
                  Streamline your operations with our powerful dashboard. Manage vulnerability data, onboard your social programs, and track your impact efficiently.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                    <span>
                      <strong className="block">Efficient Data Management:</strong> Securely collect and manage client data in one place.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                    <span>
                      <strong className="block">Digital Program Onboarding:</strong> Easily list and manage your support programs for greater visibility.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 shrink-0" />
                    <span>
                      <strong className="block">Role-Based Access:</strong> Secure access for Admins, Agents, and Providers to protect sensitive information.
                    </span>
                  </li>
                </ul>
                <Button asChild size="lg" className="mt-8">
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
