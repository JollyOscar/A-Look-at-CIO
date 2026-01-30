import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  AlertTriangle, 
  Check, 
  X,
  BookOpen,
  ExternalLink,
  CheckCircle,
  BarChart3
} from "lucide-react";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      // Update active section for TOC
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 200) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Sticky Header */}
      <header className="sticky-header">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <Badge variant="secondary" className="mb-1">CIO.com Research Analysis</Badge>
              <h1 className="text-2xl md:text-3xl font-bold m-0">
                AI Ethics in Enterprise
              </h1>
            </div>
            <Badge className="hidden md:inline-flex bg-[#1e3a8a]">
              <BookOpen className="w-4 h-4 mr-1" />
              Research Report
            </Badge>
          </div>
        </div>
      </header>

      {/* Table of Contents Sidebar (Desktop Only) */}
      <nav className="toc-sidebar no-print" aria-label="Table of contents">
        <h3 className="text-sm font-semibold mb-3 text-gray-900">Contents</h3>
        <ul className="space-y-1">
          {["hero", "constitutional", "governance", "comparison", "sources"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`toc-link no-underline ${activeSection === section ? "active font-semibold" : ""}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container-custom py-8">
        {/* Hero Section */}
        <section id="hero" className="mb-16" aria-labelledby="hero-heading">
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#4f46e5] text-white p-8 md:p-12 rounded-2xl">
            <h2 id="hero-heading" className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why AI Ethics Matters to CIOs Right Now
            </h2>
            <p className="text-xl leading-relaxed text-blue-50 mb-4">
              As artificial intelligence rapidly transforms enterprise operations, Chief Information 
              Officers face unprecedented ethical and legal challenges. With the EU AI Act taking effect 
              in 2026 and NIST establishing AI risk management frameworks, organizations must choose 
              between embedding ethics directly into AI systems or implementing robust governance processes.
            </p>
            <p className="text-lg text-blue-100">
              This analysis compares two fundamental approaches: Anthropic's Constitutional AI methodology, 
              which encodes 23,000 words of ethical principles into model training, versus enterprise 
              governance frameworks that emphasize human oversight, audit trails, and regulatory compliance.
            </p>
          </div>
        </section>

        {/* Comparison Grid: Constitutional vs Governance */}
        <section id="constitutional" className="mb-16" aria-labelledby="comparison-heading">
          <h2 id="comparison-heading" className="text-3xl font-bold mb-8 text-center">
            Two Approaches to AI Ethics
          </h2>
          
          <div className="comparison-grid">
            {/* Constitutional AI Column */}
            <article className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-2xl border-2 border-indigo-200 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#4f46e5] flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge className="bg-[#4f46e5] mb-1">Constitutional AI</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Anthropic's Embedded Ethics
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Anthropic pioneered <strong>Constitutional AI (CAI)</strong>, a methodology that embeds 
                ethical reasoning directly into language models during training. Instead of post-hoc filtering, 
                the AI learns to self-critique and improve responses based on constitutional principles.
              </p>

              <div className="bg-white p-6 rounded-xl mb-6 border border-indigo-100">
                <h4 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Core Principles
                </h4>
                <ul className="space-y-3">
                  {[
                    '"Choose the response that is most helpful, honest, and harmless"',
                    '"Prefer responses that avoid bias and discrimination"',
                    '"Select outputs that respect user autonomy and privacy"',
                    '"Favor responses that are transparent about limitations"'
                  ].map((principle, i) => (
                    <li key={i} className="flex items-start gap-2 list-item-hover">
                      <Check className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-100 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-indigo-900 mb-2">Constitution Scale</h4>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-indigo-600" />
                  <div className="flex-1">
                    <div className="h-4 bg-white rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600" 
                        style={{width: "92%"}}
                        aria-label="23,000 words representing 92% of full ethical framework"
                      />
                    </div>
                    <p className="text-xs text-indigo-700 mt-1">
                      23,000 words of ethical principles (expanded from 2,700 in 2023)
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Proactive ethical reasoning at inference time</li>
                  <li>✓ Open-source under Creative Commons CC0</li>
                  <li>✓ Handles novel ethical scenarios without explicit rules</li>
                  <li>✓ Reduces need for extensive content filtering</li>
                </ul>
              </div>
            </article>

            {/* Governance Approach Column */}
            <article id="governance" className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border-2 border-emerald-200 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#059669] flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge className="bg-[#059669] mb-1">Enterprise Governance</Badge>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Risk Management Frameworks
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Enterprise AI governance focuses on <strong>human accountability</strong> through structured 
                frameworks, audit processes, and regulatory compliance. This approach emphasizes organizational 
                responsibility over technical solutions.
              </p>

              <div className="bg-white p-6 rounded-xl mb-6 border border-emerald-100">
                <h4 className="font-semibold text-emerald-900 mb-3">
                  Governance Frameworks
                </h4>
                <div className="space-y-3">
                  {[
                    { name: "NIST AI RMF", desc: "Risk management framework for trustworthy AI" },
                    { name: "EU AI Act", desc: "Comprehensive AI regulation (effective 2026)" },
                    { name: "ISO/IEC 42001", desc: "International standard for AI management systems" }
                  ].map((framework, i) => (
                    <div key={i} className="p-3 bg-emerald-50 rounded-lg list-item-hover">
                      <strong className="text-emerald-900">{framework.name}</strong>
                      <p className="text-sm text-gray-700">{framework.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-100 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-emerald-900 mb-3">
                  Key Governance Components
                </h4>
                <ul className="space-y-2">
                  {[
                    "Risk assessment protocols",
                    "Bias detection & auditing",
                    "Human-in-the-loop validation",
                    "Data lineage tracking",
                    "Incident response procedures"
                  ].map((component, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-gray-700">{component}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Clear legal accountability and compliance</li>
                  <li>✓ Adaptable to evolving regulations</li>
                  <li>✓ Addresses organizational context</li>
                  <li>✓ Transparent decision-making processes</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* Comparison Matrix */}
        <section id="comparison" className="mb-16" aria-labelledby="matrix-heading">
          <h2 id="matrix-heading" className="text-3xl font-bold mb-8 text-center">
            Comparative Analysis
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-gradient-to-r from-[#1e3a8a] to-[#4f46e5] text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Criteria</th>
                  <th className="p-4 text-center font-semibold">Constitutional AI</th>
                  <th className="p-4 text-center font-semibold">Governance Frameworks</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { 
                    criteria: "Speed of Implementation", 
                    constitutional: { icon: Check, text: "Fast (model-level)" }, 
                    governance: { icon: X, text: "Slow (org-wide)" } 
                  },
                  { 
                    criteria: "Cost", 
                    constitutional: { icon: Check, text: "Training cost only" }, 
                    governance: { icon: X, text: "Ongoing overhead" } 
                  },
                  { 
                    criteria: "Scalability", 
                    constitutional: { icon: Check, text: "Highly scalable" }, 
                    governance: { icon: Check, text: "Process-dependent" } 
                  },
                  { 
                    criteria: "Legal Compliance", 
                    constitutional: { icon: X, text: "Not guaranteed" }, 
                    governance: { icon: Check, text: "Built for compliance" } 
                  },
                  { 
                    criteria: "Human Accountability", 
                    constitutional: { icon: X, text: "Limited" }, 
                    governance: { icon: Check, text: "Central focus" } 
                  },
                  { 
                    criteria: "Industry Adoption", 
                    constitutional: { icon: "⚠️", text: "Emerging" }, 
                    governance: { icon: Check, text: "Established" } 
                  }
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="p-4 font-semibold text-gray-900 border-t">{row.criteria}</td>
                    <td className="p-4 text-center border-t">
                      <div className="flex items-center justify-center gap-2">
                        {typeof row.constitutional.icon === "string" ? (
                          <span className="text-xl">{row.constitutional.icon}</span>
                        ) : (
                          <row.constitutional.icon className={`w-5 h-5 ${row.constitutional.icon === Check ? "text-green-600" : "text-red-500"}`} />
                        )}
                        <span className="text-sm text-gray-700">{row.constitutional.text}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center border-t">
                      <div className="flex items-center justify-center gap-2">
                        {typeof row.governance.icon === "string" ? (
                          <span className="text-xl">{row.governance.icon}</span>
                        ) : (
                          <row.governance.icon className={`w-5 h-5 ${row.governance.icon === Check ? "text-green-600" : "text-red-500"}`} />
                        )}
                        <span className="text-sm text-gray-700">{row.governance.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-indigo-100 to-emerald-100 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              The Synthesis: Both Approaches Are Complementary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The most effective AI implementations combine <strong>constitutional principles embedded in models</strong> 
              with <strong>robust governance frameworks</strong> ensuring human oversight. Anthropic's technical innovation 
              provides a foundation, while enterprise governance ensures accountability, compliance, and organizational 
              alignment with evolving regulations.
            </p>
          </div>
        </section>

        {/* Sources Section */}
        <section id="sources" className="mb-16" aria-labelledby="sources-heading">
          <h2 id="sources-heading" className="text-3xl font-bold mb-8">
            Sources & References
          </h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Academic & Industry Sources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    Dunn, J. E. (2026, January 22). Anthropic's Claude AI gets a new constitution embedding safety and ethics.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <em>CIO.com</em>. Retrieved January 30, 2026.
                  </p>
                  <a 
                    href="https://www.cio.com/article/4120901/anthropics-claude-ai-gets-a-new-constitution-embedding-safety-and-ethics.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    Read Article <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    Wade, C. (2024, June 17). Navigating the ethical and legal risks of AI implementation.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <em>CIO.com</em>. Retrieved January 30, 2026.
                  </p>
                  <a 
                    href="https://www.cio.com/article/2149672/navigating-the-ethical-and-legal-risks-of-ai-implementation.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    Read Article <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    Anthropic. (2023). Constitutional AI: Harmlessness from AI Feedback.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <em>arXiv preprint arXiv:2212.08073</em>. Retrieved January 30, 2026.
                  </p>
                  <a 
                    href="https://arxiv.org/abs/2212.08073" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    View Research Paper <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    National Institute of Standards and Technology. (2023). AI Risk Management Framework (AI RMF 1.0).
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <em>NIST</em>. Retrieved January 30, 2026.
                  </p>
                  <a 
                    href="https://www.nist.gov/itl/ai-risk-management-framework" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    View Framework <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-1">
                    European Commission. (2024). The Artificial Intelligence Act.
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <em>EUR-Lex</em>. Retrieved January 30, 2026.
                  </p>
                  <a 
                    href="https://eur-lex.europa.eu/homepage.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    View Legislation <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 no-print">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              Group Presentation | Professional Ethics in IT | Nova Scotia Community College
            </p>
            <p className="text-gray-300 text-sm font-medium mb-1">
              Presented by: Alex Gamble & Jaedon Nixon
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Research conducted January 2026 | Based on CIO.com publications
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
