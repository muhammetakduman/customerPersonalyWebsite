import { Button } from "@/components/ui/button"
import { Mail, MapPin, Linkedin } from "lucide-react"

const contactInfo = [
  {
    name: "Email",
    icon: Mail,
    value: "merc.hilal@hotmail.com",
    href: "mailto:merc.hilal@hotmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    value: "Hilal Meriç",
    href: "https://tr.linkedin.com/in/hilal-meri%C3%A7-565503229",
  },
  {
    name: "Konum",
    icon: MapPin,
    value: "Tuzla / İstanbul",
    href: "#",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">İletişime Geçin</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Yeni projeler, iş birlikleri veya tasarım danışmanlığı için benimle iletişime geçebilirsiniz. Size en kısa
              sürede geri dönüş yapacağım.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <a
                key={info.name}
                href={info.href}
                target={info.name === "LinkedIn" ? "_blank" : undefined}
                rel={info.name === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center gap-3 p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors"
              >
                <info.icon className="h-6 w-6 text-primary" />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">{info.name}</p>
                  <p className="font-medium">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="pt-12 text-center text-sm text-muted-foreground space-y-2">
            <p className="font-medium">Developed by Muhammet Akduman</p>
            <p className="text-xs">© 2025 Hilal Meriç. Tüm hakları saklıdır.</p>
            <p className="text-xs italic">Görseller ve tasarımlar portföy sahibine aittir. İzinsiz kullanım ve çoğaltma yasaktır.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
