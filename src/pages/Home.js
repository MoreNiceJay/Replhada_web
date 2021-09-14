import React from "react";
import "../styles/styles.css";

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

    return (

        <>

            <Navbar />
            <main>
                <HeroBanner />
                <div style={{ width: "100%", height: "700px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                    <iframe style={{ padding: "24px", minWidth: '560px', minHeight: "315px" }} src="https://www.youtube.com/embed/eBCmgUL-Me8?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <span style={{ marginTop: "50px", fontSize: "16px", letterSpacing: "-.5px", lineHeight: "1.75", fontWeight: "300", margin: "0 32px" }}>리플하다는 플라스틱을 줄이기 위해 다회용기 순환 프로세스를 구축합니다
                    </span>
                </div>


                <div style={{ width: "100%", height: "600px", backgroundColor: "#fff", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center" }}>

                    <span style={{ marginTop: "24px", fontSize: "32px", letterSpacing: "-.8px", lineHeight: "1.29", fontWeight: "700", marginBottom: "32px" }}>모바일 앱으로 실천하는 제로 웨이스트</span>
                    <span style={{ width: "60%", marginTop: "24px", fontSize: "16px", letterSpacing: "-.5px", lineHeight: "1.75", fontWeight: "300", color: "#666666", margin: "0 32px" }}>리플하다는 하루에 5만톤씩 버려지는 일회용기를 리플하다의 다회용기로 대체해나가고 있습니다. 환경을 생각하는 소비자가 조금 더 편하게 친환경을 실천 할 수 있도록, 가맹점이 미래를 생각하는 올바른 결정을 돕도록,  다회용기 순환의 엔드투엔드 서비스를 제공합니다. </span>
                    <Card style={{ marginTop: "60px", borderRadius: "20px", padding: "20px", paddingBottom: "40px", width: "70%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                        <img style={{ width: "80%", }} src="./images/service.png" alt="google play store" />

                    </Card>


                </div>
                <div style={{ marginTop: "150px", width: "100%", height: "600px", backgroundColor: "#fff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
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
                        <img style={{ width: "100%", height: "100%" }} src="./images/clean.jpg" alt="google play store" />
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
                        <img style={{ width: "100%", height: "100%" }} src="./images/partners.jpg" alt="google play store" />
                    </div>
                </div>





                {/* <Features /> */}
                {/* <Services /> */}
                {/* <Pricing /> */}
                {/* <Download /> */}
            </main>
            {/* <Footer /> */}

            <div style={{ height: "150px" }}></div>
            <div style={{ width: "100%", height: "250px", backgroundColor: "#fff", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "start", borderTop: "1px solid #ebebeb" }}>
                <div></div>
                <div style={{ marginTop: "24px", backgroundColor: "#fff", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center", }}>
                    <img src="./images/replhadalogo_2.png" alt="App Preview" style={{ height: "18px", }} />
                    <span style={{ marginTop: "12px", fontSize: "12px", color: "#888" }}>@2021 dbi, Inc</span>
                </div>
                <div style={{ marginTop: "24px", height: "40%", backgroundColor: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "start", }}>
                    <span style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>사업자 정보</span>
                    <span style={{ fontSize: "12px", color: "#888" }}>대표자 : 김기선</span>
                    <span style={{ fontSize: "12px", color: "#888" }}>주소:경기도 파주시 금바위로 100, 302-904 (10895)</span>
                    <span style={{ fontSize: "12px", color: "#888" }}>사업자등록번호 : 774-02-01929</span>
                    <span> </span>
                </div>
                <div style={{ marginTop: "24px", height: "40%", backgroundColor: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", }}>
                    <span style={{ marginBottom: "8px", fontSize: "12px", color: "#888" }}>고객센터</span>
                    <span style={{ fontSize: "12px", color: "#888" }}>전화 : 0507-1487-1179</span>
                    <span style={{ fontSize: "12px", color: "#888" }}>팩스 : 0504-165-1179</span>
                    <span style={{ fontSize: "12px", color: "#888" }}>이메일 : replhada@gmail.com</span>
                    <span style={{ fontSize: "12px", color: "#888" }}>카카오톡 : 리플하다</span>
                </div>
                <div style={{ marginTop: "24px", backgroundColor: "#fff", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>

                    <AppleIcon style={{
                        marginRight: "12px",
                        marginTop: "-3px"
                    }} />
                    <img src="./images/play.png" alt="App Preview" style={{ marginRight: "12px", height: "18px" }} />


                    <YouTubeIcon style={{ marginRight: "12px" }} />
                </div>
                <div></div>
            </div>

        </>
    );
}
