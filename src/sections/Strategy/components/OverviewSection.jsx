import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const OverviewSection = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Campaign Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="text-slate-700">Detailed buyer personas based on real-world enterprise software buying patterns</li>
            <li className="text-slate-700">Multi-threaded engagement strategy across stakeholders</li>
            <li className="text-slate-700">Data-driven account targeting methodology</li>
            <li className="text-slate-700">Comprehensive content and distribution strategy</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Expected Outcomes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="text-slate-700">Accelerated enterprise deal closure</li>
            <li className="text-slate-700">Reduced technical implementation friction</li>
            <li className="text-slate-700">Increased multi-stakeholder buy-in</li>
            <li className="text-slate-700">Measurable pipeline impact</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default OverviewSection;
