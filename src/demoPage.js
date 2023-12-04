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
                  </div>
                </div>
              </div>
            </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default demoPage;