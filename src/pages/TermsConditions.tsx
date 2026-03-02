import { Scale, BookOpen, RefreshCw, Mail } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="pt-24 md:pt-28 pb-20 bg-kara-light min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-kara-brown/10 flex items-center justify-center">
              <Scale className="w-8 h-8 text-kara-brown" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kara-dark mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-kara-dark/70">
              Please read these terms carefully before using our services.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
            <div className="prose prose-lg max-w-none">
              <div className="bg-kara-cream rounded-xl p-6 mb-10">
                <p className="text-kara-dark/70 m-0">
                  Your Terms and Conditions section is like a contract between you and your customers. 
                  You make information and services available to your customers, and your customers 
                  must follow your rules.
                </p>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-kara-brown" />
                <h2 className="text-2xl font-semibold text-kara-dark m-0">
                  Common Terms
                </h2>
              </div>
              <p className="text-kara-dark/70">
                Common items in a terms and conditions agreement allow you to:
              </p>
              <ul className="list-disc pl-6 text-kara-dark/70 space-y-3">
                <li>
                  <strong>Withdraw and cancel services</strong>, and make financial transactions.
                </li>
                <li>
                  <strong>Manage customer expectations</strong>, such as liability for information 
                  errors or website downtime.
                </li>
                <li>
                  <strong>Explain your copyright rules</strong>, such as attribution, adaptation, 
                  commercial or non-commercial use, etc.
                </li>
                <li>
                  <strong>Set rules for user behavior</strong>, like forbidding unlawful behavior, 
                  hate speech, bullying, promotions, spam, etc.
                </li>
                <li>
                  <strong>Disable user accounts</strong> that violate our terms.
                </li>
                <li>
                  <strong>Write down any other terms or conditions</strong> that protect you or your audience.
                </li>
              </ul>

              <div className="flex items-center gap-3 mb-6 mt-10">
                <RefreshCw className="w-6 h-6 text-kara-brown" />
                <h2 className="text-2xl font-semibold text-kara-dark m-0">
                  Return and Refund Policy
                </h2>
              </div>
              <p className="text-kara-dark/70">
                This is a place to describe your Return and Refund Policy to buyers. 
                A Return and Refund policy usually consists of:
              </p>
              <ul className="list-disc pl-6 text-kara-dark/70 space-y-3">
                <li>
                  <strong>Terms of return</strong> (i.e. number of days)
                </li>
                <li>
                  <strong>State of return</strong> (e.g. unworn)
                </li>
                <li>
                  <strong>Reason for return</strong> (e.g. damaged or wrong product)
                </li>
                <li>
                  <strong>Process for return</strong> (i.e. how to initiate a return, 
                  how to contact customer service)
                </li>
                <li>
                  <strong>Process of refund</strong> (i.e. terms of refund, duration, payment details)
                </li>
                <li>
                  <strong>Contact details</strong> for returns and refunds
                </li>
              </ul>

              <div className="flex items-center gap-3 mb-6 mt-10">
                <Mail className="w-6 h-6 text-kara-brown" />
                <h2 className="text-2xl font-semibold text-kara-dark m-0">
                  Contact Information
                </h2>
              </div>
              <p className="text-kara-dark/70">
                For any questions regarding these Terms and Conditions, please contact us:
              </p>
              <div className="bg-kara-cream rounded-xl p-6 mt-4">
                <ul className="list-none pl-0 text-kara-dark/70 space-y-2 m-0">
                  <li>
                    <strong>Business Name:</strong> KARA INCORPORATION
                  </li>
                  <li>
                    <strong>Address:</strong> MFM5+H6J, Ede 232101, Osun, Nigeria
                  </li>
                  <li>
                    <strong>Phone:</strong> 08100252773
                  </li>
                  <li>
                    <strong>Business Hours:</strong> Monday - Friday, 09:00 – 17:00
                  </li>
                </ul>
              </div>

              <div className="border-t border-kara-dark/10 pt-8 mt-10">
                <h3 className="text-xl font-semibold text-kara-dark mb-3">
                  Agreement to Terms
                </h3>
                <p className="text-kara-dark/70">
                  By accessing or using our services, you agree to be bound by these Terms and Conditions. 
                  If you disagree with any part of the terms, you may not access our services.
                </p>
              </div>

              <div className="border-t border-kara-dark/10 pt-8 mt-10">
                <p className="text-sm text-kara-dark/50">
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
