const capitalize = (firstName, lastName) => {
  let firstLetter = firstName[0].toUpperCase();
  let restFirst = firstName.substring(1).toLowerCase();

  let lastLetter = lastName[0].toUpperCase();
  let restLast = lastName.substring(1).toLowerCase();

  return `${firstLetter + restFirst} ${lastLetter + restLast}`
};


console.log(capitalize('jUsTin', 'KnOx'))

// capitalize('jUsTin', 'KnOx') -> 'Justin Knox'
