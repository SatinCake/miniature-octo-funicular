import React from "react";

import { Stack, Row, Text, Column, Img, List } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <Stack className="bg-bluegray_900 font-inter 3xl:h-[1054px] h-[1158px] lg:h-[683px] xl:h-[781px] 2xl:h-[878px] mx-[auto] w-[100%]">
        <Stack className="absolute bottom-[3%] 3xl:h-[1022px] h-[1123px] lg:h-[662px] xl:h-[757px] 2xl:h-[852px] w-[100%]">
          <Stack className="absolute 3xl:h-[1022px] h-[1123px] lg:h-[662px] xl:h-[757px] 2xl:h-[852px] w-[100%]">
            <Stack className="absolute 3xl:h-[1022px] h-[1123px] lg:h-[662px] xl:h-[757px] 2xl:h-[852px] right-[0] w-[93%]">
              <Row className="absolute justify-between w-[100%]">
                <Text className="font-bold mb-[1047px] lg:mb-[616px] xl:mb-[705px] 2xl:mb-[793px] 3xl:mb-[952px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] mt-[37px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[29px] text-[32px] text-white_A700 w-[auto]">
                  UIGamer
                </Text>
                <Stack className="3xl:h-[1022px] h-[1123px] lg:h-[662px] xl:h-[757px] 2xl:h-[852px] w-[65%]">
                  <Row className="absolute items-center justify-center right-[11%] top-[3%] w-[33%]">
                    <Text className="font-normal lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-white_A700 w-[auto]">
                      Home
                    </Text>
                    <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] ml-[45px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-white_A700 w-[auto]">
                      Home
                    </Text>
                    <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] ml-[45px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-white_A700 w-[auto]">
                      Home
                    </Text>
                    <Text className="font-normal lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] ml-[57px] not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px] text-white_A700 w-[auto]">
                      Home
                    </Text>
                  </Row>
                  <Stack className="absolute 3xl:h-[100px] h-[109px] lg:h-[65px] xl:h-[74px] 2xl:h-[83px] left-[23%] top-[40%] w-[28%]">
                    <div className="absolute bottom-[0] left-[0] overflow-x-auto w-[100%]">
                      <Stack className="bg-gray_600_5e lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] h-[212px] w-[100%]">
                        <Stack className="absolute lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] h-[212px] w-[100%]">
                          <Column className="absolute bg-gray_600_5e items-center pb-[1px] pl-[1px] right-[0] top-[0] w-[87%]">
                            <div className="bg-bluegray_100 lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] h-[66px] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] rounded-radius8 w-[100%]"></div>
                          </Column>
                          <Stack className="absolute border border-deep_purple_A200 border-solid lg:h-[124px] xl:h-[142px] 2xl:h-[160px] 3xl:h-[191px] h-[210px] inset-y-[0] left-[0] my-[auto] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] px-[15px] lg:px-[8px] rounded-radius5 w-[37%]">
                            <Img
                              src="images/img_polygon1.png"
                              className="absolute lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] h-[93px] inset-x-[0] mx-[auto] top-[0] lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px] w-[93px]"
                              alt="PolygonOne"
                            />
                          </Stack>
                        </Stack>
                        <Text className="absolute font-bold left-[16%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-white_A700 top-[13%] w-[auto]">
                          Woahhhhh I can’ t
                        </Text>
                      </Stack>
                    </div>
                    <Img
                      src="images/img_pexelsphotoby.png"
                      className="absolute lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] left-[3%] rounded-radius50 top-[0] w-[auto]"
                      alt="PexelsPhotoby"
                    />
                  </Stack>
                  <List
                    className="absolute bg-cover bg-repeat gap-[0] min-h-[auto] lg:p-[126px] xl:p-[144px] 2xl:p-[162px] 3xl:p-[194px] p-[214px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group11.png')" }}
                    orientation="vertical"
                  >
                    <Stack className="3xl:h-[100px] h-[109px] lg:h-[65px] xl:h-[74px] 2xl:h-[83px] lg:ml-[230px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[356px] ml-[392px] lg:my-[47px] xl:my-[54px] 2xl:my-[60px] 3xl:my-[72px] my-[80.25px] w-[45%]">
                      <Stack className="absolute bg-gray_600_5e bottom-[0] lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] h-[212px] left-[0] w-[100%]">
                        <Stack className="absolute lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] h-[212px] w-[100%]">
                          <Column className="absolute bg-gray_600_5e items-center pb-[1px] pl-[1px] right-[0] top-[0] w-[87%]">
                            <div className="bg-bluegray_100 lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] h-[66px] lg:mb-[13px] xl:mb-[15px] 2xl:mb-[17px] 3xl:mb-[20px] mb-[23px] rounded-radius8 w-[100%]"></div>
                          </Column>
                          <Stack className="absolute border border-deep_purple_A200 border-solid lg:h-[124px] xl:h-[142px] 2xl:h-[160px] 3xl:h-[191px] h-[210px] inset-y-[0] left-[0] my-[auto] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] px-[15px] lg:px-[8px] rounded-radius5 w-[37%]">
                            <Img
                              src="images/img_polygon1.png"
                              className="absolute lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] h-[93px] inset-x-[0] mx-[auto] top-[0] lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px] w-[93px]"
                              alt="PolygonOne One"
                            />
                          </Stack>
                        </Stack>
                        <Text className="absolute font-bold right-[6%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-white_A700 top-[13%] w-[auto]">
                          Holy crap, that was really awesome !
                        </Text>
                      </Stack>
                      <Img
                        src="images/img_pexelsphotoby_38X38.png"
                        className="absolute lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] left-[3%] rounded-radius50 top-[0] w-[auto]"
                        alt="PexelsPhotoby One"
                      />
                    </Stack>
                    <Stack className="3xl:h-[100px] h-[109px] lg:h-[65px] xl:h-[74px] 2xl:h-[83px] lg:ml-[233px] xl:ml-[266px] 2xl:ml-[300px] 3xl:ml-[360px] ml-[396px] lg:mr-[20px] xl:mr-[22px] 2xl:mr-[25px] 3xl:mr-[30px] mr-[34px] lg:my-[47px] xl:my-[54px] 2xl:my-[60px] 3xl:my-[72px] my-[80.25px] w-[39%]">
                      <Stack className="absolute bg-gray_600_5e bottom-[0] lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] h-[212px] left-[0] w-[100%]">
                        <Stack className="absolute lg:h-[125px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] h-[212px] w-[100%]">
                          <Column className="absolute bg-gray_600_5e items-center lg:pb-[14px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[22px] pb-[25px] right-[0] top-[0] w-[86%]">
                            <div className="bg-bluegray_100 lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] h-[66px] rounded-radius8 w-[100%]"></div>
                          </Column>
                          <Stack className="absolute border border-deep_purple_A200 border-solid lg:h-[124px] xl:h-[142px] 2xl:h-[160px] 3xl:h-[191px] h-[210px] inset-y-[0] left-[0] my-[auto] 3xl:px-[11px] px-[13px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-radius5 w-[37%]">
                            <Img
                              src="images/img_polygon1.png"
                              className="absolute lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] h-[93px] inset-x-[0] mx-[auto] top-[1%] lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px] w-[93px]"
                              alt="PolygonOne Two"
                            />
                          </Stack>
                        </Stack>
                        <Text className="absolute font-bold right-[7%] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px] text-white_A700 top-[13%] w-[auto]">
                          10/10 , would be recommend
                        </Text>
                      </Stack>
                      <Img
                        src="images/img_pexelsphotoby_1.png"
                        className="absolute lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] h-[38px] left-[3%] rounded-radius50 top-[0] w-[auto]"
                        alt="PexelsPhotoby Two"
                      />
                    </Stack>
                  </List>
                </Stack>
              </Row>
              <Img
                src="images/img_rectangle7.png"
                className="absolute h-[106px] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] left-[6%] top-[15%] w-[20%]"
                alt="RectangleSeven"
              />
            </Stack>
            <Text className="absolute font-bold leading-[normal] left-[3%] lg:text-[36px] xl:text-[41px] 2xl:text-[46px] 3xl:text-[56px] text-[62px] text-white_A700 top-[17%] w-[31%]">
              YOUR UI LEARNIG <br />
              EXEPERANCE JUST
              <br />
              LEVELED UP
            </Text>
            <Text className="absolute font-normal leading-[normal] left-[2%] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-white_A700 top-[40%] w-[31%]">
              We’ve gamified our ui system so that you can <br />
              have a blast
            </Text>
            <Stack className="absolute bottom-[2%] lg:h-[237px] xl:h-[271px] 2xl:h-[304px] 3xl:h-[365px] h-[401px] w-[100%]">
              <Column className="absolute bg-bluegray_901 justify-end lg:p-[42px] xl:p-[48px] 2xl:p-[54px] 3xl:p-[65px] p-[72px] top-[0] w-[100%]">
                <div className="bg-pink_900 lg:h-[36px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] h-[61px] lg:ml-[238px] xl:ml-[272px] 2xl:ml-[306px] 3xl:ml-[367px] ml-[404px] 2xl:mt-[103px] 3xl:mt-[123px] mt-[136px] lg:mt-[80px] xl:mt-[91px] rounded-radius6 w-[18%]"></div>
              </Column>
              <Column className="absolute bottom-[0] right-[11%] w-[41%]">
                <Text className="font-bold leading-[normal] 2xl:ml-[10px] 3xl:ml-[12px] ml-[14px] lg:ml-[8px] xl:ml-[9px] lg:mr-[53px] xl:mr-[61px] 2xl:mr-[68px] 3xl:mr-[82px] mr-[91px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-white_A700 w-[86%]">
                  Highlighting the importance of UI
                  <br />
                  education
                </Text>
                <Column className="xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] mt-[15px] lg:mt-[8px] w-[100%]">
                  <Text className="font-normal leading-[normal] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-gray_500 w-[100%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad mini
                  </Text>
                  <Text className="font-normal leading-[normal] ml-[1px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[22px] text-gray_500 w-[86%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et
                  </Text>
                </Column>
              </Column>
            </Stack>
          </Stack>
          <Row className="absolute bottom-[9%] items-center justify-between left-[2%] w-[41%]">
            <Column className="border-blue_900 border-bw5 border-solid xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px] rounded-radius18 w-[46%]">
              <Text className="font-bold leading-[normal] lg:ml-[15px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] ml-[27px] lg:mr-[53px] xl:mr-[60px] 2xl:mr-[68px] 3xl:mr-[81px] mr-[90px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-white_A700 w-[64%]">
                Highlighting the <br />
                importance of UI
                <br />
                education
              </Text>
              <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[151px] 3xl:h-[181px] h-[199px] lg:mb-[22px] xl:mb-[26px] 2xl:mb-[29px] 3xl:mb-[35px] mb-[39px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] ml-[17px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] w-[95%]">
                <Row className="absolute bg-blue_900 bottom-[0] items-center justify-center left-[3%] 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius6 w-[87%]">
                  <Text className="font-bold mb-[4px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] ml-[38px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-white_A700 w-[auto]">
                    our games
                  </Text>
                  <Img
                    src="images/img_arrow1.png"
                    className="lg:h-[2px] h-[3px] lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] ml-[26px] 3xl:mr-[10px] mr-[11px] lg:mr-[6px] xl:mr-[7px] 2xl:mr-[8px] w-[15%]"
                    alt="ArrowOne"
                  />
                </Row>
                <Text className="absolute font-normal leading-[normal] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[22px] text-gray_500 top-[0] w-[100%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </Text>
              </Stack>
            </Column>
            <Column className="border-bw5 border-pink_400 border-solid items-center 3xl:p-[11px] p-[13px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius18 w-[45%]">
              <Text className="font-bold leading-[normal] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px] mt-[22px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-white_A700 w-[65%]">
                Highlighting the <br />
                importance of UI
                <br />
                education
              </Text>
              <Text className="font-normal leading-[normal] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] mt-[20px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[22px] text-gray_500 w-[95%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </Text>
              <Row className="items-center justify-end lg:mb-[34px] xl:mb-[39px] 2xl:mb-[44px] 3xl:mb-[53px] mb-[59px] ml-[auto] w-[56%]">
                <Text className="font-bold lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px] text-white_A700 w-[auto]">
                  About us
                </Text>
                <Img
                  src="images/img_arrow1.png"
                  className="lg:h-[2px] h-[3px] lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] ml-[31px] w-[20%]"
                  alt="ArrowTwo"
                />
              </Row>
            </Column>
          </Row>
        </Stack>
        <Img
          src="images/img_vector1.png"
          className="absolute lg:h-[442px] xl:h-[505px] 2xl:h-[568px] 3xl:h-[682px] h-[749px] left-[0] top-[1%] w-[31%]"
          alt="VectorOne"
        />
        <Img
          src="images/img_vector2.png"
          className="absolute bottom-[0] lg:h-[457px] xl:h-[522px] 2xl:h-[587px] 3xl:h-[704px] h-[774px] right-[0] w-[35%]"
          alt="VectorTwo"
        />
      </Stack>
    </>
  );
};

export default DesktopOnePage;
