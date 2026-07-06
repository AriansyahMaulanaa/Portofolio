export interface Translation {
  hud: {
    sector: string
    signal: string
    ind: string
    eng: string
  }
  boot: {
    lines: { text: string; color?: string }[]
    skip: string
    terminal: string
    nav: string
  }
  nav: {
    sections: { id: string; label: string }[]
    access: string
  }
  hero: {
    eyebrow: string
    name1: string
    name2: string
    commander: string
    tagline: string
    ctaMission: string
    ctaChannel: string
    scroll: string
  }
  personnel: {
    eyebrow: string
    title: string
    bio1: string
    bio2: string
    status: string
    statusValue: string
    availability: string
    availabilityValue: string
    location: string
    locationValue: string
    equipment: string
  }
  mission: {
    eyebrow: string
    title: string
    missions: {
      code: string
      title: string
      classification: string
      description: string
      tech: string[]
      status: string
      demo?: string
      repo?: string
    }[]
    viewDemo: string
    source: string
    classification: string
    completed: string
    operational: string
  }
  shipSystems: {
    eyebrow: string
    title: string
    systemHealth: string
    systems: {
      name: string
      icon: string
      health: number
      items: string[]
    }[]
  }
  training: {
    eyebrow: string
    title: string
    institution: string
    major: string
    inProgress: string
    period: string
    periodValue: string
    ipk: string
    ipkValue: string
    semester: string
    semesterValue: string
    status: string
    statusValue: string
    fieldNotes: string
    notes: string
  }
  transmission: {
    eyebrow: string
    title: string
    description: string
    transmittingOn: string
    copyright: string
    systemBuild: string
  }
}
