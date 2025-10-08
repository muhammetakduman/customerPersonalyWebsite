import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance">
            Merhaba, Ben <span className="text-primary">Hilal Meriç</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground text-balance">Endüstri Ürünleri Tasarımcısı</p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            E-ticaret ve Ar-Ge alanlarında edindiğim deneyimle estetik ve işlevselliği bir araya getirerek kullanıcı
            odaklı çözümler üretiyorum. Logo tasarımı, web arayüz tasarımı ve endüstriyel ürün geliştirme konularında
            uzmanım.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <a href="#projects">Projelerimi Gör</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">İletişime Geç</a>
            </Button>
          </div>
        </div>
        <div className="mt-16 animate-bounce">
          <a href="#about" className="inline-block text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
