import { useState } from "react";
import { motion } from "framer-motion";
import { X, Download, Share2, Heart } from "lucide-react";

const clientPhotos = [
  { id: 1, title: "Boda Carolina & Andrés", images: ["/images/boda-vina-del-mar.jpg", "/images/boda-ceremonia.jpg"], date: "15 de Mayo, 2024" },
  { id: 2, title: "Bautizo Familia Morales", images: ["/images/bautizo-ceremonia.jpg", "/images/bautizo-familia.jpg"], date: "22 de Junio, 2024" },
  { id: 3, title: "Quinceañera Valentina", images: ["/images/quinceañera-fiesta.jpg", "/images/quinceañera-retrato.jpg"], date: "10 de Septiembre, 2024" },
  { id: 4, title: "Sesión Parejas", images: ["/images/sesion-parejas-1.jpg", "/images/sesion-parejas-2.jpg"], date: "5 de Noviembre, 2024" },
];

const Galeria = () => {
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const openGallery = (clientId: number) => {
    setSelectedClient(clientId);
    setSelectedPhotoIndex(0);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-2xl md:text-3xl text-foreground">Galería de Cliente</h1>
            <button
              onClick={() => setSelectedClient(null)}
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Client Selection */}
      {selectedClient === null ? (
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clientPhotos.map((client) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card p-6 cursor-pointer hover:bg-accent transition-all duration-300"
                onClick={() => openGallery(client.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                    <Heart size={24} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2">{client.title}</h3>
                    <p className="text-muted-foreground text-sm">{client.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        /* Gallery View */
        <div className="relative">
          {/* Back Button */}
          <button
            onClick={() => setSelectedClient(null)}
            className="absolute top-4 left-4 z-10 bg-card p-3 rounded-lg shadow-lg hover:bg-accent transition-all duration-300"
          >
            ← Volver a Clientes
          </button>

          {/* Client Info */}
          <div className="bg-card shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <div className="text-center mb-6">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  {clientPhotos.find(c => c.id === selectedClient)?.title}
                </h2>
                <p className="text-muted-foreground">
                  {clientPhotos.find(c => c.id === selectedClient)?.date}
                </p>
              </div>
            </div>

            {/* Photo Navigation */}
            <div className="flex items-center justify-center gap-4 mb-6">
              {clientPhotos.find(c => c.id === selectedClient)?.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    selectedPhotoIndex === index
                      ? "bg-foreground border-foreground"
                      : "border-muted-foreground hover:border-foreground"
                  }`}
                />
              ))}
            </div>

            {/* Main Photo Display */}
            <div className="max-w-4xl mx-auto px-6">
              <motion.img
                key={selectedPhotoIndex}
                src={clientPhotos.find(c => c.id === selectedClient)?.images[selectedPhotoIndex]}
                alt={`Foto de ${clientPhotos.find(c => c.id === selectedClient)?.title}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Download and Share */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button className="bg-card p-3 rounded-lg shadow-lg hover:bg-accent transition-all duration-300 flex items-center gap-2">
                <Download size={20} />
                <span className="text-sm">Descargar</span>
              </button>
              <button className="bg-card p-3 rounded-lg shadow-lg hover:bg-accent transition-all duration-300 flex items-center gap-2">
                <Share2 size={20} />
                <span className="text-sm">Compartir</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;