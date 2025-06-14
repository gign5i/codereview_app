import { ReactElement } from "react";
import styles from "@/widgets/Footer/ui/Footer.module.scss";
import { Icon, Typography } from "src/shared";
import FooterLogo from "@@/public/logo/footerLogo.webp";

const FooterContacts = (): ReactElement => (
  <div className={styles.contacts}>
    <Icon icon={FooterLogo} className={styles.footerLogo} />
    <div className={styles.contactsDetails}>
      <Typography color="white" type="h3">
        +7 (499) 110-82-76
      </Typography>
      <Typography color="gray" type="normal">
        yourcodereview@gmail.com
      </Typography>
    </div>
  </div>
);

export default FooterContacts;
