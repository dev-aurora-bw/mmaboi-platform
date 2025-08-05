
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, MapPin, Clock } from 'lucide-react';

type Provider = {
  id: string;
  name: string;
  address: string;
  description: string;
  services: string[];
  contactInfo: {
    phone: string;
  };
  openingHours: string;
  logo: string;
  logoHint: string;
}

export function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="flex flex-col items-center justify-start text-center col-span-1 md:border-r md:pr-6 space-y-4">
          <Image
            src={provider.logo}
            alt={`${provider.name} logo`}
            width={100}
            height={100}
            className="rounded-full mb-4 object-contain"
            data-ai-hint={provider.logoHint}
          />
          <div className="space-y-3 text-sm text-gray-700">
             <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span>{provider.contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Directions</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 space-y-4">
            <div>
                <h3 className="text-2xl font-bold font-headline mb-1">{provider.name}</h3>
                <p className="text-sm text-muted-foreground">{provider.address}</p>
            </div>
          
          <div className="flex items-center text-sm text-gray-700">
            <Clock className="h-5 w-5 mr-2 text-green-600" />
            <span className="text-green-600 font-semibold mr-1">Open:</span> 
            <span>{provider.openingHours.replace('Open:', '')}</span>
          </div>

          <p className="text-sm text-gray-600">{provider.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {provider.services.map(service => (
              <Badge key={service} variant="secondary" className="font-normal bg-primary/10 text-primary hover:bg-primary/20">{service}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
