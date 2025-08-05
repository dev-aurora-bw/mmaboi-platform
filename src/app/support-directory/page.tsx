"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Search, MapPin, Phone, Globe, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ProviderCard } from '@/components/directory/ProviderCard';

const organizations = [
    {
      id: '1',
      name: 'Masiela Trust Fund',
      type: 'NGO',
      location: 'Gaborone',
      description: 'Masiela Trust Fund is a non-governmental organization dedicated to upholding the rights of the...',
      services: ['Orphans & Vulnerable Children', 'Education', 'Health'],
      contactInfo: {
        phone: '+267 311 1111',
        website: 'www.masiela.org',
      },
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'charity logo'
    },
    {
      id: '2',
      name: "SOS Children's Village",
      type: 'NGO',
      location: 'Gaborone',
      description: 'SOS Children’s Villages is a non-governmental organization dedicated to upholding the rights of the...',
      services: ['Orphans & Vulnerable Children', 'Shelter', 'Health'],
      contactInfo: {
        phone: '+267 312 2222',
        website: 'www.sos-botswana.org',
      },
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'childrens village logo'
    },
     {
      id: '3',
      name: "Botswana Family Welfare Association",
      type: 'NGO',
      location: 'Gaborone',
      description: 'Botswana Family Welfare Association is a non-governmental organization dedicated to...',
      services: ['Health', 'Counselling', 'Family Planning'],
      contactInfo: {
        phone: '+267 313 3333',
        website: 'www.bofwa.org.bw',
      },
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'family association logo'
    },
    {
      id: '4',
      name: "Cheshire Foundation",
      type: 'NGO',
      location: 'Gaborone',
      description: 'Cheshire Foundation is a non-governmental organization that cares for children...',
      services: ['Disability Support', 'Rehabilitation', 'Health'],
      contactInfo: {
        phone: '+267 314 4444',
        website: 'www.cheshire.org',
      },
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'foundation logo'
    },
     {
      id: '5',
      name: "SOS Children's Village",
      type: 'NGO',
      location: 'Gaborone',
      description: 'SOS Children’s Villages is a non-governmental organization dedicated to upholding the rights of the...',
      services: ['Orphans & Vulnerable Children', 'Shelter', 'Health'],
      contactInfo: {
        phone: '+267 312 2222',
        website: 'www.sos-botswana.org',
      },
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'childrens village logo'
    },
     {
      id: '6',
      name: 'Masiela Trust Fund',
      type: 'NGO',
      location: 'Gaborone',
      description: 'Masiela Trust Fund is a non-governmental organization dedicated to upholding the rights of the...',
      services: ['Orphans & Vulnerable Children', 'Education', 'Health'],
      contactInfo: {
        phone: '+267 311 1111',
        website: 'www.masiela.org',
      },
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'charity logo'
    },
];

export default function SupportDirectoryPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

  return (
    <div className="flex flex-col min-h-screen bg-muted/50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-left mb-12">
            <h1 className="text-3xl md:text-4xl font-bold font-headline">Service Providers Directory</h1>
          </div>

          <div className="bg-background rounded-2xl shadow-md p-4 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <Input placeholder="Name" className="md:col-span-1" />
                <Input placeholder="Location" className="md:col-span-1" />
                <Input placeholder="Services" className="md:col-span-1" />
                <Button className="w-full">Search</Button>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizations.map((org) => (
              <ProviderCard key={org.id} provider={org} />
            ))}
          </div>

          <div className="flex justify-center items-center mt-12">
            <nav aria-label="Pagination">
              <ul className="inline-flex items-center space-x-2">
                <li>
                  <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>Previous</Button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <li key={page}>
                    <Button
                        variant={currentPage === page ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </Button>
                    </li>
                ))}
                <li>
                  <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Next</Button>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
