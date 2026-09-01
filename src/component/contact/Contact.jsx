// import Container from "../common/Container";
// import ContactHeader from "./ContactHeader";
// import ContactCard from "./ContactCard";
// import ContactFooter from "./ContactFooter";
// // import PortfolioAI from "../ai/PortfolioAI";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden bg-[#040816] py-32"
//     >
//       {/* Background Glow */}
//       <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

//       <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />

//       {/* Grid Pattern */}
//       <div
//         className="
//           absolute
//           inset-0
//           opacity-[0.03]
//           [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
//           [background-size:80px_80px]
//         "
//       />

//       <Container>
//         {/* Section Header */}
//         <ContactHeader />

//         {/* Contact Card */}
//         <div className="mx-auto mt-20 max-w-7xl">
//           <ContactCard />
//         </div>

        
//         {/* AI Assistant */}
//         {/*
//         <PortfolioAI />
//         */}
//       </Container>
//     </section>
//   );
// };

// export default Contact;












// import Container from "../common/Container";
// import ContactHeader from "./ContactHeader";
// import ContactCard from "./ContactCard";
// import ContactFooter from "./ContactFooter";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="relative overflow-hidden bg-[#070B1F] py-16 sm:py-20 lg:py-24"
//     >
//       {/* Background Ambient Glows */}
//       <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-500/10 blur-[120px]" />

//       {/* Grid Pattern */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.025]
//           [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
//           [background-size:40px_40px]
//           sm:[background-size:60px_60px]
//         "
//       />

//       <Container>
//         <div className="relative z-10 mx-auto max-w-7xl">
//           {/* Header */}
//           <ContactHeader />

//           {/* Card Container */}
//           <div className="mt-8 sm:mt-12">
//             <ContactCard />
//           </div>

//           {/* Footer */}
//           {/* <ContactFooter /> */}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Contact;




// import { useState } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   FileDown,
//   Copy,
//   Check,
//   Github,
//   Linkedin,
//   ArrowUpRight,
//   Sparkles,
//   Clock,
// } from "lucide-react";
// import Container from "../common/Container";

// const ContactFooter = () => {
//   const [copiedEmail, setCopiedEmail] = useState(false);
//   const [copiedPhone, setCopiedPhone] = useState(false);

//   const contactDetails = {
//     name: "Vikas Gupta",
//     role: "Full Stack Developer",
//     email: "vikasgupta0423@gmail.com",
//     phone: "+91 7309373587",
//     location: "New Delhi, India",
//     resumeUrl: "/resume.pdf", // Public folder me resume ka path
//     github: "https://github.com",
//     linkedin: "https://linkedin.com",
//   };

//   const handleCopy = (text, type) => {
//     navigator.clipboard.writeText(text);
//     if (type === "email") {
//       setCopiedEmail(true);
//       setTimeout(() => setCopiedEmail(false), 2000);
//     } else {
//       setCopiedPhone(true);
//       setTimeout(() => setCopiedPhone(false), 2000);
//     }
//   };

//   return (
//     <footer
//       id="contact"
//       className="relative pt-16 sm:py-20 lg:py-24 pb-12 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Ambient Glows */}
//       <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-16 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute -bottom-16 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Open For Opportunities
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Let&apos;s Connect & Build{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Scalable Systems
//             </span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//             Available for full-time engineering roles, high-impact freelance builds, and technical discussions.
//           </p>
//         </div>

//         {/* Action Grid: Contact Hub & Quick Profiles */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto">
          
//           {/* Main Direct Info Card (Left) */}
//           <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-800/90 bg-[#0B132B]/70 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
//             <div>
//               <div className="flex items-center justify-between gap-3 mb-6">
//                 <div>
//                   <h3 className="text-xl sm:text-2xl font-black text-white">
//                     {contactDetails.name}
//                   </h3>
//                   <p className="text-xs sm:text-sm font-semibold text-cyan-400">
//                     {contactDetails.role}
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
//                   <Clock size={12} className="text-cyan-400" />
//                   <span>IST (UTC +5:30)</span>
//                 </div>
//               </div>

//               {/* Direct Info Rows */}
//               <div className="space-y-3">
//                 {/* 1. Email Box */}
//                 <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
//                   <div className="flex items-center gap-3.5 min-w-0">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
//                       <Mail size={18} />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-[10px] text-slate-400 uppercase font-semibold">Direct Email</p>
//                       <a
//                         href={`mailto:${contactDetails.email}`}
//                         className="text-xs sm:text-sm text-white font-medium hover:text-cyan-300 transition-colors truncate block"
//                       >
//                         {contactDetails.email}
//                       </a>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => handleCopy(contactDetails.email, "email")}
//                     className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-300 hover:bg-cyan-400 hover:text-slate-950 transition-all cursor-pointer"
//                     title="Copy Email"
//                   >
//                     {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
//                   </button>
//                 </div>

//                 {/* 2. Phone Box */}
//                 <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
//                   <div className="flex items-center gap-3.5 min-w-0">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
//                       <Phone size={18} />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-[10px] text-slate-400 uppercase font-semibold">Direct Call</p>
//                       <a
//                         href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
//                         className="text-xs sm:text-sm text-white font-medium hover:text-cyan-300 transition-colors truncate block"
//                       >
//                         {contactDetails.phone}
//                       </a>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => handleCopy(contactDetails.phone, "phone")}
//                     className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-300 hover:bg-cyan-400 hover:text-slate-950 transition-all cursor-pointer"
//                     title="Copy Phone"
//                   >
//                     {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
//                   </button>
//                 </div>

//                 {/* 3. Location Box */}
//                 <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
//                     <MapPin size={18} />
//                   </div>
//                   <div>
//                     <p className="text-[10px] text-slate-400 uppercase font-semibold">Base Location</p>
//                     <p className="text-xs sm:text-sm text-white font-medium">
//                       {contactDetails.location} • <span className="text-emerald-400">Open to Relocation / Remote</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Note */}
//             <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
//               <Sparkles size={14} className="text-cyan-400 shrink-0" />
//               <span>Typically responds within 2–4 hours during business days.</span>
//             </div>
//           </div>

//           {/* Quick Actions & Resume Download (Right) */}
//           <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
//             {/* Download Resume Card */}
//             <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0B132B] to-[#081124] p-6 sm:p-7 backdrop-blur-2xl shadow-xl">
//               <div className="flex items-center justify-between mb-4">
//                 <span className="p-2.5 rounded-2xl bg-cyan-400 text-slate-950 font-bold">
//                   <FileDown size={22} />
//                 </span>
//                 <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
//                   PDF Format
//                 </span>
//               </div>

//               <h4 className="text-lg font-bold text-white">Curriculum Vitae</h4>
//               <p className="mt-1 text-xs text-slate-400 leading-relaxed">
//                 Download the complete verified summary of my work experience, enterprise tech stack, and certifications.
//               </p>

//               <a
//                 href={contactDetails.resumeUrl}
//                 download="Vikas_Gupta_Resume.pdf"
//                 className="
//                   mt-5
//                   flex
//                   items-center
//                   justify-center
//                   gap-2
//                   w-full
//                   py-3.5
//                   rounded-2xl
//                   bg-gradient-to-r
//                   from-cyan-400
//                   to-sky-500
//                   text-slate-950
//                   font-bold
//                   text-xs
//                   sm:text-sm
//                   shadow-[0_0_20px_rgba(34,211,238,0.3)]
//                   hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
//                   hover:scale-[1.02]
//                   active:scale-[0.98]
//                   transition-all
//                   duration-200
//                   cursor-pointer
//                 "
//               >
//                 <FileDown size={16} />
//                 <span>Download Resume</span>
//               </a>
//             </div>

//             {/* Social Channels Card */}
//             <div className="rounded-3xl border border-slate-800 bg-[#0B132B]/50 p-5 sm:p-6 backdrop-blur-xl">
//               <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
//                 Professional Networks
//               </p>
//               <div className="grid grid-cols-2 gap-3">
//                 <a
//                   href={contactDetails.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-[#070B1F] text-slate-300 hover:border-cyan-400/60 hover:text-white transition-all cursor-pointer"
//                 >
//                   <div className="flex items-center gap-2">
//                     <Github size={16} />
//                     <span className="text-xs font-semibold">GitHub</span>
//                   </div>
//                   <ArrowUpRight size={13} className="text-slate-500" />
//                 </a>

//                 <a
//                   href={contactDetails.linkedin}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-[#070B1F] text-slate-300 hover:border-cyan-400/60 hover:text-white transition-all cursor-pointer"
//                 >
//                   <div className="flex items-center gap-2">
//                     <Linkedin size={16} className="text-sky-400" />
//                     <span className="text-xs font-semibold">LinkedIn</span>
//                   </div>
//                   <ArrowUpRight size={13} className="text-slate-500" />
//                 </a>
//               </div>
//             </div>

//           </div>

//         </div>

//         {/* Global Bottom Signature Bar */}
//         <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
//           <p className="text-xs text-slate-500 font-medium">
//             © {new Date().getFullYear()} Vikas Gupta. Built with React & Tailwind CSS.
//           </p>

//           <div className="flex items-center gap-2">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
//             <span className="text-xs text-slate-400 font-semibold">
//               Designed for Scalable Full-Stack Engineering
//             </span>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default ContactFooter;


// import { useState, useEffect } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   FileDown,
//   Copy,
//   Check,
//   Github,
//   Linkedin,
//   ArrowUpRight,
//   Sparkles,
//   Clock,
// } from "lucide-react";
// import Container from "../common/Container";

// const ContactFooter = () => {
//   const [copiedEmail, setCopiedEmail] = useState(false);
//   const [copiedPhone, setCopiedPhone] = useState(false);
//   const [currentTime, setCurrentTime] = useState("");

//   const contactDetails = {
//     name: "Vikas Gupta",
//     role: "Full Stack Developer",
//     email: "vikasgupta0423@gmail.com",
//     phone: "+91 7309373587",
//     location: "New Delhi, India",
//     resumeUrl: "/resume.pdf",
//     github: "https://github.com",
//     linkedin: "https://linkedin.com",
//   };

//   // Real-Time IST Clock
//   useEffect(() => {
//     const updateTime = () => {
//       const istTime = new Date().toLocaleTimeString("en-IN", {
//         timeZone: "Asia/Kolkata",
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: true,
//       });
//       setCurrentTime(istTime);
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleCopy = (text, type) => {
//     navigator.clipboard.writeText(text);
//     if (type === "email") {
//       setCopiedEmail(true);
//       setTimeout(() => setCopiedEmail(false), 2000);
//     } else {
//       setCopiedPhone(true);
//       setTimeout(() => setCopiedPhone(false), 2000);
//     }
//   };

//   return (
//     <footer
//       id="contact"
//       className="relative pt-16 sm:py-20 lg:py-24 pb-12 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Ambient Glows */}
//       <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-16 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute -bottom-16 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Open For Opportunities
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Let&apos;s Connect & Build{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Scalable Systems
//             </span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//             Available for full-time engineering roles, high-impact freelance builds, and technical discussions.
//           </p>
//         </div>

//         {/* Action Grid: Contact Hub & Quick Profiles */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto">
          
//           {/* Main Direct Info Card (Left) */}
//           <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-800/90 bg-[#0B132B]/70 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
//             <div>
//               <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
//                 <div>
//                   <h3 className="text-xl sm:text-2xl font-black text-white">
//                     {contactDetails.name}
//                   </h3>
//                   <p className="text-xs sm:text-sm font-semibold text-cyan-400">
//                     {contactDetails.role}
//                   </p>
//                 </div>

//                 {/* Live Timezone & Real-Time Clock Badge */}
//                 <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] text-slate-300 shadow-inner">
//                   <Clock size={13} className="text-cyan-400 animate-spin [animation-duration:8s]" />
//                   <span className="font-semibold text-white tracking-wide">
//                     {currentTime || "10:30 AM"}
//                   </span>
//                   <span className="text-slate-400">IST (UTC +5:30)</span>
//                 </div>
//               </div>

//               {/* Direct Info Rows */}
//               <div className="space-y-3">
//                 {/* 1. Email Box */}
//                 <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
//                   <div className="flex items-center gap-3.5 min-w-0">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
//                       <Mail size={18} />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-[10px] text-slate-400 uppercase font-semibold">Direct Email</p>
//                       <a
//                         href={`mailto:${contactDetails.email}`}
//                         className="text-xs sm:text-sm text-white font-medium hover:text-cyan-300 transition-colors truncate block"
//                       >
//                         {contactDetails.email}
//                       </a>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => handleCopy(contactDetails.email, "email")}
//                     className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-300 hover:bg-cyan-400 hover:text-slate-950 transition-all cursor-pointer"
//                     title="Copy Email"
//                   >
//                     {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
//                   </button>
//                 </div>

//                 {/* 2. Phone Box */}
//                 <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
//                   <div className="flex items-center gap-3.5 min-w-0">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
//                       <Phone size={18} />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-[10px] text-slate-400 uppercase font-semibold">Direct Call</p>
//                       <a
//                         href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
//                         className="text-xs sm:text-sm text-white font-medium hover:text-cyan-300 transition-colors truncate block"
//                       >
//                         {contactDetails.phone}
//                       </a>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => handleCopy(contactDetails.phone, "phone")}
//                     className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-300 hover:bg-cyan-400 hover:text-slate-950 transition-all cursor-pointer"
//                     title="Copy Phone"
//                   >
//                     {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
//                   </button>
//                 </div>

//                 {/* 3. Location Box */}
//                 <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
//                     <MapPin size={18} />
//                   </div>
//                   <div>
//                     <p className="text-[10px] text-slate-400 uppercase font-semibold">Base Location</p>
//                     <p className="text-xs sm:text-sm text-white font-medium">
//                       {contactDetails.location} • <span className="text-emerald-400">Open to Relocation / Remote</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Note */}
//             <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
//               <Sparkles size={14} className="text-cyan-400 shrink-0" />
//               <span>Typically responds within 2–4 hours during business days.</span>
//             </div>
//           </div>

//           {/* Quick Actions & Resume Download (Right) */}
//           <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
//             {/* Download Resume Card */}
//             <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0B132B] to-[#081124] p-6 sm:p-7 backdrop-blur-2xl shadow-xl">
//               <div className="flex items-center justify-between mb-4">
//                 <span className="p-2.5 rounded-2xl bg-cyan-400 text-slate-950 font-bold">
//                   <FileDown size={22} />
//                 </span>
//                 <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
//                   PDF Format
//                 </span>
//               </div>

//               <h4 className="text-lg font-bold text-white">Curriculum Vitae</h4>
//               <p className="mt-1 text-xs text-slate-400 leading-relaxed">
//                 Download the complete verified summary of my work experience, enterprise tech stack, and certifications.
//               </p>

//               <a
//                 href={contactDetails.resumeUrl}
//                 download="Vikas_Gupta_Resume.pdf"
//                 className="
//                   mt-5
//                   flex
//                   items-center
//                   justify-center
//                   gap-2
//                   w-full
//                   py-3.5
//                   rounded-2xl
//                   bg-gradient-to-r
//                   from-cyan-400
//                   to-sky-500
//                   text-slate-950
//                   font-bold
//                   text-xs
//                   sm:text-sm
//                   shadow-[0_0_20px_rgba(34,211,238,0.3)]
//                   hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
//                   hover:scale-[1.02]
//                   active:scale-[0.98]
//                   transition-all
//                   duration-200
//                   cursor-pointer
//                 "
//               >
//                 <FileDown size={16} />
//                 <span>Download Resume</span>
//               </a>
//             </div>

//             {/* Social Channels Card */}
//             <div className="rounded-3xl border border-slate-800 bg-[#0B132B]/50 p-5 sm:p-6 backdrop-blur-xl">
//               <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
//                 Professional Networks
//               </p>
//               <div className="grid grid-cols-2 gap-3">
//                 <a
//                   href={contactDetails.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-[#070B1F] text-slate-300 hover:border-cyan-400/60 hover:text-white transition-all cursor-pointer"
//                 >
//                   <div className="flex items-center gap-2">
//                     <Github size={16} />
//                     <span className="text-xs font-semibold">GitHub</span>
//                   </div>
//                   <ArrowUpRight size={13} className="text-slate-500" />
//                 </a>

//                 <a
//                   href={contactDetails.linkedin}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-[#070B1F] text-slate-300 hover:border-cyan-400/60 hover:text-white transition-all cursor-pointer"
//                 >
//                   <div className="flex items-center gap-2">
//                     <Linkedin size={16} className="text-sky-400" />
//                     <span className="text-xs font-semibold">LinkedIn</span>
//                   </div>
//                   <ArrowUpRight size={13} className="text-slate-500" />
//                 </a>
//               </div>
//             </div>

//           </div>

//         </div>

//         {/* Global Bottom Signature Bar */}
//         <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
//           <p className="text-xs text-slate-500 font-medium">
//             © {new Date().getFullYear()} Vikas Gupta. Built with React & Tailwind CSS.
//           </p>

//           <div className="flex items-center gap-2">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
//             <span className="text-xs text-slate-400 font-semibold">
//               Designed for Scalable Full-Stack Engineering
//             </span>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default ContactFooter;



// import { useState, useEffect } from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   FileDown,
//   Copy,
//   Check,
//   Github,
//   Linkedin,
//   ArrowUpRight,
//   Sparkles,
//   Clock,
//   Eye,
// } from "lucide-react";
// import Container from "../common/Container";

// const ContactFooter = () => {
//   const [copiedEmail, setCopiedEmail] = useState(false);
//   const [copiedPhone, setCopiedPhone] = useState(false);
//   const [currentTime, setCurrentTime] = useState("");
//   const [visitorCount, setVisitorCount] = useState(null);

//   const contactDetails = {
//     name: "Vikas Gupta",
//     role: "Full Stack Developer",
//     email: "vikasgupta0423@gmail.com",
//     phone: "+91 7309373587",
//     location: "New Delhi, India",
//     resumeUrl: "/resume.pdf",
//     github: "https://github.com",
//     linkedin: "https://linkedin.com",
//   };

//   // 1. Real-Time Dynamic IST Clock (Ticking every second)
//   useEffect(() => {
//     const updateTime = () => {
//       const istTime = new Date().toLocaleTimeString("en-IN", {
//         timeZone: "Asia/Kolkata",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         hour12: true,
//       });
//       setCurrentTime(istTime);
//     };

//     updateTime();
//     const timer = setInterval(updateTime, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // 2. Real Visitor Counter (Works automatically on GitHub Pages / Static Hosting)
//   useEffect(() => {
//     const fetchVisitors = async () => {
//       try {
//         // Aap yahan apna unique namespace name (e.g. vikas-portfolio-2026) use kar sakte hain
//         const res = await fetch(
//           "https://api.counterapi.dev/v1/vikasgupta-portfolio-prod/visitors/up"
//         );
//         if (res.ok) {
//           const data = await res.json();
//           setVisitorCount(data.count);
//         } else {
//           // Fallback if API rate-limited
//           setVisitorCount("1.2K+");
//         }
//       } catch (err) {
//         // Offline / Network Fallback
//         setVisitorCount("1.2K+");
//       }
//     };

//     fetchVisitors();
//   }, []);

//   const handleCopy = (text, type) => {
//     navigator.clipboard.writeText(text);
//     if (type === "email") {
//       setCopiedEmail(true);
//       setTimeout(() => setCopiedEmail(false), 2000);
//     } else {
//       setCopiedPhone(true);
//       setTimeout(() => setCopiedPhone(false), 2000);
//     }
//   };

//   return (
//     <footer
//       id="contact"
//       className="relative pt-16 sm:py-20 lg:py-24 pb-12 overflow-hidden bg-[#070B1F]"
//     >
//       {/* Background Ambient Glows */}
//       <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl" />
//       <div className="pointer-events-none absolute -bottom-16 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
//       <div className="pointer-events-none absolute -bottom-16 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

//       <Container>
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
//             <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
//             <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
//               Open For Opportunities
//             </span>
//           </div>

//           <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
//             Let&apos;s Connect & Build{" "}
//             <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
//               Scalable Systems
//             </span>
//           </h2>

//           <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
//             Available for full-time engineering roles, high-impact freelance builds, and technical discussions.
//           </p>
//         </div>

//         {/* Action Grid: Contact Hub & Quick Profiles */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto">
          
//           {/* Main Direct Info Card (Left) */}
//           <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-800/90 bg-[#0B132B]/70 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
//             <div>
//               <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
//                 <div>
//                   <h3 className="text-xl sm:text-2xl font-black text-white">
//                     {contactDetails.name}
//                   </h3>
//                   <p className="text-xs sm:text-sm font-semibold text-cyan-400">
//                     {contactDetails.role}
//                   </p>
//                 </div>

//                 <div className="flex flex-wrap items-center gap-2">
//                   {/* Live Visitor Count Badge */}
//                   <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] text-cyan-300 shadow-sm">
//                     <Eye size={13} className="text-cyan-400" />
//                     <span className="font-bold text-white">
//                       {visitorCount !== null ? visitorCount.toLocaleString() : "..."}
//                     </span>
//                     <span className="text-[10px] text-cyan-400/80">Views</span>
//                   </div>

//                   {/* Real-Time IST Clock Badge */}
//                   <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] text-slate-300 shadow-inner">
//                     <Clock size={13} className="text-cyan-400 animate-spin [animation-duration:8s]" />
//                     <span className="font-semibold text-white tracking-wide">
//                       {currentTime || "10:30:00 AM"}
//                     </span>
//                     <span className="text-slate-400 text-[10px]">IST</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Direct Info Rows */}
//               <div className="space-y-3">
//                 {/* 1. Email Box */}
//                 <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
//                   <div className="flex items-center gap-3.5 min-w-0">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
//                       <Mail size={18} />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-[10px] text-slate-400 uppercase font-semibold">Direct Email</p>
//                       <a
//                         href={`mailto:${contactDetails.email}`}
//                         className="text-xs sm:text-sm text-white font-medium hover:text-cyan-300 transition-colors truncate block"
//                       >
//                         {contactDetails.email}
//                       </a>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => handleCopy(contactDetails.email, "email")}
//                     className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-300 hover:bg-cyan-400 hover:text-slate-950 transition-all cursor-pointer"
//                     title="Copy Email"
//                   >
//                     {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
//                   </button>
//                 </div>

//                 {/* 2. Phone Box */}
//                 <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
//                   <div className="flex items-center gap-3.5 min-w-0">
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
//                       <Phone size={18} />
//                     </div>
//                     <div className="min-w-0">
//                       <p className="text-[10px] text-slate-400 uppercase font-semibold">Direct Call</p>
//                       <a
//                         href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
//                         className="text-xs sm:text-sm text-white font-medium hover:text-cyan-300 transition-colors truncate block"
//                       >
//                         {contactDetails.phone}
//                       </a>
//                     </div>
//                   </div>

//                   <button
//                     onClick={() => handleCopy(contactDetails.phone, "phone")}
//                     className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-300 hover:bg-cyan-400 hover:text-slate-950 transition-all cursor-pointer"
//                     title="Copy Phone"
//                   >
//                     {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
//                   </button>
//                 </div>

//                 {/* 3. Location Box */}
//                 <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800">
//                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
//                     <MapPin size={18} />
//                   </div>
//                   <div>
//                     <p className="text-[10px] text-slate-400 uppercase font-semibold">Base Location</p>
//                     <p className="text-xs sm:text-sm text-white font-medium">
//                       {contactDetails.location} • <span className="text-emerald-400">Open to Relocation / Remote</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Note */}
//             <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
//               <Sparkles size={14} className="text-cyan-400 shrink-0" />
//               <span>Typically responds within 2–4 hours during business days.</span>
//             </div>
//           </div>

//           {/* Quick Actions & Resume Download (Right) */}
//           <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
//             {/* Download Resume Card */}
//             <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0B132B] to-[#081124] p-6 sm:p-7 backdrop-blur-2xl shadow-xl">
//               <div className="flex items-center justify-between mb-4">
//                 <span className="p-2.5 rounded-2xl bg-cyan-400 text-slate-950 font-bold">
//                   <FileDown size={22} />
//                 </span>
//                 <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
//                   PDF Format
//                 </span>
//               </div>

//               <h4 className="text-lg font-bold text-white">Curriculum Vitae</h4>
//               <p className="mt-1 text-xs text-slate-400 leading-relaxed">
//                 Download the complete verified summary of my work experience, enterprise tech stack, and certifications.
//               </p>

//               <a
//                 href={contactDetails.resumeUrl}
//                 download="Vikas_Gupta_Resume.pdf"
//                 className="
//                   mt-5
//                   flex
//                   items-center
//                   justify-center
//                   gap-2
//                   w-full
//                   py-3.5
//                   rounded-2xl
//                   bg-gradient-to-r
//                   from-cyan-400
//                   to-sky-500
//                   text-slate-950
//                   font-bold
//                   text-xs
//                   sm:text-sm
//                   shadow-[0_0_20px_rgba(34,211,238,0.3)]
//                   hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
//                   hover:scale-[1.02]
//                   active:scale-[0.98]
//                   transition-all
//                   duration-200
//                   cursor-pointer
//                 "
//               >
//                 <FileDown size={16} />
//                 <span>Download Resume</span>
//               </a>
//             </div>

//             {/* Social Channels Card */}
//             <div className="rounded-3xl border border-slate-800 bg-[#0B132B]/50 p-5 sm:p-6 backdrop-blur-xl">
//               <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
//                 Professional Networks
//               </p>
//               <div className="grid grid-cols-2 gap-3">
//                 <a
//                   href={contactDetails.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-[#070B1F] text-slate-300 hover:border-cyan-400/60 hover:text-white transition-all cursor-pointer"
//                 >
//                   <div className="flex items-center gap-2">
//                     <Github size={16} />
//                     <span className="text-xs font-semibold">GitHub</span>
//                   </div>
//                   <ArrowUpRight size={13} className="text-slate-500" />
//                 </a>

//                 <a
//                   href={contactDetails.linkedin}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-[#070B1F] text-slate-300 hover:border-cyan-400/60 hover:text-white transition-all cursor-pointer"
//                 >
//                   <div className="flex items-center gap-2">
//                     <Linkedin size={16} className="text-sky-400" />
//                     <span className="text-xs font-semibold">LinkedIn</span>
//                   </div>
//                   <ArrowUpRight size={13} className="text-slate-500" />
//                 </a>
//               </div>
//             </div>

//           </div>

//         </div>

//         {/* Global Bottom Signature Bar */}
//         <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
//           <p className="text-xs text-slate-500 font-medium">
//             © {new Date().getFullYear()} Vikas Gupta. Built with React & Tailwind CSS.
//           </p>

//           <div className="flex items-center gap-2">
//             <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
//             <span className="text-xs text-slate-400 font-semibold">
//               Designed for Scalable Full-Stack Engineering
//             </span>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   );
// };

// export default ContactFooter;



import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  FileDown,
  Copy,
  Check,
  Github,
  Linkedin,
  ArrowUpRight,
  Sparkles,
  Clock,
  Eye,
} from "lucide-react";
import Container from "../common/Container";

const ContactFooter = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [visitorCount, setVisitorCount] = useState(null);

  const contactDetails = {
    name: "Vikas Gupta",
    role: "Full Stack Developer",
    email: "vikasgupta0423@gmail.com",
    phone: "+91 7309373587",
    location: "New Delhi, India",
    resumeUrl: "assets/vikas-gupta-resume.pdf",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  };

  // 1. Live IST Clock (Ticking every second)
  useEffect(() => {
    const updateTime = () => {
      const istTime = new Date().toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(istTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Real Visitor Counter Integration (via CountAPI)
  // useEffect(() => {
  //   const trackVisitor = async () => {
  //     try {
  //       const namespace = "vikas-portfolio-2026-prod";
  //       const key = "page-views";

  //       // Agar user ne isi session me pehle visit kiya hai toh sirf count get karega, duplicate increment nahi karega
  //       const hasVisited = sessionStorage.getItem("has_counted_visit");
  //       const endpoint = hasVisited
  //         ? `https://api.counterapi.dev/v1/${namespace}/${key}`
  //         : `https://api.counterapi.dev/v1/${namespace}/${key}/up`;

  //       const response = await fetch(endpoint);

  //       if (response.ok) {
  //         const data = await response.json();
  //         setVisitorCount(data.count);
  //         if (!hasVisited) {
  //           sessionStorage.setItem("has_counted_visit", "true");
  //         }
  //       } else {
  //         setVisitorCount(1240);
  //       }
  //     } catch {
  //       setVisitorCount(1240);
  //     }
  //   };

  //   trackVisitor();
  // }, []);


  useEffect(() => {
  let isMounted = true;

  const trackVisitor = async () => {
    // 1. Instant Local Fallback Check (Zero-second delay)
    const localCount = parseInt(localStorage.getItem("portfolio_views") || "1", 10);
    const hasVisited = sessionStorage.getItem("has_counted_session");

    if (!hasVisited) {
      localStorage.setItem("portfolio_views", String(localCount + 1));
      sessionStorage.setItem("has_counted_session", "true");
    }

    // Default safe initial value (Never stays '...')
    if (isMounted) {
      setVisitorCount(hasVisited ? localCount : localCount + 1);
    }

    // 2. Fetch Live Global Count with Timeout
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500); // 3.5s timeout

      const response = await fetch(
        "https://api.counterapi.dev/v1/vikas-portfolio-2026/page-views/up",
        { signal: controller.signal }
      );
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (isMounted && data?.count) {
          setVisitorCount(data.count);
          localStorage.setItem("portfolio_views", String(data.count));
        }
      }
    } catch {
      // Agar mobile ISP ya ad-blocker network call block kare, local count safely active rahega
    }
  };

  trackVisitor();

  return () => {
    isMounted = false;
  };
}, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <footer
      id="contact"
      className="relative pt-16 sm:py-20 lg:py-24 pb-12 overflow-hidden bg-[#070B1F]"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-16 -right-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Open For Opportunities
            </span>
          </div>

          <h2 className="mt-4 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let&apos;s Connect & Build{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Scalable Systems
            </span>
          </h2>

          <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-slate-400">
            Available for full-time engineering roles, high-impact freelance builds, and technical discussions.
          </p>
        </div>

        {/* Action Grid: Contact Hub & Quick Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto">
          
          {/* Main Direct Info Card (Left) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-800/90 bg-[#0B132B]/70 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {contactDetails.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-400">
                    {contactDetails.role}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Real Live Visitor Count Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-[11px] text-cyan-300 shadow-sm">
                    <Eye size={13} className="text-cyan-400" />
                    <span className="font-bold text-white tracking-wide">
                      {visitorCount !== null ? visitorCount.toLocaleString() : "..."}
                    </span>
                    <span className="text-[10px] text-cyan-400/80">Views</span>
                  </div>

                  {/* Live IST Clock Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] text-slate-300 shadow-inner">
                    <Clock size={13} className="text-cyan-400 animate-spin [animation-duration:8s]" />
                    <span className="font-semibold text-white tracking-wide">
                      {currentTime || "10:30:00 AM"}
                    </span>
                    <span className="text-slate-400 text-[10px]">IST</span>
                  </div>
                </div>
              </div>

              {/* Direct Info Rows */}
              <div className="space-y-3">
                {/* 1. Email Box */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                      <Mail size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 uppercase font-semibold">Direct Email</p>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="text-xs sm:text-sm text-white font-medium hover:text-cyan-300 transition-colors truncate block"
                      >
                        {contactDetails.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(contactDetails.email, "email")}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-300 hover:bg-cyan-400 hover:text-slate-950 transition-all cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* 2. Phone Box */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                      <Phone size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 uppercase font-semibold">Direct Call</p>
                      <a
                        href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                        className="text-xs sm:text-sm text-white font-medium hover:text-cyan-300 transition-colors truncate block"
                      >
                        {contactDetails.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(contactDetails.phone, "phone")}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-300 hover:bg-cyan-400 hover:text-slate-950 transition-all cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* 3. Location Box */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#070B1F]/80 border border-slate-800">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/20">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Base Location</p>
                    <p className="text-xs sm:text-sm text-white font-medium">
                      {contactDetails.location} • <span className="text-emerald-400">Open to Relocation / Remote</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <Sparkles size={14} className="text-cyan-400 shrink-0" />
              <span>Typically responds within 2–4 hours during business days.</span>
            </div>
          </div>

          {/* Quick Actions & Resume Download (Right) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* Download Resume Card */}
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0B132B] to-[#081124] p-6 sm:p-7 backdrop-blur-2xl shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-2xl bg-cyan-400 text-slate-950 font-bold">
                  <FileDown size={22} />
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                  PDF Format
                </span>
              </div>

              <h4 className="text-lg font-bold text-white">Curriculum Vitae</h4>
              <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                Download the complete verified summary of my work experience, enterprise tech stack, and certifications.
              </p>

              <a
                href={contactDetails.resumeUrl}
                download="Vikas_Gupta_Resume.pdf"
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  py-3.5
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-400
                  to-sky-500
                  text-slate-950
                  font-bold
                  text-xs
                  sm:text-sm
                  shadow-[0_0_20px_rgba(34,211,238,0.3)]
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
                  hover:scale-[1.02]
                  active:scale-[0.98]
                  transition-all
                  duration-200
                  cursor-pointer
                "
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Channels Card */}
            <div className="rounded-3xl border border-slate-800 bg-[#0B132B]/50 p-5 sm:p-6 backdrop-blur-xl">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                Professional Networks
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-[#070B1F] text-slate-300 hover:border-cyan-400/60 hover:text-white transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Github size={16} />
                    <span className="text-xs font-semibold">GitHub</span>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-500" />
                </a>

                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-[#070B1F] text-slate-300 hover:border-cyan-400/60 hover:text-white transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin size={16} className="text-sky-400" />
                    <span className="text-xs font-semibold">LinkedIn</span>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-500" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Global Bottom Signature Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} Vikas Gupta. Built with React & Tailwind CSS.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs text-slate-400 font-semibold">
              Designed for Scalable Full-Stack Engineering
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default ContactFooter;