'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PropertiesPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function PropertiesPagination({
    currentPage,
    totalPages,
    onPageChange,
}: PropertiesPaginationProps) {
    return (
        <nav className="flex items-center justify-between border-t border-slate-800 pt-8 mt-12" aria-label="Property listing pagination">
            {/* Page Count */}
            <div className="text-white font-medium" aria-live="polite" aria-atomic="true">
                <span className="sr-only">Page </span>
                <span className="text-slate-400">{currentPage.toString().padStart(2, '0')}</span>
                <span className="mx-2 text-slate-700" aria-hidden="true">of</span>
                <span className="sr-only"> of </span>
                <span className="text-slate-400">{totalPages.toString().padStart(2, '0')}</span>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-white hover:bg-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
                    aria-label="Go to previous page"
                >
                    <ChevronLeft size={24} aria-hidden="true" />
                </button>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-white hover:bg-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none"
                    aria-label="Go to next page"
                >
                    <ChevronRight size={24} aria-hidden="true" />
                </button>
            </div>
        </nav>
    );
}
