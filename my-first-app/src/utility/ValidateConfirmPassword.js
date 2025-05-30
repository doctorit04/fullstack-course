const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) {
        return { valid: false, error: 'Confirm Password is required' };
    }

    if (password !== confirmPassword) {
        return { valid: false, error: 'Passwords do not match' };
    }

    return { valid: true, error: null };
}

export default validateConfirmPassword;

