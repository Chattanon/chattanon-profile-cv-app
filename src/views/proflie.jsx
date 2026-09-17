import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Divider,
  Chip,
  LinearProgress,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
// TODO: Replace hero photo — import HeroPhoto from "../assets/your-new-hero-photo.jpg";
import FalaFew from "../assets/BD8F2FDA-0E97-4337-8092-20B2065E1625.jpg";
// TODO: Replace About Me photos with new ones when ready
import AboutMePhoto from "../assets/02.png";
import AboutMePhoto1 from "../assets/03.png";
import projectwork from "../assets/01.png";
import AboutMePhoto2 from "../assets/04.png";
import certificates from "../assets/cer.png";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import ScrollToTop from "./ScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";

// ─── Skill Tag Component ─────────────────────────────────────────────────────
function SkillTag({ label }) {
  return (
    <Box
      sx={{
        backgroundColor: "#111111",
        color: "#FFFFFF",
        borderRadius: "50px",
        px: 3,
        py: 1,
        fontSize: { xs: "0.8rem", md: "0.85rem" },
        fontWeight: 500,
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "#1a1a1a",
          borderColor: "rgba(201,226,101,0.3)",
          color: "#c9e265",
        },
      }}
    >
      {label}
    </Box>
  );
}

// ─── Strength Card Component ─────────────────────────────────────────────────
function StrengthCard({ icon, title }) {
  return (
    <Box
      sx={{
        backgroundColor: "#111111",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "12px",
        px: 3,
        py: 2.5,
        display: "flex",
        alignItems: "center",
        gap: 2,
        transition: "all 0.25s ease",
        "&:hover": {
          borderColor: "rgba(201,226,101,0.35)",
          backgroundColor: "#161616",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Typography sx={{ fontSize: "1.4rem" }}>{icon}</Typography>
      <Typography sx={{ color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 500 }}>
        {title}
      </Typography>
    </Box>
  );
}

// ─── Experience Entry Component ──────────────────────────────────────────────
function ExperienceEntry({ company, role, period, type, bullets }) {
  return (
    <Box
      sx={{
        backgroundColor: "#0a0a0a",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        p: { xs: 3, md: 4 },
        mb: 3,
        transition: "border-color 0.25s ease",
        "&:hover": { borderColor: "rgba(201,226,101,0.2)" },
      }}
    >
      {/* Company + Period */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          mb: 1.5,
          gap: 1,
        }}
      >
        <Typography
          sx={{ color: "#c9e265", fontWeight: 700, fontSize: { xs: "0.85rem", md: "0.95rem" } }}
        >
          {company}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {type && (
            <Box
              sx={{
                backgroundColor: "rgba(201,226,101,0.1)",
                color: "#c9e265",
                borderRadius: "20px",
                px: 1.5,
                py: 0.3,
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.5px",
              }}
            >
              {type}
            </Box>
          )}
          <Typography sx={{ color: "#666", fontSize: "0.8rem" }}>{period}</Typography>
        </Box>
      </Box>

      {/* Role */}
      <Typography
        sx={{ color: "#FFFFFF", fontWeight: 600, fontSize: { xs: "1rem", md: "1.05rem" }, mb: 2 }}
      >
        {role}
      </Typography>

      {/* Bullet Points */}
      <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
        {bullets.map((b, i) => (
          <Box
            component="li"
            key={i}
            sx={{
              color: "#AAAAAA",
              fontSize: { xs: "0.85rem", md: "0.9rem" },
              lineHeight: 1.75,
              mb: 0.5,
            }}
          >
            {b}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// ─── Photo Placeholder Component ─────────────────────────────────────────────
function PhotoPlaceholder({ label = "Photo Coming Soon", height = "300px", width = "100%" }) {
  return (
    <Box
      sx={{
        width,
        height,
        backgroundColor: "rgba(201,226,101,0.03)",
        border: "2px dashed rgba(201,226,101,0.25)",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <Typography sx={{ fontSize: "2rem" }}>📷</Typography>
      <Typography sx={{ color: "rgba(201,226,101,0.5)", fontSize: "0.85rem", fontWeight: 500 }}>
        {label}
      </Typography>
    </Box>
  );
}

// ─── Language Bar Component ───────────────────────────────────────────────────
function LanguageBar({ language, level, percent }) {
  return (
    <Box sx={{ mb: 2.5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.8 }}>
        <Typography sx={{ color: "#FFFFFF", fontSize: "0.9rem", fontWeight: 500 }}>
          {language}
        </Typography>
        <Typography sx={{ color: "#AAAAAA", fontSize: "0.8rem" }}>{level}</Typography>
      </Box>
      <Box sx={{ position: "relative", height: "6px", backgroundColor: "#1a1a1a", borderRadius: "3px" }}>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: `${percent}%`,
            background: "linear-gradient(90deg, #c9e265 0%, #FE6B8B 100%)",
            borderRadius: "3px",
          }}
        />
      </Box>
    </Box>
  );
}

// ─── Certificate Lightbox Component ──────────────────────────────────────────
function CertLightbox({ src, caption, alt = "Image", maxWidth = "100%" }) {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1.5 }}>
      {/* Thumbnail — คลิกเพื่อขยาย */}
      <Box
        component="img"
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        sx={{
          width: "100%",
          maxWidth,
          height: "auto",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.1)",
          cursor: "zoom-in",
          transition: "all 0.2s ease",
          display: "block",
          "&:hover": {
            border: "1px solid rgba(201,226,101,0.5)",
            boxShadow: "0 0 20px rgba(201,226,101,0.15)",
            transform: "scale(1.02)",
          },
        }}
      />

      {/* Caption */}
      {caption && (
        <Typography
          sx={{
            color: "#AAAAAA",
            fontSize: "0.8rem",
            textAlign: "center",
            lineHeight: 1.5,
            px: 1,
          }}
        >
          {caption}
        </Typography>
      )}

      {/* Fullscreen Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth={false}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0,0,0,0.95)",
            boxShadow: "none",
            position: "relative",
          },
        }}
        sx={{
          "& .MuiBackdrop-root": { backgroundColor: "rgba(0,0,0,0.9)" },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
            "&:hover": { backgroundColor: "rgba(201,226,101,0.2)", color: "#c9e265" },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Full-size image */}
        <Box
          component="img"
          src={src}
          alt={alt}
          onClick={() => setOpen(false)}
          sx={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            width: "auto",
            height: "auto",
            display: "block",
            cursor: "zoom-out",
          }}
        />

        {/* Caption in dialog */}
        {caption && (
          <Typography
            sx={{
              color: "#AAAAAA",
              fontSize: "0.85rem",
              textAlign: "center",
              py: 1.5,
              px: 2,
            }}
          >
            {caption}
          </Typography>
        )}
      </Dialog>
    </Box>
  );
}

// ─── Main Profile Component ───────────────────────────────────────────────────
function Profile() {
  const navItems = [
    { label: "Skills", id: "capabilities" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "About", id: "about-me" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <Box sx={{ backgroundColor: "#000000", minHeight: "100vh" }}>
      <ScrollToTop />

      {/* ── AppBar ─────────────────────────────────────────────────────────── */}
      <AppBar position="sticky" sx={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(10px)", boxShadow: "none", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: "1px" }}
          >
            CHATTANON AMPRASOET
          </Typography>
          {navItems.map((item) => (
            <Button
              key={item.id}
              color="inherit"
              sx={{
                mx: 0.5,
                fontSize: "0.8rem",
                "&:hover": { opacity: 0.8, backgroundColor: "rgba(255,255,255,0.07)" },
              }}
              onClick={() =>
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {item.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      {/* ── Hero Section ───────────────────────────────────────────────────── */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          px: { xs: 3, sm: 6, md: 10, lg: 18 },
          py: { xs: 6, md: 10 },
          mt: { xs: 2, md: 4 },
          gap: 4,
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "55%" },
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
              mb: 1,
              fontSize: { xs: "1.8rem", md: "2.5rem", lg: "3rem" },
              letterSpacing: "-0.5px",
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
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            Chattanon A.
          </Typography>

          {/* Role Badges */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.2,
              mb: 3,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {["Business Analyst", "System Analyst", "Solution Consultant"].map((role) => (
              <Box
                key={role}
                sx={{
                  border: "1px solid rgba(201,226,101,0.5)",
                  borderRadius: "20px",
                  px: 2,
                  py: 0.5,
                  fontSize: "0.75rem",
                  color: "#c9e265",
                  fontWeight: 600,
                  letterSpacing: "0.3px",
                }}
              >
                {role}
              </Box>
            ))}
          </Box>

          <Typography
            variant="h6"
            sx={{ color: "#AAAAAA", mb: 1.5, maxWidth: "560px", lineHeight: 1.7, fontSize: { xs: "0.95rem", md: "1rem" } }}
          >
            Computer Engineering graduate with hands-on experience in ERP Development,
            Business Analysis, RPA Automation, and AI/ML solutions.
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#555", mb: 4, fontStyle: "italic", fontSize: "0.85rem" }}
          >
            "Commitment and perseverance are the keys to success."
          </Typography>

          {/* CTA Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#c9e265",
                color: "#000000",
                fontWeight: "bold",
                borderRadius: "50px",
                px: 3.5,
                py: 1.5,
                "&:hover": { backgroundColor: "#d9f568", transform: "translateY(-1px)" },
                transition: "all 0.2s ease",
              }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              CONTACT ME
              <Box component="span" sx={{ ml: 1, width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#000" }} />
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
                backgroundColor: "#1a1a1a",
                borderRadius: "50%",
                width: 48,
                height: 48,
                border: "1px solid rgba(255,255,255,0.1)",
                "&:hover": { backgroundColor: "#2a2a2a", borderColor: "rgba(255,255,255,0.2)" },
                transition: "all 0.2s ease",
              }}
            >
              <GitHubIcon sx={{ color: "#FFF" }} />
            </Box>
          </Box>
        </Box>

        {/* Hero Avatar */}
        <Box sx={{ order: { xs: 1, md: 2 }, display: "flex", justifyContent: "center" }}>
          {/* TODO: Replace with new hero photo when ready */}
          <Box
            component="img"
            src={FalaFew}
            alt="Chattanon Amprasoet"
            sx={{
              width: { xs: "200px", sm: "300px", md: "200px", lg: "300px" },
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              border: "3px solid rgba(201,226,101,0.15)",
            }}
          />
        </Box>
      </Box>

      {/* ── Capabilities / Skills Section ──────────────────────────────────── */}
      <Box
        id="capabilities"
        sx={{
          px: { xs: 3, sm: 6, md: 10, lg: 18 },
          py: { xs: 6, md: 10 },
          mt: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-start" },
            mb: 6,
            gap: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#FFF", fontWeight: "bold", flexBasis: { md: "38%" }, fontSize: { xs: "1.6rem", md: "2rem" } }}
          >
            MY CAPABILITIES
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#AAAAAA", lineHeight: 1.7, flexBasis: { md: "58%" }, fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            ทำงานด้าน Business Analysis, ERP Development และ AI Automation ได้อย่างมั่นใจ
            พร้อมเรียนรู้เทคโนโลยีใหม่ และทำงานร่วมกับทีม Cross-functional ได้ดี
          </Typography>
        </Box>

        {/* Skill Categories */}
        {[
          {
            category: "Business & Analysis",
            skills: ["Business Analysis", "Requirement Gathering", "System Analysis", "Process Improvement", "ERP Systems", "User Support"],
          },
          {
            category: "AI / Automation",
            skills: ["AI / Machine Learning", "Computer Vision", "TensorFlow", "RPA / n8n", "Chatbot Development", "Edge AI"],
          },
          {
            category: "Programming",
            skills: ["Python", "JavaScript", "TypeScript", "SQL", "C++", "HTML / CSS", "Dart"],
          },
          {
            category: "Tools & Platforms",
            skills: ["Docker", "GitHub", "Figma", "N8N", "Claude", "ChatGPT", "VS Code", "Antigravity", "Kiro", "NotebookLM"],
          },
          {
            category: "IoT & Systems",
            skills: ["IoT / Raspberry Pi", "Linux", "WebSocket", "Sensor Integration", "REACT", "Flutter"],
          },
        ].map((group) => (
          <Box key={group.category} sx={{ mb: 4 }}>
            <Typography
              sx={{
                color: "#c9e265",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                mb: 2,
                opacity: 0.8,
              }}
            >
              {group.category}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {group.skills.map((skill) => (
                <SkillTag key={skill} label={skill} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* ── Core Strengths Section ──────────────────────────────────────────── */}
      <Box
        sx={{
          px: { xs: 3, sm: 6, md: 10, lg: 18 },
          py: { xs: 6, md: 8 },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#FFF", fontWeight: "bold", mb: 5, fontSize: { xs: "1.6rem", md: "2rem" } }}
        >
          CORE STRENGTHS
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
            gap: 2,
          }}
        >
          {[
            { icon: "🧠", title: "Analytical Thinking" },
            { icon: "🔧", title: "Problem Solving" },
            { icon: "📋", title: "Requirement Analysis" },
            { icon: "💬", title: "Communication" },
            { icon: "🤝", title: "Cross-functional Collaboration" },
            { icon: "⚡", title: "Fast Learning" },
            { icon: "🔄", title: "Adaptability" },
            { icon: "💡", title: "Technical + Business Understanding" },
          ].map((s) => (
            <StrengthCard key={s.title} icon={s.icon} title={s.title} />
          ))}
        </Box>
      </Box>

      {/* ── Experience Section ──────────────────────────────────────────────── */}
      <Box
        id="experience"
        sx={{
          px: { xs: 3, sm: 6, md: 10, lg: 18 },
          py: { xs: 6, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-start" },
            mb: 6,
            gap: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#FFF", fontWeight: "bold", flexBasis: { md: "38%" }, fontSize: { xs: "1.6rem", md: "2rem" } }}
          >
            MY EXPERIENCE
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#AAAAAA", lineHeight: 1.7, flexBasis: { md: "58%" }, fontSize: { xs: "0.9rem", md: "1rem" } }}
          >
            ประสบการณ์ทำงานจริงด้าน ERP Development, Business Analysis และ IT Support
            กับองค์กรในธุรกิจอาหารและเทคโนโลยี
          </Typography>
        </Box>

        {/* Job 1 */}
        <ExperienceEntry
          company="BEDROCK ANALYTICS COMPANY LIMITED"
          role="IT Support (Business Operations)"
          period="Apr 2026 – Aug 2026"
          type="CONTRACT 4 MONTHS"
          bullets={[
            "Analyzed post-implementation issues and recommended system improvements",
            "Gathered and translated business requirements into enhancement requests for development teams",
            "Collaborated cross-functionally with developers, business users, and stakeholders",
            "Coordinated communication between executives, department managers, and end users",
            "Supported and monitored municipal systems: Utility Billing, Government Service Request, Meter Reading, CDDP, Incident Management, Smart Meter",
          ]}
        />

        {/* Job 2 */}
        <ExperienceEntry
          company="AMPOL FOOD PROCESSING LIMITED"
          role="ERP / Information System Development"
          period="Nov 2025 – Apr 2026"
          type="FULL-TIME"
          bullets={[
            "Developed, enhanced, and maintained enterprise information systems for internal departments",
            "Gathered and analyzed user requirements; translated to actionable system solutions",
            "Built RPA automation for stock data extraction (Purchasing Department)",
            "Designed and implemented IT Asset Management System",
            "Created WMS dashboards for real-time warehouse monitoring",
            "Developed chatbots and automation workflows using n8n",
            "Supported DC Audit monitoring and reporting systems",
          ]}
        />

        {/* Internship (kept for reference) */}
        <Box
          sx={{
            backgroundColor: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "16px",
            p: { xs: 3, md: 4 },
            mb: 3,
            opacity: 0.7,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography sx={{ color: "#888", fontWeight: 600, fontSize: "0.85rem" }}>
              GOVERNMENT AGENCY (INTERNSHIP)
            </Typography>
            <Typography sx={{ color: "#555", fontSize: "0.75rem" }}>Jun 2024</Typography>
          </Box>
          <Typography sx={{ color: "#AAAAAA", fontSize: "0.9rem", mb: 1 }}>
            Apprentice Computer Technical Officer
          </Typography>
          <Typography sx={{ color: "#777", fontSize: "0.85rem", lineHeight: 1.7 }}>
            ดูแลระบบคอมพิวเตอร์ให้กับหน่วยงานรัฐ และพัฒนาเว็บเลือกตั้งพร้อมทั้ง Backend และ Frontend
          </Typography>
        </Box>
      </Box>

      {/* ── Projects Section ────────────────────────────────────────────────── */}
      <Box
        id="projects"
        sx={{
          px: { xs: 3, sm: 6, md: 10, lg: 18 },
          py: { xs: 6, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-start" },
            mb: 6,
            gap: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: "#FFF", fontWeight: "bold", flexBasis: { md: "38%" }, fontSize: { xs: "1.6rem", md: "2rem" } }}
          >
            PROJECT WORK
          </Typography>
        </Box>

        {/* Project Card */}
        <Box
          sx={{
            backgroundColor: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "20px",
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            transition: "border-color 0.25s ease",
            "&:hover": { borderColor: "rgba(201,226,101,0.2)" },
          }}
        >
          <CertLightbox src={projectwork} maxWidth="300px" />

          {/* Project Screenshot Placeholder */}
          {/* TODO: Add project screenshot — replace PhotoPlaceholder with actual image */}
          {/* <Box sx={{ flexShrink: 0, width: { xs: "100%", md: "360px" } }}>
            <PhotoPlaceholder label="Project Screenshot Coming Soon" height="220px" width="100%" />
          </Box> */}

          {/* Project Details */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2, flexWrap: "wrap", gap: 1 }}>
              <Typography sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: { xs: "1rem", md: "1.1rem" } }}>
                การบริหารจัดการที่จอดรถอัจฉริยะด้วยปัญญาประดิษฐ์
              </Typography>
              <Typography sx={{ color: "#666", fontSize: "0.8rem" }}>2024</Typography>
            </Box>
            <Typography sx={{ color: "#c9e265", fontSize: "0.85rem", mb: 2 }}>
              Intelligent Parking Management with Artificial Intelligence
            </Typography>
            <Typography sx={{ color: "#AAAAAA", fontSize: "0.9rem", lineHeight: 1.75, mb: 3 }}>
              พัฒนาระบบที่จอดรถอัจฉริยะแบบ Edge AI ด้วย SSD MobileNet + OpenCV (Python)
              ตรวจจับรถและสถานะที่จอดแบบเรียลไทม์ แสดงจำนวนที่ว่างผ่านแอปพลิเคชัน
              พร้อม WebSocket สำหรับ Real-time Communication
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {["Python", "SSD MobileNet", "OpenCV", "TensorFlow", "Edge AI", "WebSocket", "Raspberry Pi"].map((tech) => (
                <Box
                  key={tech}
                  sx={{
                    backgroundColor: "rgba(201,226,101,0.08)",
                    color: "#c9e265",
                    borderRadius: "20px",
                    px: 1.5,
                    py: 0.3,
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    border: "1px solid rgba(201,226,101,0.2)",
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── Certificate Section ─────────────────────────────────────────────── */}
      <Box
        sx={{
          px: { xs: 3, sm: 6, md: 10, lg: 18 },
          py: { xs: 6, md: 8 },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", mb: 5, gap: 3 }}>
          <Typography
            variant="h4"
            sx={{ color: "#FFF", fontWeight: "bold", flexBasis: { md: "38%" }, fontSize: { xs: "1.6rem", md: "2rem" } }}
          >
            CERTIFICATE
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "16px",
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: { md: "center" },
          }}
        >
          {/* Certificate Image — คลิกเพื่อดูเต็มจอ */}
          <CertLightbox src={certificates} maxWidth="200px" />

          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1, flexWrap: "wrap", gap: 1 }}>
              <Typography sx={{ color: "#FFFFFF", fontWeight: 700, fontSize: { xs: "0.95rem", md: "1rem" } }}>
                IT Passport — Information Technology Passport Examination (ITPE)
              </Typography>
              <Typography sx={{ color: "#666", fontSize: "0.8rem" }}>March 8, 2024</Typography>
            </Box>
            <Typography sx={{ color: "#c9e265", fontSize: "0.85rem", mb: 2 }}>ระดับ IP (Information Technology Passport)</Typography>
            <Typography sx={{ color: "#AAAAAA", fontSize: "0.85rem", lineHeight: 1.7 }}>
              สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.) — สถาบันพัฒนาบุคลากรแห่งอนาคต (Career for the Future Academy)
              มาตรฐานสากลที่ได้รับการยอมรับใน 7 ประเทศ ภายใต้ ITPEC
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── About Me Section ───────────────────────────────────────────────── */}
      <Box
        id="about-me"
        sx={{
          px: { xs: 3, sm: 6, md: 10, lg: 18 },
          py: { xs: 6, md: 10 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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

        <Box sx={{ maxWidth: "800px", textAlign: "center", mb: { xs: 5, md: 8 } }}>
          <Typography
            variant="body1"
            sx={{ color: "#FFFFFF", mb: 3, fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.8 }}
          >
            มีประสบการณ์ด้าน ERP System Development,
            Business Analysis และ Process Automation
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#AAAAAA", mb: 3, fontSize: { xs: "0.9rem", md: "1rem" }, lineHeight: 1.75 }}
          >
            สนใจนำ AI, RPA และ Digital Tools มาแก้ปัญหาธุรกิจ มีทักษะด้าน Computer Vision,
            Machine Learning และการพัฒนาเว็บ ซอฟต์แวร์ ชอบเรียนรู้เทคโนโลยีใหม่ ๆ
            และพร้อมร่วมงานกับทีมที่มุ่งเน้น Innovation
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#FFFFFF", mb: 3, fontSize: { xs: "0.9rem", md: "1rem" }, lineHeight: 1.75 }}
          >
            <Box component="span" sx={{ color: "#c9e265", fontWeight: 600 }}>การศึกษา: </Box>
            B.Eng. Computer Engineering — มหาวิทยาลัยเอเชียอาคเนย์ | GPA 3.35 (Second Class Honors)
          </Typography>

          {/* Language Proficiency */}
          <Box sx={{ textAlign: "left", mt: 4, mb: 4 }}>
            <Typography sx={{ color: "#FFF", fontWeight: 700, mb: 3, fontSize: "0.9rem", letterSpacing: "1px", textTransform: "uppercase" }}>
              Language Proficiency
            </Typography>
            <LanguageBar language="Thai" level="Native / Fluent" percent={100} />
            <LanguageBar language="English" level="Intermediate" percent={60} />
          </Box>

          {/* Download Resume & CV */}
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center", mt: 4 }}>
            <Button
              component="a"
              href="https://drive.google.com/file/d/1dBZojJQyLAjrbcYi9scF-SHGxwmW6zId/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: "#c9e265",
                color: "#000000",
                fontWeight: "bold",
                borderRadius: "50px",
                px: 3.5,
                py: 1.5,
                "&:hover": { backgroundColor: "#d9f568", transform: "translateY(-1px)" },
                transition: "all 0.2s ease",
              }}
            >
              DOWNLOAD RESUME
              <Box component="span" sx={{ ml: 1, width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#000" }} />
            </Button>
            <Button
              component="a"
              href="https://drive.google.com/file/d/1eL4VCNoyKI_-HG4MqKxuA6RDW3GE8cAw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: "#c9e265",
                color: "#000000",
                fontWeight: "bold",
                borderRadius: "50px",
                px: 3.5,
                py: 1.5,
                "&:hover": { backgroundColor: "#d9f568", transform: "translateY(-1px)" },
                transition: "all 0.2s ease",
              }}
            >
              DOWNLOAD CV
              <Box component="span" sx={{ ml: 1, width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#000" }} />
            </Button>
          </Box>
        </Box>

        {/* About Me Photos — Placeholders (replace when photos are ready) */}
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            gap: 3,
            maxWidth: "900px",
          }}
        >
          {/* TODO: Replace PhotoPlaceholder with actual About Me photos */}
          <CertLightbox
            src={AboutMePhoto}
            alt="Chattanon at work"
            caption="ระบบติดตามอุปกรณ์ตามพัสดุ IT"
          />
          <CertLightbox
            src={AboutMePhoto2}
            alt="Chattanon activities"
            caption="ระบบแสดงผลการเลือกตั้งและกรอกคะแนน"
          />
          <CertLightbox
            src={AboutMePhoto1}
            alt="Chattanon profile"
            caption="ระบบจัดการคลังสินค้า WMS "
          />

        </Box>
      </Box>

      {/* ── Contact Section ─────────────────────────────────────────────────── */}
      <Box
        id="contact"
        sx={{
          px: { xs: 3, sm: 6, md: 10, lg: 18 },
          py: { xs: 6, md: 10 },
          backgroundColor: "#000000",
        }}
      >
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

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            maxWidth: "900px",
            mx: "auto",
            gap: 6,
          }}
        >
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Typography variant="body1" sx={{ color: "#FFFFFF", mb: 1.5, fontSize: { xs: "1rem", md: "1.05rem" } }}>
              Say hello at{" "}
              <Box
                component="a"
                href="https://mail.google.com/mail/?view=cm&to=chattanon.a02@gmail.com"
                target="_blank"
                sx={{ color: "#c9e265", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                chattanon.a02@gmail.com
              </Box>
            </Typography>

            <Typography variant="body1" sx={{ color: "#FFFFFF", mb: 1.5, fontSize: { xs: "1rem", md: "1.05rem" } }}>
              Phone:{" "}
              <Box
                component="a"
                href="tel:0949283238"
                sx={{ color: "#c9e265", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                094-928-3238
              </Box>
            </Typography>

            <Typography variant="body1" sx={{ color: "#FFFFFF", mb: 5, fontSize: { xs: "1rem", md: "1.05rem" } }}>
              For more info, here's my{" "}
              <Box
                component="a"
                href="https://drive.google.com/file/d/1dBZojJQyLAjrbcYi9scF-SHGxwmW6zId/view?usp=sharing"
                target="_blank"
                sx={{ color: "#c9e265", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                Resume
              </Box>
              <Box
                component="a"
                href="https://drive.google.com/file/d/1eL4VCNoyKI_-HG4MqKxuA6RDW3GE8cAw/view?usp=sharing"
                target="_blank"
                sx={{ color: "#c9e265", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
              >
                ,CV
              </Box>
            </Typography>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 2.5, mb: 5 }}>
              {[
                {
                  href: "https://github.com/Chattanon",
                  icon: <GitHubIcon />,
                  label: "GitHub",
                },
                {
                  href: "https://line.me/ti/p/zDry0cx3As",
                  icon: <FontAwesomeIcon icon={faLine} size="lg" />,
                  label: "Line",
                },
                {
                  href: "https://www.instagram.com/ctn_few/?hl=th",
                  icon: <InstagramIcon />,
                  label: "Instagram",
                },
              ].map((s) => (
                <Box
                  key={s.label}
                  component="a"
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    backgroundColor: "rgba(201,226,101,0.08)",
                    color: "#c9e265",
                    border: "1px solid rgba(201,226,101,0.2)",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      backgroundColor: "rgba(201,226,101,0.18)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {s.icon}
                </Box>
              ))}
            </Box>

            <Typography variant="body2" sx={{ color: "#555", mt: "auto" }}>
              © 2026 Chattanon Amprasoet
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
