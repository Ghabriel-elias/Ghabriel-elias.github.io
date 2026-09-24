import { Link } from "@/components/Link";

export const title = "Privacy Policy · Broto";

export const description = "What data Broto collects, why, who it is shared with, and how to exercise your rights.";

export function Body() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="updated">Effective 22 August 2026</p>

      <p className="intro">Broto identifies plant species and suggests diagnoses from photos. To do that we need to process some of your data. This policy explains what we collect, why, who we share it with, and how you can remove everything whenever you want.</p>

      <h2>Who processes your data</h2>
      <p>The data controller is:</p>

      <div className="table-wrap">
        <table>
          <tbody>
            <tr><td>Legal name</td><td>61.021.870 Ghabriel Elias Fonseca de Souza</td></tr>
            <tr><td>Company ID (CNPJ)</td><td>61.021.870/0001-31</td></tr>
            <tr><td>Address</td><td>Rua Cerejo Cruz, 583, Centro, Boa Vista/RR, 69.301-060, Brazil</td></tr>
            <tr><td>Contact</td><td><a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a></td></tr>
          </tbody>
        </table>
      </div>

      <p>Write to that address to exercise any of the rights described in this policy.</p>

      <h2>Data we collect</h2>

      <div className="table-wrap">
        <table>
          <thead><tr><th>Data</th><th>Why we collect it</th><th>Legal basis</th></tr></thead>
          <tbody>
            <tr><td>Name and email</td><td>Create and authenticate your account, and send confirmation and password recovery emails.</td><td>Performance of contract</td></tr>
            <tr><td>Plant photos</td><td>Send to the vision model that identifies the species and assesses leaf health, and keep the plant's history in your account.</td><td>Performance of contract</td></tr>
            <tr><td>Plant records</td><td>Nickname, room, watering interval, care history and reminders.</td><td>Performance of contract</td></tr>
            <tr><td>Brotinho conversations</td><td>Your questions and the assistant's replies. We send them to the AI provider along with the data of the plant you asked about.</td><td>Performance of contract</td></tr>
            <tr><td>Species searches</td><td>The term you type into search is sent to the AI provider to find the species.</td><td>Performance of contract</td></tr>
            <tr><td>Analysis feedback</td><td>When you mark an analysis as helpful or not, we keep the answer to improve the service.</td><td>Legitimate interest</td></tr>
            <tr><td>Device data</td><td>Operating system, app version, language and time zone — so reminders arrive at the right time and we can support you.</td><td>Legitimate interest</td></tr>
            <tr><td>Subscription status</td><td>To know whether your account is free or Pro and how many analyses remain.</td><td>Performance of contract</td></tr>
          </tbody>
        </table>
      </div>

      <div className="callout">
        <p className="title">What we do not collect</p>
        <p>We do not ask for your precise location. We do not read your calendar, your contacts or your gallery — only the photo you choose to send. We do not sell your data to anyone.</p>
      </div>

      <h2>Who we share it with</h2>
      <p>We share only what the app needs to work, with providers acting as processors:</p>
      <ul>
        <li><strong>Supabase</strong> — database, authentication and photo storage.</li>
        <li><strong>Anthropic</strong> — artificial intelligence provider. Receives the photo to identify the species and assess its health, your Brotinho messages along with the data of the plant in question, and the term you type into search. Everything is sent by our server, never directly from your device.</li>
        <li><strong>RevenueCat</strong> — manages subscription status.</li>
        <li><strong>PostHog</strong> — error monitoring. It only receives the technical report of an app failure: the error message, the screen where it happened, the device model and the OS version. It does not receive your name, your email or your photos, and we do not use it to track what you do in the app.</li>
        <li><strong>Apple and Google</strong> — process the payment. We never receive or store your card details.</li>
      </ul>

      <h2>International transfers</h2>
      <p>Some of these providers process data outside Brazil. Transfers rely on the safeguards set out in article 33 of the Brazilian General Data Protection Law and on the contracts signed with each provider.</p>

      <h2>How long we keep it</h2>
      <p>Your data is kept for as long as your account exists. When you delete your account in the app, we remove plants, photos, history and reminders from our servers within <strong>30 days</strong>.</p>
      <p>Some things go sooner, without you having to ask: Brotinho conversations unused for <strong>30 days</strong> are deleted, delivered reminders disappear after <strong>14 days</strong>, and analyses you did not save as a plant disappear after <strong>7 days</strong>.</p>
      <p>Records we are legally required to keep — such as application access logs, for the period set by the Brazilian Internet Civil Framework — are preserved separately even after deletion.</p>

      <h2>Your rights</h2>
      <p>Brazilian data protection law lets you, at any time:</p>
      <ul>
        <li>confirm that we process your data and access what we hold;</li>
        <li>correct incomplete or outdated data;</li>
        <li>request anonymisation, blocking or deletion of unnecessary data;</li>
        <li>request portability of your data;</li>
        <li>know who we share your data with.</li>
      </ul>
      <p>Portability takes no request: in the app, under <strong>Profile › Export my data</strong>, you download a JSON file right away with plants, tasks, care history, analyses, Brotinho conversations, reminders received and links to your photos.</p>
      <p>Account and data deletion is described in <Link href="/en/delete-account">Delete account and data</Link>. For anything else, write to <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a> — we answer within 15 days.</p>

      <h2>Children</h2>
      <p>Broto is not directed at children under 13 and we do not knowingly collect their data. We do not ask for age at sign-up, so we have no way of spotting it on our own. If you are the guardian of a child under 13 with a Broto account, write to <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a>: we delete the account and its data.</p>

      <h2>Changes to this policy</h2>
      <p>When we change something relevant, we tell you inside the app before the change takes effect. The effective date at the top of this page always indicates the current version.</p>
    </>
  );
}
