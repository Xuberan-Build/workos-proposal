import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookingForm = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    workEmail: '',
    role: '',
    companySize: '',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const validateStep1 = () => {
    return formData.fullName && formData.companyName && formData.workEmail;
  };

  const handleSubmit = () => {
    onComplete(formData);
  };

  if (step === 1) {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input
            id="companyName"
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            placeholder="Acme Inc."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="workEmail">Work Email</Label>
          <Input
            id="workEmail"
            type="email"
            value={formData.workEmail}
            onChange={(e) => handleInputChange('workEmail', e.target.value)}
            placeholder="john@company.com"
          />
        </div>
        <Button onClick={handleNext} disabled={!validateStep1()}>
          Next
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Select onValueChange={(value) => handleInputChange('role', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technical">Technical Manager</SelectItem>
            <SelectItem value="business">Business Manager</SelectItem>
            <SelectItem value="product">Hiring Manager</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="companySize">Company Size</Label>
        <Select onValueChange={(value) => handleInputChange('companySize', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select company size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-50">1-50 employees</SelectItem>
            <SelectItem value="51-200">51-200 employees</SelectItem>
            <SelectItem value="201-1000">201-1000 employees</SelectItem>
            <SelectItem value="1000+">1000+ employees</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="max-h-[50vh] mt-4">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ14pSdT57UMffOY9pWiLb0z0b0tu9WUZuJ1q050pXyTC0ADfI3d_DsAf3HjiSs2AlSX-yWs7F5e?gv=true"
          className="w-full h-full min-h-[300px] border-0 rounded-lg"
          frameBorder="0"
          title="Schedule Appointment"
        />
      </div>
      <Button onClick={handleSubmit} className="mt-4">
        Complete Booking
      </Button>
    </div>
  );
};

export const BookingDialog = ({ children }) => {
  const [showForm, setShowForm] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBookingComplete = (formData) => {
    console.log('Booking completed:', formData);
    setShowForm(false);
    setShowSuccess(true);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[600px] max-h-[85vh] p-4 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {showForm ? 'Book an Interview to Access Strategy' : 'Booking Confirmed!'}
          </DialogTitle>
          <DialogDescription>
            {showForm
              ? 'Complete the form below to schedule a brief interview and gain access to our comprehensive strategy.'
              : 'Thank you for booking. You will receive a calendar invitation shortly. You can now access the full strategy content.'}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          {showForm && <BookingForm onComplete={handleBookingComplete} />}
          {showSuccess && (
            <div className="space-y-4">
              <Card className="p-4 bg-green-50">
                <p className="text-green-700">Your booking has been confirmed! Check your email for the calendar invitation.</p>
              </Card>
              <Button asChild className="w-full">
                <Link to="/strategy">
                  Access Strategy Content
                </Link>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
