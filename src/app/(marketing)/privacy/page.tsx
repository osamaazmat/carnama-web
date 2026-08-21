import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Carnama',
  description:
    'How Carnama collects, uses, shares, and stores information, and how to delete your Carnama account.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <div className="site-wrap py-16">
        <PrivacyPolicyContent />
      </div>
      <Footer />
    </div>
  );
}
