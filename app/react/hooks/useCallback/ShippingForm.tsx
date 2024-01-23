import { memo, useState } from "react";

const ShippingForm = memo(function ShippingForm({
  onSubmit,
}: {
  onSubmit: (orderDetails: any) => void;
}) {
  const [count, setCount] = useState(1);

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // 매우 느린 코드를 재현하기 위해 500ms동안 아무것도 하지 않습니다
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    /*
    Object.fromEntries(이터러블): 이터러블인 키값 쌍의 목록을 객체 리터럴 형태로 바꿈
    - Object.entries() 의 반대
    - 이터러블에는 배열, Map 등 이 올 수 있음
    
    e.g. 키값쌍의 목록 (2차원 배열 예시)
    [ ["age", 1], ["score", "A"] ]

    - 출력 결과
    { age: 1, score: "A" }

    아래에서는 formData를 그냥 스프레드 연산자로 분해할 수 없어서 Object.fromEntries() 를 써서 객체로 만들고 스프레드 연산자 사용
    */
    const orderDetails = {
      ...Object.fromEntries(formData),
      count,
    };
    onSubmit(orderDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
});

export default ShippingForm;
