
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
      name: 'Botswana Family Welfare Association',
      address: '2894+Q44, lopatlaoka road, Kanye',
      description: 'BOFWA is a nationally recognized leader in Sexual and Reproductive Health (SRH) that ensures...',
      services: ['Safe Abortion Care', 'Comprehensive Sexuality Education', 'Counselling', 'Gender Based Violence victims support'],
      contactInfo: {
        phone: '+267 390 0489',
      },
      openingHours: 'Open: 0800 - 1700 (M-F), Closed on weekends',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'family association logo'
    },
    {
      id: '2',
      name: 'Masiela Trust Fund',
      address: 'Plot 123, Gaborone',
      description: 'Masiela Trust Fund is a non-governmental organization dedicated to upholding the rights of the...',
      services: ['Orphans & Vulnerable Children', 'Education', 'Health'],
      contactInfo: {
        phone: '+267 311 1111',
      },
      openingHours: 'Open: 0900 - 1630 (M-F), Closed on weekends',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'charity logo'
    },
     {
      id: '3',
      name: "SOS Children's Village",
      address: 'Plot 456, Tlokweng',
      description: 'SOS Children’s Villages is a non-governmental organization dedicated to upholding the rights of the...',
      services: ['Orphans & Vulnerable Children', 'Shelter', 'Health'],
      contactInfo: {
        phone: '+267 312 2222',
      },
      openingHours: 'Open: 0800 - 1700 (M-F), Closed on weekends',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'childrens village logo'
    },
    {
      id: '4',
      name: "Cheshire Foundation",
      address: 'Plot 789, Mogoditshane',
      description: 'Cheshire Foundation is a non-governmental organization that cares for children...',
      services: ['Disability Support', 'Rehabilitation', 'Health'],
      contactInfo: {
        phone: '+267 314 4444',
      },
      openingHours: 'Open: 0830 - 1600 (M-F), Closed on weekends',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'foundation logo'
    },
];

export default function SupportDirectoryPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const organizationsPerPage = 4;
    const totalPages = Math.ceil(organizations.length / organizationsPerPage);

    const paginatedOrganizations = organizations.slice(
        (currentPage - 1) * organizationsPerPage,
        currentPage * organizationsPerPage
    );


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
            {paginatedOrganizations.map((org) => (
              <ProviderCard key={org.id} provider={org} />
            ))}
          </div>

          {totalPages > 1 && (
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
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
