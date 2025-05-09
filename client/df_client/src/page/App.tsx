import GlitchText from "../assets/components/GlitchText"
import Magnet from "../assets/components/Magnet";
import TrueFocus from "../assets/components/TrueFocus";
import '../assets/css/App.css'
import VariableProximity from "../assets/components/VariableProximity";
import { useRef, useState } from "react";
import GradientText from "../assets/components/GradientText";
import CircularGallery from "../assets/components/CircularGallery";
import Carousel from "../assets/components/Carousel";
import SpotlightCard from "../assets/components/SpotlightCard";
import Reveal from "../assets/components/Reveal";
import Upload from "../modal/Upload";
const App: React.FC<{}> = ({ }) => {
  const containerRef = useRef(null);
  const [modalUpload,setModalUpload] = useState(false);
  const [image,setImage] = useState("https://petapixel.com/assets/uploads/2022/07/kate_2drivers_1024_compressed-2.gif")
  const [detectList,setDetectList] = useState([])
  return (
    <>
      <div className="header" style={{position:'fixed',width:'100%',background:'rgba(0, 0, 0, 0.3)'}}>
        <div className="bar_wrap" style={{padding :'20px'}}>
        <div style={{
            display :'flex',
            alignItems:'center',
          }}>
          <div style={{
              marginRight : 'auto'
              }}>
            <GlitchText
              speed={1.2}
              enableShadows={true}
              className='fs35x'
              >
            deepfake
            </GlitchText>
          </div>
          <div>
            <Magnet padding={50} disabled={false} magnetStrength={1}>
            <a href="https://github.com/mvtvn78/deepPhake" target="_blank" className='fs24x'>
                <div style={{
                  color:'white',
                  display : 'flex'
                }}> 
                    Repo trên&nbsp;
                    <p style={{
                      color:'rgb(0, 240, 255)'
                    }}>Github</p>
                </div>
            </a>  
            </Magnet>
          </div>
        </div>
        </div>
      </div>
      <div className="main" style={{paddingTop:'100px'}}>
      <Reveal index_Delay={0.16} >  
        <div className="detection cl_white sect_margin">
              <div style={{display:'flex',justifyContent:'center',gap:'40px'}}>
                <div style={{display:'flex',alignItems:'center'}}>
                  <div className="content"> 
                  <h1 className="cl_blue" style={{textTransform:'uppercase'}}>Phát hiện deepfake</h1>
                    <h3 style={{marginBottom:'50px',marginTop:'20px'}}>Tải lên tấm ảnh để xem khả năng nó là deepfake</h3>
                    <div style={{marginBottom:'40px'}}>
                      <TrueFocus 
                      sentence="Giả Thật"
                      manualMode={false}
                      blurAmount={5}
                      borderColor="white"
                      animationDuration={2}
                      pauseBetweenAnimations={1}
                      />
                      </div>
                  <button style={{fontSize:'30px'}} onClick={()=>setModalUpload(true)}>
                    <GradientText 
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={true}
                        className="p_button"
                          >
                      Tải lên
                      </GradientText>
                  </button>
                  </div>
                </div>
                <div>
                  <img style={{
                    objectFit:'contain',
                    width:'800px',
                    height:'400px'
                  }} src={image} alt="" id="image-output"/>
                  {detectList.length > 0 &&  <div className="predict">
                    <p style={{margin:'10px',fontSize:'20px',fontWeight:'bolder'}}>Kết quả dự đoán</p>
                    <div style={{display:'flex',justifyContent:'center',gap:'20px'}}>
                      <div style={{width:'20px',height:'20px',backgroundColor:'#0a8e28'}}></div> Thật
                      <div style={{width:'20px',height:'20px',backgroundColor:'#FA0204'}}></div> Giả
                    </div>
                    <div className="detectList">
                      {detectList.map((val :any)=>  <div style={{display:'flex'}}>
                        <div className="col-lg-3">
                          <img src={val.image} style={{width: '80px',height:'80px',objectFit:'contain', margin: '10px'}} />
                          </div>
                          <div  style={{margin: 'auto',width:'100%'}}>
                            <div >
                              <div style={{margin:'10px'}}>
                                <div style={{textAlign:'right'}}>{val.Real}%</div>
                                <span  style={{width: '100%',backgroundColor : '#0a8e28',display:'inline-block',height:'10px',borderRadius:'5px'}} />
                              </div>
                              <div style={{margin:'10px'}}>
                                <div style={{textAlign:'right'}}>{val.Fake}%</div>
                                <span  style={{width: '100%',backgroundColor : '#FA0204',display:'inline-block',height:'10px',borderRadius:'5px'}} />
                              </div>
                             
                            </div>
                            </div>
                        </div>)}
                     </div>
                  </div>}
                </div>
              </div>
          </div>
      </Reveal>
        
      <Reveal index_Delay={0.20} >
      <div className="instruction sect_margin">
       
       <div className="instuction_title t_center fs_title t_upper" ref={containerRef}
         style={{position: 'relative'}}>
            
         <VariableProximity
             label={'Hướng dẫn sử dụng'}
             className={'variable-proximity-demo cl_white' }
             fromFontVariationSettings="'wght' 400, 'opsz' 9"
             toFontVariationSettings="'wght' 1000, 'opsz' 40"
             containerRef={containerRef}
             radius={150}
             falloff='linear'
         />
       </div>
       <div style={{  position: 'relative', display:'flex', justifyContent:'center' }}>
         <Carousel
           baseWidth={1440}
           autoplay={true}
           autoplayDelay={3000}
           pauseOnHover={true}
           loop={true}
           round={false}
         />
     </div>
   </div>
    </Reveal>
    <Reveal index_Delay={0.24} >
    <div className="author sect_margin">
        <div className="author_title t_center fs_title t_upper" ref={containerRef}
              style={{position: 'relative'}}>
              <VariableProximity
                  label={'Đội ngũ phát triển'}
                  className={'variable-proximity-demo cl_white' }
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef}
                  radius={150}
                  falloff='linear'
              />
            </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'20px',gap:'50px'}}>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="cl_white">
              <div style={{display:'flex',justifyContent:'center'}}>
                <img src="ltyn.jpg"  alt="" width={200} height={200} />
              </div>
              <h3 className="t_center p_10 t_upper">Sinh viên thực hiện</h3>
              <p className="t_center">Lê Thị Yến Nhi</p>
            </div>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="cl_white">
             <div style={{display:'flex',justifyContent:'center'}}>
              <img src="https://avatars.githubusercontent.com/u/130427662?v=4"  alt="" width={200} height={200} />
             </div>
              <h3 className="t_center p_10 t_upper">Giáo viên hướng dẫn</h3>
              <p className="t_center">Vũ Thị Hạnh</p>
            </div>
          </SpotlightCard>
         
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="cl_white">
            <div style={{display:'flex',justifyContent:'center'}}>
              <img src="mvt.jpg"  alt="" width={200} height={200} style={{objectFit:'cover'}} />
             </div>
              <h3 className="t_center p_10 t_upper">Sinh viên thực hiện</h3>
              <p className="t_center">Mai Văn Tiền</p>
            </div>
          </SpotlightCard>
        </div>
        </div>
    </Reveal>
    <Reveal index_Delay={0.28} >
    <div className="sample">
          <div className="sample_title t_center fs_title t_upper" ref={containerRef}
                style={{position: 'relative'}}>
                <VariableProximity
                    label={'Các mẫu đã thực nghiệm'}
                    className={'variable-proximity-demo cl_white' }
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={150}
                    falloff='linear'
                />
              </div>
          <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
          </div>
        </div>
    </Reveal>
       
     
      </div>
      <Upload show={modalUpload} setVisible={setModalUpload} setImage={setImage}  setDetectList={setDetectList} />
      {modalUpload && <button title="thoát" className="exit_modal" onClick={()=>{setModalUpload(false)}}>X</button>}
    </>
  )
};
export default App

