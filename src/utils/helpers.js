export function formatReadingTime(minutes, type) {
  const factor = type && type === 'video' ? 10 : 5;
  let popcorns = Math.round(minutes / factor);
  return `${new Array(popcorns || 1).fill('🍿').join('')} ${minutes} min ${
    type && type === 'video' ? 'watch' : 'read'
  }`;
}
