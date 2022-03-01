import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    bottom: "auto",
    margin: "0px",
    paddding: "0px",
    height: "auto",
    width: "80%",
    maxHeight: "100vh",
    transform: "translate(-50%, -50%)",
    overflowY: "auto",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");
function SubmitModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="">
      <div className="flex justify-start 	">
        <button
          className="border-2 text-black   bg-white"
          onClick={openModal}
        >
          Click to read Terms & Condition
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container gmx-auto">
          <div className="bg-blue-400 flex flex-col items-center py-4">
            <img
              className="rounded-full h-28 w-28 border-2 border-blue-600	"
              src={"https://agentphotos.mortgageweb.ca:5510/10549_profile.png"}
            />
            <p className=" text-md md:text-xl  font-extrabold	 py-4 text-white">
              Sinthusan Sivasubramaniam
            </p>
          </div>
          <p className="md:text-xl  font-extrabold text-blue-300	 py-4">
            Acknowledgement and Agreement
          </p>

          <p className="text-sm font-normal md:font-semibold px-3 text-justify			">
            The words "I", "me" and "my" mean the person who submits this
            application by clicking the "Submit Application" button below. The
            words, "Verico Mortgage Broker" means an independent mortgage broker
            that is a member of the Verico Mortgage Broker Network. If I have
            included information in this application in respect of any other
            person, including a co-applicant, I hereby confirm that such other
            person(s) has fully authorized me to release their personal
            information to my Verico Mortgage Broker and that such other
            person(s) consent to all of the terms set-out herein. The word
            "Information" means personal information about me and any other
            person(s) identified in this application, obtained from this
            application or other sources. I request that this application be
            submitted to my Verico Mortgage Broker as soon as possible. I
            understand that in submitting my application to my Verico Mortgage
            Broker, I am hereby expressly consenting to the submission of my
            application and the disclosure of Information to third parties, such
            as lenders, insurers, credit reporting agencies, and the Verico
            Mortgage Brokers national or local affiliates, for the purpose of
            arranging and/or renewing mortgage(s). I understand that this will
            allow lenders to submit commitments for my review. I hereby consent
            to and agree that my Verico Mortgage Broker may use the Information
            in order to identify me, protect me from fraud and error, understand
            my needs and eligibility for products and/or services, recommend
            particular products and services to meet my needs, provide ongoing
            services, and comply with legal and regulatory requirements. I
            consent to and agree that my Verico Mortgage Broker may use the
            Information for the above-noted purposes and may obtain Information
            about me from others, including consumer reporting agencies, credit
            bureaus, financial institutions, and real estate appraisers and may
            confirm the accuracy of the Information by contacting such third
            parties. I further consent to and agree that each lender considering
            my application may obtain Information about me (and all
            co-applicants) from others, including consumer reporting agencies,
            credit the Information by contacting such third parties. I hereby
            consent to and agree that my Verico Mortgage Broker may retain the
            Information after the last mortgage application made on my behalf,
            or the end of the term of the mortgage, whichever is later and that
            my Verico Mortgage Broker may retain and use my personal information
            for the purposes listed above after the last mortgage application
            made on my behalf. I hereby acknowledge that I have been advised
            that Mortgage Life/Creditor Insurance may be available to me through
            a lender, insurance company or broker and take sole responsibility
            to investigate and secure such coverage if desired. I acknowledge
            that my Verico Mortgage Broker is an independently owned and
            operated member of the Verico Mortgage Broker Network (VERICO). I
            further acknowledge that my Verico Mortgage Broker and VERICO have
            no obligation to locate a lender and no responsibility or liability
            for any acts or omissions of any lender including failure to secure
            any loan by any deadline. I hereby acknowledge that my Verico
            Mortgage Broker may receive consideration from a lender, and that
            consideration may vary with the mortgage interest rate and mortgage
            terms accepted by me. Such consideration may include monetary fees,
            or goods and services having value to the recipient. The parties
            hereto confirm that it is their wish that this Agreement, as well as
            all other documents relating hereto, including notices, have been
            and shall be drawn up in the English language only. Les parties aux
            présentes confirment que le présent accord, ainsi que tous les
            autres documents qui s’y rapportent, y compris les avis, peuvent
            être rédigés en français ou en anglais.
          </p>
          <div className="flex justify-end">
            {" "}
            <button
              className="mt-6 bg-blue-400 text-white text-lg px-3 py-2 border-2 rounded-md "
              onClick={closeModal}
            >
              close
            </button>
          </div>
        </div>

        <br />
      </Modal>
    </div>
  );
}
export default SubmitModal;
