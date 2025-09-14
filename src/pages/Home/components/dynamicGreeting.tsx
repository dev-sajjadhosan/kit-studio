import { useEffect, useState } from 'react'

export default function DynamicGreeting() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    let message = ''

    if (hour >= 5 && hour < 8) message = "Rise and shine! ☀️"
    else if (hour >= 8 && hour < 12) message = "Time to conquer the morning! 💪"
    else if (hour >= 12 && hour < 14) message = "Lunchtime vibes! 🍽️"
    else if (hour >= 14 && hour < 17) message = "Keep pushing through the afternoon! 🚀"
    else if (hour >= 17 && hour < 19) message = "Evening hustle in progress 🌇"
    else if (hour >= 19 && hour < 22) message = "Relax and unwind 🌙"
    else message = "Late night grind or dreams? 😴"

    setGreeting(message)
  }, [])

  return <h3 className="text-2xl font-light mb-3">{greeting}</h3>
}
