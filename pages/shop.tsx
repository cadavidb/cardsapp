import { useContract, useDirectListings } from "@thirdweb-dev/react";
import { MARKETPLACE_ADDRESS, PACK_ADDRESS } from "../const/addresses";
import styles from "../styles/Home.module.css";
import { PackNFTCard } from "../components/PackNFT";

export default function Shop() {
    const {
        contract: marketplace,
        isLoading: loadingMarketplace,
    } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");

    const {
        data: directListings,
        isLoading: loadingDirectListings,
    } = useDirectListings(
        marketplace,
        {
            tokenContract: PACK_ADDRESS,
        }
    );
    //update listing with id 4

    



    return (
        <div className={styles.container}>
            <h1>Comprar paquetes</h1>
            <div className={styles.grid}>
                {!loadingDirectListings ? (
                    directListings?.filter((l)=> l.status!==3).map((listing, index) => (
                        <div key={index}>
                            <PackNFTCard
                                contractAddress={listing.assetContractAddress}
                                tokenId={listing.tokenId}
                            />
                        </div>
                    ))
                ) : (
                    <p>Cantidad...</p>
                )}
            </div>
        </div>
    )
};