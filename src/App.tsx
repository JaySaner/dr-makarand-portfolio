/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Recognition from './components/Recognition';
import FutureHorizons from './components/FutureHorizons';
import Governance from './components/Governance';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ scrollPaddingTop: '80px' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Portfolio />
        <Recognition />
        <FutureHorizons />
        <Governance />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
