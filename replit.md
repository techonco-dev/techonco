# TEC HONCO - Retrofit Emission Control Device (RECD) Platform

## Overview

This is a full-stack web application for TEC HONCO TECHNOLOGIES, showcasing their Retrofit Emission Control Devices (RECD) for diesel generators. The application serves as a marketing platform and lead generation system, built with modern web technologies and designed for scalability and performance.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: GSAP for advanced animations and scroll effects

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ESM modules
- **Storage**: In-memory storage with interface for database abstraction
- **Session Management**: Built-in session handling (ready for postgres sessions)
- **API Design**: RESTful endpoints with proper error handling

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon Database (serverless PostgreSQL)
- **Current State**: Memory storage implementation with database-ready interface

## Key Components

### User Interface Components
- **Hero Section**: Animated landing section with particle effects
- **Statistics Display**: Counter animations triggered on scroll
- **Technology Showcase**: Multi-step process visualization
- **Product Catalog**: Categorized RECD solutions by capacity
- **Benefits Overview**: Environmental and compliance advantages
- **Compliance Information**: Government regulations and requirements
- **Contact Forms**: Lead capture with validation

### Navigation System
- **Floating Navigation**: Sticky navigation with scroll detection
- **Smooth Scrolling**: Section-to-section navigation
- **Mobile Responsive**: Hamburger menu for mobile devices

### Animation System
- **GSAP Integration**: Advanced animations and scroll triggers
- **Particle Effects**: Dynamic background elements
- **Counter Animations**: Intersection Observer-based number counting
- **Scroll Progress**: Visual progress indicator

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation
2. Frontend validates data using Zod schema
3. POST request to `/api/contact` endpoint
4. Server validates and stores inquiry
5. Success/error feedback to user
6. Admin can retrieve inquiries via `/api/contact-inquiries`

### Content Management
- Static content managed through React components
- Product specifications and compliance data embedded in components
- SEO metadata included in HTML head
- Schema.org structured data for search engines

## External Dependencies

### Frontend Libraries
- **UI Components**: Radix UI primitives for accessibility
- **Animation**: GSAP and ScrollTrigger for smooth animations
- **Forms**: React Hook Form with Hookform Resolvers
- **HTTP Client**: TanStack Query for API communication
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React icon library

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL adapter
- **Validation**: Zod for schema validation
- **Session Store**: connect-pg-simple for PostgreSQL sessions
- **Build Tools**: ESBuild for production builds

### Development Tools
- **TypeScript**: Full type safety across the stack
- **Vite**: Fast development server and build tool
- **ESLint/Prettier**: Code quality and formatting
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: ESBuild bundles server to `dist/index.js`
- **Static Assets**: Served directly by Express in production
- **Environment**: NODE_ENV determines development/production behavior

### Database Migration
- **Schema**: Defined in `shared/schema.ts`
- **Migrations**: Generated to `./migrations` directory
- **Push Command**: `npm run db:push` for schema updates
- **Connection**: DATABASE_URL environment variable required

### Performance Optimizations
- **Asset Optimization**: Vite optimizes CSS and JavaScript bundles
- **Font Loading**: Google Fonts with preconnect for performance
- **Image Optimization**: Prepared for CDN integration
- **Caching Strategy**: Ready for Redis or similar caching layer

## Changelog

```
Changelog:
- June 30, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```