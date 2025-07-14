import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail } from 'lucide-react';

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  generatorCapacity: string;
  additionalRequirements?: string;
};

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    generatorCapacity: '',
    additionalRequirements: ''
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      toast({
        title: "Error",
        description: "First name is required",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.lastName.trim()) {
      toast({
        title: "Error",
        description: "Last name is required",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.generatorCapacity) {
      toast({
        title: "Error",
        description: "Please select generator capacity",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for your inquiry! We will contact you soon.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        generatorCapacity: '',
        additionalRequirements: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to implement RECD technology? Contact our experts for consultation and customized solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center bg-white/10">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">TECHONCO TECHNOLOGIES PVT LTD</p>
                    <p className="opacity-90">B-1202, UTC, Sector 132, Noida, Uttar Pradesh- 201304, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center bg-white/10">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Sales & Support</p>
                    <p className="opacity-90">+91 9993933948 / 9654953201</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center bg-white/10">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="opacity-90">info@techonco.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <p className="opacity-90">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
              <p className="opacity-90">Saturday: 9:00 AM - 1:00 PM IST</p>
            </div>
          </div>
          
          <div className="glass-effect rounded-2xl p-8 bg-white/10 backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Request Quote</h3>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">First Name</label>
                  <Input 
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="First Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Last Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                <Input 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  type="email" 
                  placeholder="Email Address"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Generator Capacity</label>
                <Select value={formData.generatorCapacity} onValueChange={(value) => handleInputChange('generatorCapacity', value)}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white focus:ring-white/50">
                    <SelectValue placeholder="Select generator capacity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="25-75">25 - 75 kVA</SelectItem>
                    <SelectItem value="100-250">100 - 250 kVA</SelectItem>
                    <SelectItem value="300-500">300 - 500 kVA</SelectItem>
                    <SelectItem value="625-1000">625 - 1000 kVA</SelectItem>
                    <SelectItem value="1250+">1250+ kVA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Additional Requirements</label>
                <Textarea 
                  value={formData.additionalRequirements}
                  onChange={(e) => handleInputChange('additionalRequirements', e.target.value)}
                  placeholder="Tell us about your specific requirements..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50 min-h-[100px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-blue-600 hover:bg-white/90 font-semibold py-3"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
