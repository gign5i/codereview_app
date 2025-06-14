import { ReactElement } from "react";
import styles from "./Footer.module.scss";
import { NewsLine } from "src/features";
import FooterNavigation from "@/widgets/Footer/ui/components/FooterNavigation";
import FooterDetails from "@/widgets/Footer/ui/components/FooterDetails";
import FooterContacts from "@/widgets/Footer/ui/components/FooterContacts";
import { Icon, Typography } from "src/shared";
import { footerSocialLinks } from "@/widgets/Footer/config/footerSocialLinks";

const Footer = (): ReactElement => (
  <footer className={styles.footerContainer}>
    <NewsLine />
    <div className={styles.footerContent}>
      <div className={styles.container}>
        <FooterNavigation />
        <FooterContacts />
      </div>
      <div className={styles.privacyPolicy}>
        <Typography color="white" type="normal">
          Политика конфиденциальности • Оферта
        </Typography>
        <div className={styles.socialsWrapper}>
          {footerSocialLinks.map(social => (
            <Icon key={social.id} icon={social.icon} className={styles.iconStyle} />
          ))}
        </div>
      </div>
      <hr className={styles.customHr} />
      <FooterDetails />
    </div>
  </footer>
);

export default Footer;
