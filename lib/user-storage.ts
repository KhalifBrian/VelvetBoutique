// User storage utilities for localStorage-based authentication (demo mode)

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  newsletter: boolean;
  createdAt: string;
}

interface StoredUser extends User {
  passwordHash: string; // Simple hash for demo purposes
}

const USERS_KEY = 'velvet-boutique-users';
const CURRENT_USER_KEY = 'velvet-boutique-current-user';

// Simple hash function for demo purposes (NOT for production)
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString(36);
}

// Get all users from localStorage
function getAllUsers(): StoredUser[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(USERS_KEY);
  return stored ? JSON.parse(stored) : [];
}

// Save users to localStorage
function saveUsers(users: StoredUser[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// Register a new user
export function registerUser(data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  newsletter: boolean;
}): { success: boolean; message: string; user?: User } {
  const users = getAllUsers();
  
  // Check if email already exists
  if (users.some(u => u.email.toLowerCase() === data.email.toLowerCase())) {
    return {
      success: false,
      message: 'This email is already registered. Please login instead.'
    };
  }
  
  // Create new user
  const newUser: StoredUser = {
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    email: data.email,
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    newsletter: data.newsletter,
    passwordHash: simpleHash(data.password),
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  saveUsers(users);
  
  // Remove password hash before returning
  const { passwordHash, ...userWithoutPassword } = newUser;
  
  return {
    success: true,
    message: 'Registration successful!',
    user: userWithoutPassword
  };
}

// Login user
export function loginUser(email: string, password: string): { success: boolean; message: string; user?: User } {
  const users = getAllUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  
  if (!user) {
    return {
      success: false,
      message: 'Invalid email or password'
    };
  }
  
  if (user.passwordHash !== simpleHash(password)) {
    return {
      success: false,
      message: 'Invalid email or password'
    };
  }
  
  // Set current user
  const { passwordHash, ...userWithoutPassword } = user;
  setCurrentUser(userWithoutPassword);
  
  return {
    success: true,
    message: 'Login successful!',
    user: userWithoutPassword
  };
}

// Get current logged-in user
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(CURRENT_USER_KEY);
  return stored ? JSON.parse(stored) : null;
}

// Set current user
export function setCurrentUser(user: User | null): void {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

// Logout user
export function logoutUser(): void {
  setCurrentUser(null);
}

// Check if user is logged in
export function isLoggedIn(): boolean {
  return getCurrentUser() !== null;
}

// Get user by email
export function getUserByEmail(email: string): User | null {
  const users = getAllUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return null;
  
  const { passwordHash, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

// Update user profile
export function updateUserProfile(userId: string, updates: Partial<User>): { success: boolean; message: string; user?: User } {
  const users = getAllUsers();
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return {
      success: false,
      message: 'User not found'
    };
  }
  
  // Update user
  users[userIndex] = {
    ...users[userIndex],
    ...updates,
    id: users[userIndex].id, // Ensure ID doesn't change
    createdAt: users[userIndex].createdAt // Ensure createdAt doesn't change
  };
  
  saveUsers(users);
  
  const { passwordHash, ...userWithoutPassword } = users[userIndex];
  
  // Update current user if it's the same user
  const currentUser = getCurrentUser();
  if (currentUser && currentUser.id === userId) {
    setCurrentUser(userWithoutPassword);
  }
  
  return {
    success: true,
    message: 'Profile updated successfully',
    user: userWithoutPassword
  };
}

// Get total registered users count (for admin purposes)
export function getTotalUsersCount(): number {
  return getAllUsers().length;
}
