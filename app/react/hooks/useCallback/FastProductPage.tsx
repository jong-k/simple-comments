import { useCallback } from "react";
import ShippingForm from "./ShippingForm";

export interface ProductPageProps {
  productId: number;
  referrer: string;
  theme: "dark" | "light";
}

export default function FastProductPage({
  productId,
  referrer,
  theme,
}: ProductPageProps) {
  const handleSubmit = useCallback(
    (orderDetails: any) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer],
  );

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

function post(url: string, data: any) {
  // 요청을 보낸다고 생각하세요...
  console.log("POST /" + url);
  console.log(data);
}
