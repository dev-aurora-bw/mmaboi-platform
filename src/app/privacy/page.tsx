import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="prose lg:prose-xl max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-headline text-primary">Privacy Policy</h1>
          <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

          <p>
            Welcome to MmaBoi. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when you register on the platform, express an interest in obtaining information about us or our products and services, when you participate in activities on the platform or otherwise when you contact us.
          </p>
          <p>
            The personal information that we collect depends on the context of your interactions with us and the platform, the choices you make and the products and features you use. The personal information we collect may include the following: Name, Phone Number, Email Address, Mailing Address, Job Titles, Contact Preferences, etc.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use personal information collected via our platform for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>

          <h2>3. Will Your Information Be Shared With Anyone?</h2>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
          </p>

          <h2>4. How Long Do We Keep Your Information?</h2>
          <p>
            We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.
          </p>

          <h2>5. How Do We Keep Your Information Safe?</h2>
          <p>
            We aim to protect your personal information through a system of organizational and technical security measures.
          </p>

           <h2>6. What Are Your Privacy Rights?</h2>
          <p>
            In some regions (like the European Economic Area), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions or comments about this policy, you may email us at privacy@mmaboi.org.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
