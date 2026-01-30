import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  AlertTriangle, 
  Lightbulb, 
  Globe, 
  Shield, 
  FileText,
  Scale,
  Target
} from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState<"overview" | "article1" | "article2" | "synthesis" | "career">("overview");

  const tabs = [
    { id: "overview", label: "Overview", icon: Globe },
    { id: "article1", label: "Anthropic's Constitution", icon: Shield },
    { id: "article2", label: "AI Implementation Risks", icon: AlertTriangle },
    { id: "synthesis", label: "Synthesis", icon: Scale },
    { id: "career", label: "Career Impact", icon: Target },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-2xl">
              <Badge className="bg-blue-500 text-white mb-4">CIO.com Research</Badge>
              <h2 className="text-3xl font-bold mb-4">Ethics in AI: Two Perspectives</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Exploring how the tech industry is addressing AI ethics through constitutional frameworks 
                and risk management strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-emerald-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-500" />
                    Anthropic's Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Embedding ethics directly into AI through a comprehensive 23,000-word constitution 
                    that guides Claude's reasoning and decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-amber-500">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Risk Management Approach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">
                    Addressing ethical and legal risks through governance frameworks, bias detection, 
                    and human oversight in enterprise AI implementation.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  About CIO.com
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  CIO.com is a premier technology publication serving IT executives and decision-makers. 
                  It provides insights on digital transformation, AI strategy, cybersecurity, and IT leadership.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-slate-800">Target Audience:</strong>
                    <ul className="text-slate-600 mt-2 space-y-1">
                      <li>• Chief Information Officers</li>
                      <li>• IT Executives & Leaders</li>
                      <li>• Technology Decision Makers</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="text-slate-800">Content Focus:</strong>
                    <ul className="text-slate-600 mt-2 space-y-1">
                      <li>• AI & Emerging Technologies</li>
                      <li>• IT Strategy & Governance</li>
                      <li>• Ethics & Risk Management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "article1":
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-2xl">
              <Badge className="bg-white text-emerald-700 mb-3">Article 1</Badge>
              <h2 className="text-2xl font-bold mb-2">
                Anthropic's Claude AI Gets a New Constitution
              </h2>
              <p className="text-emerald-100">By John E. Dunn | January 22, 2026</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  Article Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Anthropic has completely overhauled Claude's constitution—a document that sets ethical 
                  parameters for its AI model's reasoning and behavior. Launched at the World Economic Forum's 
                  Davos Summit, the new 84-page, 23,000-word constitution represents a dramatic expansion from 
                  the original 2,700-word version from May 2023.
                </p>
                
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-emerald-800 mb-3">Core Constitutional Principles</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">1.</span>
                      <span><strong>Broadly Safe:</strong> Not undermining human oversight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">2.</span>
                      <span><strong>Broadly Ethical:</strong> Honest, avoiding harmful actions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">3.</span>
                      <span><strong>Genuinely Helpful:</strong> Benefitting users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">4.</span>
                      <span><strong>Compliant:</strong> Following Anthropic's guidelines</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Key Innovations</h4>
                  <ul className="text-slate-600 space-y-2 text-sm">
                    <li>• Shift from "standalone principles" to philosophical reasoning about <em>why</em> ethics matter</li>
                    <li>• Constitution is ingested by Claude itself during training</li>
                    <li>• Released under Creative Commons CC0 for other developers to use</li>
                    <li>• Addresses AI consciousness as a "serious question worth considering"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="w-5 h-5" />
                  Ethical Implications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">The Core Dilemma</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Can ethics be effectively encoded into AI systems, or does this approach risk 
                      creating a false sense of security? The constitution raises fundamental questions 
                      about whether abstract principles embedded in model weights can truly replace 
                      human judgment and governance.
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Expert Critique</h4>
                    <blockquote className="text-slate-700 text-sm italic border-l-2 border-red-300 pl-4">
                      "Framing them as moral actors risks distracting us from the real issue, which is 
                      human accountability. Ethics in AI should focus on who designs, deploys, validates, 
                      and relies on these systems. No philosophical framework embedded in a model can 
                      replace human judgment, governance, and oversight."
                    </blockquote>
                    <p className="text-slate-500 text-xs mt-2">— Satyam Dhar, AI Engineer at Galileo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "article2":
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-2xl">
              <Badge className="bg-white text-amber-700 mb-3">Article 2</Badge>
              <h2 className="text-2xl font-bold mb-2">
                Navigating Ethical & Legal Risks of AI Implementation
              </h2>
              <p className="text-amber-100">By Dr. Cat Wade, Avaya | June 17, 2024</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-600" />
                  Article Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  As AI becomes integrated into business operations, organizations face significant ethical 
                  and legal challenges. This article examines three interconnected risk categories—legal, 
                  ethical, and reputational—and provides frameworks for responsible AI implementation in 
                  enterprise environments.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Legal Risks</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• EU AI Act compliance</li>
                      <li>• GDPR data privacy</li>
                      <li>• State-by-state US regulations</li>
                      <li>• Cross-border data transfers</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-2">Ethical Risks</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Algorithmic bias</li>
                      <li>• Discrimination</li>
                      <li>• Privacy violations</li>
                      <li>• Rights infringement</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Reputational Risks</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      <li>• Loss of customer trust</li>
                      <li>• Public backlash</li>
                      <li>• Brand damage</li>
                      <li>• Financial impact</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Real-World Example: Amazon's Failed AI Recruiter</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    In 2015, Amazon implemented an AI system to screen job candidate resumes. Despite 
                    attempts to avoid gender discrimination by removing gender mentions, the tool 
                    unintentionally favored male candidates due to biases in the training data. Female 
                    applicants were repeatedly disadvantaged, demonstrating how even well-intentioned 
                    AI systems can perpetuate harmful biases.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="w-5 h-5" />
                  Ethical Framework for Mitigation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Shield className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-800">Bias Detection & Mitigation</h5>
                        <p className="text-sm text-slate-600">Regular audits and diverse training datasets</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Lightbulb className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-800">Transparency & Explainability</h5>
                        <p className="text-sm text-slate-600">Clear decision-making processes with appeal options</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Users className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-800">Fairness & Equity</h5>
                        <p className="text-sm text-slate-600">Benefits distributed across all stakeholders</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-amber-100 p-2 rounded-lg">
                        <Globe className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-slate-800">Robust Governance</h5>
                        <p className="text-sm text-slate-600">AI governance programs with executive oversight</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "synthesis":
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-2xl">
              <Badge className="bg-white text-indigo-700 mb-3">Comparative Analysis</Badge>
              <h2 className="text-2xl font-bold mb-2">Two Approaches to AI Ethics</h2>
              <p className="text-indigo-100">
                Comparing embedded constitutional ethics with governance-based risk management
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-t-4 border-emerald-500">
                <CardHeader>
                  <CardTitle className="text-emerald-700">Anthropic's Approach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-emerald-600 border-emerald-300">Technical Solution</Badge>
                    <p className="text-slate-600 text-sm">
                      Embed ethics directly into the AI model through a comprehensive constitution 
                      that guides reasoning and behavior.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-emerald-800 text-sm mb-2">Strengths</h5>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Proactive ethical reasoning built-in</li>
                      <li>• Open-source promotes industry-wide adoption</li>
                      <li>• Addresses novel situations through principles</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-red-800 text-sm mb-2">Limitations</h5>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• May create false sense of security</li>
                      <li>• Cannot replace human oversight</li>
                      <li>• Abstract principles vs. real-world complexity</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-amber-500">
                <CardHeader>
                  <CardTitle className="text-amber-700">Enterprise Risk Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-amber-600 border-amber-300">Process Solution</Badge>
                    <p className="text-slate-600 text-sm">
                      Implement governance frameworks, audits, and human oversight to manage 
                      ethical and legal risks.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-amber-800 text-sm mb-2">Strengths</h5>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Human accountability remains central</li>
                      <li>• Adaptable to regulatory requirements</li>
                      <li>• Addresses organizational context</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h5 className="font-semibold text-red-800 text-sm mb-2">Limitations</h5>
                    <ul className="text-xs text-slate-700 space-y-1">
                      <li>• Reactive rather than preventive</li>
                      <li>• Requires significant resources</li>
                      <li>• Inconsistent implementation across orgs</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Scale className="w-5 h-5" />
                  Key Insight: Complementary, Not Competing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Both approaches highlight a fundamental truth: <strong>AI ethics requires both 
                  technical and human solutions.</strong> Anthropic's constitution represents an 
                  innovative attempt to build ethics into AI systems, while enterprise risk management 
                  ensures human accountability and governance.
                </p>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-white font-medium">
                    The most ethical AI implementations will likely combine both approaches: 
                    constitution-like principles embedded in models, backed by robust governance 
                    frameworks and human oversight.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "career":
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-2xl">
              <Badge className="bg-white text-teal-700 mb-3">Personal Reflection</Badge>
              <h2 className="text-2xl font-bold mb-2">Implications for Future IT Careers</h2>
              <p className="text-teal-100">
                How these ethical frameworks will shape our professional responsibilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    Key Takeaways
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Ethics must be prioritized alongside technical capabilities",
                      "Human oversight remains essential—AI augments, doesn't replace",
                      "Governance frameworks are critical for responsible deployment",
                      "Regulatory landscape is evolving rapidly (EU AI Act, state laws)",
                      "Bias and fairness require continuous monitoring",
                      "Transparency builds trust with stakeholders"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-teal-500 font-bold">{i + 1}.</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="w-5 h-5 text-blue-500" />
                    Questions to Ask
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Does this AI system have built-in biases?",
                      "Are we transparent about AI use with stakeholders?",
                      "Do we have governance structures in place?",
                      "Can AI decisions be explained and appealed?",
                      "Who is accountable when AI makes mistakes?",
                      "Are we complying with relevant regulations?"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-blue-500">❓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-l-4 border-teal-500">
              <CardHeader>
                <CardTitle className="text-teal-700">Personal Opinion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed mb-4">
                  As future IT professionals, we will face decisions about implementing AI tools. 
                  These articles teach us that ethical AI is not a one-time checkbox—it's an ongoing 
                  commitment that requires both technical solutions (like Anthropic's constitution) 
                  and human governance (like enterprise risk frameworks).
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  I believe the most important lesson is that <strong>we cannot outsource ethics to 
                  technology.</strong> Even the most sophisticated AI constitution cannot replace human 
                  judgment, accountability, and moral responsibility. As IT professionals, we must 
                  become advocates for ethical AI within our organizations—asking hard questions, 
                  demanding transparency, and ensuring that technology serves humanity's best interests.
                </p>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-800 font-medium text-sm">
                    By prioritizing ethics from the start, we can build technology that is not only 
                    innovative but also trustworthy, fair, and beneficial to society.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-slate-800 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Sources</h3>
              <ul className="text-sm space-y-2 text-slate-300">
                <li>• Dunn, J. E. (2026, January 22). Anthropic's Claude AI gets a new constitution embedding safety and ethics. CIO.com.</li>
                <li>• Wade, C. (2024, June 17). Navigating the ethical and legal risks of AI implementation. CIO.com.</li>
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-slate-900 text-white py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <Badge variant="secondary" className="mb-2">Ethics in IT Industry</Badge>
              <h1 className="text-2xl md:text-3xl font-bold">AI Ethics: Two Perspectives</h1>
            </div>
            <Globe className="w-8 h-8 text-slate-400" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex overflow-x-auto py-3 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab(tab.id as any)}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 px-6 text-center text-sm mt-12">
        <p>Group Presentation | Ethics in IT Industry | CIO.com Research</p>
      </footer>
    </div>
  );
}

export default App;
