function computeOffsetSizeInBytes(maxOffset: number): 1 | 2 | 4 | 8 {
  if (maxOffset < 256) {
    return 1;
  }
  if (maxOffset < 65536) {
    return 2;
  }
  if (maxOffset < 4294967296) {
    return 4;
  }
  return 8;
}

function computeIdSizeInBytes(numberOfIds: number): 1 | 2 | 4 {
  if (numberOfIds < 256) {
    return 1;
  }
  if (numberOfIds < 65536) {
    return 2;
  }
  return 4;
}

export { computeIdSizeInBytes, computeOffsetSizeInBytes };
