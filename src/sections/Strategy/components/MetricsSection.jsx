import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  BarChart2,
  Users,
  TrendingUp,
  ChevronDown,
  ChevronUp,
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

const MetricContent = ({ primaryMetrics, secondaryMetrics }) => (
  <div className="space-y-6">
    <div>
      <h4 className="text-lg font-medium text-white mb-4">Primary Metrics</h4>
      <div className="grid md:grid-cols-2 gap-4">
        {primaryMetrics.map((metric, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-indigo-400 mb-2">{metric.title}</h4>
            <p className="text-slate-300 text-sm">{metric.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-lg font-medium text-white mb-4">Supporting Metrics</h4>
      <ul className="space-y-2">
        {secondaryMetrics.map((metric, index) => (
          <li key={index} className="text-slate-300 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            {metric}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const MetricsSection = () => {
  const metricSections = [
    {
      title: "Campaign Performance Metrics",
      icon: <BarChart2 className="w-5 h-5 text-indigo-400" />,
      primaryMetrics: [
        {
          title: "Marketing Qualified Accounts",
          desc: "Tracking accounts meeting defined qualification criteria"
        },
        {
          title: "Multi-Thread Engagement",
          desc: "Measuring interaction across multiple stakeholders"
        },
        {
          title: "Technical Evaluations",
          desc: "Number of active technical assessment requests"
        },
        {
          title: "POC Success Rate",
          desc: "Conversion rate of proof-of-concept implementations"
        }
      ],
      secondaryMetrics: [
        "Average engagement score per account",
        "Content consumption patterns",
        "Website interaction metrics",
        "Email response rates"
      ]
    },
    {
      title: "Persona-Specific Metrics",
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      primaryMetrics: [
        {
          title: "Engineering Engagement",
          desc: "Technical documentation usage and evaluation completion"
        },
        {
          title: "Sales Team Impact",
          desc: "Pipeline velocity and deal size influence"
        },
        {
          title: "Product Team Adoption",
          desc: "Integration timeline and feature utilization"
        },
        {
          title: "Executive Involvement",
          desc: "C-suite engagement and decision timing"
        }
      ],
      secondaryMetrics: [
        "Resource download rates by role",
        "Event attendance by persona",
        "Feedback submission rates",
        "Feature request patterns"
      ]
    },
    {
      title: "ROI & Financial Metrics",
      icon: <TrendingUp className="w-5 h-5 text-indigo-400" />,
      primaryMetrics: [
        {
          title: "Customer Acquisition Cost",
          desc: "Cost per qualified lead and closed deal"
        },
        {
          title: "Pipeline Generation",
          desc: "Value and volume of opportunities created"
        },
        {
          title: "Revenue Attribution",
          desc: "Direct and influenced revenue tracking"
        },
        {
          title: "Campaign ROI",
          desc: "Overall return on marketing investment"
        }
      ],
      secondaryMetrics: [
        "Marketing-sourced revenue",
        "Deal size variations",
        "Sales cycle length",
        "Customer lifetime value impact"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">Success Metrics & KPIs</h2>
      <div className="space-y-6">
        {metricSections.map((section, index) => (
          <ExpandableCard
            key={index}
            title={section.title}
            icon={section.icon}
            defaultExpanded={index === 0}
          >
            <MetricContent
              primaryMetrics={section.primaryMetrics}
              secondaryMetrics={section.secondaryMetrics}
            />
          </ExpandableCard>
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;
