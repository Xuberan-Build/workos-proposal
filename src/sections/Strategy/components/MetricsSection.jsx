import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const MetricsSection = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">Success Metrics & KPIs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Campaign Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="text-slate-700">Marketing Qualified Accounts (MQAs)</li>
            <li className="text-slate-700">Multi-thread engagement rate</li>
            <li className="text-slate-700">Technical evaluation requests</li>
            <li className="text-slate-700">POC implementations</li>
            <li className="text-slate-700">Closed won opportunities</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Persona-Specific Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="text-slate-700">Engineering: Technical evaluation completion</li>
            <li className="text-slate-700">Sales: Opportunity pipeline impact</li>
            <li className="text-slate-700">Product: Integration timeline achievement</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default MetricsSection;
