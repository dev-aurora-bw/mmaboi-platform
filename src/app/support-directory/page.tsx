import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Search, MapPin } from 'lucide-react';

const organizations = [
  {
    name: 'National Food Bank',
    category: 'Food Assistance',
    location: 'Nationwide',
    description: 'Providing food to those in need through a network of local pantries.',
  },
  {
    name: 'Shelter First',
    category: 'Housing Support',
    location: 'New York, NY',
    description: 'Emergency shelter and housing assistance for homeless individuals and families.',
  },
  {
    name: 'Jobs for the Future',
    category: 'Employment',
    location: 'Chicago, IL',
    description: 'Offering job training, resume building, and placement services.',
  },
  {
    name: 'Community Health Clinic',
    category: 'Healthcare',
    location: 'Los Angeles, CA',
    description: 'Free and low-cost medical services for uninsured and underinsured residents.',
  },
  {
    name: 'Parenting Support Center',
    category: 'Childcare',
    location: 'Houston, TX',
    description: 'Subsidized childcare and parenting resources for low-income families.',
  },
  {
    name: 'Utility Assistance Program',
    category: 'Utilities',
    location: 'Nationwide',
    description: 'Helping families maintain essential utility services during financial hardship.',
  },
];

export default function SupportDirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Support Directory</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Find support organizations near you. Search by keyword or filter by category to find the help you need.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Search by organization name or keyword..." className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="food">Food Assistance</SelectItem>
                    <SelectItem value="housing">Housing Support</SelectItem>
                    <SelectItem value="employment">Employment</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="childcare">Childcare</SelectItem>
                    <SelectItem value="utilities">Utilities</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizations.map((org, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline">{org.name}</CardTitle>
                  <CardDescription>{org.category}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{org.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{org.location}</span>
                  </div>
                  <Button asChild variant="link" className="text-primary">
                    <Link href="#">Learn More &rarr;</Link>
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
