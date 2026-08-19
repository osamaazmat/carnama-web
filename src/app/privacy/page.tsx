import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Carnama',
  description:
    'How Carnama collects, uses, shares, and stores information, and how to delete your Carnama account.',
};

const linkClass = 'text-primary underline hover:opacity-80';
const h2Class = 'text-2xl font-semibold text-primary mb-3';
const h3Class = 'text-xl font-semibold text-primary mb-3';

function SupportEmail() {
  return (
    <a href="mailto:support@carnama.app" className={linkClass}>
      support@carnama.app
    </a>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Privacy Policy — Carnama
        </h1>
        <p className="text-gray-500 mb-10">Last updated: 20 August 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <p className="mb-4">
              Carnama (“we”, “us”, “Service Provider”) is operated by Osama
              Azmat Khan. Contact: <SupportEmail />.
            </p>
            <p className="mb-4">
              This policy describes how we collect, use, share, and store
              information when you use Carnama: the Android app (package{' '}
              <code className="text-sm bg-gray-100 px-1 rounded">
                com.carnama.app
              </code>
              ), the iOS app (bundle{' '}
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
              , and related APIs.
            </p>
            <p>
              We do not sell your personal data. We do not show ads. We do not
              use your data for cross-context behavioural advertising.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Who the app is for</h2>
            <p>
              Carnama is a digital vehicle passport for vehicle owners and
              workshops (cars and bikes). It is not directed at children under
              18. Accounts require an email and password. You must verify your
              email before you can use the app.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Information we collect</h2>

            <h3 className={h3Class}>You provide</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Vehicle owner account:</strong> name, email, password
                (stored hashed on our servers). The app may also ask for an
                optional phone number.
              </li>
              <li>
                <strong>Workshop account:</strong> contact name, email, password
                (hashed), phone, business name, country, city, optional
                address, and services offered.
              </li>
              <li>
                <strong>Vehicles:</strong> vehicle type (car or bike), plate,
                country, chassis number, catalog details (make, model, variant,
                year, colour), mileage, and vehicle photos.
              </li>
              <li>
                <strong>Service history:</strong> types of work, date, mileage,
                cost, notes, optional workshop tag, status (for example
                user-logged, pending, verified), receipt photos uploaded by
                workshops, and invoices created by workshops (invoice number,
                line items, currency, totals).
              </li>
              <li>
                <strong>Transfers:</strong> recipient Carnama email (the
                recipient must already have an owner account), plate-retention
                choice, and related plate/chassis details. Offers are delivered
                in the app and by push notification, not as a marketing email.
              </li>
              <li>
                <strong>Retained plates:</strong> plates you keep after a
                transfer, until you assign or release them.
              </li>
              <li>
                <strong>Feedback</strong> you send in the app (message, optional
                rating and category), and emails you send to support.
              </li>
            </ul>

            <h3 className={h3Class}>
              Automatically / from the device (with permission where required)
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Sign-in tokens</strong> stored on your device or in the
                browser so you stay logged in, and your IP address used for
                security and rate limiting.
              </li>
              <li>
                <strong>Push notification token</strong> and platform
                (Android/iOS) if you allow notifications.
              </li>
              <li>
                <strong>Crash logs, performance diagnostics, and app-usage
                analytics</strong>{' '}
                (including an app account identifier and whether the account is
                owner or workshop).
              </li>
              <li>
                <strong>Device or app identifiers</strong> used by Firebase
                (analytics, crash reporting, performance, push, remote config).
              </li>
              <li>
                <strong>Location permission:</strong> the mobile app may request
                location so we can show nearby workshops on a map. That map is
                optional and can be turned off. We do not require location to
                use Carnama, and we do not store your GPS coordinates on our
                servers today. You can refuse location in system settings.
              </li>
            </ul>
            <p>
              We do not collect payment card numbers, contacts, SMS, health
              data, or advertising IDs for this app today. Invoice amounts you
              or a workshop enter are service costs, not card payments.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>How we use information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Create and secure your account (including email verification and
                password-reset emails from{' '}
                <a href="mailto:noreply@carnama.app" className={linkClass}>
                  noreply@carnama.app
                </a>
                ).
              </li>
              <li>
                Provide the garage, service history, workshop lookup, invoices,
                transfers, retained plates, and notifications.
              </li>
              <li>
                Store vehicle photos and workshop receipt images so they can be
                shown in the app.
              </li>
              <li>
                Improve reliability and understand feature usage (crashes,
                performance, analytics, remote configuration).
              </li>
              <li>
                Prevent abuse (rate limits, blocked accounts) and comply with
                law and store rules.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={h2Class}>How we share information</h2>
            <p className="mb-3">
              We share data only as needed to run Carnama:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Workshops:</strong> can look up a plate and see vehicle
                and service information needed to log or verify work. On pending
                owner-logged work they may see a shortened customer name (first
                name and last initial), not your email.
              </li>
              <li>
                <strong>Vehicle owners:</strong> when signed in, can see a
                workshop directory (business name, country, city, address) in
                order to tag service. Service history, invoices, and receipt
                photos stay with the vehicle/plate, including after a transfer.
              </li>
              <li>
                <strong>Transfer counterparties:</strong> the other owner sees
                names, emails, plate, and vehicle details needed to send,
                accept, decline, or cancel an offer.
              </li>
              <li>
                <strong>Service providers</strong> that process data on our
                behalf:
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Railway (API hosting) and MongoDB (database)</li>
                  <li>
                    Cloudflare (DNS / reverse proxy) and Vercel (websites)
                  </li>
                  <li>
                    Google Firebase (analytics, crash reporting, performance
                    monitoring, push notifications, remote config) and Google
                    Play (distribution)
                  </li>
                  <li>Cloudinary (photo storage)</li>
                  <li>Resend (email delivery)</li>
                </ul>
              </li>
              <li>
                <strong>Legal:</strong> if required by law, a lawful request, or
                to protect rights, safety, or the service.
              </li>
            </ul>
            <p className="mb-4">
              These providers have their own privacy policies, including{' '}
              <a
                href="https://www.google.com/policies/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Google Play Services
              </a>
              ,{' '}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Firebase
              </a>
              ,{' '}
              <a
                href="https://cloudinary.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Cloudinary
              </a>
              , and{' '}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Resend
              </a>
              .
            </p>
            <p>We do not sell personal information.</p>
          </section>

          <section>
            <h2 className={h2Class}>Cookies and similar technologies</h2>
            <p>
              The web app stores a login token in your browser (localStorage) so
              you stay signed in, and may use session storage during email
              verification. The mobile app stores session tokens and related
              preferences on the device. Hosting and security providers (for
              example Cloudflare or Vercel) may set essential cookies. Firebase
              SDKs on the mobile app use device identifiers for analytics, crash
              reporting, performance, push, and remote config. We do not use
              advertising cookies, pixels, or ad networks. Where required by
              law, we will obtain consent before using non-essential tracking.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Retention</h2>
            <p className="mb-4">
              We keep account data while your account exists. Sign-in tokens
              stop working after you log out or we delete the account (the
              server rejects tokens for deleted accounts). Push tokens and
              in-app notifications are removed on logout (for that device) or on
              account deletion.
            </p>
            <p>
              After deletion we remove your login and personal profile. We do
              not run a separate “keep everything for 12 months” clock. Limited
              vehicle and shop records may remain so plates, service history,
              and invoices stay accurate, as described below. Copies in backups,
              email inboxes (for example verification, password reset, or
              feedback already sent), and analytics/crash systems may take
              additional time to age out.
            </p>
          </section>

          <section id="delete-account" className="scroll-mt-24">
            <h2 className={h2Class}>Delete your Carnama account</h2>
            <p className="mb-3">
              Vehicle owners and workshops can delete their account in the
              Carnama mobile app (this is not currently available on the
              website):
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Open Carnama and sign in</li>
              <li>Go to Profile</li>
              <li>Tap Delete Account</li>
              <li>Enter your password and type DELETE to confirm</li>
            </ol>
            <p className="mb-4">
              This permanently deletes your account. You will not be able to
              sign in afterwards.
            </p>
            <p className="mb-4">
              <strong>If you delete a vehicle owner account:</strong> your
              login, profile, feedback, uploaded vehicle photos, retained-plate
              wallet, push tokens, and in-app notifications are deleted. Pending
              transfer offers are cancelled. Vehicles you own become unclaimed
              plates so workshops can still find them; service history and
              invoices stay with the plate, without your login. Historical
              transfer records may keep internal IDs and the recipient email so
              the audit trail remains, but names will no longer resolve to an
              account.
            </p>
            <p className="mb-4">
              <strong>If you delete a workshop account:</strong> your login,
              workshop profile, shop diary, push tokens, and in-app
              notifications are deleted. Receipt photos you uploaded are
              removed. Service history and invoices stay on customer plates with
              a frozen shop name/address snapshot (shown as a former workshop).
              Pending owner requests waiting on your shop are closed as
              user-logged. The same email can register a new workshop later; it
              will not inherit the old invoices or diary.
            </p>
            <p>
              If you cannot use the app, email <SupportEmail /> from the address
              on your account and ask us to delete it. Uninstalling the app or
              stopping use of the website does not by itself delete data already
              stored on our servers.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Your choices and rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Owners: Profile → Edit Profile to change your name (email cannot
                be changed in the app today).
              </li>
              <li>
                Workshops: Profile → Edit Profile to change contact name,
                business name, phone, country, city, address, and services
                (email cannot be changed in the app today).
              </li>
              <li>
                Device permissions: location, camera, photos, notifications —
                you can refuse or turn them off in system settings.
              </li>
              <li>
                You may request access to, correction of, or deletion of your
                personal data, or withdraw consent where processing is based on
                consent, by using{' '}
                <Link href="/privacy#delete-account" className={linkClass}>
                  in-app deletion
                </Link>{' '}
                or emailing <SupportEmail />.
              </li>
            </ul>
          </section>

          <section>
            <h2 className={h2Class}>Your California privacy rights (CCPA/CPRA)</h2>
            <p>
              If you are a California resident, you have the right to know what
              personal information is collected, the right to delete personal
              information, the right to opt out of the sale or sharing of
              personal information, and the right to non-discrimination for
              exercising these rights. We do not sell personal information and
              we do not share it for cross-context behavioural advertising. To
              exercise these rights, contact <SupportEmail />.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Security</h2>
            <p>
              We use HTTPS to encrypt data in transit. Passwords are stored
              hashed. We use rate limits and account blocking to reduce abuse.
              No method of transmission or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Data breach notification</h2>
            <p>
              If a data breach occurs that affects your personal data, we will
              notify you in accordance with applicable law, including, where
              required, the nature of the breach and the steps being taken to
              address it.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>International processing</h2>
            <p>
              Our providers may process data in countries other than yours
              (including where Firebase, Cloudinary, email, hosting, or our
              database operate). If you use Carnama, this processing is needed
              to provide the service. Where applicable law requires safeguards
              for international transfers, we rely on appropriate mechanisms
              used by those providers, such as Standard Contractual Clauses or
              adequacy decisions.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Children</h2>
            <p>
              Carnama is not intended for children under 18, or such higher age
              as required where you live. We do not knowingly collect personal
              data from children. If you believe a child has created an account,
              contact <SupportEmail /> and we will delete it.
            </p>
          </section>

          <section>
            <h2 className={h2Class}>Changes</h2>
            <p>
              We may update this policy. The “Last updated” date will change.
              Where required by law, we will seek consent to material changes
              before they take effect. Continued use after an update means you
              accept the new policy to the extent permitted by law.
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
