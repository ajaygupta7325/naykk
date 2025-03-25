import Image from "next/image";
import ProductCart from '../components/ProductCart';
import Jewellary from '../components/JewellarySlider';
import DropdownMenu from "@/components/DropdownMenu";
import GiftingGuide from "@/components/GiftingGuide";
import ShopByPrice from "@/components/ShopByPrice";

export default function Home() {
  

  return (
    <div>
      {/* <h1>Welcome to NAYKK</h1> */}
      <DropdownMenu />
      <Jewellary />
      <ShopByPrice />
      <GiftingGuide />
      <ProductCart  />
    </div>
  );
}
