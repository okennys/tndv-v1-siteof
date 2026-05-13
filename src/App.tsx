/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Segments } from "./components/Segments";
import { Services } from "./components/Services";
import { Presence } from "./components/Presence";
import { Methodology } from "./components/Methodology";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-accent-500 selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Segments />
        <Services />
        <Presence />
        <Methodology />
      </main>
      <Footer />
    </div>
  );
}
