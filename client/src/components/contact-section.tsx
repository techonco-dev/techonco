import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { insertContactInquirySchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
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

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      generatorCapacity: '',
      additionalRequirements: ''
    }
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your inquiry! We will contact you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    submitMutation.mutate(data);
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
                    <p className="font-semibold">TEC HONCO TECHNOLOGIES PVT LTD</p>
                    <p className="opacity-90">Corporate Headquarters, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center bg-white/10">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Sales & Support</p>
                    <p className="opacity-90">+91 XXXX-XXXX-XX</p>
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="First Name"
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Last Name"
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          placeholder="Email Address"
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="generatorCapacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Generator Capacity</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/20 border-white/30 text-white focus:ring-white/50">
                            <SelectValue placeholder="Select generator capacity" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="25-75">25 - 75 kVA</SelectItem>
                          <SelectItem value="100-250">100 - 250 kVA</SelectItem>
                          <SelectItem value="300-500">300 - 500 kVA</SelectItem>
                          <SelectItem value="625-1000">625 - 1000 kVA</SelectItem>
                          <SelectItem value="1250+">1250+ kVA</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="additionalRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Additional Requirements</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4} 
                          placeholder="Additional Requirements"
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:ring-white/50 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
