import UserProfileIcon from '@/assets/drawer/userProfile.png';
import DashboardIcon from '@/assets/drawer/dashboard.png';
import CreateIcon from '@/assets/drawer/create.png';
import TestIcon from '@/assets/drawer/test.png';
import QuestionBankIcon from '@/assets/drawer/questionBank.png';
import { IDrawerListItem } from "@/interfaces/componentInterfaces";

export const drawerItems:IDrawerListItem[] = [
  {
    Icon: DashboardIcon,
    Text: "Dashboard",
    Index: "1",
    href: "/dashboard"
  },
  {
    Icon: UserProfileIcon,
    Text: "User Profile",
    Index: "2",
    href: "/profile"
  },
  {
    Icon: CreateIcon,
    Text: "Create",
    Index: "3",
    Items: [
      {
        Icon: TestIcon,
        Text: "Test",
        Index: "3,1",
        href: "/create/test"
      },
      {
        Icon: QuestionBankIcon,
        Text: "Question Bank",
        Index: "3,2",
        href: "/create/questionBank"
      }
    ],
  },
  {
    Icon: TestIcon,
    Text: "Test",
    Index: "4",
    href: "/test"
  },
  {
    Icon: QuestionBankIcon,
    Text: "Question Bank",
    Index: "5",
    href: "/questionBank"
  },
  // {
  //   Icon: ManageIcon,
  //   Text: "Manage",
  //   Index: "6",
  //   href: "/manage"
  // },
  // {
  //   Icon: ReportsIcon,
  //   Text: "Reports",
  //   Index: "7",
  //   href: "/reports"
  // },
  // {
  //   Icon: MasterDataIcon,
  //   Text: "Master Data",
  //   Index: "8",
  //   href: "/masterData"
  // },
  // {
  //   Icon: ReferIcon,
  //   Text: "Refer",
  //   Index: "9",
  //   href: "/refer"
  // },
]