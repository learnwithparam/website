export function formatReadingTime(minutes) {
  let popcorns = Math.round(minutes / 5);
  return `${new Array(popcorns || 1).fill('🍿').join('')} ${minutes} min read`;
}
