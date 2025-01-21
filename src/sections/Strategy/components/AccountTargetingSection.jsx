import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Search,
  BarChart3,
  Users,
  Shield,
  Target,
  ArrowUpRight,
  Layers,
  LineChart,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ExpandableCard = ({ title, icon, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <CardHeader
        className="border-b border-slate-700 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
          {isExpanded ?
            <ChevronUp className="w-5 h-5 text-slate-400" /> :
            <ChevronDown className="w-5 h-5 text-slate-400" />
          }
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="p-6">
          {children}
        </CardContent>
      )}
    </Card>
  );
};

const AccountTargetingSection = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">Account Targeting Methodology</h2>

    {/* Data Enrichment Strategy */}
    <ExpandableCard
      title="Data Enrichment Strategy"
      icon={<Search className="w-5 h-5 text-indigo-400" />}
      defaultExpanded={true}
    >
      <div className="space-y-4">
        <p className="text-slate-300">
          Our comprehensive data analysis approach focuses on key indicators of enterprise readiness and growth potential.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: <BarChart3 className="w-5 h-5" />,
              title: "Technology Stack Analysis",
              desc: "Evaluating current authentication systems and integration potential"
            },
            {
              icon: <Users className="w-5 h-5" />,
              title: "Enterprise Customer Presence",
              desc: "Identifying existing enterprise relationships and success patterns"
            },
            {
              icon: <ArrowUpRight className="w-5 h-5" />,
              title: "Recent Funding Events",
              desc: "Tracking investment rounds and growth trajectory"
            },
            {
              icon: <LineChart className="w-5 h-5" />,
              title: "Sales Hiring Patterns",
              desc: "Monitoring enterprise sales team expansion"
            },
            {
              icon: <Shield className="w-5 h-5" />,
              title: "Security Compliance Status",
              desc: "Assessing current security certifications and requirements"
            }
          ].map((item, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400">
                {item.icon}
                <h4 className="font-medium">{item.title}</h4>
              </div>
              <p className="text-slate-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ExpandableCard>

    {/* Account Tiering */}
    <ExpandableCard
      title="Account Tiering"
      icon={<Layers className="w-5 h-5 text-indigo-400" />}
    >
      <div>
        <p className="text-slate-300 mb-6">
          We prioritize accounts based on their immediate need and readiness for enterprise SSO implementation.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Tier 1: Active Enterprise Blockers",
              items: [
                "Currently losing deals due to SSO",
                "Active enterprise security requirements",
                "Immediate need identified"
              ],
              bgClass: "from-purple-500/20 to-indigo-500/20"
            },
            {
              title: "Tier 2: Enterprise Expansion Signals",
              items: [
                "Growing enterprise sales team",
                "Recent enterprise product launches",
                "Security initiatives in progress"
              ],
              bgClass: "from-indigo-500/20 to-blue-500/20"
            },
            {
              title: "Tier 3: Growth Stage Indicators",
              items: [
                "Series B+ funding",
                "Enterprise customer testimonials missing",
                "Competitive position evaluation"
              ],
              bgClass: "from-blue-500/20 to-cyan-500/20"
            }
          ].map((tier, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${tier.bgClass} rounded-lg p-6 backdrop-blur-sm border border-slate-700/50`}
            >
              <h4 className="text-lg font-medium text-white mb-4">{tier.title}</h4>
              <ul className="space-y-3">
                {tier.items.map((item, idx) => (
                  <li key={idx} className="text-slate-300 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ExpandableCard>

    {/* Account Identification Signals */}
    <ExpandableCard
      title="Account Identification Signals"
      icon={<Target className="w-5 h-5 text-indigo-400" />}
    >
      <div>
        <p className="text-slate-300 mb-6">
          We monitor specific signals that indicate an account's readiness and need for enterprise SSO capabilities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Job postings for enterprise sales roles",
            "LinkedIn posts about enterprise expansion",
            "Recent enterprise-focused product launches",
            "Security compliance initiatives",
            "Enterprise customer testimonials missing from site"
          ].map((signal, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-lg p-4 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-400" />
              <p className="text-slate-300">{signal}</p>
            </div>
          ))}
        </div>
      </div>
    </ExpandableCard>
  </div>
);

export default AccountTargetingSection;
