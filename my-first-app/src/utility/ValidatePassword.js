const validatePassword = (password) => { 

    const minLength = 4;
  const maxLength = 10;

  if (!password) {
    return { valid: false, error: 'Password is required' };
  }

  if (password.length < minLength || password.length > maxLength) {
    return { valid: false, error: `Password must be ${minLength}-${maxLength} characters long` };
  }

  if (!/[a-z]/.test(password)) {
    return { valid: false, error: 'Password must include a lowercase letter' };
  }

  if (!/[A-Z]/.test(password)) {
    return { valid: false, error: 'Password must include an uppercase letter' };
  }

  if (!/[0-9]/.test(password)) {
    return { valid: false, error: 'Password must include a number' };
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { valid: false, error: 'Password must include a special character' };
  }

  return { valid: true, error: null };

  
}

export default validatePassword;