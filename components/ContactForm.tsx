'use client';

import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    propertyType: '',
    bathrooms: '',
    bedrooms: '',
    budget: '',
    contactMethod: 'phone',
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
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-4 md:px-6 mb-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-1 mb-4">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-700">
              <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="currentColor" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-800">
              <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="currentColor" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-900">
              <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Make it Happen
          </h2>
          <p className="text-zinc-500 max-w-7xl leading-relaxed">
            Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-secondary-background border border-zinc-800 rounded-lg p-10">
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="space-y-3">
              <Label htmlFor="firstName" className="text-sm font-semibold text-white">
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
                className="bg-background border-zinc-700 py-6 px-4 text-white focus-visible:ring-1 focus-visible:ring-purple-500"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="lastName" className="text-sm font-semibold text-white">
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
                className="bg-background border-zinc-700 py-6 px-4 text-white focus-visible:ring-1 focus-visible:ring-purple-500"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="email" className="text-sm font-semibold text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="bg-background border-zinc-700 py-6 px-4 text-white focus-visible:ring-1 focus-visible:ring-purple-500"
              />
            </div>
          </div>

          {/* Preferences Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="space-y-3">
              <Label htmlFor="phone" className="text-sm font-semibold text-white">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="bg-background border-zinc-700 py-6 px-4 text-white focus-visible:ring-1 focus-visible:ring-purple-500"
              />
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-white">
                Preferred Location
              </Label>
              {/* @ts-ignore */}
              <Select modal={false} onValueChange={(val) => handleChange('location', val)}>
                <SelectTrigger className="bg-background border-zinc-700 py-6 px-4 text-white focus:ring-1 focus:ring-purple-500">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent className="bg-background border-zinc-800 text-white">
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="la">Los Angeles</SelectItem>
                  <SelectItem value="ch">Chicago</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-white">
                Property Type
              </Label>
              {/* @ts-ignore */}
              <Select modal={false} onValueChange={(val) => handleChange('propertyType', val)}>
                <SelectTrigger className="bg-background border-zinc-700 py-6 px-4 text-white focus:ring-1 focus:ring-purple-500">
                  <SelectValue placeholder="Select Property Type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-zinc-800 text-white">
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Preferences Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-white">
                No. of Bathrooms
              </Label>
              {/* @ts-ignore */}
              <Select modal={false} onValueChange={(val) => handleChange('bathrooms', val)}>
                <SelectTrigger className="bg-background border-zinc-700 py-6 px-4 text-white focus:ring-1 focus:ring-purple-500">
                  <SelectValue placeholder="Select Bathrooms" />
                </SelectTrigger>
                <SelectContent className="bg-background border-zinc-800 text-white">
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-white">
                No. of Bedrooms
              </Label>
              {/* @ts-ignore */}
              <Select modal={false} onValueChange={(val) => handleChange('bedrooms', val)}>
                <SelectTrigger className="bg-background border-zinc-700 py-6 px-4 text-white focus:ring-1 focus:ring-purple-500">
                  <SelectValue placeholder="Select Bedrooms" />
                </SelectTrigger>
                <SelectContent className="bg-background border-zinc-800 text-white">
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="text-sm font-semibold text-white">
                Budget
              </Label>
              {/* @ts-ignore */}
              <Select modal={false} onValueChange={(val) => handleChange('budget', val)}>
                <SelectTrigger className="bg-background border-zinc-700 py-6 px-4 text-white focus:ring-1 focus:ring-purple-500">
                  <SelectValue placeholder="Select Budget" />
                </SelectTrigger>
                <SelectContent className="bg-background border-zinc-800 text-white">
                  <SelectItem value="0-500k">$0 - $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Contact Method & Message */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-1 space-y-4">
              <Label className="text-sm font-semibold text-white">
                Preferred Contact Method
              </Label>
              <RadioGroup
                defaultValue="phone"
                onValueChange={(val) => handleChange('contactMethod', val)}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-2 border border-zinc-800 bg-background p-4 rounded-lg cursor-pointer">
                  <RadioGroupItem value="phone" id="r1" className="bg-transparent border-zinc-600" />
                  <Label htmlFor="r1" className="flex items-center gap-2 cursor-pointer text-white">
                    <Phone size={16} /> Phone
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border border-zinc-800 bg-background p-4 rounded-lg cursor-pointer">
                  <RadioGroupItem value="email" id="r2" className="bg-transparent border-zinc-600" />
                  <Label htmlFor="r2" className="flex items-center gap-2 cursor-pointer text-white">
                    <Mail size={16} /> Email
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="md:col-span-2 space-y-3">
              <Label htmlFor="message" className="text-sm font-semibold text-white">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter your Message here..."
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="bg-background border-zinc-700 p-4 text-white focus-visible:ring-1 focus-visible:ring-purple-500 min-h-[120px]"
              />
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-zinc-800">
            <div className="flex items-center space-x-3">
              <Checkbox
                id="terms"
                checked={formData.agreeTerms}
                onCheckedChange={(val) => handleChange('agreeTerms', val)}
                className="border-zinc-700 bg-background data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
              />
              <label htmlFor="terms" className="text-sm text-zinc-400 cursor-pointer">
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
    </section>
  );
}
