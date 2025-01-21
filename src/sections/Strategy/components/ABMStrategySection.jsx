import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Code2,
  BarChart3,
  Blocks,
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

const TrackContent = ({ contentFocus, assets }) => (
  <div className="space-y-6">
    <div>
      <h4 className="text-lg font-medium text-white mb-4">Content Focus</h4>
      <div className="grid md:grid-cols-2 gap-4">
        {contentFocus.map((item, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-indigo-400 mb-2">{item.title}</h4>
            <p className="text-slate-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-lg font-medium text-white mb-4">Key Assets & Channels</h4>
      <ul className="space-y-2">
        {assets.map((item, index) => (
          <li key={index} className="text-slate-300 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ABMStrategySection = () => {
  const tracks = [
    {
      title: "Engineering Leadership Track",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      contentFocus: [
        {
          title: "Technical Implementation",
          desc: "Detailed guides and documentation for seamless SSO integration"
        },
        {
          title: "Security Architecture",
          desc: "Comprehensive security protocols and compliance frameworks"
        },
        {
          title: "Compliance Documentation",
          desc: "SOC 2, GDPR, and other relevant compliance certifications"
        },
        {
          title: "Integration Roadmap",
          desc: "Clear timeline and milestones for technical implementation"
        }
      ],
      assets: [
        "Technical documentation portal",
        "GitHub repositories",
        "Engineering blogs",
        "Technical webinars"
      ]
    },
    {
      title: "Revenue Leadership Track",
      icon: <BarChart3 className="w-5 h-5 text-indigo-400" />,
      contentFocus: [
        {
          title: "ROI Analysis",
          desc: "Comprehensive cost-benefit analysis and revenue impact"
        },
        {
          title: "Deal Acceleration",
          desc: "Strategies for shortening enterprise sales cycles"
        },
        {
          title: "Competitive Edge",
          desc: "Positioning against alternative SSO solutions"
        },
        {
          title: "Success Stories",
          desc: "Case studies highlighting enterprise implementation wins"
        }
      ],
      assets: [
        "Sales enablement materials",
        "ROI calculators",
        "Case studies",
        "Executive briefings"
      ]
    },
    {
      title: "Product Leadership Track",
      icon: <Blocks className="w-5 h-5 text-indigo-400" />,
      contentFocus: [
        {
          title: "Integration Planning",
          desc: "Detailed roadmap for product integration milestones"
        },
        {
          title: "UX Design",
          desc: "User experience workflows and implementation guides"
        },
        {
          title: "Feature Analysis",
          desc: "Comprehensive feature comparison and gap analysis"
        },
        {
          title: "Timeline Planning",
          desc: "Implementation schedule and resource allocation"
        }
      ],
      assets: [
        "Product documentation",
        "UX workflows",
        "Integration guides",
        "Product workshops"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">Account-Based Marketing Strategy</h2>
      <div className="space-y-6">
        {tracks.map((track, index) => (
          <ExpandableCard
            key={index}
            title={track.title}
            icon={track.icon}
            defaultExpanded={index === 0}
          >
            <TrackContent
              contentFocus={track.contentFocus}
              assets={track.assets}
            />
          </ExpandableCard>
        ))}
      </div>
    </div>
  );
};

export default ABMStrategySection;
