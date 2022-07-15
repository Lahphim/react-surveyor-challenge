const baseApiUrl: string = process.env.NEXT_PUBLIC_BASE_API_URL || '';
const clientId: string = process.env.NEXT_PUBLIC_CLIENT_ID || '';
const clientSecret: string = process.env.NEXT_PUBLIC_CLIENT_SECRET || '';
const localStorageSecret: string =
  process.env.NEXT_PUBLIC_LOCALSTORAGE_SECRET || '';

export { baseApiUrl, clientId, clientSecret, localStorageSecret };
