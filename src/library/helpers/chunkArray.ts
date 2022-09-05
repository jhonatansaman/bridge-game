export const chunkArray = <T extends any>(array: T[], size: number): T[][] => {
  let chunkedArray = [];

  for (var i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }

  return chunkedArray;
};
