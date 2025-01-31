import { Box, Typography } from "@mui/material";
import { useState } from "react";
import MyProfile from "src/secured-user/components/my/MyProfile";
import MyReservations from "src/secured-user/components/my/MyReservations";
import MyFavorites from "src/secured-user/components/my/MyFavorites";
import MyComments from "src/secured-user/components/my/MyComments";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profil");

  // Tıklama handler'ı
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case "profil":
        return <MyProfile />;
      case "rezervasyonlar":
        return <MyReservations />;
      case "degerlendirmeler":
        return <MyComments />;
      case "favoriler":
        return <MyFavorites />;
    }
  };

  return (
    <div
      style={{
        paddingTop: "8rem",
        display: "flex",
        justifyContent: "center",
        width: "100vw"
      }}
    >
      <Box sx={{ 
        width: "100%",
        maxWidth: "1400px",
        paddingX: "2rem",
        paddingBottom: "8rem" 
      }}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#D9F3EABA",
            padding: "1rem",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "1rem",
          }}
        >
          <Typography
            variant="h6"
            onClick={() => handleTabClick("profil")}
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              fontFamily: "Barlow",
              color: activeTab === "profil" ? "#2E7D32" : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Profil Düzenle
          </Typography>
          <Typography
            variant="h6"
            onClick={() => handleTabClick("rezervasyonlar")}
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              fontFamily: "Barlow",
              color: activeTab === "rezervasyonlar" ? "#2E7D32" : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Rezervasyonlarım
          </Typography>
          <Typography
            variant="h6"
            onClick={() => handleTabClick("degerlendirmeler")}
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              fontFamily: "Barlow",
              color: activeTab === "degerlendirmeler" ? "#2E7D32" : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Değerlendirmelerim
          </Typography>
          <Typography
            variant="h6"
            onClick={() => handleTabClick("favoriler")}
            sx={{
              fontSize: "1.1rem",
              fontWeight: 500,
              fontFamily: "Barlow",
              color: activeTab === "favoriler" ? "#2E7D32" : "#000000",
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#2E7D32",
              },
            }}
          >
            Favorilerim
          </Typography>
        </Box>

        {renderComponent()}
      </Box>
    </div>
  );
};

export default Profile;
