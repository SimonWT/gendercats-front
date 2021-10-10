import catText from '../assets/img/catText.png'

function About () {
    return (
        <div className="window white">
            <div className="title-bar">
                <div className="title-bar-text">About.txt</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" />
                    <button aria-label="Maximize" />
                    <button aria-label="Close" />
                </div>
            </div>

            <div className="window-edit d-flex">
                <div className="edit-option">File</div>
                <div className="edit-option">Edit</div>
                <div className="edit-option">View</div>
                <div className="edit-option">Help</div>
            </div>

            <div className="window-body">
                <h1 className="d-flex justify-content-center align-items-center">CHOOSE YOUR <img src={catText} className="cat-text" alt="cat text" />  IDENTITY!!</h1>
                <h4 className="text-left px-4 py-2">Launched in 2017, EtherRock was one of the first crypto collectible NFT-type projects on the Ethereum blockchain, having launched shortly after CryptoPunks. Only 100 rocks can ever be available, and each new virgin rock gets more and more expensive. This game is built entirely on the Ethereum blockchain, with a decentralized smart contract (deployed here) used to manage everything including the buying and selling of rocks, their prices and owners (though this website is still necessary so you can see pretty pictures of the rocks). <br /> <br />  These virtual rocks serve NO PURPOSE beyond being able to be brought and sold, and giving you a strong sense of pride in being an owner of 1 of the only 100 rocks in the game :)</h4>
            </div>
        </div>
    )
}

export default About