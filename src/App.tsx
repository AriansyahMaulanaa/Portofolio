import { useState } from 'react'
import { Starfield } from '@/components/Starfield'
import { HUDFrame } from '@/components/HUDFrame'
import { ShipNavigation } from '@/components/ShipNavigation'
import { BootSequence } from '@/components/BootSequence'
import { HeroSection } from '@/sections/HeroSection'
import { PersonnelSection } from '@/sections/PersonnelSection'
import { MissionArchiveSection } from '@/sections/MissionArchiveSection'
import { ShipSystemsSection } from '@/sections/ShipSystemsSection'
import { TrainingRecordsSection } from '@/sections/TrainingRecordsSection'
import { TransmissionSection } from '@/sections/TransmissionSection'

export default function App() {
  const [booted, setBooted] = useState(false)

  return (
    <>
      {/* Boot sequence overlay */}
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}

      {/* Ambient background */}
      <Starfield />

      {/* Persistent HUD overlays */}
      <HUDFrame />
      <ShipNavigation />

      {/* Main scrollable content */}
      <main
        className="relative"
        style={{
          zIndex: 1,
          opacity: booted ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <HeroSection visible={booted} />
        <PersonnelSection />
        <MissionArchiveSection />
        <ShipSystemsSection />
        <TrainingRecordsSection />
        <TransmissionSection />
      </main>
    </>
  )
}
