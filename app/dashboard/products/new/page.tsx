"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Save, Plus, Trash2, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

const productSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z.coerce.number().min(0, "Price must be positive"),
  old_price: z.coerce.number().optional(),
  brand: z.string().min(1, "Brand is required"),
  category: z.string().min(1, "Category is required"),
  status: z.enum(["in_stock", "out_of_stock", "pre_order"]),
  specifications: z.array(z.object({
    key: z.string().min(1, "Key required"),
    value: z.string().min(1, "Value required")
  }))
});

type ProductFormValues = z.infer<typeof productSchema>;

export default function NewProductPage() {
  const { register, control, handleSubmit, formState: { errors } } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema) as any,
    defaultValues: {
      status: "in_stock",
      specifications: [{ key: "", value: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "specifications"
  });

  const onSubmit = async (data: ProductFormValues) => {
    console.log(data);
    // TODO: Submit to API
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard/products" className="p-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors">
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Add New Product</h2>
            <p className="text-muted-foreground mt-1">Create a new product in your catalog.</p>
          </div>
        </div>
        <button 
          onClick={handleSubmit(onSubmit)}
          className="inline-flex items-center px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-muted-foreground transition-colors"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Product
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Product Name</label>
              <input 
                {...register("name")}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:ring-2 focus:ring-foreground/20 outline-none transition-all"
                placeholder="e.g. iPhone 15 Pro"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Slug (URL)</label>
              <input 
                {...register("slug")}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:ring-2 focus:ring-foreground/20 outline-none transition-all"
                placeholder="e.g. iphone-15-pro"
              />
              {errors.slug && <p className="text-red-500 text-xs">{errors.slug.message}</p>}
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium text-foreground">Description</label>
              <textarea 
                {...register("description")}
                rows={4}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:ring-2 focus:ring-foreground/20 outline-none transition-all resize-none"
                placeholder="Detailed product description..."
              />
              {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Pricing & Status</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Price ($)</label>
                  <input 
                    type="number" step="0.01"
                    {...register("price")}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:ring-2 focus:ring-foreground/20 outline-none transition-all"
                  />
                  {errors.price && <p className="text-red-500 text-xs">{errors.price.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Old Price ($)</label>
                  <input 
                    type="number" step="0.01"
                    {...register("old_price")}
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:ring-2 focus:ring-foreground/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Stock Status</label>
                <select 
                  {...register("status")}
                  className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:ring-2 focus:ring-foreground/20 outline-none transition-all"
                >
                  <option value="in_stock">In Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                  <option value="pre_order">Pre-Order</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-6">Organization</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Brand</label>
                <input 
                  {...register("brand")}
                  className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:ring-2 focus:ring-foreground/20 outline-none transition-all"
                  placeholder="e.g. Apple"
                />
                {errors.brand && <p className="text-red-500 text-xs">{errors.brand.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Category</label>
                <input 
                  {...register("category")}
                  className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:ring-2 focus:ring-foreground/20 outline-none transition-all"
                  placeholder="e.g. Smartphones"
                />
                {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Dynamic Specifications</h3>
            <button 
              type="button"
              onClick={() => append({ key: "", value: "" })}
              className="inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              <Plus className="h-4 w-4 mr-1" /> Add Spec
            </button>
          </div>
          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-start gap-4">
                <div className="flex-1 space-y-1">
                  <input
                    {...register(`specifications.${index}.key`)}
                    placeholder="e.g. RAM"
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:ring-2 focus:ring-foreground/20 outline-none transition-all"
                  />
                  {errors.specifications?.[index]?.key && <p className="text-red-500 text-xs">{errors.specifications[index]?.key?.message}</p>}
                </div>
                <div className="flex-[2] space-y-1">
                  <input
                    {...register(`specifications.${index}.value`)}
                    placeholder="e.g. 16GB LPDDR5"
                    className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:ring-2 focus:ring-foreground/20 outline-none transition-all"
                  />
                  {errors.specifications?.[index]?.value && <p className="text-red-500 text-xs">{errors.specifications[index]?.value?.message}</p>}
                </div>
                <button 
                  type="button" 
                  onClick={() => remove(index)}
                  className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors mt-0.5"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
