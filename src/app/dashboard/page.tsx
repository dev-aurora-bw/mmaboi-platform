import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, HeartHandshake, DollarSign } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const stats = [
  { title: "Total Applicants", value: "1,250", icon: <Users className="h-6 w-6 text-muted-foreground" /> },
  { title: "Assessed This Month", value: "320", icon: <UserCheck className="h-6 w-6 text-muted-foreground" /> },
  { title: "Active Programs", value: "48", icon: <HeartHandshake className="h-6 w-6 text-muted-foreground" /> },
  { title: "Donations Raised", value: "$45,820", icon: <DollarSign className="h-6 w-6 text-muted-foreground" /> },
];

const recentAssessments = [
  { name: "Jane Doe", score: 85, status: "High Priority", date: "2024-07-21" },
  { name: "John Smith", score: 42, status: "Medium Priority", date: "2024-07-21" },
  { name: "Emily White", score: 92, status: "Urgent", date: "2024-07-20" },
  { name: "Michael Brown", score: 25, status: "Low Priority", date: "2024-07-19" },
  { name: "Sarah Green", score: 68, status: "Medium Priority", date: "2024-07-19" },
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

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, here's a summary of recent activity.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Recent Assessments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant Name</TableHead>
                <TableHead>Vulnerability Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentAssessments.map((assessment, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{assessment.name}</TableCell>
                  <TableCell>{assessment.score}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(assessment.status)}>{assessment.status}</Badge>
                  </TableCell>
                  <TableCell>{assessment.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
