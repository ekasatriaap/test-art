const getLabel = (number) => {
  if (number > 60 && number <= 70) return "Cukup";
  if (number > 70 && number <= 80) return "Baik";
  if (number > 80) return "Luar Biasa";
  return "Kurang";
}

const getRandomLipatanLima = (min = 1, max = 100) => {

  let numbers = [];
  while (numbers.length < 5) {
    let random_number = Math.floor(Math.random() * (max - min + 1) + min);
    if (random_number % 5 == 0) {
      numbers.push(random_number + ' .::. ' + getLabel(random_number));
    }
  }
  console.info(numbers);
}

getRandomLipatanLima();