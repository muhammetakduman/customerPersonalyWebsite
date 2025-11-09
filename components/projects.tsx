"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { LogoDetails } from "./logo-details"
import { WebsiteDetails } from "./website-details"
import { useState } from "react"

type ViewState = 'projects' | 'logo-details' | 'website-details' | 'product-design' | 'visual-design'

const projects = [
  {
    title: "Logo Tasarımı",
    description:
      "1040 Finansal Hizmetler ve Arovela markası için profesyonel logo tasarımları. Farklı varyasyonlar, renk alternatifleri ve marka kimliği çalışmaları.",
    images: ["/1040-logo-1.jpg", "/1040-logo-2.jpg", "/arovela-logo-1.jpg", "/arovela-logo-2.jpg"],
    technologies: ["Adobe Illustrator", "Logo Tasarımı", "Marka Kimliği", "Branding"],
    demo: "#",
    detailsAction: "logo-details" as ViewState,
  },
  {
    title: "Web Sitesi Tasarımı",
    description:
      "Modern ve minimal web arayüz tasarımı. Kullanıcı deneyimi odaklı, responsive ve estetik bir portfolio sitesi.",
    images: ["/website-works-screenshot.png"],
    technologies: ["Figma", "UI/UX Design", "Web Design"],
    demo: "https://personaly-website-5m41.vercel.app/",
    detailsAction: "website-details" as ViewState,
  },
  {
    title: "Ürün Tasarımı",
    description:
      "Fonksiyonel ve estetik ürün tasarımları. Kullanıcı odaklı yaklaşım, 3D modelleme ve prototipleme ile endüstriyel tasarım çözümleri.",
    images: ["/uruntas1.jpg", "/uruntas2.jpg", "/uruntas3.jpg", "/uruntas4.jpg"],
    technologies: ["SolidWorks", "Rhinoceros", "Teknik Çizim", "Prototipleme"],
    demo: "#",
    detailsAction: "product-design" as ViewState,
  },
  {
    title: "Görsel Tasarım",
    description:
      "Sosyal medya, poster ve dijital içerikler için kreatif görsel tasarımlar. Görsel hikaye anlatımı ve estetik mükemmellik.",
    images: ["/gorseltas1.jpg", "/gorseltas2.jpg"],
    technologies: ["Adobe Photoshop", "Adobe InDesign", "Grafik Tasarım"],
    demo: "#",
    detailsAction: "visual-design" as ViewState,
  },
]

export function Projects() {
  const [currentView, setCurrentView] = useState<ViewState>('projects')

  if (currentView === 'logo-details') {
    return <LogoDetails onBack={() => setCurrentView('projects')} initialCategory={0} />
  }

  if (currentView === 'visual-design') {
    return <LogoDetails onBack={() => setCurrentView('projects')} initialCategory={2} />
  }

  if (currentView === 'product-design') {
    return <LogoDetails onBack={() => setCurrentView('projects')} initialCategory={3} />
  }

  if (currentView === 'website-details') {
    return <WebsiteDetails onBack={() => setCurrentView('projects')} />
  }
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Projeler</h2>
          <p className="text-lg text-muted-foreground">Tasarım çalışmalarım ve projelerim</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:border-primary transition-colors flex flex-col">
              <div
                className={`overflow-hidden bg-muted ${project.images.length > 1 ? "grid grid-cols-2" : "aspect-video"}`}
              >
                {project.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  {project.detailsAction ? (
                    <Button size="sm" onClick={() => setCurrentView(project.detailsAction!)} className="cursor-pointer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Detaylar
                    </Button>
                  ) : (
                    <Button size="sm" asChild className="cursor-pointer">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {project.demo === "#" ? "Yakında" : "Detaylar"}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
