import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: October 2025</p>

      <p>
        <strong>Agentickers</strong> respects your privacy. This Privacy Policy explains how we collect, use, and protect your information
        when you interact with our website, mobile apps, and related services (“Services”).
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Personal information:</strong> such as your name, email address, and contact details when you create an account or contact us.</li>
        <li><strong>Usage data:</strong> such as IP address, browser type, and pages visited, to improve site performance and user experience.</li>
        <li><strong>Cookies:</strong> small data files stored on your device to remember preferences and analyze traffic.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Provide, maintain, and improve our Services.</li>
        <li>Communicate updates, offers, or security notices.</li>
        <li>Analyze traffic and optimize website functionality.</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We do not sell or rent your personal information. We may share data only with trusted service providers for analytics,
        hosting, or customer support, under strict confidentiality agreements.
      </p>

      <h2>4. Security</h2>
      <p>
        Agentickers uses SSL encryption and industry-standard security measures to protect your data. However, no system is completely
        secure, and we cannot guarantee absolute protection against unauthorized access.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal information. To make such requests, contact us at
        <a href="mailto:privacy@agentickers.com"> privacy@agentickers.com</a>.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy occasionally. The “Last updated” date indicates the latest version. Continued use of the Services
        after changes means you accept the new policy.
      </p>

      <h2>7. Contact</h2>
      <p>
  For questions about this Privacy Policy, email us at
  <a href="mailto:privacy@agentickers.com">privacy@agentickers.com</a>.
</p>
    </main>
  );
}