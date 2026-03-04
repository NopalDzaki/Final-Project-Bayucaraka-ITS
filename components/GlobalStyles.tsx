export default function GlobalStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
html { scroll-behavior: smooth; }

body {
background: radial-gradient(circle at 20% 20%, #dbeafe 0, transparent 30%),
radial-gradient(circle at 80% 0%, #e0f2fe 0, transparent 26%),
radial-gradient(circle at 50% 70%, #e0e7ff 0, transparent 28%),
linear-gradient(180deg, #f8fafc, #e2e8f0);
color: #0f172a;
transition: background-color 0.6s ease, color 0.4s ease;
}

.dark body {
background: radial-gradient(circle at 15% 20%, #0b1c43 0, transparent 32%),
radial-gradient(circle at 85% 0%, #082f49 0, transparent 28%),
radial-gradient(circle at 50% 75%, #0f172a 0, transparent 30%),
linear-gradient(180deg, #020617, #0b1224 50%, #020617 100%);
color: #e2e8f0;
}

.glass {
background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
border: 1px solid rgba(255,255,255,0.14);
box-shadow: 0 20px 60px rgba(2,6,23,0.22);
backdrop-filter: blur(14px);
}

.dark .glass {
background: linear-gradient(135deg, rgba(15,23,42,0.75), rgba(15,23,42,0.35));
border-color: rgba(148,163,184,0.15);
box-shadow: 0 20px 60px rgba(0,0,0,0.55);
}

.gradient-text {
background: linear-gradient(120deg,#60a5fa,#a855f7,#22d3ee,#60a5fa);
background-size:240% 240%;
-webkit-text-fill-color:transparent;
-webkit-background-clip:text;
animation:gradientShift 12s ease infinite;
}

@keyframes gradientShift {
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
}
`,
      }}
    />
  );
}
