export const textAreaAdjust = (ref) => {
  if (!(ref && ref.current && ref.current.style)) return;
  ref.current.style.height = "1px";
  ref.current.style.height = 10 + ref.current.scrollHeight + "px";
};
