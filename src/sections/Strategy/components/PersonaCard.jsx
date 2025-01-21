import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const PersonaCard = ({ title, profile, painPoints, sources, values, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Extract key information
  const role = profile[0];
  const experience = profile[1].replace('experience', '').trim();
  const location = profile[3];

  // Gradient classes based on index
  const gradientClasses = [
    "from-purple-500/20 to-indigo-500/20",
    "from-indigo-500/20 to-blue-500/20",
    "from-blue-500/20 to-cyan-500/20"
  ];

  const currentGradient = gradientClasses[index % 3];

  return (
    <>
      {/* Preview Card */}
      <div className="h-full cursor-pointer group">
        <Card
          onClick={() => setIsOpen(true)}
          className="relative h-full bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col"
        >
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${currentGradient} backdrop-blur-sm`} />

          {/* Content */}
          <CardHeader className="text-center pb-4 pt-8 flex-none relative z-10">
            {/* Profile Image */}
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-indigo-500/30 mx-auto bg-white">
                <img
                  src="https://cdn.prod.website-files.com/621f54116cab10f6e9215d8b/622605f9d95f62a4e94c388e_chip-logo.png"
                  alt={title}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>

            {/* Name and Role */}
            <div className="space-y-3">
              <CardTitle className="text-2xl font-medium tracking-tight">{title}</CardTitle>
              <p className="text-sm text-indigo-200 font-normal">{role}</p>
            </div>
          </CardHeader>

          <CardContent className="pb-8 flex-grow flex flex-col justify-end relative z-10">
            {/* Experience and Location */}
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-slate-400">Experience</p>
                <p className="text-indigo-300">{experience}</p>
              </div>
              <div>
                <p className="text-slate-400">Location</p>
                <p className="text-indigo-300">{location}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dialog remains unchanged */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border-indigo-500/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-medium tracking-tight">{title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-8">
            <div>
              <h4 className="font-medium text-lg text-indigo-200 mb-4">Profile</h4>
              <ul className="space-y-3">
                {profile.map((item, index) => (
                  <li key={index} className="text-slate-300">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg text-indigo-200 mb-4">Pain Points</h4>
              <ul className="space-y-3">
                {painPoints.map((item, index) => (
                  <li key={index} className="text-slate-300">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg text-indigo-200 mb-4">Information Sources</h4>
              <ul className="space-y-3">
                {sources.map((item, index) => (
                  <li key={index} className="text-slate-300">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg text-indigo-200 mb-4">Core Values</h4>
              <ul className="space-y-3">
                {values.map((item, index) => (
                  <li key={index} className="text-slate-300">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PersonaCard;
