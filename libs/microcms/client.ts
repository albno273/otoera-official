import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'otoera',
  apiKey: process.env.API_KEY ?? '',
});
