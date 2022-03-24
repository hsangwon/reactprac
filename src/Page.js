import React, { useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";


const Page = (props) => {

    const history = useHistory();
    const params = useParams();
    console.log(params);
    const [n, sN] = useState(0);

    return (
        <Container>
            <div>
                <span>{params.apples}</span>요일 평점 남기기

            </div>
            <div style={{ display: "flex" }}>

                {Array.from({ length: 5 }, (a, i) => {
                    return (
                        <BtCircle key={i} onClick={() => {
                            sN(i + 1)
                        }} style={{ backgroundColor: n <= i ? "rgb(221, 221, 221)" : "#198754" }} />
                    );
                })
                }
            </div>< Review onClick={() => {
                history.push("/");
            }}> 평점 남기기</Review>
        </Container >
    );
};



const Container = styled.div`
    max-width: 350px;
    width: 80vw;
    height: 90vh;
    margin: 5vh auto;
    padding: 5vh 5vw;
    border: 1px solid rgb(221, 221, 221);
    box-sizing: border-box;
    border-radius: 5px;
    gap: 10px;
    background-color: #fd7e14;
`;


const BtCircle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    background-color: rgb(221, 221, 221);
`;

const Review = styled.div`
    width: 100%;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: rgb(255, 255, 255);
`;

export default Page;