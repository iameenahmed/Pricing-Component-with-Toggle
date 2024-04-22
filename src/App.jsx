import PlanCard from "./Components/PlanCard";
import pricingPlans from "./PricingPlans";
import ToggleBtn from "./Components/ToggleBtn";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div
      id="App"
      className="bg-Bottom flex min-h-screen flex-col items-center gap-[7.5vh] bg-VeryLightGrayishBlue px-6  font-Montserrat font-bold text-GrayishBlue"
    >
      <header className="mt-[8.5vh] space-y-[4.8vh] text-center">
        <h1 className="text-3xl">Our Pricing</h1>
        <ToggleBtn isChecked={isChecked} setIsChecked={setIsChecked} />
      </header>
      <main className="mb-[8.5vh] flex flex-col items-center gap-y-8 drop-shadow-2xl md:mb-0 lg:flex-row">
        {pricingPlans.map((plan, index) => {
          return <PlanCard key={index} {...plan} isChecked={isChecked} />;
        })}
      </main>
    </div>
  );
}
export default App;
