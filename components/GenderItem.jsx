import { useRef } from 'react'

import genderImg from '../assets/img/genderImg.png'
import GenderModal from './GenderModal'

function GenderItem (props) {

    const modalRef = useRef();

    const handleClick = () => modalRef.current.openModal()

    return (
        <div className="gender-item">
            <div className="window" onClick={handleClick}>
                <div className="title-bar">
                    <div className="title-bar-text">About.txt</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" />
                    </div>
                </div>

                <img src={genderImg} className="gender-img" alt="" />

                <div className="window-body">
                    <div className="gender-title mb-2">
                        Mail
                    </div>
                    <div className="gender-price">
                        1000 ETH
                    </div>
                </div>
            </div>
            <GenderModal ref={modalRef} />
        </div>
    )
}

export default GenderItem
