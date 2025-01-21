import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Globe,
  Users,
  Workflow,
  Share2,
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

const StrategyContent = ({ primaryItems, secondaryItems }) => (
  <div className="space-y-6">
    <div>
      <h4 className="text-lg font-medium text-white mb-4">Primary Initiatives</h4>
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
      <h4 className="text-lg font-medium text-white mb-4">Supporting Activities</h4>
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

const CampaignExecutionSection = () => {
  const executionSections = [
    {
      title: "Digital Presence Strategy",
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      primaryItems: [
        {
          title: "Persona-Aligned Landing Pages",
          desc: "Custom landing experiences for engineering, revenue, and product teams"
        },
        {
          title: "Demo Environments",
          desc: "Interactive product demonstrations with role-specific workflows"
        },
        {
          title: "Technical Content Hub",
          desc: "Centralized repository of implementation guides and documentation"
        },
        {
          title: "Community Platform",
          desc: "Dedicated space for technical discussions and knowledge sharing"
        }
      ],
      secondaryItems: [
        "SEO optimization for technical content",
        "Integration showcase gallery",
        "Customer success stories",
        "Technical blog series"
      ]
    },
    {
      title: "Community Engagement",
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      primaryItems: [
        {
          title: "Technical Forums",
          desc: "Active participation in developer communities and tech forums"
        },
        {
          title: "Leadership Networks",
          desc: "Engagement in executive and decision-maker communities"
        },
        {
          title: "Product Communities",
          desc: "Presence in product management and strategy groups"
        },
        {
          title: "Industry Platforms",
          desc: "Targeted presence in vertical-specific communities"
        }
      ],
      secondaryItems: [
        "Weekly technical office hours",
        "Monthly strategy roundtables",
        "Quarterly product roadmap sessions",
        "Regular community AMAs"
      ]
    },
    {
      title: "Marketing Automation",
      icon: <Workflow className="w-5 h-5 text-indigo-400" />,
      primaryItems: [
        {
          title: "HubSpot Implementation",
          desc: "Full-scale marketing automation and pipeline tracking setup"
        },
        {
          title: "Nurture Workflows",
          desc: "Role-based content journeys and engagement paths"
        },
        {
          title: "Lead Scoring",
          desc: "Multi-touch attribution and qualification framework"
        },
        {
          title: "Analytics Dashboard",
          desc: "Real-time campaign performance and ROI tracking"
        }
      ],
      secondaryItems: [
        "A/B testing framework",
        "Conversion tracking",
        "Attribution modeling",
        "Engagement scoring"
      ]
    },
    {
      title: "Content Distribution",
      icon: <Share2 className="w-5 h-5 text-indigo-400" />,
      primaryItems: [
        {
          title: "Social Strategy",
          desc: "Platform-specific content strategy and engagement plan"
        },
        {
          title: "Email Campaigns",
          desc: "Targeted email sequences for different personas and stages"
        },
        {
          title: "Direct Programs",
          desc: "High-touch outreach for priority accounts"
        },
        {
          title: "Event Marketing",
          desc: "Virtual and in-person event strategy"
        }
      ],
      secondaryItems: [
        "Content syndication",
        "Partner co-marketing",
        "Influencer collaboration",
        "PR and media outreach"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">Multi-Channel Campaign Execution</h2>
      <div className="space-y-6">
        {executionSections.map((section, index) => (
          <ExpandableCard
            key={index}
            title={section.title}
            icon={section.icon}
            defaultExpanded={index === 0}
          >
            <StrategyContent
              primaryItems={section.primaryItems}
              secondaryItems={section.secondaryItems}
            />
          </ExpandableCard>
        ))}
      </div>
    </div>
  );
};

export default CampaignExecutionSection;
