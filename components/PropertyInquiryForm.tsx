'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { MapPin } from 'lucide-react';

interface PropertyInquiryFormProps {
    propertyName: string;
    location: string;
}

export default function PropertyInquiryForm({
    propertyName,
    location,
}: PropertyInquiryFormProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agreeTerms: false,
    });

    const handleChange = (name: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('Inquiry submitted:', { propertyName, ...formData });
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 my-20">
            {/* Left Text Column */}
            <div className="lg:col-span-1">
                <div className="flex items-center gap-1 mb-6">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-700">
                        <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="currentColor" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-800">
                        <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="currentColor" />
                    </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Inquire About {propertyName}
                </h2>
                <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                    Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
                </p>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-2 border border-zinc-800 rounded-2xl p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-sm font-semibold text-white">First Name</Label>
                            <Input
                                placeholder="Enter First Name"
                                value={formData.firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                                className="bg-transparent border-zinc-700 py-6 px-4 text-white placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-purple-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-semibold text-white">Last Name</Label>
                            <Input
                                placeholder="Enter Last Name"
                                value={formData.lastName}
                                onChange={(e) => handleChange('lastName', e.target.value)}
                                className="bg-transparent border-zinc-700 py-6 px-4 text-white placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label className="text-sm font-semibold text-white">Email</Label>
                            <Input
                                type="email"
                                placeholder="Enter your Email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                className="bg-transparent border-zinc-700 py-6 px-4 text-white placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-purple-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-semibold text-white">Phone</Label>
                            <Input
                                type="tel"
                                placeholder="Enter Phone Number"
                                value={formData.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                className="bg-transparent border-zinc-700 py-6 px-4 text-white placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-purple-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm font-semibold text-white">Selected Property</Label>
                        <div className="relative group">
                            <div className="flex items-center bg-transparent border border-zinc-700 rounded-xl px-4 py-4 focus-within:border-zinc-500 transition-all">
                                <span className="text-white text-sm w-full">{propertyName}, {location}</span>
                                <MapPin className="text-zinc-400" size={20} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label className="text-sm font-semibold text-white">Message</Label>
                        <Textarea
                            placeholder="Enter your Message here..."
                            rows={4}
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            className="bg-transparent border-zinc-700 p-4 text-white placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-purple-500 min-h-[120px]"
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-4">
                        <div className="flex items-center space-x-3">
                            <Checkbox
                                id="terms-inquiry"
                                checked={formData.agreeTerms}
                                onCheckedChange={(val) => handleChange('agreeTerms', val)}
                                className="border-zinc-700 bg-transparent data-[state=checked]:border-purple-600 focus-visible:ring-1 focus-visible:ring-purple-500"
                            />
                            <label htmlFor="terms-inquiry" className="text-sm text-zinc-400 cursor-pointer">
                                I agree with <a href="#" className="text-white hover:underline transition">Terms of Use</a> and <a href="#" className="text-white hover:underline transition">Privacy Policy</a>
                            </label>
                        </div>
                        <Button
                            type="submit"
                            disabled={!formData.agreeTerms}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-7 rounded-xl font-bold transition-all text-sm disabled:opacity-50"
                        >
                            Send Your Message
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
