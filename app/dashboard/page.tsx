'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface Address {
  id: string;
  label: string;
  fullName: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

export default function DashboardPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [editFormData, setEditFormData] = useState<UserProfile>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [newAddress, setNewAddress] = useState<Omit<Address, 'id'>>({
    label: 'Home',
    fullName: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'US',
    phone: '',
    isDefault: false,
  });

  useEffect(() => {
    // Load user profile and addresses from localStorage (demo)
    const savedProfile = localStorage.getItem('user-profile');
    const savedAddresses = localStorage.getItem('user-addresses');
    
    if (savedProfile) {
      const p = JSON.parse(savedProfile);
      setProfile(p);
      setEditFormData(p);
    } else {
      // Demo profile
      const demoProfile = {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        phone: '+1 (615) 414-7990',
      };
      setProfile(demoProfile);
      setEditFormData(demoProfile);
    }

    if (savedAddresses) {
      setAddresses(JSON.parse(savedAddresses));
    }
  }, []);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(editFormData);
    localStorage.setItem('user-profile', JSON.stringify(editFormData));
    setIsEditingProfile(false);
  };

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const address: Address = {
      ...newAddress,
      id: Date.now().toString(),
    };
    
    const updated = [...addresses, address];
    setAddresses(updated);
    localStorage.setItem('user-addresses', JSON.stringify(updated));
    setIsAddingAddress(false);
    
    // Reset form
    setNewAddress({
      label: 'Home',
      fullName: '',
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'US',
      phone: '',
      isDefault: false,
    });
  };

  const handleDeleteAddress = (id: string) => {
    const updated = addresses.filter(a => a.id !== id);
    setAddresses(updated);
    localStorage.setItem('user-addresses', JSON.stringify(updated));
  };

  const handleSetDefaultAddress = (id: string) => {
    const updated = addresses.map(a => ({
      ...a,
      isDefault: a.id === id,
    }));
    setAddresses(updated);
    localStorage.setItem('user-addresses', JSON.stringify(updated));
  };

  if (!profile) {
    return (
      <section className="text-center py-16">
        <p className="text-white/70">Loading...</p>
      </section>
    );
  }

  return (
    <section className="space-y-8 max-w-5xl mx-auto">
      <h1 className="font-serif text-4xl">My Account</h1>

      {/* Profile Section */}
      <div className="card p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl">Profile Information</h2>
          {!isEditingProfile && (
            <button
              onClick={() => setIsEditingProfile(true)}
              className="btn-outline text-sm"
            >
              Edit Profile
            </button>
          )}
        </div>

        {isEditingProfile ? (
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">First Name</label>
                <input
                  type="text"
                  value={editFormData.firstName}
                  onChange={(e) => setEditFormData({ ...editFormData, firstName: e.target.value })}
                  className="w-full bg-onyx border border-white/15 rounded p-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Last Name</label>
                <input
                  type="text"
                  value={editFormData.lastName}
                  onChange={(e) => setEditFormData({ ...editFormData, lastName: e.target.value })}
                  className="w-full bg-onyx border border-white/15 rounded p-3"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input
                type="email"
                value={editFormData.email}
                onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                className="w-full bg-onyx border border-white/15 rounded p-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Phone</label>
              <input
                type="tel"
                value={editFormData.phone}
                onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                className="w-full bg-onyx border border-white/15 rounded p-3"
                required
              />
            </div>
            <div className="flex gap-3">
              <button type="submit" className="btn-primary">Save Changes</button>
              <button
                type="button"
                onClick={() => {
                  setIsEditingProfile(false);
                  setEditFormData(profile);
                }}
                className="btn-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-3">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-white/70">Name</p>
                <p className="font-medium">{profile.firstName} {profile.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-white/70">Email</p>
                <p className="font-medium">{profile.email}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-white/70">Phone</p>
              <p className="font-medium">{profile.phone}</p>
            </div>
          </div>
        )}
      </div>

      {/* Addresses Section */}
      <div className="card p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl">Saved Addresses</h2>
          {!isAddingAddress && (
            <button
              onClick={() => setIsAddingAddress(true)}
              className="btn-outline text-sm"
            >
              + Add Address
            </button>
          )}
        </div>

        {isAddingAddress && (
          <form onSubmit={handleAddAddress} className="card p-6 space-y-4 bg-onyx/50">
            <h3 className="font-semibold">New Address</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Label</label>
                <select
                  value={newAddress.label}
                  onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
                  className="w-full bg-onyx border border-white/15 rounded p-3"
                >
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Full Name</label>
                <input
                  type="text"
                  value={newAddress.fullName}
                  onChange={(e) => setNewAddress({ ...newAddress, fullName: e.target.value })}
                  className="w-full bg-onyx border border-white/15 rounded p-3"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Street Address</label>
              <input
                type="text"
                value={newAddress.street}
                onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                className="w-full bg-onyx border border-white/15 rounded p-3"
                required
              />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">City</label>
                <input
                  type="text"
                  value={newAddress.city}
                  onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                  className="w-full bg-onyx border border-white/15 rounded p-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">State</label>
                <input
                  type="text"
                  value={newAddress.state}
                  onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                  className="w-full bg-onyx border border-white/15 rounded p-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">ZIP Code</label>
                <input
                  type="text"
                  value={newAddress.postalCode}
                  onChange={(e) => setNewAddress({ ...newAddress, postalCode: e.target.value })}
                  className="w-full bg-onyx border border-white/15 rounded p-3"
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Country</label>
                <input
                  type="text"
                  value={newAddress.country}
                  onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
                  className="w-full bg-onyx border border-white/15 rounded p-3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Phone</label>
                <input
                  type="tel"
                  value={newAddress.phone}
                  onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                  className="w-full bg-onyx border border-white/15 rounded p-3"
                  required
                />
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={newAddress.isDefault}
                onChange={(e) => setNewAddress({ ...newAddress, isDefault: e.target.checked })}
              />
              <span className="text-sm">Set as default address</span>
            </label>
            <div className="flex gap-3">
              <button type="submit" className="btn-primary">Save Address</button>
              <button
                type="button"
                onClick={() => setIsAddingAddress(false)}
                className="btn-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {addresses.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {addresses.map((addr) => (
              <div key={addr.id} className="card p-4 space-y-3 relative">
                {addr.isDefault && (
                  <span className="absolute top-2 right-2 text-xs bg-gold text-onyx px-2 py-1 rounded">
                    Default
                  </span>
                )}
                <div>
                  <h4 className="font-semibold">{addr.label}</h4>
                  <p className="text-sm text-white/80">{addr.fullName}</p>
                </div>
                <div className="text-sm text-white/70">
                  <p>{addr.street}</p>
                  <p>{addr.city}, {addr.state} {addr.postalCode}</p>
                  <p>{addr.country}</p>
                  <p>{addr.phone}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  {!addr.isDefault && (
                    <button
                      onClick={() => handleSetDefaultAddress(addr.id)}
                      className="text-xs text-gold hover:underline"
                    >
                      Set Default
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteAddress(addr.id)}
                    className="text-xs text-red-400 hover:underline ml-auto"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white/70 text-center py-8">No saved addresses yet</p>
        )}
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/orders" className="card p-6 text-center hover:border-gold transition">
          <div className="text-3xl mb-2">📦</div>
          <h3 className="font-semibold">Order History</h3>
          <p className="text-sm text-white/70 mt-1">View past orders</p>
        </Link>
        <Link href="/cart" className="card p-6 text-center hover:border-gold transition">
          <div className="text-3xl mb-2">🛍️</div>
          <h3 className="font-semibold">Shopping Cart</h3>
          <p className="text-sm text-white/70 mt-1">View your cart</p>
        </Link>
        <Link href="/shop" className="card p-6 text-center hover:border-gold transition">
          <div className="text-3xl mb-2">👖</div>
          <h3 className="font-semibold">Shop Denim</h3>
          <p className="text-sm text-white/70 mt-1">Browse products</p>
        </Link>
      </div>
    </section>
  );
}
