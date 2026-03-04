import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellService } from '../services/spell.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="spellService.isArcane() ? 'bg-slate-900 text-purple-100' : 'bg-white text-slate-900'" 
         class="min-h-screen transition-colors duration-1000 ease-in-out relative overflow-hidden">
      
      <!-- Arcane Background Effects -->
      @if (spellService.isArcane()) {
        <div class="absolute inset-0 pointer-events-none z-0">
          <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-black"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
      }

      <main class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <header class="mb-12 border-b pb-8 transition-colors duration-700"
                [class.border-purple-500-30]="spellService.isArcane()"
                [class.border-slate-200]="!spellService.isArcane()">
          <h1 [class]="spellService.isArcane() ? 'font-serif text-4xl text-purple-300' : 'font-sans text-4xl font-bold text-slate-900'"
              class="mb-4 transition-all duration-700">
            {{ spellService.isArcane() ? 'The Vow of Silence' : 'Privacy Policy' }}
          </h1>
          <p [class]="spellService.isArcane() ? 'font-mono text-purple-200/60 italic' : 'text-slate-500'">
            {{ spellService.isArcane() ? 'Last sealed: The 3rd Moon of the Current Era' : 'Last updated: March 2026' }}
          </p>
        </header>

        <div class="space-y-12 transition-all duration-1000">
          
          <!-- Section 1 -->
          <section>
            <h2 [class]="spellService.isArcane() ? 'font-serif text-2xl text-purple-200 mb-4' : 'font-sans text-2xl font-bold text-slate-800 mb-4'">
              {{ spellService.isArcane() ? '1. The Circle of Trust' : '1. Information Collection' }}
            </h2>
            <div [class]="spellService.isArcane() ? 'font-mono text-purple-100/80 leading-relaxed' : 'text-slate-600 leading-relaxed'">
              @if (spellService.isArcane()) {
                <p>Know this, initiate: This is a secret guild. The knowledge you share within these walls is bound by ancient wards. No whisper of your true name, your origin, or your deeds is ever sent to the outside Muggle world. We are shadows, and shadows do not speak.</p>
              } @else {
                <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and other contact details necessary to provide our services.</p>
              }
            </div>
          </section>

          <!-- Section 2 -->
          <section>
            <h2 [class]="spellService.isArcane() ? 'font-serif text-2xl text-purple-200 mb-4' : 'font-sans text-2xl font-bold text-slate-800 mb-4'">
              {{ spellService.isArcane() ? '2. Wards of Protection' : '2. Data Security' }}
            </h2>
            <div [class]="spellService.isArcane() ? 'font-mono text-purple-100/80 leading-relaxed' : 'text-slate-600 leading-relaxed'">
              @if (spellService.isArcane()) {
                <p>Your secrets are safe with us. We employ cryptographic seals and psychic barriers to ensure that no scrying eye can pierce our defenses. What happens in the Guild, stays in the Guild.</p>
              } @else {
                <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption and security protocols.</p>
              }
            </div>
          </section>

          <!-- Section 3 -->
          <section>
            <h2 [class]="spellService.isArcane() ? 'font-serif text-2xl text-purple-200 mb-4' : 'font-sans text-2xl font-bold text-slate-800 mb-4'">
              {{ spellService.isArcane() ? '3. The Unspoken Pact' : '3. Third-Party Disclosure' }}
            </h2>
            <div [class]="spellService.isArcane() ? 'font-mono text-purple-100/80 leading-relaxed' : 'text-slate-600 leading-relaxed'">
              @if (spellService.isArcane()) {
                <p>We do not trade in secrets with merchants or kings. Your identity is not a commodity to be bartered in the marketplaces of the mundane. We stand apart from the surveillance of the common world.</p>
              } @else {
                <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.</p>
              }
            </div>
          </section>

        </div>
      </main>
    </div>
  `
})
export class PrivacyComponent {
  spellService = inject(SpellService);
}
