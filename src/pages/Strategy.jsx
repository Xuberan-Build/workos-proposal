import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import OverviewSection from '../sections/Strategy/components/OverviewSection.jsx';
import PersonasSection from '../sections/Strategy/components/PersonasSection.jsx';
import CampaignSection from '../sections/Strategy/components/CampaignSection.jsx';
import AccountTargetingSection from '../sections/Strategy/components/AccountTargetingSection.jsx';
import MetricsSection from '../sections/Strategy/components/MetricsSection.jsx';

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
    id: 'metrics',
    title: 'Success Metrics',
    content: <MetricsSection />
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
            <div className="bg-white rounded-lg shadow-sm border border-slate-200">
              <nav className="p-4 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg transition-colors",
                      currentSection === section.id
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-slate-600 hover:bg-slate-50"
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-3/4">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
              {sections.find(s => s.id === currentSection)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
