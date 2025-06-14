import { Content, Page } from "src/shared";
import { Footer, Header } from "src/widgets";
import MainPage from "@/pages/ui/MainPage";

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
