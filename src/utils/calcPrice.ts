import { ethers } from "ethers";
import pair_ABI from 'config/abi/pair_ABI.json'
import token_ABI from 'config/abi/token_ABI.json'

const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_NODE_PRODUCTION)

export default async function calcPrice(address: string, pair_address: string) {

    //Pair Info   
    const pair_contract = new ethers.Contract(pair_address, pair_ABI, provider)     
    const [reserves, address0, address1] = await Promise.all([
        pair_contract.getReserves(),
        pair_contract.token0(),
        pair_contract.token1()
    ])
    const reserve0 = reserves[0]
    const reserve1 = reserves[1]

    //Token info
    const token_contract_0 = new ethers.Contract(address0, token_ABI, provider)
    const token_contract_1 = new ethers.Contract(address1, token_ABI, provider)
    const [decimals0, decimals1] = await Promise.all([
        token_contract_0.decimals(),
        token_contract_1.decimals()
    ]) 

    if (address === address1) {
        return parseFloat(ethers.utils.formatUnits(reserve0, decimals0))/parseFloat(ethers.utils.formatUnits(reserve1, decimals1))
    } else {
        return parseFloat(ethers.utils.formatUnits(reserve1, decimals1))/parseFloat(ethers.utils.formatUnits(reserve0, decimals0))
    }
}