import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FalaFew from "../assets/A1FC69FC-98F1-4068-853E-5BD0D0B62BFD (1).jpg";
import AboutMePhoto from "../assets/WDJ_0442.jpg";
import AboutMePhoto1 from "../assets/OHM00246_Original.jpg";
import AboutMePhoto2 from "../assets/IMG_1635.jpg";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
function Profile() {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        minHeight: "100vh",
      }}
    >
      {/* AppBar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#000000", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            CHATTANON AMPRASORT
          </Typography>
          <Button
            color="inherit"
            sx={{
              mx: 1,
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Work
          </Button>
          <Button
            color="inherit"
            sx={{
              mx: 1,
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            sx={{
              mx: 1,
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      {/* Main Content Area */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 8, lg: 16 },
          py: { xs: 4, md: 8 },
          mt: { xs: 4, md: 8 },
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            mb: { xs: 4, md: 0 },
            textAlign: { xs: "center", md: "left" },
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
            }}
          >
            Hi, I'm
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "3rem", md: "4rem", lg: "5rem" },
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Chattanon A.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#AAAAAA",
              mt: 2,
              mb: 4,
              maxWidth: "600px",
            }}
          >
            นักพัฒนาและนักออกแบบเว็บที่พร้อมสร้างความสวยงามและการเรียนรู้สิ่งใหม่ๆ
          </Typography>

          {/* Contact Button and Social Icons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#c9e265",
                color: "#000000",
                fontWeight: "bold",
                borderRadius: "50px",
                px: 3,
                py: 2,
                "&:hover": {
                  backgroundColor: "#d9f568",
                },
              }}
            >
              CONTACT ME
              <Box
                component="span"
                sx={{
                  ml: 1,
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                }}
              />
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222222",
                borderRadius: "50%",
                width: 50,
                height: 50,
                "&:hover": {
                  backgroundColor: "#333333",
                  cursor: "pointer",
                },
              }}
            >
              <LinkedInIcon sx={{ color: "#FFF" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222222",
                borderRadius: "50%",
                width: 50,
                height: 50,
                "&:hover": {
                  backgroundColor: "#333333",
                  cursor: "pointer",
                },
              }}
            >
              <GitHubIcon sx={{ color: "#FFF" }} />
            </Box>
          </Box>
        </Box>

        {/* Avatar */}
        <Box
          component="img"
          src={FalaFew}
          alt="Chattanon Amprasort"
          sx={{
            width: { xs: "220px", sm: "400px", md: "400px", lg: "400px" },
            height: "auto",
            borderRadius: "15%",
            order: { xs: 1, md: 2 },
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            border: "4px solid rgba(255,255,255,0.1)",
          }}
        />
      </Box>
      <Divider sx={{ backgroundColor: "#444", my: 3 }} />
      {/* About Me Section - Modified to center content */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 16 },
          py: { xs: 6, md: 10 },
          mt: { xs: 8, md: 12 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            textAlign: "center",
          }}
        >
          ABOUT ME
        </Typography>

        {/* About Me Text Content - Centered */}
        <Box
          sx={{
            maxWidth: "800px",
            textAlign: "center",
            mb: { xs: 5, md: 8 },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#FFFFFF",
              mb: 3,
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.7,
            }}
          >
            ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนท์เอนด์ที่จบใหม่แต่เต็มไปด้วยไฟแรงกล้าที่จะสร้างสรรค์ผลงานอันน่าทึ่ง
            และกำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงานที่พื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#AAAAAA",
              mb: 4,
              fontSize: { xs: "0.9rem", md: "1rem" },
              lineHeight: 1.6,
            }}
          >
            เพื่อพัฒนาเว็บไซต์ที่ทุกคนสามารถใช้งานและเข้าถึงได้
            และองค์กันที่มุ่งเน้นการปฏิบัติงานด้วยประบวนการที่ยั่งยืนจะเป็นที่สนใจใน
            React.js และการออกแบบนวัตกรรมใหม่ๆ
            ที่ช่วยเพิ่มความสะดวกสบายในการใช้งานส่วนตัวผมเวลาว่างจะชอบหาข้อมูลและความรู้ใหม่เพราะว่าการพบเจอความรู้ใหม่มันคือความท้าทายที่จะพัฒนาตนเอง
          </Typography>

          {/* Download Resume Button and Social Icons - Centered */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#c9e265",
                color: "#000000",
                fontWeight: "bold",
                borderRadius: "50px",
                px: 3,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#d9f568",
                },
              }}
            >
              DOWNLOAD RESUME
              <Box
                component="span"
                sx={{
                  ml: 1,
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                }}
              />
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222222",
                borderRadius: "50%",
                width: 45,
                height: 45,
                "&:hover": {
                  backgroundColor: "#333333",
                  cursor: "pointer",
                },
              }}
            >
              <LinkedInIcon sx={{ color: "#FFF" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#222222",
                borderRadius: "50%",
                width: 45,
                height: 45,
                "&:hover": {
                  backgroundColor: "#333333",
                  cursor: "pointer",
                },
              }}
            >
              <GitHubIcon sx={{ color: "#FFF" }} />
            </Box>
          </Box>
        </Box>

        {/* About Me Image - Below text */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: { xs: 3, md: 1 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: { xs: 3, md: 5 },
            }}
          >
            <Box
              component="img"
              src={AboutMePhoto}
              alt="About Chattanon"
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "350px",
                  sm: "500px",
                  md: "650px",
                  lg: "250px",
                },
                height: "auto",
                borderRadius: "15px",
                border: "4px solid rgba(255,255,255,0.1)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: { xs: 3, md: 5 },
            }}
          >
            <Box
              component="img"
              src={AboutMePhoto1}
              alt="About Chattanon"
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "350px",
                  sm: "500px",
                  md: "650px",
                  lg: "250px",
                },
                height: "auto",
                borderRadius: "15px",
                border: "4px solid rgba(255,255,255,0.1)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: { xs: 3, md: 5 },
            }}
          >
            <Box
              component="img"
              src={AboutMePhoto2}
              alt="About Chattanon"
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "350px",
                  sm: "500px",
                  md: "650px",
                  lg: "250px",
                },
                height: "auto",
                borderRadius: "15px",
                border: "4px solid rgba(255,255,255,0.1)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "#444", my: 3 }} />

      {/* Capabilities Section */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 16 },
          py: { xs: 6, md: 10 },
          mt: { xs: 2, md: 4 },
        }}
      >
        {/* Section Title and Description in a flex container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-start" },
            mb: 4,
            mx: { xs: 2, sm: 4, md: 8, lg: 20 },
          }}
        >
          {/* Left side - Title */}
          <Typography
            variant="h4"
            sx={{
              color: "#FFF",
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "bold",
              mb: { xs: 2, md: 0 },
              flexBasis: { md: "40%" },
            }}
          >
            MY CAPABILITIES
          </Typography>

          {/* Right side - Description */}
          <Typography
            variant="body1"
            sx={{
              color: "#AAAAAA",
              fontSize: { xs: "0.9rem", md: "1rem" },
              textAlign: { xs: "left", md: "left" },
              lineHeight: 1.6,
              flexBasis: { md: "55%" },
            }}
          >
            ความสามารถการในใช้เทคโนโลยีในขั้นพื้นฐานที่พัฒนาหาความรู้ใหม่เสมอ
            สร้างและเข้าร่วมสังคมของผู้พัฒนาเพื่อเพิ่มเติมความรู้
          </Typography>
        </Box>

        {/* Container for all skills, aligned to the right */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            mx: { xs: 2, sm: 4, md: 8, lg: 20 },
          }}
        >
          {/* Skills Tags - First Row */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: 2,
              mb: 2,
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#111111",
                color: "#FFFFFF",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                minWidth: "120px",
                "&:hover": {
                  backgroundColor: "#222222",
                },
              }}
            >
              HTML
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#111111",
                color: "#FFFFFF",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                minWidth: "120px",
                "&:hover": {
                  backgroundColor: "#222222",
                },
              }}
            >
              CSS
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#111111",
                color: "#FFFFFF",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                minWidth: "120px",
                "&:hover": {
                  backgroundColor: "#222222",
                },
              }}
            >
              JAVASCRIPT
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#111111",
                color: "#FFFFFF",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                minWidth: "120px",
                "&:hover": {
                  backgroundColor: "#222222",
                },
              }}
            >
              DART
            </Button>
          </Box>

          {/* Skills Tags - Second Row */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", md: "flex-end" },
              gap: 2,
              width: { xs: "100%", md: "auto" },
            }}
          >
             <Button
              variant="contained"
              sx={{
                backgroundColor: "#111111",
                color: "#FFFFFF",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                minWidth: "120px",
                "&:hover": {
                  backgroundColor: "#222222",
                },
              }}
            >
              PYTHON
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#111111",
                color: "#FFFFFF",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                minWidth: "120px",
                "&:hover": {
                  backgroundColor: "#222222",
                },
              }}
            >
              IoT
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#111111",
                color: "#FFFFFF",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                minWidth: "120px",
                "&:hover": {
                  backgroundColor: "#222222",
                },
              }}
            >
              REACT
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#111111",
                color: "#FFFFFF",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                minWidth: "120px",
                "&:hover": {
                  backgroundColor: "#222222",
                },
              }}
            >
              DATABASE
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "#444", my: 3 }} />

      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 16 },
          py: { xs: 6, md: 10 },
          mt: { xs: 2, md: 4 },
        }}
      >
        {/* Section Title and Description in a flex container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-start" },
            mb: 4,
            mx: { xs: 2, sm: 4, md: 8, lg: 20 },
          }}
        >
          {/* Left side - Title */}
          <Typography
            variant="h4"
            sx={{
              color: "#FFF",
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: "bold",
              mb: { xs: 2, md: 0 },
              flexBasis: { md: "40%" },
              textTransform: "uppercase",
            }}
          >
            My Experience
          </Typography>

          {/* Right side - Experience Info - MODIFIED HERE */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              mb: 4,
              mx: { xs: 2, sm: 4, md: 8, lg: 20 },
            }}
          >
            {/* Job Title and Date on same line */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "flex-end" },
                mb: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#ffffff",
                  fontSize: { xs: "1rem", md: "1rem" },
                  textAlign: { xs: "left", md: "left" },
                  lineHeight: 1.6,
                  mr: 3,
                }}
              >
                Apprentice Computer Technical Officer
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#aaaaaa",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  textAlign: { xs: "left", md: "right" },
                  lineHeight: 1.6,
                }}
              >
                June 2024
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: "#AAAAAA",
                fontSize: { xs: "0.9rem", md: "1rem" },
                textAlign: { xs: "left", md: "left" },
                lineHeight: 1.6,
                flexBasis: { md: "55%" },
              }}
            >
              ฝึกงานในส่วนของผู้ดูแลระบบคอมพิมเตอร์ให้กับหน่วยงานรัฐแห่งหนึ่งและมีการเขียนเว็บเลือกตั้งพร้อมทั้งพัฒนาทั้งระบบ
              Backend และ Frontend
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "#444", my: 4 }} />
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 16 },
          py: { xs: 6, md: 10 },
          mt: { xs: 2, md: 4 },
          backgroundColor: "#000000",
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: "white",
            fontWeight: "bold",
            mb: { xs: 4, md: 6 },
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            textAlign: "center",
          }}
        >
          LET'S CONNECT
        </Typography>

        {/* Contact Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            maxWidth: "1200px",
            mx: "auto",
            gap: 6,
          }}
        >
          {/* Left Side - Contact Information */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                mb: 2,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Say hello at{" "}
              <Box
                component="a"
                href="mailto:chanintornc@sau.ac.th"
                sx={{
                  color: "#c9e265",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                s641941039@sau.ac.th
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                mb: 4,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              For more info, here's my{" "}
              <Box
                component="a"
                href="#"
                sx={{
                  color: "#c9e265",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                resume
              </Box>
            </Typography>

            {/* Social Media Icons */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                mb: 5,
              }}
            >
              {/* LinkedIn Icon */}
              <Box
                component="a"
                href="#"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "rgba(201, 226, 101, 0.1)",
                  color: "#c9e265",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(201, 226, 101, 0.2)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <LinkedInIcon />
              </Box>

              {/* GitHub Icon */}
              <Box
                component="a"
                href="#"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "rgba(201, 226, 101, 0.1)",
                  color: "#c9e265",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(201, 226, 101, 0.2)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <GitHubIcon />
              </Box>

              {/* Twitter/X Icon (Use a Twitter icon here) */}
              <Box
                component="a"
                href="#"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "rgba(201, 226, 101, 0.1)",
                  color: "#c9e265",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(201, 226, 101, 0.2)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <XIcon />
              </Box>

              {/* Instagram Icon (Use an Instagram icon here) */}
              <Box
                component="a"
                href="#"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "rgba(201, 226, 101, 0.1)",
                  color: "#c9e265",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(201, 226, 101, 0.2)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <InstagramIcon />
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: "#777777",
                mt: "auto",
                pt: 4,
              }}
            >
              © 2025 Chattanon Amprasort
            </Typography>
          </Box>

          {/* Right Side - Contact Form */}
          <Box
            component="form"
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Name Input */}
            <TextField
              fullWidth
              label="Name"
              variant="filled"
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "#111111",
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "#222222",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#222222",
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#777777",
                },
                "& .MuiInputBase-input": {
                  color: "#FFFFFF",
                },
              }}
            />

            {/* Email Input */}
            <TextField
              fullWidth
              label="Email"
              variant="filled"
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "#111111",
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "#222222",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#222222",
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#777777",
                },
                "& .MuiInputBase-input": {
                  color: "#FFFFFF",
                },
              }}
            />

            {/* Subject Input */}
            <TextField
              fullWidth
              label="Subject"
              variant="filled"
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "#111111",
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "#222222",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#222222",
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#777777",
                },
                "& .MuiInputBase-input": {
                  color: "#FFFFFF",
                },
              }}
            />

            {/* Message Input */}
            <TextField
              fullWidth
              label="Message"
              variant="filled"
              multiline
              rows={6}
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "#111111",
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "#222222",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#222222",
                  },
                },
                "& .MuiFormLabel-root": {
                  color: "#777777",
                },
                "& .MuiInputBase-input": {
                  color: "#FFFFFF",
                },
              }}
            />

            {/* Submit Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#c9e265",
                color: "#000000",
                fontWeight: "bold",
                py: 1.5,
                width: "20%",
                alignSelf: "self-start",
                borderRadius: "50px",
                "&:hover": {
                  backgroundColor: "#d9f568",
                },
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
