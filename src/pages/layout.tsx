import React from 'react';
import { Tchildern } from '../components/container';

export default function Layout({ children }: Tchildern) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white">
      {children}
    </div>
  );
}
