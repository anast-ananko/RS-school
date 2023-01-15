const generateRandomName = (): string => {
  const firstPart = ["Opel", "Mazda", "Ford", "Lada", "VW", "Toyota", "Nissan"];
  const secondPart = ["Astra", "7", "Mondeo", "Polo", "X5", "CX7", "Vesta"];

  return `${firstPart[Math.floor(Math.random() * 7)]} ${
    secondPart[Math.floor(Math.random() * 7)]
  }`;
};

export default generateRandomName;
