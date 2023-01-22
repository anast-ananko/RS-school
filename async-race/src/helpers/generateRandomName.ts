const generateRandomName = (): string => {
  const firstPart = [
    "Opel",
    "Mazda",
    "Ford",
    "Lada",
    "VW",
    "Toyota",
    "Nissan",
    "Tesla",
    "Mersedes",
    "BMW",
  ];
  const secondPart = [
    "Astra",
    "7",
    "Mondeo",
    "Polo",
    "X5",
    "CX7",
    "Vesta",
    "Corolla",
    "S3",
    "CX5",
  ];

  return `${firstPart[Math.floor(Math.random() * 7)]} ${
    secondPart[Math.floor(Math.random() * 7)]
  }`;
};

export default generateRandomName;
