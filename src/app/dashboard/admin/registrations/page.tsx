import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const registrations = [
    { id: 'REG001', name: 'Alice Johnson', agent: 'Agent Smith', submitted: '2024-07-22', status: 'Pending' },
    { id: 'REG002', name: 'Bob Williams', agent: 'Agent Smith', submitted: '2024-07-21', status: 'Approved' },
    { id: 'REG003', name: 'Charlie Brown', agent: 'Agent Jones', submitted: '2024-07-20', status: 'Pending' },
    { id: 'REG004', name: 'Diana Miller', agent: 'Agent Jones', submitted: '2024-07-19', status: 'Archived' },
];

const getBadgeVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "approved":
      return "default";
    case "pending":
      return "secondary";
    case "archived":
      return "outline";
    default:
      return "outline";
  }
};

export default function AdminRegistrationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Manage Registrations</h1>
        <p className="text-muted-foreground">View and approve vulnerability records submitted by agents.</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Registration ID</TableHead>
                <TableHead>Applicant Name</TableHead>
                <TableHead>Submitting Agent</TableHead>
                <TableHead>Date Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {registrations.map((reg) => (
                <TableRow key={reg.id}>
                  <TableCell className="font-medium">{reg.id}</TableCell>
                  <TableCell>{reg.name}</TableCell>
                  <TableCell>{reg.agent}</TableCell>
                  <TableCell>{reg.submitted}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(reg.status)} className={reg.status === 'Approved' ? 'bg-green-500 text-white' : ''}>{reg.status}</Badge>
                  </TableCell>
                   <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Verify Registration</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Archive</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
