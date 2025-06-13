import { StaticImport } from "next/dist/shared/lib/get-img-props";
import TelegramIcon from "@@/public/icons/telegram.webp";
import YouTubeIcon from "@@/public/icons/youtube.webp";
import LinkedInIcon from "@@/public/icons/linkedin.webp";

interface IFooterSocialProps {
  id: number;
  icon: string | StaticImport;
}

export const footerSocialLinks: IFooterSocialProps[] = [
  {
    id: 1,
    icon: TelegramIcon,
  },
  {
    id: 2,
    icon: YouTubeIcon,
  },
  {
    id: 3,
    icon: LinkedInIcon,
  },
];
