import Link from "next/link";

export default function EapPage() {
  return (
    <div className="prose prose-neutral mx-auto px-4 py-8 dark:prose-invert">
      <h1>Early Access Program (EAP)</h1>

      <p>
        Be among the first to experience Sensix. The Beta is completely <strong>free</strong>—no wallet gating, no upfront fees.
      </p>

      <h2>Why Free?</h2>
      <p>
        Unlike other apps, Sensix Beta is entirely free to use. We believe in lowering the barrier to entry and growing the platform through real usage and community feedback.
      </p>

      <p>
        Our costs are covered through <strong>small trading fees</strong> on swaps and protocol interactions—no token gatekeeping, no paywalls.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li><strong>Free Early Access</strong> to new and experimental features</li>
        <li><strong>Priority Feedback</strong> channel to help shape development</li>
        <li><strong>Beta User Perks</strong> – Future premium features may include perks for early testers</li>
      </ul>

      <h2>Want to Self-Host?</h2>
      <p>
        Sensix is fully open-source. You’re welcome to:
      </p>
      <ul>
        <li>Deploy your own instance</li>
        <li>Use your own API keys for LLMs or blockchain services</li>
      </ul>

      <footer className="mt-8 text-sm text-muted-foreground">
        No fees. No token gating. 100% usage-based sustainability.
      </footer>
    </div>
  );
}
