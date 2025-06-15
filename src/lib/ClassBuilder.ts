const ClassBuilder = (...classes: (string | undefined | null)[]) => {
  return classes
  .filter((cls) => 
    typeof cls === "string" && cls.trim() !== "" && cls.trim() !== "undefined" && cls.trim() !== "null"
  )
  .join(" ");
}

export default ClassBuilder