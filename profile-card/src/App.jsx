import {useState, useEffect } from 'react'
import Card from './component/Card.jsx'
import { FaYoutube } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";

import {Heart} from "lucide-react"
import { BiShare } from "react-icons/bi";
import {MessageCircle} from "lucide-react"

const App = () => {
  const [array, setArray] = useState([])

  const profiles = [
    {
      id: 1,
      profileImage: "https://imgs.search.brave.com/q0bygo-cAnpLezgse1feWIssXRqK2heHxF4unt-ZhzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzUuanBnP3Nz/bD0x",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    },
    {
      id: 1,
      profileImage: "https://imgs.search.brave.com/xcMKQCiM60zSz5q6OKm-qWynfzyACaql0CT-Q8dN6U8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vbWlkZGxlLWFn/ZS1tYWxlLWNhc3Vh/bC1zdHlsZS1wcm9m/ZXNzaW9uYWwtcHJv/ZmlsZS1waG90b185/MzUwNzQtMzQ2Njgu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    },
    {
      id: 1,
      profileImage: "https://imgs.search.brave.com/vsK2_ggJ2FbgdhDZHwp6qVXgd_4Blf9DthNzvwRnPtU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJvZmlsZXBpY3R1/cmUuYWkvbGFuZGlu/Zy9hZnRlci0xLmpw/Zw",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    },
    {
      id: 1,
      profileImage: "https://imgs.search.brave.com/4YL9obw9K-Zz72TPYharIF0ozMoT9zK1SaLYLBMYD9s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/b3JiaXRtZWRpYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDYvQW5keS1Q/cm9maWxlLTYwMC5w/bmc",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    },
    {
      id: 1,
      profileImage: "https://imgs.search.brave.com/qdp1AmeuEBudmtZW0W0RAXQp7WSY5epM09N7_clVEGc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wZnBt/YWtlci5jb20vaW1h/Z2VzL2xhbmRpbmcv/aGVhZHNob3RzL2Js/b2dfMi5qcGc",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    },
    {
      id: 1,
      profileImage: "https://imgs.search.brave.com/bswKFgcinA7m0xERaYId7KQtMcLY4hXPF6jNm4gwTRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzEyLmpwZz9z/c2w9MQ",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    },
    {
      id: 1,
      profileImage: "https://imgs.search.brave.com/ReF7_2VyWYBZzK2ASQ3axelwCOHDl97aGmTrY4EJ7UE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNjE0/ODEwL3BleGVscy1w/aG90by02MTQ4MTAu/anBlZz9jcz10aW55/c3JnYiZkcHI9MSZ3/PTUwMA",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    },
    {
      id: 1,
      profileImage: "https://imgs.search.brave.com/5-hPlr9W5tAW0rY6NsZx85tdbNwY18ltCsjDdtGTuvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vaGVhZC1zaG90/LWNvbmZpZGVudC1o/YW5kc29tZS1iZWFy/ZGVkLW1hbi1sb29r/aW5nLWNhbWVyYS1w/b3NpbmctcHJvZmls/ZS1waWN0dXJlLXN0/YW5kaW5nLWhvbWUt/c2VyaW91cy1mb2N1/c2VkLW1hbGUtbWFr/aW5nLXZpZGVvLWNh/bGwtdXNpbmctd2Vi/Y2FtLWRpc3RhbmNl/LWpvYi1pbnRlcnZp/ZXctb25saW5lLXN0/dWR5XzY1MDM2Ni03/ODcwLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    },
    {
      id: 1,
      profileImage: "https://imgs.search.brave.com/csXsfLh1JO7MaEbL-D2HIbgk-O5IujGFZRK9yIxZnMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzI1LmpwZz9z/c2w9MQ",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    },
    {
      id: 1,
      profileImage: "https://imgs.search.brave.com/QUCGGX7nUBJYINHGRyszndVXCVbU8GmQoL0i0D4lIwE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzEwLmpwZz9z/c2w9MQ",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    },
    {
      id: 1,
      profileImage: "https://imgs.search.brave.com/0M93Cj9KEPOwuG8uaecx67yJ4qtySoL7cBE9VOBTXSQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzIzLmpwZz9z/c2w9MQ",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    }
    ,{
      id: 1,
      profileImage: "https://imgs.search.brave.com/EPGw3MnEZYvGTiT708BUsVnXCrY9osa_MRIsFAEVMs4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8vcHJvZmlsZS1w/b3J0cmFpdC1iZWFy/ZGVkLW1hbi13ZWFy/aW5nLWdsYXNzZXNf/MjIyMjI5LTkyMjEu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw",
      name: "CodingLab",
      title: "YouTuber & Blogger",
      socialLinks: [
        { platform: "Facebook", icon: FiFacebook,  url: "#", color: "#1877F2" },
        { platform: "Twitter", icon: SlSocialTwitter, url: "#", color: "#1DA1F2" },
        { platform: "Instagram", icon: IoLogoInstagram ,url: "#", color: "#C13584" },
        { platform: "YouTube", icon: FaYoutube, url: "#", color: "#FF0000" }
      ],
      buttons: ["Subscribe", "Message"],
      stats: [
        { type: "likes", icon: Heart , count: "60.4k" },
        { type: "comments", icon: MessageCircle , count: "20k" },
        { type: "shares", icon: BiShare , count: "12.4k" }
      ]
    }
  ]

  useEffect(() => (
    setArray(profiles)
  ), [])
  
  return (
    <div className='bg-black text-white h-full p-8 grid grid-cols-[repeat(1,266px)] justify-center gap-6 md:grid-cols-[repeat(2,266px)] lg:grid-cols-[repeat(3,266px)] xl:grid-cols-[repeat(4,266px)]'>
      {
        array.map((elem, idx) => {
          return <Card key={idx} details={elem}/>
        })
      }
    </div>
  )
}

export default App
