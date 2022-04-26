import FlightLandOutlinedIcon from "@mui/icons-material/FlightLandOutlined";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import DirectionsSubwayFilledOutlinedIcon from "@mui/icons-material/DirectionsSubwayFilledOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import KingBedOutlinedIcon from "@mui/icons-material/KingBedOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";

export const mainMenuData = [
    {
        label: "پرواز داخلی",
        value: "1",
        icon: <FlightLandOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        label: "پرواز خارجی",
        value: "2",
        icon: <FlightTakeoffOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        label: "قطار",
        value: "3",
        icon: <DirectionsSubwayFilledOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        label: "اتوبوس",
        value: "4",
        icon: <DirectionsBusFilledOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        label: "تور",
        value: "5",
        icon: <TourOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        label: "هتل",
        value: "6",
        icon: <KingBedOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        label: "ویلا و اقامتگاه",
        value: "7",
        icon: <MeetingRoomOutlinedIcon sx={{ fontSize: 30 }} />,
    },
];