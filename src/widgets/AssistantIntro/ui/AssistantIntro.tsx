"use client";

import { ReactElement } from "react";
import { Typography, useWindowResolution } from "@/shared";
import SophieAvater from "@@/public/images/Sophie/SophieAvatarSmall.webp";
import Image from "next/image";
import styles from "./AssistantIntro.module.scss";

const AssistantIntro = (): ReactElement => {
  const { isMobile } = useWindowResolution();

  return (
    <section className={styles.assistantIntroRoot}>
      <Image src={SophieAvater} alt="sophie-avatar" className={styles.sophieAvatar} />
      <Typography type={isMobile ? "h2" : "h1"}>Твой Ассистент по поиску работы</Typography>
      <Typography type={isMobile ? "normal" : "title"}>
        Я собрала для тебя все в одном месте, чтобы ты смог быстро найти работу
      </Typography>
    </section>
  );
};
export default AssistantIntro;
