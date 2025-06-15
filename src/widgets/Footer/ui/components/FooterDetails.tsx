import { ReactElement } from "react";
import styles from "@/widgets/Footer/ui/Footer.module.scss";
import { Icon, Typography } from "src/shared";
import DuckGradientIcon from "@@/public/icons/duck-gradient.webp";

const FooterDetails = (): ReactElement => (
  <div className={styles.otherDetails}>
    <Typography color="gray" className={styles.innInfo}>
      ИП Примак Максим Андреевич ИНН 772142877813 ОГРН 322774600410191
    </Typography>
    <Typography color="white" className={styles.other}>
      <Icon icon={DuckGradientIcon} />
      junior for juniors
    </Typography>
  </div>
);

export default FooterDetails;
