export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

type TechIcon = {
  title: string
  icon: {
    url: string
    name: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type Concept = {
  id: string
  title: string
}
export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}
export type LandingPagesProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
}
