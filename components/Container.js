import css from "../styles/main.module.scss";
import cls from "classnames";

export default function Container({
  as: As = "div",
  className,
  children,
  fluid,
  ...args
}) {
  return (
    <As
      className={cls(css.container, className, {
        [css.fluid]: fluid,
      })}
      {...args}
    >
      {children}
    </As>
  );
}
