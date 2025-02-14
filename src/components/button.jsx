import { PropTypes } from "prop-types";

const TicketButton = ({
  onClickButtonHandler,
  buttonText,
  buttonIconRight,
  buttonIconLeft,
  buttonType,
  buttonStyle,
}) => {
  return (
    <>
      <button
        className={`inline-flex font-thin items-center hover:border-gradient justify-center hover:text-black gap-4 transition-colors duration-400 ease-in-out  px-[16px] font-title h-[52px] border border-gradient rounded-xl text-[16px] outline-offset-2 outline-border   cursor-pointer hover:bg-white ${
          buttonStyle ? buttonStyle : ""
        }`}
        type={`${buttonType ? buttonType : "button"}`}
        onClick={onClickButtonHandler}
      >
        {buttonIconLeft}
        {buttonText}
        {buttonIconRight}
      </button>
    </>
  );
};

TicketButton.propTypes = {
  onClickButtonHandler: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  buttonIconRight: PropTypes.element,
  buttonIconLeft: PropTypes.element,
  buttonType: PropTypes.string,
  buttonStyle: PropTypes.string,
};

export default TicketButton;
