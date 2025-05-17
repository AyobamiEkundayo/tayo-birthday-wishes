
// Define the slide type to match the VideoSlideProps interface
export type TextPositionType = "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right";
export type GraphicType = "hearts" | "stars" | "confetti" | "balloons" | "waves" | "circles" | "birthday" | "none";

export interface SlideType {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  backgroundSize: string;
  backgroundPosition: string;
  mobileBackgroundSize?: string;
  mobileBackgroundPosition?: string;
  textPosition: TextPositionType;
  overlayColor: string;
  graphicType: GraphicType;
  textColor: string;
  highlightColor: string;
}

export const slides: SlideType[] = [
  { 
    src: "/lovable-uploads/63e0be3e-19a4-4297-beb8-83ceb7e9b673.png", 
    alt: "Tayo and his wife in matching outfits",
    title: "Perfect Match",
    subtitle: "A beautiful journey together",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textPosition: "bottom-left",
    overlayColor: "rgba(0,0,0,0.4)",
    graphicType: "hearts",
    textColor: "#ffffff",
    highlightColor: "#ea384c"
  },
  { 
    src: "/lovable-uploads/4f033b12-c280-42db-b005-d199db3042a1.png", 
    alt: "Tayo and his wife on a boat ride",
    title: "Adventure Awaits",
    subtitle: "Sailing through life's journey",
    backgroundSize: "cover",
    backgroundPosition: "center 30%",
    textPosition: "top-right",
    overlayColor: "rgba(0,0,0,0.3)",
    graphicType: "waves",
    textColor: "#ffffff",
    highlightColor: "#33C3F0"
  },
  { 
    src: "/lovable-uploads/00fcf5ad-9536-4e93-b8e2-dd36586b133e.png", 
    alt: "Tayo celebrating his birthday",
    title: "Happy Birthday!",
    subtitle: "May 23rd - Celebrating You",
    backgroundSize: "cover", 
    backgroundPosition: "center",
    mobileBackgroundSize: "contain",
    textPosition: "bottom-right",
    overlayColor: "rgba(155,135,245,0.4)",
    graphicType: "birthday",
    textColor: "#ffffff",
    highlightColor: "#D6BCFA"
  },
  { 
    src: "/lovable-uploads/24cdb714-b6a5-4d79-ad3e-610bdb4d1e35.png", 
    alt: "Tayo and his wife looking at each other",
    title: "Love & Laughter",
    subtitle: "Creating memories that last forever",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textPosition: "bottom-left",
    overlayColor: "rgba(255,100,121,0.3)",
    graphicType: "stars",
    textColor: "#ffffff",
    highlightColor: "#FEC6A1" 
  },
  { 
    src: "/lovable-uploads/10fc4752-30d5-4743-ae6a-c0c0d3b4c2f8.png",
    alt: "Tayo special moment",
    title: "Cherished Moments",
    subtitle: "Every second counts",
    backgroundSize: "cover",
    backgroundPosition: "center",
    mobileBackgroundSize: "cover",
    mobileBackgroundPosition: "center 30%",
    textPosition: "bottom-center",
    overlayColor: "rgba(249,115,22,0.4)",
    graphicType: "circles",
    textColor: "#ffffff",
    highlightColor: "#F97316"
  },
  { 
    src: "/lovable-uploads/1605e45b-384c-4950-8f6f-90cf99f7106c.png",
    alt: "Tayo and his wife in airplane",
    title: "Sky High Dreams",
    subtitle: "Exploring the world together",
    backgroundSize: "cover",
    backgroundPosition: "center",
    mobileBackgroundPosition: "top center",
    textPosition: "center-left",
    overlayColor: "rgba(51,195,240,0.4)",
    graphicType: "circles",
    textColor: "#ffffff",
    highlightColor: "#33C3F0"
  },
  {
    src: "/lovable-uploads/742c3297-f39c-4f42-8060-6348dcee0450.png",
    alt: "Tayo portrait",
    title: "The Man of the Hour",
    subtitle: "Celebrating another year of awesomeness",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textPosition: "bottom-left",
    overlayColor: "rgba(139,92,246,0.4)",
    graphicType: "confetti",
    textColor: "#ffffff",
    highlightColor: "#8B5CF6"
  },
  {
    src: "/lovable-uploads/50c5a0ca-edde-41ba-9bf3-3ed3f106f973.png",
    alt: "Tayo and his wife special moment",
    title: "Special Moments",
    subtitle: "Every day is a gift with you",
    backgroundSize: "cover",
    backgroundPosition: "center",
    textPosition: "center",
    overlayColor: "rgba(249,115,22,0.3)",
    graphicType: "balloons",
    textColor: "#ffffff",
    highlightColor: "#F97316"
  }
];
