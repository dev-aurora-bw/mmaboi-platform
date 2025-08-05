"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Checkbox } from '@/components/ui/checkbox';

const totalSteps = 3;

const supportNeeds = [
  { id: 'food', label: 'Food Assistance' },
  { id: 'housing', label: 'Housing/Rent Support' },
  { id: 'utilities', label: 'Utility Bills' },
  { id: 'childcare', label: 'Childcare Services' },
  { id: 'employment', label: 'Employment/Job Training' },
  { id: 'healthcare', label: 'Healthcare/Medical Bills' },
  { id: 'transportation', label: 'Transportation' },
  { id: 'other', label: 'Other' },
];

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const progress = (step / totalSteps) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-muted/50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Register for Support</CardTitle>
              <CardDescription>
                Complete the following steps to help us understand your needs.
              </CardDescription>
              <div className="pt-4">
                <Progress value={progress} />
                <p className="text-center text-sm text-muted-foreground mt-2">Step {step} of {totalSteps}</p>
              </div>
            </CardHeader>
            <form>
              <CardContent>
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div className="space-y-4">
                     <h3 className="text-xl font-semibold">Needs Assessment</h3>
                     <p className="text-sm text-muted-foreground">Select all areas where you need support.</p>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {supportNeeds.map(need => (
                          <div key={need.id} className="flex items-center space-x-2">
                            <Checkbox id={need.id} />
                            <Label htmlFor={need.id} className="font-normal">{need.label}</Label>
                          </div>
                        ))}
                     </div>
                  </div>
                )}
                {step === 3 && (
                  <div className="space-y-4 text-center">
                    <h3 className="text-xl font-semibold">Registration Complete!</h3>
                    <p className="text-muted-foreground">
                      Thank you for registering. An agent will review your information and reach out to you soon. You can now explore the support directory or check your dashboard for updates.
                    </p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {step > 1 && step < totalSteps && (
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Previous
                  </Button>
                )}
                <div className={step === 1 ? "w-full" : ""}>
                 {step < totalSteps -1 && (
                   <Button type="button" onClick={nextStep} className="w-full">
                     Next
                   </Button>
                 )}
                  {step === totalSteps - 1 && (
                   <Button type="button" onClick={nextStep} className="w-full">
                     Submit Registration
                   </Button>
                 )}
                 {step === totalSteps && (
                   <Button type="button" asChild className="w-full">
                     <a href="/dashboard">Go to Dashboard</a>
                   </Button>
                 )}
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
