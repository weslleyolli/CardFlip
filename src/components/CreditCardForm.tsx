// src/components/CreditCardForm.tsx
import React, { useEffect } from 'react';
import IMask, { MaskedRange } from 'imask';
import '../style/styles.css';

const CreditCardForm: React.FC = () => {
  useEffect(() => {
    const ccCvvElement = document.querySelector("#cc-cvv") as HTMLInputElement;
    const ccNumberElement = document.querySelector("#cc-number") as HTMLInputElement;
    const ccValidityElement = document.querySelector("#cc-validity") as HTMLInputElement;

    if (ccCvvElement) {
      IMask(ccCvvElement, { mask: "0000" });
    }
    if (ccNumberElement) {
      IMask(ccNumberElement, { mask: '0000 0000 0000 0000' });
    }
    if (ccValidityElement) {
      IMask(ccValidityElement, {
        mask: 'MM{/}YY',
        blocks: {
          MM: {
            mask: MaskedRange,
            from: 1,
            to: 12
          },
          YY: {
            mask: MaskedRange,
            from: parseInt(String(new Date().getFullYear()).slice(2), 10),
            to: parseInt(String(new Date().getFullYear() + 10).slice(2), 10)
          }
        }
      });
    }
  }, []);

  return (
    <form>
      <section id="credit-card">
        <div className="front"></div>
        <div className="back"></div>
      </section>
      <section className="inputs flex">
        <div className="input-wrapper">
          <label htmlFor="cc-number">Card number</label>
          <input id="cc-number" type="text" placeholder="**** **** **** ****" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="cc-holder">Card holder Name</label>
          <input id="cc-holder" type="text" placeholder="Name in your card" required />
          <div className="warning">
            <img src="../assets/Warning.png" alt="icon alert" />
            Name of holder is required
          </div>
        </div>
        <div className="col-2 flex">
          <div className="input-wrapper">
            <label htmlFor="cc-validity">Validity</label>
            <input id="cc-validity" type="text" placeholder="mm/aa" />
          </div>
          <div className="input-wrapper">
            <label className="flex help" htmlFor="cc-cvv">CVV
              <img src="../assets/Question.png" alt="Interrogation" title="This number is on the back of your card" />
            </label>
            <input id="cc-cvv" type="text" placeholder="***" />
          </div>
        </div>
      </section>
      <section className="info-security flex">
        <img src="../assets/ShieldCheck.png" alt="Security icon" />
        Your data is safe
      </section>
      <button>Add Cart</button>
    </form>
  );
};

export default CreditCardForm;
