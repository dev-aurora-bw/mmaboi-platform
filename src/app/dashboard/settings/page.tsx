"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  { name: 'Alice Johnson', email: 'alice@mmaboi.org', role: 'Admin' },
  { name: 'Bob Williams', email: 'bob@mmaboi.org', role: 'Agent' },
  { name: 'Charlie Brown', email: 'charlie@mmaboi.org', role: 'Provider' },
];

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Settings</h1>
        <p className="text-muted-foreground">Manage your organization and application settings.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Organization Settings</CardTitle>
          <CardDescription>Manage your organization's details and subscription plan.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                    <h3 className="font-semibold">Current Plan</h3>
                    <p className="text-muted-foreground">You are currently on the <span className="text-primary font-bold">Premium</span> plan.</p>
                </div>
                <Button>Upgrade Plan</Button>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row justify-between items-start">
          <div>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Invite and manage your team members and their roles.</CardDescription>
          </div>
           <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Invite Member
            </Button>
        </CardHeader>
        <CardContent>
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.email}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell><Badge variant={member.role === 'Admin' ? 'default' : 'secondary'}>{member.role}</Badge></TableCell>
                  <TableCell>
                     <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Role</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Remove Member</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>Manage how you receive notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <Label htmlFor="email-notifications" className="font-semibold">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive updates and summaries via email.</p>
            </div>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <Label htmlFor="push-notifications" className="font-semibold">Push Notifications</Label>
              <p className="text-sm text-muted-foreground">Get real-time alerts on your devices.</p>
            </div>
            <Switch id="push-notifications" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
