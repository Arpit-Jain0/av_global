import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductsHero } from "@/components/products-hero"
import { ProductCategories } from "@/components/product-categories"
import { ProductShowcase } from "@/components/product-showcase"
import { QualityAssurance } from "@/components/quality-assurance"

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductsHero />
      <ProductCategories />
      <ProductShowcase />
      <QualityAssurance />
      <Footer />
    </main>
  )
}
