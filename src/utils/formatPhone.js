//Format phone  to 1234-567-8911
export default function formatPhone(numberStr) {
  const digits = numberStr.replace(/\D/g, "");

  if (digits.length !== 11) return numberStr;

  const part1 = digits.slice(0, 4);
  const part2 = digits.slice(4, 7);
  const part3 = digits.slice(7, 11);

  return `${part1}-${part2}-${part3}`;
}
