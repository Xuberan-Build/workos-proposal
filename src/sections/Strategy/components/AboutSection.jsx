import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  BrainCircuit,
  Target,
  Code2,
  Workflow,
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

const ExpertiseContent = ({ primarySkills, supportingSkills }) => (
  <div className="space-y-6">
    <div>
      <h4 className="text-lg font-medium text-white mb-4">Core Competencies</h4>
      <div className="grid md:grid-cols-2 gap-4">
        {primarySkills.map((skill, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-indigo-400 mb-2">{skill.title}</h4>
            <p className="text-slate-300 text-sm">{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-lg font-medium text-white mb-4">Additional Skills</h4>
      <ul className="space-y-2">
        {supportingSkills.map((skill, index) => (
          <li key={index} className="text-slate-300 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const AboutSection = () => {
  const expertiseSections = [
    {
      title: "Strategic Thinking",
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
      primarySkills: [
        {
          title: "Campaign Development",
          desc: "Proven track record in developing comprehensive, data-driven marketing campaigns"
        },
        {
          title: "B2B SaaS Expertise",
          desc: "Deep understanding of enterprise software sales cycles and dynamics"
        },
        {
          title: "Market Analysis",
          desc: "Skilled in identifying market opportunities and competitive positioning"
        },
        {
          title: "Growth Strategy",
          desc: "Experience in developing scalable go-to-market strategies"
        }
      ],
      supportingSkills: [
        "Stakeholder management",
        "Business case development",
        "Resource optimization"
      ]
    },
    {
      title: "Technical Expertise",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      primarySkills: [
        {
          title: "Product Marketing",
          desc: "Experience in technical product positioning and messaging"
        },
        {
          title: "Enterprise Sales",
          desc: "Track record of supporting complex enterprise sales cycles"
        },
        {
          title: "Security & Compliance",
          desc: "Understanding of enterprise security requirements and standards"
        },
        {
          title: "Integration Strategy",
          desc: "Experience with technical implementation planning"
        }
      ],
      supportingSkills: [
        "Technical writing",
        "Solution architecture",
      ]
    },
    {
      title: "Marketing Operations",
      icon: <Workflow className="w-5 h-5 text-indigo-400" />,
      primarySkills: [
        {
          title: "Marketing Automation",
          desc: "Expertise in implementing and optimizing marketing automation systems"
        },
        {
          title: "ABM Strategy",
          desc: "Proven success in account-based marketing campaigns"
        },
        {
          title: "Multi-Channel Execution",
          desc: "Experience in coordinating complex marketing initiatives"
        },
        {
          title: "Content Strategy",
          desc: "Skilled in developing persona-driven content frameworks"
        }
      ],
      supportingSkills: [
        "Marketing analytics",
        "Lead scoring models",
        "Campaign attribution",
        "Budget management"
      ]
    },
    {
      title: "Performance Focus",
      icon: <Target className="w-5 h-5 text-indigo-400" />,
      primarySkills: [
        {
          title: "Results Tracking",
          desc: "Strong focus on measurable outcomes and KPI achievement"
        },
        {
          title: "Pipeline Generation",
          desc: "History of driving significant pipeline growth"
        },
        {
          title: "Revenue Impact",
          desc: "Demonstrated ability to influence revenue objectives"
        },
        {
          title: "Process Optimization",
          desc: "Experience in improving marketing efficiency and effectiveness"
        }
      ],
      supportingSkills: [
        "Performance dashboards",
        "ROI analysis",
        "Conversion optimization",
        "A/B testing methodology"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">About Me & Why I'm The Right Fit</h2>
      <div className="space-y-6">
        {expertiseSections.map((section, index) => (
          <ExpandableCard
            key={index}
            title={section.title}
            icon={section.icon}
            defaultExpanded={index === 0}
          >
            <ExpertiseContent
              primarySkills={section.primarySkills}
              supportingSkills={section.supportingSkills}
            />
          </ExpandableCard>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
