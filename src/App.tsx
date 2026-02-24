import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Methodology from './components/Methodology';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ThemeSwitcher from './components/ThemeSwitcher';
import DemoModal from './components/DemoModal';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isDemoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Comparison />
          <Pricing onDemoClick={() => setDemoModalOpen(true)} />
          <Methodology />
          <Portfolio />
        </main>
        <Footer />
        <WhatsAppButton />
        <ThemeSwitcher />

        <AnimatePresence>
          {isDemoModalOpen && <DemoModal onClose={() => setDemoModalOpen(false)} />}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
