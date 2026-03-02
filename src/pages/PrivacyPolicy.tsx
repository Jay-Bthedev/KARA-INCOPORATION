import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 md:pt-28 pb-20 bg-kara-light min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-kara-brown/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-kara-brown" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-kara-dark mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-kara-dark/70">
              Your privacy is important to us. This policy explains how we handle your data.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-6 h-6 text-kara-brown" />
                <h2 className="text-2xl font-semibold text-kara-dark m-0">
                  Data Protection
                </h2>
              </div>
              <p className="text-kara-dark/70">
                At KARA INCORPORATION, we are committed to protecting your personal information. 
                We collect only the data necessary to provide you with our services and improve 
                your experience with our platform.
              </p>

              <div className="flex items-center gap-3 mb-6 mt-10">
                <Eye className="w-6 h-6 text-kara-brown" />
                <h2 className="text-2xl font-semibold text-kara-dark m-0">
                  Information We Collect
                </h2>
              </div>
              <p className="text-kara-dark/70">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-kara-dark/70 space-y-2">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Usage data and analytics</li>
                <li>Communication preferences</li>
                <li>Information you provide when contacting us</li>
              </ul>

              <div className="flex items-center gap-3 mb-6 mt-10">
                <FileText className="w-6 h-6 text-kara-brown" />
                <h2 className="text-2xl font-semibold text-kara-dark m-0">
                  How We Use Your Information
                </h2>
              </div>
              <p className="text-kara-dark/70">
                Your information helps us to:
              </p>
              <ul className="list-disc pl-6 text-kara-dark/70 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Notify you about changes to our services</li>
                <li>Provide customer support</li>
                <li>Gather analysis or valuable information to improve our services</li>
                <li>Monitor the usage of our services</li>
                <li>Detect, prevent and address technical issues</li>
              </ul>

              <div className="bg-kara-cream rounded-xl p-6 mt-10">
                <h3 className="text-xl font-semibold text-kara-dark mb-3">
                  Cookie Policy
                </h3>
                <p className="text-kara-dark/70 m-0">
                  We use cookies to analyze website traffic and optimize your website experience. 
                  By accepting our use of cookies, your data will be aggregated with all other user data. 
                  You can manage your cookie preferences through your browser settings.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-kara-dark mb-3">
                  Contact Us
                </h3>
                <p className="text-kara-dark/70">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none pl-0 text-kara-dark/70 space-y-2 mt-4">
                  <li><strong>Email:</strong> info@karaincorporation.com</li>
                  <li><strong>Phone:</strong> 08100252773</li>
                  <li><strong>Address:</strong> MFM5+H6J, Ede 232101, Osun, Nigeria</li>
                </ul>
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

export default PrivacyPolicy;
