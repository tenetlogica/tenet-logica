import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellService } from '../services/spell.service';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  template: `
    <div [class]="spellService.isArcane() ? 'bg-slate-900 text-purple-100' : 'bg-white text-slate-900'" 
         class="min-h-screen transition-colors duration-1000 ease-in-out relative overflow-hidden">
      
      <!-- Arcane Background Effects -->
      @if (spellService.isArcane()) {
        <div class="absolute inset-0 pointer-events-none z-0">
          <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-900"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute top-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
      }

      <main class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <!-- Header -->
        <header class="text-center mb-20">
          <h1 [class]="spellService.isArcane() ? 'font-serif text-5xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'font-sans text-4xl font-extrabold text-slate-900 tracking-tight'"
              class="mb-4 transition-colors duration-1000">
            {{ spellService.isArcane() ? 'Rituals & Incantations' : 'Our Services' }}
          </h1>
          <div [class]="spellService.isArcane() ? 'h-1 w-24 bg-purple-500 mx-auto shadow-[0_0_10px_rgba(168,85,247,0.8)]' : 'h-1 w-16 bg-blue-600 mx-auto'" class="mb-3 rounded transition-colors duration-1000"></div>
          <p [class]="spellService.isArcane() ? 'text-purple-200/80 font-mono italic max-w-2xl mx-auto' : 'text-slate-600 max-w-2xl mx-auto'"
             class="text-lg transition-colors duration-700">
            {{ spellService.isArcane() 
              ? "From the weaving of illusions to the forging of golems, our mastery over the digital ether is absolute." 
              : "Comprehensive software solutions tailored to drive your business forward with precision and innovation." }}
          </p>
        </header>

        <!-- Services List -->
        <div class="space-y-12"> <!-- Increased spacing for detailed sections -->

          <!-- Service 1: Web Dev -->
          <section [class]="spellService.isArcane() ? 'bg-slate-800/40 border-purple-500/30 hover:border-purple-400/60' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg'"
                   class="rounded-2xl border p-8 transition-all duration-500 group relative overflow-hidden">
            <div class="flex flex-col md:flex-row gap-8 items-start">
              <div [class]="spellService.isArcane() ? 'bg-purple-900/50 text-purple-300' : 'bg-blue-100 text-blue-600'"
                   class="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl transition-colors duration-700">
                <span class="material-icons">{{ spellService.isArcane() ? 'auto_fix_high' : 'code' }}</span>
              </div>
              <div>
                <h2 [class]="spellService.isArcane() ? 'text-purple-100 font-serif text-2xl' : 'text-slate-900 font-sans text-2xl font-bold'"
                    class="mb-4 transition-colors duration-700">
                  {{ spellService.isArcane() ? 'Weaving the Digital Veil' : 'Custom Web Development' }}
                </h2>
                <p [class]="spellService.isArcane() ? 'text-purple-200/80 font-mono mb-4' : 'text-slate-600 mb-4'" class="leading-relaxed">
                  {{ spellService.isArcane() 
                    ? "Illusion magic of the highest order. We bind pixels to our will, creating interfaces that captivate the mortal eye. Our weavers craft responsive glamours that adapt to any scrying glass, be it a palm-stone or a wall-slate." 
                    : "Responsive, accessible, and performant front-end solutions using Angular, React, and modern CSS. We build user interfaces that are intuitive, engaging, and optimized for all devices." }}
                </p>
                <ul [class]="spellService.isArcane() ? 'text-purple-300/60 font-mono text-sm space-y-1' : 'text-slate-500 text-sm space-y-1'" class="list-disc list-inside">
                  <li>{{ spellService.isArcane() ? 'Responsive Glamours (Mobile-First Design)' : 'Responsive & Mobile-First Design' }}</li>
                  <li>{{ spellService.isArcane() ? 'Speed Enchants (Performance Optimization)' : 'Performance Optimization & SEO' }}</li>
                  <li>{{ spellService.isArcane() ? 'Universal Access (Accessibility Compliance)' : 'WCAG Accessibility Compliance' }}</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Service 2: Backend -->
          <section [class]="spellService.isArcane() ? 'bg-slate-800/40 border-purple-500/30 hover:border-purple-400/60' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg'"
                   class="rounded-2xl border p-8 transition-all duration-500 group relative overflow-hidden">
            <div class="flex flex-col md:flex-row gap-8 items-start">
              <div [class]="spellService.isArcane() ? 'bg-indigo-900/50 text-indigo-300' : 'bg-indigo-100 text-indigo-600'"
                   class="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl transition-colors duration-700">
                <span class="material-icons">{{ spellService.isArcane() ? 'psychology' : 'storage' }}</span>
              </div>
              <div>
                <h2 [class]="spellService.isArcane() ? 'text-purple-100 font-serif text-2xl' : 'text-slate-900 font-sans text-2xl font-bold'"
                    class="mb-4 transition-colors duration-700">
                  {{ spellService.isArcane() ? 'Channelling the Mana Core' : 'Backend Engineering' }}
                </h2>
                <p [class]="spellService.isArcane() ? 'text-purple-200/80 font-mono mb-4' : 'text-slate-600 mb-4'" class="leading-relaxed">
                  {{ spellService.isArcane() 
                    ? "Deep earth magic. We construct the unseen pillars that hold the world together, channeling raw data-mana through ley lines of logic. Our constructs are robust, capable of withstanding the heaviest psychic storms." 
                    : "Scalable microservices, RESTful APIs, and robust database architecture. We build the server-side logic that powers your applications, ensuring security, reliability, and high availability." }}
                </p>
                <ul [class]="spellService.isArcane() ? 'text-purple-300/60 font-mono text-sm space-y-1' : 'text-slate-500 text-sm space-y-1'" class="list-disc list-inside">
                  <li>{{ spellService.isArcane() ? 'Ley Line Architecture (API Design)' : 'RESTful & GraphQL API Design' }}</li>
                  <li>{{ spellService.isArcane() ? 'Crystal Storage (Database Management)' : 'Database Design (SQL & NoSQL)' }}</li>
                  <li>{{ spellService.isArcane() ? 'Scalable Constructs (Microservices)' : 'Microservices Architecture' }}</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Service 3: AI -->
          <section [class]="spellService.isArcane() ? 'bg-slate-800/40 border-purple-500/30 hover:border-purple-400/60' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg'"
                   class="rounded-2xl border p-8 transition-all duration-500 group relative overflow-hidden">
            <div class="flex flex-col md:flex-row gap-8 items-start">
              <div [class]="spellService.isArcane() ? 'bg-pink-900/50 text-pink-300' : 'bg-teal-100 text-teal-600'"
                   class="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl transition-colors duration-700">
                <span class="material-icons">{{ spellService.isArcane() ? 'smart_toy' : 'rocket_launch' }}</span>
              </div>
              <div>
                <h2 [class]="spellService.isArcane() ? 'text-purple-100 font-serif text-2xl' : 'text-slate-900 font-sans text-2xl font-bold'"
                    class="mb-4 transition-colors duration-700">
                  {{ spellService.isArcane() ? 'The Golem Forge' : 'Agentic AI / Automation' }}
                </h2>
                <p [class]="spellService.isArcane() ? 'text-purple-200/80 font-mono mb-4' : 'text-slate-600 mb-4'" class="leading-relaxed">
                  {{ spellService.isArcane() 
                    ? "We breathe life into clay and silicon. Our golems think, act, and serve, tirelessly executing the complex rituals of your domain. They learn, they adapt, and they never sleep." 
                    : "Leveraging Large Language Models (LLMs) and autonomous agents to automate complex workflows. We build AI solutions that enhance decision-making and operational efficiency." }}
                </p>
                <ul [class]="spellService.isArcane() ? 'text-purple-300/60 font-mono text-sm space-y-1' : 'text-slate-500 text-sm space-y-1'" class="list-disc list-inside">
                  <li>{{ spellService.isArcane() ? 'Awakened Familiars (Custom LLM Agents)' : 'Custom LLM Integration & Agents' }}</li>
                  <li>{{ spellService.isArcane() ? 'Ritual Automation (Workflow Optimization)' : 'Intelligent Process Automation' }}</li>
                  <li>{{ spellService.isArcane() ? 'Prophetic Engines (Predictive Analytics)' : 'Data Analysis & Insights' }}</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Service 4: Cloud -->
          <section [class]="spellService.isArcane() ? 'bg-slate-800/40 border-purple-500/30 hover:border-purple-400/60' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg'"
                   class="rounded-2xl border p-8 transition-all duration-500 group relative overflow-hidden">
            <div class="flex flex-col md:flex-row gap-8 items-start">
              <div [class]="spellService.isArcane() ? 'bg-sky-900/50 text-sky-300' : 'bg-sky-100 text-sky-600'"
                   class="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl transition-colors duration-700">
                <span class="material-icons">{{ spellService.isArcane() ? 'cloud' : 'cloud_queue' }}</span>
              </div>
              <div>
                <h2 [class]="spellService.isArcane() ? 'text-purple-100 font-serif text-2xl' : 'text-slate-900 font-sans text-2xl font-bold'"
                    class="mb-4 transition-colors duration-700">
                  {{ spellService.isArcane() ? 'Celestial Vaults' : 'Cloud Infrastructure' }}
                </h2>
                <p [class]="spellService.isArcane() ? 'text-purple-200/80 font-mono mb-4' : 'text-slate-600 mb-4'" class="leading-relaxed">
                  {{ spellService.isArcane() 
                    ? "Castles in the sky. We secure your treasures in the aether, protected by wards of encryption and redundancy against the chaos of the void. Your dominion shall extend across the heavens." 
                    : "Secure, scalable cloud solutions on AWS, Azure, and Google Cloud Platform. We manage your infrastructure, ensuring high availability, disaster recovery, and cost optimization." }}
                </p>
                <ul [class]="spellService.isArcane() ? 'text-purple-300/60 font-mono text-sm space-y-1' : 'text-slate-500 text-sm space-y-1'" class="list-disc list-inside">
                  <li>{{ spellService.isArcane() ? 'Aetheric Hosting (Cloud Migration)' : 'Cloud Migration & Strategy' }}</li>
                  <li>{{ spellService.isArcane() ? 'Continuous Summoning (CI/CD Pipelines)' : 'DevOps & CI/CD Implementation' }}</li>
                  <li>{{ spellService.isArcane() ? 'Wards of Protection (Cybersecurity)' : 'Security & Compliance' }}</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Service 5: Bug Fixing -->
          <section [class]="spellService.isArcane() ? 'bg-slate-800/40 border-purple-500/30 hover:border-purple-400/60' : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg'"
                   class="rounded-2xl border p-8 transition-all duration-500 group relative overflow-hidden">
            <div class="flex flex-col md:flex-row gap-8 items-start">
              <div [class]="spellService.isArcane() ? 'bg-red-900/50 text-red-300' : 'bg-orange-100 text-orange-600'"
                   class="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl transition-colors duration-700">
                <span class="material-icons">{{ spellService.isArcane() ? 'healing' : 'bug_report' }}</span>
              </div>
              <div>
                <h2 [class]="spellService.isArcane() ? 'text-purple-100 font-serif text-2xl' : 'text-slate-900 font-sans text-2xl font-bold'"
                    class="mb-4 transition-colors duration-700">
                  {{ spellService.isArcane() ? 'Dispelling of Hexes' : 'Bug Fixing & Support' }}
                </h2>
                <p [class]="spellService.isArcane() ? 'text-purple-200/80 font-mono mb-4' : 'text-slate-600 mb-4'" class="leading-relaxed">
                  {{ spellService.isArcane() 
                    ? "Exorcism of digital daemons. We banish the glitches that haunt your systems and purify the codebase of rot and decay. We stand vigil against the entropy that seeks to unravel your creations." 
                    : "Reliable maintenance and rapid bug resolution. We refactor legacy code, optimize performance, and provide ongoing support to keep your business running smoothly." }}
                </p>
                <ul [class]="spellService.isArcane() ? 'text-purple-300/60 font-mono text-sm space-y-1' : 'text-slate-500 text-sm space-y-1'" class="list-disc list-inside">
                  <li>{{ spellService.isArcane() ? 'Curse Breaking (Legacy Refactoring)' : 'Legacy Code Refactoring' }}</li>
                  <li>{{ spellService.isArcane() ? 'Speed Restoration (Performance Tuning)' : 'Performance Tuning' }}</li>
                  <li>{{ spellService.isArcane() ? 'Eternal Vigil (24/7 Monitoring)' : 'Maintenance & Support' }}</li>
                </ul>
              </div>
            </div>
          </section>

        </div>

      </main>
    </div>
  `
})
export class ServicesComponent {
  spellService = inject(SpellService);
}
