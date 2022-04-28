import Header from "../src/header.js";
import MainMenu from "../src/Components/mainMenu.js";
import Image from "../src/images.js";
import Toggle from "../src/Components/toggle.js";
import Common from "../src/common.js";
import Text from "../src/text.js";
import Footer from "../src/footer.js";
import ImageSlider from "../src/imageSlider.js";
import Typography from "@mui/material/Typography";
import { toggleFirstPage } from "../src/Data/toggleFirstPage.js";

function Index() {
  return (
    <div>
      <Header />
      <Image alt="landing page image" />
      <MainMenu />
      <ImageSlider />
      <Common />
      <Typography sx={{ marginTop: 1, fontWeight: '900', fontSize: '22px', width: "86%", direction: "rtl" }}>پرسش های شما</Typography>
                {toggleFirstPage.map((item, index) => {
                    return (
                        <Toggle key={index} {...item} />
                    )
                })}
      <Text />
      <Footer />
    </div>
  );
}
export default Index;
