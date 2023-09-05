import { ThirdwebSDK } from "@thirdweb-dev/sdk"
import dotenv from "dotenv";
// An example of a signer using the ethers library
import ethers from "ethers";
dotenv.config({
    path: ".env"
});

(async () => {



    const signer = new ethers.Wallet(process.env.PRIVATE_KEY);

    const sdk = ThirdwebSDK.fromSigner(signer,'mumbai', {
        clientId: process.env.CLIENT_ID,
        secretKey: process.env.API_KEY,
        
    });


    const packAddress = "0xE64933c9DaEc0666083F23dAD7e1C80Ed0B35fe9";
    const cardAddress = "0x55D44613b549c131069902A798b99fC6CA96C2BE";

    const pack = sdk.getContract(packAddress, "pack");





    const card = sdk.getContract(cardAddress, "edition");
    await (await card).setApprovalForAll(packAddress, true);
    console.log("Approved card contract to transfer cards to pack contract");

    const packImage = "ipfs://QmV5NPbaVaoGEJnYR8P2YXQYy11XWWPPJNSzzC6Pt4XrLs/Blank-Package-PNG-Image.png";

    const createPacks = (await pack).create({
        packMetadata: {
            name: "Pack 2",
            description: "A new card pack",
            image: packImage,
        },
        erc1155Rewards: [
            {
                contractAddress: cardAddress,
                tokenId: 1,
                quantityPerReward: 1,
                totalRewards: 5,
            },
        ],
        rewardsPerPack: 1,
    });

    console.log("Packs created");
})();