async function createChild({ creatureId, markerId }) {
  const gridSize = await getGridSize();
  const child = new Creature({
    parrent: [creatureId, markerId],
    gridMin: gridSize.min,
    gridMax: gridSize.max,
  });
  await addCreatureToList(child);
}
