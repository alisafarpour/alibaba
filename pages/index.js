import Header from "../src/header.js";
import MainMenu from "../src/components/mainMenu.js";
import Image from "../src/images.js";
import Toggle from "../src/Components/toggle.js";
import Common from "../src/common.js";
import Text from "../src/text.js";
import Footer from "../src/footer.js";
import Imageslider from "../src/imageslider.js";
import Typography from "@mui/material/Typography";
import { toggleFirstPage } from "../src/Data/toggleFirstPage.js";

function Index() {
  return (
    <div>
      <Header />
      <Image />
      <MainMenu />
      <Imageslider />
      <Common />
      <Typography sx={{ marginTop: 1, fontWeight: '900', fontSize: '22px', width: "86%", direction: "rtl" }}>پرسش های شما</Typography>
                {toggleFirstPage.map((item) => {
                    return (
                        <Toggle {...item} />
                    )
                })}
      <Text />
      <Footer />
    </div>
  );
}
export default Index;
