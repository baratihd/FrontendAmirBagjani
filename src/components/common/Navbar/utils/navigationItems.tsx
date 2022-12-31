import { FolderAddIcon, HomeIcon, BookIcon, ReceiptMinus } from "icons";

export const navigationItems = [
    { id: 1, title: "صفحه اصلی", icon: <HomeIcon />, path: "/" },
    { id: 2, title: "ایجاد پرونده", icon: <FolderAddIcon />, path: "/form" },
    { id: 3, title: "لیست پرونده ها", icon: <BookIcon />, path: "/list" },
    { id: 4, title: "گزارشگیری", icon: <ReceiptMinus />, path: "/report" },
]