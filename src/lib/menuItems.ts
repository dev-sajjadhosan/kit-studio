import {
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  PackageCheck,
  Code,
  CircleAlert,
  Star,
  Server,
  Database,
  GemIcon,
  Sparkles,
  Smartphone,
  Bot,
} from 'lucide-react'

export const menuItems = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    id: 2,
    title: 'Create Kit',
    url: '#',
    icon: Inbox,
    children: [
      { title: 'web kit', url: '#', icon: Code },
      { title: 'backend kit', url: '#', icon: Server },
      { title: 'database kit', url: '#', icon: Database },
      { title: 'mobile kit', url: '#', icon: Smartphone },
      { title: 'al & ml kit', url: '#', icon: Sparkles },
      { title: 'sep' },
      { title: 'package', url: '#', icon: PackageCheck },
    ],
  },
  {
    id: 3,
    title: 'Custom Pre Kit',
    url: '#',
    icon: Inbox,
    children: [
      { title: 'sep' },
      { title: ' web kit', url: '#', icon: Code },
      { title: ' backend kit', url: '#', icon: Server },
      { title: ' database kit', url: '#', icon: Database },
      { title: 'mobile kit', url: '#', icon: Smartphone },
      { title: ' al & ml kit', url: '#', icon: Sparkles },
      { title: 'sep' },
      { title: 'package', url: '#', icon: PackageCheck },
    ],
  },
  {
    id: 4,
    title: 'My Kits',
    url: '#',
    icon: Inbox, // parent icon
    children: [
      { title: 'Favorite Kits', url: '#', icon: Star }, // favorite → star
      { title: 'Saved Kits', url: '#', icon: PackageCheck }, // saved → package/check
      { title: 'Wishlist Kits', url: '#', icon: CircleAlert }, // wishlist → alert icon
    ],
  },
  {
    id: 5,
    title: 'Explore Kits',
    url: '#',
    icon: Calendar,
    children: [
      { title: 'Web Kits', url: '#', icon: Code },
      { title: 'Backend Kits', url: '#', icon: Server },
      { title: 'Mobile Kits', url: '#', icon: Smartphone },
      { title: 'Al & ML Kits', url: '#', icon: Sparkles },
      { title: 'Database Kits', url: '#', icon: Database },
      { title: 'Misc', url: '#', icon: Star },
    ],
  },
  {
    id: 6,
    title: 'kitty explore',
    url: '/kitty',
    icon: Bot,
  },
  {
    id: 7,
    title: 'Use in project',
    url: '#',
    icon: Search,
  },
  {
    id: 8,
    title: `What's New`,
    url: '#',
    icon: GemIcon,
  },
  {
    id: 9,
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]
