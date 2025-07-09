// File untuk mengatur semua routing aplikasi RSUD M. Natsir

export const routes = {
  // Main routes
  home: '/',
  
  // Patient management
  patients: '/patients',
  patientDetail: (id: string) => `/patients/${id}`,
  patientAdd: '/patients/add',
  
  // Doctor management
  doctors: '/doctors',
  doctorDetail: (id: string) => `/doctors/${id}`,
  doctorSchedule: '/doctors/schedule',
  
  // Medical records
  medicalRecords: '/medical-records',
  medicalRecordDetail: (id: string) => `/medical-records/${id}`,
  
  // Appointments
  appointments: '/appointments',
  appointmentAdd: '/appointments/add',
  
  // Pharmacy
  pharmacy: '/pharmacy',
  medicines: '/pharmacy/medicines',
  prescriptions: '/pharmacy/prescriptions',
  
  // Laboratory
  laboratory: '/laboratory',
  labTests: '/laboratory/tests',
  labResults: '/laboratory/results',
  
  // Reports
  reports: '/reports',
  reportsDaily: '/reports/daily',
  reportsMonthly: '/reports/monthly',
  
  // Settings
  settings: '/settings',
  userManagement: '/settings/users',
  systemSettings: '/settings/system',
  
  // Authentication
  login: '/auth/login',
  register: '/auth/register',
  forgotPassword: '/auth/forgot-password',
  
  // About & Info
  about: '/about',
  contact: '/contact',
  services: '/services',
} as const;

export type RouteKey = keyof typeof routes;

// Helper function untuk navigasi
export const getRoute = (key: RouteKey, params?: string): string => {
  const route = routes[key];
  if (typeof route === 'function' && params) {
    return route(params);
  }
  return route as string;
};

// Menu items untuk navigation
export const mainMenuItems = [
  { label: 'Beranda', route: routes.home, icon: 'home' },
  { label: 'Pasien', route: routes.patients, icon: 'patients' },
  { label: 'Dokter', route: routes.doctors, icon: 'doctors' },
  { label: 'Rekam Medis', route: routes.medicalRecords, icon: 'medical' },
  { label: 'Janji Temu', route: routes.appointments, icon: 'calendar' },
  { label: 'Farmasi', route: routes.pharmacy, icon: 'pharmacy' },
  { label: 'Laboratorium', route: routes.laboratory, icon: 'lab' },
  { label: 'Laporan', route: routes.reports, icon: 'reports' },
];

export const settingsMenuItems = [
  { label: 'Pengaturan', route: routes.settings, icon: 'settings' },
  { label: 'Manajemen User', route: routes.userManagement, icon: 'users' },
  { label: 'Sistem', route: routes.systemSettings, icon: 'system' },
];
