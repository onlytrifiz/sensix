import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="prose prose-neutral mx-auto px-4 py-8 dark:prose-invert">
      <h1>Welcome to Sensix</h1>
      <h2>Your AI Copilot for Solana</h2>
      <p>
        <strong>Sensix</strong> is an <strong>open-source, full-stack</strong> application that combines cutting-edge large language models with blockchain technology. Built for the <strong>Solana</strong> ecosystem, Sensix enables intuitive and intelligent interactions with DeFi protocols, NFT marketplaces, and more—all through a natural language interface.
      </p>

      {/* Product Image placeholder */}
      {/* <img src="/product.png" alt="Product Demo" className="my-6 rounded-xl border shadow" /> */}

      <h2>Key Capabilities</h2>

      <h3>Intelligent Agent System</h3>
      <ul>
        <li>Natural language understanding tailored to DeFi, NFTs, and on-chain workflows</li>
        <li>Powered by leading AI models like <strong>Claude 3.5-Sonnet</strong> and <strong>GPT-4o</strong></li>
        <li>Robust function-calling architecture for handling complex blockchain operations</li>
      </ul>

      <h3>Deep Solana Integration</h3>
      <ul>
        <li>Native support for Solana's high-performance blockchain</li>
        <li>Integrated wallet management with real-time portfolio insights</li>
        <li>Full-featured NFT collection tracking and analytics</li>
        <li>Live monitoring of market trends and asset performance</li>
      </ul>

      <h3>Protocol Ecosystem</h3>
      <p>Seamlessly connected with top Solana protocols:</p>
      <ul>
        <li>
          <Link href="https://jup.ag" target="_blank" rel="noopener noreferrer">Jupiter</Link> – Token swaps and liquidity routing
        </li>
        <li>
          <Link href="https://pump.fun" target="_blank" rel="noopener noreferrer">Pump Fun</Link> – Meme token launchpad
        </li>
        <li>
          <Link href="https://magiceden.io" target="_blank" rel="noopener noreferrer">Magic Eden</Link> – NFT marketplace
        </li>
        <li>
          <Link href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">DexScreener</Link> – Real-time analytics and charts
        </li>
        <li>
          <Link href="https://dialect.to" target="_blank" rel="noopener noreferrer">Dialect</Link> – On-chain messaging and notifications
        </li>
        <li>...and more coming soon.</li>
      </ul>

      <footer className="mt-8 text-sm text-muted-foreground">
        2025 © Sensix
      </footer>
    </div>
  );
}
