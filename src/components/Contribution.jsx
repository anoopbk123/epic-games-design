import React from "react";

export default function Contribution() {
  return (
    <section className="contribution text-center p-1">
      <div className="title">Our Contribution</div>
      <p className="ff-poppins p-1">
        Our core offering extends beyond mere profit generation; we emphasize
        the growth and active involvement of our user community. Collaborating
        with us represents an investment, rather than a mere expenditure. Our
        dedication to providing distinctive digital interactions guarantees
        unparalleled benefits for our clientele.
      </p>
      <div className="d-flex justify-around flex-wrap p-1 g-1">
        <div>
          <div className="num">5M</div>

          <div>Daily User Engagements</div>
        </div>
        <div>
          <div className="num">$500K</div>

          <div>Revenue Surge for an Platform</div>
        </div>
        <div>
          <div className="num">10X</div>

          <div>ROAS on all our marketing campaigns</div>
        </div>
      </div>
    </section>
  );
}
