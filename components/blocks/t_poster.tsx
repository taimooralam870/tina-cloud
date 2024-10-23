import React from "react";
import type { Template } from "tinacms";
import { PageBlocksPoster } from "../../tina/__generated__/types";
export const Poster = ({ data }: { data: PageBlocksPoster }) => {
  return (
    <div className="max-w-[1660px] mx-auto">
      <div className="bg-[url('//xilbill.myshopify.com/cdn/shop/files/Container-1_large.jpg?v=1727706602')] bg-cover bg-center w-[100%] h-[full] lg:py-[80px] sm:py-[40px] py-[20px] lg:px-[135px] sm:px-[40px] px-[10px] text-white"> 
        <h1 className="font-[lora] lg:text-[90px] sm:text-[65px] text-[40px] text-white lg:leading-[99px] sm:leading-[78px] leading-[48px] font-[400]">
          {data.title || "Wedding Bouquets"}
        </h1>
        <p className="font-['open_sans_hebrew'] md:text-[20px] text-[18px] md:w-[659px] md:leading-[30px] leading-[23.5px] font-[400] md:my-[24px] my-[20px]">
          {data.description ||
            "Most flowering plants depend on animals, such as bees, moths, and butterflies, to transfer their pollen between different flowers, and have evolved to attract these pollinators."}
        </p>
        <div className="flex sm:w-[160px] w-[140px] sm:h-[48px] h-[40px] items-center justify-center bg-[#E32C89] text-[white]">
          <a
            href={data.buttonUrl || "#"} 
            className="font-['Open_Sans_Hebrew'] sm:text-[18px] text-[16px] mr-[8px]"
          >
            {data.buttonText || "Shop Now"}
          </a>    
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.983 2.3623C6.46596 2.3623 1.98596 6.8423 1.98596 12.3603C1.98596 17.8783 6.46596 22.3583 11.983 22.3583C17.501 22.3583 21.981 17.8783 21.981 12.3603C21.981 6.8423 17.501 2.3623 11.983 2.3623ZM11.983 3.8623C16.673 3.8623 20.481 7.6703 20.481 12.3603C20.481 17.0503 16.673 20.8583 11.983 20.8583C7.29296 20.8583 3.48596 17.0503 3.48596 12.3603C3.48596 7.6703 7.29296 3.8623 11.983 3.8623ZM13.511 8.5773C13.511 8.5773 15.013 10.0823 16.766 11.8363C16.913 11.9833 16.986 12.1753 16.986 12.3673C16.986 12.5593 16.913 12.7503 16.766 12.8973C15.013 14.6513 13.512 16.1553 13.512 16.1553C13.367 16.3003 13.177 16.3723 12.986 16.3723C12.794 16.3713 12.602 16.2983 12.455 16.1513C12.163 15.8583 12.161 15.3853 12.452 15.0943L14.429 13.1173H7.73596C7.32196 13.1173 6.98596 12.7813 6.98596 12.3673C6.98596 11.9533 7.32196 11.6173 7.73596 11.6173H14.429L12.451 9.6383C12.161 9.3493 12.164 8.8763 12.457 8.5843C12.604 8.4373 12.796 8.3633 12.987 8.3623C13.177 8.3623 13.367 8.4333 13.511 8.5773Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
export const posterBlockSchema: Template = {
  name: "Poster",
  label: "Poster",
  ui: {
    previewSrc: "/blocks/testimonial.png",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
    },
    {
      name: "description",
      label: "Description",
      type: "string",
      ui: {
        component: "textarea", 
      },
    },
    {
      name: "backgroundImage",
      label: "Background Image URL",
      type: "string", 
    },
    {
      name: "buttonText",
      label: "Button Text",
      type: "string",
    }, 
    {
      name: "buttonUrl",
      label: "Button URL",
      type: "string",
    },
  ],
};
