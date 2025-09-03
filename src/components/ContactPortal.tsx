// ContactPortal.tsx
import React, { useState } from 'react';
import {
  Mail,
  MessageCircle,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Send,
  Zap,
  Rocket,
  Globe
} from 'lucide-react';

const DISCORD_INVITE = 'https://discordapp.com/users/1036991829138223104'; 

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 245 240" {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M104.4 104.8c-5.7 0-10.2 5-10.2 11.1 0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.3-5 10.2-11.1 0-6.1-4.6-11.1-10.2-11.1zm36.3 0c-5.7 0-10.2 5-10.2 11.1 0 6.1 4.6 11.1 10.2 11.1 5.7 0 10.3-5 10.2-11.1 0-6.1-4.6-11.1-10.2-11.1z" />
    <path d="M189.5 20H55.5C33.6 20 16 36.8 16 59.3v121.4c0 22.5 17.6 39.3 39.5 39.3h107.7l-5.1-17.6 12.4 10.9 11.1 9.7 19.9 17.4V59.3C229.9 36.8 212.3 20 190.5 20zM161.7 170.7s-8.1-9.6-14.9-18.2c29.6-8.3 41-26.7 41-26.7-9.4 6.3-18.3 10.5-26.6 13.5-11.6 4.2-22.7 6.9-33.3 8.6-21 3.5-40.2 2.7-57.1-.1-12.6-2-23.4-4.9-32.4-8.6-3.3-1.2-6.9-2.6-10.5-4.2-0.4-0.2-0.7-0.4-1-0.6-0.2-0.1-0.3-0.2-0.5-0.3 0 0 11.2 18.3 40.1 26.6-6.5 8.5-14.9 18.6-14.9 18.6-49.2-1.6-67.8-33.9-67.8-33.9 0-72.1 32.2-130.6 32.2-130.6C57.6 22.4 82.6 21 82.6 21l3.2 3.8c-53.5 15.5-78.2 38.9-78.2 38.9s14.9-8.3 40.2-18.1c0 0 25.3-10.7 53.6-14.4 0 0 3.9-0.8 10.4-1.7 19.4-3.4 44.5-4.9 73.7 1.6 0 0 32.2 7.4 63.1 29.2 0 0-18.7 32.7-67.7 34.3z" />
  </svg>
);

const ContactPortal: React.FC = () => {
  // THE email you specified
  const OWNER_EMAIL = 'jaweriab.codes@gmail.com';

  const [activeMethod, setActiveMethod] = useState<string | null>(null);
  const [showScheduler, setShowScheduler] = useState(false);
  const [scheduleForm, setScheduleForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    duration: '15-30 min',
    message: ''
  });
  const [sentConfirm, setSentConfirm] = useState(false);

  // first row: 4 items; second row: 2 items
  const firstRow = [
    {
      id: 'email',
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Me',
      subtitle: OWNER_EMAIL,
      description: 'Send me a detailed message about your project',
      action: `mailto:${OWNER_EMAIL}`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      subtitle: 'Professional Network',
      description: 'Connect with me professionally',
      action: 'https://www.linkedin.com/in/jaweria-batool/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      id: 'github',
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      subtitle: 'Code Repository',
      description: 'Check out my latest projects and contributions',
      action: 'https://github.com/Jaweria-B',
      color: 'from-gray-700 to-gray-900'
    },
    {
      id: 'calendar',
      icon: <Calendar className="w-6 h-6" />,
      title: 'Schedule Call',
      subtitle: '15-30 min consultation',
      description: 'Book a free consultation call (I will reply with a confirmed time)',
      action: 'schedule',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const secondRow = [
    {
      id: 'discord',
      icon: <DiscordIcon className="w-6 h-6" />,
      title: 'Discord',
      subtitle: 'Join my server',
      description: 'Chat about projects, demos and realtime help',
      action: DISCORD_INVITE,
      color: 'from-indigo-500 to-violet-600'
    },
    {
      id: 'blog',
      icon: <Globe className="w-6 h-6" />,
      title: 'Big Bang Blog',
      subtitle: 'Essays, Stories & Reflections',
      description: 'Spark your curiosity — read, reflect, write.',
      subdescription: 'Want to contribute? Reach out.',
      action: 'https://www.bigbangblog.pk/',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  function openLink(action: string) {
    if (action.startsWith('mailto:') || action.startsWith('http')) {
      window.open(action, '_blank', 'noopener,noreferrer');
    } else if (action === 'schedule') {
      setShowScheduler(true);
    } else {
      // fallback: toggle active method (keeps old behavior)
      setActiveMethod((prev) => (prev === action ? null : action));
    }
  }

  function handleScheduleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setScheduleForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function submitSchedule(e?: React.FormEvent) {
    if (e) e.preventDefault();
    // minimal validation
    if (!scheduleForm.name || !scheduleForm.email || !scheduleForm.date || !scheduleForm.time) {
      alert('Please fill name, email, date and time so I can confirm the call.');
      return;
    }

    const subject = encodeURIComponent('Schedule Call Request');
    const body = encodeURIComponent(
      `Hi Jaweria,\n\nI'd like to schedule a ${scheduleForm.duration} consultation.\n\nName: ${scheduleForm.name}\nEmail: ${scheduleForm.email}\nPreferred Date: ${scheduleForm.date}\nPreferred Time: ${scheduleForm.time}\nMessage: ${scheduleForm.message}\n\nPlease confirm a slot that works for you.\n\nThanks!`
    );

    const mailto = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
    window.open(mailto, '_blank', 'noopener,noreferrer');

    setSentConfirm(true);
    setShowScheduler(false);
    // reset form
    setScheduleForm({ name: '', email: '', date: '', time: '', duration: '15-30 min', message: '' });
    setTimeout(() => setSentConfirm(false), 4000);
  }

  return (
    <section id="connect" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Let's Connect</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to launch your next project into orbit? Choose your preferred way to reach out
            and let's create something extraordinary together.
          </p>
        </div>

        {/* First row - 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {firstRow.map((method) => (
            <div
              key={method.id}
              role="button"
              tabIndex={0}
              onClick={() => openLink(method.action)}
              onKeyDown={(e) => (e.key === 'Enter' ? openLink(method.action) : null)}
              className={`glass-effect rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 group relative overflow-hidden ${activeMethod === method.id ? 'ring-2 ring-blue-500' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
              <div className="relative z-10 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                <p className="text-blue-400 text-sm mb-2 break-words">{method.subtitle}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - 2 items with equal width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {secondRow.map((method) => (
            <div
              key={method.id}
              role="button"
              tabIndex={0}
              onClick={() => openLink(method.action)}
              onKeyDown={(e) => (e.key === 'Enter' ? openLink(method.action) : null)}
              className={`glass-effect rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 group relative overflow-hidden text-center`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
                <p className="text-blue-400 text-sm mb-2">{method.subtitle}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{method.description}</p>
                { method.subdescription &&
                <p className="text-gray-400 text-xs leading-relaxed">{method.subdescription}</p>
                }
              </div>
            </div>
          ))}
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => window.open(`mailto:${OWNER_EMAIL}`, '_blank', 'noopener,noreferrer')}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 nebula-glow"
          >
            <Send className="w-5 h-5" />
            Send Quick Email
            <Zap className="w-4 h-4" />
          </button>

          <button
            onClick={() => window.open('https://www.linkedin.com/in/jaweria-batool/', '_blank', 'noopener,noreferrer')}
            className="flex items-center gap-3 px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            <Rocket className="w-5 h-5" />
            Connect on LinkedIn
          </button>
        </div>

        {/* Response Time Promise */}
        <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-white font-semibold">Fast Response Guaranteed</span>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>

          <p className="text-gray-300 mb-4">
            I typically respond within <span className="text-green-400 font-semibold">24-48 hours</span>
            and am always excited to discuss new opportunities and projects.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">24hr</div>
              <div className="text-xs text-gray-400">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">100%</div>
              <div className="text-xs text-gray-400">Reply Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-xs text-gray-400">Available</div>
            </div>
          </div>
        </div>

        {/* Floating Social Icons (desktop only) */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
          <a
            href="https://www.linkedin.com/in/jaweria-batool/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500/20 hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Jaweria-B"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-500/20 hover:scale-110 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${OWNER_EMAIL}`}
            className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-green-400 hover:bg-green-500/20 hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-indigo-300 hover:bg-indigo-500/10 hover:scale-110 transition-all duration-300"
          >
            <DiscordIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.bigbangblog.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-pink-300 hover:bg-pink-500/10 hover:scale-110 transition-all duration-300"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scheduler Modal */}
      {showScheduler && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowScheduler(false)} />
          <form
            onSubmit={submitSchedule}
            className="relative z-70 w-full max-w-xl bg-slate-900/95 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-2">Request a 15–30 min call</h3>
            <p className="text-sm text-gray-400 mb-4">Fill the details below and I'll confirm a slot via email.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                name="name"
                value={scheduleForm.name}
                onChange={handleScheduleChange}
                placeholder="Your name"
                className="px-3 py-2 rounded-md bg-black/60 border border-white/10 text-white"
                required
              />
              <input
                name="email"
                value={scheduleForm.email}
                onChange={handleScheduleChange}
                placeholder="Your email"
                className="px-3 py-2 rounded-md bg-black/60 border border-white/10 text-white"
                required
              />
              <input
                type="date"
                name="date"
                value={scheduleForm.date}
                onChange={handleScheduleChange}
                className="px-3 py-2 rounded-md bg-black/60 border border-white/10 text-white"
                required
              />
              <input
                type="time"
                name="time"
                value={scheduleForm.time}
                onChange={handleScheduleChange}
                className="px-3 py-2 rounded-md bg-black/60 border border-white/10 text-white"
                required
              />
            </div>

            <div className="mt-3">
              <select
                name="duration"
                value={scheduleForm.duration}
                onChange={handleScheduleChange}
                className="w-full px-3 py-2 rounded-md bg-black/60 border border-white/10 text-white"
              >
                <option>15-30 min</option>
                <option>30-45 min</option>
              </select>
            </div>

            <textarea
              name="message"
              value={scheduleForm.message}
              onChange={handleScheduleChange}
              placeholder="Short note / agenda (optional)"
              className="w-full mt-3 px-3 py-2 rounded-md bg-black/60 border border-white/10 text-white"
              rows={4}
            />

            <div className="flex items-center justify-end gap-3 mt-4">
              <button type="button" onClick={() => setShowScheduler(false)} className="px-4 py-2 rounded-md bg-white/5">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-emerald-500 text-black font-semibold">
                Send Request
              </button>
            </div>
          </form>
        </div>
      )}

      {/* small confirmation toast */}
      {sentConfirm && (
        <div className="fixed right-6 bottom-6 z-60 bg-green-600 text-black px-4 py-2 rounded-md shadow-lg">
          Scheduling request opened in your email client — please send to complete.
        </div>
      )}
    </section>
  );
};

export default ContactPortal;
