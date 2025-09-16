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
  TrendingUp,
  Server,
  Database,
} from 'lucide-react'

export const menuItems = [
  {
    id: 1,
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    id: 2,
    title: 'Create my own',
    url: '#',
    icon: Inbox,
    children: [
      { title: 'Create frontend kit', url: '#', icon: Code },
      { title: 'Create server kit', url: '#', icon: Server },
      { title: 'Create database kit', url: '#', icon: Database },
      { title: 'Customize frontend kit', url: '#', icon: PackageCheck },
      { title: 'Customize server kit', url: '#', icon: PackageCheck },
      { title: 'Create a package', url: '#', icon: PackageCheck },
    ],
  },
  {
    id: 3,
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
    id: 4,
    title: 'Explore Kits',
    url: '#',
    icon: Calendar,
    children: [
      { title: 'Popular Kits', url: '#', icon: Star },
      { title: 'Trending Kits', url: '#', icon: TrendingUp },
      { title: 'Custom Kits', url: '#', icon: Code },
      { title: 'My Kits', url: '#', icon: Inbox },
    ],
  },
  {
    id: 5,
    title: 'Use in project',
    url: '#',
    icon: Search,
    children: [
      { title: 'Frontend ', url: '#', icon: Code },
      { title: 'Backend ', url: '#', icon: Server },
      { title: 'database', url: '#', icon: Database },
    //   { title: 'Fullstack project', url: '#', icon: PackageCheck },
    ],
  },
  {
    id: 6,
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]
