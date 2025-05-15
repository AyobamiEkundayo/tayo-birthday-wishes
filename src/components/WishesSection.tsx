
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Gift, MessageSquare, Trash2 } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Define the Wish type for our submitted wishes
interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

export default function WishesSection() {
  const [submitted, setSubmitted] = useState(false);
  const [wish, setWish] = useState("");
  const [name, setName] = useState("");
  // Store submitted wishes - removed the initial sample data
  const [wishes, setWishes] = useState<Wish[]>([]);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (wish.trim() && name.trim()) {
      // Add the new wish to our list with a unique ID
      const newWish: Wish = {
        id: Date.now().toString(),
        name: name.trim(),
        message: wish.trim(),
        timestamp: new Date()
      };
      
      setWishes([newWish, ...wishes]);
      console.log("Wish submitted:", newWish);
      setSubmitted(true);
      setWish("");
      setName("");
      
      toast({
        title: "Wish submitted!",
        description: "Your birthday wish for Tayo has been added.",
        variant: "default"
      });
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };
  
  const handleDelete = (id: string) => {
    setWishes(wishes.filter(wish => wish.id !== id));
    toast({
      title: "Wish deleted",
      description: "The birthday wish has been removed.",
      variant: "default"
    });
  };
  
  // Format the date for display
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20 px-4">
      <div className="container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Send Your Birthday Wishes
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 w-12 bg-primary/50"></div>
            <Gift className="text-primary mx-4" size={22} />
            <div className="h-0.5 w-12 bg-primary/50"></div>
          </div>
          <p className="text-gray-600 max-w-lg mx-auto">
            Leave a heartfelt message for Tayo on his special day. Your words will brighten his celebration!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-green-50 text-green-800 rounded-xl p-6 text-center shadow-soft">
                <motion.div 
                  initial={{ scale: 0.8 }} 
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Gift className="mx-auto mb-4 text-green-600" size={32} />
                  <h3 className="font-heading text-xl font-medium mb-2">Thank You!</h3>
                  <p>Your birthday wish for Tayo has been sent. Your thoughtfulness means the world to him!</p>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-soft p-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                    className="w-full rounded-md border-gray-300 border p-3 focus:border-primary focus:ring focus:ring-primary/20 transition"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="wish" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Birthday Wish
                  </label>
                  <textarea
                    id="wish"
                    value={wish}
                    onChange={(e) => setWish(e.target.value)}
                    placeholder="Write your heartfelt message to Tayo..."
                    className="w-full rounded-md border-gray-300 border p-3 focus:border-primary focus:ring focus:ring-primary/20 transition min-h-[120px]"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Send Birthday Wish
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-soft p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-xl font-medium text-gray-800">Recent Wishes</h3>
            </div>
            
            <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
              {wishes.length > 0 ? (
                wishes.map((wish, index) => (
                  <motion.div 
                    key={wish.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="p-3 border border-gray-100 rounded-lg bg-gray-50 relative"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-7 w-7 text-gray-500 hover:text-red-500 hover:bg-red-50"
                      onClick={() => handleDelete(wish.id)}
                      title="Delete wish"
                    >
                      <Trash2 size={16} />
                      <span className="sr-only">Delete</span>
                    </Button>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 text-primary p-2 rounded-full">
                        <MessageSquare size={16} />
                      </div>
                      <div className="flex-1 pr-8">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium text-gray-800">{wish.name}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{wish.message}</p>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <MessageSquare className="mx-auto mb-2 opacity-30" size={24} />
                  <p>No wishes yet. Be the first to leave one!</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
