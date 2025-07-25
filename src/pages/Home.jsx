import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            { /* Theme toggle button */ }
            <ThemeToggle />
            { /* Background Effects */ }
            <StarBackground />
            { /* Navbar */ }
            <Navbar />
            { /* Main Content */ }
            <main>
                <HeroSection />
            </main>

            { /* Footer */ }

        </div>

    );

};
