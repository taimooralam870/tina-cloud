import React from "react";
import type { Template } from "tinacms";
import { PageBlocksImage } from "../../tina/__generated__/types";
export const Image = ({ data }: { data: PageBlocksImage }) => {
  return (
    <div className="max-w-[1660px] mx-auto">   
      <div     
        className={`main flex md:${data.flexDirection} flex-col mt-[30px] md:mt-[0px] items-center justify-between bg-white px-[10px] sm:px-[25px] xl:px-[96px]`}
      >  
        <div className="md:w-[50%] flex flex-col items-center py-[42px]">
          <h2 className="text-center font-[Lora] text-[40px] leading-[50px] lg:text-[50px] lg:leading-[60px] mb-[8px] lg:mb-[16px]">
            {data.title}
          </h2>
          <p className="text-center text-[#374151] lg:w-[496px] font-['open_sans_hebrew'] text-[16px] leading-[21px] lg:text-[18px] lg:leading-[27px]">
            {data.description}
          </p> 
          <div className={`flex justify-center w-full ${data.hide} `}>
            <a
              href={data.buttonUrl}
              className="inline-block p-[10px] mt-[20px] lg:mt-[40px] bg-[#E32C89] text-white text-center w-[168px] font-['open_sans_hebrew'] text-[18px] leading-normal"
            >
              {data.buttonText}
            </a>
          </div>
        </div>
        <div className="md:w-[50%] flex justify-center md:ml-[10px] lg:ml-[0px]">
          <img src={data.imageUrl} className="w-[100%]" alt={data.title} />
        </div>
      </div>
    </div>
  );
};  
export const imageBlockSchema: Template = {
  name: "Image",
  label: "Image",
  ui: {
    previewSrc: "/blocks/testimonial.png",
  },
  fields: [ 
   {
      component: "select", 
      name: "flexDirection",
      label: "Object Direction",
      options: [
        { label: "Image Left", value: "flex-row" },
        { label: "Image Right", value: "flex-row-reverse" },
      ],
      type: "string",  
    },
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
      name: "imageUrl",
      label: "Image URL",
      type: "string",
    },
    {
      name: "hide",
      label: "Button Show & Hidden",
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
 