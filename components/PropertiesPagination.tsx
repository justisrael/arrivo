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
        <div className="flex items-center justify-between border-t border-slate-800 pt-8 mt-12">
            {/* Page Count */}
            <div className="text-white font-medium">
                <span className="text-slate-400">{currentPage.toString().padStart(2, '0')}</span>
                <span className="mx-2 text-slate-700">of</span>
                <span className="text-slate-400">{totalPages.toString().padStart(2, '0')}</span>
            </div>

            {/* Navigation */}
            <div className="flex gap-4">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-white hover:bg-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-white hover:bg-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
