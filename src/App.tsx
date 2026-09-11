/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { PhoneMissed, Clock, Zap, CheckCircle, Calendar, ArrowRight, Download, ArrowDown, User, Bot, Play, X } from 'lucide-react';
import EmailPopup from './components/EmailPopup';
import FAQ from './components/FAQ';

export default function App() {
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const driveLink = "https://drive.google.com/drive/folders/1eTBaFmT5UWUJq4Pgnt6yhEtCowOPek-8?usp=sharing";

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation / Header */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-playfair font-bold text-2xl tracking-tight text-slate-900">The Condo Guys</span>
        </div>
        <a href="https://thegraygroupal.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
          thegraygroupal.com
        </a>
      </nav>

      {/* Hero Section */}
      <section className="w-full max-w-4xl mx-auto px-6 pt-16 pb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide mb-8 border border-blue-100/50">
            Prepared exclusively for Jason Gray & Keller Williams Realty
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-8">
            Stop Losing Motivated Buyers to Voicemail.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            I noticed your recent ad for the riverfront condo at <span className="font-semibold text-slate-800">680 6th Avenue NE</span>. While you're busy showing resort-style amenities and helping clients find their perfect game-day retreat near The University of Alabama, who is instantly answering the new leads your ads are generating? 
            <br/><br/>
            I built a custom call-handling workflow specifically for The Condo Guys to solve this.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
            >
              <Download className="w-5 h-5" />
              Download Custom Workflow
            </a>
            <button 
              onClick={() => setIsEmailPopupOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-slate-50 border border-slate-200 transition-all shadow-sm"
            >
              Let's Talk (Free Setup)
            </button>
          </div>
        </motion.div>
      </section>

      {/* Pain Points Section */}
      <section className="w-full bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Reality of Real Estate</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Running a top-tier brokerage means you can't be everywhere at once. But in real estate, speed to lead is everything.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PhoneMissed,
                title: "The Showing Dilemma",
                desc: "Letting new leads go to voicemail while you're with clients or at a showing. A missed call is often a missed commission."
              },
              {
                icon: Clock,
                title: "Off-Clock Misses",
                desc: "Missing calls after hours, on weekends, or when you are focused on property research and marketing."
              },
              {
                icon: Zap,
                title: "The Speed-to-Lead Trap",
                desc: "Losing motivated buyers and sellers to the next agent who actually answers the phone when they call."
              }
            ].map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The AI Advantage (Benefits) */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mb-6">Never Miss Another Lead.</h2>
            <p className="text-slate-600 mb-8 text-lg">Your custom AI Receptionist ensures every single inquiry for The Condo Guys is handled with professional care, instantly.</p>
            
            <div className="space-y-6">
              {[
                {
                  title: "Zero Missed Opportunities",
                  desc: "Answers every call instantly, 24/7, sounding exactly like a real, professional person."
                },
                {
                  title: "Intelligent Qualification",
                  desc: "Qualifies buyers and sellers naturally, gathering their needs, timeline, and budget before you even speak to them."
                },
                {
                  title: "Automated Scheduling",
                  desc: "Books showings and consultations straight into your calendar without you lifting a finger."
                }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
            <h3 className="font-playfair text-2xl font-bold mb-8">What I Built For You</h3>
            <p className="text-slate-300 mb-8">I didn't just write out a theory. I built the actual system. Inside your dedicated folder, you will find:</p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="font-medium">Complete AI Assistant Build (Retell AI)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="font-medium">n8n Workflow: Appointment Scheduling</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="font-medium">n8n Workflow: Call Summaries</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="font-medium">Installation Guide & Setup Diagram</span>
              </li>
            </ul>

            <a 
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
            >
              Access Your Folder <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Cost Reality (Comparison) */}
      <section className="w-full bg-slate-900 py-24 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-16">The Cost Reality</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* Traditional */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-slate-300" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-white">Traditional Employee</h3>
                  <p className="text-slate-400">Standard Receptionist</p>
                </div>
              </div>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-400" /> Costs $3,000+ per month</li>
                <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-400" /> Works strictly 9-to-5</li>
                <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-400" /> Takes sick days & vacations</li>
                <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-400" /> Requires weeks of training</li>
                <li className="flex items-center gap-3"><X className="w-5 h-5 text-red-400" /> Can only handle one call at a time</li>
              </ul>
            </div>

            {/* AI Offer */}
            <div className="bg-white text-slate-900 p-8 rounded-3xl relative shadow-2xl shadow-white/5 transform md:-translate-y-4 border border-slate-100">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                My Offer
              </div>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-slate-900">Custom AI Workflow</h3>
                  <p className="text-slate-500">Built for Jason Gray</p>
                </div>
              </div>
              <ul className="space-y-4 text-slate-600 font-medium">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> $0 for my setup time</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Works 24/7/365</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Never calls in sick</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Instantly trained on your listings</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500" /> Infinite simultaneous calls</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mb-4">Common Questions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to know about implementing this workflow.</p>
        </div>
        <FAQ />
      </section>

      {/* CTA Section */}
      <section className="w-full bg-blue-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-4xl font-bold text-slate-900 mb-6">Let's get this running for The Condo Guys.</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            No sales pitch. Just a free 9-minute call where I'll personally help you install and customize this workflow for your Keller Williams business at no cost.
          </p>
          <button 
            onClick={() => setIsEmailPopupOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
          >
            Schedule Free 9-Min Setup <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 py-8 text-center text-slate-500 text-sm">
        <p>Prepared specifically for Jason Gray. Not for public distribution.</p>
      </footer>

      {/* Modals */}
      <EmailPopup isOpen={isEmailPopupOpen} onClose={() => setIsEmailPopupOpen(false)} />
    </div>
  );
}
