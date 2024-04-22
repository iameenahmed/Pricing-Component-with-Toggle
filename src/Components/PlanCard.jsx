/* eslint-disable react/prop-types */
function PlanCard({
  name,
  monthlyPrice,
  annuallyPrice,
  storage,
  allowedUsers,
  sendingLimit,
  isChecked,
}) {
  return (
    <div
      className={`w-full min-w-[22rem] rounded-lg text-center font-bold ${
        name === "Professional"
          ? "bg-Gradient px-8 py-14 text-VeryLightGrayishBlue"
          : "bg-white p-8"
      }`}
    >
      <h2 className="mb-[1.625rem] text-lg">{name}</h2>
      <h3
        className={`flex items-center justify-center text-5xl lg:text-[4.375rem] ${
          name === "Professional" ? "text-white" : "text-DarkGrayishBlue"
        }`}
      >
        <span className="me-2 text-[2.5rem]">$</span>
        {isChecked ? monthlyPrice : annuallyPrice}
      </h3>
      <div className="my-7 text-sm">
        <ul className="">
          <li className="border-y py-4">{storage} Storage</li>
          <li className="border-b py-4">{allowedUsers} Users Allowed</li>
          <li className="border-b py-4">Send up to {sendingLimit}</li>
        </ul>
      </div>
      <button
        className={`mt-1.5 w-full rounded-md border py-3 text-xs uppercase tracking-[0.1em] transition-all duration-300 ${
          name === "Professional"
            ? "bg-white text-DarkGrayishBlue hover:border-white hover:bg-transparent hover:text-white"
            : "bg-Gradient text-white hover:border-DarkGrayishBlue hover:bg-none hover:text-DarkGrayishBlue"
        }`}
      >
        Learn More
      </button>
    </div>
  );
}
export default PlanCard;
