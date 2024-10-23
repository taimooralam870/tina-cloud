import React from "react";
import type { Template } from "tinacms";
import { PageBlocksShop } from "../../tina/__generated__/types";

// Shop Component
export const Shop = ({ data }: { data: PageBlocksShop }) => {
  return (
    <div className="max-w-[1660px] mx-auto">
      <div className="px-[10px] lg:py-[130px] py-[40px] sm:px-[24px] xl:px-[135px]">
        <div className="sm:mb-[56px] mb-[20px]">
          <h1 className="lg:text-right font-[Lora] lg:text-[80px] sm:text-[60px] text-[40px] leading-[48px] sm:leading-[72px] lg:leading-[96px] ">
            {data.title}
          </h1>
          <p className="mt-2 text-gray-600 lg:text-right font-['Open_Sans_Hebrew'] sm:text-[18px] text-[16px] leading-[20.8px] sm:leading-[27px] xl:mr-[354px] lg:mr-[300px]">
            {data.description}    
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-[24px] gap-[10px]">
          {data.products && data.products.length > 0 ? (
            data.products.map((product, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden w-full flex flex-col">
                <img
                  src={product.image || "https://cdn.shopify.com/s/files/1/0697/1975/2924/files/Image_1.png?v=1727855948"}
                  alt={product.name}
                  className="w-full max-h-[314px] h-[full] object-cover"
                />
                <div className="flex flex-col justify-between sm:mt-[16px] mt-[8px]"> 
                  <div> 
                    <h2 className="font-['Lora'] sm:text-[24px] text-[18px] leading-[21.6px] sm:leading-[28.8px]">
                      {product.name || "BOUQUET NO-3"}
                    </h2>
                  </div>
                  <div className="flex justify-between items-center mt-[5px]">
                    <p className="font-['Open_Sans_Hebrew'] sm:text-[24px] text-[16px] leading-[19.2px] sm:leading-[28.8px] text-[#6B7280]">
                      $ {product.price || "25"}
                    </p>
                    <a
                      href={product.link || "#"}
                      className="text-[#E32C89] border border-[#E32C89] sm:px-[16px] sm:py-[9px] px-[10px] py-[6px] font-['Open_Sans_Hebrew'] sm:text-[18px] sm:leading-[21.6px] text-[14px] leading-[16.8px]"
                    >
                      {product.buttonText || "SHOP NOW"}
                    </a>
                  </div>
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
export const shopBlockSchema: Template = {
  name: "Shop",
  label: "Shop Now",
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
      name: "products",
      label: "Products",
      type: "object",
      list: true,
      fields: [
        {
          name: "name",
          label: "Product Name",
          type: "string",
        },
        {
          name: "price",
          label: "Price",
          type: "number",
        },
        {
          name: "image",
          label: "Product Image",
          type: "image",
        },
        {
          name: "buttonText",
          label: "Button Text",
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
