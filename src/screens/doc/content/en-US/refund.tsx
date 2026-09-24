import { Link } from "@/components/Link";

export const title = "Subscription and refunds · Broto";

export const description = "Broto subscription pricing, automatic renewal, how to cancel and how to request a refund.";

export function Body() {
  return (
    <>
      <h1>Subscription and refunds</h1>
      <p className="updated">Effective 20 August 2026</p>

      <p className="intro">How Broto charges, how to cancel, and how to get your money back.</p>

      <h2>What is free</h2>
      <ul>
        <li><strong>3 to get started</strong> — the one for the month plus 2 welcome analyses, a one-time gift that sits there until you use it — and <strong>1 per month</strong> after that, renewed on the 1st.</li>
        <li>For the first 3 days after sign-up, everything in the complete subscription is free: analysis, Brotinho and reminders for every care task.</li>
        <li>After that, adding plants, logging watering and receiving its reminder stays free, with no quantity limit.</li>
      </ul>

      <h2>One-off analyses</h2>
      <p>Once the trial is over, you can buy one-off analyses for <strong>R$ 1.90 each</strong>, without subscribing. They do not expire and there is no limit on how many you can buy.</p>

      <h2>Subscriptions</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Plan</th><th>Price</th><th>Billing</th></tr></thead>
          <tbody>
            <tr><td>Complete monthly</td><td>R$ 12.90</td><td>Renews every month</td></tr>
            <tr><td>Complete yearly</td><td>R$ 119.90</td><td>Renews every year</td></tr>
          </tbody>
        </table>
      </div>
      <p>The complete subscription gives up to <strong>40 analyses a month</strong> and <strong>150 messages a month</strong> with Brotinho, without spending one-off credits. The limit of <strong>30 messages per day</strong> described in the <Link href="/en/terms">Terms of Use</Link> still applies.</p>
      <p>The subscription <strong>renews automatically</strong> through the App Store or Google Play until you cancel. Billing happens on your store account, and we have no access to your card details.</p>

      <h2>How to cancel</h2>
      <div className="callout warn">
        <p className="title">Cancelling is not the same as a refund</p>
        <p>Cancelling stops future charges. The period you already paid for runs to its end, and that amount is not returned automatically — for that you need to request a refund from the store.</p>
      </div>
      <ul>
        <li><strong>iPhone and iPad:</strong> Settings → your name → Subscriptions → Broto → Cancel Subscription.</li>
        <li><strong>Android:</strong> Google Play → profile picture → Payments and subscriptions → Subscriptions → Broto → Cancel.</li>
      </ul>
      <p>Cancel at least 24 hours before the renewal date, otherwise the next cycle will already have been charged.</p>

      <h2>Right of withdrawal</h2>
      <div className="callout">
        <p className="title">7 days, guaranteed by law</p>
        <p>Article 49 of the Brazilian Consumer Protection Code gives you the right to withdraw from the purchase within <strong>7 calendar days</strong> of contracting it, with a full refund. This applies to Broto subscriptions purchased in Brazil, regardless of the stores' own policies.</p>
        <p>If the store refuses your request within that window, write to <a href="mailto:falecombroto@gmail.com">falecombroto@gmail.com</a> with the purchase receipt and we will take it up with them.</p>
      </div>

      <h2>How to request a refund</h2>
      <p>Payments are processed by the stores, so refunds go through them too. We have no technical means to return the money directly.</p>
      <ul>
        <li><strong>Apple:</strong> go to <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener">reportaproblem.apple.com</a>, sign in with your Apple ID, pick the purchase and request the refund.</li>
        <li><strong>Google Play:</strong> purchases from the last 48 hours can be refunded directly in the Play Store. After that, the request reaches us and we answer within 3 business days.</li>
      </ul>

      <h2>Deleting your account does not cancel the subscription</h2>
      <div className="callout danger">
        <p>The subscription belongs to your App Store or Google Play account, not to your Broto account. <strong>Cancel the subscription in the store before deleting your account</strong> — otherwise billing continues even without the app. See <Link href="/en/delete-account">Delete account and data</Link>.</p>
      </div>

      <h2>Price changes</h2>
      <p>If prices change, we tell you in advance inside the app and by email. The new price only applies from the following renewal, and you can cancel before then.</p>
    </>
  );
}
