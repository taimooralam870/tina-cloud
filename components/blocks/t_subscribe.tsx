import React from "react";
import type { Template } from "tinacms";
import { PageBlocksSubscribe } from "../../tina/__generated__/types";

// Subscribe Component
export const Subscribe = ({ data }: { data: PageBlocksSubscribe }) => {
  return (
    <div className="max-w-[1660px] mx-auto">
      <div className="bg-[url(//xilbill.myshopify.com/cdn/shop/files/Image-1-2_1024x1024.png?v=1727706601)] bg-cover w-full h-full lg:py-[119px] px-[10px] sm:py-[70px] py-[30px] flex flex-col items-center">
        <h1 className="md:text-[64px] sm:text-[50px] text-[40px] sm:leading-[76.8px] leading-[48px] font-[lora] text-center font-[400]">
          {data.title || "Get The Latest Deals"}
        </h1>
        <p className="font-['open_sans_hebrew'] text-[20px] leading-[30px] font-[400] mt-[8px] sm:mb-[40px] mb-[20px]">
          {data.coupons || "$30 coupon for first shopping"}
        </p>
        <div className="flex">
          <div>
            <input
              type="email"
              placeholder="Enter your email here..."
              className="sm:w-[340px] w-[250px] sm:h-[56px] outline-none shadow-none border-[2px] border-[#FFE3EB] sm:py-[15px] py-[7px] pl-[24px] text-[16px] leading-[19.2px] font-[400] font-['open_sans_hebrew'] text-[#6B7280]"
            />
          </div> 
           <a
                      href={data.link || "#"} >
          <div className="sm:w-[160px] w-[100px] sm:h-[56px] bg-[#E32C89] flex justify-center items-center sm:ml-[22px] ml-[10px]">
            <button className="sm:text-[18px] text-[16px] leading-[21.6px] font-['open_sans_hebrew'] font-[400] text-white">
              Subscribe
            </button>
          </div>
          </a>
        </div> 
      </div>
    </div>
  );
};  
export const subscribeBlockSchema: Template = {
  name: "Subscribe",
  label: "Subscribe Form",
  ui: {
    previewSrc: "/blocks/testimonial.png",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      description: "The title of the subscription section.",
    },
    {
      name: "coupons",
      label: "Coupon Text",
      type: "string",
      ui: {
        component: "textarea",
      },
      description: "The coupon text to display for new subscribers.",
    },
       {
          name: "link",
          label: "Button Link",
          type: "string",
        },
  ],
};
