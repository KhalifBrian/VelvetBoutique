import { NextResponse } from 'next/server';
import { loginSchema } from '@/lib/validation';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate input
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: 'Invalid credentials format' },
        { status: 400 }
      );
    }

    const { email, password } = body;

    // TODO: Implement Firebase Auth login
    // For now, simulate success
    await new Promise(resolve => setTimeout(resolve, 500));

    const firebaseConfigured = !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

    if (!firebaseConfigured) {
      return NextResponse.json({
        success: true,
        message: 'Login successful (demo mode)',
        user: { email },
      });
    }

    // When Firebase is configured:
    /*
    import { auth } from '@/lib/firebase';
    import { signInWithEmailAndPassword } from 'firebase/auth';

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (!user.emailVerified) {
      return NextResponse.json(
        { message: 'Please verify your email before logging in.' },
        { status: 403 }
      );
    }

    // Get ID token for session
    const idToken = await user.getIdToken();

    // Set session cookie
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      user: { uid: user.uid, email: user.email },
    });

    response.cookies.set('session', idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
    */

    return NextResponse.json({
      success: true,
      message: 'Login successful',
    });

  } catch (error: any) {
    console.error('Login error:', error);

    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    if (error.code === 'auth/too-many-requests') {
      return NextResponse.json(
        { message: 'Too many failed login attempts. Please try again later.' },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { message: 'Login failed. Please try again.' },
      { status: 500 }
    );
  }
}
