'use client';
import { useState } from 'react';
import { loginSchema } from '@/lib/validation';
import { loginUser } from '@/lib/user-storage';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    
    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      setError('Invalid credentials format');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Use localStorage-based login
      const result = loginUser(email, password);
      
      if (result.success) {
        // Redirect to dashboard on successful login
        router.push('/dashboard');
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="max-w-lg mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="font-serif text-4xl">Welcome Back</h1>
        <p className="text-white/70">Sign in to your Velvet Boutique account</p>
      </div>

      <form onSubmit={onSubmit} className="card p-8 space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Email Address</label>
          <input 
            type="email"
            className="w-full text-base" 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            placeholder="your.lengthy.email@example.com"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium">Password</label>
          <div className="relative">
            <input 
              type={showPassword ? 'text' : 'password'}
              className="w-full text-base pr-14" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-white/50 hover:text-white transition active:scale-95"
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border-2 border-red-500/50 rounded-xl p-4 text-red-400 text-sm">
            {error}
          </div>
        )}

        <button 
          className="btn-primary w-full text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed" 
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </button>

        <div className="text-center space-y-3">
          <p className="text-sm text-white/70">
            Don't have an account?{' '}
            <Link href="/register" className="text-gold hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
