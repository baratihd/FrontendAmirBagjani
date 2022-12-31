import {
    VisitIcon,
    RunningIcon,
    ArchiveIcon,
    DocumentTextIcon,
    DocumentDoneIcon,
    DocumentForwardIcon,
    DocumentCheckedIcon,
    DocumentRecycleIcon,
} from "icons";

export const informationItems = [
    { id: 1, color: "#EDE0E5", label: "تشکیل شده", icon: <DocumentTextIcon />, count: 336 },
    { id: 2, color: "#C7C8E5", label: "ارسال شده به شرکت ارزیابی", icon: <DocumentForwardIcon />, count: 445 },
    { id: 3, color: "#DCE4CC", label: "آرشیو شده", icon: <ArchiveIcon />, count: 665 },
    { id: 4, color: "#FDD9C0", label: "درحال اجرا", icon: <RunningIcon />, count: 255 },
    { id: 5, color: "#EDE0E5", label: "ارزیابی شده", icon: <DocumentCheckedIcon />, count: 255 },
    { id: 6, color: "#C7C8E5", label: "برگشت به شرکت ارزیابی", icon: <DocumentRecycleIcon />, count: 255 },
    { id: 7, color: "#DCE4CC", label: "بازدید مجدد", icon: <VisitIcon />, count: 255 },
    { id: 8, color: "#FDD9C0", label: "بسته شده", icon: <DocumentDoneIcon />, count: 255 },
]
