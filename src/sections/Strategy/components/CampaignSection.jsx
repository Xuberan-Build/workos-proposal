import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from "lucide-react";

const ExpandableCard = ({ title, children, defaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card className="mb-4 transition-all duration-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700/50">
      <CardHeader
        className="border-b border-slate-700 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-white">{title}</CardTitle>
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

const CampaignSection = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">Campaign Strategy</h2>

    {/* Campaign Overview Card */}
    <ExpandableCard title="Campaign Overview & Summary" defaultExpanded={true}>
      <div className="space-y-6">
        {/* Campaign Goal */}
        <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg p-6 backdrop-blur-sm border border-slate-700/50">
          <h3 className="text-lg font-semibold text-white mb-3">Campaign Goal</h3>
          <p className="text-slate-300 leading-relaxed">
            Drive enterprise SSO adoption through targeted account-based marketing (ABM)
            focused on B2B SaaS companies experiencing enterprise growth.
          </p>
        </div>

        {/* Strategic Approach */}
        <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-lg p-6 backdrop-blur-sm border border-slate-700/50">
          <h3 className="text-lg font-semibold text-white mb-3">Strategic Approach</h3>
          <ul className="space-y-2">
            {[
              "Multi-threaded personalized engagement across technical, business, and product stakeholders",
              "Persona-specific content journeys and messaging",
              "Data-driven account identification and prioritization",
              "Integrated multi-channel execution"
            ].map((item, idx) => (
              <li key={idx} className="text-slate-300 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ExpandableCard>

    {/* Key Differentiator Card */}
    <ExpandableCard title="Key Differentiator">
      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-6 backdrop-blur-sm border border-slate-700/50">
        <p className="text-slate-300 leading-relaxed">
          One integration, multiple identity providers - enabling rapid enterprise
          readiness with minimal engineering effort
        </p>
      </div>
    </ExpandableCard>

    {/* Expected Outcomes Card */}
    <ExpandableCard title="Expected Outcomes">
      <div className="grid grid-cols-2 gap-4">
        {[
          {
            title: "Accelerated Enterprise Deal Closure",
            desc: "Faster time-to-close for enterprise opportunities",
            gradient: "from-purple-500/20 to-indigo-500/20"
          },
          {
            title: "Reduced Technical Friction",
            desc: "Streamlined implementation process",
            gradient: "from-indigo-500/20 to-blue-500/20"
          },
          {
            title: "Multi-Stakeholder Buy-In",
            desc: "Aligned decision makers across departments",
            gradient: "from-blue-500/20 to-cyan-500/20"
          },
          {
            title: "Measurable Pipeline Impact",
            desc: "Trackable ROI and revenue contribution",
            gradient: "from-indigo-500/20 to-blue-500/20"
          }
        ].map((outcome, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${outcome.gradient} rounded-lg p-6 backdrop-blur-sm border border-slate-700/50`}
          >
            <h4 className="font-medium text-white mb-2">{outcome.title}</h4>
            <p className="text-slate-300 text-sm">{outcome.desc}</p>
          </div>
        ))}
      </div>
    </ExpandableCard>
  </div>
);

export default CampaignSection;
