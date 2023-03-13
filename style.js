// Assign a function to the button click event
document.querySelector('.btn').addEventListener('click', generatePassword);

function generatePassword() {
  // Define arrays of character types to be used in the password
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '$@%&*()_+-={}[]|\\:;"<>,.?/~';

  // Prompt the user for the password length and validate the input
  let length;
  do {
    length = parseInt(prompt('How many characters would you like your password to be? (Must be between 10 and 64 characters)'));
  } while (isNaN(length) || length < 10 || length > 64);

  // Prompt the user for character types and validate the input
  let includeLowercase, includeUppercase, includeNumeric, includeSpecial;
  do {
    includeLowercase = confirm('Do you want to include lowercase characters?');
    includeUppercase = confirm('Do you want to include uppercase characters?');
    includeNumeric = confirm('Do you want to include numeric characters?');
    includeSpecial = confirm('Do you want to include special characters?');
  } while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial);

  // Build an array of character sets to be used in the password based on user input
  const charSets = [];
  if (includeLowercase) charSets.push(lowercaseChars);
  if (includeUppercase) charSets.push(uppercaseChars);
  if (includeNumeric) charSets.push(numericChars);
  if (includeSpecial) charSets.push(specialChars);

  // Generate the password using randomly selected characters from the character sets
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomCharSetIndex = Math.floor(Math.random() * charSets.length);
    const charSet = charSets[randomCharSetIndex];
    const randomCharIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomCharIndex];
  }

  // Display the generated password
  alert(`Your password is: ${password}`);
  document.getElementById ('Output').value=pass
}
