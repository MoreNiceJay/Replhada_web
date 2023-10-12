import React from "react";
import "./Home.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { GrGooglePlay } from 'react-icons/fa';

import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import AppleIcon from '@material-ui/icons/Apple';
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: "white",
        padding: "15%"

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function Home() {
    const classes = useStyles();
    window.location.replace('https://www.tpcompany.net/');

    return (

        <>

            <Navbar />
            <main>
                {/* <HeroBanner /> */}
                <div className="main_container_above" />
                <div className="main_container">
                    <div className="main_side">
                        <div className="main_image_container">
                            <img className="main_image" src="./images/replhada-right.jpg" alt="google play store" />
                        </div>

                        <div className="main_text_container">
                            <div className="main_text">
                                <p className="main_text_title">내손 안의 에코 메이트</p>
                                <p className="main_text_des">우리의 작은 노력이 환경을 생각하는 선한 영향력이 되어 세상을 변화 시킬 수 있습니다.
                                    <br /> 리플하다의 파트너가 되어 아름다운 환경을 지키는 일에 동참 해주세요.
                                </p>
                            </div>
                            <div className="main_button">
                                <a href="https://apps.apple.com/kr/app/%EB%A6%AC%ED%94%8C%ED%95%98%EB%8B%A4/id1585597341" className="download-btn__img">
                                    <img src="./images/app_btn1.webp" alt="app store" />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.replhada.replhada" className="download-btn__img">
                                    <img src="./images/app_btn2.webp" alt="google play store" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>



                {/* vidoe */}
                <div className="vidoe_container">

                    <iframe className="vidoe" src="https://www.youtube.com/embed/eBCmgUL-Me8?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <span className="vidoe_des" >일회용 플라스틱을 줄이기 위한, 리플하다의 solution을 소개 합니다.

                    </span>
                </div>
                {/* vidoe */}

                {/* businessModel */}
                <div className="business_container">
                    <p className="zerowaste_title">
                        Business Model

                    </p>
                    <div className="business_image_container_margin">
                        <div className="business_image_container">
                            <div className="business_image1_container">
                                <img className="business_image1" src="./images/businessModel.png" alt="google play store" />
                            </div>
                            <div className="business_image2_container">

                                <img className="business_image2" src="./images/screenshot.png" alt="google play store" />
                            </div>
                        </div>
                        <div className="business_text_container">
                            <p className="business_text1">
                                리플하다의 파트너로 등록하시면, 추가 수익을 기대 할 수 있습니다.

                            </p>
                            <p className="business_text2">
                                지속적인 partnership 은 물론, 플랫폼이 효과적으로 운용될 수 있도록 서비스 개선에 항상 노력할 것입니다.

                            </p>
                        </div>
                    </div>
                </div>

                {/* businessModel */}

                {/* zero waste */}
                <div className="zerowaste_container">

                    <div className="zerowaste_text_container" >
                        <span className="zerowaste_title" >모바일 앱으로 실천하는 제로 웨이스트</span>
                        <span className="zerowaste_des" >리플하다는 일회용기를 다회용기로 대체해 나가기 위해 앞장서고 있습니다.환경을 생각하는 소비자가 조금 더 편하게 zero waste 를 실천 할 수 있도록 다양한 다회용기 개발과 보급에 노력 하고 있습니다.</span>
                        {/* <Card className="zerowaste_text_image_card" > */}
                        <img className="zerowaste_text_image" src="./images/service.png" alt="google play store" />
                        {/* </Card  > */}
                    </div>
                    <div className="zerowaste_image_container" >
                        <div className="zerowaste_image_container1" >
                            <img src="./images/supply1.png" alt="google play store" className="zerowaste_image1" />

                        </div>
                        <div className="zerowaste_image_container2" >
                            <img className="zerowaste_image2" src="./images/supply2.png" alt="google play store" />
                        </div>
                    </div>
                </div>



                {/* zero waste */}

                {/* pics */}
                <div className="pics_container" >
                    <div className="pics_container_container" >
                        <div className="pics_pic1_container" >
                            <img className="pics_pic1" src="./images/green.jpg" alt="google play store" ></img>
                            <span className="pics_pic_text" > 환경과</span>
                        </div>
                        <div className="pics_pic2_container" >
                            <img className="pics_pic2" src="./images/grim4.jpg" alt="google play store" ></img>
                            <span className="pics_pic_text" > 배달음식</span>
                        </div>
                        <div className="pics_pic3_container" >
                            <img className="pics_pic3" src="./images/grim2.png" alt="google play store"></img>
                            <div className="pics_pic3_lastText" >
                                <span className="pics_pic_text3" >어느 것도  <span className="pics_pic_text5">놓칠 수 없다면...</span></span>
                                <span className="pics_pic_text4" ><span className="pics_pic_text4">리플하다</span> 입니다</span>

                            </div>
                        </div>
                    </div>
                    <div className="pics_text_container" >
                    </div>
                </div>




                {/* <div style={{ marginTop: "150px", width: "100%", height: "600px", backgroundColor: "#fff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "50%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                        <span style={{ marginTop: "24px", fontSize: "32px", letterSpacing: "-.8px", lineHeight: "1.29", fontWeight: "700", marginBottom: "42px" }}> 환경을 위한 선택</span>
                        <span style={{ marginTop: "24px", fontSize: "16px", letterSpacing: "-.5px", lineHeight: "1.75", fontWeight: "400", color: "#666666", width: "50%" }}>리플하다는 순환 플랫폼으로써 수거, 세척, 렌탈을 통해 배달을 통해 사용되는 일회용기를 친환경 다회용기로 교체해 드리고 있습니다.  </span>
                    </div>
                    <div style={{ width: "50%", height: "100%" }}>
                        <img style={{ width: "100%", height: "100%" }} src="./images/green.jpg" alt="google play store" />
                    </div>
                </div>

                <div style={{ width: "100%", height: "600px", backgroundColor: "#fff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "50%", height: "100%" }}>
                        <img style={{ width: "100%", height: "100%" }} src="./images/grim4.jpg" alt="google play store" />
                    </div>
                    <div style={{ width: "50%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                        <span style={{ marginTop: "24px", fontSize: "32px", letterSpacing: "-.8px", lineHeight: "1.29", fontWeight: "700", marginBottom: "42px" }}>더욱 위생적인 선택</span>
                        <span style={{ marginTop: "24px", fontSize: "16px", letterSpacing: "-.5px", lineHeight: "1.75", fontWeight: "400", color: "#666666", width: "50%" }}> 리플하다의 세척 파트너들은 6단계 세척 프로세스를 도입, 박테리아 제로의 완벽한 위생에 힘쓰고 있습니다. 용기가 배달되는 와중에도 완벽한 밀폐력을 더해 외부 오염을 100% 차단합니다. </span>
                    </div>

                </div>


                <div style={{ width: "100%", height: "600px", backgroundColor: "#fff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ width: "50%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>

                        <span style={{ marginTop: "24px", fontSize: "32px", letterSpacing: "-.8px", lineHeight: "1.29", fontWeight: "700", marginBottom: "42px" }}>파트너스</span>
                        <span style={{ marginTop: "24px", fontSize: "16px", letterSpacing: "-.5px", lineHeight: "1.75", fontWeight: "400", color: "#666666", width: "50%" }}>리플하다의 가맹점(음식점), 배달, 세척 파트너들은 깨끗한 환경을 위해 쉴새없이 열심히 역할을 해내고 있답니다. 리플하다가 그리는 친환경 세상에 지금 참여하세요.</span>
                    </div>
                    <div style={{ width: "50%", height: "100%" }}>
                        <img style={{ width: "100%", height: "100%" }} src="./images/grim2.png" alt="google play store" />
                    </div>
                </div> */}

                {/* pics */}

                {/* Last */}

                <div className="last_pic_container">

                    <div className="last_pic_container_container" >
                        <img className="last_pic" src="./images/grim3.png" alt="google play store" />
                    </div>
                </div>
                {/* Last */}


                {/* <Features /> */}
                {/* <Services /> */}
                {/* <Pricing /> */}
                {/* <Download /> */}
            </main>
            {/* <Footer /> */}
            <div className="footer_container" ></div>
            <div className="footer_container_container"  >
                <div className="" ></div>
                <div className="footer_company_container"  >
                    <img className="footer_company_logo" src="./images/replhadalogo_2.png" alt="App Preview" />
                    <span className="footer_company_name"  >@2021 dbi, Inc</span>
                </div>
                <div className="footer_company_info_container"  >
                    <span className="footer_company_info_text"  >사업자 정보</span>
                    <span className="footer_company_info_daepyo_text"  >대표자 : 김기선</span>
                    <span className="footer_company_info_address_text"  >주소:경기도 파주시 금바위로 100, 302-904 (10895)</span>
                    <span className="footer_company_info_number_text"  >사업자등록번호 : 774-02-01929</span>
                    <span className="" > </span>
                </div>
                <div className="footer_company_contact_container"  >
                    <span className="footer_company_contact_text"  >고객센터</span>
                    <span className="footer_company_tel_text"  >전화 : 0507-1487-1179</span>
                    <span className="footer_company_fax_text"  >팩스 : 0504-165-1179</span>
                    <span className="footer_company_email_text"  >이메일 : replhada@gmail.com</span>
                    <span className="footer_company_kakao_text"  >카카오톡 : 리플하다</span>
                </div>
                <div className="footer_company_sns_container"  >
                    <a className="nav-link" href={"https://apps.apple.com/kr/app/%EB%A6%AC%ED%94%8C%ED%95%98%EB%8B%A4/id1585597341"} key={"apple-app"}>

                        <AppleIcon className="footer_company_sns_apple" />
                    </a>
                    <a className="nav-link" href={"https://play.google.com/store/apps/details?id=com.replhada.replhada"} key={"google-app"}>

                        <img className="footer_company_sns_google" src="./images/play.png" alt="App Preview" />
                    </a >
                    <a className="nav-link" href={"https://youtu.be/eBCmgUL-Me8"} key={"youtube"}>

                        <YouTubeIcon className="footer_company_sns_youtube" />
                    </a >
                </div>
                <div className="" ></div>
            </div>



        </>
    );
}
