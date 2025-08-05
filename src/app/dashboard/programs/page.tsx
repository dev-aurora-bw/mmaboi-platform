import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const programs = [
  { id: 'PRG001', name: 'Emergency Food Pantry', provider: 'National Food Bank', category: 'Food Assistance', status: 'Active' },
  { id: 'PRG002', name: 'Transitional Housing Initiative', provider: 'Shelter First', category: 'Housing Support', status: 'Active' },
  { id: 'PRG003', name: 'Tech Skills Bootcamp', provider: 'Jobs for the Future', category: 'Employment', status: 'Full' },
  { id: 'PRG004', name: 'Free Health Screenings', provider: 'Community Health Clinic', category: 'Healthcare', status: 'Active' },
  { id: 'PRG005', name: 'Early Head Start', provider: 'Parenting Support Center', category: 'Childcare', status: 'Inactive' },
];

const getBadgeVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "default";
    case "full":
      return "secondary";
    case "inactive":
        return "outline";
    default:
      return "outline";
  }
};

export default function ProgramsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline">Program Management</h1>
          <p className="text-muted-foreground">Onboard and manage your organization's social programs.</p>
        </div>
        <Button asChild>
            <Link href="/dashboard/programs/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Program
            </Link>
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Program ID</TableHead>
                <TableHead>Program Name</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                 <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programs.map((program) => (
                <TableRow key={program.id}>
                  <TableCell className="font-medium">{program.id}</TableCell>
                  <TableCell>{program.name}</TableCell>
                  <TableCell>{program.provider}</TableCell>
                  <TableCell>{program.category}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(program.status)} className={program.status === 'Active' ? 'bg-green-500 text-white' : ''}>{program.status}</Badge>
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
                        <DropdownMenuItem>Edit Program</DropdownMenuItem>
                        <DropdownMenuItem>Manage Enrollment</DropdownMenuItem>
                         <DropdownMenuItem className="text-destructive">Deactivate</DropdownMenuItem>
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
