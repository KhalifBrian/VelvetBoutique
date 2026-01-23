'use client';
import { useState } from 'react';
import { signupSchema } from '@/lib/validation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    acceptTerms: false,
    newsletter: true
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Calculate password strength
  const calculatePasswordStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (pwd.length >= 12) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({ ...prev, [name]: newValue }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Update password strength
    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    // Phone validation
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (passwordStrength < 3) {
      newErrors.password = 'Password is too weak. Use uppercase, lowercase, numbers, and symbols';
    }
    
    // Confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Terms acceptance
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Use localStorage-based registration
      const { registerUser, loginUser, setCurrentUser } = await import('@/lib/user-storage');
      const result = registerUser({
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        newsletter: formData.newsletter
      });
      
      if (result.success) {
        // Automatically log in the user after registration
        const loginResult = loginUser(formData.email, formData.password);
        if (loginResult.success && loginResult.user) {
          setCurrentUser(loginResult.user);
          // Dispatch custom event to notify header of login
          window.dispatchEvent(new CustomEvent('userLoggedIn'));
          // Show success message
          setRegistrationSuccess(true);
          // Redirect to dashboard after a brief delay to show success message
          setTimeout(() => {
            router.push('/dashboard');
          }, 1500);
        } else {
          setErrors({ submit: 'Registration successful but login failed. Please sign in manually.' });
          setIsSubmitting(false);
        }
      } else {
        setErrors({ submit: result.message });
        setIsSubmitting(false);
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      setErrors({ submit: error?.message || 'Registration failed. Please try again.' });
      setIsSubmitting(false);
    }
  };

  const getPasswordStrengthLabel = () => {
    if (passwordStrength === 0) return { text: '', color: '' };
    if (passwordStrength <= 2) return { text: 'Weak', color: 'text-red-500' };
    if (passwordStrength <= 3) return { text: 'Fair', color: 'text-yellow-500' };
    if (passwordStrength <= 4) return { text: 'Good', color: 'text-blue-500' };
    return { text: 'Strong', color: 'text-green-500' };
  };

  if (registrationSuccess) {
    return (
      <section className="max-w-md mx-auto text-center space-y-6">
        <div className="text-gold text-6xl">✓</div>
        <h1 className="font-serif text-3xl">Registration Successful!</h1>
        <p className="text-white/80">
          Thank you for joining us! A verification email has been sent to <strong>{formData.email}</strong>.
        </p>
        <p className="text-white/70 text-sm">
          Please check your inbox and verify your email to complete registration.
        </p>
        <Link href="/login" className="btn-primary inline-block">
          Continue to Login
        </Link>
      </section>
    );
  }

  const strengthLabel = getPasswordStrengthLabel();

  return (
    <section className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="font-serif text-4xl">Create Your Account</h1>
        <p className="text-white/70">Join us to access exclusive denim collections</p>
      </div>

      <form onSubmit={handleSubmit} className="card p-8 sm:p-10 space-y-6">
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full text-base ${errors.firstName ? 'border-red-500' : ''}`}
              placeholder="Jane"
            />
            {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full text-base ${errors.lastName ? 'border-red-500' : ''}`}
              placeholder="Doe"
            />
            {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full text-base ${errors.email ? 'border-red-500' : ''}`}
            placeholder="your.lengthy.email@example.com"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full text-base ${errors.phone ? 'border-red-500' : ''}`}
            placeholder="+1 (615) 414-7990"
          />
          {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full text-base pr-14 ${errors.password ? 'border-red-500' : ''}`}
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-white/50 hover:text-white transition active:scale-95"
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          
          {formData.password && (
            <div className="space-y-2 mt-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                      i < passwordStrength ? 'bg-gold shadow-sm shadow-gold/50' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
              {strengthLabel.text && (
                <p className={`text-sm font-medium ${strengthLabel.color}`}>
                  Password strength: {strengthLabel.text}
                </p>
              )}
            </div>
          )}
          
          {errors.password && <p className="text-red-400 text-sm mt-2">{errors.password}</p>}
          
          <ul className="text-xs text-white/60 space-y-1.5 mt-3 bg-white/5 p-3 rounded-lg">
            <li>• At least 8 characters</li>
            <li>• Mix of uppercase and lowercase letters</li>
            <li>• At least one number and one special character</li>
          </ul>
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <label className="block text-sm font-medium">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full text-base ${errors.confirmPassword ? 'border-red-500' : ''}`}
            placeholder="••••••••"
          />
          {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

        {/* Terms and Newsletter */}
        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="mt-1 w-5 h-5 rounded border-2 border-white/20 cursor-pointer"
            />
            <span className="text-sm group-hover:text-white/90 transition">
              I accept the <Link href="/terms" className="text-gold hover:underline font-medium">Terms & Conditions</Link> and <Link href="/privacy" className="text-gold hover:underline font-medium">Privacy Policy</Link> <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.acceptTerms && <p className="text-red-400 text-sm ml-8">{errors.acceptTerms}</p>}

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
              className="mt-1 w-5 h-5 rounded border-2 border-white/20 cursor-pointer"
            />
            <span className="text-sm text-white/80 group-hover:text-white/90 transition">
              Send me exclusive offers, new arrivals, and style tips
            </span>
          </label>
        </div>

        {/* Submit Error */}
        {errors.submit && (
          <div className="bg-red-500/10 border-2 border-red-500/50 rounded-xl p-4 text-red-400 text-sm">
            {errors.submit}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-white/70">
          Already have an account?{' '}
          <Link href="/login" className="text-gold hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </section>
  );
}
