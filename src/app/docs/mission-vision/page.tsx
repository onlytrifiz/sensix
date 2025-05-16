import Link from "next/link";

export default function MissionVisionPage() {
  return (
    <div className="prose prose-neutral mx-auto px-4 py-8 dark:prose-invert">
      <h1>Mission & Vision</h1>
      <p>
        Sensix is an open-source project that integrates LLMs with blockchain technology, creating an intelligent interface for the Solana ecosystem.
      </p>

      <h2>Core Mission</h2>
      <ul>
        <li>Building transparent, community-driven blockchain solutions</li>
        <li>Creating intuitive interfaces powered by language models</li>
        <li>Fostering an inclusive developer ecosystem</li>
        <li>Advancing AI-blockchain integration</li>
      </ul>

      <h2>Technical Vision</h2>
      <h3>Infrastructure</h3>
      <ul>
        <li>Full-stack TypeScript application</li>
        <li>State-of-the-art LLM integration</li>
        <li>Robust security architecture</li>
        <li>High-performance blockchain operations</li>
      </ul>
      <h3>Interface</h3>
      <ul>
        <li>Natural language processing for blockchain commands</li>
        <li>Real-time response streaming</li>
        <li>Cross-platform compatibility</li>
        <li>Comprehensive error handling</li>
      </ul>
      <h3>Community</h3>
      <ul>
        <li>Open-source development</li>
        <li>Community-driven roadmap</li>
        <li>Transparent documentation</li>
        <li>Active contribution system</li>
      </ul>

      <h2>Open-Source Ethos</h2>
      <p>
        Sensix is a community revival of the original NeurApp project, which was unfortunately abandoned after a successful token launch. 
        Our goal is to breathe new life into this powerful tool, remove any speculative noise, and bring back a transparent, honest, and functional assistant for the Solana ecosystem.
      </p>
      <p>
        We believe in building software that puts <strong>users first</strong>, respects open-source values, and avoids exploitative tokenomics. Sensix does not aim to recreate a token, but to restore a valuable application for the benefit of developers and users alike.
      </p>

      <h2>Development Roadmap</h2>
      <p>
        See our <Link href="https://github.com/sensixapp/sensix" target="_blank" rel="noopener noreferrer">GitHub repository</Link> for the latest updates.
      </p>

    </div>
  );
}
