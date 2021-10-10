import { forwardRef, useImperativeHandle, useState } from 'react'
import { Modal } from 'react-bootstrap';
import genderImg from '../assets/img/genderImg.png'
import SimpleForm from './SimpleForm'

const sellGenderScheme = {
    inputs: [
        { type: "text", placeholder: "Gender ID" },
        { type: "text", placeholder: "Price in ETH" },
    ]
}

const transferGenderScheme = {
    inputs: [
        { type: "text", placeholder: "Gender ID" },
        { type: "text", placeholder: "Price in ETH" },
    ]
}

const takeGenderScheme = {
    inputs: [
        { type: "text", placeholder: "Gender ID" },
    ]
}

const GenderModal = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useImperativeHandle(ref, () => ({
        openModal () {
            handleShow()
        }
    }));
    
    return (
        <>
            <Modal size="sm" centered show={show} onHide={handleClose}>
                <div className="window">
                    <div className="title-bar">
                        <div className="title-bar-text">Mail.gender</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize" />
                            <button aria-label="Maximize" />
                            <button aria-label="Close" onClick={handleClose} />
                        </div>
                    </div>

                    <div className="window-body">
                        <div className="row">
                            <div className="col">
                                <img src={genderImg} className="gender-img" alt="" />
                            </div>
                            <div className="col">
                                <div className="gender-title mb-2">
                                    Mail
                                </div>
                                <div className="gender-price">
                                    1000 ETH
                                </div>
                                <p className="gender-description mt-3">
                                    Launched in 2017, EtherRock was one of the first crypto collectible NFT-type projects on the Ethereum blockchain, having launched shortly after CryptoPunks. Only 100 rocks can ever be available, and each new virgin rock gets more and more expensive.
                                </p>
                                <div className="d-flex">
                                    <button>Owner</button>
                                    <button className="mx-3">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <SimpleForm title="Sell Gender" sumbitText="Sell" scheme={sellGenderScheme} />
                            </div>
                            <div className="col">
                                <SimpleForm title="Transfer Gender" sumbitText="Transfer" scheme={transferGenderScheme} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <SimpleForm title="Take Gender of the market" sumbitText="Take off" scheme={takeGenderScheme} />
                            </div>
                            <div className="col" />
                        </div>

                    </div>
                </div>
            </Modal>
        </>
    );
})

export default GenderModal