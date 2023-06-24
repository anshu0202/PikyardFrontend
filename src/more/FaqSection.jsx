import React, { useState } from "react";


import "./FaqSection.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const FaqSection = () => {
const [activeIndex, setActiveIndex] = useState(null);

const toggleAccordion = (index) => {
if (activeIndex === index) {
setActiveIndex(null);
} else {
setActiveIndex(index);
}
};

return (
    
       <div className="faq-section">
            <div className="containerFaq">
                    <h2>Frequently Asked Questions</h2>
        <div className="accordion">
           <div class="accordion-item">
                        <button id="accordion-button-1" aria-expanded={activeIndex === 0 ? "true" : "false"} onClick={() => toggleAccordion(0)}
            >
                            
                    <span class="accordion-title">What is the policy for returning a product from your company? </span>
                    <span class="icon" aria-hidden="true"></span>
            </button>
            <div
              className={
                activeIndex === 0 ? "accordion-content show" : "accordion-content"
              }
            >
              <p>
              Pikyard has a return policy in place that allows customers to return products. However, it should be noted that customers may have to cover the delivery charges associated with returning the product. If a customer wishes to return a product, they should refer to the company's return policy for specific instructions on how to initiate the return process. 
              </p>
            </div>
          </div>
          <div class="accordion-item">
          <button
              id="accordion-button-2"
              aria-expanded={activeIndex === 1 ? "true" : "false"}
              onClick={() => toggleAccordion(1)}
            >
              <span className="accordion-title">What products do you sell and how do you ensure the quality of your products?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={
                activeIndex === 1 ? "accordion-content show" : "accordion-content"
              }
            >
              <p>
              We sell a wide range of products and strive to provide the best quality. Our team conducts rigorous quality checks before offering any product for sale. We also work closely with our suppliers to ensure that their products meet our standards of excellence. Our commitment to providing excellent customer service means that we welcome feedback. 
              </p>
            </div>
          </div>
          <div class="accordion-item">
          <button
              id="accordion-button-3"
              aria-expanded={activeIndex === 2 ? "true" : "false"}
              onClick={() => toggleAccordion(2)}
            >
              <span className="accordion-title">What happens if a product is out of stock?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={
                activeIndex === 2 ? "accordion-content show" : "accordion-content"
              }
            >
              <p>
              If a product is out of stock, it cannot be purchased until it becomes available again. We do our best to ensure that our inventory is accurate and up-to-date, but sometimes unexpected demand or delays in shipping can cause a product to go out of stock.
              </p>
            </div>
          </div>
          <div class="accordion-item">
          <button
              id="accordion-button-4"
              aria-expanded={activeIndex === 3 ? "true" : "false"}
              onClick={() => toggleAccordion(3)}
            >
              <span className="accordion-title">What new features can customers expect from your business in the near future?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={
                activeIndex === 3 ? "accordion-content show" : "accordion-content"
              }
            >
              <p>
              We are constantly working to improve our services and will be introducing new features soon. While we cannot disclose specific details at this time, customers can rest assured that our team is dedicated to providing the best possible experience and will continue to innovate with their needs in mind.
              </p>
            </div>
          </div>
          <div class="accordion-item">
                        <button id="accordion-button-5" aria-expanded={activeIndex === 4 ? "true" : "false"} onClick={() => toggleAccordion(4)}
            >
                            
                    <span class="accordion-title">Is there anything else you would like to know about our website or products?</span>
                    <span class="icon" aria-hidden="true"></span>
            </button>
            <div
              className={
                activeIndex === 4 ? "accordion-content show" : "accordion-content"
              }
            >
              <p>
              At last thanks for visit our website...Have a good day !
              </p>
            </div>
          </div>
        
          </div>
          </div>
          </div>
        
    )
}




export default FaqSection;

