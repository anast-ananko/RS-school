const generateRandomColor = (): string => {
  const r = Math.floor(100 + Math.random() * (256 + 1 - 100));
  const g = Math.floor(100 + Math.random() * (256 + 1 - 100));
  const b = Math.floor(100 + Math.random() * (256 + 1 - 100));

  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

export default generateRandomColor;
