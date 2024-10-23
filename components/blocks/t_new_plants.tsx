import React from "react";
import type { Template } from "tinacms";
import { PageBlocksPlant } from "../../tina/__generated__/types";

export const Plant = ({ data }: { data: PageBlocksPlant }) => {
  return (
    <div className="max-w-[1660px] mx-auto">
      <div className="container w-[100%] lg:mt-[130px] mt-[30px] mb-[30px] lg:mb-[0px] xl:px-[135px] max-w-[1440px] mx-auto sm:px-[25px] px-[10px]">
        <h1 className="font-[Lora] text-[40px] leading-[48px] sm:text-[60px] sm:leading-[72px] lg:text-[80px] lg:leading-[96px] mb-[10px] sm:mb-[10px] lg:mb-[-70px]">
          Featured Bouquet of The
          <br className="xl:block hidden" />
          Weeks
        </h1>
        <div className="flex flex-col items-end">
          <p className="text-[#374151] ml-[0px] lg:mb-[40px] mb-[20px] max-w-[672px] font-[OpenSans] text-[18px] leading-[27px]">
            Most flowering plants depend on animals, such as bees, moths, and
            <br className="sm:block hidden" />
            butterflies, to transfer their pollen between different flowers, and
            <br className="sm:block hidden" />
            have evolved to attract these pollinators.
          </p>
        </div>
        <div className="flex gap-[24px] overflow-x-scroll">
          {data.plants && data.plants.length > 0 ? (
            data.plants.map((plant, index) => (
              <div
                key={index}
                className="swiper-slide w-[374px] border border-[#FFE3EB] bg-white overflow-hidden"
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-[100%] h-[243px] object-cover"
                />
                <div className="p-[16px]">
                  <div className="flex items-center mb-[16px]">
                    <img
                      src={plant.cimage}
                      alt="Profile"
                      className="w-[40px] h-[40px] rounded-full mr-[7px]"
                    />
                    <div className="flex justify-between w-[100%]">
                      <h2 className="font-['Times_New_Roman'] text-[18px] leading-[21.6px]">
                        {plant.name} {/* Display plant name */}
                      </h2>
                      <p className="font-['Times_New_Roman'] text-[16px] leading-[21.6px] text-[#4B5563]">
                        {plant.date || "2022/22/8"}{" "}
                        {/* Assuming you want to display a date */}
                      </p>
                    </div>
                  </div>
                  <h3 className="font-[Lora] text-[24px] leading-[30px] mb-[16px]">
                    {plant.title || "Best flowers for inside home"}{" "}
                    {/* Display plant price */}
                  </h3>
                  <p className="font-[OpenSans] text-[16px] leading-[24px] text-[#374151] mb-[25px]">
                    {plant.description ||
                      "All the flowers are best for your lovely house just get the one you love the most."}{" "}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="flex items-center text-[#4B5563] font-['Times_New_Roman'] text-[14px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="13"
                          fill="none"
                        >
                          <path
                            d="M0.905273 4.76224V4.60328C0.905273 2.68755 2.28986 1.05356 4.17764 0.738926C5.40273 0.530909 6.69907 0.938174 7.59253 1.83301L7.60464 1.8451C7.77765 2.01781 8.05948 2.01232 8.22563 1.83301C9.14375 0.938174 10.4154 0.530909 11.6652 0.738926C13.5535 1.05356 14.9376 2.68755 14.9376 4.60328V4.76224C14.9376 5.89962 14.4662 6.98767 13.633 7.76329L8.68058 12.3868C8.47503 12.5787 8.2037 12.6855 7.92141 12.6855C7.63912 12.6855 7.36779 12.5787 7.16224 12.3868L2.20956 7.76329C1.37749 6.98767 0.905273 5.89962 0.905273 4.76224Z"
                            fill="#4B5563"
                          ></path>
                        </svg>
                        {plant.likes || "15"} {/* Display likes */}
                      </span>
                      <span className="flex items-center text-[#4B5563] font-['Times_New_Roman'] text-[14px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="13"
                          fill="none"
                        >
                          <path
                            d="M8.38344 4.32793C8.34426 4.22698 8.40816 4.11412 8.51645 4.11412C9.91119 4.11412 11.0428 5.2418 11.0428 6.68555C11.0428 8.10519 9.91119 9.25698 8.51645 9.25698C7.09803 9.25698 5.99013 8.10519 5.99013 6.68555C5.99013 6.57621 6.10473 6.51208 6.20628 6.55259C6.3996 6.62972 6.611 6.68555 6.83224 6.68555C7.76119 6.68555 8.51645 5.9168 8.51645 4.97126C8.51645 4.74371 8.46044 4.52638 8.38344 4.32793ZM13.5849 2.84448C14.8165 4.00698 15.6401 5.37573 16.0296 6.35608C16.1164 6.56769 16.1164 6.8034 16.0296 7.01501C15.6401 7.97126 14.8165 9.34001 13.5849 10.5266C12.3454 11.6998 10.6428 12.6855 8.51645 12.6855C6.39013 12.6855 4.6875 11.6998 3.44856 10.5266C2.21698 9.34001 1.39382 7.97126 1.00227 7.01501C0.915911 6.8034 0.915911 6.56769 1.00227 6.35608C1.39382 5.37573 2.21698 4.00698 3.44856 2.84448C4.6875 1.67233 6.39013 0.685547 8.51645 0.685547C10.6428 0.685547 12.3454 1.67233 13.5849 2.84448ZM8.51645 2.8284C6.42435 2.8284 4.72698 4.55608 4.72698 6.68555C4.72698 8.81501 6.42435 10.5427 8.51645 10.5427C10.6086 10.5427 12.3059 8.81501 12.3059 6.68555C12.3059 4.55608 10.6086 2.8284 8.51645 2.8284Z"
                            fill="#4B5563"
                          ></path>
                        </svg>
                        {plant.year || "2001"}
                      </span>
                    </div>
                    <a
                      href={plant.link} // Use plant's link
                      className="text-[#FF69B5] font-semibold font-['Times_New_Roman'] text-[18px] leading-[21.6px]"
                    >
                      {plant.buttonText || "Read more"} {/* Display button text */}
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

export const plantBlockSchema: Template = {
  name: "Plant",
  label: "Plant",
  ui: {
    previewSrc: "/blocks/testimonial.png",
  },
  fields: [
    {
      name: "description",
      label: "Description",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "plants",
      label: "Plants",
      type: "object",
      list: true,
      fields: [
        {
          name: "image",
          label: "Product Image",
          type: "image",
        },
        {
          name: "cimage",
          label: "Client Image",
          type: "image",
        },
        {
          name: "name",
          label: "Client Name",
          type: "string",
        },
        {
          name: "date",
          label: "Date",
          type: "string",
          ui: {
            component: "text",
          },
        },
        {
          name: "title",
          label: "Price",
          type: "number",
        },

        {
          name: "description",
          label: "Product Description",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          name: "buttonText",
          label: "Button Text",
          type: "string",
          ui: {
            component: "text",
          },
        },
        {
          name: "link",
          label: "Product Link",
          type: "string",
        },

        {
          name: "likes",
          label: "Likes",
          type: "number",
        },
        {
          name: "year",
          label: "Year",
          type: "string",
          ui: {
            component: "text",
          },
        },
      ],
    },
  ],
};
