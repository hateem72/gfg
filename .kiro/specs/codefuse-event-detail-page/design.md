# Design Document - CodeFuse 25 Event Detail Page

## Overview

The CodeFuse 25 Event Detail Page is a comprehensive, visually stunning single-page component that showcases all information about the "CodeFuse 25 - The Ultimate DSA Battle Arena" hackathon. The page will feature a hero section with event branding, detailed information sections, an interactive round checker, and prominent call-to-action elements for registration. The design will maintain consistency with the existing application's visual language while creating a unique, engaging experience for this flagship event.

## Architecture

### Component Structure

```
EventDetailPage (Main Container)
├── Hero Section
│   ├── Event Logo/Branding
│   ├── Event Title & Subtitle
│   ├── Organizer Information
│   └── Quick Stats Banner
├── Registration Section
│   ├── CTA Button
│   ├── QR Code Display
│   ├── Registration Details
│   └── Free Badge
├── Event Details Section
│   ├── About the Event
│   ├── Event Format (2 Rounds)
│   ├── Schedule Timeline
│   └── Venue Information
├── Prizes Section
│   ├── Prize Cards Grid
│   │   ├── GFG Goodies Card
│   │   ├── Connect Vouchers Card
│   │   └── Certificates Card
│   └── Visual Prize Showcase
├── Round Checker Section
│   ├── Input Form
│   ├── Result Display
│   └── Status Indicators
├── Contact & Social Section
│   ├── Contact Information
│   ├── Social Media Links
│   └── Location Map/Details
└── Back to Events CTA
```

### Routing Integration

- **New Route**: `/events/codefuse-25`
- **Parent Route**: `/events`
- **Navigation Flow**: Events Page → CodeFuse Detail Page → Back to Events

The Events page will be updated to make the "Hackathon" coming soon card clickable, linking to this detail page.

## Components and Interfaces

### 1. EventDetailPage Component

**File**: `client/src/pages/EventDetail.jsx`

**Props**: None (uses React Router for navigation)

**State Management**:
```javascript
{
  roundCheckInput: string,      // User input for checking round status
  roundCheckResult: object,     // Result from round check
  isLoading: boolean,           // Loading state for round checker
  error: string                 // Error message if any
}
```

**Key Features**:
- GSAP animations for scroll-triggered reveals
- Smooth transitions between sections
- Responsive grid layouts
- Interactive hover effects

### 2. Hero Section

**Visual Design**:
- Full-width banner with gradient background (blue to green)
- Large event title using Anton font (matching Events page style)
- Floating particle effects in background
- Organizer logos displayed prominently
- Quick stats: Date, Location, Registration Status

**Animations**:
- Fade-in and scale-up on page load
- Floating particles with staggered animation
- Shimmer effect on hover

### 3. Registration Section

**Layout**:
- Centered card with prominent "Register Now" button
- QR code displayed alongside registration link
- "FREE" badge with pulsing animation
- Registration deadline countdown (if applicable)

**Interactive Elements**:
- Button with hover scale and glow effect
- QR code with zoom on hover
- Click tracking for analytics

**External Link**: `https://gfg.allenhouse.ac.in/`

### 4. Event Details Section

**Information Architecture**:

**About Subsection**:
- Event description and objectives
- Target audience
- What participants will learn

**Format Subsection**:
- Round 1: Online MCQs Battle
  - Date: 26th Nov, 25
  - Time: 8:00 PM (Sharp)
  - Platform: Online
  - Format: Multiple Choice Questions on DSA
  
- Round 2: Offline On-Campus Battle
  - Date: 29th Nov, 25
  - Time: 11:00 AM (Sharp)
  - Location: Allenhouse Institute of Technology, Rooma, Kanpur
  - Format: Coding challenges and problem-solving

**Visual Design**:
- Timeline visualization for rounds
- Icon-based format indicators
- Color-coded sections (Round 1: Blue, Round 2: Green)

### 5. Prizes Section

**Prize Cards**:

**Card 1: GFG Goodies**
- Icon: Backpack/T-shirt illustration
- Title: "Exclusive GFG Goodies"
- Description: "For Every Finalist"
- Visual: Product showcase images

**Card 2: Connect Vouchers**
- Icon: Money/Voucher illustration
- Title: "₹10,000/- GFG Connect Vouchers"
- Description: "For Top Performers"
- Visual: Voucher design mockup

**Card 3: Certificates**
- Icon: Certificate illustration
- Title: "GFG Certificates"
- Description: "For All Participants"
- Visual: Certificate preview

**Layout**:
- 3-column grid on desktop
- Single column on mobile
- Card hover effects with lift and glow
- Staggered reveal animation on scroll

### 6. Round Checker Section

**Functionality**:
- Input field for participant ID/email/registration number
- "Check Status" button
- Result display area

**States**:

**Initial State**:
- Empty input field with placeholder
- Disabled check button until input is valid

**Loading State**:
- Spinner animation
- Disabled input and button

**Success State**:
- Green checkmark icon
- "Qualified for Round X" message
- Next round details

**Error State**:
- Red cross icon
- "Not qualified" or "Not found" message
- Supportive text with contact information

**Design**:
- Card-based layout with border
- Color-coded status indicators
- Smooth transitions between states

**Note**: For MVP, this will be a UI-only component. Backend integration for actual result checking will be phase 2.

### 7. Contact & Social Section

**Information Display**:
- Phone numbers: +91 7983023288, +91 9580716777
- Instagram: @geeksforgeeks.ait.kanpur
- Website: www.allenhouse.ac.in
- Location: Allenhouse Institute of Technology, Rooma, Kanpur

**Layout**:
- Icon-based contact cards
- Clickable social media links
- Location with map integration (optional)

### 8. Navigation Elements

**Back Button**:
- Positioned at top of page
- Arrow icon with "Back to Events" text
- Smooth navigation transition

**Sticky CTA**:
- "Register Now" button sticky on scroll (optional)
- Appears after hero section scrolls out of view

## Data Models

### Event Data Structure

```javascript
const codeFuseEvent = {
  id: 'codefuse-25',
  title: 'CodeFuse 25',
  subtitle: 'The Ultimate DSA Battle Arena',
  description: 'A 24hr Innovation Competition focused on Data Structures and Algorithms...',
  
  organizers: [
    {
      name: 'Allenhouse Institute of Technology',
      logo: '/assets/logos/ait-logo.png',
      location: 'Rooma, Kanpur'
    },
    {
      name: 'GeeksforGeeks Campus Body',
      logo: '/assets/logos/gfg-logo.png'
    }
  ],
  
  registration: {
    url: 'https://gfg.allenhouse.ac.in/',
    qrCode: '/assets/qr/codefuse-registration.png',
    isFree: true,
    deadline: '2025-11-25T23:59:59'
  },
  
  rounds: [
    {
      number: 1,
      name: 'Online MCQs Battle',
      date: '2025-11-26',
      time: '20:00',
      timeDisplay: '8:00 PM (Sharp)',
      format: 'Online',
      description: 'Multiple Choice Questions on Data Structures and Algorithms'
    },
    {
      number: 2,
      name: 'Offline On-Campus Battle',
      date: '2025-11-29',
      time: '11:00',
      timeDisplay: '11:00 AM (Sharp)',
      format: 'Offline',
      location: 'Allenhouse Institute of Technology, Rooma, Kanpur',
      description: 'Hands-on coding challenges and problem-solving'
    }
  ],
  
  prizes: [
    {
      id: 1,
      title: 'Exclusive GFG Goodies',
      description: 'For Every Finalist',
      icon: 'backpack',
      image: '/assets/prizes/gfg-goodies.png'
    },
    {
      id: 2,
      title: '₹10,000/- GFG Connect Vouchers',
      description: 'For Top Performers',
      icon: 'voucher',
      image: '/assets/prizes/connect-vouchers.png'
    },
    {
      id: 3,
      title: 'GFG Certificates',
      description: 'For All Participants',
      icon: 'certificate',
      image: '/assets/prizes/certificates.png'
    }
  ],
  
  contact: {
    phones: ['+91 7983023288', '+91 9580716777'],
    instagram: '@geeksforgeeks.ait.kanpur',
    website: 'www.allenhouse.ac.in',
    email: 'info@allenhouse.ac.in'
  },
  
  accreditations: [
    'AICTE Approved',
    'NAAC Accredited',
    'NBA Accredited'
  ]
};
```

### Round Check Request/Response

```javascript
// Request
{
  identifier: string  // Email, registration number, or participant ID
}

// Response (Success)
{
  success: true,
  participant: {
    name: string,
    registrationNumber: string,
    email: string
  },
  rounds: [
    {
      number: 1,
      qualified: boolean,
      score: number,
      rank: number
    }
  ]
}

// Response (Error)
{
  success: false,
  error: string,
  message: string
}
```

## Error Handling

### Navigation Errors
- If route is accessed directly, ensure all data loads properly
- Fallback to Events page if event data is unavailable
- Display error boundary for component failures

### Round Checker Errors
- **Invalid Input**: Display inline validation message
- **Network Error**: Show retry button with error message
- **Not Found**: Display helpful message with contact information
- **Server Error**: Display generic error with support contact

### Image Loading Errors
- Use lazy loading with placeholders
- Fallback images for missing assets
- Skeleton loaders during initial load

## Testing Strategy

### Unit Tests
- Component rendering tests
- State management tests
- Event data parsing tests
- Form validation tests

### Integration Tests
- Navigation flow from Events page to detail page
- Round checker form submission
- External link navigation
- Responsive layout tests

### Visual Regression Tests
- Hero section rendering
- Prize cards layout
- Mobile responsiveness
- Animation triggers

### Accessibility Tests
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- Focus management

### User Acceptance Tests
- Registration flow completion
- Round checker usability
- Information findability
- Cross-device compatibility

## Design Tokens

### Colors
- **Primary**: `#4285F4` (GFG Blue) - Used for Round 1, primary CTAs
- **Secondary**: `#0F9D58` (GFG Green) - Used for Round 2, success states
- **Accent**: `#F4B400` (GFG Yellow) - Used for highlights, badges
- **Error**: `#EA4335` (Red) - Used for error states
- **Background**: `#FFFFFF` (White) - Main background
- **Surface**: `#F8F9FA` (Light Gray) - Card backgrounds
- **Text Primary**: `#1A1A1A` (Black)
- **Text Secondary**: `#2D2D2D` (Gray)

### Typography
- **Hero Title**: Anton, 72px (desktop), 48px (mobile), Bold
- **Section Titles**: Space Grotesk, 48px (desktop), 32px (mobile), Bold
- **Body Text**: Inter, 18px (desktop), 16px (mobile), Regular
- **Labels**: Rajdhani, 14px, Bold, Uppercase, Letter-spacing: 2px
- **CTA Buttons**: Rajdhani, 18px, Bold

### Spacing
- **Section Padding**: 120px (desktop), 60px (mobile)
- **Card Padding**: 48px (desktop), 24px (mobile)
- **Element Spacing**: 24px (desktop), 16px (mobile)

### Animations
- **Page Load**: Fade-in + Scale (1s, ease-out)
- **Scroll Reveal**: Slide-up + Fade (0.8s, ease-out, stagger 0.2s)
- **Hover Effects**: Scale 1.05, Lift 8px (0.3s, ease-out)
- **Button Hover**: Scale 1.05, Glow effect (0.3s, ease-out)

## Responsive Breakpoints

- **Mobile**: < 640px (Single column, stacked layout)
- **Tablet**: 640px - 1024px (2-column grid where applicable)
- **Desktop**: > 1024px (Full 3-column grid, expanded layouts)

## Accessibility Considerations

- **ARIA Labels**: All interactive elements have descriptive labels
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Focus Indicators**: Clear focus states for all focusable elements
- **Alt Text**: Descriptive alt text for all images
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Screen Reader**: Semantic HTML and proper heading hierarchy

## Performance Optimizations

- **Lazy Loading**: Images and heavy components load on demand
- **Code Splitting**: Route-based code splitting for the detail page
- **Image Optimization**: WebP format with fallbacks, responsive images
- **Animation Performance**: GPU-accelerated transforms, will-change hints
- **Bundle Size**: Tree-shaking unused code, minimal dependencies

## Future Enhancements (Phase 2)

- Real-time countdown timer to event start
- Live participant count
- Backend integration for round checker
- Photo gallery from previous CodeFuse events
- Testimonials from past participants
- FAQ accordion section
- Share event on social media functionality
- Add to calendar functionality
- Email notification signup for updates
