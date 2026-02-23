
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <div class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <!-- Background Effects -->
      <div class="absolute inset-0 z-0">
        <!-- Dark overlay -->
        <div class="absolute inset-0 bg-black/70 z-10"></div>
        <!-- Placeholder image for cricket field -->
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Cricket Stadium Background" 
          class="w-full h-full object-cover opacity-40"
        />
        <!-- Neon Glow Circles -->
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39FF14] rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00E5FF] rounded-full filter blur-[150px] opacity-20"></div>
      </div>

      <!-- Content -->
      <div class="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <h2 class="text-[#00E5FF] font-bold tracking-[0.2em] text-sm md:text-lg mb-4 animate-fade-in-up">
          EST. 2024
        </h2>
        
        <h1 class="brand-font text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 tracking-tighter drop-shadow-lg">
          STRIKE WITH <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#00E5FF]">POWER</span>
        </h1>

        <p class="text-gray-300 text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-light">
          Precision in every delivery. Power in every shot. Welcome to the home of the <span class="text-[#39FF14] font-bold">Volt Vipers</span>.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button (click)="scrollToContact()" class="group relative px-8 py-4 bg-[#39FF14] text-black font-black uppercase tracking-widest text-lg clip-path-slant hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
            <span class="relative z-10">Join the Hive</span>
            <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <!-- Glow effect on button -->
            <div class="absolute -inset-1 bg-[#39FF14] blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-200 -z-10"></div>
          </button>

          <button class="px-8 py-4 border border-[#00E5FF] text-[#00E5FF] font-bold uppercase tracking-widest text-lg hover:bg-[#00E5FF]/10 transition-colors duration-300">
            View Fixtures
          </button>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  `,
  styles: [`
    .clip-path-slant {
      clip-path: polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  scrollToContact() {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
