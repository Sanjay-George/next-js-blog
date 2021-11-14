import Image from "next/image";
import { useEffect, useState } from "react";
import loader from "../public/images/loader.gif";

export default function Loader({ isActive }) {
  const [showLoader, setShowLoader] = useState(isActive);

  return showLoader ? (
    <>
      <Image src={loader} alt="Loader" height={100} width={100} />
    </>
  )
  : null;
}
