import MainPage from "@/pages/main/ui/mainPage";
import { Content, Page } from "@/shared";
import Header from "../widgets/Header/ui/Header";
import { Footer } from "@/widgets";

const Home = () => (
  <Page>
    <Header />
    <Content>
      <MainPage />
    </Content>
    <Footer />
  </Page>
);
export default Home;
