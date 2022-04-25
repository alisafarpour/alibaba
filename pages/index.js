import Header from "../src/header.js";
import MainMenu from "../src/components/mainmenu.js";
import Image from "../src/images.js";
import Toggle from "../src/Components/toggle.js";
import Commen from "../src/commen.js";
import Text from "../src/text.js";
import Footer from "../src/footer.js";
import Imageslider from "../src/imageslider.js";



function Index() {
  return (
    <div>
      <Header />
      <Image />
      <MainMenu />
      <Imageslider />
      <Commen />
      <Toggle />
      <Text />
      <Footer />
    </div>
  );
}
export default Index;
