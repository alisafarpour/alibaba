import Header from '../src/header.js'
import MainMenu from '../src/components/mainmenu.js';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Image from '../src/images.js'
import Toggle from '../src/Components/toggle.js';
import Commen from '../src/commen.js';
import Text from '../src/text.js';
import Footer from '../src/footer.js';
import Imageslider from '../src/imageslider.js';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


 function Index() {
  return (
    <div >
      <Header />
      <Image />
      <MainMenu />
      {/* <Imageslider /> */}
      <Commen />
      <Toggle />
      <Text />
      <Footer />
    </div>
  )
}
export default Index