import NewsletterSignUp from "@/components/NewsletterSignUp/NewsletterSignUp";
import {GoCheckCircle} from "react-icons/go";
import GoldenCard from "@/components/GoldenCard/GoldenCard";

export default function TackPage() {
    return (
        <GoldenCard>
            <i className="text-4xl">🎉</i>
            <h2 className="text-2xl font-bold text-center">Tack för ditt intresse!</h2>
            <p className="text-center">
                Håll utkik i din inkorg för kommande information!
            </p>
        </GoldenCard>
    );
}
