import { Store, Users, CreditCard, Activity } from "lucide-react";

export default function AdminOverview() {
  const stats = [
    { name: "Total Stores", value: "284", icon: Store, change: "+12", changeType: "positive" },
    { name: "Active Subscriptions", value: "245", icon: CreditCard, change: "+8", changeType: "positive" },
    { name: "Platform Users", value: "1,204", icon: Users, change: "+124", changeType: "positive" },
    { name: "API Requests/min", value: "8,345", icon: Activity, change: "-2%", changeType: "negative" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Platform Overview</h2>
        <p className="text-muted-foreground mt-1">Super Admin global metrics and system health.</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Stores */}
        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recently Registered Stores</h3>
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground">View All</button>
          </div>
          <div className="flex-1 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 hover:bg-muted rounded-xl transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-muted-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Store className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Store Name {i}</p>
                    <p className="text-xs text-muted-foreground">techhub.et/store-{i}</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* System Health */}
        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm min-h-[400px] flex flex-col">
          <h3 className="text-lg font-semibold mb-4">System Health</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>Database Load</span>
                <span className="text-green-500">24%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '24%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>Memory Usage</span>
                <span className="text-yellow-500">72%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>Storage</span>
                <span className="text-green-500">45%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
