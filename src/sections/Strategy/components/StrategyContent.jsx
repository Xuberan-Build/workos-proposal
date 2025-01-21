import React from 'react';
import OverviewSection from './OverviewSection';
import CampaignSection from './CampaignSection';
import PersonasSection from './PersonasSection';
import AccountTargetingSection from './AccountTargetingSection';
import MetricsSection from './ABMStrategySection';

const StrategyContent = ({ currentSection }) => {
  const renderSection = () => {
    switch (currentSection) {
      case 'overview':
        return <OverviewSection />;
      case 'campaign':
        return <CampaignSection />;
      case 'personas':
        return <PersonasSection />;
      case 'targeting':
        return <AccountTargetingSection />;
      case 'metrics':
        return <MetricsSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
      {renderSection()}
    </div>
  );
};

export default StrategyContent;
