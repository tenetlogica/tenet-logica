import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellService } from '../services/spell.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="spellService.isArcane() ? 'bg-slate-900 text-purple-100' : 'bg-white text-slate-900'" 
         class="min-h-screen transition-colors relative overflow-hidden">
      
      <!-- Arcane Background Effects -->
      @if (spellService.isArcane()) {
        <div class="absolute inset-0 pointer-events-none z-0">
          <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900 to-slate-900"></div>
          <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      }

      <main class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <!-- Header -->
        <header class="text-center mb-16">
          <h1 [class]="spellService.isArcane() ? 'font-serif text-5xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'font-sans text-4xl font-extrabold text-slate-900 tracking-tight'"
              class="mb-4 transition-colors duration-1000">
            {{ spellService.isArcane() ? 'The Grimorium' : 'About Tenet Logica' }}
          </h1>
          <div [class]="spellService.isArcane() ? 'h-1 w-24 bg-purple-500 mx-auto shadow-[0_0_10px_rgba(168,85,247,0.8)]' : 'h-1 w-16 bg-blue-600 mx-auto'" class="rounded transition-colors duration-1000"></div>
        </header>

        <!-- Introduction Section -->
        <section class="mb-16 transition-colors duration-1000">
          <h2 [class]="spellService.isArcane() ? 'text-purple-300 font-serif text-2xl mb-4 border-b border-purple-500/30 pb-2' : 'text-slate-800 font-sans text-2xl font-bold mb-4 border-b border-slate-200 pb-2'"
              class="transition-colors duration-700">
            {{ spellService.isArcane() ? 'Our Covenant' : 'Who We Are' }}
          </h2>
          <p [class]="spellService.isArcane() ? 'text-purple-200/80 font-mono italic leading-relaxed' : 'text-slate-600 leading-relaxed'"
             class="text-lg transition-colors duration-700">
            {{ spellService.isArcane() 
              ? "We are not a company, but a circle. A closed guild of high-mages who have transcended the mundane loops of corporate coding. We gather in the digital ether to weave spells of logic and structure, binding raw data into forms of power and utility." 
              : "Tenet Logica is a collective of senior software engineers and architects. We operate as a closed network of experts who collaborate on high-impact projects. We are not a traditional agency; we are a guild of craftsmen dedicated to software excellence." }}
          </p>
        </section>

        <!-- Philosophy Section -->
        <section class="mb-16 transition-colors duration-1000">
          <h2 [class]="spellService.isArcane() ? 'text-purple-300 font-serif text-2xl mb-6 border-b border-purple-500/30 pb-2' : 'text-slate-800 font-sans text-2xl font-bold mb-6 border-b border-slate-200 pb-2'"
              class="transition-colors duration-700">
            {{ spellService.isArcane() ? 'The Arcane Truths' : 'Our Philosophy' }}
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Principle 1 -->
            <div [class]="spellService.isArcane() ? 'bg-slate-800/50 border-purple-500/30' : 'bg-slate-50 border-slate-200'"
                 class="p-6 rounded-xl border transition-all duration-700">
              <h3 [class]="spellService.isArcane() ? 'text-purple-200 font-serif' : 'text-slate-900 font-bold'" class="text-lg mb-2">
                {{ spellService.isArcane() ? 'The Flow of Magic' : 'Agile Methodology' }}
              </h3>
              <p [class]="spellService.isArcane() ? 'text-purple-300/70 text-sm' : 'text-slate-600 text-sm'">
                {{ spellService.isArcane() 
                  ? "Our craft relies on the Art of Iteration and the summoning of Agentic Spirits to handle the drudgery. Should your requirements mutate like a stray polymorph spell, we adapt our Weave before the ink even dries on the scroll. We do not fear change; we simply re-cast." 
                  : "We embrace iterative development, adapting quickly to changing requirements and feedback." }}
              </p>
            </div>

            <!-- Principle 2 -->
            <div [class]="spellService.isArcane() ? 'bg-slate-800/50 border-purple-500/30' : 'bg-slate-50 border-slate-200'"
                 class="p-6 rounded-xl border transition-all duration-700">
              <h3 [class]="spellService.isArcane() ? 'text-purple-200 font-serif' : 'text-slate-900 font-bold'" class="text-lg mb-2">
                {{ spellService.isArcane() ? 'Pure Incantations' : 'Clean Code' }}
              </h3>
              <p [class]="spellService.isArcane() ? 'text-purple-300/70 text-sm' : 'text-slate-600 text-sm'">
                {{ spellService.isArcane() 
                  ? "A spell poorly written invites chaos. We loathe the Dark Arts of spaghetti code. We scribe our scrolls with Readable Runes and Testable Enchantments to ensure our Great Work remains a living masterpiece, not a cursed relic." 
                  : "We prioritize maintainable, readable, and testable code to ensure long-term project health." }}
              </p>
            </div>

            <!-- Principle 3 -->
            <div [class]="spellService.isArcane() ? 'bg-slate-800/50 border-purple-500/30' : 'bg-slate-50 border-slate-200'"
                 class="p-6 rounded-xl border transition-all duration-700">
              <h3 [class]="spellService.isArcane() ? 'text-purple-200 font-serif' : 'text-slate-900 font-bold'" class="text-lg mb-2">
                {{ spellService.isArcane() ? 'Anti-Malice Alchemies' : 'Secure Coding' }}
              </h3>
              <p [class]="spellService.isArcane() ? 'text-purple-300/70 text-sm' : 'text-slate-600 text-sm'">
                {{ spellService.isArcane() 
                  ? "In a world of digital demons and lurking vulnerabilities, we fortify our spells with the strongest wards. We practice the sacred rites of Secure Coding to protect your realm from the forces of darkness." 
                  : "We implement industry best practices for secure coding to protect applications from common vulnerabilities." }}
              </p>
            </div>

            <!-- Principle 4 -->
            <div [class]="spellService.isArcane() ? 'bg-slate-800/50 border-purple-500/30' : 'bg-slate-50 border-slate-200'"
                 class="p-6 rounded-xl border transition-all duration-700">
              <h3 [class]="spellService.isArcane() ? 'text-purple-200 font-serif' : 'text-slate-900 font-bold'" class="text-lg mb-2">
                {{ spellService.isArcane() ? 'Pure Efficiency' : 'Optimized Results' }}
              </h3>
              <p [class]="spellService.isArcane() ? 'text-purple-300/70 text-sm' : 'text-slate-600 text-sm'">
                {{ spellService.isArcane() 
                  ? "We have no patience for sluggish sorcery. We refine our Logic Weaves for Peak Optimization, ensuring our spells manifest with lightning velocity and minimal mana-drain (CPU/RAM)." 
                  : "We deliver optimized results through efficient development practices and performance-focused engineering." }}
              </p>
            </div>
          </div>

        </section>

        @if (spellService.isArcane()) {
        <!-- Leadership Section -->
        <section class="mb-16 transition-colors duration-1000">
          <h2 [class]="spellService.isArcane() ? 'text-purple-300 font-serif text-2xl mb-8 border-b border-purple-500/30 pb-2' : 'text-slate-800 font-sans text-2xl font-bold mb-8 border-b border-slate-200 pb-2'"
              class="transition-colors duration-700">
            {{ spellService.isArcane() ? 'The Archmages' : 'Leadership' }}
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Gandalf -->
            <div class="flex items-center gap-6 group">
              <div [class]="spellService.isArcane() ? 'bg-purple-900/50 border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]' : 'bg-slate-200 border-slate-300'"
                   class="w-20 h-20 rounded-full flex items-center justify-center border-2 text-3xl transition-all duration-700 overflow-hidden relative">
                 @if (spellService.isArcane()) {
                   <span class="material-icons text-purple-200 animate-pulse">auto_awesome</span>
                 } @else {
                   <span class="font-bold text-slate-500">G</span>
                 }
              </div>
              <div>
                <h3 [class]="spellService.isArcane() ? 'text-purple-100 font-serif text-xl' : 'text-slate-900 font-bold text-lg'"
                    class="transition-colors duration-700">
                  {{ spellService.isArcane() ? 'Gandalf' : 'Lead Architect' }}
                </h3>
                <p [class]="spellService.isArcane() ? 'text-purple-400 text-sm italic' : 'text-slate-500 text-sm'">
                  {{ spellService.isArcane() ? 'Keeper of the Flame' : 'Senior Full-Stack Engineer' }}
                </p>
              </div>
            </div>

            <!-- Merlin -->
            <div class="flex items-center gap-6 group">
              <div [class]="spellService.isArcane() ? 'bg-indigo-900/50 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-slate-200 border-slate-300'"
                   class="w-20 h-20 rounded-full flex items-center justify-center border-2 text-3xl transition-all duration-700 overflow-hidden relative">
                 @if (spellService.isArcane()) {
                   <span class="material-icons text-indigo-200 animate-pulse">stars</span>
                 } @else {
                   <span class="font-bold text-slate-500">M</span>
                 }
              </div>
              <div>
                <h3 [class]="spellService.isArcane() ? 'text-purple-100 font-serif text-xl' : 'text-slate-900 font-bold text-lg'"
                    class="transition-colors duration-700">
                  {{ spellService.isArcane() ? 'Merlin' : 'Principal Engineer' }}
                </h3>
                <p [class]="spellService.isArcane() ? 'text-purple-400 text-sm italic' : 'text-slate-500 text-sm'">
                  {{ spellService.isArcane() ? 'Seer of the Void' : 'Backend Specialist' }}
                </p>
              </div>
            </div>
          </div>
        </section>
        }
      </main>
    </div>
  `
})
export class AboutComponent {
  spellService = inject(SpellService);
}
