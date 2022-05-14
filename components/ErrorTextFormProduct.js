import ErrorText from "./ErrorText";

export default function ErrorTextFormProduct({ errorField }) {
  return (
    <ErrorText
      className="mt-2"
      text={errorField?.message}
      isVisible={!!errorField?.message}
    />
  );
}
