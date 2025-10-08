const skillCategories = [
  {
    title: "Tasarım Araçları",
    skills: [
      { name: "Adobe Photoshop", level: 90 },
      { name: "Adobe Illustrator", level: 95 },
      { name: "Adobe InDesign", level: 85 },
      { name: "Figma", level: 88 },
    ],
  },
  {
    title: "3D Modelleme",
    skills: [
      { name: "SolidWorks", level: 90 },
      { name: "Rhinoceros", level: 85 },
      { name: "3DS Max", level: 80 },
      { name: "SketchUp", level: 88 },
    ],
  },
  {
    title: "Teknik Çizim",
    skills: [
      { name: "AutoCAD", level: 92 },
      { name: "Teknik Çizim", level: 90 },
      { name: "Teknik Dokümantasyon", level: 85 },
    ],
  },
  {
    title: "Yetkinlikler",
    skills: [
      { name: "Kullanıcı Odaklı Tasarım", level: 95 },
      { name: "Takım Çalışması", level: 90 },
      { name: "Problem Çözme", level: 92 },
      { name: "Araştırma & Raporlama", level: 88 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="space-y-12">
          <div className="space-y-2 max-w-2xl">
            <p className="text-primary text-sm font-medium tracking-wider uppercase">Yetenekler</p>
            <h2 className="text-4xl font-serif font-bold">Teknik Beceriler & Araçlar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-6">Sertifikalar & Seminerler</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">ENTES Profesyonel Elektronik Cihaz Tasarım Yarışması</p>
                  <p className="text-sm text-muted-foreground">Finalist - 2023</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Kardeş Okul Projesi</p>
                  <p className="text-sm text-muted-foreground">Doğuş Üniversitesi - 2022</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Değişen Pazarlama Semineri</p>
                  <p className="text-sm text-muted-foreground">Hüseyin Sayın - 2022</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Marka Özdeşliği & Tasarım Semineri</p>
                  <p className="text-sm text-muted-foreground">Ümit Altun - 2022</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium">Temel Tasarım İlkeleri Çalıştayı</p>
                  <p className="text-sm text-muted-foreground">Sıla Zeytin - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
