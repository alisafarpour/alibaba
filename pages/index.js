import MainMenu from "../src/Components/mainMenu.js";
import Image from "../src/images.js";
import Toggle from "../src/Components/toggle.js";
import Common from "../src/common.js";
import Text from "../src/text.js";
import ImageSlider from "../src/imageSlider.js";
import Typography from "@mui/material/Typography";
import { toggleFirstPage } from "../src/Data/toggleFirstPage.js";
import { Grid } from "@mui/material";

function Index() {
  return (
    <div>
      <Image alt="landing page image" />
      <MainMenu />
      <ImageSlider />
      <Common />
      <Grid containerdirection="row-reverse"
        justifyContent="center"
        alignItems="center" >
        <Grid container direction="row-reverse"
        justifyContent="flex-start"
        alignItems="center" xl={10.3}
        lg={10.3}
        md={11.5}
        xs={12}>
          <Typography sx={{ marginTop: 5, fontWeight: '900', fontSize: '22px' }}>پرسش های شما</Typography>

        </Grid>

      </Grid>
      {toggleFirstPage.map((item, index) => {
        return (
          <Toggle key={index} {...item} />
        )
      })}
      <Text />
    </div>
  );
}
export default Index;
