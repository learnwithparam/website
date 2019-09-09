export function formatReadingTime(minutes, type) {
  const factor = type && type === 'Videos' ? 10 : 5;
  let popcorns = Math.round(minutes / factor);
  return `${new Array(popcorns || 1).fill('🍿').join('')} ${minutes} min ${
    type && (type === 'Tech Talks' || type === 'Videos') ? 'watch' : 'read'
  }`;
}
