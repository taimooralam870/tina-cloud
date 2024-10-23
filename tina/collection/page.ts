import type { Collection } from "tinacms";
import { heroBlockSchema } from "../../components/blocks/hero";
import { contentBlockSchema } from "../../components/blocks/content";
import { testimonialBlockSchema } from "../../components/blocks/testimonial";
import { contactBlockSchema } from "../../components/blocks/contact";
import { sliderBlockSchema } from "../../components/blocks/slider";
import { featureBlockSchema } from "../../components/blocks/features"; 
import { featuresBlockSchema } from "../../components/blocks/t_feature";
import { bannerBlockSchema } from "../../components/blocks/t_banner";
import { imageTextBlockSchema } from "../../components/blocks/t_img_text";
import { shopBlockSchema } from "../../components/blocks/t_shop";
import { posterBlockSchema } from "../../components/blocks/t_poster";
import { imageBlockSchema } from "../../components/blocks/t_imgText";
import { productBlockSchema } from "../../components/blocks/t_products";
import { plantBlockSchema } from "../../components/blocks/t_new_plants";
import { reviewBlockSchema } from "../../components/blocks/t_review";
import { subscribeBlockSchema } from "../../components/blocks/t_subscribe";
const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      if (document._sys.filename === "about") {
        return `/about`;
      }
      if (document._sys.filename === "contact") {
        return `/contact`;
      }
      return undefined;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        //@ts-ignore
        featureBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
        contactBlockSchema,
        sliderBlockSchema,
        featuresBlockSchema,
        bannerBlockSchema,
        imageTextBlockSchema,
        shopBlockSchema,
        posterBlockSchema,
        imageBlockSchema,
        productBlockSchema,
        plantBlockSchema,
        reviewBlockSchema,
        subscribeBlockSchema,
      ],
    },
  ],
};

export default Page;
