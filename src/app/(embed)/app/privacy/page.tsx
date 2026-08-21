import type { Metadata, Viewport } from 'next';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Carnama',
  description:
    'How Carnama collects, uses, shares, and stores information, and how to delete your Carnama account.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/privacy' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function AppPrivacyPolicyPage() {
  return (
    <div className="legal-embed min-h-screen">
      <PrivacyPolicyContent embedded />
    </div>
  );
}
