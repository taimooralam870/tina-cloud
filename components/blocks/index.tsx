import { tinaField } from "tinacms/dist/react";
import { Page, PageBlocks } from "../../tina/__generated__/types";
import { Hero } from "./hero";
import { Content } from "./content";
import { Features } from "./features";
import { Testimonial } from "./testimonial";
import { Contact } from "./contact";
import { Slider } from "./slider";
import { Feature } from "./t_feature";
import { Banner } from "./t_banner";
import { ImageText } from "./t_img_text";
import { Shop } from "./t_shop";  
import { Poster } from "./t_poster";
import { Image } from "./t_imgText"; 
import { Product } from "./t_products";
import { Plant } from "./t_new_plants";
import { Review } from "./t_review";
import { Subscribe } from "./t_subscribe";
export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <> 
      {props.blocks
        ? props.blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );  
          })
        : null}
    </>
  );
};
const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksContact":
      return <Contact data={block} />;
    case "PageBlocksSlider":
      return <Slider data={block} />;
    case "PageBlocksFeature":
      return <Feature data={block} />;
    case "PageBlocksBanner":
      return <Banner data={block} />;
    case "PageBlocksImageText":
      return <ImageText data={block} />;
    case "PageBlocksShop":
      return <Shop data={block} />;
    case "PageBlocksPoster":
      return <Poster data={block} />;
    case "PageBlocksImage":
      return <Image data={block} />;
    case "PageBlocksProduct":
      return <Product data={block} />;
    case "PageBlocksPlant":
      return <Plant data={block} />;
       case "PageBlocksReview":
      return <Review data={block} />;
           case "PageBlocksSubscribe":
      return <Subscribe data={block} />;

    default:
      return null;
  } 
};
