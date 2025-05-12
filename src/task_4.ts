

type Car = {
    make: string;
    model: string;
    year: number;
  };
  
  const cars: Car[] = [
    { make: "Toyota", model: "Corolla", year: 2020 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Focus", year: 2022 },
    { make: "Mazda", model: "3", year: 2019 },
  ];
  

  function sortCarsByYear(carsArray: Car[]): Car[] {
    return carsArray.sort((a, b) => a.year - b.year);
  }
  
  const sortedCars = sortCarsByYear(cars);
  
  console.log("Sorted Cars by Year (Ascending):");
  console.log(sortedCars);
  