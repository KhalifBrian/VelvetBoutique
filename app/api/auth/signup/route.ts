import { NextResponse } from 'next/server';
import { signupSchema } from '@/lib/validation';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate input
    const validation = signupSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: 'Invalid input', errors: validation.error.errors },
        { status: 400 }
      );
    }

    const { email, password, firstName, lastName, phone, newsletter } = body;

    // TODO: Implement Firebase Auth user creation
    // For now, simulate success
    // In production, this would:
    // 1. Create user with Firebase Auth
    // 2. Store additional user data in Firestore
    // 3. Send verification email
    // 4. Return user token or session

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 500));

    // Check if Firebase is configured
    const firebaseConfigured = !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

    if (!firebaseConfigured) {
      // Demo mode - use localStorage via client
      // Return success and let client handle storage
      return NextResponse.json({
        success: true,
        message: 'Registration successful',
        user: {
          email,
          firstName,
          lastName,
          phone,
          newsletter,
        },
      });
    }

    // When Firebase is configured, this would create a real user:
    /*
    import { auth, db } from '@/lib/firebase';
    import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
    import { doc, setDoc } from 'firebase/firestore';

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Send verification email
    await sendEmailVerification(user);

    // Store additional user data
    await setDoc(doc(db, 'users', user.uid), {
      email,
      firstName,
      lastName,
      phone,
      newsletter,
      createdAt: new Date(),
      addresses: [],
    });

    return NextResponse.json({
      success: true,
      message: 'Registration successful. Please check your email to verify your account.',
      userId: user.uid,
    });
    */

    return NextResponse.json({
      success: true,
      message: 'Registration successful',
    });

  } catch (error: any) {
    console.error('Signup error:', error);
    
    // Handle Firebase-specific errors
    if (error.code === 'auth/email-already-in-use') {
      return NextResponse.json(
        { message: 'This email is already registered. Please login instead.' },
        { status: 400 }
      );
    }
    
    if (error.code === 'auth/weak-password') {
      return NextResponse.json(
        { message: 'Password is too weak. Please use a stronger password.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Registration failed. Please try again.' },
      { status: 500 }
    );
  }
}
