
/**
 * Validates a credit card number
 * Simple validation just checking length after removing spaces
 */
export const validateCardNumber = (cardNumber: string): boolean => {
  const digitsOnly = cardNumber.replace(/\s/g, '');
  return digitsOnly.length === 16;
};

/**
 * Validates an expiration date in MM/YYYY format
 */
export const validateExpiration = (expiration: string): boolean => {
  // Check format
  if (!/^\d{2}\/\d{2,4}$/.test(expiration)) {
    return false;
  }

  const [monthStr, yearStr] = expiration.split('/');
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr.length === 2 ? `20${yearStr}` : yearStr, 10);
  
  // Check month is between 1 and 12
  if (month < 1 || month > 12) {
    return false;
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed
  
  // Check if the card is not expired
  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false;
  }
  
  // Check if the year is not too far in the future (e.g., not more than 10 years)
  if (year > currentYear + 10) {
    return false;
  }
  
  return true;
};

/**
 * Validates a CVV code
 */
export const validateCVV = (cvv: string): boolean => {
  const digitsOnly = cvv.replace(/\D/g, '');
  // CVV is typically 3 digits (4 for Amex, but we're simplifying)
  return digitsOnly.length === 3;
};
