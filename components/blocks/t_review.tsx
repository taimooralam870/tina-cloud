import React from "react";
import type { Template } from "tinacms";
import { PageBlocksReview } from "../../tina/__generated__/types";

// Review Component
export const Review = ({ data }: { data: PageBlocksReview }) => {
  return (
    <div className="max-w-[1660px] mx-auto">
      <div className="xl:pt-[130px] sm:pt-[40px] xl:pb-[84px] pb-[20px] xl:px-[135px] sm:px-[40px] px-[10px]">
        <h1 className="md:text-[64px] sm:text-[50px] text-[35px] md:leading-[76.8px] sm:leading-[60px] leading-[48px] font-[lora] font-[400] max-w-[719px]">
          { data.title || "Customer Evaluations of Our Foods" }
        </h1>
        <div className="md:flex justify-between">
          <div className="md:pt-[67px] ml-[-135px]">
            <img
              src="//xilbill.myshopify.com/cdn/shop/files/Image-22_medium.png?v=1727706600"
              className="md:w-[100%] w-[300px]"
              alt="Customer review"
            />
          </div> 
          <div className="flex justify-end mt-[-20px]">
            {data.reviews && data.reviews.length > 0 ? (
              data.reviews.map((review, index) => ( 
                <div
                  key={index}
                  className="flex flex-col items-end relative top-[-41px]"
                >
                  <div className="flex items-center">
                    <span className="font-[lora] sm:text-[36px] text-[25px] leading-[43.2px] font-[400] sm:mr-[24px] mr-[8px]">
                      {review.name}
                    </span>
                    <img
                      src={review.avatar} 
                      className="sm:w-[100%] w-[40px]"
                      alt={review.name}
                    />
                  </div>
                  <div className="max-w-[531px] text-end sm:my-[24px] my-[12px]">
                    <p className="font-['open_sans_hebrew'] sm:text-[18px] text-[16px] sm:leading-[27px] leading-[21.6px] font-[400]">
                      {review.comment}
                    </p>
                  </div>
                  <div>
                    <span className="font-['times_new_roman'] font-[500] text-[18px] leading-[21.6px]">
                      {review.date}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
        <div className="flex justify-center relative mt-[-9px]">
          <div className="w-[179px] flex justify-between">
            <svg
              width="48"
              height="7"
              viewBox="0 0 48 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3.31836H45"
                stroke="#FF69B5"
                strokeWidth="6"
                strokeLinecap="round"
              ></path>
            </svg>
            <svg
              width="48"
              height="7"
              viewBox="0 0 48 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3.31836H45"
                stroke="#FFE3EB"
                strokeWidth="6"
                strokeLinecap="round"
              ></path>
            </svg>
            <svg
              width="48"
              height="7"
              viewBox="0 0 48 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3.31836H45"
                stroke="#FFE3EB"
                strokeWidth="6"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export const reviewBlockSchema: Template = {
  name: "Review",
  label: "Review",
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
      name: "reviews",
      label: "Reviews",
      type: "object",
      list: true,
      fields: [
        {
          name: "name",
          label: "Customer Name",
          type: "string",
        },
        {
          name: "comment",
          label: "Review Comment",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          name: "date",
          label: "Review Date",
          type: "string",
        },
        {
          name: "avatar",
          label: "Avatar Image",
          type: "image",
        },
      ],
    },
  ],
};
