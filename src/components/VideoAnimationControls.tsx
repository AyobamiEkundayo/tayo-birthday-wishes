
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

interface VideoAnimationControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  isAudioPlaying: boolean;
  onTogglePlayback: () => void;
  onToggleAudio: () => void;
}

export default function VideoAnimationControls({
  isPlaying,
  isMuted,
  isAudioPlaying,
  onTogglePlayback,
  onToggleAudio
}: VideoAnimationControlsProps) {
  return (
    <>
      <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2">
        {(isAudioPlaying || isPlaying) && (
          <Button
            onClick={onToggleAudio}
            className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
            size="icon"
            variant="ghost"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </Button>
        )}
        <Button
          onClick={onTogglePlayback}
          className={`p-3 rounded-full ${isPlaying ? 'bg-white text-primary' : 'bg-primary text-white'}`}
          size="icon"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </Button>
      </div>
      
      {isPlaying && (
        <motion.div 
          className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-xs text-white">Birthday Slideshow</span>
        </motion.div>
      )}
    </>
  );
}
