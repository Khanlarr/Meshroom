import React,{useState} from 'react'
import inputbg from '../../assets/img/inputbg.webp'
import DashedLine from '../../assets/img/dashed-line.svg'

function JoinOurLeft() {
    const [width,setWidth]=useState(true)
    const changeWidth=()=>{
        if(window.screen.width>=1024){
          setWidth(false)
        }
        else{
            setWidth(true)
        }
    }
    window.addEventListener('scroll',changeWidth)
    return (
        <div data-aos={width?"zoom-in":"fade-right"} className='joinLeft'>
            <div className="joinLeftHeading">
                <h2>Join to our</h2>
            </div>

            <div className="joinLeftForm">
                <form>

                    <label>
                        <p>name</p>
                        <img className='inputbg' src={inputbg} alt="uk-print-workshop" />
                        <input type="text" placeholder='Name'/>
                    </label>
                   
                    <label>
                        <p>email</p>
                        <img className='inputbg' src={inputbg} alt="meshroom" />
                        <input type="email" placeholder='email' />
                    </label>

                    <div className="mainButtonBack joinButton">
                        <button type='submit' className="mainButton">
                            <div className="mainButtonInside joinButtonInside">
                                <span className="btn-paint-main"></span>
                                <span className="btn-paint-main"></span>
                                <span className="btn-paint-main"></span>
                                <span className="btn-paint-main"></span>
                                <span className="btn-paint-main"></span>
                                <span className="btn-paint-main"></span>
                                <p className="btn-label-p jointext">Join</p>
                            </div>
                        </button>
                    </div>

                </form>
            </div>

            <div className='joinLeftDashedLine'>
                <img src={DashedLine} alt="sublimation-printing" />
            </div>
        </div>
        
    )
}

export default JoinOurLeft
