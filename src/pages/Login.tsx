import React, { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAppContext } from "../components/AppContext";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const { handleLogin } = useAppContext();
  const [user, setUser] = useState({ username: "", password: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const fadeInUp = {
    initial: { y: 24, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-500/8 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial="initial"
        animate="animate"
        variants={{
          animate: { transition: { staggerChildren: 0.1 } },
        }}
        className="w-full max-w-md relative z-10"
      >
        {/* Card */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/30">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h1 className="text-2xl font-display font-bold text-white mb-1">Welcome Back</h1>
            <p className="text-sm text-slate-400">Sign in to your account to continue</p>
          </motion.div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(user.username, user.password);
            }}
            className="space-y-5"
          >
            {/* Username */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="username">
                Username
              </label>
              <div className={`relative flex items-center rounded-xl border transition-all duration-200 ${
                focusedField === "username"
                  ? "border-brand-400 bg-white/5 shadow-lg shadow-brand-500/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}>
                <span className="pl-4 text-slate-400">
                  <FaUser size={16} />
                </span>
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("username")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your username"
                  className="w-full bg-transparent px-3 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none"
                />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-slate-300" htmlFor="password">
                  Password
                </label>
              </div>
              <div className={`relative flex items-center rounded-xl border transition-all duration-200 ${
                focusedField === "password"
                  ? "border-brand-400 bg-white/5 shadow-lg shadow-brand-500/10"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}>
                <span className="pl-4 text-slate-400">
                  <FaLock size={16} />
                </span>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your password"
                  className="w-full bg-transparent px-3 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none"
                />
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-400 to-brand-500 text-white font-semibold text-sm tracking-wide hover:from-brand-500 hover:to-brand-600 transition-all duration-200 shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 active:scale-[0.98]"
              >
                Sign In
              </button>
            </motion.div>
          </form>

          {/* Divider */}
          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
          </motion.div>
        </motion.div>

        {/* Back to home */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="text-center mt-6">
          <Link to="/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
