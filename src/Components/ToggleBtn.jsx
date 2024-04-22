/* eslint-disable react/prop-types */
function ToggleBtn({ isChecked, setIsChecked }) {
  return (
    <>
      <label
        htmlFor="yearly-billing-option"
        className="inline-flex cursor-pointer items-center text-sm font-semibold tracking-wide text-LightGrayishBlue"
      >
        <input
          id="yearly-billing-option"
          name="yearly-billing-option"
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
          className="peer sr-only"
          aria-label={
            isChecked ? "Switch to monthly billing" : "Switch to annual billing"
          }
        />

        <span className="me-6" aria-hidden={true}>
          Annually
        </span>

        <span className="relative h-8 w-14 rounded-full bg-Gradient after:absolute after:start-[4px] after:top-[4px] after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full" />

        <span className="ms-6" aria-hidden={true}>
          Monthly
        </span>
      </label>
    </>
  );
}

export default ToggleBtn;
