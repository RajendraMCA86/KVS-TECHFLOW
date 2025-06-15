"use client";

import { useState, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  category?: string;
}

const CATEGORIES = [
  { id: 'technical', label: 'Technical Support' },
  { id: 'billing', label: 'Billing Inquiry' },
  { id: 'product', label: 'Product Information' },
  { id: 'general', label: 'General Questions' },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [showCategories, setShowCategories] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const addMessage = (text: string, type: 'user' | 'bot', category?: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      text,
      category,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleCategorySelect = (category: { id: string; label: string }) => {
    setShowCategories(false);
    addMessage(`Selected: ${category.label}`, 'user');
    
    // Simulate bot response
    setTimeout(() => {
      addMessage(`How can I help you with ${category.label.toLowerCase()}?`, 'bot');
    }, 500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    addMessage(inputText, 'user');
    setInputText('');

    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Simulate bot response
    setTimeout(() => {
      // Note: messages.length here refers to the length *before* the current user message was added.
      // If the intent is to check after the user message, this logic might need adjustment.
      if (messages.length >= 2) { // Adjusted this condition slightly, assuming we check before bot adds its own.
        addMessage("Would you like to speak with a human agent? I can transfer you now.", 'bot');
      } else {
        addMessage("Thanks for your message. I'm processing your request.", 'bot');
      }
      // Optionally, re-focus here if the bot's message rendering causes focus loss again
      // if (inputRef.current) {
      //   inputRef.current.focus();
      // }
    }, 1000);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full p-4 shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          )}
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="p-4 bg-blue-600 text-white">
              <h3 className="text-lg font-semibold">Customer Support</h3>
              <p className="text-sm opacity-90">How can we help you today?</p>
            </div>

            <div className="h-96 flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {showCategories ? (
                  <div className="grid grid-cols-2 gap-2">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category)}
                        className="p-3 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${
                          message.type === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.type === 'user'
                              ? 'primary text-white'
                              : 'bg-gray-100 dark:bg-gray-700'
                          }`}
                        >
                          {message.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
                <div className="flex space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 primary text-white rounded-lg hover:bg-blue-700"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
