"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function BlackCard( {percentage, text} : {percentage: string, text: string}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.6 }} // Start with reduced scale
            whileInView={{ opacity: 1, scale: 1 }} // Animate to full scale
            viewport={{ once: true }} // Trigger animation only once
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing and duration
            className="py-10 my-5 bg-gray-800 rounded-lg shadow-lg p-6"
        >
            <p className='text-teal-500 text-5xl font-medium'>{percentage}</p>
            <p className='text-white pt-2 text-xl'>{text}</p>
        </motion.div>
    );
}