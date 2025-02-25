import React from 'react';
import { X } from 'lucide-react';

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export function PDFModal({ isOpen, onClose, pdfUrl }: PDFModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-h-[90vh] max-w-4xl w-full bg-white rounded-lg overflow-auto"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="sticky top-4 left-[calc(100%-3rem)] text-gray-600 hover:text-gray-800 z-10 bg-white/80 p-2 rounded-full"
        >
          <X size={24} />
        </button>
        <img 
          src={pdfUrl}
          alt="Resume"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
