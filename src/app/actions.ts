"use server";

import { assessVulnerability, type VulnerabilityAssessmentOutput } from "@/ai/flows/vulnerability-assessment";
import { z } from "zod";

const AssessmentSchema = z.object({
  information: z.string().min(50, "Please provide more detailed information (at least 50 characters)."),
});

type AssessmentState = {
  data?: VulnerabilityAssessmentOutput;
  error?: string;
  message?: string;
};

export async function getVulnerabilityAssessment(
  prevState: AssessmentState,
  formData: FormData
): Promise<AssessmentState> {
  const validatedFields = AssessmentSchema.safeParse({
    information: formData.get("information"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.information?.[0],
    };
  }

  try {
    const result = await assessVulnerability({
      submittedInformation: validatedFields.data.information,
    });
    return { data: result };
  } catch (e) {
    return {
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
