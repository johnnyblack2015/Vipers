
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <section class="py-24 bg-gradient-to-b from-[#0a0a0a] to-black relative">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16">
          <h2 class="brand-font text-4xl md:text-5xl font-bold text-white mb-6">
            JOIN THE <span class="text-[#39FF14]">HIVE</span>
          </h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to try out, sponsor the team, or just watch a match, we want to hear from you. 
            The Vipers are always looking for new talent and support.
          </p>
        </div>

        <!-- Contact Form -->
        <div class="bg-gray-900/40 p-8 md:p-12 rounded-2xl border border-gray-800 backdrop-blur-sm relative mb-16">
          <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#39FF14] rounded-full filter blur-[60px] opacity-20"></div>
          
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-8 relative z-10">
              <!-- Personal Details -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-400 text-sm font-bold mb-2 tracking-wide uppercase">Name</label>
                  <input 
                    type="text" 
                    formControlName="name"
                    class="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_10px_rgba(57,255,20,0.3)] transition-all"
                    placeholder="Your Name"
                  >
                </div>
                <div>
                  <label class="block text-gray-400 text-sm font-bold mb-2 tracking-wide uppercase">Email</label>
                  <input 
                    type="email" 
                    formControlName="email"
                    class="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.3)] transition-all"
                    placeholder="your@email.com"
                  >
                </div>
              </div>

              <!-- Cricketing Profile Section -->
              <div class="space-y-6">
                <h3 class="text-[#39FF14] font-bold text-lg uppercase tracking-wider border-b border-gray-800 pb-2">Cricketing Profile</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-gray-400 text-sm font-bold mb-2 tracking-wide uppercase">Role Interest</label>
                    <select 
                      formControlName="role"
                      class="w-full bg-black/50 border border-gray-700 text-gray-300 px-4 py-3 rounded focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_10px_rgba(57,255,20,0.3)] transition-all"
                    >
                      <option value="" disabled>Select a role</option>
                      <option value="batsman">Batsman</option>
                      <option value="bowler">Bowler</option>
                      <option value="allrounder">All-Rounder</option>
                      <option value="fan">Fan / Supporter</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-gray-400 text-sm font-bold mb-2 tracking-wide uppercase">Cricheroes Profile Link</label>
                    <input 
                      type="url" 
                      formControlName="cricheroesLink"
                      class="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_10px_rgba(57,255,20,0.3)] transition-all"
                      placeholder="https://cricheroes.in/..."
                    >
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-gray-400 text-sm font-bold mb-2 tracking-wide uppercase">Message</label>
                <textarea 
                  formControlName="message"
                  rows="4" 
                  class="w-full bg-black/50 border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-[#39FF14] focus:shadow-[0_0_10px_rgba(57,255,20,0.3)] transition-all"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                [disabled]="contactForm.invalid || submitted"
                class="w-full bg-[#39FF14] text-black font-black uppercase tracking-widest py-4 rounded hover:bg-white hover:shadow-[0_0_20px_#39FF14] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                @if (submitted) {
                  <span>Sent!</span>
                } @else {
                  <span>Send Message</span>
                }
              </button>
            </form>
        </div>

        <!-- Contact Info -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex items-start gap-4 p-6 bg-gray-900/40 rounded-xl border border-gray-800 hover:border-[#39FF14]/50 transition-colors group">
            <div class="p-3 bg-[#39FF14]/10 rounded border border-[#39FF14]/30 group-hover:bg-[#39FF14]/20 transition-colors">
              <svg class="w-6 h-6 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <div>
              <h4 class="text-white font-bold text-lg mb-1">Location</h4>
              <p class="text-gray-400 text-sm">Thunderbolt Arena, Sector 7<br>Neo-City, NC 90210</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-6 bg-gray-900/40 rounded-xl border border-gray-800 hover:border-[#00E5FF]/50 transition-colors group">
            <div class="p-3 bg-[#00E5FF]/10 rounded border border-[#00E5FF]/30 group-hover:bg-[#00E5FF]/20 transition-colors">
              <svg class="w-6 h-6 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <div>
              <h4 class="text-white font-bold text-lg mb-1">Phone</h4>
              <p class="text-gray-400 text-sm">+1 (555) VOLT-VIPER<br>Mon-Fri, 9am - 6pm</p>
            </div>
          </div>

          <div class="flex items-start gap-4 p-6 bg-gray-900/40 rounded-xl border border-gray-800 hover:border-[#39FF14]/50 transition-colors group">
            <div class="p-3 bg-[#39FF14]/10 rounded border border-[#39FF14]/30 group-hover:bg-[#39FF14]/20 transition-colors">
               <svg class="w-6 h-6 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h4 class="text-white font-bold text-lg mb-1">Email</h4>
              <p class="text-gray-400 text-sm">recruitment&#64;voltvipers.com<br>info&#64;voltvipers.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      cricheroesLink: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted (Java Backend Simulation):', this.contactForm.value);
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
        this.contactForm.reset();
        this.contactForm.patchValue({role: ''});
      }, 3000);
    }
  }
}
