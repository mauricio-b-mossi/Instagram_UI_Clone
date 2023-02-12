// Just going to leave this here as a comparison
export function commaSeparatedNumber(number: number): string {
  const string_number = number.toString();

  if (string_number.length < 4) return string_number;

  const reversed_array: string[] = [...string_number].reverse();

  let transformed_array: string[] = [];

  for (let i = 0; i < reversed_array.length; i++) {
    transformed_array.push(reversed_array[i]);
    if (i % 3 == 2) {
      transformed_array.push(",");
    }
  }

  return transformed_array.reverse().toString();
}

// Kotlin style fucntional prog
export function commaSeparated(number: string): string {
  return number
    .split("")
    .reverse()
    .map(mapInsertComma)
    .reverse()
    .reduce((acc, string) => acc + string);
}

function mapInsertComma(char: string, index: number): string {
  if (index % 3 == 2) {
    return `,${char}`;
  } else return char;
}
