import ShippingForm from "./ShippingForm";
import type { ProductPageProps } from "./FastProductPage";

export default function SlowProductPage({
  productId,
  referrer,
  theme,
}: ProductPageProps) {
  const handleSubmit = (orderDetails: any) => {
    post("/product/" + productId + "/buy", {
      referrer,
      orderDetails,
    });
  };

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
