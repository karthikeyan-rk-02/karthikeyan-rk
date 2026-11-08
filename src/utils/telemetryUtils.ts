import { Project } from '../data/portfolioData';

/**
 * Filter projects by category and search keyword
 */
export function filterProjects(
  projects: Project[],
  selectedCategory: string,
  searchQuery: string
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;

    const matchesSearch =
      query === '' ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.bannerTitle.toLowerCase().includes(query) ||
      project.bannerSubtitle.toLowerCase().includes(query) ||
      project.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      project.code.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
}

/**
 * Format a Date object into 12-hour HUD clock format (HH:MM:SS AM/PM)
 */
export function formatHUDClock(date: Date): string {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
}

/**
 * Form validation helper
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function validateContactForm(data: ContactFormData): FormValidationErrors {
  const errors: FormValidationErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please provide a valid name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = 'Subject should be at least 3 characters.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  }

  return errors;
}

/**
 * CLI command parser for HUD Command Deck
 */
export interface CommandResult {
  action?: 'navigate' | 'help' | 'clear' | 'status' | 'theme' | 'contact' | 'download' | 'easteregg';
  targetSection?: string;
  feedback: string;
  isError?: boolean;
}

export function processCLICommand(input: string): CommandResult {
  const sanitized = input.trim().toLowerCase();

  if (!sanitized) {
    return {
      feedback: 'ERROR: Empty command line. Enter "help" for syntax.',
      isError: true
    };
  }

  switch (sanitized) {
    case 'help':
    case '?':
      return {
        action: 'help',
        feedback: 'COMMAND MATRIX: home | projects | skills | contact | status | resume | clear | whoami'
      };
    case 'home':
    case 'hero':
      return {
        action: 'navigate',
        targetSection: '#hero-section',
        feedback: 'NAVIGATING -> // 01. ABOUT ME (COMMAND DECK)'
      };
    case 'projects':
    case 'work':
      return {
        action: 'navigate',
        targetSection: '#projects-section',
        feedback: 'NAVIGATING -> // 02. MY PROJECTS (TELEMETRY GRID)'
      };
    case 'skills':
    case 'tech':
    case 'stack':
      return {
        action: 'navigate',
        targetSection: '#skills-section',
        feedback: 'NAVIGATING -> // 03. SKILLS & TELEMETRY MATRIX'
      };
    case 'contact':
    case 'dispatch':
    case 'mail':
      return {
        action: 'navigate',
        targetSection: '#contact-section',
        feedback: 'NAVIGATING -> // 04. DISPATCH CONSOLE'
      };
    case 'status':
    case 'telemetry':
      return {
        action: 'status',
        feedback: 'SYS STATUS: 200 OK | RADAR: ACTIVE | CLOCK: SYNCHRONIZED | LOAD: NOMINAL'
      };
    case 'whoami':
      return {
        action: 'status',
        feedback: 'KARTHIKEYAN // Full-Stack Developer & Software Architect // India (Remote)'
      };
    case 'resume':
    case 'download':
      return {
        action: 'download',
        feedback: 'RESUME_DISPATCH: Telemetry dossier downloaded.'
      };
    case 'clear':
    case 'cls':
      return {
        action: 'clear',
        feedback: 'TERMINAL BUFFER RESET.'
      };
    case 'matrix':
      return {
        action: 'easteregg',
        feedback: 'WAKE UP, NEO... THE MATRIX HAS YOU. Follow the cyan wireframe.'
      };
    default:
      return {
        feedback: `EXEC: Command '${input.toUpperCase()}' acknowledged. Telemetry status: NOMINAL.`
      };
  }
}
