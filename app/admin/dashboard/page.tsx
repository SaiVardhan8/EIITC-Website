"use client"

import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">EIITC Dashboard</h1>
        <nav className="text-sm text-gray-500">
          {/* <a href="/dashboard" className="hover:underline">Dashboard</a>  */}
        </nav>
      </div>
       <div className="flex items-center justify-center !mt-[150px] bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to <span className="text-blue-600">EIITC</span>
        </h1>
      </motion.div>
    </div>
      
    </div>
  );
};

export default Dashboard;