import React from "react";
import type { Template } from "tinacms";
import { PageBlocksBanner } from "../../tina/__generated__/types";

export const Banner = ({ data }: { data: PageBlocksBanner }) => {
  return (
    <div className="max-w-[1660px] mx-auto">
      <div className="grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 rid-rows-2 gap-[10px] md:gap-[24px] sm:px-[20px] xl:px-[135px]">
        {data.blocks.map((block, index) => (
          <div
            key={index}
            className="bg-[url('https://xilbill.myshopify.com/cdn/shop/files/Image-8_large.png?v=1727706600')] bg-no-repeat md:py-[35px] py-[20px] lg:pl-[66px] px-[20px] lg:px-0 w-[100%] bg-cover bg-center"
          >
            {/* Render Image if available */}
            {block.welcomeHero?.image?.src && (
              <img 
                src={block.welcomeHero.image.src}
                alt={block.welcomeHero.image.alt || ""}
                className="w-full h-auto"
              />
            )}

            <span className="font-['open_sans_hebrew'] sm:text-[20px] text-[16px] leading-[19.2px] sm:leading-[30px]">
              {block.welcomeHero.sale}
            </span>
            <h1 className="font-['Lora'] sm:text-[36px] text-[25px] leading-[30px] sm:leading-[43.2px] pb-[16px] pt-[8px]">
              {block.welcomeHero.heading}
            </h1>
            <div className="flex sm:w-[160px] w-[140px] sm:h-[48px] h-[40px] items-center justify-center bg-[#E32C89] text-[white]">
              <a
                href={block.welcomeHero.buttonUrl || "#"} 
                className="font-['Open_Sans_Hebrew'] sm:text-[18px] text-[16px] mr-[8px]"
              >
                {block.welcomeHero.btn} 
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
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export const bannerBlockSchema: Template = {
  name: "banner",
  label: "Banner",
  ui: { 
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      quote:
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
      author: "Phil Karlton",
      color: "primary",
    },
  },
  fields: [
    {
      name: "blocks",
      label: "Blocks",
      type: "object",
      list: true,
      fields: [
        {
          type: "object",
          name: "welcomeHero",
          label: "Welcome Hero",
          fields: [
            {
              type: "object",
              label: "Image",
              name: "image",
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
              type: "string",
              label: "Sale",
              name: "sale",
            },
            {
              type: "string",
              label: "Heading",
              name: "heading",
            },
            {
              type: "string",
              label: "Button Name",
              name: "btn",
            },
            {
              type: "string",
              label: "Button URL",
              name: "buttonUrl", 
            },
          ],
        },
      ],
    },
  ],
};
