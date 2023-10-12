import React from "react";
import "../styles/footer.css";
import AppleIcon from '@material-ui/icons/Apple';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Footer() {
    return (<>
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

export default Footer;
