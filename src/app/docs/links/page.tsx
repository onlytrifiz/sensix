import Link from "next/link";

export default function LinksPage() {
  return (
    <div className="prose prose-neutral mx-auto px-4 py-8 dark:prose-invert">
      <h1>Links</h1>
      <ul>
        <li>
          <Link href="https://x.com/sensixapp" target="_blank" rel="noopener noreferrer">Twitter</Link>
        </li>
        <li>
          <Link href="https://sensix.app" target="_blank" rel="noopener noreferrer">Website/App</Link>
        </li>
        <li>
          <Link href="https://github.com/sensixapp/sensix" target="_blank" rel="noopener noreferrer">Github</Link>
        </li>
        <li>
          <Link href="https://coingecko.com/" target="_blank" rel="noopener noreferrer">CoinGecko</Link>
        </li>
        <li>
          <Link href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">CoinMarketCap</Link>
        </li>
      </ul>
    </div>
  );
} 