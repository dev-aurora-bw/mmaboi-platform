import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileDown, PlusCircle } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

const vulnerabilities = [
  { id: 'USR001', name: 'Jane Doe', score: 85, status: 'High Priority', agent: 'Alice', lastUpdate: '2024-07-21' },
  { id: 'USR002', name: 'John Smith', score: 42, status: 'Medium Priority', agent: 'Bob', lastUpdate: '2024-07-21' },
  { id: 'USR003', name: 'Emily White', score: 92, status: 'Urgent', agent: 'Alice', lastUpdate: '2024-07-20' },
  { id: 'USR004', name: 'Michael Brown', score: 25, status: 'Low Priority', agent: 'Charlie', lastUpdate: '2024-07-19' },
  { id: 'USR005', name: 'Sarah Green', score: 68, status: 'Medium Priority', agent: 'Bob', lastUpdate: '2024-07-19' },
  { id: 'USR006', name: 'David Lee', score: 75, status: 'High Priority', agent: 'Alice', lastUpdate: '2024-07-18' },
];

const getBadgeVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "urgent":
    case "high priority":
      return "destructive";
    case "medium priority":
      return "secondary";
    default:
      return "outline";
  }
};

export default function VulnerabilitiesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-headline">Vulnerability Data</h1>
          <p className="text-muted-foreground">Manage and review applicant vulnerability assessments.</p>
        </div>
        <div className="flex gap-2">
            <Button variant="outline">
                <FileDown className="mr-2 h-4 w-4" />
                Export
            </Button>
            <Button asChild>
                <Link href="/register">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Applicant
                </Link>
            </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned Agent</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vulnerabilities.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.score}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(item.status)}>{item.status}</Badge>
                  </TableCell>
                  <TableCell>{item.agent}</TableCell>
                  <TableCell>{item.lastUpdate}</TableCell>
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
                        <DropdownMenuItem>Assign Agent</DropdownMenuItem>
                        <DropdownMenuItem>Update Status</DropdownMenuItem>
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
