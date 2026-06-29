import Link from "next/link";
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Samsung Galaxy S24 Ultra", brand: "Samsung", category: "Smartphones", price: "$1,199.00", status: "In Stock" },
    { id: 2, name: "Apple MacBook Pro 16\"", brand: "Apple", category: "Laptops", price: "$2,499.00", status: "Low Stock" },
    { id: 3, name: "Sony WH-1000XM5", brand: "Sony", category: "Audio", price: "$398.00", status: "In Stock" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground mt-1">Manage your showroom product catalog.</p>
        </div>
        <Link 
          href="/dashboard/products/new" 
          className="inline-flex items-center px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-muted-foreground transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Link>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-10 pr-4 py-2 bg-muted border-none rounded-lg text-sm focus:ring-2 focus:ring-foreground/20 outline-none transition-all"
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Product Name</th>
                <th className="px-6 py-4 font-medium">Brand</th>
                <th className="px-6 py-4 font-medium">Category</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{product.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{product.brand}</td>
                  <td className="px-6 py-4 text-muted-foreground">{product.category}</td>
                  <td className="px-6 py-4 font-medium">{product.price}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      product.status === 'In Stock' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
