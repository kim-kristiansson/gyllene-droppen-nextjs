"use client";

import InputField from "@/components/InputFields/InputField";
import Button from "@/components/Button/Button";
import SocialLinks from "@/components/SocialLinks/SocialLinks";

export default function NewsletterSignUp() {
    const handleInputChange = (value: string) => {
        console.log(value);
    }

    return (
        <div className="bg-beige px-4 shadow-xl w-full sm:w-auto shadow-black/10 grid items-center h-screen sm:h-auto rounded-xl max-w-screen-md mx-auto p-16">
            <div className="relative p-6 pt-8 bg-beige border-4 border-double border-darkBrown rounded-xl text-center">
                <span
                    className="absolute top-0 bg-beige left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-great-vibes)] text-gold font-bold text-4xl">GD</span>
                <div className="grid gap-4">
                    <h1 className="text-center text-darkBrown text-4xl font-serif">Gyllene Droppen</h1>
                    <p className="text-center text-darkBrown">Intresseanmälan</p>
                    <InputField className="placeholder-darkBrown" id={"userEmail"} type={"email"}
                                placeholder={"Din e-postadress"}
                                onChange={handleInputChange}/>
                    <div className="grid justify-center">
                        <Button label="Skicka" onClick={() => console.log('ok')}/>
                    </div>
                    <hr className="my-4 border-t border-darkBrown"/>

                    <p className="text-center text-darkBrown">Följ eller kontakta oss</p>

                    <SocialLinks/>


                    <footer>
                        <p className="text-sm text-center text-darkBrown">
                            © {new Date().getFullYear()} Gyllene Droppen
                        </p>
                    </footer>
                </div>
            </div>

        </div>
    );
}

