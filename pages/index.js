'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TrendingUp, BarChart2, Zap, MessageSquare, Send, Globe, Shield, Cpu, Briefcase } from 'lucide-react'

export default function LandingPage() {
const [message, setMessage] = useState('')

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

return (
  <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-indigo-950 text-white overflow-hidden">
    <div className="relative z-10">
      {/* Header */}
      <header className="container mx-auto py-6 flex justify-between items-center">
        <motion.h1 
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI-Powered Stock Research
        </motion.h1>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="container mx-auto mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          Unlock Market Insights with AI
        </h2>
        <p className="text-xl mb-8 text-blue-200">Harness the power of CrewAI Agents to analyze stock market trends and make informed decisions.</p>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
          Get Started
        </Button>
      </motion.section>

      {/* Top Indices Section */}
      <motion.section 
        className="container mx-auto mt-24"
        {...fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Top Market Indices</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'S&P 500', value: '4,185.81', change: '+0.98%' },
            { name: 'Dow Jones', value: '32,845.13', change: '+0.61%' },
            { name: 'NASDAQ', value: '12,888.28', change: '+1.02%' },
            { name: 'Russell 2000', value: '1,896.45', change: '+0.71%' }
          ].map((index, i) => (
            <motion.div 
              key={i}
              className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 p-6 rounded-2xl backdrop-blur-sm shadow-lg border border-blue-500/30"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="font-semibold text-blue-300 mb-2">{index.name}</h3>
              <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">{index.value}</p>
              <p className={`text-sm mt-2 ${index.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {index.change}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* AI Chat Section */}
      <motion.section 
        className="container mx-auto mt-24"
        {...fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Ask Our AI</h2>
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900/30 to-indigo-900/30 p-8 rounded-2xl backdrop-blur-sm shadow-lg border border-blue-500/30">
          <div className="h-80 mb-6 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-900/30 pr-4">
            <div className="bg-gradient-to-r from-blue-600/50 to-indigo-600/50 p-4 rounded-lg max-w-[80%] shadow-md">
              <p className="font-semibold text-blue-200 mb-2">AI Assistant</p>
              <p>How can I help you with stock market research today?</p>
            </div>
            <div className="bg-gradient-to-r from-purple-600/50 to-pink-600/50 p-4 rounded-lg max-w-[80%] ml-auto text-right shadow-md">
              <p className="font-semibold text-purple-200 mb-2">You</p>
              <p>What is the current price of AAPL?</p>
            </div>
            <div className="bg-gradient-to-r from-blue-600/50 to-indigo-600/50 p-4 rounded-lg max-w-[80%] shadow-md">
              <p className="font-semibold text-blue-200 mb-2">AI Assistant</p>
              <p>As of the last market close, the price of Apple Inc. (AAPL) was $173.50. Please note that stock prices can fluctuate rapidly, so it's always best to check a real-time financial data source for the most up-to-date information.</p>
            </div>
            <div className="bg-gradient-to-r from-purple-600/50 to-pink-600/50 p-4 rounded-lg max-w-[80%] ml-auto text-right shadow-md">
              <p className="font-semibold text-purple-200 mb-2">You</p>
              <p>Tell me about NVIDIA in the last 3 months.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-600/50 to-indigo-600/50 p-4 rounded-lg max-w-[80%] shadow-md">
              <p className="font-semibold text-blue-200 mb-2">AI Assistant</p>
              <p>Over the past 3 months, NVIDIA (NVDA) has shown significant growth, driven by the AI boom. The stock price has increased by approximately 40%, reaching new all-time highs. This surge is largely attributed to the company's strong position in AI chip manufacturing and the growing demand for GPUs in data centers. NVIDIA has also announced new products and partnerships in the AI space, further solidifying its market leadership.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Ask about stocks, market trends, or news..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow bg-blue-900/30 border-none text-white placeholder-blue-300 rounded-full py-3 px-6 focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full p-3 transition duration-300 transform hover:scale-105 shadow-lg">
              <Send className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="container mx-auto mt-24"
        {...fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Benefits of AI-Powered Research</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <TrendingUp className="w-16 h-16 mb-4 text-blue-400" />, title: 'Real-time Analysis', description: 'Get up-to-the-minute insights on market trends and stock performance.' },
            { icon: <BarChart2 className="w-16 h-16 mb-4 text-indigo-400" />, title: 'Advanced Forecasting', description: 'Leverage AI to predict potential market movements and stock behavior.' },
            { icon: <Briefcase className="w-16 h-16 mb-4 text-purple-400" />, title: 'Portfolio Optimization', description: 'Receive personalized recommendations to balance and improve your portfolio.' }
          ].map((benefit, i) => (
            <motion.div 
              key={i}
              className="text-center p-8 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl backdrop-blur-sm shadow-lg border border-blue-500/30"
              whileHover={{ y: -10, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {benefit.icon}
              <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">{benefit.title}</h3>
              <p className="text-blue-200">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        className="container mx-auto mt-24"
        {...fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          {[
            { step: 1, title: 'Input Your Query', description: 'Ask about any stock, market trend, or financial news.' },
            { step: 2, title: 'AI Analysis', description: 'Our CrewAI Agents process your request using advanced algorithms.' },
            { step: 3, title: 'Get Insights', description: 'Receive comprehensive analysis and actionable insights.' }
          ].map((step, i) => (
            <motion.div 
              key={i}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
                {step.step}
              </div>
              <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">{step.title}</h3>
              <p className="max-w-xs text-blue-200">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="container mx-auto mt-24"
        {...fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Powerful Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { icon: <Zap className="w-12 h-12 text-yellow-400" />, title: 'Lightning-Fast Analysis', description: 'Get instant insights on any stock or market trend.' },
            { icon: <MessageSquare className="w-12 h-12 text-green-400" />, title: 'Natural Language Processing', description: 'Communicate with our AI in plain English for easy understanding.' },
            { icon: <BarChart2 className="w-12 h-12 text-blue-400" />, title: 'Advanced Charting', description: 'Visualize complex data with interactive and intuitive charts.' },
            { icon: <TrendingUp className="w-12 h-12 text-red-400" />, title: 'Trend Prediction', description: 'Stay ahead of the market with AI-powered trend forecasting.' }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              className="flex items-start space-x-6 p-8 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl backdrop-blur-sm shadow-lg border border-blue-500/30"
              whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex-shrink-0 bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-full shadow-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technology Stack Section */}
      <motion.section 
        className="container mx-auto mt-24"
        {...fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Our Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: <Globe className="w-16 h-16 text-blue-400" />, title: 'Web Scraping', description: 'Real-time data collection from various financial sources.' },
            { icon: <Cpu className="w-16 h-16 text-indigo-400" />, title: 'Machine Learning', description: 'Advanced algorithms for predictive analysis and pattern recognition.' },
            { icon: <Shield className="w-16 h-16 text-purple-400" />, title: 'Secure Infrastructure', description: 'Enterprise-grade security to protect your data and privacy.' },
            { icon: <MessageSquare className="w-16 h-16 text-green-400" />, title: 'NLP Processing', description: 'Understand and analyze financial texts and reports.' },
            { icon: <BarChart2 className="w-16 h-16 text-yellow-400" />, title: '3D Visualization', description: 'Immersive 3D charts for better data comprehension.' },
            { icon: <Zap className="w-16 h-16 text-red-400" />, title: 'Real-time Processing', description: 'Instant updates and alerts on market changes.' }
          ].map((tech, i) => (
            <motion.div 
              key={i}
              className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl backdrop-blur-sm shadow-lg border border-blue-500/30"
              whileHover={{ y: -5, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {tech.icon}
              <h3 className="text-xl font-semibold my-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">{tech.title}</h3>
              <p className="text-sm text-blue-200">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="container mx-auto mt-24 mb-12 text-center"
        {...fadeInUp}
      >
        <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          Ready to Revolutionize Your Trading?
        </h2>
        <p className="text-xl mb-8 text-blue-200">Join thousands of traders who are already leveraging AI for smarter investments.</p>
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg text-lg">
          Start Your Free Trial
        </Button>
      </motion.section>

      {/* Footer */}
      <footer className="container mx-auto py-8 text-center border-t border-blue-800/30">
        <p className="text-blue-400">&copy; 2024 AI Stock Research. All rights reserved.</p>
      </footer>
    </div>
  </div>
)
}