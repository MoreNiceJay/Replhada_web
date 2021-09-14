import React from "react";
import "./Contact.css";
import Footer2 from "../components/Footer02"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function Contact() {
    const classes = useStyles();

    return (

        <>

            <Navbar />
            <main>
                <div>
                    <div className="contact_title_section" >
                        <span className="contact_title_section_title" >문의하기</span>
                        <span className="contact_title_section_descryption">리플하다에게 문의 주시면 언제나 친절히 답변해드리겠습니다</span>

                    </div>
                </div>
                <div className="contact_info_section">
                    <div className="contact_info" >
                        <span className="contact_title">전화문의</span>
                        <span className="contact_text">0507-1487-1179</span>
                    </div>
                    <div className="contact_info">
                        <span className="contact_title">이메일문의</span>
                        <span className="contact_text">replhada@gmail.com</span>
                    </div>
                    <div className="contact_info">
                        <span className="contact_title">주소</span>
                        <span className="contact_text">경기도 파주시 금바위로 100, 302-904 (10895) </span>


                    </div>

                </div>
                <div className="or_message_container">
                    <span className="or_message_text">혹은, 메세지를 남겨주세요</span>
                </div>

                <div className="send_message_container">
                    <div className="message_content_container">
                        {/* 이름 */}
                        <span className="message_content_title">성함</span>
                        <TextField variant="outlined"
                            required className="message_content_textfield" placeholder="예)홍길동" />

                        {/* 텍스트필드 */}
                    </div>
                    <div className="message_content_container">
                        {/* 이메일주소 */}
                        <span className="message_content_title">이메일 주소</span>
                        <TextField variant="outlined"
                            required className="message_content_textfield" placeholder="예)email@gmail.com" />
                    </div>
                    <div className="message_content_container">
                        {/* 연락처 */}
                        <span className="message_content_title">연락처</span>
                        <TextField variant="outlined"
                            required className="message_content_textfield" placeholder="예)01024683579" />
                    </div>
                    <div className="message_content_container">
                        {/* 제목 */}
                        <span className="message_content_title">제목</span>
                        <TextField variant="outlined"
                            required className="message_content_textfield" placeholder="예)음식점 가맹 문의" />
                    </div>
                    <div className="message_content_container">
                        {/* 내용 */}
                        <span className="message_content_title">내용</span>
                        <TextField required multiline
                            rows={4} className="message_content_textfield" variant="outlined"
                            placeholder="예)홍길동" />
                    </div>
                    {/* 버튼 */}
                    <div className="message_send_button_container">
                        <Button variant="outlined" className="message_send_button" color="primary">보내기</Button>
                    </div>

                </div>
                <Footer2></Footer2>

            </main>

        </>
    );
}
0