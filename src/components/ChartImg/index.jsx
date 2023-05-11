import { Carousel } from 'antd';
import  {ReactComponent as ImgAbout1}  from "../../icons/about.svg";
import  {ReactComponent as ImgAbout2}  from "../../icons/about2.svg";
import  {ReactComponent as ImgAbout3}  from "../../icons/about3.svg";
const contentStyle = {
  height: '500px',
  color: '#fff',
  textAlign: 'center',
};
const ChartImg = () => (
  <Carousel autoplay >
    <div>
      <h3 style={contentStyle}><ImgAbout1/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><ImgAbout2/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><ImgAbout3/></h3>
    </div>
    {/* <div>
      <h3 style={contentStyle}>4</h3>
    </div> */}
  </Carousel>
);
export default ChartImg;