import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { Translation } from '@/i18n/types'
import { en } from '@/i18n/en'
import { id } from '@/i18n/id'

type Lang = 'en' | 'id'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem('lang')
  if (stored === 'en' || stored === 'id') return stored
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    localStorage.setItem('lang', next)
  }, [])

  const t = lang === 'en' ? en : id

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
