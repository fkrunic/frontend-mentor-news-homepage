export const assetURL = (file: string): string => {
  return new URL(`../assets/${file}`, import.meta.url).href
}