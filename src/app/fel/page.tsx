'use client'

import GoldenCard from "@/components/GoldenCard/GoldenCard";
import Button from "@/components/Button/Button";
import {PiSmileySadThin} from "react-icons/pi";

export default function FelPage() {
    return (
        <GoldenCard>
            <div className="flex justify-center items-center">
                <PiSmileySadThin className="text-6xl"/>
            </div>
            <h2 className="text-2xl font-medium">Bekräftelselänk Ogiltig</h2>
            <p>
                Om du fortfarande vill ha våra nyhetsbrev, vänligen försök igen eller kontakta oss.
            </p>
            <div>
                <Button
                    onClick={() => window.location.href = '/'} label={"Gå till startsidan"} type="button"/>
            </div>
        </GoldenCard>
    );
}
