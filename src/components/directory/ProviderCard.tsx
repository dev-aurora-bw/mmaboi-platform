import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Globe, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

type Provider = {
  id: string;
  name: string;
  type: string;
  location: string;
  description: string;
  services: string[];
  contactInfo: {
    phone: string;
    website: string;
  };
  logo: string;
  logoHint: string;
  verified?: boolean;
}

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        <div className="flex flex-col items-center text-center col-span-1 border-r pr-4">
          <Image
            src={provider.logo}
            alt={`${provider.name} logo`}
            width={80}
            height={80}
            className="rounded-full mb-4 object-contain"
            data-ai-hint={provider.logoHint}
          />
          <div className="space-y-2 text-sm text-muted-foreground">
             <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>{provider.contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <a href={`//${provider.contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{provider.contactInfo.website}</a>
            </div>
             <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Directions</span>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold font-headline mb-2">{provider.name}</h3>
            {provider.verified && (
                <Badge variant="default" className="bg-green-100 text-green-800 border-green-300 ml-2">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                </Badge>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">{provider.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {provider.services.map(service => (
              <Badge key={service} variant="secondary" className="font-normal">{service}</Badge>
            ))}
          </div>

          <Button variant="link" asChild className="p-0 h-auto text-primary">
            <Link href={`/support-directory/${provider.id}`}>
              View Full Profile <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>

        </div>
      </CardContent>
    </Card>
  );
}
