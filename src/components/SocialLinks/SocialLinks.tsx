import { FaSnapchatGhost  } from "react-icons/fa";
import { FaSnapchat, FaRegEnvelope, FaEnvelope } from "react-icons/fa6";
import { AiOutlineFacebook, AiFillFacebook, AiOutlineLinkedin, AiFillLinkedin, AiOutlineInstagram, AiFillInstagram  } from "react-icons/ai";

import React from "react";
import SocialLink from "./SocialLink/SocialLink";

export default function SocialLinks() {
    return (
        <div className="flex justify-center gap-4">
            {/* E-Mail */}
            <SocialLink href="mailto:info@gyllenedroppen.se" DefaultIcon={FaRegEnvelope} HoverIcon={FaEnvelope} />

            {/* Twitter */}
            {/*<SocialLink href="https://snapchat.com/YOUR_TWITTER_USERNAME" DefaultIcon={FaSnapchat} HoverIcon={FaSnapchatGhost}/>*/}

            {/* Facebook */}
            {/*<SocialLink href="https://www.facebook.com/YOUR_PAGE_NAME" DefaultIcon={AiOutlineFacebook} HoverIcon={AiFillFacebook} />*/}

            {/* Instagram */}
            <SocialLink href="https://www.instagram.com/gyllene_droppen" DefaultIcon={AiOutlineInstagram} HoverIcon={AiFillInstagram} />

            {/* LinkedIn */}
            {/*<SocialLink href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME" DefaultIcon={AiOutlineLinkedin} HoverIcon={AiFillLinkedin} />*/}
        </div>
    );
}
