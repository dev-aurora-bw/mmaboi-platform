"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getVulnerabilityAssessment } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? "Assessing..." : "Assess Vulnerability"}
    </Button>
  );
}

export default function AssessmentPage() {
  const initialState = {
    data: undefined,
    error: undefined,
    message: undefined,
  };
  const [state, dispatch] = useFormState(getVulnerabilityAssessment, initialState);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-3xl">AI-Powered Vulnerability Assessment</CardTitle>
              <CardDescription>
                Describe your situation, challenges, or needs. Our AI will provide a confidential vulnerability assessment to help guide you to the right support. The more detail you provide, the more accurate the assessment.
              </CardDescription>
            </CardHeader>
            <form action={dispatch}>
              <CardContent className="space-y-4">
                 <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>Your Privacy Matters</AlertTitle>
                  <AlertDescription>
                    All information submitted is confidential and used solely for this assessment. We do not store personal narratives.
                  </AlertDescription>
                </Alert>
                <div className="space-y-2">
                  <Label htmlFor="information">Your situation</Label>
                  <Textarea
                    id="information"
                    name="information"
                    placeholder="For example: I am a single parent of two, recently lost my job, and am struggling to pay rent and find childcare..."
                    rows={8}
                    required
                  />
                   {state?.error && (
                    <p className="text-sm font-medium text-destructive">{state.error}</p>
                   )}
                </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>

          {state?.data && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="font-headline">Assessment Result</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label>Vulnerability Score</Label>
                    <span className="font-bold text-2xl text-primary">{state.data.vulnerabilityScore} / 100</span>
                  </div>
                  <Progress value={state.data.vulnerabilityScore} className="h-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Assessment Explanation</h4>
                  <p className="text-muted-foreground whitespace-pre-wrap">{state.data.assessmentExplanation}</p>
                </div>
              </CardContent>
              <CardFooter>
                 <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    <a href="/support-directory">Find Support Now</a>
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
