import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Image,
  Database,
  FileText,
  BarChart2,
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

const DeliverableContent = ({ primaryItems, secondaryItems }) => (
  <div className="space-y-6">
    <div>
      <h4 className="text-lg font-medium text-white mb-4">Core Deliverables</h4>
      <div className="grid md:grid-cols-2 gap-4">
        {primaryItems.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-indigo-400 mb-2">{item.title}</h4>
            <p className="text-slate-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-lg font-medium text-white mb-4">Additional Assets</h4>
      <ul className="space-y-2">
        {secondaryItems.map((item, index) => (
          <li key={index} className="text-slate-300 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const DeliverablesSection = () => {
  const deliverables = [
    {
      title: "Digital Advertising Assets",
      icon: <Image className="w-5 h-5 text-indigo-400" />,
      primaryItems: [
        {
          title: "Social Media Campaigns",
          desc: "Complete ad sets for LinkedIn and Meta platforms"
        },
        {
          title: "Display Advertising",
          desc: "Programmatic and targeted display creative assets"
        },
        {
          title: "Message Sequences",
          desc: "Multi-touch sponsored message campaigns"
        },
        {
          title: "Retargeting Assets",
          desc: "Persona-specific retargeting creative sets"
        }
      ],
      secondaryItems: [
        "A/B testing variants",
        "Custom audience templates",
        "Campaign tracking pixels",
        "Performance optimization guidelines"
      ]
    },
    {
      title: "HubSpot Implementation",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      primaryItems: [
        {
          title: "Account Targeting",
          desc: "Detailed target account lists and scoring criteria"
        },
        {
          title: "Persona Framework",
          desc: "Comprehensive persona definitions and segments"
        },
        {
          title: "Workflow Architecture",
          desc: "Multi-stage nurture and engagement flows"
        },
        {
          title: "Pipeline Setup",
          desc: "Custom pipeline stages and conversion points"
        }
      ],
      secondaryItems: [
        "Custom property configurations",
        "Automation rules",
        "Lead scoring models",
        "Integration specifications"
      ]
    },
    {
      title: "Content Assets",
      icon: <FileText className="w-5 h-5 text-indigo-400" />,
      primaryItems: [
        {
          title: "Technical Content",
          desc: "Implementation guides and API documentation"
        },
        {
          title: "Marketing Content",
          desc: "Blog posts, whitepapers, and case studies"
        },
        {
          title: "Sales Enablement",
          desc: "Pitch decks, battle cards, and email templates"
        },
        {
          title: "Landing Pages",
          desc: "Conversion-optimized campaign pages"
        }
      ],
      secondaryItems: [
        "SEO optimization guidelines",
        "Content distribution plan",
        "Asset management system",
        "Content performance metrics"
      ]
    },
    {
      title: "Reporting Dashboards",
      icon: <BarChart2 className="w-5 h-5 text-indigo-400" />,
      primaryItems: [
        {
          title: "Campaign Analytics",
          desc: "Real-time performance tracking and insights"
        },
        {
          title: "ROI Measurement",
          desc: "Investment tracking and return analysis"
        },
        {
          title: "Pipeline Metrics",
          desc: "Conversion and velocity measurements"
        },
        {
          title: "Attribution Models",
          desc: "Multi-touch attribution reporting"
        }
      ],
      secondaryItems: [
        "Custom report templates",
        "Executive summaries",
        "Weekly performance snapshots",
        "Optimization recommendations"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">Required Deliverables</h2>
      <div className="space-y-6">
        {deliverables.map((section, index) => (
          <ExpandableCard
            key={index}
            title={section.title}
            icon={section.icon}
            defaultExpanded={index === 0}
          >
            <DeliverableContent
              primaryItems={section.primaryItems}
              secondaryItems={section.secondaryItems}
            />
          </ExpandableCard>
        ))}
      </div>
    </div>
  );
};

export default DeliverablesSection;
