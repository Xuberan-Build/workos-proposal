import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Rocket,
  Target,
  Users,
  BarChart2,
  ArrowUpRight
} from 'lucide-react';

const FeatureCard = ({ title, description, icon, gradient }) => (
  <div className={`bg-gradient-to-br ${gradient} rounded-lg p-6 backdrop-blur-sm border border-slate-700/50`}>
    <div className="flex items-start gap-4">
      <div className="bg-white/10 rounded-lg p-3">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg text-white mb-2">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const OverviewSection = () => (
  <div className="space-y-8">
    {/* Header Section */}
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 pb-12">
      <div className="relative">
        <h2 className="text-3xl font-bold text-white mb-6">Campaign Strategy Overview</h2>
        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl">
          My strategy combines deep understanding of enterprise B2B software buyers with proven
          demand generation frameworks to create a comprehensive ABM campaign.
        </p>
      </div>
    </div>

    {/* Feature Grid Section with Dark Background */}
    <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700/50">
      <CardHeader>
        <CardTitle>Key Strategy Elements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            title="Buyer-Centric Approach"
            description="Detailed buyer personas based on real-world enterprise software buying patterns, ensuring targeted and relevant engagement."
            icon={<Users className="w-6 h-6 text-indigo-400" />}
            gradient="from-purple-500/20 to-indigo-500/20"
          />

          <FeatureCard
            title="Multi-Threaded Engagement"
            description="Strategic engagement across technical, business, and product stakeholders to build comprehensive buy-in."
            icon={<Target className="w-6 h-6 text-indigo-400" />}
            gradient="from-indigo-500/20 to-blue-500/20"
          />

          <FeatureCard
            title="Data-Driven Targeting"
            description="Sophisticated account targeting methodology based on multiple qualification signals and growth indicators."
            icon={<BarChart2 className="w-6 h-6 text-indigo-400" />}
            gradient="from-blue-500/20 to-cyan-500/20"
          />

          <FeatureCard
            title="Comprehensive Distribution"
            description="Multi-channel content distribution strategy optimized for each stage of the buying journey."
            icon={<Rocket className="w-6 h-6 text-indigo-400" />}
            gradient="from-indigo-500/20 to-blue-500/20"
          />
        </div>
      </CardContent>
    </Card>

    {/* Success Metrics Preview */}
    <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowUpRight className="w-5 h-5 text-indigo-400" />
          Expected Outcomes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Accelerated enterprise deal closure",
            "Reduced technical implementation friction",
            "Increased multi-stakeholder buy-in",
            "Measurable pipeline impact"
          ].map((outcome, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-slate-300">{outcome}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default OverviewSection;
