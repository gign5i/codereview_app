import { Typography } from "@/shared";
import styles from "./mainPage.module.scss";
import Card from "../../../shared/ui/Card/ui/Card";
import Portfel from "@@/public/icons/briefcase.webp";
import Image from "next/image";

const MainPage = () => {
  console.log(Portfel);
  return (
    <div>
      <Typography type={"h3"}>
        Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу
      </Typography>
      <div>Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу</div>
      <Card header={<Image src={Portfel} alt="icon" objectFit={"fill"} className={styles.icon} />}>
        [wq
      </Card>
    </div>
  );
};

export default MainPage;
