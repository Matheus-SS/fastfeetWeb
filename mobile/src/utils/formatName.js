export function initialLetter(name) {
  const nameDivided = name.split(' ');
  if (nameDivided.length < 2) {
    const firstName = nameDivided[0].charAt(0);
    return firstName;
  } else {
    const firstName = nameDivided[0].charAt(0);
    const lastName = nameDivided[1].charAt(0);

    return firstName.concat(lastName).toUpperCase();
  }
}
