import { FilterOption } from '@/app/(user)/saved-prompts/types/prompt';

import config from '../../package.json';
import { SolanaCluster } from '@privy-io/react-auth';

export const APP_VERSION = config.version;
export const IS_BETA = true;

export const RPC_URL =
  process.env.NEXT_PUBLIC_HELIUS_RPC_URL ||
  'https://api.mainnet-beta.solana.com';

export const MAX_TOKEN_MESSAGES = 10;

export const NO_CONFIRMATION_MESSAGE = ' (Does not require confirmation)';

export const filterOptions: FilterOption[] = [
  {
    value: 'recentlyUsed',
    label: 'Recently Used',
  },
  {
    value: 'editedRecently',
    label: 'Edited Recently',
  },
  {
    value: 'latest',
    label: 'Newest First',
  },
  {
    value: 'oldest',
    label: 'Oldest First',
  },
  {
    value: 'favorites',
    label: 'Favorites',
  },
];
export const EAP_PRICE = 1.0;

const isDev = process.env.NEXT_PUBLIC_DEV === 'true';

export const solanaCluster: SolanaCluster = isDev
  ? { name: 'devnet' }
  : { name: 'mainnet-beta' };

export const PHANTOM_WALLET_SELECT = 'phantom';