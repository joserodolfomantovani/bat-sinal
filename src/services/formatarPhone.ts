interface FormatPhoneResult {
  formatted: string;
  isValid: boolean;
}

export function formatarPhoneBR(raw:string): FormatPhoneResult {
  const formatted = formatPhoneBR(raw);
  const isValid = isValidPhoneBR(raw);
  return { formatted, isValid };
}

function formatPhoneBR(raw:string) {
  const digits = raw.replace(/\D/g, '');


  const withoutCountry = digits.startsWith('55') ? digits.slice(2) : digits;

  if (withoutCountry.length === 11) {
    const ddd = withoutCountry.slice(0,2);
    const part1 = withoutCountry.slice(2,7);
    const part2 = withoutCountry.slice(7);
    return `(${ddd}) ${part1}-${part2}`;
  }

  if (withoutCountry.length === 10) {

    const ddd = withoutCountry.slice(0,2);
    const part1 = withoutCountry.slice(2,6);
    const part2 = withoutCountry.slice(6);
    return `(${ddd}) ${part1}-${part2}`;
  }


  if (withoutCountry.length === 9) {
    return `${withoutCountry.slice(0,5)}-${withoutCountry.slice(5)}`;
  }
  if (withoutCountry.length === 8) {
    return `${withoutCountry.slice(0,4)}-${withoutCountry.slice(4)}`;
  }

  return raw; 
}

function isValidPhoneBR(raw:string) {
  const regex = /^(?:\+?55\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:9[0-9]{4}[-\s]?[0-9]{4}|[2-8][0-9]{3}[-\s]?[0-9]{4})$/;
  return regex.test(raw);
}
