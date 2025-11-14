import { motion } from 'framer-motion';
import { Sparkles, Gauge, SlidersHorizontal, Compass, Smile, ShieldCheck, LineChart, Leaf } from 'lucide-react';

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Rigid price filters create blind spots.</h2>
            <p className="mt-4 text-zinc-600 text-lg">Traditional car sites push you into hard price boxes. Great options slightly above or below your number never even show up. The result is frustration, endless tabs, and second-guessing.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-zinc-200">
                <h3 className="font-medium text-zinc-900">Missed opportunities</h3>
                <p className="mt-2 text-sm text-zinc-600">A car at +$500 may be the perfect fit—but rigid filters hide it.</p>
              </div>
              <div className="p-5 rounded-xl border border-zinc-200">
                <h3 className="font-medium text-zinc-900">Cognitive overload</h3>
                <p className="mt-2 text-sm text-zinc-600">Too many choices, not enough guidance. Confidence drops, stress rises.</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-zinc-50 to-white border border-zinc-200">
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className={`h-10 rounded-md ${i % 7 === 0 ? 'bg-zinc-900' : 'bg-zinc-200'}`} />
                ))}
              </div>
              <p className="mt-4 text-sm text-zinc-500">A visual metaphor: rigid grids hide the nuanced options you actually want.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Flex your budget. Find your balance.</h2>
            <p className="mt-4 text-zinc-600 text-lg">Set a budget range, not a wall. Our intent-aware engine explores slightly above and below to surface options that feel right—without pushing you into overspend.</p>
            <ul className="mt-6 space-y-3 text-zinc-700">
              <li className="flex items-center gap-3"><SlidersHorizontal className="h-5 w-5 text-zinc-900" /> Flexible budget bands</li>
              <li className="flex items-center gap-3"><Compass className="h-5 w-5 text-zinc-900" /> Intent-aware discovery</li>
              <li className="flex items-center gap-3"><Gauge className="h-5 w-5 text-zinc-900" /> Real-time recommendation tuning</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="p-6 rounded-2xl bg-white border border-zinc-200">
              <BudgetDemo />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BudgetDemo() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm text-zinc-500">Suggested range</p>
          <p className="text-2xl font-semibold text-zinc-900">$18,500 – $22,000</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-zinc-500">Flex</p>
          <p className="text-2xl font-semibold text-emerald-600">+/- 12%</p>
        </div>
      </div>
      <div className="mt-6">
        <div className="h-2 rounded-full bg-zinc-100">
          <div className="h-2 rounded-full bg-zinc-900 w-2/3" />
        </div>
        <div className="mt-2 flex justify-between text-xs text-zinc-500">
          <span>$15k</span>
          <span>$25k</span>
        </div>
      </div>
      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        {['Confidence', 'Value', 'Fit'].map((k, i) => (
          <div key={k} className="p-4 rounded-xl border border-zinc-200">
            <p className="text-sm text-zinc-500">{k}</p>
            <div className="mt-2 h-2 rounded-full bg-zinc-100">
              <div className={`h-2 rounded-full ${i===0?'bg-emerald-600 w-5/6': i===1?'bg-zinc-900 w-2/3':'bg-zinc-700 w-3/4'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    { icon: SlidersHorizontal, title: 'Set your flexible budget', desc: 'Choose a comfort range and how much flex you want around it.' },
    { icon: Compass, title: 'See intent-aware results', desc: 'We weigh your signals and show options slightly above/below when they make sense.' },
    { icon: Gauge, title: 'Adjust in real time', desc: 'Tune what matters—mileage, year, features—and watch recommendations adapt.' },
  ];
  return (
    <section id="how" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">How it works</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="p-6 rounded-2xl border border-zinc-200">
              <s.icon className="h-6 w-6 text-zinc-900" />
              <h3 className="mt-4 font-medium text-zinc-900">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EmotionalBenefits() {
  const items = [
    { icon: Smile, title: 'Less stress', desc: 'A calmer search with fewer second guesses.' },
    { icon: ShieldCheck, title: 'More confidence', desc: 'Clear guidance builds trust in your choice.' },
    { icon: LineChart, title: 'Smarter value', desc: 'See when it’s worth stretching and when to pass.' },
    { icon: Leaf, title: 'Minimal clutter', desc: 'A clean UI that reduces cognitive load.' },
  ];
  return (
    <section id="benefits" className="py-24 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Feel simpler. Decide smarter.</h2>
            <p className="mt-4 text-zinc-600 text-lg">We design for humans first—so your car search feels supportive, not overwhelming.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {items.map((it) => (
                <div key={it.title} className="p-5 rounded-xl border border-zinc-200 bg-white">
                  <it.icon className="h-5 w-5 text-zinc-900" />
                  <h3 className="mt-3 font-medium text-zinc-900">{it.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative p-6 rounded-2xl bg-white border border-zinc-200">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className={`h-10 rounded-md ${i % 9 === 0 ? 'bg-emerald-600' : 'bg-zinc-200'}`} />
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-500">A calmer canvas: fewer distractions, more clarity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureHighlights() {
  const features = [
    { title: 'Flexible budget slider', desc: 'Set soft edges around what you can spend.' },
    { title: 'Smart recommendations', desc: 'Intent-aware suggestions tuned to your signals.' },
    { title: 'Personalized discovery', desc: 'See cars that fit your life, not just your filter.' },
    { title: 'Distraction-free UI', desc: 'A premium, minimal interface that stays out of the way.' },
  ];
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Highlights</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {features.map((f, idx) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="p-6 rounded-2xl border border-zinc-200">
              <h3 className="font-medium text-zinc-900">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutDesign() {
  return (
    <section id="about" className="py-24 bg-zinc-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">Design with empathy. Build for clarity.</h2>
        <p className="mt-4 text-zinc-600 text-lg">We believe the luxury of simplicity comes from thoughtful restraint. By bridging human emotion and digital intelligence, we reduce decision fatigue and help you choose with confidence.</p>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section id="cta" className="py-24 bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Start your balanced search</h2>
        <p className="mt-4 text-zinc-300 text-lg">Explore flexible options instead of rigid filters. Your next car, without the overwhelm.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-white text-zinc-900 px-5 py-3 font-medium hover:bg-zinc-200 transition">
            Begin searching
          </a>
          <a href="#solution" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
            Learn how it works
          </a>
        </div>
      </div>
    </section>
  );
}
