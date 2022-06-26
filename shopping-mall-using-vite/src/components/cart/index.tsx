import { SyntheticEvent, useCallback, useRef } from "react";
import { CartType } from "../../graphql/cart";
import CartItem from "./item";

const CartList = ({ items }: { items: CartType[] }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleCheckboxChanged = useCallback((e: SyntheticEvent) => {
    if (!formRef.current) return;
    const checkboxes = formRef.current.querySelectorAll<HTMLInputElement>(
      ".cart-item__checkbox"
    );
    const targetInput = e.target as HTMLInputElement;
    const data = new FormData(formRef.current);
    const selectedCount = data.getAll("select-item").length;

    if(targetInput.classList.contains('select-all')){
      // select-all 선택
      const allChecked = targetInput.checked
      checkboxes.forEach(inputElem => {
        inputElem.checked = allChecked
      })
    }else{
      // 개별아이템 선택시
      const allChecked = selectedCount === items.length
      formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked = allChecked
    
    }
  }, [formRef.current]);

  return (
    <div>
      <form ref={formRef} onChange={handleCheckboxChanged}>
        <label>
          <input type="checkbox" name="select-all" className="select-all" />
          전체선택
        </label>
        <ul className="cart">
          {items.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </ul>
      </form>
    </div>
  );
};

export default CartList;