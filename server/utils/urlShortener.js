export default async function urlShortener(len){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  // Generate cryptographically secure random values
  const randomBytes = new Uint8Array(len);
  crypto.getRandomValues(randomBytes);

  // Convert bytes to characters
  for (let i = 0; i < len; i++) {
    result += chars.charAt(randomBytes[i] % chars.length);
  }

  return result;
}