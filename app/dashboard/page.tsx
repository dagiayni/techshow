import { Users, Package, Eye, MessageSquare } from "lucide-react";

export default function DashboardOverview() {
  const stats = [
    { name: "Total Products", value: "124", icon: Package, change: "+12%", changeType: "positive" },
    { name: "Total Views", value: "45,231", icon: Eye, change: "+24%", changeType: "positive" },
    { name: "Active Inquiries", value: "12", icon: MessageSquare, change: "-4%", changeType: "negative" },
    { name: "Unique Visitors", value: "8,345", icon: Users, change: "+18%", changeType: "positive" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
        <p className="text-muted-foreground mt-1">Here's how your showroom is performing today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-card p-6 rounded-2xl border border-border flex flex-col shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">{stat.name}</span>
              <div className="p-2 bg-muted rounded-lg">
                <stat.icon className="h-4 w-4 text-foreground" />
              </div>
            </div>
            <div className="flex items-baseline space-x-3">
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <span className={`text-xs font-semibold ${stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Placeholder for Chart */}
        <div className="lg:col-span-2 bg-card rounded-2xl border border-border p-6 shadow-sm min-h-[400px] flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Views Over Time</h3>
          <div className="flex-1 border-2 border-dashed border-border rounded-xl flex items-center justify-center text-muted-foreground">
            Chart Component (e.g. Recharts) will go here
          </div>
        </div>

        {/* Recent Inquiries List */}
        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm min-h-[400px] flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Recent Inquiries</h3>
          <div className="flex-1 space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start space-x-4 p-3 hover:bg-muted rounded-xl transition-colors">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-medium text-sm">JS</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">John Smith</p>
                  <p className="text-xs text-muted-foreground truncate">Inquiring about Samsung S24 Ultra</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
