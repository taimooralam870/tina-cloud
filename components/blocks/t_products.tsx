import React from "react";
import type { Template } from "tinacms";
import { PageBlocksProduct } from "../../tina/__generated__/types";

// Shop Component
export const Product = ({ data }: { data: PageBlocksProduct }) => {
  return (
    <div className="max-w-[1660px] mx-auto">
      <div className="py-[20px] bg-[#F9F5EC] lg:px-5 px-[10px] my-[30px]">
        <div
          className={`${data.flexDirection} lg:flex grid grid-cols-2 sm:grid-cols-2 justify-center gap-[10px] max-w-[1420px] mx-auto`}
        >
          <div className="w-full lg:max-w-[270px]">    
            <div className="flex flex-col gap-[16px] bg-white h-[100%] px-[14px]">
              <h2 className="sm:text-[32px] text-[24px] font-[Lora] leading-[1.2]">
                {data.title || "Best Sellers in UAE"}
              </h2>
              <p className="font-['open_sans_hebrew'] sm:leading-[24px] sm:text-[16px] text-[12px] leading-[18px]">
                {data?.description ||
                  "Explore the range of most loved bouquets in the UAE: Stunning arrangements with orchids, lilies, roses, & more. Perfect gifts, guaranteed to bring smiles."}
              </p>
              <a href={data?.btnlink || "#"}>
                <div className="h-[48px] bg-[#E32C89] text-white w-[160px] font-['open_sans_hebrew'] text-center flex items-center justify-center">
                  {data.btn || "View All"}
                  <div className="pl-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M12.483 2.68066C6.96596 2.68066 2.48596 7.16066 2.48596 12.6787C2.48596 18.1967 6.96596 22.6767 12.483 22.6767C18.001 22.6767 22.481 18.1967 22.481 12.6787C22.481 7.16066 18.001 2.68066 12.483 2.68066ZM12.483 4.18066C17.173 4.18066 20.981 7.98866 20.981 12.6787C20.981 17.3687 17.173 21.1767 12.483 21.1767C7.79296 21.1767 3.98596 17.3687 3.98596 12.6787C3.98596 7.98866 7.79296 4.18066 12.483 4.18066ZM14.011 8.89566C14.011 8.89566 15.513 10.4007 17.266 12.1547C17.413 12.3017 17.486 12.4937 17.486 12.6857C17.486 12.8777 17.413 13.0687 17.266 13.2157C15.513 14.9697 14.012 16.4737 14.012 16.4737C13.867 16.6187 13.677 16.6907 13.486 16.6907C13.294 16.6897 13.102 16.6167 12.955 16.4697C12.663 16.1767 12.661 15.7037 12.952 15.4127L14.929 13.4357H8.23596C7.82196 13.4357 7.48596 13.0997 7.48596 12.6857C7.48596 12.2717 7.82196 11.9357 8.23596 11.9357H14.929L12.951 9.95666C12.661 9.66766 12.664 9.19466 12.957 8.90266C13.104 8.75566 13.296 8.68166 13.487 8.68066C13.677 8.68066 13.867 8.75166 14.011 8.89566Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {data?.shop && data.shop.length > 0 ? (
            data.shop.map((shop, index) => (
              <div
                key={index}
                className="bg-white border lg:max-w-[270px] w-full border-black rounded-br-[20px] shadow-sm overflow-hidden"
              >
                <a href={shop?.link || "#"}>
                  {" "}
                  <img
                    src={
                      shop?.image ||
                      "//xilbill.myshopify.com/cdn/shop/files/Frame_35575_large.png?v=1727857813"
                    }
                    className="lg:h-[270px] w-full lg:w-[270px] object-cover"
                  />
                </a>
                <div className="p-[8px]">
                  <h3 className="text-[14px] text-center font-['open_sans_hebrew'] text-gray-800">
                    {shop?.name || "Golden Black Bouquet of Red Roses"}
                  </h3>
                  <p className="text-[18px] font-['open_sans_hebrew'] text-center text-gray-900 mt-[4px]">
                    AED {shop?.price || "199"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export const productBlockSchema: Template = {
  name: "Product",
  label: "Product",
  ui: {
    previewSrc: "/blocks/testimonial.png",
  },
  fields: [
    {
      component: "select",
      name: "flexDirection",
      label: "Object Direction",
      options: [
        { label: "Button Left", value: "flex-row" },
        { label: "Button Right", value: "flex-row-reverse" },
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
      name: "btn",
      label: "Button Name",
      type: "string",
    },
    {
      name: "btnlink",
      label: "Button Link",
      type: "string",
    },
    {
      name: "shop",
      label: "Products",
      type: "object",
      list: true,
      fields: [
        {
          name: "image",
          label: "Product Image",
          type: "image",
        },
        {
          name: "name",
          label: "Product Name",
          type: "string",
        },
        {
          name: "price",
          label: "Product Price",
          type: "string",
        },
        {
          name: "link",
          label: "Product Link",
          type: "string",
        },
      ],
    },
  ],
};
