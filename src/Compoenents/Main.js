import React, { useState } from 'react'
import "./Main.css"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { data } from "../Data"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedoIcon from '@mui/icons-material/Redo';

const Main = () => {
    const [state, setState] = useState(data)
    return (
        <div className='main'>
            <h1>Summer Art Camp ! 5 Days of Artists and Painting Monet Van Gogh , 
            Matisse , & more</h1>
            <h3>Multi-Day Course <HelpOutlineIcon /></h3>
            <div className="container">
                <div className="UserInfo">
                    {
                        state.map((item) => {
                            return (
                                <div key={item.id} className="inner__data">
                                    <p>{item.discription}</p>
                                    <img src={item.img} alt="img" /> <span className='title'>{item.title}</span>
                                    <h4>{item.starTitle1}</h4>
                                    <h4>{item.starTitle2}</h4>
                                    <h5>{item.studentParticipation}</h5>
                                    <ul>
                                        <li><button>See Class Schedule > </button></li>
                                        <li><FavoriteBorderIcon />Save</li>
                                        <li><RedoIcon /> Share</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="img1">
                    <img src="https://www.thoughtco.com/thmb/daVvFFPKbbOpNUqQ2kI0GAHA34s=/1800x1350/smart/filters:no_upscale()/vvg_cotn_moma_16-56a03a263df78cafdaa092d2.jpg" alt="" />
                </div>
                <div className="img2">
                    <img src="https://i.ytimg.com/vi/JzFPDQuURxE/maxresdefault.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main