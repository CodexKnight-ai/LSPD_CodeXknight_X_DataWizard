import React, { useState } from "react";

function LostAndFound() {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const lostItems = [
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
    { id: 4, name: "Item 4", description: "Description for Item 4" },
    { id: 5, name: "Item 5", description: "Description for Item 5" },
    { id: 6, name: "Item 6", description: "Description for Item 6" },
    { id: 7, name: "Item 7", description: "Description for Item 7" },
    { id: 8, name: "Item 8", description: "Description for Item 8" },
    // Add more items as needed
  ];

  const openDetails = (item) => {
    setSelectedItem(item);
    setDetailsVisible(true);
  };
 

  return (
    <div className="mt-[8vh] flex h-[92vh] w-screen mainPage">
      <div className="w-2/5 h-full bg-[#121212]"></div>
      <div className="w-3/5 h-full overflow-hidden box-border">
        <div className="w-full h-16 text-center bg-gray-600 font-gtaHeadingText1 text-4xl text-white">
          LOST AND FOUND
        </div>
        <div className='w-full h-full bg-[url("/lnfBg.gif")] bg-center bg-cover flex flex-col items-center gap-3 overflow-auto p-2 '>
        {/* <p className="flex items-start self-start fixed"><input className="w-4/5 h-10 pl-3 p-2 bg-[#0B3039] font-gtaDescriptionText text-2xl text-white self-start" placeholder="Search"/></p> */}
          {lostItems.map((item) => (
            <div
              key={item.id}
              className="w-fit h-fit bg-[#11304dd4] px-10 py-8 flex flex-col "
              onClick={() => openDetails(item)}
            >
              <div className="w-1/2 h-1/2 bg-black p-48"></div>
              <div className="w-full h-fit bg-[#424241] text-center font-gtaHeadingText1 text-white p-4 text-3xl">
                {item.name}
              </div>
            </div>
          ))}
        </div>
        {detailsVisible && (
          <div className='absolute w-4/5 h-3/4 bg-black top-20 left-6 ml-[10%] mr-[10%] border-white border-2 text-white'>
            <div className="p-4">
              <h2 className="text-4xl">{selectedItem.name}</h2>
              <p className="mt-4">{selectedItem.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-red-600 text-white"
                onClick={() => setDetailsVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LostAndFound;
