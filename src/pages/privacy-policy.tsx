import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const lastUpdated = "January 16, 2026";

const serviceCapabilities = [
  "Book medical consultations",
  "Interact with licensed healthcare professionals",
  "Receive digital prescriptions",
  "Access consultation summaries and healthcare records",
  "Use AI-assisted features for health guidance and system navigation",
];

const personalInformation = ["Name", "Email address", "Phone number", "User account identifiers"];

const healthInformation = [
  "Symptoms and health concerns entered by the user",
  "Consultation details",
  "Medical notes and prescriptions issued by doctors",
  "Healthcare-related communications",
  "Pharmacy and treatment-related information",
];

const technicalInformation = [
  "Device and app information",
  "IP address",
  "App usage logs",
  "Crash reports and performance data",
];

const usageReasons = [
  "Provide telehealth consultations and healthcare services",
  "Assign doctors and healthcare professionals",
  "Generate and deliver prescriptions",
  "Enable pharmacy and care coordination workflows",
  "Improve system reliability, safety, and user experience",
  "Communicate important service-related updates",
  "Comply with legal and regulatory obligations",
];

const aiSupport = [
  "Assist with symptom collection and triage",
  "Support healthcare workflows",
  "Improve service efficiency",
];

const sharingCases = [
  "With licensed doctors, pharmacists, and healthcare providers involved in your care",
  "With trusted service providers supporting infrastructure, security, and analytics",
  "When required by law, court order, or regulatory authority",
  "To protect user safety, system integrity, or legal rights",
];

const retentionReasons = [
  "Continuity of care",
  "Legal and regulatory compliance",
  "Healthcare record-keeping requirements",
  "System improvement and audit purposes",
];

const userRights = [
  "Access their personal and health information",
  "Request correction of inaccurate data",
  "Request deletion of data (subject to medical and legal obligations)",
  "Withdraw consent where applicable",
];

const complianceList = [
  "Information Technology Act, 2000 (India)",
  "Digital Personal Data Protection Act, 2023 (India)",
  "Telemedicine Practice Guidelines (India)",
  "Google Play Developer Program Policies",
];

const PrivacyPolicyPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main className="pt-28 lg:pt-32 pb-20">
      <div className="container mx-auto px-4 pb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
        >
          <span className="text-lg leading-none">←</span>
          <span>Back Home</span>
        </Link>
      </div>

      <section className="container mx-auto px-4 pb-16">
        <div className="w-full space-y-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold uppercase tracking-[0.4em] text-emerald-700 sm:text-4xl">
                Privacy Policy
              </h1>
            </div>
            <div className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">
              Last updated: {lastUpdated}
            </div>
          </div>
          <p className="text-base leading-relaxed text-slate-600">
            This Privacy Policy describes how 1Care Health (“we”, “our”, “us”) collects, uses, stores, and protects
            information when you access or use the 1Care Health mobile application, website, and related healthcare services
            (collectively, the “Services”). 1Care Health is a digital healthcare application operated under the
            1Care Health platform. The platform and its underlying healthcare systems are owned and operated by a
            legally registered organization.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 space-y-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">1. About 1Care Health and Our Services</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">1Care Health is a telehealth-enabled healthcare application that allows users to:</p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
            {serviceCapabilities.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900">
            <p className="font-semibold">⚠️ Medical Disclaimer</p>
            <p className="mt-2">
              All medical consultations and prescriptions are provided by licensed medical professionals. AI features are
              used only for assistance, triage, and system support and do not replace professional medical judgment.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">2. Information We Collect</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We collect information only as necessary to provide healthcare services safely and effectively.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">a. Personal Information</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
              {personalInformation.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">b. Health & Medical Information</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
              {healthInformation.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              ⚠️ Health data is collected only when required for medical consultation and care delivery.
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">c. Technical & Usage Information</h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
              {technicalInformation.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">3. How We Use Your Information</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">We use your information to:</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
            {usageReasons.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-semibold text-slate-700">We do not sell personal or health data.</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">4. AI-Assisted Features</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">1Care Health uses artificial intelligence to:</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
            {aiSupport.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 space-y-1">
            <p>Important:</p>
            <ul className="space-y-1 list-disc pl-5">
              <li>AI does not diagnose conditions.</li>
              <li>AI does not prescribe medication.</li>
              <li>All clinical decisions are made by licensed professionals.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">5. Data Sharing & Disclosure</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">We may share information only when necessary:</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
            {sharingCases.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            All parties are required to maintain confidentiality and data protection standards.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">6. Data Storage & Security</h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
              <li>Data is stored on secure servers and cloud infrastructure.</li>
              <li>Access is restricted to authorized personnel and systems.</li>
              <li>Industry-standard security measures are implemented.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              While we take strong precautions, no system can guarantee absolute security.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">7. Data Retention</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">We retain personal and medical data only for:</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
              {retentionReasons.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Data may be anonymized or deleted when no longer required.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">8. User Rights</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">Users have the right to:</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
              {userRights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Requests can be made by contacting us using the details below.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">9. Children’s Privacy</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Our Services are not intended for children under 13 years of age. We do not knowingly collect data from
              children. If such data is identified, it will be removed.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">10. Legal Compliance</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">We comply with applicable laws and regulations, including but not limited to:</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600">
              {complianceList.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">11. Changes to This Policy</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised
              “Last updated” date.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">12. Contact Information</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">For questions, concerns, or data-related requests:</p>
          <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
            <p><span className="font-semibold">Platform:</span> 1Care Health</p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:prakranj@1carehealth.co" className="text-primary font-semibold">prakranj@1carehealth.co</a>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:-translate-y-0.5 hover:shadow"
            >
              Contact team
            </Link>
            <Link
              to="/discover"
              className="rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-700 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Explore platform
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicyPage;
