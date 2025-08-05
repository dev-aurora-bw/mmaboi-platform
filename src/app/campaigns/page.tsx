import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { PlusCircle } from 'lucide-react';

const campaigns = [
  {
    id: 1,
    title: "Help Maria Cover Rent",
    description: "Maria is a single mother of three who recently lost her job. She needs help covering next month's rent to avoid eviction.",
    goal: 1500,
    raised: 750,
    image: "https://placehold.co/600x400.png",
    imageHint: "family portrait",
  },
  {
    id: 2,
    title: "School Supplies for Kids",
    description: "Support local children by providing essential school supplies for the upcoming school year.",
    goal: 2000,
    raised: 1800,
    image: "https://placehold.co/600x400.png",
    imageHint: "school supplies",
  },
  {
    id: 3,
    title: "Emergency Medical Fund for John",
    description: "John is facing an unexpected medical emergency and needs financial assistance to cover his surgery costs.",
    goal: 5000,
    raised: 1200,
    image: "https://placehold.co/600x400.png",
    imageHint: "medical assistance",
  },
];

export default function CampaignsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-muted/50">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Donation Campaigns</h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Support individuals and families in need by contributing to a campaign. Every donation makes a difference.
              </p>
            </div>
            <Button asChild>
              <Link href="/campaigns/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create Campaign
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="flex flex-col overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint={campaign.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline">{campaign.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{campaign.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-semibold text-primary">
                        ${campaign.raised.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">
                        raised of ${campaign.goal.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={(campaign.raised / campaign.goal) * 100} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={`/campaigns/${campaign.id}`}>Donate Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
