import { Instagram, Linkedin, Mail, MapPin, Phone, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Contact <span className="text-primary">Me</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities. The best way to reach me is through my personal email or LinkedIn.
        </p>

        <div className="space-y-8">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <a
                href="mailto:saddiqrupani456@gmail.com"
                className="text-lg hover:text-primary transition-colors"
              >
                saddiqrupani456@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <a
              href="tel:+14045123387"
              className="text-lg hover:text-primary transition-colors"
            >
              +1 (404) 512-3387
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <span className="text-lg">Atlanta, GA</span>
          </div>
        </div>

        <div className="pt-12">
          <h4 className="font-medium mb-4">Connect With Me</h4>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/saddiqrupani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/saddiqrupani"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.instagram.com/saddiqrupani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};