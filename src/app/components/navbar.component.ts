import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SpellService } from '../services/spell.service';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule, NgOptimizedImage],
  template: `
    <nav [class]="spellService.isArcane() ? 'bg-slate-900 border-b border-purple-500/30' : 'bg-white border-b border-slate-200'" 
         class="sticky top-0 z-50 transition-colors duration-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a routerLink="/" class="flex-shrink-0 flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-700">
                <img
                  [ngSrc]="'logo.png'"
                  width="32"
                  height="32"
                  alt="Tenet Logica Logo"
                  [class]="'w-7 h-7 object-contain'"
                  priority
                />
              </div>
              <span [class]="spellService.isArcane() ? 'text-purple-100 font-serif tracking-widest' : 'text-slate-900 font-sans font-bold tracking-tight'"
                    class="text-lg transition-all duration-700">
                {{ spellService.isArcane() ? 'TENET LOGICA' : 'Tenet Logica' }}
              </span>
            </a>
          </div>
          
          <div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <a routerLink="/" 
               routerLinkActive="bg-slate-100 text-slate-900"
               [routerLinkActiveOptions]="{exact: true}"
               [class]="spellService.isArcane() 
                 ? 'text-purple-200 hover:text-white hover:bg-purple-900/20' 
                 : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'"
               class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              {{ spellService.isArcane() ? 'Sanctum' : 'Home' }}
            </a>
            <a routerLink="/about" 
               routerLinkActive="bg-slate-100 text-slate-900"
               [routerLinkActiveOptions]="{exact: true}" 
               [class]="spellService.isArcane() 
                 ? 'text-purple-200 hover:text-white hover:bg-purple-900/20' 
                 : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'"
               class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              {{ spellService.isArcane() ? 'Grimoire' : 'About' }}
            </a>
            <a routerLink="/services" 
               routerLinkActive="bg-slate-100 text-slate-900"
               [routerLinkActiveOptions]="{exact: true}" 
               [class]="spellService.isArcane() 
                 ? 'text-purple-200 hover:text-white hover:bg-purple-900/20' 
                 : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'"
               class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              {{ spellService.isArcane() ? 'Alchemies' : 'Services' }}
            </a>
            <a routerLink="/contact" 
               routerLinkActive="bg-blue-700 shadow-inner"
               [class]="spellService.isArcane() 
                 ? 'bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]' 
                 : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'"
               class="px-4 py-2 rounded-md text-sm font-medium transition-all duration-300">
              {{ spellService.isArcane() ? 'Summon Us' : 'Contact Us' }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  spellService = inject(SpellService);
}
