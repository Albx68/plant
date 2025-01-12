import { cn } from "../../utils/helpers/cn";

const Point = ({
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div
      className={cn(
        "font-semibold cursor-default rounded-full p-2 min-w-10 min-h-10 h-10 w-10 bg-rose-200 flex justify-center items-center border-2 border-neutral-700 ",
        props.className
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Point;
