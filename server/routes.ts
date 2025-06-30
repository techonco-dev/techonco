import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(400).json({ 
        success: false, 
        message: 'Invalid form data. Please check your inputs and try again.' 
      });
    }
  });

  // Get all contact inquiries (admin endpoint)
  app.get('/api/contact-inquiries', async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error('Get inquiries error:', error);
      res.status(500).json({ 
        message: 'Failed to retrieve contact inquiries' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
