import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


function Week({ apple }) {

    const histori = useHistory();
    const [n, s] = useState(Math.floor(Math.random() * 5));

    return (
        <Contain>
            {apple}
            {Array.from({ length: 5 }, (a, i) => {
                return (<div><Circle style={{ backgroundColor: n < i ? "#ddd" : "#198754" }} /></div>);
            })

            } <div><Triangle onClick={() => {
                histori.push(`/page/${apple}`)
            }} /></div>
        </Contain>
    );
}



function Main() {

    let days = ["일", "월", "화", "수", "목", "금", "토",]
    const today = new Date().getDay();
    let passDay = days.splice(0, today);
    days = days.concat(passDay);
    console.log(days);
    const histor = useHistory();


    return (
        <div>
            <Title>
                <h1 onClick={() => {
                    histor.push("/");
                }}>내 일주일은?</h1>
                {
                    days.map((x) => (
                        <Week apple={x} />
                    ))
                }
            </Title >

        </div>
    );
}


const Contain = styled.div`
    display: flex;
    gap: 20px;
    
`;

const Circle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid gray;
    background-color: #ddd;    
`;


const Title = styled.div`
    background-color: #fd7e14;
    width: 50vw;
    max-width: 350px;
    margin: auto;
    height: 80vh;
    padding: 25px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 10px;
`;

const Triangle = styled.div` 
    width: 0px;
    height: 0px;
    border-left: 25px solid purple;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
`;


export default Main;