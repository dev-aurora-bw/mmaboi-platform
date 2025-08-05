
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
    {
      id: '5',
      name: 'Gaborone City Council Social Services',
      address: 'Civic Centre, Gaborone',
      description: 'Provides social welfare services to the residents of Gaborone.',
      services: ['Social Support', 'Community Development', 'Counseling'],
      contactInfo: { phone: '+267 365 7400' },
      openingHours: 'Open: 0730 - 1630 (M-F)',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'government building'
    },
    {
      id: '6',
      name: 'Botswana Red Cross Society',
      address: 'Plot 22, Independence Avenue, Gaborone',
      description: 'Humanitarian organization providing disaster relief and health services.',
      services: ['Emergency Response', 'First Aid Training', 'Health Awareness'],
      contactInfo: { phone: '+267 395 2465' },
      openingHours: 'Open: 0800 - 1700 (M-F)',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'red cross logo'
    },
    {
      id: '7',
      name: 'Stepping Stones International',
      address: 'Mochudi',
      description: 'Empowering vulnerable youth through leadership, life skills, and psychosocial support.',
      services: ['Youth Development', 'Education Support', 'Life Skills'],
      contactInfo: { phone: '+267 577 7321' },
      openingHours: 'Open: 0800 - 1700 (M-F)',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'stepping stones'
    },
    {
      id: '8',
      name: 'Youth Health Organization (YOHO)',
      address: 'Plot 5036, Gaborone',
      description: 'Dedicated to providing youth-friendly health services and education.',
      services: ['Health Education', 'SRH Services', 'Peer Support'],
      contactInfo: { phone: '+267 393 7078' },
      openingHours: 'Open: 0900 - 1800 (M-F)',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'youth health'
    },
    {
      id: '9',
      name: 'Childline Botswana',
      address: 'Plot 273, Gaborone',
      description: 'Provides a free, confidential helpline and support services for children in need.',
      services: ['Child Protection', 'Counseling Helpline', 'Advocacy'],
      contactInfo: { phone: '116 (Toll-Free)' },
      openingHours: 'Open: 24/7',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'child on phone'
    },
    {
      id: '10',
      name: 'Botswana Council of NGOs (BOCONGO)',
      address: 'Plot 232, Gaborone',
      description: 'An umbrella body for non-governmental organizations in Botswana.',
      services: ['Advocacy', 'Capacity Building', 'Networking'],
      contactInfo: { phone: '+267 391 1319' },
      openingHours: 'Open: 0800 - 1700 (M-F)',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'community logo'
    },
    {
      id: '11',
      name: 'Lifeline Botswana',
      address: 'Plot 888, Gaborone',
      description: 'Offers emotional support and counseling services to those in crisis.',
      services: ['Crisis Counseling', 'Mental Health Support', 'Suicide Prevention'],
      contactInfo: { phone: '+267 391 1290' },
      openingHours: 'Open: 24/7',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'lifeline logo'
    },
    {
      id: '12',
      name: 'BONELA',
      address: 'Plot 245, Gaborone',
      description: 'Promoting a human rights-based response to HIV/AIDS.',
      services: ['Human Rights', 'Legal Aid', 'HIV/AIDS Advocacy'],
      contactInfo: { phone: '+267 393 2516' },
      openingHours: 'Open: 0800 - 1630 (M-F)',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'legal scale'
    },
    {
      id: '13',
      name: 'Holy Trinity Community Clinic',
      address: 'Plot 999, Ramotswa',
      description: 'Faith-based clinic providing accessible healthcare to the community.',
      services: ['Primary Healthcare', 'Maternal Health', 'HIV/TB Care'],
      contactInfo: { phone: '+267 539 0234' },
      openingHours: 'Open: 0800 - 1700 (M-F)',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'church cross'
    },
    {
      id: '14',
      name: 'Stanbic Bank Foundation',
      address: 'Fairgrounds, Gaborone',
      description: 'Corporate foundation focused on health, education, and entrepreneurship.',
      services: ['Education Grants', 'Health Initiatives', 'Enterprise Development'],
      contactInfo: { phone: '+267 361 8555' },
      openingHours: 'Corporate Hours',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'bank logo'
    },
    {
      id: '15',
      name: 'Orange Foundation Botswana',
      address: 'Peo House, Gaborone',
      description: 'Corporate foundation supporting digital education and maternal health.',
      services: ['Digital Inclusion', 'Education', 'Maternal Health'],
      contactInfo: { phone: '+267 316 3370' },
      openingHours: 'Corporate Hours',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'telecom logo'
    },
    {
      id: '16',
      name: 'Debswana Social Investment Fund',
      address: 'Debswana House, Gaborone',
      description: 'Investing in community development projects across Botswana.',
      services: ['Community Projects', 'Infrastructure', 'Sustainability'],
      contactInfo: { phone: '+267 361 4200' },
      openingHours: 'Corporate Hours',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'diamond logo'
    },
    {
      id: '17',
      name: 'Ministry of Health & Wellness',
      address: 'Government Enclave, Gaborone',
      description: 'Government body responsible for public health services and policy.',
      services: ['Public Health', 'Hospitals & Clinics', 'Health Policy'],
      contactInfo: { phone: '+267 363 2000' },
      openingHours: 'Open: 0730 - 1630 (M-F)',
      logo: 'https://placehold.co/100x100.png',
      logoHint: 'government crest'
    },
];

export default function SupportDirectoryPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const organizationsPerPage = 10;
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
          <div className="text-center md:text-left mb-12">
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
