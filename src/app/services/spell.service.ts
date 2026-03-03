import { Injectable, signal, WritableSignal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    castSpell: (spell: string) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  private _isArcane: WritableSignal<boolean> = signal(false);
  readonly isArcane = this._isArcane.asReadonly();
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupGlobalSpell();
    }
  }

  private setupGlobalSpell() {
    window.castSpell = (spell: string) => {
      if(!spell) {
        console.log('%cYou must cast the right spell. If you don\'t know Marauder\'s secrets, you must be a Muggle.', 'color: #888; font-style: italic;');
        return;
      }
      
      if (!this.isArcane() && spell.toLowerCase() === 'i solemnly swear that i am up to no good') {
        if (document.startViewTransition) {
          document.startViewTransition(() => {
            this.activateArcaneMode();
          });
        } else {
          this.activateArcaneMode();
        }
        console.log('%c✨ Mischief Managed! Welcome to the Guild. ✨', 'color: #15803d; font-size: 16px; font-weight: bold;');
      } else if (this.isArcane() && spell.toLowerCase().startsWith('mischief managed')) {
        this.deactivateArcaneMode();
        console.log('%c✨ Thanks for visiting. See you soon! ✨', 'color: #741580; font-size: 16px; font-weight: bold;');
      } else {
        console.log('%cYou must cast the right spell. If you don\'t know Marauder\'s secrets, you must be a Muggle.', 'color: #888; font-style: italic;');
      }
    };
  }

  activateArcaneMode() {
    this._isArcane.set(true);
  }

  deactivateArcaneMode() {
    this._isArcane.set(false);
  }
}
