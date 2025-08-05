import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const campaigns = [
  { id: 'CAMP001', title: "Help Maria Cover Rent", raised: 750, goal: 1500, status: 'Active' },
  { id: 'CAMP002', title: "School Supplies for Kids", raised: 1800, goal: 2000, status: 'Active' },
  { id: 'CAMP003', title: "Emergency Medical Fund", raised: 1200, goal: 5000, status: 'Pending' },
  { id: 'CAMP004', title: "Winter Coat Drive", raised: 3000, goal: 3000, status: 'Completed' },
];

const getBadgeVariant = (status: string) => {
  switch (status.toLowerCase()) {
    case "active": return "default";
    case "pending": return "secondary";
    case "completed": return "outline";
    default: return "outline";
  }
};

export default function AdminCampaignsPage() {
  return (
    <div className="space-y-8">
       <div>
        <h1 className="text-3xl font-bold font-headline">Campaign Oversight</h1>
        <p className="text-muted-foreground">View and manage all active and past fundraising campaigns.</p>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Status</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className="font-medium">{campaign.id}</TableCell>
                  <TableCell>{campaign.title}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                        <Progress value={(campaign.raised / campaign.goal) * 100} className="w-40" />
                        <span>${campaign.raised.toLocaleString()} / ${campaign.goal.toLocaleString()}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(campaign.status)} className={campaign.status === 'Active' ? 'bg-green-500 text-white' : ''}>{campaign.status}</Badge>
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
                         {campaign.status === 'Pending' && <DropdownMenuItem>Approve Campaign</DropdownMenuItem>}
                        <DropdownMenuItem>Pause Campaign</DropdownMenuItem>
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
