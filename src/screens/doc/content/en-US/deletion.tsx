import { Link } from "@/components/Link";

export const title = "Delete account and data · Broto";

export const description = "How to request deletion of your Broto account and all data tied to it, with or without the app installed.";

export function Body() {
  return (
    <>
      <h1>Delete account and data</h1>
      <p className="updated">Effective 22 August 2026</p>

      <p className="intro">This page explains how to request deletion of your Broto account and everything tied to it, with or without the app installed.</p>

      <h2>From the app</h2>
      <p>This is the fastest route, and deletion is immediate:</p>
      <ul>
        <li>Open Broto and go to <strong>Profile</strong>.</li>
        <li>Tap <strong>Delete my account</strong>.</li>
        <li>Confirm by typing <strong>EXCLUIR</strong>.</li>
      </ul>

      <h2>Without the app installed</h2>
      <p>If you have already uninstalled it, write to <a href="mailto:falecombroto@gmail.com?subject=Account%20deletion">falecombroto@gmail.com</a> with the subject <strong>Account deletion</strong>, sending from the same email registered in the app. We confirm the request within 3 business days.</p>

      <h2>What gets erased</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Data</th><th>What happens</th><th>When</th></tr></thead>
          <tbody>
            <tr><td>Account and login</td><td>Deleted</td><td>Immediately</td></tr>
            <tr><td>Registered plants</td><td>Deleted</td><td>Immediately</td></tr>
            <tr><td>Uploaded photos</td><td>Deleted from storage</td><td>Within 30 days</td></tr>
            <tr><td>Analysis history</td><td>Deleted</td><td>Within 30 days</td></tr>
            <tr><td>Brotinho conversations</td><td>Deleted</td><td>Immediately</td></tr>
            <tr><td>Watering reminders</td><td>Cancelled</td><td>Immediately</td></tr>
            <tr><td>Access logs</td><td>Kept separately as legally required</td><td>6 months</td></tr>
          </tbody>
        </table>
      </div>
      <p>Access logs are retained for the period set by article 15 of the Brazilian Internet Civil Framework. They do not identify your plants or your photos, and are not used for any other purpose.</p>

      <div className="callout danger">
        <p className="title">Cancel your subscription first</p>
        <p>Deleting your account does <strong>not</strong> cancel an active subscription: it belongs to your App Store or Google Play account. Cancel it there first, following the steps in <Link href="/en/refund">Subscription and refunds</Link>, otherwise billing continues.</p>
      </div>

      <div className="callout warn">
        <p className="title">There is no undo</p>
        <p>We keep no backup for restoring deleted accounts. If you want to keep your plants' history, write it down before confirming.</p>
      </div>
    </>
  );
}
