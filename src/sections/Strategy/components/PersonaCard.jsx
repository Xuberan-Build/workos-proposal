import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const PersonaCard = ({ title, profile, painPoints, sources, values }) => (
  <Card className="p-6">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div>
        <h4 className="font-semibold mb-2">Profile</h4>
        <ul className="space-y-2">
          {profile.map((item, index) => (
            <li key={index} className="text-slate-700">{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Pain Points</h4>
        <ul className="space-y-2">
          {painPoints.map((item, index) => (
            <li key={index} className="text-slate-700">{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Information Sources</h4>
        <ul className="space-y-2">
          {sources.map((item, index) => (
            <li key={index} className="text-slate-700">{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Core Values</h4>
        <ul className="space-y-2">
          {values.map((item, index) => (
            <li key={index} className="text-slate-700">{item}</li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default PersonaCard;
