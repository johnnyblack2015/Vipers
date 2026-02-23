
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-team',
  standalone: true,
  template: `
    <section class="py-24 bg-[#050505]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <h2 class="brand-font text-4xl md:text-6xl font-black text-white mb-6">
            MEET THE <span class="text-[#00E5FF]">SQUAD</span>
          </h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            The elite athletes powering the Vipers. Speed, strength, and strategy combined.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (player of clubService.players(); track player.id) {
            <div class="group relative bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2">
              <!-- Glow Border Container -->
              <div class="absolute inset-0 border-2 border-transparent group-hover:border-[#39FF14] transition-colors duration-300 z-20 pointer-events-none rounded-lg group-hover:shadow-[0_0_15px_rgba(57,255,20,0.5)]"></div>
              
              <!-- Image -->
              <div class="relative h-80 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <img 
                  [src]="player.image" 
                  [alt]="player.name"
                  class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
                
                <!-- Role Badge -->
                <div class="absolute top-4 right-4 z-20">
                  <span class="px-3 py-1 bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF] text-xs font-bold uppercase tracking-wider rounded backdrop-blur-md">
                    {{ player.role }}
                  </span>
                </div>
              </div>

              <!-- Content -->
              <div class="relative p-6 -mt-10 z-20">
                <h3 class="text-2xl font-bold text-white mb-1 group-hover:text-[#39FF14] transition-colors brand-font">
                  {{ player.name }}
                </h3>
                <p class="text-gray-400 text-sm font-medium mb-4 flex items-center gap-2">
                  <span class="block w-2 h-2 rounded-full bg-[#39FF14]"></span>
                  {{ player.specialty }}
                </p>
                
                <div class="w-full h-[1px] bg-gray-800 group-hover:bg-[#39FF14]/50 transition-colors"></div>
                
                <div class="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span class="text-xs text-gray-400 uppercase tracking-widest">Player Profile</span>
                  <svg class="w-5 h-5 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  // Injecting the singleton service
  clubService = inject(ClubService);
}
