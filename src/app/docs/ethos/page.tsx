import Link from "next/link";

export default function OpenSourceEthosPage() {
  return (
    <div className="prose prose-neutral mx-auto px-4 py-8 dark:prose-invert">
      <h1>Open Source Ethos</h1>
      <p>
        <strong>Sensix</strong> is a community-led fork of the original NeurApp project, brought back to life with a clear and transparent vision: to make Solana-based blockchain tools more accessible, intelligent, and free from speculative influence.
      </p>

      <h2>Why Sensix Exists</h2>
      <p>
        NeurApp was a promising open-source project that combined AI with blockchain, offering natural language interfaces for DeFi, NFTs, and more on Solana. Unfortunately, after a successful token launch, the project was abandoned by its original developers—leaving behind a powerful but unused codebase.
      </p>
      <p>
        Sensix is our response to that abandonment. We revived the project not for profit, but to restore its usefulness to the Solana community. No token relaunch. No roadmap hype. Just clean, working code and long-term usability.
      </p>

      <h2>Our Commitments</h2>
      <ul>
        <li><strong>100% Open Source:</strong> Code, roadmap, and decisions are public.</li>
        <li><strong>No Team Tokens:</strong> Team is keeping 0% of the tokens. The project will be self-sustaining thanks to Believe App trading fees.</li>
        <li><strong>Respect for Users:</strong> Privacy, transparency, and clear UX are core to our development.</li>
        <li><strong>Respect for Developers:</strong> Contributions are welcome and credited. No closed doors.</li>
        <li><strong>Respect for the Original Vision:</strong> We give credit where credit is due and build responsibly on top of NeurApp’s ideas.</li>
      </ul>

      <h2>How Sensix Differs</h2>
      <ul>
        <li><strong>Brand:</strong> Rebranded from NeurApp to Sensix to reflect a fresh start</li>
        <li><strong>Maintenance:</strong> Actively maintained with regular updates</li>
        <li><strong>Focus:</strong> Fully committed to open AI tools for blockchain, without financial speculation</li>
        <li><strong>Community:</strong> Built in public with contributions welcome</li>
      </ul>

      <h2>Want to Help?</h2>
      <p>
        We’re looking for open-source contributors, testers, feedback, and ideas.
        You can star, fork, or contribute directly via our GitHub:
      </p>
      <p>
        <Link href="https://github.com/sensixapp/sensix" target="_blank" rel="noopener noreferrer">
        https://github.com/sensixapp/sensix
        </Link>
      </p>

      <footer className="mt-8 text-sm text-muted-foreground">
        Sensix is not affiliated with the original NeurApp team. This is an independent, community-driven continuation.
      </footer>
    </div>
  );
}
