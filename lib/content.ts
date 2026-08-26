export const summary =
  "Application security consultant specialising in authorization and business logic testing across web, REST API, and Android. Reported 200+ findings over 14+ client engagements in insurance, financial services, healthcare, utilities, and manufacturing, including broken object level authorization on payment and claims endpoints and session lifecycle failures missed by prior audits. Independent vulnerability researcher with confirmed findings against NASA, Signicat, and the Government of Canada. Founder of TRIADA, a top 1% nationally ranked CTF team.";

export const engagements = [
  {
    n: "01",
    sector: "Insurance, North America",
    scope: "Web / API / Android",
    desc: "Cross-account object access, token lifecycle flaws, mobile credential storage issues.",
  },
  {
    n: "02",
    sector: "Healthcare and Pharma Services",
    scope: "External",
    desc: "Subdomain takeover, unauthenticated management interfaces, EOL services with known CVEs.",
  },
  {
    n: "03",
    sector: "Utilities and Metering",
    scope: "Web / API",
    desc: "Unauthenticated access via filter bypass, unauthenticated token issuance.",
  },
  {
    n: "04",
    sector: "Industrial Manufacturing",
    scope: "Web",
    desc: "Eight internal workflow apps, vendor and customer master data through capital approval.",
  },
] as const;

export const engagementNotes = [
  {
    title: "Reporting",
    desc: "CVSS v3.1 scoring, CWE mapping, developer-focused remediation.",
  },
  {
    title: "Retest",
    desc: "Walked through with the client engineering team, verified before close.",
  },
  {
    title: "Negative results",
    desc: "Documents what was tested and found sound, not just what broke.",
  },
] as const;

export const experience = [
  {
    role: "Security Consultant",
    org: "Offenlix Labs",
    date: "Aug 2026 – Present",
    bullets: [
      "BOLA across payment, document, and permissions endpoints",
      "Session and JWT lifecycle failures",
      "14+ client-ready pentest reports, CVSS-rated",
    ],
  },
  {
    role: "Security Analyst Intern",
    org: "Offenlix Labs",
    date: "Feb 2026 – Jul 2026",
    bullets: [
      "Unauthenticated data exposure via filter bypass",
      "Android OAuth and biometric flaws via SAST/DAST",
      "Subdomain takeover and EOL CVEs",
    ],
  },
  {
    role: "Founder and Team Lead",
    org: "TRIADA",
    date: "Apr 2024 – Present",
    bullets: [
      "TRIADA CTF 2026: 70+ teams, Rs. 4.3L+ prize pool",
      "Grew team to top 1% on CTFtime nationally",
      "50+ original challenges designed",
    ],
  },
  {
    role: "Core Team Member",
    org: "VULNCON",
    date: "May 2024 – Present",
    bullets: ["Built the event web interface, 500+ attendees"],
  },
] as const;

export const education = {
  org: "Yenepoya University",
  detail: "Bachelor of Computer Applications, specialising in Cybersecurity, Ethical Hacking, and Digital Forensics",
  location: "Bangalore, India",
  date: "Oct 2023 – 2026",
};

export const certifications = [
  { org: "APIsec University", cred: "Certified API Security Analyst (CASA)" },
  { org: "XM Cyber", cred: "Exposure Management Expert" },
] as const;

export const skillGroups = [
  {
    title: "Testing",
    items: ["Authorization & business logic", "Web / API / Android pentesting", "SAST / DAST", "Threat modeling"],
  },
  { title: "Tooling", items: ["Burp Suite", "sqlmap", "Frida", "MobSF", "Nmap", "ffuf", "Ghidra"] },
  { title: "Standards", items: ["OWASP Top 10", "OWASP MASVS", "CVSS v3.1", "CWE"] },
  { title: "Engineering", items: ["Python", "TypeScript", "Next.js", "Prisma", "Docker", "GitHub Actions"] },
] as const;

export const projects = [
  {
    name: "Proct",
    tagline: "Assessment platform with a published threat model.",
    desc: "Quiz platform for institutional assessment built on Next.js, React, Prisma, and NextAuth: 22,000 lines across 29 API routes with 22 test suites. Every integrity control is enforced server-side, including sequencing, timing, and grading, so a tampered browser cannot read ahead, extend its own time, or recover an answer key. Published a threat model separating enforced controls from detection-only signals.",
    tags: ["Next.js", "Prisma", "NextAuth", "Threat modelling"],
  },
  {
    name: "TRIADA News",
    tagline: "AI-enriched threat intelligence pipeline.",
    desc: "Aggregates 34 security sources hourly through GitHub Actions, covering vendor advisories, threat research, national CERTs, and cloud security bulletins. Extracts CVE identifiers, cross-references the CISA Known Exploited Vulnerabilities catalog, and classifies severity. Model output is treated as untrusted input: every AI response is schema-validated and sanitised, with a deterministic rule-based fallback on failure.",
    tags: ["Next.js", "GitHub Actions", "Gemini", "CISA KEV"],
    links: [
      { label: "news.triada.in", href: "https://news.triada.in" },
      { label: "GitHub", href: "https://github.com/Team-Triada/triada-news" },
    ],
  },
  {
    name: "SOC Automation Toolkit",
    tagline: "Python toolkit built for SOC workflows during a TCS engagement.",
    desc: "Log parsing, anomaly detection, and threat-intel enrichment via AbuseIPDB, VirusTotal, and OTX, with automated HTML reporting.",
    tags: ["SOC", "Threat intel", "Automation"],
  },
  {
    name: "TRIADA CTF Platform",
    tagline: "Custom CTFd deployment powering TRIADA CTF 2026.",
    desc: "CTFd v3.8.2 redesigned end to end: tiered sponsor integration, custom frontend, and an Easter-egg challenge flag, serving 150+ players across a 24-hour competition.",
    tags: ["CTFd", "Infra", "Frontend"],
  },
  {
    name: "DorkIQ",
    tagline: "Reconnaissance tool that generates targeted search dorks.",
    desc: "Finds exposed files, admin panels, and misconfigured endpoints across a target's public footprint.",
    tags: ["Recon tooling"],
    links: [{ label: "GitHub", href: "https://github.com/Adarsh-S-R/DorkIQ" }],
  },
  {
    name: "Web Pentesting Playground",
    tagline: "Deliberately vulnerable training application.",
    desc: "Covers 10+ vulnerability classes including SQL injection, XSS, IDOR, SSRF, and insecure file upload, with guided exploitation scenarios used in student training.",
    tags: ["Training platform"],
    links: [{ label: "GitHub", href: "https://github.com/Adarsh-S-R/web-pentest-playground" }],
  },
] as const;

export const communityStats = [
  { value: "Top 1%", label: "CTFtime rank, India" },
  { value: "50+", label: "Challenges authored" },
  { value: "70+", label: "Teams at CTF 2026" },
  { value: "₹5.3L+", label: "Prize pool, all events" },
] as const;

export const communityEvents = [
  {
    name: "TRIADA CTF 2026",
    desc: "24-hour national competition. 70+ teams, 150+ players, 20,359 submissions, prize pool above Rs. 4.3 lakh, secured through direct sponsor outreach, run on in-house CTFd infrastructure.",
  },
  {
    name: "TRIADA CTF 2025",
    desc: "The first CTF held at the university. 100+ participants, challenge design across web, crypto, forensics, and OSINT, sponsorship secured. Established the event that became CTF 2026.",
  },
] as const;

export const achievements = [
  "Top 1% national ranking on CTFtime · Top 1% on TryHackMe",
  "1st Runner Up, Threat Hunting Village CTF, Seasides Goa, 2025",
  "2nd Runner Up, Seasides Offline CTF, 2026",
  "2nd Runner Up, B5CTF, BSides Bangalore",
  "5th Place, bi0s CTF",
  "Finalist, IBM National Hackathon, 2024",
] as const;

export const gallery = [
  {
    src: "/photos/team.png",
    alt: "Adarsh SR with the TRIADA CTF 2026 team, a top 1% nationally ranked CTF team",
    caption: "TRIADA CTF 2026 team",
    w: 2515,
    h: 1059,
  },
  {
    src: "/photos/Adarsh_triada.jpg",
    alt: "Adarsh SR, application security consultant, at CTFx with CloudSEK",
    caption: "CTFx, CloudSEK",
    w: 812,
    h: 707,
  },
  {
    src: "/photos/team.jpg",
    alt: "Adarsh SR at VULNCON 2024, a national cybersecurity conference",
    caption: "VULNCON 2024",
    w: 1061,
    h: 707,
  },
  {
    src: "/photos/img_null.jpg",
    alt: "Adarsh SR at a malware analysis and reverse engineering training session",
    caption: "Malware analysis training",
    w: 1108,
    h: 791,
  },
  {
    src: "/photos/Seasides_thv.jpg",
    alt: "Adarsh SR receiving 1st Runner Up at the Threat Hunting Village CTF, Seasides Goa",
    caption: "Seasides, Goa",
    w: 1565,
    h: 816,
  },
  {
    src: "/photos/vulnteam.jpg",
    alt: "Adarsh SR with the organizing team at VULNCON 2025",
    caption: "VULNCON 2025",
    w: 1108,
    h: 791,
  },
] as const;

export const links = {
  email: "adarshtriada@gmail.com",
  linkedin: "https://linkedin.com/in/adarsh-sr",
  github: "https://github.com/Adarsh-S-R",
  x: "https://x.com/adarsh_sr_",
  ctftime: "https://ctftime.org/team/303057",
  triada: "https://triada.in",
  vulncon: "https://vulncon.in",
  writeups: "https://adarshsr.gitbook.io/writeups/",
  resume: "https://drive.google.com/file/d/1BI2RREeq4Jsf9JGOp1NExh6F5hIzq6j3/view?usp=sharing",
};
