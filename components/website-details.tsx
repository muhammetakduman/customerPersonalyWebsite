"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Code, Smartphone, Globe, Zap, Users, ShoppingCart, Palette } from "lucide-react"
import { useState } from "react"

interface WebsiteDetailsProps {
    onBack: () => void
}

const websiteStories = [
    {
        title: "EasyCube - Elektronik Cihaz Arayüz Tasarımı",
        description: "En-boy yükseklik hesaplayan elektronik cihaz için kullanıcı arayüzü ve deneyim tasarımı. Minimalist ve kullanıcı dostu yaklaşım.",
        images: ["/easycube1.png", "/easycube2.png", "/easycube3.png", "/easycube4.png", "/easycube5.png"],
        phase: "UI/UX Design",
        icon: ShoppingCart,
        story: "EasyCube projesi, en-boy yükseklik hesaplayan elektronik bir cihazın kullanıcı arayüzü tasarımı için geliştirildi. Cihazın dokunmatik ekranında görünecek arayüzü tasarlayarak, kullanıcıların kolay ve hızlı ölçüm yapabilmesini sağladık. Sade, anlaşılır menüler ve görsel geri bildirimlerle kullanıcı deneyimini optimize ettik.",
        techStack: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
        features: ["Dokunmatik Arayüz", "Görsel Geri Bildirim", "Sade Menü Yapısı", "Ölçüm Sonuçları", "Kullanıcı Rehberi"]
    },
    {
        title: "InterfaceKart - Arayüz Tasarım Platformu",
        description: "Yaratıcı tasarımcılar için özel geliştirilmiş portfolio arayüzü tasarımı. Estetik ve fonksiyonelliğin mükemmel birleşimi.",
        images: ["/interfacekart1.png", "/interfacekart2.png", "/interfacekart3.png", "/interfacekart4.png"],
        phase: "UI/UX Design",
        icon: Globe,
        story: "InterfaceKart, tasarımcıların eserlerini sergileyebileceği web platformunun kullanıcı arayüzü tasarımı için hayata geçti. Grid layout sistemleri, interaktif hover efektleri ve detaylı filtreleme arayüzleri tasarlayarak kullanıcıların işlerini en iyi şekilde sunmalarını sağlayan görsel deneyim yarattık.",
        techStack: ["Figma", "Adobe XD", "Sketch", "Zeplin", "InVision", "Principle"],
        features: ["Portfolio Grid Tasarımı", "İnteraktif Filtreler", "Hover Animasyonları", "Proje Detay Sayfaları", "Responsive Layout"]
    },
    {
        title: "Website ve Mobil Tasarımlar - Web Tasarımları",
        description: "Web sitesi arayüz tasarımları. Kullanıcı deneyimi odaklı modern web tasarım yaklaşımları.",
        images: ["/mamidesinger.png"],
        phase: "Web UI/UX Design",
        icon: Globe,
        story: "Web sitesi tasarım projesi kapsamında modern ve kullanıcı dostu arayüzler geliştirildi. Responsive tasarım prensipleri gözetilerek, tüm cihazlarda optimal görüntü deneyimi sağlandı. Minimalist estetik ve temiz tipografi ile profesyonel bir web deneyimi yaratıldı.",
        techStack: ["Figma", "Adobe XD", "Sketch", "Adobe Illustrator", "InVision", "Zeplin"],
        features: ["Responsive Web Tasarımı", "Kullanıcı Deneyimi", "Prototipleme", "Web Arayüzleri", "Görsel Hiyerarşi"]
    },
    {
        title: "Website ve Mobil Tasarımlar - Mobil Uygulamalar",
        description: "Mobil uygulama arayüz tasarımları. Yemek sipariş ve müzik çalar uygulamaları için özel tasarımlar.",
        images: ["/yemek1.png", "/yemek2.png", "/yemek3.png", "/yemek4.png", "/music1.png", "/music2.png"],
        phase: "Mobile UI/UX Design",
        icon: Smartphone,
        story: "Mobil uygulama tasarım projesi kapsamında yemek sipariş uygulaması ve müzik çalar uygulaması tasarımları gerçekleştirildi. Her bir uygulama için kullanıcı journey'leri analiz edilerek, sezgisel ve kullanıcı dostu mobil arayüzler tasarlandı. Native mobil deneyim prensipleri gözetilerek modern ve işlevsel tasarımlar üretildi.",
        techStack: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Zeplin"],
        features: ["Mobil Arayüz Tasarımı", "Kullanıcı Akışları", "İnteraktif Prototipler", "iOS/Android Uyumlu", "Gesture Tasarımı"]
    }
]

export function WebsiteDetails({ onBack }: WebsiteDetailsProps) {
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
                        <h1 className="text-3xl sm:text-4xl font-bold">Tasarım Projeleri Hikayesi</h1>
                        <p className="text-muted-foreground">UI/UX ve tasarım süreçleri</p>
                    </div>
                </div>

                {/* Story Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {websiteStories.map((story, index) => (
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
                                        const IconComponent = websiteStories[selectedStory].icon
                                        return <IconComponent className="h-6 w-6 text-primary" />
                                    })()}
                                </div>
                                <div>
                                    <CardTitle className="text-2xl">{websiteStories[selectedStory].title}</CardTitle>
                                    <CardDescription className="text-base">
                                        {websiteStories[selectedStory].description}
                                    </CardDescription>
                                </div>
                            </div>

                            {/* Story Narrative */}
                            <div className="bg-muted/50 rounded-lg p-6 mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Palette className="h-5 w-5 text-primary" />
                                    <h3 className="font-semibold">Tasarım Hikayesi</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {websiteStories[selectedStory].story}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-6">
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <Zap className="h-5 w-5 text-primary" />
                                    Tasarım Araçları
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {websiteStories[selectedStory].techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-6">
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <Smartphone className="h-5 w-5 text-primary" />
                                    Özellikler
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {websiteStories[selectedStory].features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 text-sm">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent>
                            {/* Image Gallery */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {websiteStories[selectedStory].images.map((image, idx) => (
                                    <div
                                        key={idx}
                                        className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                        onClick={() => openImageModal(image)}
                                    >
                                        <div className="aspect-[4/3] p-4 flex items-center justify-center">
                                            <img
                                                src={image}
                                                alt={`${websiteStories[selectedStory].title} - Ekran ${idx + 1}`}
                                                className="max-w-full max-h-full object-contain rounded-md group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Globe className="h-4 w-4 text-primary" />
                                        </div>
                                        <div className="absolute bottom-2 left-2 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1 opacity-100 group-hover:opacity-0 transition-opacity">
                                            <span className="text-sm font-medium">Sayfa {idx + 1}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Development Process */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-4">
                                <div className="text-center p-4 rounded-lg bg-muted/30">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">1</span>
                                    </div>
                                    <h4 className="font-medium mb-1">Araştırma</h4>
                                    <p className="text-sm text-muted-foreground">Kullanıcı araştırması ve rekabet analizi</p>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-muted/30">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">2</span>
                                    </div>
                                    <h4 className="font-medium mb-1">Tasarım</h4>
                                    <p className="text-sm text-muted-foreground">Wireframe, mockup ve prototip oluşturma</p>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-muted/30">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">3</span>
                                    </div>
                                    <h4 className="font-medium mb-1">Test</h4>
                                    <p className="text-sm text-muted-foreground">Kullanıcı testleri ve geri bildirim</p>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-muted/30">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                        <span className="text-primary font-bold">4</span>
                                    </div>
                                    <h4 className="font-medium mb-1">Teslim</h4>
                                    <p className="text-sm text-muted-foreground">Final tasarımlar ve design system</p>
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
                            alt="Büyütülmüş görsel"
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