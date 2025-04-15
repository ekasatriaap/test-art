const katakLoncat = (tinggi) => {
  if (tinggi < 0 || !Number.isInteger(tinggi)) {
    console.error("tinggi tidak valid");
    return;
  }
  console.info(`${Math.floor(tinggi / 3)} lompatan besar dan ${tinggi % 3} lompatan kecil`);
}

katakLoncat(-1)