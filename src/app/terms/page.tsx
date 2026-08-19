import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Carnama',
  description:
    'Terms and conditions for the Carnama mobile apps, web app, and website, operated by Osama Azmat Khan.',
};

const linkClass = 'text-primary underline hover:opacity-80';
const h2Class = 'text-2xl font-semibold text-primary mb-3';

function SupportEmail() {
  return (
    <a href="mailto:support@carnama.app" className={linkClass}>
      support@carnama.app
    </a>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Terms &amp; Conditions — Carnama
        </h1>
        <p className="text-gray-500 mb-10">Effective as of 20 August 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <p className="mb-4">
              These terms apply to the Carnama mobile apps (Android package{' '}
              <code className="text-sm bg-gray-100 px-1 rounded">
                com.carnama.app
              </code>
              , iOS bundle{' '}
              <code className="text-sm bg-gray-100 px-1 rounded">
                com.carnama.app
              </code>
              ), the web app at{' '}
              <a
                href="https://app.carnama.app"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                https://app.carnama.app
              </a>
              , the website at{' '}
              <a
                href="https://carnama.app"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                https://carnama.app
              </a>
              , and related services (together, the “Application”). Carnama is
              operated by Osama Azmat Khan (the “Service Provider”). Contact:{' '}
              <SupportEmail />.
            </p>
            <p>
              By creating an account or using the Application, you agree to
              these Terms and to the{' '}
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
              . If you do not agree, do not use the Application.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>The service</h2>
            <p className="mb-4">
              Carnama is a digital vehicle passport for cars and bikes. You may
              use it as a <strong>vehicle owner</strong> and/or as a{' '}
              <strong>workshop</strong>. Owners keep vehicles, photos, service
              history, transfers, and invoices. Workshops look up plates, log or
              verify work, attach receipts, and issue invoices.
            </p>
            <p>
              You must register with email and password and verify your email
              before you can use the app. You are responsible for keeping your
              password confidential and for activity on your account.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Eligibility</h2>
            <p>
              You must be at least 18 years old, and legally able to use the
              Application in your country. Carnama is not directed at children.
              You represent that information you provide is accurate.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>License</h2>
            <p>
              Subject to these Terms, the Service Provider grants you a limited,
              non-exclusive, non-transferable, revocable license to use the
              Application for personal use (owners) or internal workshop use.
              You may not copy, modify, reverse engineer, or create derivative
              works of the Application except where applicable law allows.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Intellectual property</h2>
            <p>
              The Service Provider retains all rights in the Application,
              including code, design, trademarks, and branding. These Terms do
              not give you a right to use Carnama marks outside the Application.
              Vehicle catalog data, your account content, and third-party marks
              remain owned by their respective owners.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Your content and acceptable use</h2>
            <p className="mb-4">
              You may upload or enter vehicle photos, plates, chassis numbers,
              service notes, receipts, invoices, workshop profile details, and
              similar content (“Your Content”). You keep ownership of Your
              Content. You grant the Service Provider a non-exclusive,
              worldwide, royalty-free license to host, store, display, and
              otherwise use Your Content only as needed to operate Carnama
              (including showing it to the other party in a workshop, invoice,
              or transfer flow). We do not sell Your Content.
            </p>
            <p className="mb-4">
              Your Content is visible to others only as the product requires —
              for example a workshop looking up a plate, an owner viewing
              shop-logged work, or a transfer counterparty. It is not a public
              social feed.
            </p>
            <p className="mb-3">You agree not to submit content that:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>is illegal, fraudulent, or infringes others’ rights;</li>
              <li>is abusive, defamatory, or hateful;</li>
              <li>
                is spam, malware, or a privacy violation (including other
                people’s personal data without permission);
              </li>
              <li>is sexually explicit or gratuitously violent;</li>
              <li>
                is knowingly false (for example a plate, chassis, cost, or
                invoice that is not genuine).
              </li>
            </ul>
            <p className="mb-4">
              You are responsible for the accuracy of records you create.
              Carnama does not replace official vehicle registration, tax,
              insurance, or workshop licensing.
            </p>
            <p>
              To report illegal or violating content, email <SupportEmail />{' '}
              with enough detail to identify the content. The app does not
              currently include in-app report, block, or mute tools. We may
              remove content, block an account, or refuse service where we
              reasonably believe these Terms or the law have been broken.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Accounts, suspension, and deletion</h2>
            <p className="mb-4">
              We may suspend or block an owner or workshop account immediately
              if we reasonably believe you have broken these Terms, applicable
              law, or are harming other users or the service (for example abuse,
              fraud, or security risk). We may also suspend access for
              operational or legal reasons. Where practical we will tell you,
              but we do not promise a 14-day cure period before a block.
            </p>
            <p className="mb-4">
              You may delete your owner or workshop account in the Carnama
              mobile app: Profile → Delete Account, then enter your password and
              type DELETE. If you cannot use the app, email <SupportEmail />{' '}
              from the address on your account. What is removed and what stays
              with a plate (for example unclaimed vehicles, service history,
              invoice snapshots) is described in the{' '}
              <Link href="/privacy#delete-account" className={linkClass}>
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              Upon termination or deletion, your right to use the Application
              ends. You should delete the app from your devices. Uninstalling
              the app does not by itself delete your account.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Fees</h2>
            <p>
              Carnama is currently provided without a subscription fee. We may
              introduce charges later. If we do, we will tell you clearly in the
              app or by email before you pay. You remain responsible for your
              own mobile data, roaming, and device costs. The Application needs
              an internet connection; we are not responsible if it cannot run
              because you have no network or a depleted battery.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Third-party services</h2>
            <p className="mb-3">
              The Application uses third-party services, including Google Play
              Services, Firebase (analytics, crash reporting, performance, push,
              remote config), Cloudinary (photos), Resend (email), and our
              hosting/database providers. Their terms also apply to their
              services. We are not responsible for third-party outages or for
              information other users enter.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Google Play Services
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Firebase
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/analytics/terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/terms/crashlytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Firebase Crashlytics
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className={h2Class}>Updates and availability</h2>
            <p className="mb-4">
              We may change, suspend, or discontinue features. You should
              install updates. We do not guarantee that the Application will
              always be available or compatible with every device or OS version.
              We may stop supporting older versions.
            </p>
            <p>
              You should not jailbreak or root the device you use for Carnama.
              That can break the app and weaken device security.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Limitation of liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, the Service Provider is
              not liable for indirect, incidental, special, consequential, or
              punitive damages, including lost profits, lost data, or business
              interruption, even if advised of the possibility.
            </p>
            <p className="mb-4">
              Nothing in these Terms limits liability that cannot be limited by
              law, including (where such rules apply) death or personal injury
              caused by negligence, or fraud.
            </p>
            <p className="mb-4">
              To the fullest extent permitted by law, our total liability for a
              claim is limited to the amount you paid us for the Application in
              the 12 months before the claim, or the minimum required by law,
              whichever is greater. If you paid nothing, liability is limited to
              the minimum permitted by applicable law.
            </p>
            <p className="mb-4">
              Carnama records are user- and workshop-supplied. We are not liable
              for relying solely on service history, invoices, or catalog
              details in the app, or for official registration outcomes.
            </p>
            <p>
              Nothing in these Terms limits rights you have under consumer
              protection laws that cannot be waived.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Indemnity</h2>
            <p>
              To the fullest extent permitted by law, you will indemnify the
              Service Provider against claims arising from your breach of these
              Terms or Your Content, except where the claim is caused by our own
              negligence, our breach of these Terms, or our violation of law. In
              places where consumer indemnities are restricted, this clause
              applies only as far as allowed.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Governing law</h2>
            <p>
              These Terms are governed by the laws of the jurisdiction in which
              the Service Provider is established, excluding conflict-of-law
              rules, except where mandatory consumer law says otherwise.
              Disputes may be brought in courts that have jurisdiction under
              applicable law. This does not stop you using a court that
              mandatory law makes available to you.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>General</h2>
            <p className="mb-4">
              If a provision is invalid, it will be modified to the minimum
              extent needed, and the rest remains in force. These Terms and the{' '}
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>{' '}
              are the entire agreement for your use of the Application.
            </p>
            <p>
              We may update these Terms by posting a new version on this page
              with a new effective date. Where required by law we will seek
              consent to material changes. Continued use after the effective
              date means you accept the updated Terms to the extent permitted by
              law.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Contact</h2>
            <p>
              Osama Azmat Khan
              <br />
              <SupportEmail />
            </p>
          </section>
        </div>
      </article>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-lg">© 2026 Carnama. All rights reserved.</p>
            <p className="mt-4 text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">
                carnama.app
              </Link>
              {' · '}
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              {' · '}
              <Link
                href="/privacy#delete-account"
                className="hover:text-white transition-colors"
              >
                Delete Account
              </Link>
              {' · '}
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
