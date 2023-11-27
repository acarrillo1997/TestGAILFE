import React from 'react';
import './style.css';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { useNavigate, Routes, Route } from 'react-router-dom';
import DemoPage from './demoPage'; // This is your page component, make sure the file name is correct


function App() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };
  return (
    <div className="bg-neutral-100 flex flex-col items-stretch">
      <div className="bg-gray-100 flex w-full flex-col items-stretch max-md:max-w-full">
        <div className="shadow-sm bg-white flex w-full flex-col items-center px-5 py-5 max-md:max-w-full">
          <div className="flex w-full max-w-[1394px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc9ffbbd-3b74-43ae-819d-8e842b3c34f1?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
              className="aspect-[6.55] object-contain object-center w-36 justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
            <div className="flex items-start justify-between gap-5 self-start max-md:justify-center">
              <button className="text-gray-500 text-center text-base leading-6 self-stretch"
              onClick={() => handleButtonClick('/demoPage')}>
                Companies
              </button>
              <div className="text-orange-600 text-base font-bold leading-6 underline self-stretch">
                Vehicles
              </div>
              <div className="text-gray-500 text-base leading-6 self-start">
                Claims
              </div>
              <div className="text-gray-500 text-base leading-6 self-stretch whitespace-nowrap">
                Underwriting
              </div>
            </div>
            <div className="text-gray-500 text-base leading-6 self-center grow whitespace-nowrap my-auto">
              Users
            </div>
          </div>
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1368px] flex-col mt-14 mb-24 px-5 max-md:max-w-full max-md:my-10">
        <button 
          className="text-slate-600 text-center text-base font-bold leading-6 whitespace-nowrap border bg-white px-5 py-5 rounded-md border-solid border-zinc-200"
          onClick={() => handleButtonClick('No Back Yet!')}
        >
          Back
        </button>
        <div className="text-slate-600 text-3xl leading-10 self-stretch whitespace-nowrap -mr-5 mt-4 max-md:max-w-full">
          Applicant details
        </div>
        <div className="self-stretch -mr-5 mt-6 pr-20 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[69%] max-md:w-full max-md:ml-0">
              <div className="border shadow-sm bg-white flex grow justify-between gap-5 w-full mx-auto pl-4 pr-6 pt-6 pb-12 rounded-lg border-solid border-zinc-200 max-md:max-w-full max-md:flex-wrap max-md:mt-4 max-md:pr-5">
                <div className="flex grow basis-[0%] flex-col max-md:max-w-full">
                  <div className="flex w-[354px] max-w-full items-stretch gap-0.5">
                    <div className="flex grow basis-[0%] flex-col items-stretch">
                      <div className="text-slate-600 text-lg font-bold leading-7 whitespace-nowrap">
                        Business information
                      </div>
                      <div className="flex justify-between gap-5 mt-6">
                        <div className="flex grow basis-[0%] flex-col items-stretch mt-1">
                          <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                            Business name
                          </div>
                          <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                            Great Trucking CO{" "}
                          </div>
                        </div>
                        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                          <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                            DOT
                          </div>
                          <div className="text-slate-600 text-base leading-6 underline whitespace-nowrap mt-1.5">
                            123023130
                          </div>
                        </div>
                      </div>
                      <div className="flex items-stretch justify-between gap-5 mt-8 pr-16 max-md:pr-5">
                        <div className="flex grow basis-[0%] flex-col items-stretch">
                          <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                            First name
                          </div>
                          <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                            Business
                          </div>
                        </div>
                        <div className="flex grow basis-[0%] flex-col items-stretch">
                          <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                            Last name
                          </div>
                          <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                            Owner
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex basis-[0%] flex-col items-center mt-9 self-end">
                      <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                        MC{" "}
                      </div>
                      <div className="text-slate-600 text-base leading-6 whitespace-nowrap mt-2">
                        12313
                      </div>
                      <div className="text-slate-600 text-xs leading-5 self-stretch whitespace-nowrap mt-7">
                        Phone number
                      </div>
                      <div className="text-slate-600 text-base leading-6 self-stretch whitespace-nowrap">
                        (833) 675-3972
                      </div>
                    </div>
                  </div>
                  <div className="text-slate-600 text-xs leading-5 self-stretch whitespace-nowrap mt-7 max-md:max-w-full">
                    Business address
                  </div>
                  <div className="text-slate-600 text-base leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
                    11954 Narcoossee Road, Orlando, FL 32832, Suite #2, Unit #
                    337
                  </div>
                  <div className="flex w-[264px] max-w-full items-stretch justify-between gap-5 mt-8">
                    <div className="flex grow basis-[0%] flex-col items-stretch">
                      <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                        Program
                      </div>
                      <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                        Trucking MGA
                      </div>
                    </div>
                    <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                      <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                        Fleet size
                      </div>
                      <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                        12
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <div className="flex justify-between gap-1">
                      <div className="opacity-[0.11] flex w-2 shrink-0 h-2 flex-col rounded-[50%]" />
                      <div className="text-slate-600 text-base leading-5 self-stretch grow whitespace-nowrap">
                        Auto Liability
                      </div>
                    </div>
                    <div className="flex justify-between gap-1.5">
                      <div className="opacity-[0.66] flex w-2 shrink-0 h-2 flex-col rounded-[50%]" />
                      <div className="text-slate-600 text-base leading-5 self-stretch grow whitespace-nowrap">
                        Physical Damage
                      </div>
                    </div>
                    <div className="flex justify-between gap-1">
                      <div className="opacity-[0.66] flex w-2 shrink-0 h-2 flex-col rounded-[50%]" />
                      <div className="text-slate-600 text-base leading-5 self-stretch grow whitespace-nowrap">
                        Motor Truck Cargo
                      </div>
                    </div>
                    <div className="flex justify-between gap-1.5">
                      <div className="opacity-[0.66] flex w-2 shrink-0 h-2 flex-col rounded-[50%]" />
                      <div className="text-slate-600 text-base leading-5 self-stretch grow whitespace-nowrap">
                        General Liability
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba359535-2f17-42d5-889f-2db7ca72f8f9?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                  className="aspect-square object-contain object-center w-6 opacity-[0.55] overflow-hidden shrink-0 max-w-full"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
              <div className="border shadow-sm bg-white flex w-full grow flex-col items-stretch mx-auto pl-4 pr-4 pt-6 pb-4 rounded-lg border-solid border-zinc-200 max-md:mt-4">
                <div className="flex items-stretch justify-between gap-5">
                  <div className="flex grow basis-[0%] flex-col items-stretch">
                    <div className="text-slate-600 text-lg font-bold leading-7 whitespace-nowrap">
                      Application statuses
                    </div>
                    <div className="flex flex-col items-stretch mt-9 px-5">
                      <div className="text-slate-600 text-base leading-10 whitespace-nowrap">
                        Overall
                      </div>
                      <div className="text-slate-600 text-base leading-10 mt-3">
                        Loss Runs Report
                        <br />
                        IFTAs
                      </div>
                    </div>
                    <div className="text-slate-600 text-lg font-bold leading-7 whitespace-nowrap mt-6">
                      Notes
                    </div>
                  </div>
                  <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                    <div className="border bg-white flex items-center justify-between gap-5 pl-5 pr-7 py-2.5 rounded-lg border-solid border-neutral-400 max-md:pr-5">
                      <div className="justify-center text-black text-base leading-5 my-auto">
                        Open
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/62bdf191-3267-4bd8-b183-8ccd55ebef32?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-[1.14] object-contain object-center w-6 fill-white overflow-hidden shrink-0 max-w-full self-start"
                      />
                    </div>
                    <div className="flex flex-col items-stretch mt-6 pl-10 max-md:pl-5">
                      <div className="items-stretch bg-amber-400 flex w-full flex-col px-1 rounded-[88px]">
                        <div className="bg-zinc-300 bg-opacity-90 flex items-center justify-between gap-1 pl-3.5 pr-10 py-1 rounded-3xl max-md:-mr-0.5 max-md:pr-5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ad8e9a-e7b9-4df1-84c8-8a9be8d896c2?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                            className="aspect-square object-contain object-center w-1.5 fill-white opacity-[0.33] overflow-hidden shrink-0 max-w-full my-auto"
                          />
                          <div className="text-white text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                            Review
                          </div>
                        </div>
                      </div>
                      <div className="items-stretch bg-amber-400 flex w-full flex-col mt-6 px-1 rounded-[88px]">
                        <div className="bg-zinc-300 bg-opacity-90 flex items-center justify-between gap-1 pl-3.5 pr-10 py-1 rounded-3xl max-md:-mr-0.5 max-md:pr-5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/683e8cdf-990a-4172-a861-a7f3ba3aea1a?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                            className="aspect-square object-contain object-center w-1.5 fill-white opacity-[0.33] overflow-hidden shrink-0 max-w-full my-auto"
                          />
                          <div className="text-white text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                            Review
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border bg-zinc-400 bg-opacity-10 flex flex-col mt-2 pt-6 pb-12 px-4 rounded-lg border-solid border-black">
                  <div className="text-slate-600 text-base leading-6 opacity-[0.55] max-w-[314px] mb-1.5">
                    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border shadow-sm bg-white self-stretch flex flex-col -mr-5 mt-4 pt-7 pb-9 rounded-lg border-solid border-zinc-200 max-md:max-w-full">
          <div className="text-slate-600 text-lg font-bold leading-7 whitespace-nowrap ml-4 self-start max-md:ml-2.5">
            Documents
          </div>
          <div className="bg-slate-600 bg-opacity-20 self-stretch flex shrink-0 h-px flex-col mt-6 rounded-lg max-md:max-w-full" />
          <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
            <div className="flex items-stretch justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <div className="flex grow basis-[0%] flex-col items-stretch">
                <div className="flex justify-between gap-1">
                  <div className="text-slate-600 text-base leading-5 underline">
                    Loss Runs Report
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e106db6a-24f1-40f6-8d5c-718cb23aeb68?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <div className="text-slate-600 text-xs leading-4 opacity-[0.55] whitespace-nowrap mt-2">
                  Uploaded 4/21/23
                </div>
              </div>
              <div className="flex grow basis-[0%] flex-col items-stretch">
                <div className="text-slate-600 text-base leading-5 whitespace-nowrap">
                  3/1/2022 - 4/12/2023 (1 year, 1 month)
                </div>
                <div className="flex items-stretch justify-between gap-1 mt-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca10d2d-fcae-467e-bc31-640fb63ccf5f?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-slate-600 text-xs leading-4 opacity-[0.55] grow whitespace-nowrap mt-1 self-start">
                    Within last 90 days
                  </div>
                </div>
              </div>
              <div className="flex basis-[0%] flex-col items-stretch self-start">
                <div className="text-slate-600 text-base leading-5 whitespace-nowrap">
                  3 / 2
                </div>
                <div className="text-slate-600 text-xs leading-4 opacity-[0.55] whitespace-nowrap mt-2.5">
                  Claims / Ttl. Vehicles
                </div>
              </div>
              <div className="flex basis-[0%] flex-col items-stretch self-start">
                <div className="text-slate-600 text-base leading-5 whitespace-nowrap">
                  $3621.91
                </div>
                <div className="text-slate-600 text-xs leading-4 opacity-[0.55] whitespace-nowrap mt-2">
                  Total $ amt.
                </div>
              </div>
              <div className="flex basis-[0%] flex-col items-center self-start">
                <div className="text-slate-600 text-base leading-5 whitespace-nowrap">
                  None
                </div>
                <div className="text-slate-600 text-xs leading-4 opacity-[0.55] self-stretch whitespace-nowrap mt-2.5">
                  Single claim over $20k
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-5 pr-8 self-start max-md:justify-center max-md:pr-5">
              <div className="bg-green-500 flex grow basis-[0%] flex-col rounded-[88px]">
                <div className="bg-zinc-300 bg-opacity-90 flex items-stretch gap-1 pl-3 pr-1.5 rounded-3xl max-md:justify-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/58712351-c484-4adb-8a90-357159ec2082?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-1.5 fill-white opacity-[0.33] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                  <div className="text-white text-xs font-medium leading-4 self-center my-auto">
                    Passed
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f7ece7-a1ca-4f93-8752-1040cd6a5bcd?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d85ca2d1-8779-4dca-844f-d8d4514c6be0?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                className="aspect-square object-contain object-center w-6 opacity-[0.55] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/df629deb-e7a5-4cab-b287-28c4e20b8713?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                className="aspect-square object-contain object-center w-6 opacity-[0.55] overflow-hidden shrink-0 max-w-full"
              />
            </div>
          </div>
          <div className="bg-slate-600 bg-opacity-20 self-stretch flex shrink-0 h-px flex-col mt-6 rounded-lg max-md:max-w-full" />
          <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-6 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <div className="flex justify-between gap-5">
              <div className="flex grow basis-[0%] flex-col items-stretch">
                <div className="text-slate-600 text-base leading-5 underline whitespace-nowrap">
                  IFTAs
                </div>
                <div className="text-slate-600 text-xs leading-4 opacity-[0.55] whitespace-nowrap mt-2">
                  Uploaded 4/21/23
                </div>
              </div>
              <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f722b24-cf0a-4dd7-9516-ba841557b52c?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b24bae08-b3b9-44a3-b637-65379bcbd458?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                  className="aspect-square object-contain object-center w-full overflow-hidden"
                />
              </div>
            </div>
            <div className="flex items-stretch justify-between gap-5 mt-2 self-start max-md:justify-center">
              <div className="items-stretch bg-amber-400 flex grow basis-[0%] flex-col px-1 rounded-[88px]">
                <div className="bg-zinc-300 bg-opacity-90 flex items-stretch gap-1 pl-4 pr-1 rounded-3xl max-md:justify-center max-md:-mr-0.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1ae65c4-013e-4c1a-8d94-4ced5eea57e3?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-1.5 fill-white opacity-[0.33] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                  <div className="text-white text-xs font-medium leading-4 self-center my-auto">
                    Review
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6b43421-7edb-4d18-a4fd-3eeb5fc9e9f0?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/94c4f29a-d1bd-4c54-abe5-0b7a1faf7c58?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                className="aspect-square object-contain object-center w-6 opacity-[0.55] overflow-hidden shrink-0 max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a68a004c-f05e-488d-9a10-89a3f478021d?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                className="aspect-square object-contain object-center w-6 opacity-[0.55] overflow-hidden shrink-0 max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex items-center justify-between gap-5 -mr-5 mt-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="text-slate-600 text-lg font-bold leading-6 my-auto">
            Drivers
          </div>
          <div className="text-slate-600 text-right text-base font-bold leading-6 whitespace-nowrap border bg-white self-stretch grow px-5 py-5 rounded-md border-solid border-zinc-200 max-md:pl-0.5">
            Search
          </div>
        </div>
        <div className="border shadow-sm bg-white flex w-[1247px] max-w-full justify-between gap-5 mt-4 pl-4 pr-6 py-7 rounded-lg border-solid border-zinc-200 self-start max-md:flex-wrap max-md:pr-5">
          <div className="flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="flex basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                First name
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                Max
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                Last name
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                Verstappen
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                License Number
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                A12301230
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                License State
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                FL
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                Years of Experience
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                13 Years
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                Date of Hire
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                February 2, 2021
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                License Type
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                Commercial
              </div>
            </div>
            <div className="self-stretch flex grow basis-[0%] flex-col items-center">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                MVR
              </div>
              <div className="text-slate-600 text-xs font-bold leading-10 whitespace-nowrap bg-zinc-300 bg-opacity-90 self-stretch px-1.5 py-2 rounded-3xl">
                PURCHASE MVR
              </div>
            </div>
          </div>
          <div className="bg-green-500 self-center flex flex-col my-auto px-1 rounded-[88px]">
            <div className="bg-zinc-300 bg-opacity-90 flex items-stretch gap-1 pl-3.5 pr-1.5 rounded-3xl max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce52d390-eb04-4580-9c7a-7aa927431037?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                className="aspect-square object-contain object-center w-1.5 fill-white opacity-[0.33] overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <div className="text-white text-xs font-medium leading-4 self-center my-auto">
                Passed
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d74029db-3533-4ac0-bdd1-9178398bc87c?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="border shadow-sm bg-white flex w-[1247px] max-w-full justify-between gap-5 mt-3.5 pl-4 pr-6 py-7 rounded-lg border-solid border-zinc-200 self-start max-md:flex-wrap max-md:pr-5">
          <div className="flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="flex basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                First name
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                Random
              </div>
            </div>
            <div className="flex basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                Last name
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                Driver
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                License Number
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                A12301230
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                License State
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                FL
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                Years of Experience
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                13 Years
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                Date of Hire
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                February 2, 2021
              </div>
            </div>
            <div className="flex grow basis-[0%] flex-col items-stretch self-start">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                License Type
              </div>
              <div className="text-slate-600 text-base leading-6 whitespace-nowrap">
                Personal
              </div>
            </div>
            <div className="self-stretch flex grow basis-[0%] flex-col items-center">
              <div className="text-slate-600 text-xs leading-5 whitespace-nowrap">
                MVR
              </div>
              <div className="text-slate-600 text-xs font-bold leading-10 whitespace-nowrap bg-zinc-300 bg-opacity-90 self-stretch px-1.5 py-2 rounded-3xl">
                PURCHASE MVR
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/16a5afda-0cba-4aa3-9958-f5d4129a041a?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/16a5afda-0cba-4aa3-9958-f5d4129a041a?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16a5afda-0cba-4aa3-9958-f5d4129a041a?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/16a5afda-0cba-4aa3-9958-f5d4129a041a?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/16a5afda-0cba-4aa3-9958-f5d4129a041a?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/16a5afda-0cba-4aa3-9958-f5d4129a041a?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/16a5afda-0cba-4aa3-9958-f5d4129a041a?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/16a5afda-0cba-4aa3-9958-f5d4129a041a?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
            className="aspect-[4.4] object-contain object-center w-[110px] items-center overflow-hidden self-center shrink-0 max-w-full my-auto rounded-[88px]"
          />
        </div>
        <div className="self-stretch flex items-center justify-between gap-5 -mr-5 mt-9 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
          <div className="text-slate-600 text-lg font-bold leading-6 my-auto">
            Vehicles
          </div>
          <div className="text-slate-600 text-right text-base font-bold leading-6 whitespace-nowrap border bg-white self-stretch grow px-5 py-5 rounded-md border-solid border-zinc-200 max-md:pl-0.5">
            Search
          </div>
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-0 -mr-5 mt-4 max-md:max-w-full max-md:flex-wrap">
          <div className="flex mr-0 grow basis-[0%] flex-col items-stretch max-md:max-w-full">
            <div className="border shadow-sm bg-white flex flex-col items-stretch pl-6 pr-4 py-6 rounded-lg border-solid border-zinc-200 max-md:max-w-full max-md:pl-5">
              <div className="flex w-full justify-between gap-5 pr-px max-md:max-w-full max-md:flex-wrap">
                <div className="text-slate-600 text-base font-bold leading-6">
                  2016 Jeep Grand Cherokee
                </div>
                <div className="self-stretch flex justify-between gap-5">
                  <div className="flex grow basis-[0%] flex-col items-stretch mt-2">
                    <div className="text-slate-600 text-base leading-5 whitespace-nowrap">
                      $13521.96
                    </div>
                    <div className="text-slate-600 text-xs leading-4 opacity-[0.55] whitespace-nowrap mt-2.5">
                      Vehicle Price
                    </div>
                  </div>
                  <div className="text-slate-600 text-center text-xs font-bold leading-4 tracking-wider whitespace-nowrap bg-zinc-300 bg-opacity-40 grow items-center px-5 py-2 rounded-md">
                    COVERED
                  </div>
                </div>
              </div>
              <div className="flex items-stretch justify-between gap-5 mt-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="text-slate-600 text-base leading-8 grow shrink basis-auto">
                  1B4HS28N9YF105991
                  <br />
                  471 North El Camino Real, San Francisco CA 95002
                </div>
                <div className="text-slate-600 text-center text-base font-bold leading-6 whitespace-nowrap border bg-white items-center px-5 py-3.5 rounded-md border-solid border-stone-300 self-start">
                  Deactivate
                </div>
              </div>
            </div>
            <div className="border shadow-sm bg-white flex flex-col items-stretch mt-2 pl-6 pr-4 py-6 rounded-lg border-solid border-zinc-200 max-md:max-w-full max-md:pl-5">
              <div className="flex w-full justify-between gap-5 pr-px max-md:max-w-full max-md:flex-wrap">
                <div className="text-slate-600 text-base font-bold leading-6">
                  2016 Jeep Grand Cherokee
                </div>
                <div className="self-stretch flex justify-between gap-5">
                  <div className="flex grow basis-[0%] flex-col items-stretch mt-2">
                    <div className="text-slate-600 text-base leading-5 whitespace-nowrap">
                      $13521.96
                    </div>
                    <div className="text-slate-600 text-xs leading-4 opacity-[0.55] whitespace-nowrap mt-2.5">
                      Vehicle Price
                    </div>
                  </div>
                  <div className="text-slate-600 text-center text-xs font-bold leading-4 tracking-wider whitespace-nowrap bg-zinc-300 bg-opacity-40 grow items-stretch px-5 py-2 rounded-md max-md:pr-0">
                    EXCEPTION
                  </div>
                </div>
              </div>
              <div className="flex w-full items-stretch justify-between gap-5 mt-5 pr-0.5 max-md:max-w-full max-md:flex-wrap">
                <div className="text-slate-600 text-base leading-8 grow shrink basis-auto">
                  1B4HS28N9YF105991
                  <br />
                  471 North El Camino Real, San Francisco CA 95002
                </div>
                <div className="flex items-stretch gap-4 mt-1.5 self-start">
                  <div className="text-slate-600 text-center text-base font-bold leading-6 whitespace-nowrap border bg-white grow items-center px-5 py-3.5 rounded-md border-solid border-stone-300">
                    Deactivate
                  </div>
                  <div className="text-slate-600 text-center text-base font-bold leading-6 whitespace-nowrap border bg-white grow items-center px-5 py-3.5 rounded-md border-solid border-stone-300">
                    Activate
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-end items-stretch shadow-sm self-center flex basis-[0%] flex-col my-auto rounded-sm">
            <div className="text-white text-xs font-medium leading-4 items-stretch rounded backdrop-blur-lg bg-slate-700 p-4">
              Hover to see information on why the exception was made. This is
              inputed in the vehicle details page.
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d7c061b-3a5e-46e5-a54a-1ef181a05efc?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
              className="aspect-[2] object-contain object-center w-4 fill-slate-700 overflow-hidden max-w-full ml-4 self-start max-md:ml-2.5"
            />
          </div>
        </div>
        <div className="border shadow-sm bg-white flex w-[1247px] max-w-full flex-col items-stretch mt-2 pl-6 pr-4 py-6 rounded-lg border-solid border-zinc-200 self-start max-md:pl-5">
          <div className="flex w-full justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-slate-600 text-base font-bold leading-6">
              2016 Jeep Grand Cherokee
            </div>
            <div className="self-stretch flex justify-between gap-5">
              <div className="flex grow basis-[0%] flex-col items-stretch mt-2">
                <div className="text-slate-600 text-base leading-5 whitespace-nowrap">
                  $13521.96
                </div>
                <div className="text-slate-600 text-xs leading-4 opacity-[0.55] whitespace-nowrap mt-2.5">
                  Vehicle Price
                </div>
              </div>
              <div className="text-slate-600 text-center text-xs font-bold leading-4 tracking-wider whitespace-nowrap bg-zinc-300 bg-opacity-40 grow items-center px-5 py-2 rounded-md">
                COVERED
              </div>
            </div>
          </div>
          <div className="flex w-full items-stretch justify-between gap-5 mt-5 pr-px max-md:max-w-full max-md:flex-wrap">
            <div className="text-slate-600 text-base leading-8 grow shrink basis-auto">
              1B4HS28N9YF105991
              <br />
              471 North El Camino Real, San Francisco CA 95002
            </div>
            <div className="flex items-stretch gap-4 mt-1.5 self-start">
              <div className="text-slate-600 text-center text-base font-bold leading-6 whitespace-nowrap border bg-white grow items-center px-5 py-3.5 rounded-md border-solid border-stone-300">
                Deactivate
              </div>
              <div className="text-slate-600 text-center text-base font-bold leading-6 whitespace-nowrap border bg-white grow items-center px-5 py-3.5 rounded-md border-solid border-stone-300">
                Activate
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demoPage" element={<DemoPage />} />
      </Routes>
    </Router>
  );
}



export default AppWrapper;
