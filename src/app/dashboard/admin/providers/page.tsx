import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

const unverifiedProviders = [
  { id: 'PROV001', name: 'New Hope Shelter', type: 'NGO', location: 'Gaborone', submitted: '2024-07-22' },
  { id: 'PROV002', name: 'Faith Community Church', type: 'Faith-based', location: 'Francistown', submitted: '2024-07-21' },
  { id: 'PROV003', name: 'Corporate Volunteers Inc.', type: 'Corporate', location: 'Maun', submitted: '2024-07-20' },
];

export default function VerifyProvidersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Verify Service Providers</h1>
        <p className="text-muted-foreground">Review and approve new provider submissions to the directory.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Verification Queue</CardTitle>
          <CardDescription>
            The following organizations have submitted their profiles and are awaiting verification.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Provider ID</TableHead>
                <TableHead>Organization Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Submitted On</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {unverifiedProviders.map((provider) => (
                <TableRow key={provider.id}>
                  <TableCell className="font-medium">{provider.id}</TableCell>
                  <TableCell>{provider.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{provider.type}</Badge>
                  </TableCell>
                  <TableCell>{provider.location}</TableCell>
                  <TableCell>{provider.submitted}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700">
                      <CheckCircle className="h-5 w-5" />
                      <span className="sr-only">Approve</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/80">
                      <XCircle className="h-5 w-5" />
                      <span className="sr-only">Reject</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
