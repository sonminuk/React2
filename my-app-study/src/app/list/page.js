
export default function list() {
  let 상품 = ["Tomato", "Pasta", "Coconut"];
  let price = [20, 30, 40];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((item, index) => {
        return (
          <div className="food" key={index}>
            <img src="/tomato.png" alt="Tomato" className="tomatoImg" />
            <h4>
              {item} ${price[index]}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
