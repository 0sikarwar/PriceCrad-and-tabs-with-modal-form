import { Fragment } from "react";

const PriceCard = (props) => {
  return (
    <div
      className={
        "pricingCard " +
        (props.featured ? "featured" : "") +
        (props.highlightText ? "higlighted" : "")
      }
    >
      {props.highlightText && (
        <div className="highlight">{props.highlightText}</div>
      )}
      <div className="title">{props.title}</div>
      <div
        className="card"
        style={props.fullCardDesc ? { backgroundColor: "#f7f7f7" } : {}}
      >
        {props.fullCardDesc ? (
          <div className="full_desc">{props.fullCardDesc}</div>
        ) : (
          <div className="content">
            <h2 className="price">
              <span className="price__currency">$</span>
              <span className="price__dollar">{props.price}</span>
            </h2>
            <p className="price-desc">{props.priceDesc}</p>
            {props.priceBreakup.map((item, index) => (
              <Fragment key={index}>
                <hr style={{ borderTop: "1px dashed #d1d1d1" }} />
                <p className="price-desc">{item.textDesc}</p>
                <p className="price-value">{item.value}</p>
              </Fragment>
            ))}
          </div>
        )}
        {props.total && <div className="footer">{props.total}</div>}
      </div>
      <div
        className={"bttn bttn-" + props.btnClass}
        onClick={props.handleClick}
      >
        {props.ctaText}
      </div>
    </div>
  );
};

export default PriceCard;
