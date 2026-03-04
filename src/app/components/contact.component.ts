import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellService } from '../services/spell.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  template: `
    <div [class]="spellService.isArcane() ? 'bg-slate-900 text-purple-100' : 'bg-white text-slate-900'" 
         class="min-h-screen transition-colors duration-1000 ease-in-out relative overflow-hidden flex items-center justify-center">
      
      <!-- Arcane Background Effects -->
      @if (spellService.isArcane()) {
        <div class="absolute inset-0 pointer-events-none z-0">
          <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-black"></div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        </div>
      }

      <main class="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        
        <div [class]="spellService.isArcane() 
             ? 'bg-slate-800/60 border-purple-500/50 shadow-[0_0_50px_rgba(147,51,234,0.3)] backdrop-blur-sm' 
             : 'bg-white border-slate-200 shadow-2xl'"
             class="rounded-3xl border p-12 text-center transition-all duration-700 transform hover:scale-[1.02]">
          
          <!-- Icon -->
          <div [class]="spellService.isArcane() ? 'bg-purple-900/50 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.5)]' : 'bg-blue-100 text-blue-600'"
               class="w-24 h-24 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 transition-colors duration-700">
            <span class="material-icons">{{ spellService.isArcane() ? 'auto_awesome' : 'mail_outline' }}</span>
          </div>

          <!-- Header -->
          <h1 [class]="spellService.isArcane() ? 'font-serif text-4xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500' : 'font-sans text-4xl font-extrabold text-slate-900'"
              class="mb-6 transition-colors duration-1000">
            {{ spellService.isArcane() ? 'Summon The Guild' : 'Get in Touch' }}
          </h1>

          <!-- Content -->
          <p [class]="spellService.isArcane() ? 'text-purple-200/80 font-mono italic text-lg mb-10 leading-relaxed' : 'text-slate-600 text-lg mb-10 leading-relaxed'"
             class="transition-colors duration-700">
            {{ spellService.isArcane() 
              ? "The Guild is always listening to the whispers of the ether. Whether you seek to commission a grand construct or wish to pledge your wand to our cause, send your message via the arcane network." 
              : "Ready to start your next project? We are here to help you build scalable, innovative software solutions. Reach out to us to discuss your requirements and how we can drive your business forward." }}
          </p>

          <!-- Email Action -->
          <div class="relative group inline-block">
            <div [class]="spellService.isArcane() ? 'absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt' : 'hidden'"></div>
            <a href="mailto:tenetlogica@gmail.com"
               [class]="spellService.isArcane() 
                 ? 'relative px-8 py-4 bg-slate-900 rounded-lg leading-none flex items-center divide-x divide-gray-600' 
                 : 'inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'"
               class="transition-all duration-300">
              
              @if (spellService.isArcane()) {
                <span class="flex items-center space-x-5">
                  <span class="material-icons text-purple-400">send</span>
                  <span class="pr-6 text-gray-100">tenetlogica@gmail.com</span>
                </span>
              } @else {
                <span class="material-icons mr-2">email</span>
                <span>tenetlogica@gmail.com</span>
              }
            </a>
          </div>

          <!-- Arcane Footer Note -->
          @if (spellService.isArcane()) {
            <p class="mt-8 text-purple-400/40 text-xs font-mono">
              * Ravens are also accepted, though packet loss is higher.
            </p>
          }

        </div>

      </main>
    </div>
  `
})
export class ContactComponent {
  spellService = inject(SpellService);
}
