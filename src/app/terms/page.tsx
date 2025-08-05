import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">
        <div className="prose lg:prose-xl max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-headline text-primary">Terms of Service</h1>
          <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By using our services, you agree to be bound by these Terms. If you don’t agree to be bound by these Terms, do not use the services.
          </p>

          <h2>2. Privacy Policy</h2>
          <p>
            Please refer to our Privacy Policy for information on how we collect, use and disclose information from our users. You acknowledge and agree that your use of the Services is subject to our Privacy Policy.
          </p>

          <h2>3. Changes to Terms or Services</h2>
          <p>
            We may update the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the updated Terms on the Site or through other communications. It’s important that you review the Terms whenever we update them or you use the Services.
          </p>

          <h2>4. Who May Use the Services</h2>
          <p>
            You may use the Services only if you are 18 years or older and capable of forming a binding contract with MmaBoi and are not barred from using the Services under applicable law.
          </p>
          
          <h2>5. Content Ownership</h2>
          <p>
            We do not claim any ownership rights in any User Content and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit your User Content.
          </p>

          <h2>6. General Prohibitions</h2>
          <p>
            You agree not to do any of the following: post, upload, publish, submit or transmit any Content that: (i) infringes, misappropriates or violates a third party’s patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability; (iii) is fraudulent, false, misleading or deceptive; (iv) is defamatory, obscene, pornographic, vulgar or offensive; (v) promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group; (vi) is violent or threatening or promotes violence or actions that are threatening to any person or entity; or (vii) promotes illegal or harmful activities or substances.
          </p>
          
          <h2>7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at legal@mmaboi.org.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
