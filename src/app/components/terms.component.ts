import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellService } from '../services/spell.service';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="spellService.isArcane() ? 'bg-slate-900 text-purple-100' : 'bg-white text-slate-900'" 
         class="min-h-screen transition-colors duration-1000 ease-in-out relative overflow-hidden">
      
      <!-- Arcane Background Effects -->
      @if (spellService.isArcane()) {
        <div class="absolute inset-0 pointer-events-none z-0">
          <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-900"></div>
          <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
      }

      <main class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <header class="mb-12 border-b pb-8 transition-colors duration-700"
                [class.border-purple-500-30]="spellService.isArcane()"
                [class.border-slate-200]="!spellService.isArcane()">
          <h1 [class]="spellService.isArcane() ? 'font-serif text-4xl text-purple-300' : 'font-sans text-4xl font-bold text-slate-900'"
              class="mb-4 transition-all duration-700">
            {{ spellService.isArcane() ? 'The Code of the Guild' : 'Terms of Service' }}
          </h1>
          <p [class]="spellService.isArcane() ? 'font-mono text-purple-200/60 italic' : 'text-slate-500'">
            {{ spellService.isArcane() ? 'Sworn upon the Eternal Source' : 'Effective Date: March 2026' }}
          </p>
        </header>

        <div class="space-y-12 transition-all duration-1000">
          
          <!-- Section 1 -->
          <section>
            <h2 [class]="spellService.isArcane() ? 'font-serif text-2xl text-purple-200 mb-4' : 'font-sans text-2xl font-bold text-slate-800 mb-4'">
              {{ spellService.isArcane() ? '1. The Bond of Word and Deed' : '1. Acceptance of Terms' }}
            </h2>
            <div [class]="spellService.isArcane() ? 'font-mono text-purple-100/80 leading-relaxed' : 'text-slate-600 leading-relaxed'">
              @if (spellService.isArcane()) {
                <p>As a member of the Guild, your word is your bond. We commit to our words and our work. When a spell is promised, it is cast. When a construct is commissioned, it is built. We do not falter, and we do not deceive.</p>
              } @else {
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
              }
            </div>
          </section>

          <!-- Section 2 -->
          <section>
            <h2 [class]="spellService.isArcane() ? 'font-serif text-2xl text-purple-200 mb-4' : 'font-sans text-2xl font-bold text-slate-800 mb-4'">
              {{ spellService.isArcane() ? '2. The Law of Loot' : '2. Compensation and Payments' }}
            </h2>
            <div [class]="spellService.isArcane() ? 'font-mono text-purple-100/80 leading-relaxed' : 'text-slate-600 leading-relaxed'">
              @if (spellService.isArcane()) {
                <p>We share the loot with members that work on a quest. The spoils of victory are divided fairly among those who bled in the dungeon. If you slay the dragon, you claim the gold. It is the ancient way.</p>
              } @else {
                <p>Payment terms are defined in individual project contracts. We ensure fair compensation for all deliverables. Invoices are due upon receipt unless otherwise specified in the service agreement.</p>
              }
            </div>
          </section>

          <!-- Section 3 -->
          <section>
            <h2 [class]="spellService.isArcane() ? 'font-serif text-2xl text-purple-200 mb-4' : 'font-sans text-2xl font-bold text-slate-800 mb-4'">
              {{ spellService.isArcane() ? '3. The Right of Choice' : '3. Project Engagement' }}
            </h2>
            <div [class]="spellService.isArcane() ? 'font-mono text-purple-100/80 leading-relaxed' : 'text-slate-600 leading-relaxed'">
              @if (spellService.isArcane()) {
                <p>A member is free to choose their path. You may accept a quest or decline it. However, know this: if you do not embark on the journey, you shall not share in its rewards. We do not share the loot of a specific quest with those who did not labor upon it.</p>
              } @else {
                <p>Engagement in projects is voluntary and based on capacity and expertise. Contractors and employees have the right to decline project assignments. Compensation is strictly tied to active participation and contribution to specific project deliverables.</p>
              }
            </div>
          </section>

        </div>
      </main>
    </div>
  `
})
export class TermsComponent {
  spellService = inject(SpellService);
}
