import { Component, inject } from '@angular/core';
import { SpellService } from '../services/spell.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  template: `
    <div [class]="spellService.isArcane() ? 'bg-slate-900 text-purple-100' : 'bg-white text-slate-900'" 
         class="min-h-screen transition-colors duration-1000 ease-in-out relative overflow-hidden">
      
      <!-- Arcane Background Effects -->
      @if (spellService.isArcane()) {
        <div class="absolute inset-0 pointer-events-none z-0">
          <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
          <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
      }

      <main class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <!-- Hero Section -->
        <div class="text-center mb-24 transition-all duration-1000 transform"
             [class.scale-105]="spellService.isArcane()">
          <h1 [class]="spellService.isArcane() ? 'font-serif text-6xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'font-sans text-5xl font-extrabold text-slate-900 tracking-tight'"
              class="mb-6 transition-all duration-1000">
            {{ spellService.isArcane() ? 'Arcane Architectures' : 'Innovative Software Solutions' }}
            <br />
            <span [class]="spellService.isArcane() ? 'text-purple-300 text-4xl italic' : 'text-blue-600'">
              {{ spellService.isArcane() ? 'Conjured from the Digital Ether' : 'for Modern Businesses' }}
            </span>
          </h1>
          
          <p [class]="spellService.isArcane() ? 'text-purple-200/80 font-mono text-lg max-w-2xl mx-auto border-l-4 border-purple-500 pl-6 italic' : 'text-slate-600 text-xl max-w-2xl mx-auto'"
             class="mb-10 transition-all duration-1000">
            {{ spellService.isArcane() 
              ? "We don't just write code; we weave logic into reality. Welcome to the Secret Agentic Software Development Guild." 
              : "Empowering your digital transformation with cutting-edge technology and expert consultancy." }}
          </p>

          <div class="flex justify-center gap-4">
            <button [class]="spellService.isArcane() 
              ? 'bg-purple-700 hover:bg-purple-600 text-white shadow-[0_0_20px_rgba(147,51,234,0.6)] border border-purple-400/50' 
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'"
              class="px-8 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:-translate-y-1">
              {{ spellService.isArcane() ? 'Begin the Ritual' : 'Get Started' }}
            </button>
            <button [class]="spellService.isArcane() 
              ? 'bg-transparent hover:bg-purple-900/30 text-purple-300 border border-purple-500/50' 
              : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-300'"
              class="px-8 py-3 rounded-lg font-semibold transition-all duration-500">
              {{ spellService.isArcane() ? 'Consult the Oracle' : 'Learn More' }}
            </button>
          </div>
        </div>

        <!-- Services / Rituals Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000">
          
          <!-- Software Consulting -->
          <div [class]="spellService.isArcane() 
            ? 'bg-slate-800/50 border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-purple-400/60' 
            : 'bg-white border-slate-200 hover:shadow-xl hover:border-blue-200'"
            class="p-8 rounded-2xl border transition-all duration-500 group">
            <div [class]="spellService.isArcane() ? 'bg-purple-900/50 text-purple-300' : 'bg-blue-100 text-blue-600'"
                 class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl transition-colors duration-700">
              <span class="material-icons">{{ spellService.isArcane() ? 'visibility' : 'analytics' }}</span>
            </div>
            <h3 [class]="spellService.isArcane() ? 'text-purple-100 font-serif' : 'text-slate-900 font-sans'"
                class="text-xl font-bold mb-3 transition-colors duration-700">
              {{ spellService.isArcane() ? 'Divination & Oracle' : 'Software Consulting' }}
            </h3>
            <p [class]="spellService.isArcane() ? 'text-purple-300/70' : 'text-slate-600'"
               class="transition-colors duration-700">
              {{ spellService.isArcane() 
                ? "Gazing into the future of tech to guide your path through the shifting mists of the market." 
                : "Strategic advice to help you navigate the complex landscape of modern software development." }}
            </p>
          </div>

          <!-- Web and Mobile Development -->
          <div [class]="spellService.isArcane() 
            ? 'bg-slate-800/50 border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-purple-400/60' 
            : 'bg-white border-slate-200 hover:shadow-xl hover:border-blue-200'"
            class="p-8 rounded-2xl border transition-all duration-500 group">
            <div [class]="spellService.isArcane() ? 'bg-purple-900/50 text-purple-300' : 'bg-blue-100 text-blue-600'"
                 class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl transition-colors duration-700">
              <span class="material-icons">{{ spellService.isArcane() ? 'auto_fix_high' : 'code' }}</span>
            </div>
            <h3 [class]="spellService.isArcane() ? 'text-purple-100 font-serif' : 'text-slate-900 font-sans'"
                class="text-xl font-bold mb-3 transition-colors duration-700">
              {{ spellService.isArcane() ? 'Weaving the Digital Veil' : 'Web and Mobile Development' }}
            </h3>
            <p [class]="spellService.isArcane() ? 'text-purple-300/70' : 'text-slate-600'"
               class="transition-colors duration-700">
              {{ spellService.isArcane() 
                ? "Crafting front-end glamours that mesmerize the beholder and bend the browser to our will." 
                : "Building responsive, high-performance websites tailored to your brand's unique needs." }}
            </p>
          </div>

          <!-- Backend Engineering -->
          <div [class]="spellService.isArcane() 
            ? 'bg-slate-800/50 border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-purple-400/60' 
            : 'bg-white border-slate-200 hover:shadow-xl hover:border-blue-200'"
            class="p-8 rounded-2xl border transition-all duration-500 group">
            <div [class]="spellService.isArcane() ? 'bg-purple-900/50 text-purple-300' : 'bg-blue-100 text-blue-600'"
                 class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl transition-colors duration-700">
              <span class="material-icons">{{ spellService.isArcane() ? 'psychology' : 'storage' }}</span>
            </div>
            <h3 [class]="spellService.isArcane() ? 'text-purple-100 font-serif' : 'text-slate-900 font-sans'"
                class="text-xl font-bold mb-3 transition-colors duration-700">
              {{ spellService.isArcane() ? 'Channelling the Mana Core' : 'Backend Engineering' }}
            </h3>
            <p [class]="spellService.isArcane() ? 'text-purple-300/70' : 'text-slate-600'"
               class="transition-colors duration-700">
              {{ spellService.isArcane() 
                ? "Deep logic structures that sustain the world. We ensure the flow of data remains pure and potent." 
                : "Robust server-side architectures designed for scalability, security, and speed." }}
            </p>
          </div>

          <!-- Agentic AI / Automation -->
          <div [class]="spellService.isArcane() 
            ? 'bg-slate-800/50 border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-purple-400/60' 
            : 'bg-white border-slate-200 hover:shadow-xl hover:border-blue-200'"
            class="p-8 rounded-2xl border transition-all duration-500 group">
            <div [class]="spellService.isArcane() ? 'bg-purple-900/50 text-purple-300' : 'bg-blue-100 text-blue-600'"
                 class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl transition-colors duration-700">
              <span class="material-icons">{{ spellService.isArcane() ? 'smart_toy' : 'rocket_launch' }}</span>
            </div>
            <h3 [class]="spellService.isArcane() ? 'text-purple-100 font-serif' : 'text-slate-900 font-sans'"
                class="text-xl font-bold mb-3 transition-colors duration-700">
              {{ spellService.isArcane() ? 'The Golem Forge' : 'Agentic AI / Automation' }}
            </h3>
            <p [class]="spellService.isArcane() ? 'text-purple-300/70' : 'text-slate-600'"
               class="transition-colors duration-700">
              {{ spellService.isArcane() 
                ? "Breathing life into autonomous familiars that serve your will without rest or complaint." 
                : "Leveraging artificial intelligence to automate workflows and enhance decision-making." }}
            </p>
          </div>

          <!-- Cloud Infrastructure Consultation -->
          <div [class]="spellService.isArcane() 
            ? 'bg-slate-800/50 border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-purple-400/60' 
            : 'bg-white border-slate-200 hover:shadow-xl hover:border-blue-200'"
            class="p-8 rounded-2xl border transition-all duration-500 group">
            <div [class]="spellService.isArcane() ? 'bg-purple-900/50 text-purple-300' : 'bg-blue-100 text-blue-600'"
                 class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl transition-colors duration-700">
              <span class="material-icons">{{ spellService.isArcane() ? 'cloud' : 'cloud_queue' }}</span>
            </div>
            <h3 [class]="spellService.isArcane() ? 'text-purple-100 font-serif' : 'text-slate-900 font-sans'"
                class="text-xl font-bold mb-3 transition-colors duration-700">
              {{ spellService.isArcane() ? 'Celestial Vaults' : 'Cloud Infrastructure Consultation' }}
            </h3>
            <p [class]="spellService.isArcane() ? 'text-purple-300/70' : 'text-slate-600'"
               class="transition-colors duration-700">
              {{ spellService.isArcane() 
                ? "Aetheric hosting in the cloud-realms, safe from mortal tampering and downtime." 
                : "Secure, scalable cloud solutions on AWS, Azure, and Google Cloud Platform." }}
            </p>
          </div>

          <!-- Bug Fixing & Support -->
          <div [class]="spellService.isArcane() 
            ? 'bg-slate-800/50 border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-purple-400/60' 
            : 'bg-white border-slate-200 hover:shadow-xl hover:border-blue-200'"
            class="p-8 rounded-2xl border transition-all duration-500 group">
            <div [class]="spellService.isArcane() ? 'bg-purple-900/50 text-purple-300' : 'bg-blue-100 text-blue-600'"
                 class="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl transition-colors duration-700">
              <span class="material-icons">{{ spellService.isArcane() ? 'healing' : 'bug_report' }}</span>
            </div>
            <h3 [class]="spellService.isArcane() ? 'text-purple-100 font-serif' : 'text-slate-900 font-sans'"
                class="text-xl font-bold mb-3 transition-colors duration-700">
              {{ spellService.isArcane() ? 'Dispelling of Hexes' : 'Bug Fixing & Support' }}
            </h3>
            <p [class]="spellService.isArcane() ? 'text-purple-300/70' : 'text-slate-600'"
               class="transition-colors duration-700">
              {{ spellService.isArcane() 
                ? "We cleanse your code of curses, glitches, and the chaotic influence of entropy." 
                : "Reliable maintenance and rapid bug resolution to keep your business running smoothly." }}
            </p>
          </div>

          <!-- Card 6 -->
          

        </div>
      </main>
    </div>
  `
})
export class HomeComponent {
  spellService = inject(SpellService);
}
