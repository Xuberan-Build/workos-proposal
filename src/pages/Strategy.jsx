import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import OverviewSection from '../sections/Strategy/components/OverviewSection.jsx';
import PersonasSection from '../sections/Strategy/components/PersonasSection.jsx';
import CampaignSection from '../sections/Strategy/components/CampaignSection.jsx';
import AccountTargetingSection from '../sections/Strategy/components/AccountTargetingSection.jsx';
import ABMStrategySection from '../sections/Strategy/components/ABMStrategySection.jsx';
import CampaignExecutionSection from '../sections/Strategy/components/CampaignExecutionSection.jsx';
import DeliverablesSection from '../sections/Strategy/components/DeliverablesSection.jsx';
import MetricsSection from '../sections/Strategy/components/MetricsSection.jsx';
import AboutSection from '../sections/Strategy/components/AboutSection.jsx';

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    content: <OverviewSection />
  },
  {
    id: 'campaign',
    title: 'Campaign Strategy',
    content: <CampaignSection />
  },
  {
    id: 'personas',
    title: 'Target Personas',
    content: <PersonasSection />
  },
  {
    id: 'targeting',
    title: 'Account Targeting',
    content: <AccountTargetingSection />
  },
  {
    id: 'abm-strategy',
    title: 'Account-Based Marketing Strategy',
    content: <ABMStrategySection />
  },
  {
    id: 'execution',
    title: 'Multi-Channel Campaign Execution',
    content: <CampaignExecutionSection />
  },
  {
    id: 'deliverables',
    title: 'Required Deliverables',
    content: <DeliverablesSection />
  },
  {
    id: 'metrics',
    title: 'Success Metrics & KPIs',
    content: <MetricsSection />
  },
  {
    id: 'about',
    title: 'About Me',
    content: <AboutSection />
  }
];

const Strategy = () => {
  const [currentSection, setCurrentSection] = useState(sections[0].id);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Left Navigation */}
          <div className="w-1/4 sticky top-24">
            <div className="bg-white rounded-lg shadow-sm border border-indigo-100">
              <nav className="p-4 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg transition-colors",
                      currentSection === section.id
                        ? "bg-indigo-50 text-indigo-600 font-medium border border-indigo-100"
                        : "text-slate-600 hover:bg-indigo-50/50"
                    )}
                    style={{
                      backgroundColor: currentSection === section.id ? '#c5cae8' : '',
                      color: currentSection === section.id ? '#6363f1' : ''
                    }}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-3/4">
            <div className="bg-white rounded-lg shadow-sm border border-indigo-100 p-8">
              {sections.find(s => s.id === currentSection)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
