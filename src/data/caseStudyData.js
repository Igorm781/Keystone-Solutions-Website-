export const caseStudy = {
  label: "CASE STUDY",
  title: "MAINTENANCE CLERK & PM ASSET TRACKING OVERHAUL",
  descriptor: "Mid-Market Heavy Production Industrial Manufacturer · Maintenance Department Optimization",
  
  profile: {
    revenue: "Mid-Market Scale",
    teamSize: "Heavy Production & Maintenance Department",
    techStack: [
      "Legacy Asset Tracker",
      "ERP Database",
      "Maintenance Logs",
      "RedZone"
    ]
  },
  
  challenge: {
    description: "Our client, a mid-market heavy production industrial manufacturer, suffered from faulty tracking of labor to their assets, and also were in the need of a Maintenance Clerk. With information not being accounted for accurately, true cost of labor and true assurance of their equipment were slipping through their fingers. Legacy systems, broken and tedious workflows, and lastly, the need to fill in a position was creating friction between departments. The Clerk Position, once payroll taxes and benefits are counted, represents roughly $52K-$60K per year. Putting aside the price to onboard someone, the real problem came from the work itself quietly snowballing larger as the time passed.",
    metrics: [
      { label: "Clerk Position Cost", value: "$52K-$60K" },
      { label: "Initial Workflows Mapped", value: "3" },
      { label: "Total Steps involved", value: "20+" }
    ]
  },
  
  audit: {
    duration: "45 Days",
    description: "An FDE embedded with the operations team to log day-to-day actions mapped 3 workflows amounting to over 20 steps in the process. Over a roughly 45-day audit, we shadowed the maintenance workflows as they were actually performed, not just as documented, but how they truly ran. The outcome was a dramatic simplification. We took the 3 workflows and rebuilt them into 2 streamlined workflows with only 12 steps, the last being human approval. That's a 40% reduction of steps to complete a process, and as for the Clerk Position, more than 90% of the role's documented responsibilities could be handled by a system.",
    findings: [
      "Clerk position documentation showed 90%+ tasks could be automated by system logic",
      "Maintenance workflow tracking was inconsistent and prone to human error",
      "Over 20 manual steps were required to log a single labor-to-asset event"
    ]
  },
  
  architecture: {
    description: "Instead of hiring additional staff or performing a full system migration, we built a lightweight, model-agnostic agentic operating layer on top of their existing databases and physical logs. We deployed our specialized models:",
    agents: [
      {
        name: "Labor Tracking",
        role: "Automates the capture of labor hours and directly maps them to physical production assets in real-time.",
        capability: "99.4% matching accuracy across handwritten timesheets and digital check-ins."
      },
      {
        name: "Maintenance Dispatch",
        role: "Automatically schedules preventive work orders and flags anomalies in equipment telemetry or maintenance schedules.",
        capability: "Interfaces with floor monitors to predict maintenance events before failure."
      },
      {
        name: "Approval Routing Coordinator",
        role: "Manages escalation workflows and pings managers on RedZone for final human approval on high-value parts or overtime.",
        capability: "Determines priority based on asset criticality and budget thresholds."
      }
    ]
  },
  
  timeline: [
    { month: "Month 01", focus: "Maintenance Audit", result: "Shadowed maintenance workflows on the floor, mapping 3 manual processes and logging over 20 steps." },
    { month: "Month 02", focus: "Re-engineering & Pilot Agent", result: "Completed audit, streamlined steps down to 12, and launched initial Labor Tracking pilot agent to prove floor telemetry." },
    { month: "Month 03", focus: "Full Operating Layer Deployment", result: "Scaled multi-agent system handling 90%+ of clerk responsibilities with human-in-the-loop approval." }
  ],
  
  results: [
    { label: "Active Workflows", before: "3 processes", after: "2 processes", detail: "Consolidated & simplified" },
    { label: "Workflow Steps", before: "20 steps", after: "12 steps", detail: "40% reduction in steps" },
    { label: "Clerk Tasks Automated", before: "0%", after: "90%+", detail: "Handled by agentic system" },
    { label: "Clerk Position Cost", before: "$52K-$60K", after: "$0/yr", detail: "Roles automated & saved" },
    { label: "Labor Tracking Accuracy", before: "Faulty", after: "99.8%", detail: "Precise labor-to-asset mapping" },
    { label: "Process Overhead", before: "High Friction", after: "Streamlined", detail: "Final human approval step only" }
  ],
  
  roi: {
    value: "$67,000",
    gross: "$79,000",
    discount: "-$12,000",
    methodology: "Gross savings across direct clerk labor avoidance ($52,000), labor allocation correction ($15,000), and asset assurance boost ($12,000) total $79,000. Applying our strict 15% under-claiming discount buffer (-$12,000) yields an estimated net year-one savings of $67,000.",
    drivers: [
      { driver: "Clerk Labor Savings", amount: "$52,000", method: "Automated 90%+ of documented clerk tasks based on $52K-$60K salary range." },
      { driver: "Labor Allocation Delta", amount: "$15,000", method: "Corrected asset labor tracking leakage and billing discrepancies." },
      { driver: "Asset Assurance Boost", amount: "$12,000", method: "Reduced equipment downtime through automated work-order dispatching." }
    ]
  },
  
  crossImpact: "Importantly, automated tracking cleared reporting bottlenecks 65% faster. This third-order effect resulted in maintenance dispatchers hitting tight schedules consistently. Internal team satisfaction scores rose by 12% in the first quarter post-launch. These soft benefits are excluded from the conservative financial ROI calculation above."
};
