import React from "react";
import {
  Box,
  Container,
  Typography,
  styled,
  useMediaQuery,
  type Theme,
} from "@mui/material";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  title: string;
  icon?: string;
  index: number;
}

const FullSection = styled(Box)({
  height: "50vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#ffffff",
  justifyContent: "start",
});

const ContentWrapper = styled(Box)<{ inview: number }>(({ inview }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
  cursor: "pointer",
  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
  transform: inview
    ? "translate(0, 0)"
    : `translate(${(Math.random() - 0.5) * 100}%, ${
        (Math.random() - 0.5) * 100
      }%)`,
  opacity: inview ? 1 : 0,
  "&:hover": {
    "& img": {
      transform: "scale(1.1)",
    },
    "& h4": {
      color: "#000000",
    },
  },
}));

const Section: React.FC<SectionProps> = ({ title, icon, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Container sx={{ backgroundColor: "#fff", overflow: "hidden" }}>
      <FullSection
        sx={{
          justifyContent:
            index >= 4 ? "center" : index % 2 === 0 ? "start" : "end",
        }}
      >
        <ContentWrapper ref={ref} inview={inView ? 1 : 0}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            gap={3}
            flexDirection={index % 2 === 1 ? "row-reverse" : "initial"}
          >
            {icon && (
              <img
                src={icon}
                alt={title}
                style={{
                  height: isMobile ? "200px" : "300px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            )}
            <Typography
              variant='h1'
              sx={{
                color: "#473732",
                transition: "color 0.3s ease-in-out",
                fontSize: isMobile ? "2rem" : "3rem",
              }}
            >
              {title}
            </Typography>
          </Box>
        </ContentWrapper>
      </FullSection>
    </Container>
  );
};

const sections = [
  { title: "Dexscreener", icon: "/3.png" },
  { title: "Dextools", icon: "/1.png" },
  { title: "Telegram", icon: "/2.png" },
  { title: "Twitter", icon: "/5.png" },
  { title: "Buy Now", icon: "/4.png" },
  { title: "CA: Contract" },
];

const Banner: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Box>
      <Box
        height='100vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
        sx={{ backgroundColor: "#fff" }}
      >
        <video
          src='/v1.mp4'
          height={isMobile ? 350 : 500}
          autoPlay
          loop
          muted
        />
      </Box>
      {sections.map((section, index) => (
        <Section
          key={section.title}
          title={section.title}
          icon={section.icon}
          index={index}
        />
      ))}
    </Box>
  );
};

export default Banner;
