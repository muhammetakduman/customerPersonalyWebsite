"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Palette, Target, Sparkles, Award } from "lucide-react"
import { useState } from "react"

interface LogoDetailsProps {
    onBack: () => void
}

const logoStories = [
    {
        title: "1040 Finansal Hizmetler - Kurumsal Kimlik",
        description: "Güvenilirlik ve profesyonellik vurgusu yapan modern logo tasarımı. Finansal sektörün dinamiklerine uygun renk paleti ve tipografi seçimi.",
        images: ["/io401.png", "/io402.png", "/io403.png", "/io404.png"],
        phase: "Marka Stratejisi & Konsept",
        icon: Target,
        story: "Müşteri brifingi ile başlayan süreçte, finansal güvenilirlik ve modern yaklaşımı harmanlayan bir kimlik yaratmayı hedefledik. Sayısal ve analitik yapıyı yansıtan geometrik formlar kullandık."
    },
    {
        title: "Arovela - Yaratıcı Marka Kimliği",
        description: "Dinamik ve yenilikçi bir yaklaşımla tasarlanan Arovela markası. Modern estetik anlayışı ile sektöründe fark yaratan görsel kimlik.",
        images: ["/arve1.png", "/arve2.png", "/arve3.png", "/arve4.png"],
        phase: "Görsel Kimlik & Uygulama",
        icon: Sparkles,
        story: "Arovela için yaratıcılık ve inovasyonu öne çıkaran bir kimlik geliştirdik. Organik formlar ve canlı renk paleti ile marka karakterini güçlendirdik."
    }
]

export function LogoDetails({ onBack }: LogoDetailsProps) {
    const [selectedStory, setSelectedStory] = useState(0)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const openImageModal = (imageSrc: string) => {
        setSelectedImage(imageSrc)
    }

    const closeImageModal = () => {
        setSelectedImage(null)
    }

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/30">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Button variant="outline" size="sm" onClick={onBack}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Geri Dön
                    </Button>
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold">Logo Tasarım Hikayesi</h1>
                        <p className="text-muted-foreground">Marka kimliği yaratma süreci</p>
                    </div>
                </div>

                {/* Story Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {logoStories.map((story, index) => (
                        <Card
                            key={index}
                            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${selectedStory === index ? 'ring-2 ring-primary shadow-lg' : ''
                                }`}
                            onClick={() => setSelectedStory(index)}
                        >
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <story.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{story.title}</CardTitle>
                                        <CardDescription className="text-sm">{story.phase}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                {/* Selected Story Details */}
                <div className="space-y-8">
                    <Card className="overflow-hidden">
                        <CardHeader>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 rounded-lg bg-primary/10">
                                    {(() => {
                                        const IconComponent = logoStories[selectedStory].icon
                                        return <IconComponent className="h-6 w-6 text-primary" />
                                    })()}
                                </div>
                                <div>
                                    <CardTitle className="text-2xl">{logoStories[selectedStory].title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {logoStories[selectedStory].description}
                                    </CardDescription>
                                </div>
                            </div>

                            {/* Story Narrative */}
                            <div className="bg-muted/50 rounded-lg p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Palette className="h-5 w-5 text-primary" />
                                    <h3 className="font-semibold">Tasarım Hikayesi</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {logoStories[selectedStory].story}
                                </p>
                            </div>
                        </CardHeader>

                        <CardContent>
                            {/* Image Gallery */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {logoStories[selectedStory].images.map((image, idx) => (
                                    <div
                                        key={idx}
                                        className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                                        onClick={() => openImageModal(image)}
                                    >
                                        <div className="aspect-[4/3] p-4 flex items-center justify-center">
                                            <img
                                                src={image}
                                                alt={`${logoStories[selectedStory].title} - Varyasyon ${idx + 1}`}
                                                className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-2">
                                            <Award className="h-4 w-4 text-primary" />
                                        </div>
                                        <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1 opacity-100 group-hover:opacity-0 transition-opacity">
                                            <span className="text-sm font-medium">Varyasyon {idx + 1}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Process Steps */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="text-center p-4 rounded-lg bg-muted/30">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">1</span>
                                    </div>
                                    <h4 className="font-medium mb-1">Analiz</h4>
                                    <p className="text-sm text-muted-foreground">Marka değerleri ve hedef kitle araştırması</p>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-muted/30">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">2</span>
                                    </div>
                                    <h4 className="font-medium mb-1">Konsept</h4>
                                    <p className="text-sm text-muted-foreground">Yaratıcı fikirler ve görsel keşif</p>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-muted/30">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">3</span>
                                    </div>
                                    <h4 className="font-medium mb-1">Uygulama</h4>
                                    <p className="text-sm text-muted-foreground">Final tasarım ve marka klavuzu</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={closeImageModal}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt="Büyütülmüş logo"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={closeImageModal}
                            className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                        >
                            <span className="sr-only">Kapat</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}