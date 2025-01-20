import React from 'react';
import PersonaCard from './PersonaCard';

const PersonasSection = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">Target Persona Analysis</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <PersonaCard
        title="Engineering Emma"
        profile={[
          "VP of Engineering / Engineering Director",
          "10-15 years technical experience",
          "Masters in Computer Science (78%)",
          "Tech hubs location",
          "$180,000 - $250,000 base + equity"
        ]}
        painPoints={[
          "Complex security implementation requirements",
          "Limited engineering resources",
          "Compliance and certification needs",
          "Technical debt concerns"
        ]}
        sources={[
          "GitHub",
          "HackerNews",
          "Engineering blogs",
          "Tech conferences"
        ]}
        values={[
          "Technical excellence",
          "Work-life balance",
          "Continuous learning",
          "Environmental sustainability"
        ]}
      />
      <PersonaCard
        title="Growth Gary"
        profile={[
          "CRO / VP of Sales",
          "12-18 years sales experience",
          "MBA (60%), Bachelor's in Business/Marketing",
          "Major business centers location",
          "$200,000 - $300,000 base + commission"
        ]}
        painPoints={[
          "Lost enterprise deals due to SSO requirements",
          "Extended sales cycles",
          "Competitive disadvantage",
          "Revenue growth blockers"
        ]}
        sources={[
          "LinkedIn Sales Navigator",
          "Sales conferences",
          "Revenue/sales podcasts",
          "Sales leadership forums"
        ]}
        values={[
          "Relationship building",
          "Personal development",
          "Goal achievement",
          "Leadership excellence"
        ]}
      />
      <PersonaCard
        title="Product Priya"
        profile={[
          "Head of Product / Senior PM",
          "6-12 years product experience",
          "Bachelor's in CS/Business (65%), MBA (35%)",
          "Mixed between tech hubs and remote",
          "$150,000 - $220,000 base + equity"
        ]}
        painPoints={[
          "Enterprise feature gap",
          "Resource allocation challenges",
          "Time-to-market pressure",
          "User experience consistency"
        ]}
        sources={[
          "Product blogs",
          "Product conferences",
          "PM communities on LinkedIn",
          "Product Management communities"
        ]}
        values={[
          "User-centered design",
          "Innovation",
          "Work flexibility",
          "Continuous learning"
        ]}
      />
    </div>
  </div>
);

export default PersonasSection;
