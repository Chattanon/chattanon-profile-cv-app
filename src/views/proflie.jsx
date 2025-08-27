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
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import ScrollToTop from "./ScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";
function Profile() {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        minHeight: "100vh",
      }}
    >
      <ScrollToTop />
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
            onClick={() => {
              document.getElementById("capabilities").scrollIntoView({
                top: 0,
                behavior: "smooth",
              });
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
            onClick={() => {
              document.getElementById("about-me").scrollIntoView({
                top: 0,
                behavior: "smooth",
              });
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
            onClick={() => {
              document.getElementById("contact").scrollIntoView({
                top: 0,
                behavior: "smooth",
              });
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
            ผมเป็นนักพัฒนาและนักออกแบบที่ชื่นชอบการสร้างสรรค์สิ่งใหม่ ๆ
            โดยเฉพาะการนำเทคโนโลยี AI มาประยุกต์ใช้ให้เกิดประโยชน์
            พร้อมเรียนรู้ท้าทายกับสิ่งใหม่ๆและพัฒนาทักษะอย่างต่อเนื่อง{" "}
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
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  top: 0,
                  behavior: "smooth",
                });
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
              component="a"
              href="https://github.com/Chattanon"
              target="_blank"
              rel="noopener noreferrer"
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
      {/* <Divider sx={{ backgroundColor: "#444", my: 3 }} /> */}
      {/* About Me Section - Modified to center content */}
      <Box
        id="about-me"
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
            ผมเป็นนักพัฒนาที่สนใจ AI Engineer จบด้านวิศวกรรมคอมพิวเตอร์
            มีความสนใจและทักษะด้าน ปัญญาประดิษฐ์, Machine Learning, และ Computer
            Vision ผมเคยทำโปรเจคจบเกี่ยวกับ ระบบบริหารลานจอดรถอัจฉริยะ โดยใช้
            SSD MobileNet ในการตรวจจับรถ และผ่านการสอบ ITPE ระดับ IP
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
            ผมมุ่งมั่นเรียนรู้เทคโนโลยีใหม่ ๆ
            อยู่เสมอและพร้อมที่จะนำความรู้ไปสร้างระบบ AI
            ที่มีประสิทธิภาพและตอบโจทย์การใช้งานจริง
            ผมกำลังมองหาโอกาสร่วมงานกับบริษัทที่ให้ความสำคัญกับ นวัตกรรม AI
            และการพัฒนาอย่างต่อเนื่อง
          </Typography>
          <Typography
            variant="้h6"
            sx={{
              color: "#ffffffff",
              mb: 4,
              fontSize: { xs: "0.9rem", md: "1rem" },
              lineHeight: 1.6,
            }}
          >
            การศึกษาของผมจบปริญญาตรีจาก <br /> มหาวิทยาลัยเอเชียอาคเนย์
            คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ ด้วยเกรด 3.35
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
              component="a"
              href="https://drive.google.com/file/d/1QSqDnm8mxiFKDWB9Rf0Rh4VCLEYnA7we/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
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
      {/* <Divider sx={{ backgroundColor: "#444", my: 3 }} /> */}
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
          id="capabilities"
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
            สามารถใช้งานเครื่องมือและเทคโนโลยีพัฒนาโปรแกรมได้อย่างมั่นใจ
            และพร้อมเรียนรู้สิ่งใหม่ ๆรวมถึงเข้าร่วมและแลกเปลี่ยนความรู้ใน
            ชุมชนผู้พัฒนา AI เพื่อต่อยอดทักษะอย่างต่อเนื่องสนใจด้าน AI, Machine
            Learning, Computer Vision และการพัฒนาเว็บ/ซอฟต์แวร์
            ทำงานร่วมกับทีมได้ดี พร้อมปรับตัวเข้ากับเทคโนโลยีและแนวทางใหม่ ๆ
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
              Linux
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
              SQL
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
              C++
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        id="experience"
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
      {/* project */}
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 16 },
          py: { xs: 6, md: 10 },
          mt: { xs: 2, md: 4 },
        }}
      >
        {/* cer */}
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
            Project work
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
                การบริหารจัดการที่จอดรถอัจฉริยะด้วยปัญญาประดิษฐ์
                <br />
                Intelligent Parking Management with Artificial Intelligent 

              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#aaaaaa",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  textAlign: { xs: "left", md: "right" },
                  lineHeight: -100,
                }}
              >
                 2024
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
              พัฒนา ระบบที่จอดรถอัจฉริยะ แบบ Edge AI ด้วย SSD MobileNet + OpenCV (Python) ตรวจจับรถและสถานะที่จอดแบบเรียลไทม์แสดงจำนวนที่ว่างผ่านแอปพลิเคชัน 

            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8, lg: 16 },
          py: { xs: 6, md: 10 },
          mt: { xs: 2, md: 4 },
        }}
      >
        {/* cer */}
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
            Certificate
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
                IT PassportInformation Technology Passport Examination (ITPE)
                ระดับ IP
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
                March 2024
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
              สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.)
              โดยสถาบันพัฒนาบุคลากรแห่งอนาคต (Career for the Future Academy)
              ผู้ดำเนินการโครงการสอบมาตรฐานวิชาชีพไอที หรือ Information
              Technology Professionals Examination: ITPE
              ได้ร่วมมือกันระหว่างกลุ่มภาคี 7 ประเทศ คือ ญี่ปุ่น ฟิลิปปินส์
              เวียดนาม พม่า มองโกเลีย บังคลาเทศ และไทย ภายใต้ชื่อ Information
              Technology Professionals Examination Council: ITPEC
              ซึ่งความร่วมมือดังกล่าวฯ
              เป็นหนึ่งในมาตรฐานสากลที่ได้รับการยอมรับในระดับภูมิภาคๆ
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* <Divider sx={{ backgroundColor: "#444", my: 4 }} /> */}

      <Box
        id="contact"
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
              justifyContent: "center",
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
                href="https://mail.google.com/mail/?view=cm&to=chattanon.a02@gmail.com"
                target="_blank"
                sx={{
                  color: "#c9e265",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                chattanon.a02@gmail.com
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
                href="https://drive.google.com/file/d/1QSqDnm8mxiFKDWB9Rf0Rh4VCLEYnA7we/view?usp=sharing"
                target="_blank"
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
              {/* GitHub Icon */}
              <Box
                component="a"
                href="https://github.com/Chattanon"
                target="_blank"
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

              {/*line */}
              <Box
                component="a"
                href="https://line.me/ti/p/zDry0cx3As"
                target="_blank"
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
                <FontAwesomeIcon icon={faLine} size="lg" />
              </Box>

              {/* Instagram Icon (Use an Instagram icon here) */}
              <Box
                component="a"
                href="https://www.instagram.com/ctn_few/?hl=th"
                target="_blank"
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
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
