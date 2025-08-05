"use client"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BarChart, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line, ResponsiveContainer } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const registrationsData = [
  { month: 'Jan', count: 65 },
  { month: 'Feb', count: 59 },
  { month: 'Mar', count: 80 },
  { month: 'Apr', count: 81 },
  { month: 'May', count: 56 },
  { month: 'Jun', count: 55 },
  { month: 'Jul', count: 90 },
];

const donationsData = [
  { date: '2024-07-01', amount: 2400 },
  { date: '2024-07-02', amount: 1398 },
  { date: '2024-07-03', amount: 9800 },
  { date: '2024-07-04', amount: 3908 },
  { date: '2024-07-05', amount: 4800 },
  { date: '2024-07-06', amount: 3800 },
  { date: '2024-07-07', amount: 4300 },
];

export default function KPIsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline">Analytics & KPIs</h1>
          <p className="text-muted-foreground">Visual analytics from registrations, donations, and more.</p>
        </div>
         <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by Time" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="7">Last 7 Days</SelectItem>
                <SelectItem value="30">Last 30 Days</SelectItem>
                <SelectItem value="90">Last 90 Days</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Registrations</CardTitle>
            <CardDescription>Number of new vulnerability registrations per month.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={registrationsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="hsl(var(--primary))" name="Registrations" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Daily Donations</CardTitle>
            <CardDescription>Total donation amounts received per day.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={donationsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="amount" stroke="hsl(var(--primary))" name="Donation Amount ($)" />
                </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
