export interface Project {
  id: string;
  title: string;
  category: 'ecommerce' | 'sistemas' | 'landing';
  categoryName: string;
  description: string;
  impact: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  badge: string;
  image: string | null;
  mockupType: string;
}

export interface CompanyConfig {
  name: string;
  founder: string;
  photoUrl: string;
  tagline: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  githubUrl: string;
  location: string;
  availability: string;
}

export type ProjectCategory = 'all' | 'ecommerce' | 'sistemas' | 'landing';
