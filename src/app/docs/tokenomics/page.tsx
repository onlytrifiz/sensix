import Link from "next/link";

export default function TokenomicsPage() {
  return (
    <div className="prose prose-neutral mx-auto px-4 py-8 dark:prose-invert">
      <h1>Tokenomics</h1>

      <h2>Overview</h2>
      <p>
        <strong>$SENSIX</strong> is the native utility token of the Sensix platform. It is designed to enable access to features, support decentralization, and reward real usage—<strong>without any team allocation or fundraising</strong>.
      </p>
      <p>
        <strong>Team Allocation:</strong> <code>0%</code><br />
        <strong>Revenue Model:</strong> Sensix earns from platform usage and trading fees—not token speculation.
      </p>

      <h2>Utility</h2>
      <ul>
        <li>Unlock access to advanced and early features</li>
        <li>Priority access to premium agents and tools</li>
        <li>Usage-based rewards and governance (optional)</li>
        <li>Fee discounts and in-app benefits</li>
      </ul>

      <h2>Distribution Plan</h2>
      <ul>
        <li><strong>100% of tokens</strong> go to the community</li>
        <li>Fair distribution via Believe App launch</li>
        <li>No presale, no private rounds, no VCs</li>
        <li>Transparent and fully on-chain allocation</li>
      </ul>

      <h2>Token Philosophy</h2>
      <p>
        Sensix takes a radically different approach to token design:
      </p>
      <ul>
        <li><strong>No team tokens:</strong> We work, we don’t dump.</li>
        <li><strong>No hidden allocations:</strong> All supply is accounted for.</li>
        <li><strong>Revenue through fees:</strong> Sensix earns from real usage, not speculation.</li>
      </ul>

      <h2>Contract & Details</h2>
      <p>
        The $SENSIX token is deployed on the Solana blockchain. Contract details will be published at launch.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>Will there be a presale or private sale?</h3>
      <p>No. There will be no private investors or early privileged allocations.</p>

      <h3>How does the team earn?</h3>
      <p>The team earns only through platform fees and continued contribution, ensuring full alignment with long-term product success.</p>

      <footer className="mt-8 text-sm text-muted-foreground">
        Tokenomics and utility design may evolve based on community feedback and adoption metrics.
      </footer>
    </div>
  );
}
