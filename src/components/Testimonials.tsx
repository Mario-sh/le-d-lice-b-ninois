import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sophie Laurent",
      role: "Critique Gastronomique",
      text: "Une explosion de saveurs. Le mariage entre la délicatesse française et l'audace béninoise est parfaitement maîtrisé.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Akilah Dossou",
      role: "Cliente fidèle",
      text: "Le meilleur restaurant de Cadjehoun. L'ambiance est incroyable et le Poulet DG revisité est un chef-d'œuvre absolu.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1eb1fd?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Marc Dubé",
      role: "Touriste Canadien",
      text: "Une belle découverte lors de mon séjour à Cotonou. Le service est excellent et les plats sont très originaux.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-24 bg-brand-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl mb-4">Avis de nos clients</h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto">Découvrez ce que nos clients disent de leur expérience chez nous.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white/10 p-8 rounded-2xl border border-white/20 relative mt-8"
            >
              <div className="absolute -top-6 left-8 bg-brand-orange p-3 rounded-full text-white">
                <Quote size={20} />
              </div>
              
              <div className="flex text-brand-orange mb-4 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < testimonial.rating ? "currentColor" : "none"} className={i >= testimonial.rating ? "text-white/30" : ""} />
                ))}
              </div>
              
              <p className="text-white/90 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-white/20" />
                <div>
                  <h4 className="font-bold text-lg leading-tight">{testimonial.name}</h4>
                  <p className="text-brand-orange text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
