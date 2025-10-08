import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Ar-Ge Tasarımcısı",
    company: "Tüm Elektronik",
    period: "2025 - Devam Ediyor",
    description:
      "Yeni ürün geliştirme süreçlerinde konsept ve teknik tasarım desteği sağlıyorum. Kullanıcı ihtiyaçlarını analiz ederek estetik ve işlevsel çözümler sunuyorum.",
    technologies: ["SolidWorks", "AutoCAD", "Rhinoceros", "Teknik Çizim"],
  },
  {
    title: "Tasarım",
    company: "Mix Yapı",
    period: "2023",
    description:
      "Tasarım sürecinde modelleme ve teknik çizim aşamalarında görev aldım. Müşteri ihtiyaçlarına yönelik yaratıcı ve uygulanabilir çözümler ürettim.",
    technologies: ["3DS Max", "SketchUp", "AutoCAD", "Teknik Dokümantasyon"],
  },
  {
    title: "Tasarım / Ar-Ge Stajyeri",
    company: "Sultanlar Holding",
    period: "2021",
    description:
      "Ürün geliştirme projelerinde Ar-Ge ekibine destek verdim. Teknik çizim, modelleme ve tasarım süreçlerinde aktif rol aldım.",
    technologies: ["SolidWorks", "Rhinoceros", "Adobe Illustrator", "Photoshop"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Deneyim</h2>
          <p className="text-lg text-muted-foreground">Profesyonel çalışma geçmişim</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>{exp.company}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl border border-border bg-card">
          <h3 className="text-2xl font-bold mb-6">Eğitim</h3>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h4 className="text-xl font-semibold">Endüstri Ürünleri Tasarımı</h4>
              <p className="text-muted-foreground mt-1">Doğuş Üniversitesi - Lisans</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>2019 - 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
