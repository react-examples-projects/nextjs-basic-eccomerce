import { AlertCircle } from "@geist-ui/react-icons";
import PropTypes from "prop-types";
import styled from "styled-components";

const SpanError = styled.span`
  color: #ff005c !important;
  margin-left: 5px;
`;
function ErrorText({
  isVisible,
  text = "Ocurrió un error.",
  children,
  ...props
}) {
  return isVisible ? (
    <div
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        ...props.style,
      }}
    >
      <AlertCircle color="#ff005c" />
      <small className="d-flex align-items-center">
        <SpanError>{text || children}</SpanError>
      </small>
    </div>
  ) : null;
}

ErrorText.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default ErrorText;
