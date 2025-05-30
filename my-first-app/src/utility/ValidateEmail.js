const validateEmail = (email) => { 
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return { valid: false, error: 'Email is required' };
  }

  if (!regex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  return { valid: true, error: null };
}

export default validateEmail;