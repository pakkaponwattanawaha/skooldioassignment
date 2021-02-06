import React, { useState, useEffect } from 'react'


const FacultyCard = (props) => {


    console.log('inside faculty CARD', props.data)
    return (
        <div className="card-area p-3">
            {props.data && props.data.map((item =>
                <div key={item.id} className="card-container col m-1">
                    <div className="card-header-container">
                        <div className="card-photo-container d-flex justify-content-between">
                            <div>    
                                <img className="card-photo" src={item.logo} />
                            </div>
                            <div>
                                <h2 className="text-danger ">{item.faculty.name}</h2>
                                <h4 className="text-muted">{item.name}</h4>
                                <div>{item.faculty.university.name}</div>
                            </div>
                            <h1 className="text-danger ">❤</h1>
                        </div>
                    </div>

                    <div className="card-body-container col">
                        <div className="row ml-5">
                            <div className="pr-1">รอบที่เปิด </div>
                            {item.roundSeats.map((seat =>
                                <div className="pr-2 "> {seat}</div>
                            ))}
                        </div>
                        <div className="round-container d-flex justify-content-between pl-5">
                            {item.score? <div>รอบที่ 4 : {item.score.scoreType}</div>:<div>null</div>}
                            <button>แก้ไขคะแนน</button>
                        </div>
                        <div className="myscoring-container d-flex justify-content-between">
                            <div>★</div> 
                            <div>
                                <div>คะแนนของคุณคือ</div> 
                                {item.score?  <div>{item.score.id}</div>:<div>null</div>}
                            </div>
                        </div>
                        <div className="scorestat-container row d-flex justify-content-around">
                            <div>
                                {item.score?  <div>{item.score.min}</div>:<div>null</div>}
                                {item.score?  <div>คำแนนต่ำสุด{item.score.year}</div>:<div></div>}
                            </div>
                            <div>
                                {item.score?  <div>{item.score.avg}</div>:<div>null</div>}
                                {item.score?  <div>คำแนนเฉลี่ย{item.score.year}</div>:<div></div>}
                            </div>
                            <div>
                                {item.score?  <div>{item.score.max}</div>:<div>null</div>}
                                {item.score?  <div>คำแนนสูงสุด{item.score.year}</div>:<div></div>}
                            </div>
                            
                        </div>
                        <a>ดูสัดส่วนคะแนน</a>
                        <div>{item.likes}ที่สนใจ</div>
                    </div>


                </div>

            ))}
        </div>
    )
}
export default FacultyCard;