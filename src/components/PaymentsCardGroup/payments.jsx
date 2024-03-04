import "./payments.css";
import Accept from "../../../src/assets/images/icons/accept 3.png";
import Arrow from "../../../src/assets/images/icons/export 1.png";
import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";

function Payments() {
  const [enabled, setEnabled] = useState(1);
  const [pricings, setPricings] = useState('');

  const pricesArr = [

    //Monthly Prices
    {
      standard: {
        price: 10,
        database: 2,
        discount: 10,
        lmtc: 'LMTC + Event Invites'
      },
      bronze: {
        price: 30,
        database: 4,
        discount: 10,
        lmtc: 'LMTC + Event Invites'
      },
      silver: {
        price: 100,
        database: 6,
        discount: 10,
        lmtc: 'LMTC + Event Invites'
      },
      platinum: {
        price: 250,
        database: 8,
        discount: 10,
        lmtc: 'LMTC + Event Invites'
      },
    }, //Yearly Prices
    {
      standard: {
        price: 100,
        database: 20,
        discount: 10,
        lmtc: 'LMTC + Event Invites'
      },
      bronze: {
        price: 300,
        database: 40,
        discount: 10,
        lmtc: 'LMTC + Event Invites'
      },
      silver: {
        price: 1000,
        database: 60,
        discount: 10,
        lmtc: 'LMTC + Event Invites'
      },
      platinum: {
        price: 2500,
        database: 80,
        discount: 10,
        lmtc: 'LMTC + Event Invites'
      },
    },

  ]

  const handlePriceChange = () => {
    if (enabled) {
      setEnabled(0);
      setPricings(pricesArr[0]);
    } else {
      setEnabled(1);
      setPricings(pricesArr[1]);
    }
  }

  useEffect(() => {
    setPricings(pricesArr[1]);
  }, []);


  return (
    <div className="bg-black py-4">
      <div className="text-center mt-16 text-2xl font-semibold text-white">
        <h4 className="text-2xl font-semibold">Pricing</h4>
        <h2 className="font-sans font-semibold text-5xl">
          Choose a server plan
        </h2>
        <h5 className="font-sans text-lg mt-10 mb-3">
          Sign up now, upgrade anytime. Every new account gets a
          <br />
          14-day trial of our Pro features.
        </h5>
        <div className="text-center mb-4">
          <Switch.Group>
            <Switch.Label className="mr-4 text-lg">Monthly / Yearly</Switch.Label>
            <Switch
              checked={enabled}
              onChange={handlePriceChange}
              className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >

              <span className="sr-only">Yearly / Monthly</span>
              <span
                className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
          </Switch.Group>
        </div>
      </div>

      {pricings &&
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 xl:mx-20">

          {
           Object.entries(pricings).map(([packageName, el],key) => (
              <div className="hover:bg-gradient-to-t from-blue-950 to-zinc-950 text-white rounded-2xl p-5 w-full md:w-1/4 bg-stone-950  custom-background-price hover-up py-8 cursor-pointer" key={key}>
                <h5 className="text-xl font-bold capitalize ">{packageName}</h5>
                <h6 className="text-gray-300 text-xs mb-3">For The <br /> Basic</h6>
                <div className="mb-5">
                  <h2 className="text-4xl font-bold">$ {el.price}</h2>
                  <h6 className="text-gray-300 text-xs mb-3">Per Agent Per Month</h6>
                </div>
                <div
                  href="/"
                  className="flex flex-row gap-2 items-center px-2 py-1 bg-slate-50 text-black rounded-2xl w-32 "
                >
                  <img src={Arrow} className="w-4" />
                  Join waitlist
                </div>

                <div className="flex flex-col text-gray-400 pt-5 space-y-2">
                  <div className="flex flex-row items-center gap-2">
                    <img src={Accept} className="w-4" />
                    <p className="text-gray-300">
                      <span className="text-bold text-white">{el.database} days</span> Database
                      Discount Access
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <img src={Accept} className="w-4" />
                    <p className="text-gray-300 text-x">{el.lmtc}</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <img src={Accept} className="w-4" />
                    <p className="text-gray-300 text-x">{el.discount}% Off LMCT+ Merch</p>
                  </div>
                </div>
              </div>
            )
            )
          }
          {/* <div className="bg-gradient-to-t from-blue-950 to-zinc-950 text-white rounded-2xl p-5 w-full md:w-1/4  custom-background-price hover-up py-8">
          <h5 className="text-xl font-bold">Standard</h5>
          <h6 className="text-gray-300 text-xs mb-3">For The <br /> Basic</h6>
          <div className="mb-5">
            <h2 className="text-4xl font-bold">${pricings.standard.price}</h2>
            <h6 className="text-gray-300 text-xs mb-3">Per Agent Per Month</h6>
          </div>
          <div
            href="/"
            className="flex flex-row gap-2 items-center px-2 py-1 bg-slate-50 text-black rounded-2xl w-32 "
          >
            <img src={Arrow} className="w-4" />
            Join waitlist
          </div>

          <div className="flex flex-col text-gray-400 pt-5 space-y-2">
            <div className="flex flex-row items-center gap-2">
              <img src={Accept} className="w-4" />
              <p className="text-gray-300">
                <span className="text-bold text-white">{pricings.standard.database}days</span> Database
                Discount Access
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={Accept} className="w-4" />
              <p className="text-gray-300 text-x">LMCT+ Event Invites</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={Accept} className="w-4" />
              <p className="text-gray-300 text-x">10% Off LMCT+ Merch</p>
            </div>
          </div>
        </div>
        <div className="bg-stone-900 text-white rounded-2xl p-5 w-full md:w-1/4 custom-background-price hover-up py-8">
          <h5 className="text-xl font-bold">Bronze</h5>
          <h6 className="text-gray-300 text-xs mb-3">For The <br /> Basic</h6>
          <h2 className="text-4xl font-bold">${pricings.bronze.price}</h2>
          <h6 className="text-gray-300 text-xs mb-3">Per Agent Per Month</h6>
          <div
            href="/"
            className="flex flex-row gap-2 items-center px-2 py-1 bg-slate-50 text-black rounded-2xl w-28 "
          >
            <img src={Arrow} className="w-4" />
            Start trial
          </div>
          <div className="flex flex-col pt-5 space-y-2">
            <div className="flex flex-row items-center gap-2 text-gray-300">
              <img src={Accept} className="w-4" />
              <span className="text-bold text-white">{pricings.bronze.database}</span> Database
              Discount Access
            </div>
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p className="text-gray-300 text-x">LMCT+ Event Invites</p>
            </div>
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p className="text-gray-300 text-x">10% Off LMCT+ Merch</p>
            </div>
          </div>
        </div>
        <div className="bg-stone-900 text-white rounded-2xl  p-5 w-full md:w-1/4 custom-background-price hover-up py-8">
          <h5 className="text-xl font-bold">Silver</h5>
          <h6 className="text-gray-300 text-xs mb-3">For The <br /> Basic</h6>
          <h2 className="text-4xl font-bold ">${pricings.silver.price}</h2>
          <h6 className="text-gray-300 text-xs mb-3">Per Agent Per Month</h6>

          <div
            href="/"
            className="flex flex-row gap-2 items-center px-2 py-1 bg-slate-50 text-black rounded-2xl w-28 "
          >
            <img src={Arrow} className="w-4" />
            Start trial
          </div>

          <div className="flex flex-col space-y-2 pt-5">
            <div className="flex flex-row items-center gap-2 text-gray-300">
              <img src={Accept} className="w-4" />
              <p>
                <span className="text-bold text-white">1 Month</span> Database
                Discount Access
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p className="text-gray-300 text-x">LMCT+ Event Invites</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 text-gray-500">
            <img src={Accept} className="w-4" />
            <p className="text-gray-300 text-x">10% Off LMCT+ Merch</p>
          </div>
        </div>
        <div className="bg-stone-900 text-white rounded-2xl  p-5 w-full md:w-1/4 custom-background-price hover-up py-8">
          <h5 className="text-xl font-bold">Platinum</h5>
          <h6 className="text-gray-300 text-xs mb-3">For The <br /> Basic</h6>
          <h2 className="text-4xl font-bold">${pricings.platinum.price}</h2>
          <h6 className="text-gray-300 text-xs mb-3">Per Agent Per Month</h6>
          <div
            href="/"
            className="flex flex-row gap-2 items-center px-2 py-1 bg-slate-50 text-black rounded-2xl w-28 "
          >
            <img src={Arrow} className="w-4" />
            Start trial
          </div>
          <div className="flex flex-col pt-5 space-y-2">
            <div className="flex flex-row items-center gap-2 text-gray-300">
              <img src={Accept} className="w-4" />
              <p>
                <span className="text-bold text-white">6 Months</span> Database
                Discount Access
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p className="text-gray-300">LMCT+ Event Invites</p>
            </div>
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p className="text-gray-300">10% Off LMCT+ Merch</p>
            </div>
          </div>
        </div> */}
        </div>
      }
    </div>
  );
}

export default Payments;
