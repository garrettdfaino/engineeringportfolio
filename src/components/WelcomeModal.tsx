import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg transform transition-all animate-modal"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
          <h2 
            id="welcome-title"
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            Welcome to My Projects
          </h2>
          
          <div className="text-gray-600 mb-6 leading-relaxed space-y-4">
            <p>
              Please Note: These projects were completed several years ago, and as a result, I have minimal pictures, reports, or data in my possession to share or improve upon. Since these projects were done at my past jobs, I no longer have access to the full documentation.
            </p>

            <p>
              Additionally, some project descriptions may be brief or broad due to confidentiality agreements with my previous employers and their customers. I appreciate your understanding and am happy to provide any insights I can based on my experience.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            autoFocus
          >
            Explore Projects
          </button>
        </div>
      </div>
    </div>
  );
}