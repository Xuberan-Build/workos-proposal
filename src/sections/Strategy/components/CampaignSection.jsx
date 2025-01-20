import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const CampaignSection = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">Campaign Strategy</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Strategic Approach</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="text-slate-700">Multi-threaded personalized engagement</li>
            <li className="text-slate-700">Persona-specific content journeys</li>
            <li className="text-slate-700">Data-driven account identification</li>
            <li className="text-slate-700">Integrated multi-channel execution</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Key Differentiators</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="text-slate-700">One integration, multiple identity providers</li>
            <li className="text-slate-700">Rapid enterprise readiness</li>
            <li className="text-slate-700">Minimal engineering effort required</li>
            <li className="text-slate-700">Comprehensive security compliance</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default CampaignSection;
