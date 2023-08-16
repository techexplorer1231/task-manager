export function generateUniqueTitle(baseTitle, todosCollection) {
  const regex = new RegExp(`^${baseTitle}( \\d+)?$`);

  const matchingTitles = todosCollection.filter((collection) =>
    regex.test(collection.collection_title)
  );

  if (matchingTitles.length === 0) {
    return baseTitle;
  }

  const existingCounters = matchingTitles.map((collection) => {
    const match = collection.collection_title.match(/(\d+)$/);
    return match ? parseInt(match[1], 10) : 0;
  });

  const maxCounter = Math.max(...existingCounters);
  const newCounter = maxCounter + 1;

  return `${baseTitle} ${newCounter}`;
}
