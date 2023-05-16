import imgSrc1_0 from './images/课程介绍1.0.png'
import imgSrc1 from './images/课程介绍1.png'
import imgSrc2 from './images/课程介绍2.png'
import imgSrc3 from './images/课程介绍6.png'
import imgSrc4 from './images/课程介绍4.jfif'
import imgSrc5 from './images/课程介绍3.0.jfif'
import imgSrc6 from './images/课程介绍.png'
import imgSrc7 from './images/课程介绍11.png'
import imgSrc8 from './images/课程介绍7.png'
import imgSrc9 from './images/课程介绍8.jfif'
import imgSrc10 from './images/课程介绍9.jfif'
import imgSrc11 from './images/课程介绍10.jfif'
import './about.css'
const styleDiv1={
    textAlign:"center",
    overflow:"hidden",
    paddingTop:'50px',
    width:'100%'
    }
function Course() {
    return (
        <div>
            <div style={{...styleDiv1,background:"#f2f2f2"}}>
                <img src={imgSrc1} alt="imgSrc1" />
            </div>
            <div style={{...styleDiv1,background:"#f2f2f2"}}>
                <img src={imgSrc1_0} alt="imgSrc1" />
            </div>
            <div style={{...styleDiv1,background:"#f2f2f2"}}>
                <img src={imgSrc2} alt="imgSrc1" />
            </div>
            <div style={{...styleDiv1,background:"#fff"}}>
                <img src={imgSrc3} alt="imgSrc1" />
            </div>
            <div style={{...styleDiv1,background:"#fff"}}>
                <img src={imgSrc4} alt="imgSrc1" />
            </div>
            <div style={{...styleDiv1,background:"#f2f2f2"}}>
                <img src={imgSrc5} alt="imgSrc1" />
            </div>
            <div style={{...styleDiv1,background:"#f2f2f2"}}>
                <img src={imgSrc6} alt="imgSrc1" />
            </div>
            <div style={{...styleDiv1,background:"#f2f2f2"}}>
                <img src={imgSrc7} alt="imgSrc1" />
            </div>
            <div style={{...styleDiv1,background:"#f2f2f2"}}>
                <img src={imgSrc8} alt="imgSrc1" />
            </div>
            <div style={{...styleDiv1,background:"#f2f2f2"}}>
                <img src={imgSrc9} alt="imgSrc1" />
            </div>
            <div style={{...styleDiv1,background:"#ffffff"}}>
                <img src={imgSrc10} alt="imgSrc1" />
            </div>
            <div style={{...styleDiv1,background:"#ffffff"}}>
                <img src={imgSrc11} alt="imgSrc1" />
            </div>

        </div >
    )
}
export default Course