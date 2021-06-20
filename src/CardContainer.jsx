import { useState } from "react";
import ContactUsForm from "./components/ContactUsForm";
import Modal from "./components/Modal";
import PriceCard from "./components/PriceCard";
const Container = (props) => {
  const [modalData, setModalData] = useState(null);
  return (
    <>
      <section>
        <div className="container">
          {props.priceList.map((item, index) => (
            <PriceCard
              key={index}
              title={item.planName}
              price={item.pricePerTransfer}
              priceDesc="Per Qualified Lead"
              priceBreakup={[
                {
                  textDesc: "Qualified Leads Per Month",
                  value: item.qualifiedLeads
                },
                {
                  textDesc: "Platform Fee Per Month",
                  value: item.platformPrice
                }
              ]}
              total={item.packagePrice}
              ctaText="Start Your Trial"
              highlightText={item.qualifiedLeads === 40 && "Most Popular!"}
              handleClick={() => setModalData(item)}
            />
          ))}
          <PriceCard
            title="Enterprise"
            fullCardDesc="Want more than 80 qualified leads each month?"
            ctaText="Get in touch"
            handleClick={() => setModalData({ planName: "Enterprise" })}
          />
        </div>
      </section>
      {modalData && (
        <Modal
          heading="Get started with SquadVoice"
          onClose={() => setModalData(null)}
        >
          <ContactUsForm {...modalData} />
        </Modal>
      )}
    </>
  );
};

export default Container;
