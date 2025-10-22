import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription?: string;
  onBookCall: () => void;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  fullDescription,
  onBookCall,
}: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group bg-card rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-transparent hover:border-accent">
        <div className="mb-6 text-accent">
          <Icon className="h-14 w-14" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(true)}
          >
            Learn More
          </Button>
          <Button size="sm" onClick={onBookCall}>
            Book a Call
          </Button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon className="h-6 w-6 text-accent" />
              {title}
            </DialogTitle>
            <DialogDescription className="text-left pt-4">
              {fullDescription || description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={onBookCall}>Book a Call</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServiceCard;
