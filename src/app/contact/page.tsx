import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Suite Quaroni",
  description: "Get in touch with Suite Quaroni. Fill out the form to book your stay or ask any questions about our luxury B&B in Palermo, Sicily.",
};

export default function ContactPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-cover bg-center bg-fixed group/design-root bg-white" 
        >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex flex-1 items-center justify-center p-4 sm:p-6 md:p-10 bg-white">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glassmorphic rounded-2xl p-8 shadow-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">Get in Touch</h2>
            <p className="text-slate-600 mb-8">Fill out the form to book your stay or ask any questions.</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-slate-800 pb-2">Check-in</span>
                  <input className="form-input w-full rounded-xl border bg-white/80 p-4 text-base text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-color" type="date"/>
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-slate-800 pb-2">Check-out</span>
                  <input className="form-input w-full rounded-xl border bg-white/80 p-4 text-base text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-color" type="date"/>
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-slate-800 pb-2">Adults</span>
                  <input className="form-input w-full rounded-xl border bg-white/80 p-4 text-base text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-color" min="1" placeholder="2" type="number"/>
                </label>
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-slate-800 pb-2">Children</span>
                  <input className="form-input w-full rounded-xl border bg-white/80 p-4 text-base text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-color" min="0" placeholder="0" type="number"/>
                </label>
              </div>
              <label className="flex flex-col">
                <span className="text-sm font-medium text-slate-800 pb-2">Name</span>
                <input className="form-input w-full rounded-xl border bg-white/80 p-4 text-base text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-color" placeholder="Your full name" type="text"/>
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium text-slate-800 pb-2">Email</span>
                <input className="form-input w-full rounded-xl border bg-white/80 p-4 text-base text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-color" placeholder="your.email@example.com" type="email"/>
              </label>
              <label className="flex flex-col">
                <span className="text-sm font-medium text-slate-800 pb-2">Message</span>
                <textarea className="form-textarea w-full rounded-xl border bg-white/80 p-4 text-base text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-color" placeholder="Any special requests or questions?" rows={4}></textarea>
              </label>
              <button className="w-full cursor-pointer rounded-xl bg-primary-color px-4 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105" type="submit">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="glassmorphic rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary-color/20 text-primary-color">
                    <span className="material-symbols-outlined text-3xl">location_on</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">Address</p>
                    <p className="text-slate-600">Via Roma, 123, Palermo, Italy</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary-color/20 text-primary-color">
                    <span className="material-symbols-outlined text-3xl">mail</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">Email</p>
                    <a className="text-slate-600 hover:text-primary-color transition-colors" href="mailto:info@suitequaroni.com">info@suitequaroni.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary-color/20 text-primary-color">
                    <span className="material-symbols-outlined text-3xl">phone</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-900">Phone</p>
                    <a className="text-slate-600 hover:text-primary-color transition-colors" href="tel:+39021234567">+39 02 123 4567</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}