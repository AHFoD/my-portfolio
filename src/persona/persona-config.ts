import profileImageSrc from "../assets/my-profile-picture.jpg";
import hobbyAvatarSrc from "../assets/hobby-avatar.svg";
import type { Persona } from "./persona";

type PersonaCta = {
  readonly label: string;
  readonly href: string;
};

type PersonaHeroCopy = {
  readonly headline: string;
  readonly highlight: string;
  readonly description: string;
  readonly primaryCta: PersonaCta;
  readonly secondaryCta: PersonaCta;
};

type PersonaAboutCopy = {
  readonly role: string;
  readonly bio: string;
  readonly experience: readonly string[];
};

type PersonaAvatar = {
  readonly src: string;
  readonly alt: string;
};

type PersonaStatIcon = "time" | "check" | "gear" | "trend" | "record" | "headphones" | "sparkles";

type PersonaStat = {
  readonly value: number;
  readonly suffix: string;
  readonly label: string;
  readonly icon: PersonaStatIcon;
};

type PersonaServiceIcon = "stack" | "layout" | "server" | "database" | "vinyl" | "mixer" | "playlist" | "motion" | "gear" | "trend";

type PersonaService = {
  readonly title: string;
  readonly description: string;
  readonly icon: PersonaServiceIcon;
};

type PersonaServicesCopy = {
  readonly title: string;
  readonly items: readonly PersonaService[];
  readonly ctaText: string;
  readonly ctaButtonLabel: string;
  readonly ctaHref: string;
};

type PersonaPortfolioFilter = {
  readonly label: string;
  readonly value: string;
};

type PersonaProjectCategory = "client" | "personal" | "opensource";

type PersonaProjectMetric = {
  readonly value: string;
  readonly label: string;
};

type PersonaProject = {
  readonly title: string;
  readonly description: string;
  readonly fullDescription: string;
  readonly image: string;
  readonly link: string;
  readonly tags: readonly string[];
  readonly category: PersonaProjectCategory;
  readonly year?: string;
  readonly sector?: string;
  readonly metrics?: readonly PersonaProjectMetric[];
  readonly challenges?: string;
  readonly outcome?: string;
  readonly isInternal?: boolean;
  readonly featured?: boolean;
};

type PersonaPortfolioCopy = {
  readonly title: string;
  readonly filters: readonly PersonaPortfolioFilter[];
  readonly projects: readonly PersonaProject[];
};

type PersonaProcessStep = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
};

type PersonaProcessCopy = {
  readonly title: string;
  readonly steps: readonly PersonaProcessStep[];
};

type PersonaContactCopy = {
  readonly title: string;
  readonly description: string;
  readonly successTitle: string;
  readonly successDescription: string;
  readonly successButtonLabel: string;
  readonly directLabel: string;
};

type PersonaFooterCopy = {
  readonly brand: string;
  readonly description: string;
};

type PersonaMusicTrack = {
  readonly number: string;
  readonly timestamp: string;
  readonly title: string;
  readonly label: string;
};

type PersonaMusicSet = {
  readonly title: string;
  readonly event: string;
  readonly youtubeId: string;
  readonly startAt?: number;
  readonly tracklist?: readonly PersonaMusicTrack[];
};

type PersonaMusicCopy = {
  readonly title: string;
  readonly description: string;
  readonly sets: readonly PersonaMusicSet[];
};

type PersonaDefinition = {
  readonly label: string;
  readonly hero: PersonaHeroCopy;
  readonly about: PersonaAboutCopy;
  readonly skills: readonly string[];
  readonly avatar: PersonaAvatar;
  readonly stats: readonly PersonaStat[];
  readonly services: PersonaServicesCopy;
  readonly portfolio: PersonaPortfolioCopy;
  readonly process: PersonaProcessCopy;
  readonly contact: PersonaContactCopy;
  readonly footer: PersonaFooterCopy;
  readonly music?: PersonaMusicCopy;
};

const personaConfig = {
  professional: {
    label: "Professional",
    hero: {
      headline: "Full Stack Developer",
      highlight: "with 5 Years of Experience",
      description: "Turning ideas into scalable, user-friendly web applications using React, Vite, and Supabase.",
      primaryCta: { label: "View My Work", href: "#portfolio" },
      secondaryCta: { label: "Contact Me", href: "#contact" }
    },
    about: {
      role: "Full Stack Developer",
      bio: "I'm a passionate full stack developer with 5 years of experience building modern web applications. I specialize in creating responsive, user-friendly interfaces with React and building robust backend systems. My goal is to deliver high-quality solutions that meet client needs and exceed expectations.",
      experience: [
        "5+ years of professional web development experience",
        "Worked with startups and established companies",
        "Delivered 20+ successful projects from concept to deployment"
      ]
    },
    skills: ["React", "TypeScript", "JavaScript", "Node.js", "Tailwind CSS", "Framer Motion", "Vite", "Supabase"],
    avatar: { src: profileImageSrc, alt: "Muhd Ali Zulfaqar - Full Stack Developer" },
    stats: [
      { value: 5, suffix: "+", label: "Years Experience", icon: "time" },
      { value: 20, suffix: "+", label: "Projects Delivered", icon: "check" },
      { value: 5, suffix: "+", label: "Clients Supported", icon: "gear" },
      { value: 100, suffix: "%", label: "Commitment", icon: "trend" }
    ],
    services: {
      title: "What I Do",
      items: [
        { title: "Full Stack Development", description: "End-to-end web application development from concept to deployment.", icon: "stack" },
        { title: "Frontend Development", description: "Modern, responsive user interfaces with React and Tailwind CSS.", icon: "layout" },
        { title: "Backend & APIs", description: "Robust server-side applications and RESTful API development.", icon: "server" },
        { title: "Database Solutions", description: "Efficient database design and optimization for scalable applications.", icon: "database" }
      ],
      ctaText: "Interested in working together? Let's discuss your project.",
      ctaButtonLabel: "Get in Touch",
      ctaHref: "#contact"
    },
    portfolio: {
      title: "My Projects",
      filters: [
        { label: "All Projects", value: "all" },
        { label: "Client Work", value: "client" },
        { label: "Personal", value: "personal" },
        { label: "Open Source", value: "opensource" }
      ],
      projects: [
        {
          title: "Abu Rusyd Coffee Shop",
          description: "A modern, responsive landing page for a local coffee shop, featuring an elegant design and seamless user experience.",
          fullDescription:
            "Abu Rusyd Coffee Shop is a comprehensive web solution designed to showcase the unique atmosphere and offerings of a local coffee shop. The project features a fully responsive design that works seamlessly across all devices, from mobile phones to desktop computers.\n\nKey features include:\n• Beautiful, modern UI with smooth animations\n• Integration with Strapi CMS for easy content management\n• Menu showcase with detailed product information\n• Location and contact information\n• Optimized performance and SEO\n• Mobile-first responsive design\n\nThe website was built using React and Vite for optimal performance, styled with Tailwind CSS for a modern look, and powered by Strapi CMS to allow the client to easily update content without technical knowledge.",
          image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop",
          link: "https://aburusyd.my",
          tags: ["React", "Vite", "Strapi CMS", "Tailwind CSS"],
          category: "client",
          year: "2024",
          sector: "CLIENT",
          metrics: [
            { value: "90+", label: "Lighthouse" },
            { value: "Mobile-first", label: "Responsive" }
          ],
          challenges: "Creating a balance between aesthetic appeal and functionality while ensuring the site loads quickly and performs well on all devices.",
          outcome: "Successfully delivered a professional website that increased the coffee shop's online presence and customer engagement."
        },
        {
          title: "QR Code Manager System",
          description: "Web-based QR code management system for creating, tracking, and analyzing QR codes with real-time analytics.",
          fullDescription:
            "The QR Code Manager System is a powerful web application designed to streamline QR code creation, management, and analytics. This system provides businesses and individuals with a comprehensive solution for generating and tracking QR codes.\n\nKey features include:\n• Dynamic QR code generation with customization options\n• Real-time analytics and tracking\n• User-friendly dashboard for managing multiple QR codes\n• Scan statistics and insights\n• Responsive design for mobile and desktop use\n• Export and download functionality\n\nBuilt with modern web technologies including React and Vite for a fast, responsive user experience, and styled with Tailwind CSS for a clean, professional interface. The system is designed to be intuitive and easy to use while providing powerful features for QR code management.",
          image: "https://images.unsplash.com/photo-1617802690658-1173a812650d?w=800&h=600&fit=crop",
          link: "https://dist-lime-ten.vercel.app/",
          tags: ["React", "Vite", "Tailwind CSS", "QR Management"],
          category: "personal",
          year: "2023",
          sector: "PRODUCT",
          metrics: [
            { value: "Real-time", label: "Analytics" },
            { value: "CRUD+", label: "Management" }
          ],
          challenges: "Implementing real-time tracking and analytics while maintaining system performance and creating an intuitive user interface for complex functionality.",
          outcome: "Created a fully functional QR code management system that simplifies the process of creating and tracking QR codes with detailed analytics."
        }
      ]
    },
    process: {
      title: "My Process",
      steps: [
        { number: "01", title: "Discovery", description: "I start by understanding your requirements, goals, and vision for the project." },
        { number: "02", title: "Planning", description: "Creating a detailed plan including architecture, technologies, and project timeline." },
        { number: "03", title: "Design", description: "Designing user interfaces and experiences that are both beautiful and functional." },
        { number: "04", title: "Development", description: "Building the application with clean, maintainable code following best practices." },
        { number: "05", title: "Testing", description: "Thoroughly testing the application to ensure it works flawlessly across all devices." },
        { number: "06", title: "Deployment", description: "Deploying the application to production and ensuring everything runs smoothly." }
      ]
    },
    contact: {
      title: "Let's Work Together",
      description: "Have a project in mind? Let's discuss how I can help you bring your ideas to life.",
      successTitle: "Message Sent Successfully!",
      successDescription: "Thank you for reaching out. I'll get back to you within 24 hours.",
      successButtonLabel: "Send Another Message",
      directLabel: "Or reach out directly:"
    },
    footer: {
      brand: "Portfolio",
      description: "A showcase of my work and skills as a full stack developer."
    },
    music: undefined
  },
  hobby: {
    label: "Hobby",
    hero: {
      headline: "Car enthusiast,",
      highlight: "coffee hunter & trance head",
      description: "Off-hours I'm exploring new car builds, hunting down the best local coffee roasters, and getting lost in uplifting trance sets.",
      primaryCta: { label: "See the Fun Stuff", href: "#portfolio" },
      secondaryCta: { label: "Drop a Hello", href: "#contact" }
    },
    about: {
      role: "Cars + Coffee + Trance",
      bio: "Outside of coding, I'm deep into automotive culture—appreciating the engineering of a good build, pairing weekend drives with trips to new coffee shops, and always with a 138bpm trance set playing in the background.",
      experience: ["Attends local car meets", "Hunts for the perfect espresso shot", "Curates uplifting trance playlists"]
    },
    skills: ["Automotive Appreciation", "Coffee Tasting", "Trance Selection", "Weekend Drives", "Route Planning", "UI Playfulness"],
    avatar: { src: hobbyAvatarSrc, alt: "Muhd Ali Zulfaqar - Car and coffee enthusiast avatar" },
    stats: [
      { value: 10, suffix: "+", label: "Years on the road", icon: "trend" },
      { value: 150, suffix: "+", label: "Coffee shops visited", icon: "check" },
      { value: 30, suffix: "+", label: "Routes mapped", icon: "sparkles" },
      { value: 100, suffix: "%", label: "Vibe level", icon: "time" }
    ],
    services: {
      title: "Stuff I Geek Out On",
      items: [
        { title: "Car Meets", description: "Checking out builds, talking shop, and appreciating the engineering behind different cars.", icon: "gear" },
        { title: "Coffee Hunting", description: "Exploring the city to find the best local roasters and perfectly dialed espresso shots.", icon: "layout" },
        { title: "Weekend Drives", description: "Finding the best driving routes for a clear mind and a good time.", icon: "trend" },
        { title: "Trance Selection", description: "Curating uplifting trance sets, mostly 138bpm, and sharing the best transitions.", icon: "vinyl" }
      ],
      ctaText: "Got a route rec, a coffee spot, or a trance set? I'm in.",
      ctaButtonLabel: "Drop a Note",
      ctaHref: "#contact"
    },
    portfolio: {
      title: "Side Quests",
      filters: [
        { label: "Everything", value: "all" },
        { label: "Collabs", value: "client" },
        { label: "Just for fun", value: "personal" },
        { label: "Open bits", value: "opensource" }
      ],
      projects: [
        {
          title: "Coffee Tracker App",
          description: "A little web app for tracking the best coffee shops visited and rating the espresso pulls.",
          fullDescription:
            "Coffee Tracker App is a tiny love letter to cafe hopping. It's an interactive web app with a map interface, a friendly set of controls, and just enough utility to remember the good spots.\n\nHighlights:\n• Interactive map of visited cafes\n• Rating system for espresso shots\n• Basic controls (add, edit, delete spots)\n• Photo gallery of cafe aesthetics\n• Responsive layout with soft gradients\n• Framer Motion for the buttery bits\n\nIt's equal parts UI practice, map API fun, and me chasing that \"this feels like a good morning\" vibe.",
          image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&h=600&fit=crop",
          link: "#coffee-tracker",
          tags: ["React", "Framer Motion", "Maps API", "Tailwind CSS"],
          category: "personal",
          challenges: "Keeping the map smooth while staying in sync with the list, and making the whole thing feel like a clean journal.",
          outcome: "A playful, responsive app that doubles as a UI sandbox—and a fun way to share a few cafe recommendations.",
          isInternal: true,
          featured: true
        },
        {
          title: "Drive Route Notes",
          description: "A pocket-sized web tool for tracking good driving roads, scenic stops, and quick notes.",
          fullDescription:
            "Drive Route Notes is the tiny helper I wanted when I'm mapping out a weekend drive. It's all the small stuff in one place: road conditions, traffic notes, scenic stops, and quick tags.\n\nWhat it does:\n• Fast add/edit of route notes\n• Simple tags to group by vibe (e.g. twisty, scenic, chill)\n• Mobile-friendly layout for pit-stop tweaks\n• Export-friendly structure\n\nIt's intentionally minimal. No fluff—just enough to keep the drive focused.",
          image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
          link: "#contact",
          tags: ["React", "Vite", "Tailwind CSS"],
          category: "personal"
        }
      ]
    },
    process: {
      title: "How I Plan a Drive (and a UI)",
      steps: [
        { number: "01", title: "Map the Route", description: "Pull up the map and look for the twisty roads or the new cafes." },
        { number: "02", title: "Check the Details", description: "Look into road conditions, opening hours, and parking spots." },
        { number: "03", title: "Hit the Road", description: "Get behind the wheel, enjoy the mechanics, and take in the scenery." },
        { number: "04", title: "Pit Stop", description: "Grab a coffee, take some notes on the route, and appreciate the build." },
        { number: "05", title: "Share the Spots", description: "Send the route or cafe to friends for the next meetup." },
        { number: "06", title: "Tweak & Repeat", description: "Steal the best feedback, then plan the next drive." }
      ]
    },
    music: {
      title: "Current Rotation",
      description: "A personally curated list of uplifting trance sets I always come back to. When I'm not focused on UI details or finding the next twisty road, I'm usually locked into one of these. (Full disclosure: I'm a massive Ahmed Romel fan, so this list is admittedly a bit biased).",
      sets: [
        {
          title: "Ahmed Romel [FULL SET]",
          event: "Luminosity Beach Festival 2019",
          youtubeId: "mPaSbpTON_0",
          startAt: 350,
          tracklist: [
            { number: "01", timestamp: "--:--", title: "Ahmed Romel & Simon O'Shine - The Love Potion", label: "FSOE" },
            { number: "02", timestamp: "4:00", title: "Aly & Fila - Sands Of Time (FSOE 600 Anthem)", label: "FSOE" },
            { number: "03", timestamp: "7:30", title: "Ahmed Romel ft. Jennifer Rene - Silver Lining", label: "FSOE" },
            { number: "04", timestamp: "12:20", title: "Ahmed Romel - Vanya", label: "FSOE" },
            { number: "05", timestamp: "16:25", title: "A & Z vs. Claudiu Adam & Clara Yates - Thousand Pieces", label: "FSOE" },
            { number: "06", timestamp: "21:00", title: "Ahmed Romel - Reverie", label: "FSOE" },
            { number: "07", timestamp: "25:00", title: "Driftmoon - 11 Days", label: "ITWT (BLACK HOLE)" },
            { number: "08", timestamp: "30:45", title: "Ahmed Romel - Vanaheim", label: "BLUE SOHO" },
            { number: "09", timestamp: "34:40", title: "Niyaz - Dilruba (Junkie XL Remix - Ahmed Romel Rework)", label: "SIX DEGREES" },
            { number: "10", timestamp: "38:50", title: "Sergey Nevone - Unhappy Marionette(Simon O'Shine Remix)", label: "AUDIORESEARCH MUSIC (DEFCON)" },
            { number: "11", timestamp: "44:30", title: "Aly & Fila - It's All About The Melody", label: "FSOE" },
            { number: "12", timestamp: "50:35", title: "Ahmed Romel - Rüya", label: "FSOE" },
            { number: "13", timestamp: "55:30", title: "Heatbeat - Mechanizer (WAIO Remix)", label: "AERYS (ARMADA)" },
            { number: "14", timestamp: "58:20", title: "Aly & Fila with Philippe El Sisi & Omar Sherif - A World Beyond (FSOE 550 Anthem)", label: "FSOE" },
            { number: "15", timestamp: "1:04:40", title: "Ahmed Romel & Driftmoon - Ars Vitae", label: "FSOE" },
            { number: "16", timestamp: "--:--", title: "Ahmed Romel - Mandalore", label: "BLUE SOHO" }
          ]
        },
        { title: "Ahmed Romel [FULL SET]", event: "Luminosity Beach Festival 2018", youtubeId: "IPuB24f3uhE", startAt: 1532 },
        { title: "Simon O'Shine LIVE", event: "We Love Trance CE 045", youtubeId: "JrEhWMy07yA" },
        { title: "Sean Tyas Live", event: "Luminosity Beach Festival 2019", youtubeId: "dfPPDUyirsA" },
        { title: "Factor B - In Loving Memory", event: "Luminosity Beach Festival 2022", youtubeId: "5_nWgNgHn-s" },
        { title: "John O'Callaghan Live", event: "Luminosity Beach Festival 2018", youtubeId: "DIMxTAw-CkA" }
      ]
    },
    contact: {
      title: "Wanna Nerd Out?",
      description: "Send a driving route, a coffee shop find, or a UI idea you can't stop thinking about. I'm always up for a good rabbit hole.",
      successTitle: "Got it!",
      successDescription: "Your note landed. I'll get back to you soon.",
      successButtonLabel: "Send Another Note",
      directLabel: "Or reach out directly:"
    },
    footer: {
      brand: "Cars & Coffee Lab",
      description: "Weekend drives, espresso pulls, and after-hours UI experiments."
    }
  }
} satisfies Record<Persona, PersonaDefinition>;

export default personaConfig;
