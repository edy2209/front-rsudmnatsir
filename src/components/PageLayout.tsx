import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <>
      <Navigation />
      <div className={`pt-20 min-h-screen overflow-x-hidden ${className}`}>
        {children}
      </div>
      <Footer />
    </>
  );
}
