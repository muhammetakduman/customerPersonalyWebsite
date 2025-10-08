import { Lightbulb, Palette, Users, TrendingUp } from "lucide-react"

const skills = [
  {
    icon: Palette,
    title: "Endüstriyel Tasarım",
    description: "Kullanıcı odaklı, estetik ve işlevsel ürün tasarımları geliştiriyorum.",
  },
  {
    icon: Lightbulb,
    title: "Ar-Ge & İnovasyon",
    description: "Yeni ürün geliştirme süreçlerinde konsept ve teknik tasarım desteği sağlıyorum.",
  },
  {
    icon: TrendingUp,
    title: "Grafik & Logo Tasarımı",
    description: "Marka kimliği oluşturan, özgün ve profesyonel logo tasarımları yapıyorum.",
  },
  {
    icon: Users,
    title: "Takım Çalışması",
    description: "İş birliğine açık, analitik problem çözme ve etkili iletişim becerilerine sahibim.",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Hakkımda</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Doğuş Üniversitesi Endüstri Ürünleri Tasarımı mezunuyum. E-ticaret ve Ar-Ge alanlarında edindiğim deneyimle
            satış, müşteri ilişkileri ve tasarım süreçlerinde güçlü bir bakış açısına sahibim. Endüstriyel tasarım
            eğitimim sayesinde estetik ve işlevselliği bir araya getirerek kullanıcı odaklı çözümler üretiyorum.
            Analitik düşünme, problem çözme ve iletişim becerilerimle çalıştığım projelere değer katmayı hedefliyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors"
            >
              <skill.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
