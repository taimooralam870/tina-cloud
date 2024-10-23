import React from "react";
import type { Template } from "tinacms";
import type { PageBlocksFeature } from "../../tina/__generated__/types";
export const Feature = ({ data }: { data: PageBlocksFeature }) => {
  return (
    <section>
      <div className="max-w-[1660px] mx-auto">
        <div className="grid grid-cols-4 grid-rows-1 gap-[10px] md:gap-[30px] lg:gap-[80px] px-[10px] sm:px-[20px] xl:px-[135px] py-[40px] lg:py-[80px]">
          {data?.features && data.features.length > 0 ? (
            data.features.map((feature: any, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img
                  className="w-[44px] h-[44px]"
                  src={feature.image?.src || ""}
                  alt={feature.image?.alt || "Feature Image"}
                />
                <h1 className="font-['Lora'] text-[14px] sm:text-[16px] md:text-[24px] font-[400] leading-[16.7px] md:leading-[28.8px] py-[5px] md:py-[8px]">
                  {feature.heading}
                </h1>
                <p className="font-['Open_Sans_Hebrew'] text-[13px] md:text-[15px] leading-[14.4px] md:leading-[24px] sm:block">
                  {feature.description}
                </p>
              </div>
            ))
          ) : (
            <p>No features available</p>  
          )}
        </div>
      </div>
    </section>
  );
};
export const featuresBlockSchema: Template = {
  name: "feature",
  label: "Feature Block",
  fields: [ 
    {
      label: "Features",
      name: "features",
      type: "object",
      list: true,
      fields: [
        {
          name: "image",
          label: "Image",
          type: "object",
          fields: [
            {
              name: "src",
              label: "Image Source",
              type: "image",
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
        },
        {
          name: "heading",
          label: "Heading",
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          type: "string",
        },
      ],
    },
  ],
};
