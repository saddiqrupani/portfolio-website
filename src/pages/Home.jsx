import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            { /* Theme toggle button */ }
            <ThemeToggle />
            { /* Background Effects */ }
            <StarBackground />
            { /* Navbar */ }

            { /* Main Content */ }

            { /* Footer */ }

        </div>

    );

};
