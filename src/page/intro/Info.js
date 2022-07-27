import { Link } from "react-router-dom";
import man1 from "../../static/image/characterimages/m0.gif";
import woman1 from "../../static/image/characterimages/w0.gif";
import man2 from "../../static/image/characterimages/m4.gif";
import woman2 from "../../static/image/characterimages/w4.gif";
import React, { useState } from 'react';

const Info = () => {
    const clickCheck = (event) => {
        document.querySelectorAll(`input[type=checkbox]`).forEach((el) => (el.checked = false));
        event.target.checked = true;
        setCharacterType(event.target.name)
    };
    const [info, setInfo] = useState({
        nickname: "",
        roomID: "",
    });
    const [characterType, setCharacterType] = useState("man1");
    const onChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div>
            <div>
                <label for="nickname">Your Nickname: </label>
                <input type="text" name="nickname" id="nickname" onChange={onChange}/>
            </div>

            <div>
                <label for="roomId">Select RoomId: </label>
                <input type="number" name="roomID" id="nickname" onChange={onChange}/>
            </div>

            <div>
                <label for="characterType">Choose character: </label><br/>
                <input type="checkbox" name="man1" onClick={clickCheck}/>
                <img src={man1} alt="No image" />
                <input type="checkbox" name="woman1" onClick={clickCheck}/>
                <img src={woman1} alt="No image" />
                <input type="checkbox" name="man2" onClick={clickCheck}/>
                <img src={man2} alt="No image" />
                <input type="checkbox" name="woman2" onClick={clickCheck}/>
                <img src={woman2} alt="No image" />
            </div>
            <Link to={encodeURI(`/main?name=${info.nickname}&roomID=${info.roomID}&characterType=${characterType}`)}>
                <button>Enter</button>
            </Link>
        </div>
    );
};

export default Info;
