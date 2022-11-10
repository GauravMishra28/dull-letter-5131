import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  Flex,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Subcategory from "../../components/Subcategory";
import AccordionComponent from "../../components/AccordionComponent";
import { getSingleProduct } from "../../store/SingleProduct/singleProduct.action";
import { useEffect } from "react";
import ReviewSection from "../../components/ReviewSection";

function SingleProduct() {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((store) => store.singleProduct);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  // if (loading) {
  //   return <h3>Loading ...</h3>;
  // }

  // if (error) {
  //   return <h3>Something Went Wrong !</h3>;
  // }

  return (
    <Stack>
      <Flex
        mt={5}
        justify={"space-evenly"}
        direction={isLargerThan600 ? "row" : "column"}
      >
        <Box width={isLargerThan600 ? "45%" : "100%"}>
          <Image
            m={"auto"}
            w={"70%"}
            src="https://www.sephora.com/productimages/sku/s2316172-main-zoom.jpg?imwidth=465"
          />
        </Box>
        <Box p={5} width={isLargerThan600 ? "45%" : "100%"}>
          <Box>
            <Text as="b" fontSize="14px">
              Dior
            </Text>
            <Text fontSize="md">BACKSTAGE Face & Body Foundation</Text>
            <Box display={"flex"} mt={5}>
              <Box>
                <Text as="b">$40.00 </Text>
              </Box>
              <Text fontSize={"12px"} ml={1}>
                or 4 payments of $13.50 with Klarna or afterpay
              </Text>
            </Box>
          </Box>
          <Box mt={5}>
            <Text as="b" fontSize="md">
              Get it Shipped
            </Text>
            <RadioGroup defaultValue="1">
              <Stack spacing={5} direction="column">
                <Radio mt={10} colorScheme="green" value="1">
                  Standard
                </Radio>
                <Radio colorScheme="red" value="2">
                  Same-Day DeliverySame-Day Delivery not available for your
                  location Change your location
                </Radio>
              </Stack>
              <Box mt={5}>
                <Box>
                  <Text as="b" fontSize="md">
                    Buy Online & Pick Up
                  </Text>
                </Box>
                <Box mt={10}>
                  <Radio colorScheme="red" value="3">
                    Select to see availability at stores near you
                  </Radio>
                </Box>
              </Box>
            </RadioGroup>
          </Box>
          <Box mt={10}>
            <Button
              size={"lg"}
              pl={20}
              pr={20}
              borderRadius={50}
              fontSize="14px"
              colorScheme="red"
            >
              Add to Basket <br /> for Standard Shipping{" "}
            </Button>
          </Box>
        </Box>
      </Flex>
      <Box p={5} style={{ marginTop: "75px" }}>
        <Box ml={3}>
          <Text fontSize={"20px"} as="b">
            About the Product
          </Text>
        </Box>
        <Box>
          <Subcategory
            heading={"What it is:"}
            summary=" A highlighter powder with a high-impact iridescent glow, giving skin
          an instant boost of radiance and comfort all day long."
          />
          <Subcategory heading={"Coverage:"} summary="Medium" />
          <Subcategory heading={"Finish:"} summary="Radiant" />
          <Subcategory heading={"Formulation:"} summary="Pressed Powder" />
          <Subcategory heading={"Formulation:"} summary="Pressed Powder" />
          <Subcategory
            heading={"Highlighted Ingredients:"}
            summary="- Wild Pansy Extract: Protects skin’s natural hydration."
          />
          <Subcategory
            heading={"What Else You Need to Know:"}
            summary="What Else You Need to Know: Composed of 95% natural-origin
            pigments, this highlighter is highly concentrated in shimmering
            pearlescent pigments, blending seamlessly for a radiant-looking
            complexion*. The formula is infused with wild pansy extract to
            hydrate the skin and provide lasting comfort, all housed in a
            Dior couture compact. (*Amount calculated based on the ISO
            16128-1 and ISO 16128-2 standard. Water percentage included.)"
          />
        </Box>
      </Box>
      <Box>
        <Box ml={3}>
          <AccordionComponent
            heading={"Ingredients"}
            subHeading={
              " -Wild Pansy Extract: Protects skin’s natural hydration."
            }
            summary=" Mica, Cetearyl Ethylhexanoate, Silica, Squalane,
        Octyldodecyl Stearoyl Stearate, Glycerin, Parfum
        (Fragrance), Polysorbate 80, 1,2-Hexanediol, Caprylyl
        Glycol, Prunus Armeniaca (Apricot) Kernel Oil,
        Ethylhexylglycerin, Synthetic Fluorphlogopite, Chondrus
        Crispus Extract, Xanthan Gum, Pentaerythrityl
        Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Cetearyl Alcohol,
        Dicalcium Phosphate, Aqua (Water), Tocopherol, Butylene
        Glycol, Hydrolyzed Viola Tricolor Extract, Rosa Multiflora
        Fruit Extract, [+/- Ci 77891 (Titanium Dioxide), Ci 77491,
        Ci 77499 (Iron Oxides), Ci 75470 (Carmine)]."
          />
        </Box>
        <Box ml={3}>
          <AccordionComponent
            heading={"How to Use"}
            subHeading={"Suggested Usage:"}
            summary=" Apply the Dior Forever Couture Luminizer Highlighter Powder with a highlighter brush on the high points of the face and collarbone.
        -Finish with a touch on the Cupid's bow above your lip for a glowy effect.
        
        Pro tip:
        -A little goes a long way, apply to desired effect."
          />
        </Box>
      </Box>
      <Box>
        <Box ml={3}>
          <Box>
            <Text p={5} fontSize={"20px"} as="b">
              Ratings & Reviews (2K)
            </Text>
          </Box>
          <Box m={5}>
            <ReviewSection />
          </Box>
        </Box>
      </Box>
      <Flex
        style={{ marginTop: "50px", marginLeft: "10px", marginBottom: "50px" }}
        ml={5}
        gap={15}
        justify={"flex-start"}
        direction={isLargerThan600 ? "row" : "column"}
      >
        <Box>
          <Image
            m={"auto"}
            src="https://tpc.googlesyndication.com/simgad/16160614607739331938"
          />
        </Box>
        <Box>
          <Image
            m={"auto"}
            src="https://tpc.googlesyndication.com/simgad/14177892550749632546"
          />
        </Box>
        <Box>
          <Image
            m={"auto"}
            src="https://tpc.googlesyndication.com/simgad/17810597195573312581"
          />
        </Box>
      </Flex>
    </Stack>
  );
}

export default SingleProduct;