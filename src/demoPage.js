import * as React from "react";

function demoPage() {
  return (
    <div className="bg-white">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
          <div className="items-stretch self-stretch border-r-[color:var(--gray-200,#EAECF0)] bg-zinc-50 flex grow flex-col w-full mx-auto pt-8 border-r border-solid">
            <div className="justify-between items-center flex flex-col pb-11 px-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0ce2c08-8fb7-4ea6-8536-8a7e9e232cd6?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                className="aspect-[10.42] object-contain object-center w-[250px] justify-center items-center overflow-hidden"
              />
              <div className="text-slate-500 text-xs font-bold leading-6 tracking-widest uppercase whitespace-nowrap mt-8">
                Overview
              </div>
              <div className="items-stretch flex w-[216px] max-w-full justify-between gap-5 mt-4">
                <div className="items-stretch flex justify-between gap-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/86d700cb-710f-4fa9-b3a7-ac23663707e6?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-slate-600 text-sm font-semibold leading-5 self-center grow whitespace-nowrap my-auto">
                    New Question
                  </div>
                </div>
                <div className="text-slate-600 text-sm leading-5 whitespace-nowrap items-stretch rounded border border-[color:var(--gray-300,#D0D5DD)] bg-gray-50 aspect-[1.375] justify-center px-1 py-0.5 border-solid">
                  ⌘Q
                </div>
              </div>
              <div className="items-stretch self-stretch flex flex-col mt-12 pb-12 px-4 max-md:mr-0.5 max-md:mt-10">
                <div className="text-slate-500 text-xs font-bold leading-6 tracking-widest uppercase whitespace-nowrap">
                  Menu
                </div>
                <div className="items-stretch flex justify-between gap-2 mt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2b592c9-1274-4c01-b746-16a706d6442b?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-stone-900 text-sm font-medium leading-5 self-center grow whitespace-nowrap my-auto">
                    Home
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-2 mt-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7b3745a-b153-4774-8beb-84811d654b4f?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-slate-600 text-sm font-medium leading-5 my-auto">
                    Discover
                  </div>
                </div>
                <div className="items-stretch flex gap-2 mt-5 mb-40 max-md:justify-center max-md:mb-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc2199ab-bbb0-43a4-94e4-9f6fe98945f7?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-slate-600 text-sm font-semibold leading-5 my-auto">
                    Boards
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a5d8021-1d1f-42db-b99b-eb5448cef3c5?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
              </div>
              <div className="justify-end items-stretch self-stretch flex flex-col mt-96 pb-2 px-4 max-md:mr-0.5 max-md:mt-10">
                <div className="text-slate-500 text-xs font-bold leading-6 tracking-widest uppercase whitespace-nowrap">
                  Configure
                </div>
                <div className="items-stretch flex justify-between gap-2 mt-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c4d3acc-f944-41dd-896d-c3278ebdace8?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-stone-900 text-sm font-medium leading-5 self-center grow whitespace-nowrap my-auto">
                    Help
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-2 mt-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfe1023f-20a2-43b1-b932-8be921e6ec69?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-stone-900 text-sm font-medium leading-5 my-auto">
                    Support
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-2 mt-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/118e7fc1-0d45-450c-8aeb-9031a64c91a2?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-stone-900 text-sm font-medium leading-5 my-auto">
                    Settings
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-2 mt-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9014ede4-b084-45b8-91bc-545faf7ed871?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-stone-900 text-sm font-medium leading-5 my-auto">
                    Notifications
                  </div>
                </div>
              </div>
              <div className="justify-end items-stretch self-stretch flex gap-2 mt-3 pr-20 max-md:mr-0.5 max-md:pr-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a130571f-a7f5-4275-9f52-e0d5eee66293?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a130571f-a7f5-4275-9f52-e0d5eee66293?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a130571f-a7f5-4275-9f52-e0d5eee66293?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a130571f-a7f5-4275-9f52-e0d5eee66293?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a130571f-a7f5-4275-9f52-e0d5eee66293?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a130571f-a7f5-4275-9f52-e0d5eee66293?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a130571f-a7f5-4275-9f52-e0d5eee66293?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a130571f-a7f5-4275-9f52-e0d5eee66293?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                  className="aspect-square object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                  <div className="justify-center text-stone-900 text-sm font-semibold leading-7">
                    Anita Cruz
                  </div>
                  <div className="text-gray-500 text-xs leading-5 whitespace-nowrap">
                    anita.c@lula.ia
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/46aacdf8-1fb4-4edf-a1ba-f95df88e255d?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                  className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="flex flex-col items-stretch w-[79%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
            <div className="flex w-[228px] max-w-full items-stretch gap-0.5 self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/697a4e23-afa3-4357-bd56-272894108499?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-slate-700 text-sm font-bold leading-5 grow whitespace-nowrap self-start">
                <span className="font-bold">Back </span>
                <span className="font-medium"> / Ace Rentals Group</span>
              </div>
            </div>
            <div className="text-slate-700 text-3xl leading-10 self-stretch whitespace-nowrap -mr-5 mt-8 max-md:max-w-full">
              Vehicles
            </div>
            <div className="self-stretch flex w-full justify-between gap-5 -mr-5 mt-8 pr-20 items-end max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <div className="flex items-stretch justify-between gap-5 mt-6">
                <div className="flex grow basis-[0%] flex-col items-center">
                  <div className="text-orange-600 text-lg font-bold leading-6 tracking-normal whitespace-nowrap">
                    Active
                  </div>
                  <div className="bg-orange-600 self-stretch flex shrink-0 h-[3px] flex-col mt-2.5" />
                </div>
                <div className="text-slate-500 text-lg leading-6 tracking-normal grow whitespace-nowrap self-start">
                  Disabled
                </div>
              </div>
              <div className="self-stretch flex items-stretch justify-between gap-2">
                <div className="items-center border border-[color:var(--neutrals-300,#C6C6D0)] bg-white flex justify-between gap-2 pl-4 pr-20 py-3 rounded-lg border-solid max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b4d35b1-89d4-4fff-ac29-2862fcac7d98?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-4 opacity-[0.22] overflow-hidden shrink-0 max-w-full my-auto"
                  />
                  <div className="text-slate-700 text-base leading-6 tracking-normal opacity-[0.22] self-stretch grow whitespace-nowrap">
                    Search
                  </div>
                </div>
                <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white flex gap-2 pl-4 pr-3.5 py-4 rounded-lg border-solid">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e93aa678-2180-4436-980b-f68b4ba48cb7?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e93aa678-2180-4436-980b-f68b4ba48cb7?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e93aa678-2180-4436-980b-f68b4ba48cb7?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e93aa678-2180-4436-980b-f68b4ba48cb7?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e93aa678-2180-4436-980b-f68b4ba48cb7?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e93aa678-2180-4436-980b-f68b4ba48cb7?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e93aa678-2180-4436-980b-f68b4ba48cb7?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e93aa678-2180-4436-980b-f68b4ba48cb7?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-[17px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base font-medium leading-5 grow whitespace-nowrap">
                    Filter
=======
        <div className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-start self-stretch bg-white flex grow flex-col w-full mx-auto px-10 py-12 rounded-[40px_0px_0px_0px] max-md:max-w-full max-md:px-5">
            <div className="items-stretch self-stretch flex justify-between gap-5 mt-96 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                <div className="text-gray-900 text-3xl font-semibold leading-10 max-md:max-w-full">
                  Hello again!
                </div>
                <div className="text-gray-500 text-sm leading-6 mt-1 max-md:max-w-full">
                  Tell me what’s on your mind, or pick a suggestion. I have
                  limitations and won’t always get it right, but your feedback
                  will help me improve.
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf522abb-68b8-471d-a8af-99691c6ea748?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
            <div className="self-stretch bg-gray-200 flex shrink-0 h-px flex-col mt-4 max-md:max-w-full" />
            <div className="justify-end flex w-96 max-w-full gap-2 mt-8 self-start items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c514620-b2f3-4e1c-b137-ee5fc4d00cc2?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
              <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-gray-900 text-lg font-semibold leading-7">
                  GALE
                </div>
                <div className="text-gray-500 text-sm leading-5 mt-1">
                  Get ready to start a conversation with anyone.
                </div>
              </div>
            </div>
            <div className="self-stretch mt-4 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                  <div className="items-center border border-[color:var(--gray-200,#EAECF0)] bg-white flex w-full grow flex-col justify-center mx-auto px-5 py-8 rounded-lg border-solid max-md:mt-6">
                    <div className="flex w-[280px] max-w-full gap-4 rounded-lg items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/624ee599-99d8-4a4b-99b7-b32c23644ded?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                        <div className="text-gray-900 text-base font-semibold leading-6 whitespace-nowrap">
                          TRY
                        </div>
                        <div className="text-gray-500 text-sm leading-5 mt-1">
                          “ How to prepare insurance exam in Texas?”
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-center border border-[color:var(--gray-200,#EAECF0)] bg-white flex w-full grow flex-col justify-center mx-auto px-5 py-8 rounded-lg border-solid max-md:mt-6">
                    <div className="flex w-[280px] max-w-full gap-4 rounded-lg items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dca22c8-4374-42b1-89c0-ba1ef4055ae5?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                        <div className="text-gray-900 text-base font-semibold leading-6 whitespace-nowrap">
                          TRY
                        </div>
                        <div className="text-gray-500 text-sm leading-5 mt-1">
                          Homeowners policy coverage in California?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-center border border-[color:var(--gray-200,#EAECF0)] bg-white flex w-full grow flex-col justify-center mx-auto px-5 py-8 rounded-lg border-solid max-md:mt-6">
                    <div className="flex w-[280px] max-w-full gap-4 rounded-lg items-start">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b21a8f38-8293-49d8-9ba4-36ee3541643f?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                        <div className="text-gray-900 text-base font-semibold leading-6 whitespace-nowrap">
                          TRY
                        </div>
                        <div className="text-gray-500 text-sm leading-5 mt-1">
                          How many calls are spent on resolving claims
                          questions?
                        </div>
                      </div>
                    </div>
>>>>>>> a256be3 (lovely committed)
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className="border border-[color:var(--interface-colors-unused-black-10,rgba(0,0,0,0.10))] shadow-sm bg-white self-stretch flex flex-col -mr-5 mt-4 pt-9 pb-7 rounded-xl border-solid max-md:max-w-full">
              <div className="flex w-[1092px] max-w-full justify-between gap-5 ml-6 pr-20 self-start items-start max-md:flex-wrap max-md:pr-5">
                <div className="flex items-stretch justify-between gap-5">
                  <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col border-2 border-solid" />
                  <div className="text-slate-500 text-sm font-bold leading-8 self-center grow whitespace-nowrap my-auto">
                    Nick Name
                  </div>
                </div>
                <div className="self-stretch flex items-start justify-between gap-2.5 max-md:justify-center">
                  <div className="text-slate-500 text-sm font-bold leading-8 self-center my-auto">
                    Year
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0c8169-7b86-4322-831e-f3fa1212e159?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.5] object-contain object-center w-3 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-500 text-sm font-bold leading-8 self-center my-auto">
                    Make
                  </div>
                  <div className="text-slate-500 text-sm font-bold leading-8 self-center my-auto">
                    Model{" "}
                  </div>
                  <div className="text-slate-500 text-sm font-bold leading-8 self-center whitespace-nowrap my-auto">
                    Claims
                  </div>
                </div>
                <div className="self-center flex items-stretch justify-between gap-5 my-auto">
                  <div className="text-slate-500 text-sm font-bold leading-8">
                    Coverage
                  </div>
                  <div className="text-slate-500 text-sm font-bold leading-8 whitespace-nowrap">
                    Coverage Start/End
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch flex w-full items-stretch justify-between gap-5 mt-7 pl-6 pr-7 py-5 border-b-slate-200 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:mr-px max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex aspect-square flex-col items-center mt-3.5 border-2 border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c94eaa20-eaee-497e-841a-5a7aa757843c?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                          className="aspect-square object-contain object-center w-[18px] overflow-hidden"
                        />
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2de607b4-569f-42ae-b547-283f9b0badda?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dda1fe0-b07e-4cba-8ef7-ca74eb71e2e6?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    2<br />1
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/695a5645-b2c9-4712-bf91-b0ffbf497aae?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-green-500 flex pl-0 gap-1 my-auto pr-11 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e842796-3d03-4235-8b44-f84d810ddd76?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-green-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-center text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      Covered
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/721ceeeb-de8c-4fd3-99da-0eef28ffad20?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bd65c07-96e1-4447-b1f1-f1145bb1e766?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8290171-1669-453b-b200-1dcffd1d1168?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch z-[1] flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-y-slate-200 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/424fc1c9-06ba-4f9c-a136-1ef5f690c6f5?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full mt-3.5"
                      />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aea70c45-d0ea-4be9-b1c0-d876a2911dc8?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/16e81704-6b3f-4498-943d-3607b4fbcb56?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c90fb302-bc1a-475c-a9c0-4227d4f8c51b?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-red-500 flex pl-0 gap-1 my-auto pr-20 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5da0393-b854-4e60-a387-e630f8c2817c?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-red-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      None
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8de517a1-e0b1-477a-9967-ac3867513602?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e5a128f-274c-49f0-912c-bd0c121e3c18?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99f8e455-436f-46c7-b3e0-dc5d5008db26?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch z-[1] flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-y-slate-200 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/144b2515-1c3f-4bd3-8d15-ab876aef008b?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full mt-3.5"
                      />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6f89dcb-44b2-4681-a7f7-f709c0a8f3bb?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc2d47f4-aff1-4501-8ed8-0497306e52f2?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5832457d-c50c-4a51-b428-0695760b458b?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-red-500 flex pl-0 gap-1 my-auto pr-20 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/28939643-a08f-40b8-9ffe-38e6e68b9695?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-red-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      None
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed7b0e38-2a44-4f3c-81f8-11feb4373554?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffeccbf1-5ae4-44d0-960c-30e14ca2cd11?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] opacity-[0.33] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/332e0e46-bb16-485b-9a92-7256fbd36e88?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-b-slate-200 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:mr-px max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex aspect-square flex-col items-center mt-3.5 border-2 border-solid">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2679d9ab-949d-47d2-b0b5-40714ecee7eb?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                          className="aspect-square object-contain object-center w-[18px] overflow-hidden"
                        />
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/75d93e70-130d-46b6-ac22-dc6153d98088?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/22c8dea1-6480-410f-bb97-7d6921109dd9?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2d17b54-38cf-4383-b30d-ff48e51c6dc8?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-green-500 flex pl-0 gap-1 my-auto pr-11 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cbd20d5-2c11-4f40-b19d-27c11576054e?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-green-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-center text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      Covered
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4482974-b6f0-4163-a218-b2ce74e9ee7a?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9685bea6-6d13-4f33-b406-f9ff0d5330f0?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/367120fb-27fd-4106-a7e2-2aeb1cf22540?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch flex flex-col items-stretch px-5 py-1 border-b-slate-200 border-b border-solid max-md:max-w-full max-md:mr-px">
                <div className="border border-[color:var(--neutrals-300,#C6C6D0)] shadow-sm bg-white flex w-full items-start justify-between gap-5 pl-1.5 pr-20 py-4 rounded-lg border-solid max-md:max-w-full max-md:flex-wrap max-md:-mr-px max-md:pr-5">
                  <div className="self-center flex items-stretch gap-2.5 my-auto">
                    <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col border-2 border-solid" />
                    <div className="text-black text-base leading-4 grow whitespace-nowrap mt-1.5 self-start">
                      4 vehicles selected
                    </div>
                  </div>
                  <div className="self-center flex gap-3 my-auto items-start max-md:justify-center">
                    <div className="text-orange-600 text-base font-bold leading-4 underline mt-1">
                      Select All
                    </div>
                    <div className="text-orange-600 text-base font-bold leading-4 underline mt-1">
                      Clear
                    </div>
                    <div className="text-slate-700 text-base leading-5">
                      Honda
                    </div>
                  </div>
                  <div className="text-slate-700 text-base leading-5 my-auto">
                    Accord
                  </div>
                  <div className="flex items-stretch gap-2 self-start">
                    <div className="flex grow basis-[0%] flex-col items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d4c8841-f8cd-4149-88bc-756a7d293fa2?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/66a07d2f-6d52-491d-afd7-fa173806f248?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden mt-4"
                      />
                    </div>
                    <div className="text-slate-700 text-base leading-8 self-center my-auto">
                      0<br />0
                    </div>
                  </div>
                  <div className="flex items-stretch gap-2 self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5448a017-102a-4eeb-8068-10e151b6f263?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-[0.33] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-base leading-8">
                      Jan 23, 2022
                      <br />
                      Feb 25, 2024
                    </div>
                  </div>
                  <div className="items-center bg-green-500 self-center flex gap-1 my-auto pl-5 pr-3.5 py-1 rounded-[88px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/221ee543-775a-4445-b221-7d929ae786cf?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-green-400 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="text-white text-center text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      Covered
                    </div>
                  </div>
                  <div className="self-stretch flex items-center justify-between gap-0 max-md:justify-center">
                    <div className="justify-center items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white flex mr-0 gap-1 my-auto px-3 py-2 rounded-lg border-solid">
                      <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/521e064a-d684-4cb3-a302-7a9127e745bf?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                          className="absolute h-full w-full object-cover object-center inset-0"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/835879d4-1156-461b-88b4-7139b032a26e?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                          className="aspect-square object-contain object-center w-full overflow-hidden"
                        />
                      </div>
                      <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                        Documents
                      </div>
                    </div>
                    <div className="text-slate-700 text-base font-bold leading-5 whitespace-nowrap justify-center border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch grow px-5 py-4 rounded-lg border-solid items-start max-md:pl-2.5">
                      Documents
                    </div>
                    <div className="justify-center items-center border border-[color:var(--neutrals-300,#C6C6D0)] bg-white flex w-[108px] shrink-0 h-8 flex-col mt-1.5 rounded-lg border-solid self-start" />
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-b-slate-200 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:mr-px max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col mt-3.5 border-2 border-solid" />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae2725a3-b20e-4c80-bfe8-97a65b469530?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/91a07a10-f824-407e-9c5d-0bfa237614cb?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7376aa03-572b-4ce7-9a93-df6ee111cb12?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-green-500 flex pl-0 gap-1 my-auto pr-11 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3b84207-9cbc-421b-b4b8-daea7e7f0b32?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-green-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-center text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      Covered
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ff8220a-48e6-4e68-97c4-3cc360861f6b?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/60d37abb-53db-498a-b0cf-4587551e6246?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c73ba01-b80e-427c-b158-900e01e90551?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-b-slate-200 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:mr-px max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col mt-3.5 border-2 border-solid" />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a8dc11b-a156-4e7b-b076-535887dd6f96?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/93be3289-52e3-446a-b2c7-6f3e97cff29e?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    1<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8abc1229-8bbc-4cf1-b5ca-693f57484a5d?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-green-500 flex pl-0 gap-1 my-auto pr-11 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/876c5c34-66a0-4eb8-879c-5982188810c8?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-green-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-center text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      Covered
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3e28117-9a17-40ad-b193-3164c82374a5?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d52d7ada-46e7-4483-86cb-f457ce902717?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b772f9b3-3ae5-4380-8182-7f2bd0c89eb6?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-b-slate-200 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:mr-px max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col mt-3.5 border-2 border-solid" />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/42a61ef1-4410-48b7-86db-3b8f9b6b282d?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19473472-fe3a-486c-80bf-c5d6b99af23d?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7226a992-a3b6-43de-8cb6-db61a08139f4?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-green-500 flex pl-0 gap-1 my-auto pr-11 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c6b973e-af2a-40f2-822e-4417dac6bd1c?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-green-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-center text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      Covered
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a91f473f-5873-4f0e-8e4a-e7c2caf92923?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/288bd187-ae1c-4db7-92c6-64d411416c9e?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9d7b05a-ea3d-4900-9d7c-72f40325a068?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-b-slate-200 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:mr-px max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col mt-3.5 border-2 border-solid" />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc799d8e-94fe-40a1-8042-9af3314b711e?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbc5c5ff-e24e-4b6c-8a4f-50edfa5b363e?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/742eb739-e69e-4c52-8e4d-c79615641331?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-green-500 flex pl-0 gap-1 my-auto pr-11 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/40d09576-370b-49ba-ab04-9c1c9dcd8d5d?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-green-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-center text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      Covered
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/958ea8bc-0cde-4eda-bb0b-9c26d2f4e2fc?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3162c938-3680-42e4-80b8-2398523476f9?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dc6a542-46da-4fc1-bfc1-5cca831258c8?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch z-[1] flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-y-slate-200 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col mt-3.5 border-2 border-solid" />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32caa57a-98b9-42e9-a417-c30d4e931af8?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/469a6801-5a01-4bc1-bbdb-ac35472cbdb9?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c78b0a5-44e1-4857-8e0d-3431d4ce6185?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-red-500 flex pl-0 gap-1 my-auto pr-20 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b4041ac-d4e9-4da9-a269-5e6852dd4a74?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-red-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      None
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/de41f2b5-477d-4f1f-bcb3-d25297db8bc8?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/588c2ebd-9bd6-48e3-ac52-b69431626e52?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] opacity-[0.33] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed9ae273-dedb-4c25-8be8-f31776ff76d3?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch z-[1] flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-b-slate-200 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:mr-px max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col mt-3.5 border-2 border-solid" />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/53908567-8ea8-4b8a-b786-f31f322132d2?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d730a2bf-1436-49eb-acc5-6a59489773c5?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/93998a94-e219-4655-b28e-b3ba227c1486?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-green-500 flex pl-0 gap-1 my-auto pr-11 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac6fba4b-37a1-468d-ab7f-be126154388b?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-green-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-center text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      Covered
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fa928b6-ba97-4bce-b7c3-64bfa95e1dc7?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/93e596b7-72e6-40ea-84fb-7a59fbdbc1f4?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/867687d8-66d8-4d59-a5bf-574dda3bc0ef?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-b-slate-200 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:mr-px max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col mt-3.5 border-2 border-solid" />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d76f3b85-9f88-487f-a6a5-e4be4d850187?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9007f4d7-6bea-4a93-9232-7160727e7f02?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/85297c53-0ef2-41c1-87a4-2a6debc69a3d?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-green-500 flex pl-0 gap-1 my-auto pr-11 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a39e75be-82d7-411d-89f6-5b05c54d180f?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-green-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-center text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      Covered
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a544ae7-46a2-417f-b455-8c093704d0b5?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f68f914-44cf-4d20-b4d1-e36f9f34f4ea?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b281e44b-b61f-4b84-9e22-0f02e89d23e1?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-b-slate-200 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:mr-px max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col mt-3.5 border-2 border-solid" />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7edfbc-62a5-488f-ad45-cad04c55b04b?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f284f5c-3fbd-4b4b-8e5f-4ca355dee278?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9802574b-b95f-45be-85dc-1d73e1576b16?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-green-500 flex pl-0 gap-1 my-auto pr-11 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/54f973fc-1ec8-4e64-ac6a-fa1bbae0a814?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-green-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-center text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      Covered
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1f72409-f35d-4262-bcee-050bbd1a53b0?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/19254fb9-96aa-4575-9af5-8e39a0677d80?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dcc59a3-eab5-424d-af1b-c699c450d61d?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-b-slate-200 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:mr-px max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col mt-3.5 border-2 border-solid" />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0e36f60-a7b8-4df6-acd8-55458e9f8539?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a96007d-6105-4024-9432-74f856ba4ec8?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6875d6c-cfb0-44e7-a825-688920ebe01d?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-green-500 flex pl-0 gap-1 my-auto pr-11 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7bd6167-0d43-4c67-917a-a333cb8bbc19?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-green-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-center text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      Covered
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c8d765e-0cf5-4ebb-8524-4e8d83116436?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f5ea950-cd7c-4aaa-aa5e-b9fd747b12e7?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1e75192-f228-411f-86f6-e5e771afa631?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-bold leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white self-stretch z-[1] flex w-full items-stretch justify-between gap-5 pl-6 pr-7 py-5 border-y-slate-200 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="flex items-start justify-between gap-2 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                  <div className="self-stretch flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                    <div className="flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <div className="rounded border-[color:var(--text-icon-500,#838399)] bg-white flex w-[18px] shrink-0 h-[18px] flex-col mt-3.5 border-2 border-solid" />
                      <div className="text-slate-700 text-base leading-5 mt-3.5">
                        Red Fast Accord
                      </div>
                      <div className="text-slate-700 text-base leading-6 mt-2.5">
                        2022
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Honda
                      </div>
                      <div className="text-slate-700 text-base leading-5 mt-3">
                        Accord
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b7ee01a-de4b-4f1f-af87-c211825a18ff?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                      />
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/354e8311-afbb-430f-a81f-a2cdaa55c2a1?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full self-end"
                    />
                  </div>
                  <div className="text-slate-700 text-base leading-8 self-center my-auto">
                    0<br />0
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/91886971-05de-41d9-85b3-ca46cb604534?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-[0.33] object-contain object-center w-4 overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                  <div className="text-slate-700 text-base leading-8">
                    Jan 23, 2022
                    <br />
                    Feb 25, 2024
                  </div>
                </div>
                <div className="self-center flex items-center justify-between gap-2 my-auto pr-16 max-md:pr-5">
                  <div className="bg-red-500 flex pl-0 gap-1 my-auto pr-20 py-1 rounded-[88px] items-start max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/949c65df-1c97-4be6-897a-08e0a32f350d?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-1.5 fill-red-400 overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                    <div className="text-white text-xs font-medium leading-4 self-stretch grow whitespace-nowrap">
                      None
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <div className="flex-col overflow-hidden relative flex aspect-square w-4 items-center">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8f2ff5d-3954-428a-9ff7-28704bc29e6e?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="absolute h-full w-full object-cover object-center inset-0"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3824be9c-11ba-462a-8162-7a659b575183?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                      />
                    </div>
                    <div className="text-slate-700 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Documents
                    </div>
                  </div>
                  <div className="justify-between items-stretch border border-[color:var(--neutrals-300,#C6C6D0)] opacity-[0.33] bg-white self-stretch flex pl-0 gap-1 pr-7 py-2 rounded-lg border-solid max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/55ac5cea-b6ee-4b1b-9005-c91f3318559e?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-slate-700 text-xs font-medium leading-4 grow whitespace-nowrap">
                      Start Claim
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-stretch self-center flex w-[525px] max-w-full gap-2 mt-4 pr-20 max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5185e7a9-2798-4970-92db-765f27b802cd?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                  className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
                />
                <div className="justify-center text-orange-600 text-center text-base font-bold leading-5 border-[color:var(--primary-500,#FF5701)] bg-white aspect-square px-1.5 py-5 rounded-lg border-2 border-solid items-start">
                  1
                </div>
                <div className="justify-center text-slate-700 text-center text-base leading-5 border border-[color:var(--neutrals-300,#C6C6D0)] bg-white aspect-square px-1.5 py-5 rounded-lg border-solid items-start">
                  2
                </div>
                <div className="justify-center text-slate-700 text-center text-base leading-5 border border-[color:var(--neutrals-300,#C6C6D0)] bg-white aspect-square pt-7 pb-5 px-1.5 rounded-lg border-solid items-start">
                  ...
                </div>
                <div className="justify-center text-slate-700 text-center text-base leading-5 border border-[color:var(--neutrals-300,#C6C6D0)] bg-white aspect-square px-1.5 py-5 rounded-lg border-solid items-start">
                  9
                </div>
                <div className="justify-center text-slate-700 text-center text-base leading-5 border border-[color:var(--neutrals-300,#C6C6D0)] bg-white aspect-square px-1 py-5 rounded-lg border-solid items-start">
                  10
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b964444-22bf-46de-87ca-76bcb85be0d3?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                  className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden shrink-0 flex-1"
                />
=======
            <div className="justify-center items-center self-stretch bg-stone-50 flex flex-col mt-4 mb-72 px-5 py-7 rounded-lg max-md:max-w-full max-md:mb-10">
              <div className="justify-between items-stretch flex w-full max-w-[989px] gap-5 max-md:max-w-full max-md:flex-wrap">
                <div className="border border-[color:var(--gray-300,#D0D5DD)] shadow-sm bg-white flex grow basis-[0%] flex-col justify-center px-3 py-2.5 rounded-md border-solid items-start max-md:max-w-full">
                  <div className="items-stretch flex w-[414px] max-w-full gap-1">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/036cbe82-3ce0-4e57-ad03-9987b37118c8?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                      className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-gray-500 text-sm font-medium leading-5 grow whitespace-nowrap">
                      Have a question? Get started here! or Ask me something...
                    </div>
                  </div>
                </div>
                <div className="justify-center items-stretch border border-[color:var(--orange-dark-500,#FF4405)] shadow-sm bg-orange-600 self-center flex gap-2 my-auto px-3.5 py-2 rounded-md border-solid">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d72600d6-84bb-4f47-a476-654346662f6b?apiKey=4e612c7b4e3e4212bd90c1f2877c00c8&"
                    className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-white text-sm font-semibold leading-5 grow whitespace-nowrap">
                    Generate
                  </div>
                </div>
>>>>>>> a256be3 (lovely committed)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



<<<<<<< HEAD





=======
>>>>>>> a256be3 (lovely committed)
export default demoPage;