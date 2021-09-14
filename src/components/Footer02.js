import React from "react";
import "../styles/footer.css";
import AppleIcon from '@material-ui/icons/Apple';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Footer() {
    return (<>
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

export default Footer;
