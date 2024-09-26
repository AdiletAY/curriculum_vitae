import { Mail, Phone, Linkedin } from 'lucide-react';

import { Button } from "@/components/ui/button.tsx";
import { useToast } from "@/hooks/use-toast.ts"

const ContactButtons = () => {
  const { toast } = useToast()

  const handleCopyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text).then(() => {
        toast({
          
          title: "sdnsk",
          description: `${text} copied to clipboard!`,
        });
      });
  };
  
  const handleOpenLinkedIn = (url: string) => {
      window.open(url, '_blank');
  };


    return (
        <div className='flex justify-center gap-1'>
            <Button 
              variant="ghost" 
              size="icon" 
              className="p-1" 
              onClick={() => handleCopyToClipboard("email@example.com")}>
                <Mail className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="p-1" 
              onClick={() => handleCopyToClipboard("+1234567890")}>
                <Phone className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="p-1" 
              onClick={() => handleOpenLinkedIn("https://www.linkedin.com/in/adilet-alpysbay/")}>
                <Linkedin className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default ContactButtons;
