import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const AccountTargetingSection = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">Account Targeting Methodology</h2>
    <div className="grid grid-cols-1 gap-6">
      <Card className="p-6">
        <CardHeader>
          <CardTitle>Account Tiers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Tier 1: Active Enterprise Blockers</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Currently losing deals due to SSO</li>
                <li>Active enterprise security requirements</li>
                <li>Immediate need identified</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Tier 2: Enterprise Expansion Signals</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Growing enterprise sales team</li>
                <li>Recent enterprise product launches</li>
                <li>Security initiatives in progress</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Tier 3: Growth Stage Indicators</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Series B+ funding</li>
                <li>Enterprise customer testimonials missing</li>
                <li>Competitive position evaluation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
);

export default AccountTargetingSection;
