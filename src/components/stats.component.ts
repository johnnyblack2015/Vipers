
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ClubService } from '../services/club.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  template: `
    <section class="py-20 bg-[#0a0a0a] border-y border-gray-900 relative overflow-hidden">
      <!-- Background grid decoration -->
      <div class="absolute inset-0 opacity-10" 
           style="background-image: linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px); background-size: 40px 40px;">
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="brand-font text-4xl md:text-5xl font-bold text-white mb-4">
            CLUB <span class="text-[#39FF14]">STATS</span>
          </h2>
          <div class="h-1 w-20 bg-gradient-to-r from-[#39FF14] to-[#00E5FF] mx-auto"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <!-- Stat 1 -->
          <div class="p-8 border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-[#39FF14] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] rounded-xl">
            <div class="flex justify-center mb-6">
              <div class="p-4 rounded-full border-2 border-[#39FF14] text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-300">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 class="text-5xl font-black text-white mb-2 brand-font group-hover:scale-110 transition-transform duration-300">
              {{ clubService.stats().matchesPlayed }}
            </h3>
            <p class="text-gray-400 uppercase tracking-widest font-semibold text-sm group-hover:text-[#39FF14] transition-colors">Matches Played</p>
          </div>

          <!-- Stat 2 -->
          <div class="p-8 border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-[#00E5FF] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] rounded-xl">
            <div class="flex justify-center mb-6">
               <div class="p-4 rounded-full border-2 border-[#00E5FF] text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-black transition-all duration-300">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <h3 class="text-5xl font-black text-white mb-2 brand-font group-hover:scale-110 transition-transform duration-300">
              {{ clubService.stats().titlesWon }}
            </h3>
            <p class="text-gray-400 uppercase tracking-widest font-semibold text-sm group-hover:text-[#00E5FF] transition-colors">Titles Won</p>
          </div>

          <!-- Stat 3 -->
          <div class="p-8 border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-[#39FF14] transition-all duration-300 group hover:shadow-[0_0_20px_rgba(57,255,20,0.2)] rounded-xl">
            <div class="flex justify-center mb-6">
              <div class="p-4 rounded-full border-2 border-[#39FF14] text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-300">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <h3 class="text-5xl font-black text-white mb-2 brand-font group-hover:scale-110 transition-transform duration-300">
              {{ clubService.stats().activeMembers }}
            </h3>
            <p class="text-gray-400 uppercase tracking-widest font-semibold text-sm group-hover:text-[#39FF14] transition-colors">Active Vipers</p>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {
  // Dependency Injection via inject() - similar to @Autowired in Java Spring
  clubService = inject(ClubService);
}
