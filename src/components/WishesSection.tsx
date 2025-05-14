
import React from "react";
import { motion } from "framer-motion";
import { Cake, Gift, Star, Celebration } from "lucide-react";

interface Wish {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export default function WishesSection() {
  const wishes: Wish[] = [
    {
      icon: <Star className="text-primary" size={24} />,
      title: "Joy & Peace",
      content: "May this new year of your life bring you moments of peace, laughter that fills your days, and joy that overflows."
    },
    {
      icon: <Gift className="text-primary" size={24} />,
      title: "Dreams & Ambitions",
      content: "May all your deepest dreams find their way to reality, and your hard work be rewarded with success beyond measure."
    },
    {
      icon: <Cake className="text-primary" size={24} />,
      title: "Health & Strength",
      content: "Wishing you robust health and the strength to overcome any challenge that comes your way in this new chapter."
    },
    {
      icon: <Celebration className="text-primary" size={24} />,
      title: "Love & Connection",
      content: "May your heart continue to be filled with love, and your bonds with family and friends grow ever stronger."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Birthday Wishes for Tayo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            On this special day, we send these heartfelt wishes your way
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  {wish.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-gray-800">
                    {wish.title}
                  </h3>
                  <p className="text-gray-600">{wish.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
