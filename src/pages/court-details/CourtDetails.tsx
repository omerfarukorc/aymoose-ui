import { useEffect, useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import "@/pages/court-details/CourtDetails.css";
import stars from "src/assets/images/CourtDetails/stars.png";
import locationSymbol from "src/assets/images/CourtDetails/locationSymbol.png";
import cafe from "src/assets/images/CourtDetails/cafe.png";
import market from "src/assets/images/CourtDetails/market.png";
import otopark from "src/assets/images/CourtDetails/otopark.png";
import pool from "src/assets/images/CourtDetails/pool.png";
import wifi from "src/assets/images/CourtDetails/wifi.png";
import wind from "src/assets/images/CourtDetails/wind.png";
import court1 from "src/assets/images/CourtDetails/court1.png";
import court2 from "src/assets/images/CourtDetails/court2.png";
import court3 from "src/assets/images/CourtDetails/court3.png";
import bag from "src/assets/images/CourtDetails/bag.png";
import like from "src/assets/images/CourtDetails/like.png";
import ball from "src/assets/images/CourtDetails/ball.png";
import court4 from "src/assets/images/CourtDetails/court4.png";
import Map from "src/assets/images/CourtDetails/Map.png";
import { Review } from "@/interfaces/Review";
import axios from "axios";
import Reservation from "@/components/reservation/Reservation";
import { TimeSlotStatus } from "@/interfaces/TimeSlot";
import { useCustomTheme } from "@/themes/Theme";
import { getFormattedDate } from "@/services/TimeServices";
import { useParams } from "react-router-dom";
import { Facility } from "@/interfaces/Facility";

const CourtDetails: React.FC = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [facility, setFacility] = useState<Facility | null>();
  const theme = useCustomTheme();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlotStatus[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchFacility = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: apiUrl + "/api/v1/facilities/" + uuid,
        });
        // Handle the response here
        console.log(response.data);
        setFacility(response.data);
      } catch (error) {
        // Handle any errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchFacility();
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: apiUrl + "/api/v1/reviews",
        });
        // Handle the response here
        console.log(response.data);
        setReviews(response.data);
      } catch (error) {
        // Handle any errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const currentDate = getFormattedDate();
    const fetchTimeSlots = async () => {
      try {
        const response = await axios({
          method: "GET",
          url:
            apiUrl +
            "/api/v1/reservations/slots/0ad878f5-4b8d-4bd9-ad50-da48af70032c/" +
            currentDate,
        });
        // Handle the response here
        console.log(response.data["timeSlots"]);
        setTimeSlots(response.data["timeSlots"]);
      } catch (error) {
        // Handle any errors here
        console.error("Error fetching data:", error);
      }
    };
    fetchTimeSlots();
  }, []);

  return (
    <Box
      sx={{
        marginTop: "4.3rem",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(to right,rgb(255, 255, 255),rgb(241, 241, 241))",
      }}
    >
      <Box
        sx={{
          width: { xl: "70%", lg: "80%", sm: "80%", xs: "90%" },
          maxWidth: { xl: "70%", lg: "80%", sm: "80%", xs: "90%" },
          marginTop: { xl: "3rem", lg: "2rem" },
          gap: { xl: "2rem", lg: "1.5rem", xs: "1rem" },
          display: "flex",
          flexDirection: { xl: "row", sm: "row" },
        }}
      >
        {facility ? (
          <>
            <Box
              sx={{
                display: "flex",

                flexDirection: { md: "column", xs: "column" },
                gap: "1rem",
                width: { xl: "100%", lg: "100%", sm: "100%" },
              }}
            >
              {/* Sol Box */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* İlk İçerik Kutusu */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1rem",
                    height: { xl: "10rem", lg: "9rem", md: "8rem", sm: "7rem" },
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "1.5rem",
                      color: "#1A1A1A",
                      fontWeight: "600",
                      wordWrap: "break-word",
                      whiteSpace: "normal",
                      overflowWrap: "break-word",
                    }}
                  >
                    Aymoose Halısaha
                  </Box>

                  {/* Yıldız ve İnceleme */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={stars}
                      alt="stars"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        color: "#4F4F4F",
                        fontWeight: "300",
                        fontFamily: "Poppins",
                      }}
                    >
                      4.5 (1200 Reviews)
                    </Box>
                  </Box>

                  {/* Konum */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={locationSymbol}
                      alt="location"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        color: "#333333",
                        fontWeight: "400",
                        marginLeft: "0.7rem",
                        fontFamily: "Poppins",
                      }}
                    >
                      1234 Example Street, City
                    </Box>
                  </Box>
                </Box>

                {/* Halısahamız Hakkında Box */}
                <Box
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    padding: { xl: "2rem", lg: "1rem", sm: "1rem" },
                    backgroundColor: "#FFFFFF",
                    marginTop: 0,
                    width: "100%",
                  }}
                >
                  {/* Halısahamız Hakkında Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "500",
                      fontFamily: "Poppins",
                      fontSize: { xl: "1.2rem", lg: "1.2rem", sm: "1rem" },
                      color: "#1A1A1A",
                    }}
                  >
                    Halısahamız Hakkında
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "#333333",
                      fontFamily: "Poppins",
                      marginTop: { xl: "2rem", xs: "1rem" },
                      fontSize: { xl: "0.9rem", lg: "0.8rem", xs: "0.7rem" },
                    }}
                  >
                    Tesisimiz Mustafa Kemal Paşa metrobüs durağının yanında
                    bulunmaktadır. Detaylı konum bilgisine sayfanın en altındaki
                    "Konum" bölümünden ulaşabilirsiniz.
                    <br />
                    <br />
                    Rezervasyon yapmak için sayfanın en üst kısmındaki
                    "Rezervasyon Yap" bölümünden istediğiniz tarih ve saati
                    seçip rezervasyon oluşturabilirsiniz. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry.
                    <br />
                    <br />
                    Lorem Ipsum has been the industry's standard dummy text.
                  </Typography>

                  {/* Tesis Özellikleri */}
                  <Box
                    sx={{
                      borderTop: "1px solid #E0E0E0",
                      paddingTop: "1.5rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "500",
                        fontFamily: "Poppins",
                        fontSize: { xl: "1.2rem", lg: "1.2rem", sm: "1rem" },
                        color: "#1A1A1A",

                        marginBottom: "1rem",
                      }}
                    >
                      Tesis Özellikleri
                    </Typography>

                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr 1fr",
                          sm: "1fr 1fr 1fr 1fr",
                        },
                        gap: "1rem",
                        color: "#4F4F4F",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "0.75rem",
                        }}
                      >
                        <img
                          src={wifi}
                          alt="wifi"
                          style={{
                            width: "auto",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography variant="body2">Free Wifi</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "0.75rem",
                        }}
                      >
                        <img
                          src={wind}
                          alt="wind"
                          style={{
                            width: "auto",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography variant="body2">Duş</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "0.75rem",
                        }}
                      >
                        <img
                          src={otopark}
                          alt="otopark"
                          style={{
                            width: "auto",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography variant="body2">Park Alanı</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "0.75rem",
                        }}
                      >
                        <img
                          src={market}
                          alt="market"
                          style={{
                            width: "auto",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography variant="body2">Dükkan</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "0.75rem",
                        }}
                      >
                        <img
                          src={pool}
                          alt="pool"
                          style={{
                            width: "auto",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography variant="body2">Yüzme Sahası</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "0.75rem",
                        }}
                      >
                        <img
                          src={cafe}
                          alt="cafe"
                          style={{
                            width: "auto",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                        <Typography variant="body2">Kafe</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                <Box
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                    marginTop: "2rem",
                    minHeight: "300px",
                    width: "32%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <img
                    src={court1}
                    alt="court1"
                    style={{
                      width: "100%",
                      height: "50%",
                      objectFit: "cover",
                      borderRadius: "8px",
                      paddingBottom: "1rem",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      colo: "#1A1A1A",
                      paddingLeft: "1rem",
                    }}
                  >
                    Saha 1
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.75rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <img
                      src={bag}
                      alt="bag"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        fontFamily: "Inter",
                        color: "#4F4F4F",
                      }}
                      variant="body2"
                    >
                      6+6
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.75rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <img
                      src={ball}
                      alt="ball"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        fontFamily: "Inter",
                        color: "#4F4F4F",
                      }}
                      variant="body2"
                    >
                      25 x 40 metre
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.75rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <img
                      src={like}
                      alt="like"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        fontFamily: "Inter",
                        color: "#4F4F4F",
                      }}
                      variant="body2"
                    >
                      2500 TL/Saat
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                    marginTop: "2rem",
                    minHeight: "300px",
                    width: "32%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <img
                    src={court2}
                    alt="court2"
                    style={{
                      width: "100%",
                      height: "50%",
                      objectFit: "cover",
                      borderRadius: "8px",
                      paddingBottom: "1rem",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      colo: "#1A1A1A",
                      paddingLeft: "1rem",
                    }}
                  >
                    Saha 2
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.75rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <img
                      src={bag}
                      alt="bag"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        fontFamily: "Inter",
                        color: "#4F4F4F",
                      }}
                      variant="body2"
                    >
                      7+7
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.75rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <img
                      src={ball}
                      alt="ball"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        fontFamily: "Inter",
                        color: "#4F4F4F",
                      }}
                      variant="body2"
                    >
                      30 x 50 metre
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.75rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <img
                      src={like}
                      alt="like"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        fontFamily: "Inter",
                        color: "#4F4F4F",
                      }}
                      variant="body2"
                    >
                      4000 TL/Saat
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    border: "1px solid #E0E0E0",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                    marginTop: "2rem",
                    minHeight: "300px",
                    width: "32%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <img
                    src={court3}
                    alt="court3"
                    style={{
                      width: "100%",
                      height: "50%",
                      objectFit: "cover",
                      borderRadius: "8px",
                      paddingBottom: "1rem",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: "500",
                      fontFamily: "Inter",
                      colo: "#1A1A1A",
                      paddingLeft: "1rem",
                    }}
                  >
                    Saha 3
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.75rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <img
                      src={bag}
                      alt="bag"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        fontFamily: "Inter",
                        color: "#4F4F4F",
                      }}
                      variant="body2"
                    >
                      7+7
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.75rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <img
                      src={ball}
                      alt="ball"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        fontFamily: "Inter",
                        color: "#4F4F4F",
                      }}
                      variant="body2"
                    >
                      30 x 50 metre
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.75rem",
                      paddingLeft: "1rem",
                    }}
                  >
                    <img
                      src={like}
                      alt="like"
                      style={{
                        width: "auto",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: "400",
                        fontFamily: "Inter",
                        color: "#4F4F4F",
                      }}
                      variant="body2"
                    >
                      4000 TL/Saat
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  border: "1px solid #E0E0E0",
                  borderRadius: "8px",
                  padding: "2rem",
                  backgroundColor: "#FFFFFF",
                  marginTop: "2rem",
                  minHeight: "300px",
                  marginBottom: "8rem",
                }}
              >
                {reviews.map((review, index) => (
                  <Box
                    key={index}
                    sx={{
                      borderBottom:
                        index < reviews.length - 1
                          ? "1px solid #E0E0E0"
                          : "none",
                      paddingY: "1rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <Box
                        sx={{
                          fontWeight: "600",
                          fontSize: "1rem",
                          fontFamily: "Roboto",
                          color: "#000000",
                        }}
                      >
                        {review.author}
                      </Box>
                      <Box
                        sx={{
                          fontWeight: "300",
                          fontSize: "1rem",
                          fontFamily: "Roboto",
                          color: "#000000",
                        }}
                      >
                        {review.createdAt}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        fontWeight: "300",
                        fontSize: "1rem",
                        fontFamily: "Roboto",
                        color: "#000000",
                      }}
                    >
                      {review.content}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Sağ Box  COLUMN*/}
            <Box
              sx={{
                display: "flex",
                marginTop: { xl: "10rem", lg: "8rem", sm: "7rem" },
                flexDirection: "column",
                width: { xs: "100%", sm: "40%" },
              }}
            >
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "0.5rem",
                  paddingLeft: "0",
                  fontFamily: "Poppins",
                  color: theme.palette.tx.primary.w500,
                  fontSize: { xl: "0.9rem", xs: "0.8rem" },
                }}
              >
                Tüm Görselleri İncele <Box>&rarr;</Box>
              </Button>
              <Divider sx={{ borderColor: "rgb(240,240,240) !important" }} />
              <Box sx={{ marginBottom: "1rem" }}>
                <img
                  src={court4}
                  alt="court4"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    marginTop: "0.3rem",
                    borderRadius: "0.5rem",
                  }}
                />
              </Box>

              {/* <Box
            sx={{
              marginBottom: "2rem",
              width: "100%",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              "& .MuiPaper-root": {
                backgroundColor: "#FFFFFF",
                boxShadow: "none",
                width: "100%",
              },
              "& .MuiPickersLayout-root": {
                backgroundColor: "#FFFFFF",
                width: "100%",
              },

              "& .MuiTypography-root": {
                fontSize: "1.1rem",
              },
              "& .MuiDayCalendar-weekDayLabel": {
                fontSize: "1rem",
                margin: "4px 0",
              },
              "& .MuiPickersDay-root": {
                fontSize: "1.1rem",
                margin: "8px 2px",
                height: "40px",
                width: "40px",
              },
              "& .MuiDayCalendar-header": {
                marginBottom: "8px",
              },
              "& .MuiPickersCalendarHeader-label": {
                fontSize: "1.4rem",
              },
              "& .MuiPickersDay-today": {
                fontSize: "1.1rem",
              },
              "& .MuiDatePickerToolbar-title": {
                fontSize: "2rem",
              },
              "& .MuiTypography-overline": {
                fontSize: "1rem",
              },

              "& .MuiDayCalendar-monthContainer": {
                rowGap: "8px",
              },
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker defaultValue={dayjs("2024-04-02")} />
            </LocalizationProvider>
          </Box> */}

              <Reservation slots={timeSlots} />

              <Box sx={{ marginTop: { xl: "2rem", xs: "1rem" } }}>
                <img
                  src={Map}
                  alt="court4"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Box>
          </>
        ) : (
          <Box></Box>
        )}
      </Box>
    </Box>
  );
};

export default CourtDetails;
