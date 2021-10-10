import { injected, walletconnect, walletlink } from "./Connectors";

import { useState, useEffect } from "react";
import { providers } from "ethers";
import { useWeb3React } from "@web3-react/core";

const ConnectButton = () => {

    const [activatingConnector, setActivatingConnector] = useState();
    const [ethereum, setEthereum] = useState();
    const {
        connector,
        activate,
        deactivate,
        error,
        account,
        chainId,
    } = useWeb3React();

    useEffect(() => {
        if (chainId && chainId !== 1) {
        deactivate();
        }
    }, [chainId, deactivate]);

    useEffect(() => {
        const { ethereum } = window;
        setEthereum(ethereum);
      }, []);

    const onConnectClick = ( ) => {
        const web3connector = injected
        if (connector === web3connector) {
            deactivate();
        } else {
        setActivatingConnector(web3connector);
        activate(web3connector);
        // setVisible(false);
        }
    };

    return (
        <button className="connectWallet" onClick={onConnectClick}>
            CONNECT WALLET
        </button>
    )

}

export default ConnectButton