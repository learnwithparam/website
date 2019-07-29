export function formatReadingTime(minutes, text) {
  let popcorns = Math.round(minutes / 5);
  return `${new Array(popcorns || 1).fill('🍿').join('')} ${minutes} min ${
    text ? text : 'read'
  }`;
}
