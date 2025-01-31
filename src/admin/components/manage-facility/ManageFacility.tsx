import CourtManagement from "../court-management/CourtManagement";
import { useState } from "react";
import { Facility } from "../../../interfaces/Facility";
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControlLabel,
} from "@mui/material";
import { InputLabel, FormControl, Switch, Alert } from "@mui/material";
import { Clock } from "lucide-react";
import { Avatar } from "@mui/material";
import CourtServices from "../court-services/CourtServices";
import PhotographGallery from "../photograph-gallery/PhotographGallery";

const ManageFacility = () => {
  const [activeTab, setActiveTab] = useState("genel");

  const tabs = [
    { id: "genel", label: "Genel Bilgiler" },
    { id: "sahalar", label: "Saha Yönetimi" },
    { id: "ozellikler", label: "Tesis Özellikleri" },
    { id: "galeri", label: "Fotoğraf Galerisi" },
  ];

  const cities = ["İstanbul", "Ankara", "İzmir", "Bursa"];
  const districts = {
    İstanbul: ["Kadıköy", "Beşiktaş", "Şişli", "Üsküdar"],
    Ankara: ["Çankaya", "Keçiören", "Mamak", "Yenimahalle"],
  };
  const initialState: Facility = {
    id: "1",
    name: "Sunset Sports Center",
    fullAddress: "123 Sunset Blvd, 3rd Floor",
    city: "Istanbul",
    district: "Kadıköy",
    phoneNumber: "+90 555 123 4567",
    courts: [],
    amenities: ["Wi-Fi", "Parking", "Cafeteria", "Locker Rooms"],
    location: "https://www.google.com/maps",
    openTime: 8,
    rating: "4.5",
    closeTime: 22,
    lowerPriceLimit: 50,
    upperPriceLimit: 150,
    contactDetails: "Asım Şekip Kayayı Arayın",
    reviewCount: 25,
    description:
      "A modern sports facility offering a variety of courts and amenities.",
    isActive: true,
    imageUrls: ["image1.jpg", "image2.jpg", "image3.jpg"],
  };
  const [formData, setFormData] = useState(initialState);
  const [isEdited, setIsEdited] = useState(false);

  const handleChange = (field: keyof Facility, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setIsEdited(true);
  };

  const handleReset = () => {
    setFormData(initialState);
    setIsEdited(false);
  };

  return (
    <Box minHeight="100vh" bgcolor="#f9fafb" p={4}>
      <Box maxWidth="lg" mx="auto">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Typography variant="h4" fontWeight="bold">
            Tesis Yönetimi
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar alt="Kullanıcı Adı" src="/kullanici-fotografi.jpg" />
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "text.primary",
              }}
            >
              Ahmet Kömüş
            </Typography>
          </Box>
        </Box>

        {/* Tab Menüsü */}
        <Box
          display="flex"
          gap={1}
          mb={4}
          bgcolor="white"
          borderRadius={2}
          p={1}
          boxShadow={1}
        >
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "contained" : "text"}
              color={activeTab === tab.id ? "success" : "inherit"}
              sx={{
                flex: 1,
                textTransform: "none",
              }}
            >
              {tab.label}
            </Button>
          ))}
        </Box>

        {/* Genel Bilgiler */}
        {activeTab === "genel" && (
          <Box sx={{ p: 4, spaceY: 4 }}>
            <Card
              sx={{
                p: 6,
                background:
                  "linear-gradient(to bottom right, #ebf8ff, #f5f5f5)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 6,
                }}
              >
                <Box>
                  <Typography variant="h6">Tesis Bilgileri</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lütfen tesis detaylarını doldurunuz
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography variant="body2">Tesis Durumu</Typography>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={formData.isActive}
                        onChange={(e) =>
                          handleChange("isActive", e.target.checked)
                        }
                        sx={{
                          "& .MuiSwitch-thumb": {
                            backgroundColor: formData.isActive
                              ? "green"
                              : "gray",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          color: formData.isActive ? "green" : "gray",
                          fontWeight: "bold",
                        }}
                      >
                        {formData.isActive ? "Aktif" : "Pasif"}
                      </Typography>
                    }
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 6,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <TextField
                    label="Tesis Adı"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    fullWidth
                    placeholder="Tesis adını giriniz"
                  />
                  <TextField
                    label="Adres"
                    value={formData.fullAddress}
                    onChange={(e) =>
                      handleChange("fullAddress", e.target.value)
                    }
                    fullWidth
                    placeholder="Detaylı adres bilgisi"
                    multiline
                    rows={3}
                  />
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 4,
                    }}
                  >
                    <FormControl fullWidth>
                      <InputLabel>İl</InputLabel>
                      <Select
                        value={formData.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                      >
                        {cities.map((city) => (
                          <MenuItem key={city} value={city}>
                            {city}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel>İlçe</InputLabel>
                      <Select
                        value={formData.district}
                        onChange={(e) =>
                          handleChange("district", e.target.value)
                        }
                        disabled={!formData.city}
                      >
                        {formData.city &&
                          (
                            districts[
                              formData.city as keyof typeof districts
                            ] ?? []
                          ).map((district) => (
                            <MenuItem key={district} value={district}>
                              {district}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <TextField
                    label="İletişim Numarası"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleChange("phoneNumber", e.target.value)
                    }
                    fullWidth
                    placeholder="0532 XXX XX XX"
                  />
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 4,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Clock style={{ width: 16, height: 16 }} />
                        Açılış Saati
                      </Typography>
                      <Select
                        value={formData.openTime}
                        /* onChange={(e) =>
                          handleChange("openTime", e.target.value)
                        } */
                        fullWidth
                      >
                        {Array.from({ length: 24 }).map((_, i) => (
                          <MenuItem
                            key={i}
                            value={i.toString().padStart(2, "0")}
                          >
                            {`${i.toString().padStart(2, "0")}:00`}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Clock style={{ width: 16, height: 16 }} />
                        Kapanış Saati
                      </Typography>
                      <Select
                        value={formData.closeTime}
                        /* onChange={(e) =>
                          handleChange("closeTime", e.target.value)
                        } */
                        fullWidth
                      >
                        {Array.from({ length: 24 }).map((_, i) => (
                          <MenuItem
                            key={i}
                            value={i.toString().padStart(2, "0")}
                          >
                            {`${i.toString().padStart(2, "0")}:00`}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Box>
                  <TextField
                    label="Tesis Açıklaması"
                    value={formData.description}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                    fullWidth
                    placeholder="Tesis hakkında kısa açıklama"
                    multiline
                    rows={3}
                  />
                </Box>
              </Box>

              {isEdited && (
                <Box
                  sx={{ mt: 6, display: "flex", justifyContent: "end", gap: 4 }}
                >
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleReset}
                  >
                    Değişiklikleri İptal Et
                  </Button>
                  <Button variant="contained" color="primary">
                    Kaydet
                  </Button>
                </Box>
              )}

              {formData.isActive === false && (
                <Alert severity="error" sx={{ mt: 4 }}>
                  Tesis şu anda pasif durumda. Aktif hale getirmek için
                  yukarıdaki düğmeyi kullanabilirsiniz.
                </Alert>
              )}
            </Card>
          </Box>
        )}

        {/* Saha Yönetimi */}
        {activeTab === "sahalar" && <CourtManagement />}

        {/* Tesis Özellikleri */}
        {activeTab === "ozellikler" && <CourtServices />}

        {/* Fotoğraf Galerisi */}
        {activeTab === "galeri" && <PhotographGallery />}
      </Box>
    </Box>
  );
};

export default ManageFacility;
